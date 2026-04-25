import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async login(email: string, password: string) {
    const admin = await this.prisma.admin.findUnique({ where: { email } });
    if (!admin) throw new UnauthorizedException('Identifiants invalides');

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) throw new UnauthorizedException('Identifiants invalides');

    const token = this.jwt.sign({ sub: admin.id, email: admin.email });
    return {
      access_token: token,
      admin: { id: admin.id, email: admin.email, nom: admin.nom },
    };
  }

  async getMe(adminId: string) {
    const admin = await this.prisma.admin.findUnique({ where: { id: adminId } });
    if (!admin) throw new UnauthorizedException();
    const { password: _, ...rest } = admin;
    return rest;
  }

  async createAdmin(email: string, password: string, nom: string) {
    const hash = await bcrypt.hash(password, 10);
    return this.prisma.admin.create({ data: { email, password: hash, nom } });
  }
}
