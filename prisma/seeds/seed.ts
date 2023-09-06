import { PrismaClient } from '@prisma/client';
import { UserSeed } from './user';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  await UserSeed.run(prisma);
  console.log('Seeding finished. ');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
