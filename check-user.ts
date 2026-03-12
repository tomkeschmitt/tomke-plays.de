// check-user.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("--- Suche alle User in der Datenbank ---");

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
    }
  });

  if (users.length === 0) {
    console.log("Keine User gefunden!");
  } else {
    console.table(users); // Zeigt eine schöne Tabelle im Terminal
  }
}

main()
  .catch((e) => {
    console.error("Fehler:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
