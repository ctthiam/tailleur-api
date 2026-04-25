import { AvisService, CreateAvisDto } from './avis.service';
export declare class AvisController {
    private service;
    constructor(service: AvisService);
    findPublies(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        nom: string;
        createdAt: Date;
        ville: string | null;
        note: number;
        commentaire: string;
        tenue: string | null;
        publie: boolean;
    }[]>;
    create(dto: CreateAvisDto): import(".prisma/client").Prisma.Prisma__AvisClient<{
        id: string;
        nom: string;
        createdAt: Date;
        ville: string | null;
        note: number;
        commentaire: string;
        tenue: string | null;
        publie: boolean;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        nom: string;
        createdAt: Date;
        ville: string | null;
        note: number;
        commentaire: string;
        tenue: string | null;
        publie: boolean;
    }[]>;
    togglePublie(id: string): Promise<{
        id: string;
        nom: string;
        createdAt: Date;
        ville: string | null;
        note: number;
        commentaire: string;
        tenue: string | null;
        publie: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        nom: string;
        createdAt: Date;
        ville: string | null;
        note: number;
        commentaire: string;
        tenue: string | null;
        publie: boolean;
    }>;
}
