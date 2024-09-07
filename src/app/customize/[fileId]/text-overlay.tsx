"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

export function TextOverlay({
  onUpdate,
}: {
  onUpdate: (text: string, x: number, y: number) => void;
}) {
  const [textOverlay, setTextOverlay] = useState("");
  const [textOverlayXPosition, setTextOverlayXPosition] = useState(0);
  const [textOverlayYPosition, setTextOverlayYPosition] = useState(0);

  const xPositionDecimal = textOverlayXPosition / 100;
  const yPositionDecimal = textOverlayYPosition / 100;

  return (
    <Card className="p-4 space-y-4">
      <div>
        <Label htmlFor="textOverlay1">Text Overlay 1</Label>
        <Input
          id="textOverlay1"
          onChange={(e) => {
            setTextOverlay(e.target.value);
            onUpdate(e.target.value, xPositionDecimal, yPositionDecimal);
          }}
          value={textOverlay}
        />
      </div>
      <div>
        <Label htmlFor="text1XPosition">Text 1 X Position</Label>
        <Slider
          id="text1XPosition"
          value={[textOverlayXPosition]}
          onValueChange={([v]) => {
            setTextOverlayXPosition(v);
            onUpdate(textOverlay, v / 100, yPositionDecimal);
          }}
        />
      </div>
      <div>
        <Label htmlFor="text1YPosition">Text 1 Y Position</Label>
        <Slider
          id="text1YPosition"
          value={[textOverlayYPosition]}
          onValueChange={([v]) => {
            setTextOverlayYPosition(v);
            onUpdate(textOverlay, xPositionDecimal, v / 100);
          }}
        />
      </div>
    </Card>
  );
}
