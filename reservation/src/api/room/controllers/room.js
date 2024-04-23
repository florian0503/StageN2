'use strict';

/**
 * room controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::room.room');

// module.exports = {
//     book: async ctx => {
//         const { body } = ctx.request;

//         const { bookRoom } = strapi.services.rooms

//         const bookingResult = await bookRoom()
//         return 'hello reservation'
//     }
// };
