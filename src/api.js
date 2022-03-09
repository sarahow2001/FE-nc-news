import axios from "axios";

export const getAllArticles = (topic) => {
  return axios

    .get("https://nc-news-example-seminar-3-15.herokuapp.com/api/articles", {
      params: { topic: topic },
    })
    .then((response) => {
      return response.data.articles;
    });
};

export const getTopics = () => {
  return axios
    .get("https://nc-news-example-seminar-3-15.herokuapp.com/api/topics")
    .then((response) => {
      return response.data.topics;
    });
};
