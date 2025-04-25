import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getMessages = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("messages")
      .withIndex("by_createdAt") // Show messages in chronological order
      .collect();
  },
});

export const addMessage = mutation({
  args: { 
    content: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")),
    isComplete: v.boolean()
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("messages", {
      content: args.content,
      role: args.role,
      createdAt: new Date().toISOString(),
      isComplete: args.isComplete
    });
  },
});

export const updateMessage = mutation({
  args: { 
    id: v.id("messages"),  // Fixed the typo here
    content: v.string(),
    isComplete: v.boolean()
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, {
      content: args.content,
      isComplete: args.isComplete
    });
  },
});


export const deleteMessage = mutation({
  args: { id: v.id("messages") },
  handler: async (ctx, args) => {
    const { id } = args;
    
    // Check if message exists before deleting
    const message = await ctx.db.get(args.id);
    if (!message) {
      return; // Silently skip if message doesn't exist
    }
    
    await ctx.db.delete(id);
  },
});

export const deleteAllMessages = mutation({
  args: {},
  handler: async (ctx) => {
    const messages = await ctx.db
      .query("messages")
      .collect();
    
    for (const message of messages) {
      await ctx.db.delete(message._id);
    }
    return true;
  },
});