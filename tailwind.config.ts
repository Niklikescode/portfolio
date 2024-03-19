import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    screens: {
      sm: "640px", // phones
      md: "768px", // tablets
      lg: "1024px", // small laptops
      xl: "1280px", // larger laptops and desktops
      "2xl": "1536px", // extra large screens
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  
  plugins: [require("tailwind-scrollbar")],
};
export default config;

// this is the tailwind.config.ts file that is used to configure the tailwindcss library. This file is used to extend the default tailwindcss configuration and add custom styles and plugins. The content array is used to specify the files that tailwindcss should look for when scanning for classes to generate styles for. The theme object is used to extend the default tailwindcss theme and add custom styles. The plugins array is used to add custom plugins to tailwindcss. In this case, the tailwind-scrollbar plugin is added to add custom scrollbar styles. The config object is then exported as the default export of the file. This file is then used by tailwindcss to generate styles for the project.