import { Header } from "@/features/public/header"
import { auth } from "@/lib/auth"

async function layout({ children }) {
    const session = await auth();
    const isLoggedIn = !!session?.user;

    return (
        <div>
            <Header isLoggedIn={isLoggedIn} />
            <main>
                {children}
            </main>
        </div>
    )
}

export default layout
