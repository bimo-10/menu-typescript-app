import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Data } from "@/lib/type";

export default function MenuCard({ item }: { item: Data }) {
  return (
    <>
      <Card className="w-96 h-96">
        <CardHeader className="flex items-center justify-center p-0">
          <Image
            src={item.img}
            alt={item.title}
            width={120}
            height={120}
            className="h-52 w-full"
          />
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="rounded-sm px-2 text-white bg-orange-400">
              ${item.price}
            </p>
          </div>
          <CardDescription className="text-justify">
            {item.desc}
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
