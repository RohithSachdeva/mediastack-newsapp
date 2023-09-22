import fetchNews from "../../utils/fetchNews";
import { categories } from "../../utils/helpers";
import NewsList from "./components/NewsList";
import response from "../../utils/response.json";

async function Homepage() {
  const news: NewsResponse =
    (await fetchNews(categories.join(","))) || response;

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Homepage;
