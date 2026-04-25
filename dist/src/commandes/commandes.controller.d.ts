import { CommandesService, CreateCommandeDto } from './commandes.service';
import { StatutCommande } from '@prisma/client';
declare class UpdateStatutDto {
    statut: StatutCommande;
}
export declare class CommandesController {
    private service;
    constructor(service: CommandesService);
    create(dto: CreateCommandeDto): import(".prisma/client").Prisma.Prisma__CommandeClient<{
        id: string;
        email: string | null;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        typeTenue: string;
        tissu: string | null;
        mesures: string | null;
        dateLivraison: Date;
        message: string | null;
        statut: import(".prisma/client").$Enums.StatutCommande;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(statut?: StatutCommande): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        email: string | null;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        typeTenue: string;
        tissu: string | null;
        mesures: string | null;
        dateLivraison: Date;
        message: string | null;
        statut: import(".prisma/client").$Enums.StatutCommande;
    }[]>;
    stats(): import(".prisma/client").Prisma.GetCommandeGroupByPayload<{
        by: "statut"[];
        _count: {
            statut: true;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        email: string | null;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        typeTenue: string;
        tissu: string | null;
        mesures: string | null;
        dateLivraison: Date;
        message: string | null;
        statut: import(".prisma/client").$Enums.StatutCommande;
    }>;
    updateStatut(id: string, dto: UpdateStatutDto): Promise<{
        id: string;
        email: string | null;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
        telephone: string;
        typeTenue: string;
        tissu: string | null;
        mesures: string | null;
        dateLivraison: Date;
        message: string | null;
        statut: import(".prisma/client").$Enums.StatutCommande;
    }>;
}
export {};
