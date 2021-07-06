/* new file: src/pages/[locale]/tutorials/[slug].tsx */

import React from "react";
import { TypePage } from "lib/types";
import { withLocale } from "lib/translations/locale";
import { isPreviewEnabled } from "../../../lib/preview";
import { getPage } from "lib/api";
import { PageContentTypes } from "../../../lib/constants";
import ErrorPage from "next/error";
import { PageHead } from "../../../components/page-head";
import { isRichText, renderRichText } from "../../../lib/rich-text/render";

/*
The new Tutorial component, it renders the data fetched by getServerSideProps
See https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
*/
const Tutorial = ({ page }: { page: TypePage }) => {
  if (!page) {
    //getServerSideProps did not find the page
    return <ErrorPage statusCode={404} />;
  }

  const { description } = page?.fields?.content?.fields;

  /* Visualize the data as you see fit, sky is the limit */
  return (
    <>
      {/* We reuse the existing code for title and seo metadata rendering in the header */}
      {/* <PageHead page={page} /> */}
      <div className="container">
        <h1 className="title">Sample Compose Page</h1>
        <div className="pageTitle">
          <h1>{page?.fields?.title}</h1>
        </div>
        <div className="richTextContainer">
          {isRichText(description) ? renderRichText(description) : description}
        </div>
      </div>
    </>
  );
};

export default Tutorial;

export const getServerSideProps = withLocale(
  async (locale, { params, query }) => {
    const slug = String(params.slug);

    const preview = isPreviewEnabled(query);
    const pageContentType = "pageTutorial"; /* <- the id of the new page type */
    const page = await getPage({
      slug,
      preview,
      locale,
      pageContentType,
    });

    return {
      props: { page },
    };
  }
);
