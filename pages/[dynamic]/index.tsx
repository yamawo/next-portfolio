import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";

const DynamicPage: NextPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>{router.query.dynamic}</h1>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [...Array(10)].map((_, index) => ({
    params: {
      dynamic: `${index}`,
    },
  }));
  console.log({ paths });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default DynamicPage;
