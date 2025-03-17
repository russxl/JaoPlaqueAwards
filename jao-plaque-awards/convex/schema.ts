import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  messages: defineTable({
    content: v.string(),
    role: v.union(v.literal("user"), v.literal("assistant")),
    createdAt: v.string(),
    isComplete: v.boolean(),
  }).index("by_createdAt", ["createdAt"]),
});
