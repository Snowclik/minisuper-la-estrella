import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: './index.html',
                carrito: './carrito.html',
                pago: './pago.html',
                confirmacion: './confirmacion.html'
            }
        }
    },
    server: {
        port: 3000,
        open: '/index.html'
    }
})
