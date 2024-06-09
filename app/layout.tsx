import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNav from "@/components/navigation/MobileNav";
import DeskNav from "@/components/navigation/DeskNav";
import Index from "@/components/navigation/Sec";
import Footer from "@/components/navigation/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Minna Finder",
	description: "Find restuarants, hotels and lots more",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className= "bg-yellow-50 overflow-x-hidden ">
				<DeskNav />
				<MobileNav />
        {/* <Index/> */}
				{children}
				<Footer/>
			</body>
		</html>
	);
}
