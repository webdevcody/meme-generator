"use client";

import { Button } from "@/components/ui/button";
/* eslint-disable @next/next/no-img-element */
import { IKImage, IKUpload, ImageKitProvider } from "imagekitio-next";
import { useState } from "react";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/auth");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (err) {
    const error = err as Error;
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Home() {
  const [name, setName] = useState<string | null>(null);

  return (
    <div className="">
      <Button variant={"destructive"}>Click Me</Button>
      <ImageKitProvider
        publicKey={publicKey}
        urlEndpoint={urlEndpoint}
        authenticator={authenticator}
      >
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
      </ImageKitProvider>
    </div>
  );
}
