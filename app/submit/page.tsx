"use client";
import React, { useState } from "react";
import axios from "axios";
import { z, ZodError } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const formDataSchema = z.object({
	ownersName: z.string().min(4),
	businessName: z.string().min(4),
	businessInfo: z.string().min(4).max(100),
	cacNumber: z.string().min(8),
	category: z.string().min(4),
	address: z.string().min(8),
	phone: z.string().min(11),
	email: z.string().email().min(8),
});

const RegisterForm = () => {
	const [formData, setFormData] = useState({
		ownersName: "",
		businessName: "",
		businessInfo: "",
		cacNumber: "",
		category: "",
		address: "",
		phone: "",
		email: "",
	});
	const [isLoading, setIsLoading] = useState(false); // State variable for loading indicator
	const [errors, setErrors] = useState<{
		[key: string]: string;
	}>({}); // State variable for form validation errors

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	) => {
		e.preventDefault();

		try {
			// Validate form data using Zod schema
			const validatedData =
				formDataSchema.parse(formData);

			setIsLoading(true); // Set loading state to true when form is submitted
			const response = await axios.post(
				"https://backendv2-smz4.onrender.com/api/minna/",
				validatedData
			);
			console.log(
				"Form submitted successfully",
				response.data
			);

			toast.success(
				`${response.data.businessName} created`,
				{
					position: "top-left",
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				}
			);

			setFormData({
				ownersName: "",
				businessName: "",
				businessInfo: "",
				cacNumber: "",
				category: "",
				address: "",
				phone: "",
				email: "",
			});
			setErrors({}); // Clear errors after successful form submission
		} catch (error) {
			// Handle validation errors
			if (error instanceof ZodError) {
				const fieldErrors: {
					[key: string]: string;
				} = {};
				error.errors.forEach((err) => {
					const fieldName = err.path.join(".");
					fieldErrors[fieldName] = err.message;
				});
				setErrors(fieldErrors);
			} else {
				console.error(
					"Error submitting form",
					error
				);
			}
		}
		setIsLoading(false); // Set loading state back to false after form submission
	};

	return (
		<>
			<div className=' flex flex-col md:mb-40 mb-20 mt-20 px-5 md:mt-32 max-w-md w-[80vw] mx-auto md:border border-gray-300  p-6'>
				<div className='text-center mb-12'>
					<a
						href='/'
						aria-label='Company'
						title='Company'
						className='inline-flex items-center lg:mx-auto'
					>
						<span className='sectionTitle ml-2 text-2xl  tracking-wide text-black '>
							Regsiter Your Business
						</span>
					</a>
				</div>
				<form onSubmit={handleSubmit}>
					<div className='space-y-6'>
						{/* Input fields */}
						{Object.keys(formData).map(
							(key) => (
								<div key={key}>
									<label className='text-sm mb-2 block uppercase'>
										{key}
									</label>
									<input
										name={key}
										type='text'
										value={
											formData[
												key as keyof typeof formData
											]
										}
										onChange={
											handleInputChange
										}
										className='bg-white border border-gray-300 w-full text-sm px-4 py-3 outline-blue-500'
									/>
									{errors[key] && (
										<p className='text-red-500 text-sm'>
											{errors[key]}
										</p>
									)}
								</div>
							)
						)}
					</div>
					<div className='mt-10 z-20'>
						{/* Display loading indicator if isLoading is true, otherwise display submit button */}
						{isLoading ? (
							<div className='cube-loader'>
								<div className='cube cube1'></div>
								<div className='cube cube2'></div>
								<div className='cube cube3'></div>
								<div className='cube cube4'></div>
							</div>
						) : (
							<button
								type='submit'
								className='sectionTitle w-full py-3 px-4 text-sm font-semibold rounded text-white bg-blue-500 hover:bg-blue-600 focus:outline-none'
							>
								Register
							</button>
						)}
					</div>
				</form>
			</div>

			<ToastContainer
				position='top-left'
				autoClose={3000} // Close toast automatically after 3 seconds
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default RegisterForm;

export const runtime = "edge";
