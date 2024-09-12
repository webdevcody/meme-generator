import { unstable_noStore } from "next/cache";
import { ResultsList } from "./results-list";
import { UploadMemeButton } from "./upload-meme-button";
import { imagekit } from "../lib/image-kit";
import { getFavoriteCounts } from "./loaders";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  unstable_noStore();

  const files = await imagekit.listFiles({
    tags: searchParams.q,
  });

  const favoriteCounts = await getFavoriteCounts(
    files.map((file) => file.fileId)
  );

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Search Results</h1>
        <UploadMemeButton />
      </div>

      <ResultsList files={files} counts={favoriteCounts} />
    </div>
  );
}
