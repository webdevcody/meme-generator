"use client";

import { FileObject } from "imagekit/dist/libs/interfaces";
import { IKImage } from "imagekitio-next";
import { urlEndpoint } from "../providers";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ResultsList({ files }: { files: FileObject[] }) {
  console.log(files);

  return (
    <div className="grid grid-cols-3 gap-8">
      {files.map((file) => (
        <Card key={file.fileId}>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <IKImage
              key={file.fileId}
              path={file.filePath}
              urlEndpoint={urlEndpoint}
              alt={file.name}
              width={300}
              height={300}
            />
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
