import React from "react";

import MenuCard from "./MenuCard";
import { Data } from "@/lib/type";

export default function MenuCards({ data }: { data: Data[] }) {
  return (
    <section className="flex justify-center items-center gap-8 flex-wrap">
      {data.map((item) => {
        return <MenuCard key={item.id} item={item} />;
      })}
    </section>
  );
}
