import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

export class UserSeed {
  static async run(client: PrismaClient): Promise<void> {
    const hasUsers = await client.user.findMany();
    if (!hasUsers.length) {
      await this.store(client);
      return;
    }
    console.log('The table has users');
  }

  private static async store(client: PrismaClient): Promise<void> {
    await client.user.createMany({
      data: Array.from({ length: 3 }).map(() => ({
        email: faker.internet.email(),
        name: faker.person.fullName(),
      })),
    });
  }
}
