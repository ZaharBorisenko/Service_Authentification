import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import React from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2 w-full">
      <h1 className={cn("text-3xl font-semibold", font.className)}>Auth</h1>
      <p className="text-gray-500">{label}</p>
    </div>
  );
};
