import Head from "next/head";

import { useGetPostByLimitQuery } from "@/services/post";

export default function Limit() {
  // const { data: responseInfo } = useGetAllPostQuery();
  const getData = useGetPostByLimitQuery(10);

  if (getData.isLoading) return <div>Loading...</div>;
  if (getData.isError) return <h2>An error occured{getData.error.error}</h2>;

  return (
    <>
      <Head>
        <title>jsonplaceholder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Redux Toolkit - RTK Query (Get Limited Data)</h1>
        {getData.data?.map((obj, index) => {
          return (
            <div key={index} style={{ fontWeight: "normal", margin: "1rem" }}>
              <h3>
                {index + 1} {obj.title}
              </h3>
              <p>{obj.body}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
}