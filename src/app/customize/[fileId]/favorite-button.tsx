import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toggleFavoriteMemeAction } from "./actions";
import { HeartFilledIcon } from "@radix-ui/react-icons";

export function FavoriteButton({
  isFavorited,
  fileId,
  filePath,
  pathToRevalidate,
}: {
  isFavorited: boolean;
  fileId: string;
  filePath: string;
  pathToRevalidate: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <form
            action={toggleFavoriteMemeAction.bind(
              null,
              fileId,
              filePath,
              pathToRevalidate
            )}
          >
            <Button type="submit" variant="outline">
              {isFavorited ? <HeartFilledIcon /> : <Heart />}
            </Button>
          </form>
        </TooltipTrigger>
        <TooltipContent>
          <p>{isFavorited ? "Unfavorite Meme" : "Favorite Meme"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
