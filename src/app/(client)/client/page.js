import LogoutBtn from "@/features/auth/LogoutBtn";
import {auth} from "@/lib/auth";

async function page() {
  const session = await auth();

//   console.log("Client Dashboard Session:", session);

  return (
    <div>
      <h1>Client Dashboard</h1>

      <LogoutBtn />
    </div>
  );
}

export default page;
