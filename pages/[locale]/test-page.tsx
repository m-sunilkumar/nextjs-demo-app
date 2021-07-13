/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import ErrorPage from "next/error";

import { getPage } from "lib/api";
import { isPreviewEnabled } from "lib/preview";
import { PageHead } from "components/page-head";
import { PageContentTypes } from "lib/constants";
import { TypePage, TypePage_landing } from "lib/types";
import { BlockRenderer } from "components/renderer/block-renderer";
import { withLocale, withStaticLocale } from "lib/translations";
import { isRichText, renderRichText } from "../../lib/rich-text/render";
import { fetchContent } from "../../utils/contentful";
import Layout from "../../components/layout";

type TestPageProps = {
  page: TypePage;
};

export default function Test({ page }: TestPageProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  const pageContent = page.fields.content;
  console.log("content", page);
  //   const { bannerImage, content = {} } = pageContent?.fields;
  return <BlockRenderer block={page} />;
}

export const getStaticProps = withStaticLocale(
  async (locale, { params, query }) => {
    console.log("options", locale, query, params);
    const slug = String(params.slug ?? "test-page");
    const preview = isPreviewEnabled(query);

    const page = await getPage({
      slug,
      preview,
      locale,
      pageContentType: PageContentTypes.testPage,
    });
    return {
      props: { page },
    };
  }
);

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "test-page", locale: "en-US" } }],
    fallback: true,
  };
}
