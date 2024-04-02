'use strict';

/**
 * pate service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pate.pate');
