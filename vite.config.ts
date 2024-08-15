import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import webfontDownload from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), webfontDownload([
    "https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap",
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+JP&family=Syncopate:wght@400;700&family=Zen+Kaku+Gothic+Antique:wght@300;400;500;700;900&display=swap",
  ]),],
})
