import type { Schema, Struct } from '@strapi/strapi';

export interface CatalogProductItem extends Struct.ComponentSchema {
  collectionName: 'components_catalog_product_items';
  info: {
    displayName: 'Product Item';
    icon: 'archive';
  };
  attributes: {
    description: Schema.Attribute.Text;
    downloadBrochureLink: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    productImage: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.link', false>;
    companyText: Schema.Attribute.Text;
    copyrightText: Schema.Attribute.String;
    headerInternalLinks: Schema.Attribute.Component<'shared.link', true>;
    headerText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    logo: Schema.Attribute.Media<'images'>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
    icon: 'layout';
  };
  attributes: {
    contactButton: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
    menuItems: Schema.Attribute.Component<'layout.navigation-item', true>;
  };
}

export interface LayoutNavigationItem extends Struct.ComponentSchema {
  collectionName: 'components_layout_navigation_items';
  info: {
    displayName: 'Navigation Item';
    icon: 'bulletList';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subMenuItems: Schema.Attribute.Component<'shared.link', true>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LayoutOurClients extends Struct.ComponentSchema {
  collectionName: 'components_layout_our_clients';
  info: {
    displayName: 'Our Clients';
    icon: 'manyWays';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'catalog.product-item': CatalogProductItem;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
      'layout.navigation-item': LayoutNavigationItem;
      'layout.our-clients': LayoutOurClients;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
