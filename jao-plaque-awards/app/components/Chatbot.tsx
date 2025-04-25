"use client";

import { useState, useRef, useEffect } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback } from "@/app/components/ui/avatar";
import { X, Trash2 } from "lucide-react";

interface ChatbotProps {
  onClose: () => void;
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingContent, setStreamingContent] = useState("");
  const [streamingMessageId, setStreamingMessageId] = useState<Id<"messages"> | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const messages = useQuery(api.chat.getMessages) || [];
  const addMessage = useMutation(api.chat.addMessage);
  const updateMessage = useMutation(api.chat.updateMessage);
  const deleteAllMessages = useMutation(api.chat.deleteAllMessages);

  // Improved scroll to bottom effect
  useEffect(() => {
    const scrollToBottom = () => {
      if (scrollAreaRef.current) {
        // Find the Radix ScrollArea viewport element
        const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollContainer) {
          scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
      }
    };

    // Scroll on messages change
    scrollToBottom();

    // Also scroll when streaming content changes
    if (streamingContent) {
      scrollToBottom();
    }
  }, [messages, streamingContent]);

  // Add effect to check for reset flag in localStorage
  useEffect(() => {
    const shouldReset = localStorage.getItem('chatbot_reset');
    if (shouldReset === 'true') {
      deleteAllMessages();
      localStorage.setItem('chatbot_reset', 'false');
    }
  }, [deleteAllMessages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setIsLoading(true);
    setMessage(""); // Clear input immediately for better UX

    try {
      await addMessage({ 
        content: userMessage,
        role: "user",
        isComplete: true
      });

      // Create placeholder for AI message
      const aiMessage = await addMessage({
        content: "",
        role: "assistant",
        isComplete: false
      });

      // Store the ID of the message we're currently streaming
      setStreamingMessageId(aiMessage);

      // Fetch AI response
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No reader available");

      let accumulatedResponse = "";
      
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          // Decode and accumulate the streaming response
          const text = new TextDecoder().decode(value);
          accumulatedResponse += text;
          setStreamingContent(accumulatedResponse);
        }

        // Final update with the complete message - only using fields from your API
        await updateMessage({
          id: aiMessage,
          content: accumulatedResponse,
          isComplete: true
        });
        
      } finally {
        reader.releaseLock();
      }

    } catch (error) {
      console.error("Chat Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      alert(`Failed to get AI response: ${errorMessage}`);
    } finally {
      setIsLoading(false);
      setStreamingContent("");
      setStreamingMessageId(null);
    }
  };

  const handleReset = async () => {
    try {
      setIsLoading(true);
      await deleteAllMessages();
      
      // Clear local states
      setStreamingContent("");
      setStreamingMessageId(null);
      localStorage.setItem('chatbot_reset', 'true');
      
    } catch (error) {
      console.error("Reset Error:", error);
      alert("Failed to reset chat");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[400px] h-[600px] flex flex-col relative z-50 shadow-lg">
      <CardHeader className="border-b p-3 flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold">AI Chat Assistant</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleReset}
            className="h-8 w-8 p-0"
            title="Reset Chat"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <ScrollArea 
        ref={scrollAreaRef} 
        className="flex-1 px-4 overflow-y-auto"
        style={{ height: 'calc(100% - 120px)' }} // Adjust for header/footer
      >
        <CardContent className="pt-4 min-h-[calc(100vh-16rem)]">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className={`mb-4 flex items-start gap-2 ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback 
                  className="bg-muted w-full h-full flex items-center justify-center text-sm font-medium"
                >
                  {msg.role === 'user' ? 'U' : 'B'}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex flex-col gap-2 max-w-[70%]">
                {msg.isComplete && (
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.role === "user"
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted'
                    }`}
                  >
                    {msg.content}
                  </div>
                )}
                
                {!msg.isComplete && streamingMessageId && msg._id === streamingMessageId && (
                  <div className="inline-block p-3 rounded-lg bg-muted">
                    {streamingContent}
                    <span className="ml-1 animate-pulse">▍</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </CardContent>
      </ScrollArea>

      <div className="border-t p-4 mt-auto">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isLoading || !message.trim()}
            variant={isLoading ? "secondary" : "default"}
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </form>
      </div>
    </Card>
  );
}

