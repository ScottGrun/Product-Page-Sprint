export const COLORS = {
  primary: '#FF7E1B',
  secondary: '#1D2026',
  grey: {
    900: '#69707D',
    700: '#B6BCC8',
    500: '#E4E9F2',
    300: '#F6F8FD'
  },
  white: '#FFFFFF'
}

export const FONTS = {
  sans: "'Kumbh Sans', sans-serif",
}

export const FONT_WEIGHTS = {
  regular: '400',
  bold: '700'
}

export const FONT_SIZES ={
  htmlFontSize: 16,
}

export const BREAKPOINTS = {
	mobile: 500,
	tablet: 768,
	laptop: 1110,
	xl: 1440,
};

export const MEDIA_QUERIES = {
	phoneAndUp: `(min-width: ${BREAKPOINTS.mobile / FONT_SIZES.htmlFontSize}rem)`,
	tabletAndUp: `(min-width: ${BREAKPOINTS.tablet / FONT_SIZES.htmlFontSize}rem)`,
	laptopAndUp: `(min-width: ${BREAKPOINTS.laptop / FONT_SIZES.htmlFontSize}rem)`,
	xlAndUp: `(min-width: ${BREAKPOINTS.xl / FONT_SIZES.htmlFontSize}rem)`,
};



