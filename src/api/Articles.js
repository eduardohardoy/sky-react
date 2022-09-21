export const getArticles = async query => {
    try {
      const data = await fetch(
        `https://help-search-api-prod.herokuapp.com/search?query=${query}`
      );
      const articles = await data.json();
      return articles;
    } catch (error) {
      console.error(error);
      return null;
    }
  };