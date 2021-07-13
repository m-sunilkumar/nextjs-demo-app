/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import ErrorPage from "next/error";

import { getPage } from "lib/api";
import { isPreviewEnabled } from "lib/preview";
import { PageHead } from "components/page-head";
import { PageContentTypes } from "lib/constants";
import { TypePage, TypePage_landing } from "lib/types";
import { BlockRenderer } from "components/renderer/block-renderer";
import { withLocale } from "lib/translations";
import { isRichText, renderRichText } from "../../lib/rich-text/render";
import { fetchContent } from "../../utils/contentful";
import Layout from "../../components/layout";

type LandingProps = {
  page: TypePage;
  navItems: [];
};

export default function Landing({ page, navItems }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  const pageContent = page.fields.content as TypePage_landing;

  //   const { bannerImage, content = {} } = pageContent?.fields;
  return (
    <Layout home navItems={navItems}>
      {/* <PageHead page={page} /> */}
      <BlockRenderer block={page} />
    </Layout>
  );
}

export const getServerSideProps = withLocale(
  async (locale, { params, query }) => {
    const slug = String(params.slug ?? "/");
    const preview = isPreviewEnabled(query);
    const page = await getPage({
      slug,
      preview,
      locale,
      pageContentType: PageContentTypes.homePage,
    });
    const response = await fetchContent(`
    {
        navbarCollection {
            items {
              checkLoginStatus
              hasSubMenu
              location
              mainTabId
              menuItemText
              menuType
              order
              showAfterLogin
              subMenuColumns
              subMenuItems
              triggerAction
            }
          }
   }
`);
    return {
      props: { page, navItems: response?.navbarCollection?.items },
    };
  }
);
