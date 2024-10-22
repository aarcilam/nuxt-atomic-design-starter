import { type InferModel } from "drizzle-orm";
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

export const posts = pgTable('posts', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
})


export type User = InferModel<typeof posts>;
export type InsertUser = InferModel<typeof posts, "insert">;
