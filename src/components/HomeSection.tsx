"use client";

import React, { useState } from "react";
import TitleHeader from "./TitleHeader";
import CategoryMenuButton from "./CategoryMenuButton";
import MenuCards from "./MenuCards";

import { Data } from "@/lib/type";
import { menu } from "@/lib/data";

const allCategories: string[] = [
  "all",
  ...Array.from(new Set(menu.map((item: Data) => item.category))),
];

export default function HomeSection() {
  const [data, setData] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: string) => {
    if (category === "all") {
      setData(menu);
      return;
    }

    const newItems = menu.filter((item: Data) => item.category === category);
    setData(newItems);
  };

  return (
    <section className="flex min-h-screen flex-col items-center p-24 gap-12">
      <TitleHeader />
      <CategoryMenuButton categories={categories} filterItems={filterItems} />
      <MenuCards data={data} />
    </section>
  );
}
