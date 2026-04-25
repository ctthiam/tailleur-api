import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding...');

  // Admin
  const hash = await bcrypt.hash('admin123', 10);
  await prisma.admin.upsert({
    where: { email: 'admin@atelier.sn' },
    update: {},
    create: { email: 'admin@atelier.sn', password: hash, nom: 'Le Tailleur' },
  });

  // Catégories
  const cats = [
    { nom: 'Boubous',        slug: 'boubous',        emoji: '👘', ordre: 1 },
    { nom: 'Costumes',       slug: 'costumes',        emoji: '🧥', ordre: 2 },
    { nom: 'Robes',          slug: 'robes',           emoji: '👗', ordre: 3 },
    { nom: "Tenues de fête", slug: 'tenues-fete',     emoji: '✨', ordre: 4 },
    { nom: 'Uniformes',      slug: 'uniformes',       emoji: '👔', ordre: 5 },
    { nom: 'Enfants',        slug: 'enfants',         emoji: '🌟', ordre: 6 },
  ];

  for (const cat of cats) {
    await prisma.categorie.upsert({
      where: { slug: cat.slug }, update: {}, create: cat,
    });
  }

  // Avis
  const avis = [
    { nom: 'Fatou D.', ville: 'Dakar',       note: 5, tenue: 'Grand Boubou Broderie Or',  commentaire: "Je suis ravie ! Mon boubou était exactement comme je l'imaginais.", publie: true },
    { nom: 'Mamadou S.', ville: 'Thiès',     note: 5, tenue: 'Costume 3 Pièces Anthracite', commentaire: "Costume de mariage parfait. Tout le monde m'a complimenté.", publie: true },
    { nom: 'Aïssatou B.', ville: 'Saint-Louis', note: 5, tenue: 'Robe Pagne Wax Festive', commentaire: "Très professionnel et à l'écoute. Ma robe était magnifique.", publie: true },
  ];

  for (const a of avis) {
    await prisma.avis.create({ data: a });
  }

  console.log('✅ Seed terminé !');
  console.log('   Admin : admin@atelier.sn / admin123');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
