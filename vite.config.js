// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import glsl from 'vite-plugin-glsl';

export default {
    root: 'src/',
    publicDir: '../public/',
    base: './',
    server:
    {
        host: true, // Open to local network and display URL
    },
    build:
    {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
    plugins: [
        glsl()
    ]
}
