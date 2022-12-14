import Layout from "../../components/layout";
import { getAllPostIds, getPostsData } from "../../lib/posts";

// create a Post component with Layout as a parent

interface PostData {
  id: string;
  title: string;
  date: string;
}

export default function Post({ postData }: { postData: PostData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
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

interface Params {
  id: string;
}
export async function getStaticProps({ params }: { params: Params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = getPostsData(params.id);
  return {
    props: {
      postData,
    },
  };
}
