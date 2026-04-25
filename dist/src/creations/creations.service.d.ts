import { PrismaService } from '../prisma/prisma.service';
import { CloudinaryService } from '../media/cloudinary.service';
export declare class CreateCreationDto {
    titre: string;
    description: string;
    prix: string;
    delai: string;
    categorieId: string;
    tissus?: string[];
    featured?: boolean;
    nouveaute?: boolean;
    publiee?: boolean;
}
export declare class CreationsService {
    private prisma;
    private cloudinary;
    constructor(prisma: PrismaService, cloudinary: CloudinaryService);
    findAll(categorieSlug?: string): import(".prisma/client").Prisma.PrismaPromise<({
        categorie: {
            id: string;
            nom: string;
            createdAt: Date;
            slug: string;
            emoji: string;
            ordre: number;
        };
        medias: {
            id: string;
            createdAt: Date;
            ordre: number;
            url: string;
            publicId: string;
            estCouv: boolean;
            creationId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        publiee: boolean;
        titre: string;
        description: string;
        prix: string;
        delai: string;
        categorieId: string;
        tissus: string[];
        featured: boolean;
        nouveaute: boolean;
        vues: number;
    })[]>;
    findFeatured(): import(".prisma/client").Prisma.PrismaPromise<({
        categorie: {
            id: string;
            nom: string;
            createdAt: Date;
            slug: string;
            emoji: string;
            ordre: number;
        };
        medias: {
            id: string;
            createdAt: Date;
            ordre: number;
            url: string;
            publicId: string;
            estCouv: boolean;
            creationId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        publiee: boolean;
        titre: string;
        description: string;
        prix: string;
        delai: string;
        categorieId: string;
        tissus: string[];
        featured: boolean;
        nouveaute: boolean;
        vues: number;
    })[]>;
    findOne(slug: string): Promise<{
        categorie: {
            id: string;
            nom: string;
            createdAt: Date;
            slug: string;
            emoji: string;
            ordre: number;
        };
        medias: {
            id: string;
            createdAt: Date;
            ordre: number;
            url: string;
            publicId: string;
            estCouv: boolean;
            creationId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        publiee: boolean;
        titre: string;
        description: string;
        prix: string;
        delai: string;
        categorieId: string;
        tissus: string[];
        featured: boolean;
        nouveaute: boolean;
        vues: number;
    }>;
    findAllAdmin(): import(".prisma/client").Prisma.PrismaPromise<({
        categorie: {
            id: string;
            nom: string;
            createdAt: Date;
            slug: string;
            emoji: string;
            ordre: number;
        };
        medias: {
            id: string;
            createdAt: Date;
            ordre: number;
            url: string;
            publicId: string;
            estCouv: boolean;
            creationId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        publiee: boolean;
        titre: string;
        description: string;
        prix: string;
        delai: string;
        categorieId: string;
        tissus: string[];
        featured: boolean;
        nouveaute: boolean;
        vues: number;
    })[]>;
    create(dto: CreateCreationDto): Promise<{
        categorie: {
            id: string;
            nom: string;
            createdAt: Date;
            slug: string;
            emoji: string;
            ordre: number;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        publiee: boolean;
        titre: string;
        description: string;
        prix: string;
        delai: string;
        categorieId: string;
        tissus: string[];
        featured: boolean;
        nouveaute: boolean;
        vues: number;
    }>;
    update(id: string, dto: Partial<CreateCreationDto>): Promise<{
        categorie: {
            id: string;
            nom: string;
            createdAt: Date;
            slug: string;
            emoji: string;
            ordre: number;
        };
        medias: {
            id: string;
            createdAt: Date;
            ordre: number;
            url: string;
            publicId: string;
            estCouv: boolean;
            creationId: string;
        }[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        publiee: boolean;
        titre: string;
        description: string;
        prix: string;
        delai: string;
        categorieId: string;
        tissus: string[];
        featured: boolean;
        nouveaute: boolean;
        vues: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        publiee: boolean;
        titre: string;
        description: string;
        prix: string;
        delai: string;
        categorieId: string;
        tissus: string[];
        featured: boolean;
        nouveaute: boolean;
        vues: number;
    }>;
    addMedia(creationId: string, buffer: Buffer, estCouv: boolean): Promise<{
        id: string;
        createdAt: Date;
        ordre: number;
        url: string;
        publicId: string;
        estCouv: boolean;
        creationId: string;
    }>;
    removeMedia(mediaId: string): Promise<{
        id: string;
        createdAt: Date;
        ordre: number;
        url: string;
        publicId: string;
        estCouv: boolean;
        creationId: string;
    }>;
}
