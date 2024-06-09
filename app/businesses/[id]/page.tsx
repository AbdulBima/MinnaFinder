"use client";
import BusinessCard from "@/components/BusinessCard";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


interface BusinessData {
	_id: string;
	ownersName: string;
	businessName: string;
	businessInfo: string;
	cacNumber: string;
	category: string;
	address: string;
	phone: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
}

const BusinessDetail = () => {
	const { id } = useParams();
	const [businessData, setBusinessData] = useState<BusinessData | null>(null);
	const [loading, setLoading] = useState<boolean>(true); // Track loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backendv2-smz4.onrender.com/api/minna/${id}`);
				setBusinessData(response.data);
				setLoading(false); 
      } catch (error) {
        console.error('Error fetching business data:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

	return (
		<>

				

			<div className='flex flex-col md:flex-row relative md:mt-20 mt-10 mb-40 md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4'>
				
			{loading ?  (
				<div className='cube-loader absolute top-1/2'>
					<div className='cube cube1'></div>
					<div className='cube cube2'></div>
					<div className='cube cube3'></div>
					<div className='cube cube4'></div>
				</div> ) : (
		
						<>
							<div className='xl:w-2/6 lg:w-2/5 w-80 md:block hidden'>
					<Image
						className='w-full'
						alt='Image of a girl posing'
						src='/images/hotel.jpg'
					/>
					<Image
						className='mt-6 w-full'
						alt='Image of a girl posing'
						src='/images/bank.jpg'
					/>
				</div>
				<div className='md:hidden'>
					<Image
						className='w-full'
						alt='Image of a girl posing'
						src='/images/hotel.jpg'
					/>
					<div className='flex items-center justify-between mt-3 space-x-4 md:space-x-0'>
						<Image
							alt='Image-tag-one'
							className='md:w-48 md:h-48 w-full'
							src='/images/bank.jpg'
						/>
					</div>
				</div>
				<div className='xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6'>
					<div className='border-b border-gray-200 pb-6'>
						<p className='sectionTitle text-sm leading-none text-gray-600'>
							{businessData?.category}
						</p>
						<h1
							className='
              sectionTitle 
							md:text-3xl 
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-4
						'
						>
							{businessData?.businessName}
						</h1>
					</div>

					<button
						className='
						sectionTitle 
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
						text-base
						flex
						items-center
						justify-center
						leading-none
						text-white
						bg-gray-800
						w-full
						py-4
						hover:bg-gray-700
					'
					>
						<svg
							className='mr-3'
							width='16'
							height='17'
							viewBox='0 0 16 17'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7.02301 7.18999C7.48929 6.72386 7.80685 6.12992 7.93555 5.48329C8.06425 4.83666 7.9983 4.16638 7.74604 3.55724C7.49377 2.94809 7.06653 2.42744 6.51835 2.06112C5.97016 1.6948 5.32566 1.49928 4.66634 1.49928C4.00703 1.49928 3.36252 1.6948 2.81434 2.06112C2.26615 2.42744 1.83891 2.94809 1.58665 3.55724C1.33439 4.16638 1.26843 4.83666 1.39713 5.48329C1.52583 6.12992 1.8434 6.72386 2.30968 7.18999L4.66634 9.54749L7.02301 7.18999Z'
								stroke='white'
								strokeWidth='1.25'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M4.66699 4.83333V4.84166'
								stroke='white'
								strokeWidth='1.25'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M13.69 13.8567C14.1563 13.3905 14.4738 12.7966 14.6025 12.15C14.7312 11.5033 14.6653 10.8331 14.413 10.2239C14.1608 9.61476 13.7335 9.09411 13.1853 8.72779C12.6372 8.36148 11.9926 8.16595 11.3333 8.16595C10.674 8.16595 10.0295 8.36148 9.48133 8.72779C8.93314 9.09411 8.5059 9.61476 8.25364 10.2239C8.00138 10.8331 7.93543 11.5033 8.06412 12.15C8.19282 12.7966 8.51039 13.3905 8.97667 13.8567L11.3333 16.2142L13.69 13.8567Z'
								stroke='white'
								strokeWidth='1.25'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
							<path
								d='M11.333 11.5V11.5083'
								stroke='white'
								strokeWidth='1.25'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						Visit Website
					</button>
					<div>
						<p className='xl:pr-10 sectionTitle text-base md:text-xl lg:leading-tight leading-normal text-gray-600 mt-7'>
						{businessData?.businessInfo}
						</p>

						<p className=' sectionTitle text-base leading-4 mt-10 text-gray-600'>
							Operating Hours:
						</p>
						<p className=' sectionTitle text-base leading-4 mt-4 text-gray-600'>
							Weekdays: 8:00 AM - 10:00 PM
						</p>
						<p className='sectionTitle text-base leading-4 mt-4 text-gray-600'>
							Weekends: 10:00 AM - 05:00 PM
						</p>
						<p className='sectionTitle md:w-96 text-base leading-normal text-gray-600 mt-4'>
							Location: {businessData?.address}
						</p>
					</div>
							</div>
							
							</>
					)}
				
			</div>

			{/* <div className='flex flex-col py-12 md:ml-16'>
				<h1
					className=' 
            sectionTitle 
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
              py-8 md:ml-20 ml-4
						'
				>
					TRY SOMETHING SIMILAR
				</h1>
				<div className='grid px-6  pb-20 md:px-20 gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
					<BusinessCard
						imageUrl='/images/school.jpg'
						category='School'
						title='Bright Minds Academy'
						info='Empowering young minds through innovative education and personalized learning.' url={""}					/>
					<BusinessCard
						imageUrl='/images/gym.jpg'
						category='Fitness Center'
						title='ActiveLife Fitness'
						info='Achieve your fitness goals with state-of-the-art equipment and expert trainers at ActiveLife Fitness.' url={""}					/>
					<BusinessCard
						imageUrl='/images/spa.jpg'
						category='Spa'
						title='Tranquil Retreat Spa'
						info='Indulge in relaxation and rejuvenation with our range of spa treatments and wellness services.' url={""}					/>
				</div>
			</div> */}
		</>
	);
};

export default BusinessDetail;

export const runtime = 'edge';
