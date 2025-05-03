import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RightLayout from "../layouts/RightLayout";
import { useLoaderData, useParams } from "react-router";
import Menu from "../components/Menu";

const NewsDetails = () => {
  const [news, setNews] = useState([]);

  const { id } = useParams();
  // console.log(id);

  const data = useLoaderData();
  useEffect(() => {
    const singleNews = data.find((news) => news.id == id);
    setNews([singleNews]);
  }, [data, id]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <header>
        <Navbar />
        <Menu />
      </header>
      <main className="grid grid-cols-12">
        <section className="col-span-9">
          {news.map((detail) => (
            <h1 key={detail.id}>{detail.id}</h1>
          ))}
        </section>
        <section className="col-span-3">
          <RightLayout />
        </section>
      </main>
    </div>
  );
};

export default NewsDetails;
