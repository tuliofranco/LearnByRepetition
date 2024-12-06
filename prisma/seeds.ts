// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('Seeding database with words...');

//   // Lista de palavras para adicionar
//   const words = [
//     { english: 'and', portuguese: 'e' },
//     { english: 'hello', portuguese: 'olá' },
//     { english: 'world', portuguese: 'mundo' },
//     { english: 'yes', portuguese: 'sim' },
//     { english: 'no', portuguese: 'não' },
//   ];

//   // Adicionando as palavras ao banco de dados
//   await prisma.word.createMany({
//     data: words.map((word) => ({
//       english: word.english,
//       portuguese: word.portuguese,
//       correctCount: 0,
//       wrongCount: 0,
//       createdAt: new Date(),
//     })),
//   });

//   console.log('Database seeded successfully with words.');
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
