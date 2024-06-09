"use client"
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";


const Nav = () => {
	const pathname = usePathname();

	return (
	<>	
	
			<div className='hidden z-40 top-0 fixed md:grid px-4 py-6  border-b border-orange-950 shadow-sm border-opacity-10 bg-yellow-50 w-full md:px-24 lg:px-8'>
			<div className='relative grid items-center grid-cols-2 lg:grid-cols-3'>
				<ul className='flex items-center space-x-8 lg:flex'>
					<li>
						<a
							href='#about'
							aria-label='Our product'
							title='Our product'
							className='sectionTitle font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
						>
							About
						</a>
					</li>
					<li>
						<a
							href='/submit'
							aria-label='Our product'
							title='Our product'
							className='sectionTitle font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
						>
							Submit
						</a>
					</li>
				</ul>
				<a
					href='/'
					aria-label='Company'
					title='Company'
					className='inline-flex items-center lg:mx-auto'
				>
					<span className='logov ml-2 text-3xl font-bold tracking-wide text-black '>
						MinnaFinder
					</span>
				</a>
				{/* <ul className='flex items-center flex-row  ml-80 space-x-8 '>
					<li className={cn(
											"flex flex-row space-x-2 truncate   text-xl font-bold",
											pathname === "/businesses"
												? "decoration-orange-950 underline decoration-4"
												: ""
										)}
                    
          >
						<svg
							className='w-4 h-4 text-black mt-1'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						>
							<rect
								x='3'
								y='3'
								width='18'
								height='18'
								rx='2'
								ry='2'
							></rect>
							<path d='M9 9h6v6H9z'></path>
						</svg>
						<a
							href='/'
							aria-label='Sign in'
							title='Sign in'
							className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
						>
							ALL
						</a>
					</li>
				</ul> */}
			</div>
		</div>
		
		</>
)};

export default Nav;
