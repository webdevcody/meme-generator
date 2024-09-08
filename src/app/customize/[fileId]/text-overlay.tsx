"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { TwitterPicker } from "react-color";

export function TextOverlay({
  index,
  onUpdate,
}: {
  index: number;
  onUpdate: (
    index: number,
    text: string,
    x: number,
    y: number,
    bgColor?: string
  ) => void;
}) {
  const [textOverlay, setTextOverlay] = useState("");
  const [textOverlayXPosition, setTextOverlayXPosition] = useState(0);
  const [textOverlayYPosition, setTextOverlayYPosition] = useState(0);
  const [applyTextBackground, setApplyTextBackground] = useState(false);
  const [textBgColor, setTextBgColor] = useState("#FFFFFF");

  const xPositionDecimal = textOverlayXPosition / 100;
  const yPositionDecimal = textOverlayYPosition / 100;
  const bgColor = applyTextBackground
    ? textBgColor.replace("#", "")
    : undefined;

  useEffect(() => {
    onUpdate(
      index,
      textOverlay || " ",
      xPositionDecimal,
      yPositionDecimal,
      bgColor
    );
  }, [
    index,
    textOverlay,
    xPositionDecimal,
    yPositionDecimal,
    bgColor,
    onUpdate,
  ]);

  return (
    <Card className="p-4 space-y-4">
      <div className="flex justify-between gap-8">
        <div className="flex-grow">
          <Label htmlFor={`textOverlay${index}`}>Text Overlay {index}</Label>
          <Input
            id={`textOverlay${index}`}
            onChange={(e) => {
              setTextOverlay(e.target.value);
            }}
            value={textOverlay}
          />
        </div>
        <div className="flex items-center space-x-2 flex-col space-y-4">
          <div className="flex gap-4">
            <Checkbox
              checked={applyTextBackground}
              onCheckedChange={(v) => {
                setApplyTextBackground(v as boolean);
              }}
              id="terms"
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Apply Text Background
            </label>
          </div>

          {applyTextBackground && (
            <TwitterPicker
              color={textBgColor}
              onChange={(value) => {
                setTextBgColor(value.hex);
              }}
            />
          )}

          {textBgColor}
        </div>
      </div>
      <div>
        <Label htmlFor={`text${index}XPosition`}>Text {index} X Position</Label>
        <Slider
          id={`text${index}XPosition`}
          value={[textOverlayXPosition]}
          onValueChange={([v]) => {
            setTextOverlayXPosition(v);
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
          }}
        />
      </div>
    </Card>
  );
}
