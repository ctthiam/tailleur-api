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
exports.CreationsService = exports.CreateCreationDto = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const cloudinary_service_1 = require("../media/cloudinary.service");
const class_validator_1 = require("class-validator");
class CreateCreationDto {
    titre;
    description;
    prix;
    delai;
    categorieId;
    tissus;
    featured;
    nouveaute;
    publiee;
}
exports.CreateCreationDto = CreateCreationDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCreationDto.prototype, "titre", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCreationDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCreationDto.prototype, "prix", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCreationDto.prototype, "delai", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCreationDto.prototype, "categorieId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCreationDto.prototype, "tissus", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateCreationDto.prototype, "featured", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateCreationDto.prototype, "nouveaute", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateCreationDto.prototype, "publiee", void 0);
function slugify(str) {
    return str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}
let CreationsService = class CreationsService {
    prisma;
    cloudinary;
    constructor(prisma, cloudinary) {
        this.prisma = prisma;
        this.cloudinary = cloudinary;
    }
    findAll(categorieSlug) {
        return this.prisma.creation.findMany({
            where: {
                publiee: true,
                ...(categorieSlug ? { categorie: { slug: categorieSlug } } : {}),
            },
            include: { categorie: true, medias: { orderBy: { ordre: 'asc' } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    findFeatured() {
        return this.prisma.creation.findMany({
            where: { publiee: true, featured: true },
            include: { categorie: true, medias: { where: { estCouv: true } } },
            orderBy: { createdAt: 'desc' },
            take: 6,
        });
    }
    async findOne(slug) {
        const creation = await this.prisma.creation.findUnique({
            where: { slug },
            include: { categorie: true, medias: { orderBy: { ordre: 'asc' } } },
        });
        if (!creation)
            throw new common_1.NotFoundException('Création introuvable');
        await this.prisma.creation.update({ where: { slug }, data: { vues: { increment: 1 } } });
        return creation;
    }
    findAllAdmin() {
        return this.prisma.creation.findMany({
            include: { categorie: true, medias: { where: { estCouv: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }
    async create(dto) {
        const slug = slugify(dto.titre);
        return this.prisma.creation.create({
            data: { ...dto, slug, tissus: dto.tissus ?? [] },
            include: { categorie: true },
        });
    }
    async update(id, dto) {
        await this.prisma.creation.findUniqueOrThrow({ where: { id } });
        const data = { ...dto };
        if (dto.titre)
            data.slug = slugify(dto.titre);
        return this.prisma.creation.update({ where: { id }, data, include: { categorie: true, medias: true } });
    }
    async remove(id) {
        const creation = await this.prisma.creation.findUniqueOrThrow({
            where: { id }, include: { medias: true },
        });
        for (const m of creation.medias) {
            await this.cloudinary.deleteImage(m.publicId);
        }
        return this.prisma.creation.delete({ where: { id } });
    }
    async addMedia(creationId, buffer, estCouv) {
        await this.prisma.creation.findUniqueOrThrow({ where: { id: creationId } });
        const { url, publicId } = await this.cloudinary.uploadBuffer(buffer, 'tailleur/creations');
        const count = await this.prisma.media.count({ where: { creationId } });
        return this.prisma.media.create({
            data: { url, publicId, creationId, estCouv: estCouv || count === 0, ordre: count },
        });
    }
    async removeMedia(mediaId) {
        const media = await this.prisma.media.findUniqueOrThrow({ where: { id: mediaId } });
        await this.cloudinary.deleteImage(media.publicId);
        return this.prisma.media.delete({ where: { id: mediaId } });
    }
};
exports.CreationsService = CreationsService;
exports.CreationsService = CreationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        cloudinary_service_1.CloudinaryService])
], CreationsService);
//# sourceMappingURL=creations.service.js.map