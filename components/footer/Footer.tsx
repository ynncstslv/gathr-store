import React from 'react';
import Link from 'next/link';

import { paths } from '@/lib/data';

import Logo from '@/components/Logo';

import { Github, Instagram, LinkIcon, Linkedin } from 'lucide-react';

const Footer = () => {
	return (
		<>
			<footer className="py-12 bg-violet-950">
				<div className="w-[90%] grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 2xl:w-[80%]">
					<div>
						<Logo />
						<div className="mt-4 space-y-1 text-sm text-violet-100">
							<p>42 Pln. Teferi Akosa, Jamuraa - Dominaria</p>
							<p>contact@gathr.com | +1 234 5678</p>
						</div>
						<ul className="hidden items-center justify-start gap-4 mt-4 text-sm md:flex">
							{paths.map((path) => (
								<React.Fragment key={path.id}>
									<Link
										href={path.route}
										className="font-light text-teal-400 transition hover:text-teal-400 hover:opacity-90"
									>
										<li>{path.name}</li>
									</Link>
								</React.Fragment>
							))}
						</ul>
					</div>
					<div className="flex flex-col items-start gap-6 md:items-end">
						<p className="w-[80%] hidden text-sm text-left text-violet-100 2xl:w-[50%] md:block md:text-right">
							Gathr is the culmination of my journey through the ReactJS course
							at Coderhouse. As a final project, Gathr is an ecommerce
							application tailored for Magic: The Gathering enthusiasts.
						</p>
						<div className="flex items-center justify-end text-teal-400 gap-4 mt-2">
							<Link href="https://ynncstslv.com/" target="_blank">
								<LinkIcon size={20} />
							</Link>
							<Link href="https://github.com/ynncstslv/" target="_blank">
								<Github size={20} />
							</Link>
							<Link href="https://linkedin.com/in/ynncstslv/" target="_blank">
								<Linkedin size={20} />
							</Link>
							<Link href="https://instagram.com/ynncstslv/" target="_blank">
								<Instagram size={20} />
							</Link>
						</div>
					</div>
				</div>
			</footer>
			<footer>
				<div className="bg-teal-400">
					<p className="px-10 py-3 font-light text-xs text-center text-violet-950">
						2023 All Rights Reserved, Yann Costa e Silva | Build with React,
						Next.js, TypeScript, and Tailwind CSS.
					</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
