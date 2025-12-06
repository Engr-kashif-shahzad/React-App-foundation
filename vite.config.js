import { defineConfig } from 'vite';
import react  from '@vitejs/plugin-react';

export default defineConfig({
  plugins:[react()],
  resolve: {
    alias: {
      '@':'src' , // Alias '@' to the 'src' directory
      // Components: '/src/componets',
    },
  },
});



// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
