const toRem = (strs) => `${Number(strs[0].replace("px", "")) / 16}rem`

module.exports = toRem
