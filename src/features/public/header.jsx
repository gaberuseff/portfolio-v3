"use client";

import React, { useState } from "react";
import { LuGrid2X2Plus } from "react-icons/lu";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { MenuToggle } from '@/components/menu-toggle';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Header({ isLoggedIn }) {
	const [open, setOpen] = useState(false);
	const pathname = usePathname();

	const links = [
		{
			label: 'Works',
			href: '/works',
		},
		{
			label: 'Certifications',
			href: '/certifications',
		},
		{
			label: 'Contact',
			href: '/contact',
		},
	];

	return (
        <header
            className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-zinc-200/20 dark:border-zinc-800/20 backdrop-blur-md">
            <nav
                className="mx-auto flex h-16 w-[90%] max-w-7xl items-center justify-between px-2">
				<Link href="/" className="flex items-center gap-2.5">
					<Image
						src='/logo.png'
						alt="Logo"
						width={28}
						height={28}
						className="rounded-md"
					/>
					<p className="font-geist text-sm font-semibold tracking-tight text-foreground">Gaber Usef</p>
				</Link>
				<div className="hidden items-center gap-6 lg:flex text-xs font-bold tracking-wider uppercase text-foreground">
					{links.map((link) => {
						const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
						return (
							<Link
								key={link.href}
								className={`relative py-1.5 transition-all duration-300 font-semibold tracking-widest ${
									isActive 
										? "text-primary font-bold" 
										: "text-foreground/75 hover:text-primary"
								}`}
								href={link.href}>
								{link.label}
								{isActive && (
									<span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full transition-all duration-300" />
								)}
							</Link>
						);
					})}
					<span className="text-zinc-200 dark:text-zinc-800 font-light">|</span>
					{isLoggedIn ? (
						<Link 
							href="/redirect"
							className={`relative py-1.5 transition-all duration-300 font-semibold ${
								pathname.startsWith("/redirect") || pathname.startsWith("/projects") || pathname.startsWith("/admin")
									? "text-primary font-bold" 
									: "text-foreground/75 hover:text-primary"
							}`}
						>
							Dashboard
						</Link>
					) : (
						<>
							<Link 
								href="/login"
								className={`relative py-1.5 transition-all duration-300 font-semibold ${
									pathname === "/login" 
										? "text-primary font-bold" 
										: "text-foreground/75 hover:text-primary"
								}`}
							>
								Sign In
								{pathname === "/login" && (
									<span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full transition-all duration-300" />
								)}
							</Link>
							<span className="text-zinc-200 dark:text-zinc-800 font-light">/</span>
							<Link 
								href="/signup"
								className={`relative py-1.5 transition-all duration-300 font-semibold ${
									pathname === "/signup" 
										? "text-primary font-bold" 
										: "text-foreground/75 hover:text-primary"
								}`}
							>
								Get Started
								{pathname === "/signup" && (
									<span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full transition-all duration-300" />
								)}
							</Link>
						</>
					)}
				</div>
				<Sheet open={open} onOpenChange={setOpen}>
					<Button size="icon" variant="outline" className="lg:hidden">
						<MenuToggle strokeWidth={2.5} open={open} onOpenChange={setOpen} className="size-6" />
					</Button>
					<SheetContent
                        className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg border-r border-zinc-200/20 dark:border-zinc-800/20"
                        showCloseButton={false}
                        side="left">
						<SheetHeader className="sr-only">
							<SheetTitle>Navigation Menu</SheetTitle>
							<SheetDescription>Access portfolio links and account entry actions.</SheetDescription>
						</SheetHeader>
						<div className="grid gap-y-1 overflow-y-auto px-4 pt-16 pb-6">
							{links.map((link) => {
								const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
								return (
									<Link
										key={link.href}
										onClick={() => setOpen(false)}
										className={`py-3.5 text-lg transition-all duration-300 flex items-center justify-between border-b border-zinc-200/10 ${
											isActive 
												? 'text-primary font-bold' 
												: 'text-foreground/75 hover:text-primary font-medium'
										}`}
										href={link.href}>
										<span>{link.label}</span>
										{isActive && (
											<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
										)}
									</Link>
								);
							})}
						</div>
						<SheetFooter className="mt-8 flex flex-col gap-3 px-4">
							{isLoggedIn ? (
								<Button asChild onClick={() => setOpen(false)} className="w-full justify-center bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-300">
									<Link href="/redirect">Dashboard</Link>
								</Button>
							) : (
								<>
									<Button variant="outline" asChild onClick={() => setOpen(false)} className="w-full justify-center">
										<Link href="/login">Sign In</Link>
									</Button>
									<Button asChild onClick={() => setOpen(false)} className="w-full justify-center">
										<Link href="/signup">Get Started</Link>
									</Button>
								</>
							)}
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</nav>
        </header>
    );
}
