import db from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getCertifications = () => 
  unstable_cache(
    async () => {
      try {
        return await db.certification.findMany({
          orderBy: { createdAt: "desc" }
        });
      } catch (error) {
        console.error("Error inside cached getCertifications query:", error);
        throw new Error("Failed to retrieve cached certifications.");
      }
    },
    ["certifications-list"],
    {
      tags: ["certifications"],
    }
  )();
