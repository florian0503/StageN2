'use strict';

/**
 * room router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::room.room');

// module.exports = {
//     routes: [
//         {
//             method: "POST",
//             path: "/rooms/:id/reservation",
//             handler: "rooms.reservation",
//             config: {}
//         }
//     ]
// }
