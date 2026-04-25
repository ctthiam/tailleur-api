import { PrismaService } from '../prisma/prisma.service';
export declare class CreateCategorieDto {
    nom: string;
    slug: string;
    emoji?: string;
    ordre?: number;
}
export declare class CategoriesService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        _count: {
            creations: number;
        };
    } & {
        id: string;
        nom: string;
        createdAt: Date;
        slug: string;
        emoji: string;
        ordre: number;
    })[]>;
    findOne(slug: string): Promise<{
        id: string;
        nom: string;
        createdAt: Date;
        slug: string;
        emoji: string;
        ordre: number;
    }>;
    create(dto: CreateCategorieDto): import(".prisma/client").Prisma.Prisma__CategorieClient<{
        id: string;
        nom: string;
        createdAt: Date;
        slug: string;
        emoji: string;
        ordre: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, dto: Partial<CreateCategorieDto>): Promise<{
        id: string;
        nom: string;
        createdAt: Date;
        slug: string;
        emoji: string;
        ordre: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        nom: string;
        createdAt: Date;
        slug: string;
        emoji: string;
        ordre: number;
    }>;
}
