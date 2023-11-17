import { defineConfig } from '@unocss/vite';
import presetUno from '@unocss/preset-uno';

// 先不使用 presetAttributify
export default defineConfig({
  exclude: ['node_modules', 'dist', '.git', 'public'],
  presets: [
    presetUno(),
  ],
  theme: {
    colors: {
      brand: {
        1: '#FFE871',
        2: '#FFF99F',
      },
      gray: {
        1: '#333333',
        2: '#4f4f4f',
        3: '#828282',
        4: '#BDBDBD',
        5: '#e0e0e0'
      },
      line: '#C2D7EA'
    },
  }
})