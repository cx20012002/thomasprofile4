import { type SchemaTypeDefinition } from "sanity";
import homePage from "./homePage";
import works from "./works";
import about from "./about";
import contact from "./contact";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homePage, works, about, contact],
};
