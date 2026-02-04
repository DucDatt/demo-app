"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missingRequiredFields = exports.invalidScore = exports.existAnalytics = void 0;
const common_1 = require("@nestjs/common");
exports.existAnalytics = new common_1.HttpException('Analytics entry already exists', common_1.HttpStatus.BAD_REQUEST);
exports.invalidScore = new common_1.HttpException('Score must be a positive number', common_1.HttpStatus.BAD_REQUEST);
exports.missingRequiredFields = new common_1.HttpException('gameId and playerId are required', common_1.HttpStatus.BAD_REQUEST);
//# sourceMappingURL=analytics.domain.js.map