/** @type {import('tailwindcss').Config} */
import flowbitePlugin from "flowbite/plugin";

const tailwindConfig = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ivory: "#F5F5DC", // Bege Marfim
        chocolate: "#4A2C2A", // Marrom Chocolate Amargo
        sage: "#B2AC88", // Verde Sálvia Suave
        gold: "#D4AF37", // Dourado Metálico
        rose: "#D8C0C0", // Rosa Chá
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Montserrat", "sans-serif"],
        script: ["Great Vibes", "cursive"],
      },
    },
  },
  plugins: [flowbitePlugin],
};

export default tailwindConfig;
// Agora utilize as cores padrão do TailwindCSS nas suas classes, por exemplo: bg-blue-500, text-yellow-400, bg-zinc-50, etc.
