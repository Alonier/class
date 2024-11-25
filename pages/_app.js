import { Router } from "next/router";
import HeaderUI from "../src/components/commons/header/HeaderContainer";
import "../styles/globals.css";
import axios from "axios";

 // 백엔드 서버의 기본 URL
axios.defaults.baseURL = 'http://localhost:8080';

export default function App({ Component, pageProps }) {
  return (
    <div className="Wrapper">
      <HeaderUI></HeaderUI>
      <Component {...pageProps} />
    </div>
  );
}
