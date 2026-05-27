import Footer from "@/features/public/footer"
import { Header } from "@/features/public/header"
import { auth } from "@/lib/auth"

async function layout({ children }) {
    const session = await auth();
    const isLoggedIn = !!session?.user;

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} />
            <main className="flex-1 min-h-screen">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default layout