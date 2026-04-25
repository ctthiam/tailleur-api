import { CategoriesService, CreateCategorieDto } from './categories.service';
export declare class CategoriesController {
    private service;
    constructor(service: CategoriesService);
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
