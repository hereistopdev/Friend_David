// vite.config.ts
import react from "file:///D:/Projects/Dustin/bsodium.fr-main/node_modules/@vitejs/plugin-react/dist/index.js";
import { defineConfig } from "file:///D:/Projects/Dustin/bsodium.fr-main/node_modules/vite/dist/node/index.js";
import svgr from "file:///D:/Projects/Dustin/bsodium.fr-main/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react"
    }),
    svgr()
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@public", replacement: "/public" }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern"
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxEdXN0aW5cXFxcYnNvZGl1bS5mci1tYWluXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0c1xcXFxEdXN0aW5cXFxcYnNvZGl1bS5mci1tYWluXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0cy9EdXN0aW4vYnNvZGl1bS5mci1tYWluL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBqc3hJbXBvcnRTb3VyY2U6IFwiQGVtb3Rpb24vcmVhY3RcIixcbiAgICB9KSxcbiAgICBzdmdyKCksXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczogW1xuICAgICAgeyBmaW5kOiBcIkBcIiwgcmVwbGFjZW1lbnQ6IFwiL3NyY1wiIH0sXG4gICAgICB7IGZpbmQ6IFwiQHB1YmxpY1wiLCByZXBsYWNlbWVudDogXCIvcHVibGljXCIgfSxcbiAgICBdLFxuICB9LFxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIGFwaTogXCJtb2Rlcm5cIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnUyxPQUFPLFdBQVc7QUFDbFQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLGlCQUFpQjtBQUFBLElBQ25CLENBQUM7QUFBQSxJQUNELEtBQUs7QUFBQSxFQUNQO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxFQUFFLE1BQU0sS0FBSyxhQUFhLE9BQU87QUFBQSxNQUNqQyxFQUFFLE1BQU0sV0FBVyxhQUFhLFVBQVU7QUFBQSxJQUM1QztBQUFBLEVBQ0Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILHFCQUFxQjtBQUFBLE1BQ25CLE1BQU07QUFBQSxRQUNKLEtBQUs7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
