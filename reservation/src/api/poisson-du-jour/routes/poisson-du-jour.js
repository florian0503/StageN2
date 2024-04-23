'use strict';

/**
 * poisson-du-jour router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::poisson-du-jour.poisson-du-jour');
