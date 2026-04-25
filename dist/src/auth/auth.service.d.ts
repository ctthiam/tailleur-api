import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private jwt;
    constructor(prisma: PrismaService, jwt: JwtService);
    login(email: string, password: string): Promise<{
        access_token: string;
        admin: {
            id: string;
            email: string;
            nom: string;
        };
    }>;
    getMe(adminId: string): Promise<{
        id: string;
        email: string;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    createAdmin(email: string, password: string, nom: string): Promise<{
        id: string;
        email: string;
        password: string;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
