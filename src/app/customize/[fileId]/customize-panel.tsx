"use client";

import { urlEndpoint } from "@/app/providers";
import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { useState } from "react";
import { TextOverlay } from "./text-overlay";

export function CustomizePanel({
  file,
}: {
  file: Pick<FileObject, "filePath" | "name">;
}) {
  const [transformations, setTransformations] = useState<
    Record<string, { raw: string }>
  >({});

  const transformationsArray = Object.values(transformations);

  return (
    <div className="grid grid-cols-2 gap-8">
      <form className="space-y-4">
        <TextOverlay
          onUpdate={(text, x, y) => {
            setTransformations((current) => ({
              ...current,
              ["text1"]: {
                raw: `l-text,i-${text ?? " "},fs-50,ly-bw_mul_${y.toFixed(
                  2
                )},lx-bw_mul_${x.toFixed(2)},l-end`,
              },
            }));
          }}
        />
        <TextOverlay
          onUpdate={(text, x, y) => {
            setTransformations((current) => ({
              ...current,
              ["text2"]: {
                raw: `l-text,i-${text ?? " "},fs-50,ly-bw_mul_${y.toFixed(
                  2
                )},lx-bw_mul_${x.toFixed(2)},l-end`,
              },
            }));
          }}
        />
      </form>

      <IKImage
        path={file.filePath}
        urlEndpoint={urlEndpoint}
        alt={file.name}
        transformation={transformationsArray}
      />
    </div>
  );
}
