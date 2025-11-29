import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: './productos_1.html',
                carrito: './carrito_1.html',
                pago: './pago_1.html',
                confirmacion: './confirmacion_1.html'
            }
        }
    },
    server: {
        port: 3000,
        open: '/productos_1.html'
    }
})
