import React from "react";
import Layout from "components/Layout/Layout";
import Newsletter from "components/Newsletter";
import ResourceHighlight from "components/ResourceHighlight";
import ResourceList from "components/ResourceList";

export default function Home({ resources }) {
  return (
    <Layout>
      <ResourceHighlight resources={resources.slice(0, 1)} />
      <Newsletter />
      <ResourceList resources={resources.slice(1)} />
    </Layout>
  );
}

// is called every time you will visit the page
// function is executed on the server
// data are always fresh
export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

// is called at the build time, and it's called only once
// export async function getStaticProps() {
//   const resData = await fetch("http://localhost:3000/api/resources");
//   const data = await resData.json();
//   return {
//     props: {
//       resources: data,
//     },
//   };
// }
