import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Titillium Web",
    "Helvetica Neue",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: ["Georgia", "serif"],
  googleFonts: [
    {
      name: "Titillium Web",
      styles: ["700"]
    }
  ]
})

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
