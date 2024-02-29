import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from "./schema/auth"
import { env } from "@/lib/env.mjs";

export const db = drizzle(sql, {
  logger: env.NODE_ENV === "development" ?? false,
  schema
})
