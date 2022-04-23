const breakpoints = [1024, 1280]
breakpoints.mobile = breakpoints[0]
breakpoints.desktop = breakpoints[1]

export const forMobile = `@media (max-width: ${breakpoints.mobile - 1}px)`
export const forDesktop = `@media (min-width: ${breakpoints.mobile}px)`

export default breakpoints
