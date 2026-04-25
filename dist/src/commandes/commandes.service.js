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
exports.CommandesService = exports.CreateCommandeDto = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const class_validator_1 = require("class-validator");
class CreateCommandeDto {
    nom;
    telephone;
    email;
    typeTenue;
    tissu;
    mesures;
    dateLivraison;
    message;
}
exports.CreateCommandeDto = CreateCommandeDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommandeDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommandeDto.prototype, "telephone", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommandeDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCommandeDto.prototype, "typeTenue", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommandeDto.prototype, "tissu", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommandeDto.prototype, "mesures", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateCommandeDto.prototype, "dateLivraison", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCommandeDto.prototype, "message", void 0);
let CommandesService = class CommandesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    create(dto) {
        return this.prisma.commande.create({
            data: { ...dto, dateLivraison: new Date(dto.dateLivraison) },
        });
    }
    findAll(statut) {
        return this.prisma.commande.findMany({
            where: statut ? { statut } : undefined,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const cmd = await this.prisma.commande.findUnique({ where: { id } });
        if (!cmd)
            throw new common_1.NotFoundException('Commande introuvable');
        return cmd;
    }
    async updateStatut(id, statut) {
        await this.prisma.commande.findUniqueOrThrow({ where: { id } });
        return this.prisma.commande.update({ where: { id }, data: { statut } });
    }
    stats() {
        return this.prisma.commande.groupBy({
            by: ['statut'],
            _count: { statut: true },
        });
    }
};
exports.CommandesService = CommandesService;
exports.CommandesService = CommandesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CommandesService);
//# sourceMappingURL=commandes.service.js.map