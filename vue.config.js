// vue.config.js
import { fileURLToPath, URL } from 'node:url'; // Import necessary utilities

import path from 'path'; // For path manipulation (still often used)
import { defineConfig } from '@vue/cli-service'; // If you're using defineConfig

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// If you're using defineConfig (recommended for newer Vue CLI versions)
export default defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  }
});

// If you're not using defineConfig (older Vue CLI versions)
// module.exports = {
//   configureWebpack: {
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, 'src')
//       }
//     }
//   }
// };