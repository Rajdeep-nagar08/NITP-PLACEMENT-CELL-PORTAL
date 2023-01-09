"use strict";

/**
 *  application controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::application.application");
