"use client";
import React, { useState, useEffect } from "react";
import BusinessCard from "./BusinessCard";
import { IoMdWine } from "react-icons/io";
import { RiHotelLine } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";
import { MdOutlineLocalPharmacy } from "react-icons/md";
import { TbBuildingHospital } from "react-icons/tb";
import { MdSchool } from "react-icons/md";
import { RiBankFill } from "react-icons/ri";
import axios from "axios";

interface Business {
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

const BusinessList = () => {
	const [selectedValue, setSelectedValue] =
		useState<string>("");
	const [businessDirectories, setBusinessDirectories] =
		useState<Business[]>([]);
	const [originalData, setOriginalData] = useState<
		Business[]
	>([]);
	const [loading, setLoading] = useState<boolean>(true); // Track loading state

	useEffect(() => {
		fetchAllBusinesses();
	}, []);

	const fetchAllBusinesses = async () => {
		try {
			const response = await axios.get<Business[]>(
				"https://backendv2-smz4.onrender.com/api/minna/"
			);
			setBusinessDirectories(response.data);
			setOriginalData(response.data); // Store original data
			setLoading(false); // Set loading state to false after data is fetched
		} catch (error) {
			console.error(
				"Error fetching businesses:",
				error
			);
		}
	};

	const handleFilter = (category: string) => {
		setSelectedValue(category);
		let filteredDirectories = [...originalData]; // Use original data for filtering

		if (category) {
			filteredDirectories = originalData.filter(
				(directory) =>
					directory.category === category
			);
		}

		setBusinessDirectories(filteredDirectories);
	};

	return (
		<>
			{/* desktop filter section */}
			<section className='hidden md:flex  fixed z-20 top-20'>
				<div className='items-center bg-yellow-50  border-b border-orange-950 shadow-sm border-opacity-10 px-8 py-4 mx-auto w-screen lg:px-16 md:px-12 lg:py-4'>
					<div className='justify-center w-full mx-auto'>
						<nav
							className='flex justify-center mx-auto'
							aria-label='Breadcrumb'
						>
							<ol
								role='list'
								className='flex flex-row items-center  space-x-4'
							>
								<li>
									<div className='flex flex-row items-center space-x-2 '>
										<a
											href='#all'
											className={`px-3 py-0.5 text-sm  font-medium duration-200 rounded-none ${
												selectedValue ===
												""
													? "text-gray-700 px-5 bg-orange-100 underline underline-offset-4 decoration-orange-950"
													: "text-gray-500"
											} hover:text-gray-700 hover:scale-95`}
											onClick={() =>
												handleFilter(
													""
												)
											}
										>
											All
										</a>
									</div>
								</li>
								<li aria-hidden='true'></li>
								<li>
									<div className='flex flex-row items-center space-x-2 '>
										<a
											href='#restaurants'
											className={`sectionTitle ml-4 text-sm font-medium duration-200 rounded-none ${
												selectedValue ===
												"restaurants"
													? "text-gray-700 px-5 bg-orange-100 underline underline-offset-4 decoration-orange-950"
													: "text-gray-500"
											} hover:scale-95 hover:bg-gray-50 hover:text-gray-700`}
											onClick={() =>
												handleFilter(
													"Food"
												)
											}
										>
											Restaurants
										</a>
										<IoMdWine />
									</div>
								</li>
								<li aria-hidden='true'></li>
								<li>
									<div className='flex flex-row items-center space-x-2 '>
										<a
											href='#hotels'
											className={`sectionTitle ml-4 text-sm font-medium duration-200 rounded-none ${
												selectedValue ===
												"hotels"
													? "text-gray-700 px-5 bg-orange-100 underline underline-offset-4 decoration-orange-950"
													: "text-gray-500"
											} hover:scale-95 hover:bg-gray-50 hover:text-gray-700`}
											onClick={() =>
												handleFilter(
													"Services"
												)
											}
										>
											Hotels
										</a>
										<RiHotelLine />
									</div>
								</li>
								<li aria-hidden='true'></li>
								<li>
									<div className='flex flex-row items-center space-x-2 '>
										<a
											href='#supermarkets'
											className={`sectionTitle ml-4 text-sm font-medium duration-200 rounded-none ${
												selectedValue ===
												"supermarkets"
													? "text-gray-700 px-5 bg-orange-100 underline underline-offset-4 decoration-orange-950"
													: "text-gray-500"
											} hover:scale-95 hover:bg-gray-50 hover:text-gray-700`}
											onClick={() =>
												handleFilter(
													"Services"
												)
											}
										>
											Supermarkets
										</a>
										<FaShop />
									</div>
								</li>
								<li aria-hidden='true'></li>
								<li>
									<div className='flex flex-row items-center space-x-2 '>
										<a
											href='#pharmacies'
											className={`sectionTitle ml-4 text-sm font-medium duration-200 rounded-none ${
												selectedValue ===
												"pharmacies"
													? "text-gray-700 px-5 bg-orange-100 underline underline-offset-4 decoration-orange-950"
													: "text-gray-500"
											} hover:scale-95 hover:bg-gray-50 hover:text-gray-700`}
											onClick={() =>
												handleFilter(
													"Services"
												)
											}
										>
											Pharmacies
										</a>
										<MdOutlineLocalPharmacy />
									</div>
								</li>
								<li aria-hidden='true'></li>
								<li>
									<div className='flex flex-row items-center space-x-2 '>
										<a
											href='#banks'
											className={`sectionTitle ml-4 text-sm font-medium duration-200 rounded-none ${
												selectedValue ===
												"banks"
													? "text-gray-700 px-5 bg-orange-100 underline underline-offset-4 decoration-orange-950"
													: "text-gray-500"
											} hover:scale-95 hover:bg-gray-50 hover:text-gray-700`}
											onClick={() =>
												handleFilter(
													"Banking"
												)
											}
										>
											Banks
										</a>
										<RiBankFill />
									</div>
								</li>
								<li aria-hidden='true'></li>
								<li>
									<div className='flex flex-row items-center space-x-2 '>
										<a
											href='#Hospitals'
											className={`sectionTitle ml-4 text-sm font-medium duration-200 rounded-none ${
												selectedValue ===
												"hospitals"
													? "text-gray-700 px-5 bg-orange-100 underline underline-offset-4 decoration-orange-950"
													: "text-gray-500"
											} hover:scale-95 hover:bg-gray-50 hover:text-gray-700`}
											onClick={() =>
												handleFilter(
													"Services"
												)
											}
										>
											Hospitals
										</a>
										<TbBuildingHospital />
									</div>
								</li>
								<li aria-hidden='true'></li>
								<li>
									<div className='flex flex-row items-center space-x-2 '>
										<a
											href='#schools'
											className={`sectionTitle ml-4 text-sm font-medium duration-200 rounded-none ${
												selectedValue ===
												"schools"
													? "text-gray-700 px-5 bg-orange-100 underline underline-offset-4 decoration-orange-950"
													: "text-gray-500"
											} hover:scale-95 hover:bg-gray-50 hover:text-gray-700`}
											onClick={() =>
												handleFilter(
													"Services"
												)
											}
										>
											Schools
										</a>
										<MdSchool />
									</div>
								</li>
							</ol>
						</nav>
					</div>
				</div>
			</section>

			{/* Mobile filter section */}
			<section className='flex md:hidden ml-8 mt-24 z-10'>
				<div>
					<select
						name='HeadlineAct'
						id='HeadlineAct'
						value={selectedValue}
						onChange={(e) =>
							handleFilter(e.target.value)
						}
						className='select select-bordered w-[80vw] rounded-none'
					>
						<option value=''>
							All Categories
						</option>
						{/* Assuming categories are dynamic based on the available businesses */}
						{Array.from(
							new Set(
								businessDirectories.map(
									(business) =>
										business.category
								)
							)
						).map((category) => (
							<option
								key={category}
								value={category}
							>
								{category}
							</option>
						))}
					</select>
				</div>
			</section>

		
			<div className='flex relative md:mt-20  mt-10 px-6 mb-40 py-4 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
					{loading ? (
				<div className='cube-loader absolute top-1/2'>
					<div className='cube cube1'></div>
					<div className='cube cube2'></div>
					<div className='cube cube3'></div>
					<div className='cube cube4'></div>
				</div> ) : ( 	<div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full'>
					{businessDirectories.map((business) => (
						<BusinessCard
							key={business._id}
							imageUrl='/images/hotel.jpg' // Add a default image URL or update the BusinessCardProps interface to include imageUrl as an optional property
							category={business.category}
							title={business.businessName}
							info={business.businessInfo}
							url={business._id} // Update with the actual URL if available
						/>
					))}
				</div>
			)}

			
			</div>
		</>
	);
};

export default BusinessList;
