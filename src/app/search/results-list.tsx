"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export function ResultsList({
  files,
  counts,
}: {
  files: FileObject[];
  counts: {
    memeId: string;
    count: number;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {files.map((file) => (
        <Card key={file.fileId}>
          <CardHeader>
            <CardTitle className="flex justify-between">
              <div>{file.customMetadata?.displayName ?? file.name} </div>
              <div className="flex gap-1 items-center">
                <HeartFilledIcon />
                {counts.find((c) => c.memeId === file.fileId)?.count ?? 0}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <IKImage
              key={file.fileId}
              path={file.filePath}
              alt={file.name}
              width={300}
              height={300}
            />
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`/customize/${file.fileId}`}>Customize</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
