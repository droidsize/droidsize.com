import localFont from "next/font/local";

export const fontSans = localFont({
  src: [
    {
      path: "./Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const fontJakarta = localFont({
  src: [
    {
      path: "./Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Inter-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-jakarta",
});

export const fontDroidsize = localFont({
  src: "./Droidsize-Text.woff2",
  variable: "--font-droidsize",
  display: "swap",
});
