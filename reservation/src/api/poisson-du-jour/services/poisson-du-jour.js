'use strict';

/**
 * poisson-du-jour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::poisson-du-jour.poisson-du-jour');
