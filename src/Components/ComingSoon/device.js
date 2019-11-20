const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1366px',
  laptopL: '1920px',
  desktop: '2560px',
}

export const device = Object.keys(size).reduce((acc, key) => {
  acc[key] = style => `
      @media (min-width: ${size[key]}) {
        ${style};
      }
    `
  return acc
}, {})
