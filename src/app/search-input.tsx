"use client";

import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";

export function SearchInput() {
  const queryString = useSearchParams();

  return (
    <Input
      name="search"
      type="search"
      defaultValue={queryString.get("q") ?? ""}
      placeholder="Search memes..."
      className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
    />
  );
}
