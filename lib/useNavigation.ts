import { useRouter } from "next/router";

import { TypePage } from "./types";
import { PageContentTypes } from "./constants";
import { isPreviewEnabled, withPreviewParam } from "./preview";
import { useLocaleContext } from "./translations";
import type { Locale } from "./translations";

export interface LinkProps {
  href: string;
  as: string;
}

function linkToPage(
  locale: Locale,
  page: TypePage,
  isPreview: boolean
): LinkProps {
  const slug = page.fields.slug;

  const pageType = page?.sys.contentType.sys.id;

  switch (pageType) {
    case PageContentTypes.homePage: {
      return {
        href: withPreviewParam("/[locale]/products/[slug]", isPreview),
        as: withPreviewParam(`/${locale}/products/${slug}`, isPreview),
      };
    }

    case PageContentTypes.LandingPage: {
      return {
        href: withPreviewParam(`/[locale]/[slug]`, isPreview),
        as: withPreviewParam(`/${locale}/${slug}`, isPreview),
      };
    }
    case PageContentTypes.testPage: {
      return {
        href: withPreviewParam(`/[locale]/test-page`, isPreview),
        as: withPreviewParam(`/${locale}/test-page`, isPreview),
      };
    }
    default: {
      throw new Error("Page type is not supported yet");
    }
  }
}

function normalizePath(path: string) {
  // strip query params & trailing slashes
  return path.replace(/\?.*/, "").replace(/\/$/, "");
}

export function useNavigation() {
  const { query, asPath: currentPath, route } = useRouter();
  const locale = useLocaleContext();
  const isPreview = isPreviewEnabled(query);

  const linkTo = (page: TypePage) => {
    return linkToPage(locale, page, isPreview);
  };

  const linkToPath = (url: string): LinkProps => {
    return {
      href: withPreviewParam(`/[locale]/${url}`, isPreview),
      as: withPreviewParam(`/${locale}/${url}`, isPreview),
    };
  };

  const isActive = (page: TypePage) => {
    const active = normalizePath(currentPath);
    const target = normalizePath(linkTo(page).as);

    return target === active;
  };

  return {
    currentPath,
    isPreview,
    route,
    linkTo,
    linkToPath,
    isActive,
  };
}
