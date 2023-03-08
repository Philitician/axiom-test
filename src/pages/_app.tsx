import { type AppType } from "next/app";
export { reportWebVitals } from "next-axiom";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { reportWebVitals } from "next-axiom";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
