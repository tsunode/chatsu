import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import type { AppProps } from "next/app";

const poppins = Poppins({ weight: ["400", "500", "800"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Component className={`${poppins.className} bg-dark-1`} {...pageProps} />
  );
}
