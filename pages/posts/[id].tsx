import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

// create a Post component with Layout as a parent

function CodeBlock(props: any) {
  console.log("Props: ", props);
  return <SyntaxHighlighter language="javascript" children={props.children} />;
}

export default function Post({ postData }: { postData: any }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <ReactMarkdown
        children={postData.contentHtml}
        components={{ code: CodeBlock }}
      />
    </Layout>
  );
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: any }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
