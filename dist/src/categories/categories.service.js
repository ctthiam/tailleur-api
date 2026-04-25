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
exports.CategoriesService = exports.CreateCategorieDto = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const class_validator_1 = require("class-validator");
class CreateCategorieDto {
    nom;
    slug;
    emoji;
    ordre;
}
exports.CreateCategorieDto = CreateCategorieDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCategorieDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCategorieDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategorieDto.prototype, "emoji", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateCategorieDto.prototype, "ordre", void 0);
let CategoriesService = class CategoriesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.categorie.findMany({
            orderBy: { ordre: 'asc' },
            include: { _count: { select: { creations: { where: { publiee: true } } } } },
        });
    }
    async findOne(slug) {
        const cat = await this.prisma.categorie.findUnique({ where: { slug } });
        if (!cat)
            throw new common_1.NotFoundException('Catégorie introuvable');
        return cat;
    }
    create(dto) {
        return this.prisma.categorie.create({ data: dto });
    }
    async update(id, dto) {
        await this.prisma.categorie.findUniqueOrThrow({ where: { id } });
        return this.prisma.categorie.update({ where: { id }, data: dto });
    }
    async remove(id) {
        await this.prisma.categorie.findUniqueOrThrow({ where: { id } });
        return this.prisma.categorie.delete({ where: { id } });
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map