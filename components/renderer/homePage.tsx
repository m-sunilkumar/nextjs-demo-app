/* eslint-disable @typescript-eslint/camelcase */
import React from "react";

import { isRichText, renderRichText } from "lib/rich-text/render";
import { TypePage, TypePage_help_center_article } from "lib/types";
import { Link } from "components/link";
import homePageStyles from "./homePage.module.css";

type HomePageProps = TypePage_help_center_article & {
  parent: TypePage;
};

export const HomePage = ({ fields, parent }: HomePageProps) => {
  // const summary = isRichText(fields.content);

  const image = {
    title: fields?.bannerImage?.fields?.title,
    url: fields?.bannerImage?.fields?.file
      ? `${fields?.bannerImage?.fields?.file.url}?w=720&h=400`
      : null,
  };
  console.log("imageee", image);
  return (
    // A modified version of:
    // https://github.com/mertJF/tailblocks/blob/master/src/blocks/blog/light/a.js
    <Link page={parent}>
      <a className="p-4 max-w-sm md:w-1/3 block">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          {image.url ? (
            <img
              className={homePageStyles.heroImageWrap}
              src={image.url}
              alt={image.title}
            />
          ) : null}
          <div className="p-6 break-word">
            <h2 className="tracking-widest text-xs title-font font-medium text-blue-600 mb-1">
              HOME PAGE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
              {parent.fields.title}
            </h1>
            <p className="leading-relaxed">
              {isRichText(fields.content)
                ? renderRichText(fields.content)
                : fields.content}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};
