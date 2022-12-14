import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  plugins:[require('@tailwindcss/forms')]
  ,theme:{
    extend:{
      fontFamily:{
        latoRegular: "Lato-Regular",
        latoBold: "Lato-Bold",
      }
    }
  }
})