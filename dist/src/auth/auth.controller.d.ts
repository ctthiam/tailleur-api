import { AuthService } from './auth.service';
declare class LoginDto {
    email: string;
    password: string;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto): Promise<{
        access_token: string;
        admin: {
            id: string;
            email: string;
            nom: string;
        };
    }>;
    getMe(req: {
        user: {
            sub: string;
        };
    }): Promise<{
        id: string;
        email: string;
        nom: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export {};
