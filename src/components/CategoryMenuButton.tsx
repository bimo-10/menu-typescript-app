import React from "react";
import { Button } from "./ui/button";

export default function CategoryMenuButton({
  categories,
  filterItems,
}: {
  categories: string[];
  filterItems: (category: string) => void;
}) {
  return (
    <div className="flex gap-2">
      {categories.map((category) => {
        return (
          <Button
            key={category}
            size="sm"
            className="bg-orange-400 hover:bg-orange-500"
            onClick={() => filterItems(category)}
          >
            {category}
          </Button>
        );
      })}
    </div>
  );
}
