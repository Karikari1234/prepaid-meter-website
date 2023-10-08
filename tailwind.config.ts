import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00513D",
        "green-light": "#00CC99",
        "green-deep": "#01382a",
      },
      gridTemplateColumns: {
        footer: "300px repeat(4,1fr)",
        hero: "1fr minmax(400px,1fr)",
      },
    },
  },
  plugins: [],
};
export default config;
