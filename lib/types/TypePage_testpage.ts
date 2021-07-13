import * as Contentful from "contentful";
import { TypeComponent_heroFields } from "./TypeComponent_hero";
import { TypeComponent_sectionFields } from "./TypeComponent_section";

export interface TypePage_testPageFields {
  title: Contentful.EntryFields.Symbol;
  description: Contentful.Entry<string>;
  sections: Contentful.Entry<TypeComponent_sectionFields>[];
}

export type TypePage_testPage = Contentful.Entry<TypePage_testPageFields>;
