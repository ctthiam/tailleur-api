"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvisService = exports.CreateAvisDto = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const class_validator_1 = require("class-validator");
class CreateAvisDto {
    nom;
    ville;
    note;
    commentaire;
    tenue;
}
exports.CreateAvisDto = CreateAvisDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAvisDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAvisDto.prototype, "ville", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(5),
    __metadata("design:type", Number)
], CreateAvisDto.prototype, "note", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAvisDto.prototype, "commentaire", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAvisDto.prototype, "tenue", void 0);
let AvisService = class AvisService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findPublies() {
        return this.prisma.avis.findMany({
            where: { publie: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    findAll() {
        return this.prisma.avis.findMany({ orderBy: { createdAt: 'desc' } });
    }
    create(dto) {
        return this.prisma.avis.create({ data: dto });
    }
    async togglePublie(id) {
        const avis = await this.prisma.avis.findUnique({ where: { id } });
        if (!avis)
            throw new common_1.NotFoundException('Avis introuvable');
        return this.prisma.avis.update({ where: { id }, data: { publie: !avis.publie } });
    }
    async remove(id) {
        await this.prisma.avis.findUniqueOrThrow({ where: { id } });
        return this.prisma.avis.delete({ where: { id } });
    }
};
exports.AvisService = AvisService;
exports.AvisService = AvisService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AvisService);
//# sourceMappingURL=avis.service.js.map