// import type {StructureResolver} from 'sanity/structure'

// // https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems())

import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) => {
  const customItems = [
    { title: "About", schemaType: "about", documentId: "about" },
    { title: "Contact", schemaType: "contact", documentId: "contact" },
  ];

  const customListItems = customItems.map(({ title, schemaType, documentId }) =>
    S.listItem().title(title).child(S.document().schemaType(schemaType).documentId(documentId)),
  );

  return S.list()
    .title("Content")
    .items([
      ...customListItems,
      ...S.documentTypeListItems().filter((item) => !customItems.some(({ schemaType }) => item.getId() === schemaType)),
    ]);
};
