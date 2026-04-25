"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationsModule = void 0;
const common_1 = require("@nestjs/common");
const creations_controller_1 = require("./creations.controller");
const creations_service_1 = require("./creations.service");
const cloudinary_service_1 = require("../media/cloudinary.service");
let CreationsModule = class CreationsModule {
};
exports.CreationsModule = CreationsModule;
exports.CreationsModule = CreationsModule = __decorate([
    (0, common_1.Module)({
        controllers: [creations_controller_1.CreationsController],
        providers: [creations_service_1.CreationsService, cloudinary_service_1.CloudinaryService],
    })
], CreationsModule);
//# sourceMappingURL=creations.module.js.map