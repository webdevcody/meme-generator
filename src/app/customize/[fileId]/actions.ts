"use server";

import { db } from "@/app/db/db";
import { favorites } from "@/app/db/schema";
import { assertAuthenticated } from "@/app/lib/auth-utils";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function toggleFavoriteMemeAction(
  fileId: string,
  filePath: string,
  pathToRevalidate: string
) {
  const userId = await assertAuthenticated();

  const favorite = await db.query.favorites.findFirst({
    where: and(eq(favorites.userId, userId), eq(favorites.memeId, fileId)),
  });

  if (favorite) {
    await db
      .delete(favorites)
      .where(and(eq(favorites.userId, userId), eq(favorites.memeId, fileId)));
  } else {
    await db.insert(favorites).values({
      userId,
      memeId: fileId,
      filePath: filePath,
    });
  }

  revalidatePath(pathToRevalidate);
}
