import localFont from 'next/font/local'

export const rocaTwo = localFont({
  src: [
    {
      path: '../public/fonts/roca-two/Roca-Two-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    // add more weights/styles if you have them
  ],
  variable: '--font-roca-two',  // optional — for CSS variable usage
  display: 'swap'
})
