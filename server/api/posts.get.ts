import { posts } from "~/db/schema";
import db from "./db-service";


export default defineEventHandler(async () => {
  try {
    const response = db.select().from(posts);
    return { "users" : response}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});