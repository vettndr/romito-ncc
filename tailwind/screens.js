const toRem = (strs) => `${Number(strs[0].replace("px", "")) / 16}rem`

module.exports = {
  xs: toRem`512px`,
  sm: toRem`768px`,
  md: toRem`1024px`,
  lg: toRem`1280px`,
  xl: toRem`1440px`,
}
