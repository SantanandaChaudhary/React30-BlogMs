import React from "react";
import Card from "./components/card/Card";
import Layout from "../../components/layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center space-x-5 mt-6 mb-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Home;
