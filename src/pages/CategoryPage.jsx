import { BookmarkIcon, Share2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigation, useParams } from "react-router";

const CategoryPage = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const [categoryNews, setCategoryNews] = useState([]);

  const maxLength = 250;

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

  const navigation = useNavigation();
  const isNavigation = Boolean(navigation.location);

  return (
    <div>
      {isNavigation ? (
        <span className="loading loading-ring loading-xl"></span>
      ) : categoryNews.length === 0 ? (
        "No news here brokie"
      ) : (
        <div>
          {categoryNews.map((news) => {
            return (
              <div
                key={news.id}
                className="border border-1 border-gray-200 rounded-tl-lg rounded-tr-lg mb-7"
              >
                <div className="flex items-center justify-between rounded-tl-lg rounded-tr-lg bg-gray-100 p-2">
                  <div className="flex items-center gap-2">
                    <div>
                      <img
                        src={news.author.img}
                        alt=""
                        className="w-10 rounded-full object-cover h-10"
                      />
                    </div>
                    <div>
                      <h2 className="font-bold">{news.author.name}</h2>
                      <p>{news.author.published_date.slice(0, 10)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <BookmarkIcon />
                    <Share2Icon />
                  </div>
                </div>

                <div className="mt-3 p-5">
                  <h1 className="font-bold text-3xl leading-11 text-gray-800">
                    {news.title}
                  </h1>
                  <img
                    src={news.thumbnail_url}
                    className="w-full mt-3 rounded-lg h-90 object-cover"
                    alt=""
                  />
                </div>
                <div className="my-3 px-5">
                  <p className="text-gray-600 text-justify mb-3">
                    {news.details.length > maxLength
                      ? news.details.slice(0, maxLength) + "...."
                      : news.details}
                  </p>
                  <Link
                    to={`/news/${news.id}`}
                    className="font-bold text-orange-400"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
