const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    console.log('Create 3 explorers');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

(async function main() {
  try {
    const explorer1 = await prisma.nuevoExplorer.upsert({
      where: { name: 'Explorer 1'},
      update: {},
      create: {
        name: 'Explorer 1',
        lang: 'lang1',
        missionCommander: 'Carlo',
      },
    });

    const explorer2 = await prisma.nuevoExplorer.upsert({
      where: { name: 'Explorer 2'},
      update: {},
      create: {
        name: 'Explorer 2',
        lang: 'lang2',
        missionCommander: 'Carlo',
      },
    });

    const explorer3 = await prisma.nuevoExplorer.upsert({
      where: { name: 'Explorer 3'},
      update: {},
      create: {
        name: 'Explorer 3',
        lang: 'lang3',
        missionCommander: 'Carlo',
      },
    });

    console.log('Creaste 3 nuevos explorers');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();