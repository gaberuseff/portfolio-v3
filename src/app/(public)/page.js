import AboutMe from "@/features/public/home/AboutMe"
import ClientPortal from "@/features/public/home/ClientPortal"
import CTA from "@/features/public/home/CTA"
import Hero from "@/features/public/home/Hero"
import SelectedWorks from "@/features/public/home/SelectedWorks"
import TechStack from "@/features/public/home/TechStack"
import { auth } from "@/lib/auth"

async function page() {
  const session = await auth();
  const isLoggedIn = !!session?.user;

  return (
    <div>
      <Hero />
      <SelectedWorks />
      <AboutMe/>
      <TechStack />      
      <ClientPortal isLoggedIn={isLoggedIn} />
      <CTA/>
    </div>
  )
}

export default page
