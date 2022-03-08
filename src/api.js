import axios from "axios";

export const getAllArticles = () => {
  return axios
    .get("https://nc-news-example-seminar-3-15.herokuapp.com/api/articles")
    .then((response) => {
      return response.data.articles;
    });
};

export const getTopics = () => {
  return axios
    .get("https://nc-news-example-seminar-3-15.herokuapp.com/api/topics")
    .then((response) => {
      console.log(response);
    });
};
