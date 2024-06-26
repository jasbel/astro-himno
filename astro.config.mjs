import { defineConfig } from 'astro/config';
import solidJs from "@astrojs/solid-js";
import playformCompress from "@playform/compress";
import playformInline from "@playform/inline";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), playformInline(), playformCompress(), react(), tailwind()]
});