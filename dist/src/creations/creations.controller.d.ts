import { CreationsService, CreateCreationDto } from './creations.service';
export declare class CreationsController {
    private service;
    constructor(service: CreationsService);
    findAll(cat?: string): import(".prisma/client").Prisma.PrismaPromise<({
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
    addMedias(id: string, files: Express.Multer.File[], couv?: string): Promise<{
        id: string;
        createdAt: Date;
        ordre: number;
        url: string;
        publicId: string;
        estCouv: boolean;
        creationId: string;
    }[]>;
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
