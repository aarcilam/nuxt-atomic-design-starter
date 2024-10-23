import { posts } from "~/db/schema";
import { useDrizzle } from "./db-service";


export default defineEventHandler(async () => {
  try {
    const response = await useDrizzle().select().from(posts);
    return { "posts" : response}
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message,
    });
  }
});