import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
    args: {},
    handler: async (ctx) => {
        const tasks = await ctx.db.query("tasks").collect();
        return tasks.map((task) => ({ ...task, assigner: "tom" }));
    },
});

export const update = mutation({
    args: {
        id: v.id("tasks"),          
        updates: v.object({           
            text: v.optional(v.string()),
            isCompleted: v.optional(v.boolean()),
        }),
    },
    handler: async (ctx, { id, updates }) => {
        await ctx.db.patch(id, updates);
    },
});
