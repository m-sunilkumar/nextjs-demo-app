/* eslint-disable @typescript-eslint/camelcase */
import React from "react";

import { isRichText, renderRichText } from "lib/rich-text/render";
import { TypePage, TypePage_help_center_article } from "lib/types";
import { Link } from "components/link";
import homePageStyles from "./homePage.module.css";
import FeatureBannerImage from "@mwa/component-library/dist/Components/FeatureBanner";

type TestPageProps = TypePage_help_center_article & {
  parent: TypePage;
};

export const TestPage = ({ fields, parent }: TestPageProps) => {
  // const summary = isRichText(fields.content);
  console.log("fields......", fields);
  return (
    <Link page={parent}>
      <a className="p-4 max-w-sm md:w-1/3 block">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="p-6 break-word">
            <h2 className="tracking-widest text-xs title-font font-medium text-blue-600 mb-1">
              TEST PAGE
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
              {parent.fields.title}
            </h1>
            <div>
              <FeatureBannerImage {...fields} />
            </div>
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
