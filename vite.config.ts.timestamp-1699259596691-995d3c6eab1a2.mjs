// vite.config.ts
import { defineConfig } from "file:///D:/ryder159159/project/test/Vite-TS-template/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/ryder159159/project/test/Vite-TS-template/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import path from "path";
import AutoImport from "file:///D:/ryder159159/project/test/Vite-TS-template/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/ryder159159/project/test/Vite-TS-template/node_modules/unplugin-vue-components/dist/vite.mjs";
import Unocss from "file:///D:/ryder159159/project/test/Vite-TS-template/node_modules/unocss/dist/vite.mjs";
import ckeditor5 from "file:///D:/ryder159159/project/test/Vite-TS-template/node_modules/@ckeditor/vite-plugin-ckeditor5/dist/index.mjs";
import { createRequire } from "node:module";
var __vite_injected_original_dirname = "D:\\ryder159159\\project\\test\\Vite-TS-template";
var __vite_injected_original_import_meta_url = "file:///D:/ryder159159/project/test/Vite-TS-template/vite.config.ts";
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
    Unocss(),
    ckeditor5({ theme: require2.resolve("@ckeditor/ckeditor5-theme-lark") })
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxyeWRlcjE1OTE1OVxcXFxwcm9qZWN0XFxcXHRlc3RcXFxcVml0ZS1UUy10ZW1wbGF0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccnlkZXIxNTkxNTlcXFxccHJvamVjdFxcXFx0ZXN0XFxcXFZpdGUtVFMtdGVtcGxhdGVcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3J5ZGVyMTU5MTU5L3Byb2plY3QvdGVzdC9WaXRlLVRTLXRlbXBsYXRlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnIC8vIFx1ODFFQVx1NTJENVx1NUMwRVx1NTE2NSBob29rXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnIC8vIFx1ODFFQVx1NTJENVx1NUYxNVx1NTE2NSBjb21wb25lbnRzXHJcbmltcG9ydCBVbm9jc3MgZnJvbSAndW5vY3NzL3ZpdGUnO1xyXG5pbXBvcnQgY2tlZGl0b3I1IGZyb20gJ0Bja2VkaXRvci92aXRlLXBsdWdpbi1ja2VkaXRvcjUnO1xyXG5pbXBvcnQgeyBjcmVhdGVSZXF1aXJlIH0gZnJvbSAnbm9kZTptb2R1bGUnO1xyXG5jb25zdCByZXF1aXJlID0gY3JlYXRlUmVxdWlyZSggaW1wb3J0Lm1ldGEudXJsICk7XHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XHJcbiAgICAgICAgL1xcLnZ1ZSQvLCAvXFwudnVlXFw/dnVlLywgLy8gLnZ1ZVxyXG4gICAgICAgIC9cXC5tZCQvLCAvLyAubWRcclxuICAgICAgXSxcclxuICAgICAgaW1wb3J0czogWyd2dWUnLCd2dWUtcm91dGVyJ10sXHJcbiAgICAgIGVzbGludHJjOiB7XHJcbiAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICAgIGR0czogJy4vYXV0by1pbXBvcnRzLmQudHMnLFxyXG4gICAgfSksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgZHRzOiAnLi9jb21wb25lbnRzLmQudHMnLFxyXG4gICAgfSksXHJcbiAgICBVbm9jc3MoKSxcclxuICAgIGNrZWRpdG9yNSggeyB0aGVtZTogcmVxdWlyZS5yZXNvbHZlKCAnQGNrZWRpdG9yL2NrZWRpdG9yNS10aGVtZS1sYXJrJyApIH0gKVxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJylcclxuICAgIH1cclxuICB9LFxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdVLFNBQVMsb0JBQW9CO0FBQzdWLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUN0QixTQUFTLHFCQUFxQjtBQVA5QixJQUFNLG1DQUFtQztBQUFnSyxJQUFNLDJDQUEyQztBQVExUCxJQUFNQSxXQUFVLGNBQWUsd0NBQWdCO0FBRS9DLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFBVTtBQUFBO0FBQUEsUUFDVjtBQUFBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxDQUFDLE9BQU0sWUFBWTtBQUFBLE1BQzVCLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxXQUFXO0FBQUEsTUFDVCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxVQUFXLEVBQUUsT0FBT0EsU0FBUSxRQUFTLGdDQUFpQyxFQUFFLENBQUU7QUFBQSxFQUM1RTtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbInJlcXVpcmUiXQp9Cg==
