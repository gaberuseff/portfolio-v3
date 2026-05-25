import db from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getClientProjects = (userId) => 
  unstable_cache(
    async () => {
      try {
        return await db.project.findMany({
          where: {
            userId: userId,
          },
          orderBy: {
            createdAt: "desc",
          },
        });
      } catch (error) {
        console.error("Error inside cached getClientProjects query:", error);
        throw new Error("Failed to retrieve cached projects from database.");
      }
    },
    ["projects-list", userId],
    {
      tags: ["projects"],
    }
  )();

export const getClientProject = (id, userId) => 
  unstable_cache(
    async () => {
      try {
        return await db.project.findFirst({
          where: {
            id: id,
            userId: userId,
          },
        });
      } catch (error) {
        console.error("Error inside cached getClientProject query:", error);
        throw new Error("Failed to retrieve cached project details from database.");
      }
    },
    ["project-detail", id, userId],
    {
      tags: ["projects", `project-${id}`],
    }
  )();
