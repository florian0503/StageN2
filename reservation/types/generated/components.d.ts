import type { Schema, Attribute } from '@strapi/strapi';

export interface AllergenArachide extends Schema.Component {
  collectionName: 'components_allergen_arachides';
  info: {
    displayName: 'Arachide';
  };
  attributes: {
    bool: Attribute.Boolean;
    description: Attribute.String;
    image: Attribute.Media;
  };
}

export interface AllergenCeleri extends Schema.Component {
  collectionName: 'components_allergen_celeris';
  info: {
    displayName: 'Celeri';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenCrustaces extends Schema.Component {
  collectionName: 'components_allergen_crustaces';
  info: {
    displayName: 'Crustaces';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenFruitACoque extends Schema.Component {
  collectionName: 'components_allergen_fruit_a_coques';
  info: {
    displayName: 'Fruit_a_coque';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenGluten extends Schema.Component {
  collectionName: 'components_allergen_glutens';
  info: {
    displayName: 'Gluten';
    description: '';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenLait extends Schema.Component {
  collectionName: 'components_allergen_laits';
  info: {
    displayName: 'Lait';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenLupin extends Schema.Component {
  collectionName: 'components_allergen_lupins';
  info: {
    displayName: 'Lupin';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenMollusque extends Schema.Component {
  collectionName: 'components_allergen_mollusques';
  info: {
    displayName: 'Mollusque';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenMoutarde extends Schema.Component {
  collectionName: 'components_allergen_moutardes';
  info: {
    displayName: 'Moutarde';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenOeuf extends Schema.Component {
  collectionName: 'components_allergen_oeufs';
  info: {
    displayName: 'Oeuf';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenPoisson extends Schema.Component {
  collectionName: 'components_allergen_poisson';
  info: {
    displayName: 'poisson';
    description: '';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenSesame extends Schema.Component {
  collectionName: 'components_allergen_sesames';
  info: {
    displayName: 'Sesame';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenSoja extends Schema.Component {
  collectionName: 'components_allergen_sojas';
  info: {
    displayName: 'Soja';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AllergenSulfites extends Schema.Component {
  collectionName: 'components_allergen_sulfites';
  info: {
    displayName: 'Sulfites';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'allergen.arachide': AllergenArachide;
      'allergen.celeri': AllergenCeleri;
      'allergen.crustaces': AllergenCrustaces;
      'allergen.fruit-a-coque': AllergenFruitACoque;
      'allergen.gluten': AllergenGluten;
      'allergen.lait': AllergenLait;
      'allergen.lupin': AllergenLupin;
      'allergen.mollusque': AllergenMollusque;
      'allergen.moutarde': AllergenMoutarde;
      'allergen.oeuf': AllergenOeuf;
      'allergen.poisson': AllergenPoisson;
      'allergen.sesame': AllergenSesame;
      'allergen.soja': AllergenSoja;
      'allergen.sulfites': AllergenSulfites;
    }
  }
}
