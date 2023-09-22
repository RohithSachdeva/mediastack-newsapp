import fetchNews from "../../utils/fetchNews";
import { categories } from "../../utils/helpers";
import Image from "next/image";

async function Homepage() {
  console.log(categories.join(","));
  const news: NewsResponse = await fetchNews(categories.join(","));
  console.log(news);
  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}

export default Homepage;
