// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export const content = [
  // ...
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      custom: ["Inter", "sans-serif"],
    },
  },
};
export const darkMode = "class";
export const plugins = [nextui()];
