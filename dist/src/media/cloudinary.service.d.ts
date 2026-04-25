import { ConfigService } from '@nestjs/config';
export declare class CloudinaryService {
    private config;
    constructor(config: ConfigService);
    uploadBuffer(buffer: Buffer, folder: string): Promise<{
        url: string;
        publicId: string;
    }>;
    deleteImage(publicId: string): Promise<any>;
}
