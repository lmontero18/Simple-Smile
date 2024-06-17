"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { Moon, Sun, MountainSnow, Ship, Bolt } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ThemeIcons = {
  light: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  dark: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tokyo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  ocean: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  system: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const themeIcons: ThemeIcons = {
  light: Sun,
  dark: Moon,
  tokyo: MountainSnow,
  ocean: Ship,
  system: Bolt,
};

export function ModeToggle() {
  const { theme, setTheme, themes } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string | undefined>(theme);

  useEffect(() => {
    setMounted(true);
    setCurrentTheme(theme);
  }, [theme]);

  const handleThemeChange = (newTheme: string) => {
    setCurrentTheme(newTheme);
    setTheme(newTheme);
  };

  if (!mounted) {
    return null;
  }

  const IconComponent = theme ? themeIcons[theme as keyof ThemeIcons] : Sun;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IconComponent className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme}
            onClick={() => handleThemeChange(theme)}
          >
            {theme}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
