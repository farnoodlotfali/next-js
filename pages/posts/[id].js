import React from 'react';
import Layout from '../../components/layout';
import { useRouter } from 'next/router';
import axios from 'axios';
import Head from 'next/head';
const post = ({ post }) => {
  // const router = useRouter();
  // const id = router.query.id;
  // console.log(router.query.id);
  // console.log(post);
  //   const x = async () => {
  //     const res = await axios.get(`http://laial.7negare.ir/api/persons/${id}`);
  //     console.log(res.data);
  //   };
  //   x();
  return (
    <Layout>
      <Head>
        <title>fuck</title>
      </Head>
      {/* <h1>hello {id}</h1> */}
      {post.results.map((item, i) => {
        return <h1 key={i}>{item.media[0].name}</h1>;
      })}
    </Layout>
  );
};
export async function getServerSideProps({ params }) {
  // const res = await axios.get(
  //   `http://laial.7negare.ir/api/persons/${params.id}`
  // );
  // console.log(res);
  // const res1 = await fetch(`http://laial.7negare.ir/api/persons/${params.id}`);
  const res1 = await fetch(`http://laial.7negare.ir/api/persons/pooyanfar`);

  // const articles = await res1.json();
  const data = await res1.json();
  return {
    props: { post: data },
  };
  //   console.log(res.data);
}

export default post;
