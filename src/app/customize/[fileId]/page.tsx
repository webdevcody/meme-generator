import { imagekit } from "@/app/lib/image-kit";
import { unstable_noStore } from "next/cache";
import { CustomizePanel } from "./customize-panel";

export default async function CustomizePage({
  params,
}: {
  params: { fileId: string };
}) {
  unstable_noStore();

  const file = await imagekit.getFileDetails(params.fileId);

  return (
    <div className="container mx-auto space-y-8 py-8 px-4">
      <CustomizePanel
        file={{
          filePath: file.filePath,
          name: file.name,
        }}
      />
    </div>
  );
}
