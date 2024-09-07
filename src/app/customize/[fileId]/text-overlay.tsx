"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";

export function TextOverlay({
  index,
  onUpdate,
}: {
  index: number;
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
        <Label htmlFor={`textOverlay${index}`}>Text Overlay {index}</Label>
        <Input
          id={`textOverlay${index}`}
          onChange={(e) => {
            setTextOverlay(e.target.value);
            onUpdate(e.target.value, xPositionDecimal, yPositionDecimal);
          }}
          value={textOverlay}
        />
      </div>
      <div>
        <Label htmlFor={`text${index}XPosition`}>Text {index} X Position</Label>
        <Slider
          id={`text${index}XPosition`}
          value={[textOverlayXPosition]}
          onValueChange={([v]) => {
            setTextOverlayXPosition(v);
            onUpdate(textOverlay, v / 100, yPositionDecimal);
          }}
        />
      </div>
      <div>
        <Label htmlFor={`text${index}YPosition`}>Text {index} Y Position</Label>
        <Slider
          id={`text${index}YPosition`}
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
