import { unstable_noStore } from "next/cache";
import { getFavorites } from "./loaders";
import { FavoritesList } from "./favorites-list";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default async function FavoritesPage() {
  unstable_noStore();

  const favorites = await getFavorites();

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Favorites</h1>
      </div>

      {favorites.length === 0 && (
        <Card className="py-8 flex flex-col items-center justify-center gap-4">
          <Image
            src="/empty.svg"
            width="200"
            height="200"
            alt="an empty state image"
          />
          <p>You have not favorited any memes!</p>
          <Button asChild>
            <Link href="/search?q=">Find some Memes</Link>
          </Button>
        </Card>
      )}

      {favorites.length > 0 && <FavoritesList favorites={favorites} />}
    </div>
  );
}
