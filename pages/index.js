import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Home } from "../components/Home";
import { useTina } from "tinacms/dist/react";
import { client } from "../tina/__generated__/client";

export default function HomePage(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  return (
    <Home>
      <TinaMarkdown content={content} />
    </Home>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
