// vite.config.ts
import { defineConfig } from "file:///D:/Project/example/Vite-TS-template/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Project/example/Vite-TS-template/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import AutoImport from "file:///D:/Project/example/Vite-TS-template/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/Project/example/Vite-TS-template/node_modules/unplugin-vue-components/dist/vite.mjs";
import Unocss from "file:///D:/Project/example/Vite-TS-template/node_modules/unocss/dist/vite.mjs";
import { createRequire } from "node:module";
var __vite_injected_original_dirname = "D:\\Project\\example\\Vite-TS-template";
var __vite_injected_original_import_meta_url = "file:///D:/Project/example/Vite-TS-template/vite.config.ts";
var require2 = createRequire(__vite_injected_original_import_meta_url);
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/,
        // .vue
        /\.md$/
        // .md
      ],
      imports: ["vue", "vue-router"],
      eslintrc: {
        enabled: false
      },
      dts: "./auto-imports.d.ts"
    }),
    Components({
      dts: "./components.d.ts"
    }),
    Unocss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0XFxcXGV4YW1wbGVcXFxcVml0ZS1UUy10ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvamVjdFxcXFxleGFtcGxlXFxcXFZpdGUtVFMtdGVtcGxhdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2plY3QvZXhhbXBsZS9WaXRlLVRTLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnIC8vIFx1ODFFQVx1NTJENVx1NUMwRVx1NTE2NSBob29rXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJyAvLyBcdTgxRUFcdTUyRDVcdTVGMTVcdTUxNjUgY29tcG9uZW50c1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSc7XG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xuY29uc3QgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUoIGltcG9ydC5tZXRhLnVybCApO1xuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgL1xcLlt0al1zeD8kLywgLy8gLnRzLCAudHN4LCAuanMsIC5qc3hcbiAgICAgICAgL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxuICAgICAgICAvXFwubWQkLywgLy8gLm1kXG4gICAgICBdLFxuICAgICAgaW1wb3J0czogWyd2dWUnLCd2dWUtcm91dGVyJ10sXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBkdHM6ICcuL2F1dG8taW1wb3J0cy5kLnRzJyxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGR0czogJy4vY29tcG9uZW50cy5kLnRzJyxcbiAgICB9KSxcbiAgICBVbm9jc3MoKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuICAgIH1cbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1TLFNBQVMsb0JBQW9CO0FBQ2hVLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBQ25CLFNBQVMscUJBQXFCO0FBTjlCLElBQU0sbUNBQW1DO0FBQTRJLElBQU0sMkNBQTJDO0FBT3RPLElBQU1BLFdBQVUsY0FBZSx3Q0FBZ0I7QUFFL0MsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQTtBQUFBLFFBQ0E7QUFBQSxRQUFVO0FBQUE7QUFBQSxRQUNWO0FBQUE7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTLENBQUMsT0FBTSxZQUFZO0FBQUEsTUFDNUIsVUFBVTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFsicmVxdWlyZSJdCn0K
