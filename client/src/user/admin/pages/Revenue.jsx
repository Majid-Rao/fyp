import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";



const Revenue = () => {


	
	return (
		<>
		<div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
			{/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>
		<Sidebar />
		<div className='flex-1 overflow-auto relative z-10'>
			
			<Header title='Revenues' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>

			<h1>Revenues</h1>

			</main>
		</div>
		</div>
		</>
	);
};
export default Revenue;
