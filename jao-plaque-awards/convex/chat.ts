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