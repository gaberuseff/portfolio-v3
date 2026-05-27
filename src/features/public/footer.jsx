
import Link from 'next/link';


const links = [
    {
        title: 'Works',
        href: '/works',
    },
    {
        title: 'Certifications',
        href: '/certifications',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
    {
        title: 'About me',
        href: '/about',
    }
]

export default function Footer() {
    return (
        <footer className="py-16  border-t border-border/70">
            <div className="mx-auto max-w-5xl px-6">
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <span className="text-muted-foreground block text-center text-sm">Developed by Gaber Usef</span>
            </div>
        </footer>
    );
}