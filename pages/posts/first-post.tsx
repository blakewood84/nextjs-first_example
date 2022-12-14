import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My Amazing Title</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Script Loaded")}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
    </Layout>
  );
}
