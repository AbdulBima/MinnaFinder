"use client";
import React from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SiteMenuProps {
	closeMenu: () => void; // Prop to close the menu
}

const SiteMenu: React.FC<SiteMenuProps> = ({
	closeMenu,
}) => {
	const pathname = usePathname();

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { y: "100%" },
		show: { y: "0%", transition: { duration: 0.4 } },
	};

	return (
		<>
				<div className='fixed -mt-8  bg-yellow-50 h-[60vh] w-[100vw] border-b border-opacity-20  shadow-md orange-950 z-40 overflow-hidden '>
					<motion.ul
						className='sectionTitle space-y-1 mx-auto px-5 pt-20 uppercase'
						aria-label='Sidebar'
						variants={container}
						initial='hidden'
						animate='show'
					>
						<div className='overflow-hidden z-40'>
							<motion.li
								variants={item}
								className='sectionTitle text-black   flex border-b border-orange-800 border-opacity-10  items-center px-3 py-2 '
							>
								<Link href='/'>
									<span
										className={cn(
											"truncate   text-xl ",
											pathname === "/"
												? "text-orange-600"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										HOME
									</span>
								</Link>
							</motion.li>
						</div>

						<div className='overflow-hidden'>
							<motion.li
								variants={item}
								className='sectionTitle text-black flex border-b border-orange-800 border-opacity-10  items-center px-3 py-2 '
							>
								<Link href='#businesses'>
									<span
										className={cn(
											"truncate   text-xl ",
											pathname ===
												"/businesses"
												? "text-orange-600"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										Listing
									</span>
								</Link>
							</motion.li>
						</div>

						<div className='overflow-hidden'>
							<motion.li
								variants={item}
								className='sectionTitle text-black flex border-b border-orange-800 border-opacity-10  items-center px-3 py-2 '
							>
								<Link href='/submit'>
									<span
										className={cn(
											"truncate   text-xl ",
											pathname ===
												"/submit"
												? "text-orange-600"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										Submit
									</span>
								</Link>
							</motion.li>
						</div>

						<div className='overflow-hidden'>
							<motion.li
								variants={item}
								className='sectionTitle text-black flex border-b border-orange-800 border-opacity-10  items-center px-3 py-2 '
							>
								<Link href='#about'>
									<span
										className={cn(
											"truncate   text-xl ",
											pathname ===
												"/about"
												? "text-orange-600"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										About
									</span>
								</Link>
							</motion.li>
						</div>

						<div className='overflow-hidden'>
							<motion.li
								variants={item}
								className='sectionTitle text-black flex   items-center px-3 py-2 '
							>
								<Link href='#contact'>
									<span
										className={cn(
											"truncate   text-xl ",
											pathname ===
												"/contact"
												? "text-orange-600"
												: ""
										)}
										onClick={() => {
											closeMenu();
										}}
									>
										Contact
									</span>
								</Link>
							</motion.li>
						</div>

					
					</motion.ul>

				
				</div>

		</>
	);
};

export default SiteMenu;
