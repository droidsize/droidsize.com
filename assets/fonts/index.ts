import { Inter as FontSans, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "700"],
});

// export const fontRoboto = Roboto({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-roboto",
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

// export const fontPoppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   variable: "--font-poppins",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

export const fontDroidsize = localFont({
  src: "./Droidsize-Text.woff2",
  variable: "--font-droidsize",
  display: "swap",
});

// export const fontUrban = Urbanist({
//   subsets: ["latin"],
//   variable: "--font-urban",
// })

// export const fontGeist = localFont({
//   src: "./GeistVF.woff2",
//   variable: "--font-geist",
// })
