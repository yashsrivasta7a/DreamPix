import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_') // Load VITE_ env variables

  return {
    plugins: [tailwindcss(), react()],
    define: {
      'process.env': env, // Ensure env variables are available
    },
    envPrefix: 'VITE_', // Only expose variables with "VITE_"
  }
})
