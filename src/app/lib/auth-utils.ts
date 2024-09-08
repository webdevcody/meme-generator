import { auth } from "@/auth";

export async function assertAuthenticated() {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const userId = session.user?.id;

  if (!userId) {
    throw new Error("User ID not found");
  }

  return userId;
}
