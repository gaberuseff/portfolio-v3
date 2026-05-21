import {PrismaClient} from "@prisma/client";

// بنستخدم كائن globalThis للحفاظ على نفس الاتصال في بيئة التطوير (Development)
const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

export {db};
