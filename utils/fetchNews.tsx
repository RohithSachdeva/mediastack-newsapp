import { gql } from "graphql-request";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  const query = gql`
    query MyQuery($access_key: String!, $category: String!, $keywords: String) {
      myQuery(
        access_key: $access_key
        categories: $categories
        countries: "us"
        sort: "published_desc"
        keywords: $keywords
      ) {
        data {
          author
          category
          description
          country
          image
          language
          published_at
          source
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;

  const res = await fetch(
    `https://yicheng.stepzen.net/api/loitering-hedgehog/__graphql`,
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Apikey ${process.env.STEPZEN_APIKEY}`,
      },
      body: JSON.stringify({
        query,
        variables: {
          access_key: process.env.MEDIASTACK_APIKEY,
          categories: category,
          keywords: keywords,
        },
      }),
    }
  );
  console.log("Loading", category, keywords);
  const newsResponse = await res.json();
};
