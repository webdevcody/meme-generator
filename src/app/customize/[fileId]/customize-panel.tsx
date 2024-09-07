/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { urlEndpoint } from "@/app/providers";
import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { useState } from "react";
import { TextOverlay } from "./text-overlay";
import { Button } from "@/components/ui/button";

export function CustomizePanel({
  file,
}: {
  file: Pick<FileObject, "filePath" | "name">;
}) {
  const [transformations, setTransformations] = useState<
    Record<string, { raw: string }>
  >({});
  const [numberOfOverlays, setNumberOfOverlays] = useState(1);

  const transformationsArray = Object.values(transformations);

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="space-y-4">
        {new Array(numberOfOverlays).fill("").map((_, index) => (
          <TextOverlay
            key={index}
            index={index + 1}
            onUpdate={(text, x, y) => {
              setTransformations((current) => ({
                ...current,
                [`text${index}`]: {
                  raw: `l-text,i-${text ?? " "},fs-50,ly-bw_mul_${y.toFixed(
                    2
                  )},lx-bw_mul_${x.toFixed(2)},l-end`,
                },
              }));
            }}
          />
        ))}

        <div className="flex gap-4">
          <Button onClick={() => setNumberOfOverlays(numberOfOverlays + 1)}>
            Add Another Overlay
          </Button>

          <Button
            variant={"destructive"}
            onClick={() => {
              setNumberOfOverlays(numberOfOverlays - 1);
              const lastIndex = numberOfOverlays - 1;
              setTransformations((cur) => {
                const newCur = { ...cur };
                delete newCur[`text${lastIndex}`];
                return newCur;
              });
            }}
          >
            Remove Last
          </Button>
        </div>
      </div>

      <IKImage
        path={file.filePath}
        urlEndpoint={urlEndpoint}
        alt={file.name}
        transformation={transformationsArray}
      />
    </div>
  );
}
