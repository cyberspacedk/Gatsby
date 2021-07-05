import React from 'react';

import S from '@sanity/desk-tool/structure-builder';

// build a custom sidebar

const Sidebar = () =>
  S.list()
    .title(`Slick's Slices`)
    .items([
      // Home page fro separate store
      S.listItem()
        .title('Home page')
        .icon(() => <strong>🔥</strong>)
        .child(S.editor().schemaType('storeSettings').documentId('downtown')), // add store settings to Home page menu item

      // spread other fields in sidebar
      ...S.documentTypeListItems().filter(
        (item) => item.getId() !== 'storeSettings' // remove store settings field
      ),
    ]);

export default Sidebar;
