import fetchNews from "../../../../utils/fetchNews";
import NewsList from "../../components/NewsList";

type Props = {
  params: { category: Category };
};

async function NewsCategory({ params: { category } }: Props) {
  const news: NewsResponse = await fetchNews(category);

  return (
    <div>
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
      <h1>hello</h1>
    </div>
  );
}

export default NewsCategory;
