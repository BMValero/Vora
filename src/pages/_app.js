import Head from "next/head";
import RootLayout from "./layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <div
        data-typography="poppins"
        data-theme-version="light"
        data-layout="vertical"
        data-nav-headerbg="color_1"
        data-headerbg="color_1"
        data-sidebar-style="full"
        data-sibebarbg="color_1"
        data-sidebar-position="fixed"
        data-header-position="fixed"
        data-container="wide"
        direction="ltr"
        data-primary="color_1"
      >
        <Head>
          <title>Vora - React Admin Dashboard</title>
        </Head>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </div>
    </>
  );
}
