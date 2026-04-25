import { PrismaService } from '../prisma/prisma.service';
import { StatutCommande } from '@prisma/client';
export declare class CreateCommandeDto {
    nom: string;
    telephone: string;
    email?: string;
    typeTenue: string;
    tissu?: string;
    mesures?: string;
    dateLivraison: string;
    message?: string;
}
export declare class CommandesService {
    private prisma;
    constructor(prisma: PrismaService);
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
    updateStatut(id: string, statut: StatutCommande): Promise<{
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
    stats(): import(".prisma/client").Prisma.GetCommandeGroupByPayload<{
        by: "statut"[];
        _count: {
            statut: true;
        };
    }>;
}
