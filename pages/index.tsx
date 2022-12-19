import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { useTheme } from "next-themes";

import { getSortedPostsData } from "../lib/posts";
import { useEffect } from "react";

enum Theme {
  light,
  dark,
}

export default function Home({ allPostsData }: { allPostsData: any }) {
  const { systemTheme, theme, setTheme } = useTheme();
  // useEffect(() => {}, []);
  // console.log("systemTheme", systemTheme);
  // console.log("theme", theme);
  // console.log("setTheme", setTheme);

  return (
    <Layout home>
      <input
        type="checkbox"
        className="toggle"
        checked={theme === "dark"}
        onChange={() => {
          setTheme(theme === "dark" ? "cupcake" : "dark");
        }}
      />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My Example Page</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(
            ({ id, date, title }: { id: any; date: any; title: any }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            )
          )}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
