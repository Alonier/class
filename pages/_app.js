import { Router } from "next/router";
import HeaderUI from "../src/components/commons/header/HeaderContainer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="Wrapper">
      <HeaderUI></HeaderUI>
      <Component {...pageProps} />
    </div>
  );
}
