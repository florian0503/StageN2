'use strict';

/**
 * poisson-du-jour controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::poisson-du-jour.poisson-du-jour');
