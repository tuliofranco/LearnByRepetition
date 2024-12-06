import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect(); // Conecta ao banco ao iniciar o módulo
  }

  async onModuleDestroy() {
    await this.$disconnect(); // Desconecta ao destruir o módulo
  }
}
