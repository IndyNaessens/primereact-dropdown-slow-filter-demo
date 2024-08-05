import { PrimeReactProvider } from "primereact/api";
import type { AppProps } from "next/app";

// PrimeReact
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return <PrimeReactProvider>
    <Component {...pageProps} />
  </PrimeReactProvider>
}
