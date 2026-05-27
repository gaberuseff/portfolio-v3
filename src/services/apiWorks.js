import db from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getWorks = () => 
  unstable_cache(
    async () => {
      try {
        return await db.work.findMany({
          orderBy: { id: "asc" }
        });
      } catch (error) {
        console.error("Error inside cached getWorks query:", error);
        throw new Error("Failed to retrieve cached works.");
      }
    },
    ["works-list"],
    {
      tags: ["works"],
    }
  )();

export const getWorkById = (id) => 
  unstable_cache(
    async () => {
      try {
        return await db.work.findUnique({
          where: { id: Number(id) }
        });
      } catch (error) {
        console.error("Error inside cached getWorkById query:", error);
        throw new Error("Failed to retrieve cached work details.");
      }
    },
    ["work-detail", String(id)],
    {
      tags: ["works", `work-${id}`],
    }
  )();
