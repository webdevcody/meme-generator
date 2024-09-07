"use client";

import { Button } from "@/components/ui/button";
import { IKImage, IKUpload } from "imagekitio-next";
import { useState } from "react";
import { urlEndpoint } from "./providers";

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  return (
    <div className="">
      <Button variant={"destructive"}>Click Me</Button>

      {name && (
        <IKImage
          width={300}
          height={500}
          urlEndpoint={urlEndpoint}
          path={name}
          transformation={[{ raw: "l-text,i-hello world,fs-50,l-end" }]}
          alt="Alt text"
        />
      )}

      <div>
        <h2>File upload</h2>
        <IKUpload
          fileName="test-upload.png"
          onError={(error) => {
            console.log("error", error);
          }}
          onSuccess={(response) => {
            setName(response.name);
          }}
        />
      </div>
    </div>
  );
}
