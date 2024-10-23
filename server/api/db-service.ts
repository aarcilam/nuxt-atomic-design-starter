import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "../../db/schema";

export const tables = schema;
const client = postgres(process.env.DATABASE_URL || "", {
  prepare: false,
});
export function useDrizzle() {
  return drizzle(client, { schema });
}

export type User = typeof schema.posts.$inferSelect;
