"use client";
import Link from "@/node_modules/next/link";
import { usePathname } from "@/node_modules/next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

const Navbar = () => {
	let currentPath = usePathname();
	const { status, data: session } = useSession();
	console.log(currentPath);
	const links = [
		{ label: "Dashboard", href: "/" },
		{ label: "Issues", href: "/issues" },
	];
	return (
		<nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
			<Link href="/">
				<AiFillBug />
			</Link>
			<ul className="flex space-x-6">
				{links.map((link) => (
					<li key={link.href}>
						<Link
							className={classnames({
								"text-zinc-900": link.href === currentPath,
								"text-zinc-500": link.href !== currentPath,
								"hover:text-zinc-800 transition-colors": true,
							})}
							href={link.href}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
			<div className="userInfo">
				{status === "authenticated" && (
					<Link href="/api/auth/signout">Log out</Link>
				)}
				{status === "unauthenticated" && (
					<Link href="/api/auth/signin">Login</Link>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
