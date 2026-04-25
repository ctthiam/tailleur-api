import { PrismaService } from '../prisma/prisma.service';
export declare class CreateAvisDto {
    nom: string;
    ville?: string;
    note: number;
    commentaire: string;
    tenue?: string;
}
export declare class AvisService {
    private prisma;
    constructor(prisma: PrismaService);
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
