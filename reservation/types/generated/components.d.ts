import type { Schema, Attribute } from '@strapi/strapi';

export interface AllergenArachide extends Schema.Component {
  collectionName: 'components_allergen_arachides';
  info: {
    displayName: 'Arachide';
    description: '';
  };
  attributes: {
    bool: Attribute.Boolean;
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
    poisson: Attribute.String;
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
    displayName: 'Sulfite';
    description: '';
  };
  attributes: {
    bool: Attribute.Boolean;
  };
}

export interface AnimalAgneau extends Schema.Component {
  collectionName: 'components_animal_agneaus';
  info: {
    displayName: 'Agneau';
    description: '';
  };
  attributes: {
    origine_france: Attribute.String;
  };
}

export interface AnimalBoeuf extends Schema.Component {
  collectionName: 'components_animal_boeufs';
  info: {
    displayName: 'Boeuf';
    description: '';
  };
  attributes: {
    origine_france: Attribute.String;
  };
}

export interface AnimalPorc extends Schema.Component {
  collectionName: 'components_animal_porcs';
  info: {
    displayName: 'Porc';
    description: '';
  };
  attributes: {
    origine_france: Attribute.String;
  };
}

export interface AnimalVeau extends Schema.Component {
  collectionName: 'components_animal_veaus';
  info: {
    displayName: 'Veau';
    description: '';
  };
  attributes: {
    origine_france: Attribute.String;
  };
}

export interface CuisineFour extends Schema.Component {
  collectionName: 'components_cuisine_fours';
  info: {
    displayName: 'four';
    description: '';
  };
  attributes: {};
}

export interface CuisineFriteuse extends Schema.Component {
  collectionName: 'components_cuisine_friteuses';
  info: {
    displayName: 'Friteuse';
    description: '';
  };
  attributes: {};
}

export interface CuisinePlancha extends Schema.Component {
  collectionName: 'components_cuisine_planchas';
  info: {
    displayName: 'plancha';
    description: '';
  };
  attributes: {
    allergene: Attribute.Component<'allergen.poisson', true>;
    Nutriment: Attribute.Component<'nutriment.poisson', true>;
  };
}

export interface CuisinePoele extends Schema.Component {
  collectionName: 'components_cuisine_poeles';
  info: {
    displayName: 'Poele';
    description: '';
  };
  attributes: {};
}

export interface CuisineWok extends Schema.Component {
  collectionName: 'components_cuisine_woks';
  info: {
    displayName: 'wok';
    description: '';
  };
  attributes: {};
}

export interface NutrimentFeculent extends Schema.Component {
  collectionName: 'components_nutriment_feculents';
  info: {
    displayName: 'Feculent';
    description: '';
  };
  attributes: {};
}

export interface NutrimentLegumes extends Schema.Component {
  collectionName: 'components_nutriment_legumes';
  info: {
    displayName: 'Legume';
    description: '';
  };
  attributes: {};
}

export interface NutrimentPoisson extends Schema.Component {
  collectionName: 'components_nutriment_poissons';
  info: {
    displayName: 'poisson';
    description: '';
  };
  attributes: {
    Poisson: Attribute.String;
  };
}

export interface NutrimentProteines extends Schema.Component {
  collectionName: 'components_nutriment_proteines';
  info: {
    displayName: 'prot\u00E9ines';
    description: '';
  };
  attributes: {
    origine_france: Attribute.String;
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
      'animal.agneau': AnimalAgneau;
      'animal.boeuf': AnimalBoeuf;
      'animal.porc': AnimalPorc;
      'animal.veau': AnimalVeau;
      'cuisine.four': CuisineFour;
      'cuisine.friteuse': CuisineFriteuse;
      'cuisine.plancha': CuisinePlancha;
      'cuisine.poele': CuisinePoele;
      'cuisine.wok': CuisineWok;
      'nutriment.feculent': NutrimentFeculent;
      'nutriment.legumes': NutrimentLegumes;
      'nutriment.poisson': NutrimentPoisson;
      'nutriment.proteines': NutrimentProteines;
    }
  }
}
