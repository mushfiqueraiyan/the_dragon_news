import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryPage = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [data, id]);

  return (
    <div>
      {categoryNews.length === 0 ? (
        "No news here brokie"
      ) : (
        <div>
          {categoryNews.map((news) => {
            return (
              <div className="p-5">
                <img
                  src={news.thumbnail_url}
                  className="w-full h-90 object-cover"
                  alt=""
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
