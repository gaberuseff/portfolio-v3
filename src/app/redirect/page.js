import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";

export default async function page() {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/login");
  }

  const role = session.user.role;
  const active = session.user.status;

  console.log("User role in redirect page:", role);
  console.log("User status in redirect page:", active);

  if (role === "USER") {
    redirect("/client");
  }

  redirect("/admin");
}
