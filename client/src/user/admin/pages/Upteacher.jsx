import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Upteacher = () => {
    const Navigate = useNavigate();
    const teachers = {
        name: "",
        email: "",
        phone: "",
        subject: "",
        qualification: "",
        bio: "",
      };
    const {id} = useParams();
    const [teacher,setTeacher] = useState(teachers);
    const inputChangeHandler = (e) =>{
        const {name,value} = e.target;
        setTeacher({...teacher,[name]:value});
        console.log(teacher);   
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/getone/${id}`)
        .then((response)=>{
            setTeacher(response.data);
            
        })
        .catch((error)=>{
            console.log(error);
            
        })
    },[id]);
    const submitForm = async(e)=>{
        e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/update/${id}`, teacher);
      toast.success(
        <div>
          <strong>Data Updated!</strong> {response.data.message}
        </div>,
        { position: "top-center" }
      );
      Navigate("/admindashboard/Teacherinfo")
    } catch (error) {
      toast.error("Error submitting data", { position: "top-center" });
    }
    }
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
			
			<Header title='Update Teacher' />

			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
			<div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">Update Teacher Profile</h2>
        <form onSubmit={submitForm}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={teacher.name}
              className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={inputChangeHandler}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={teacher.email}
              onChange={inputChangeHandler}

             className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Contact</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={teacher.phone}
              onChange={inputChangeHandler}
            
              className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject Specialty</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={teacher.subject}
              onChange={inputChangeHandler}

              className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
             
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="qualification" className="block text-sm font-medium text-gray-300 mb-2">Qualification</label>
            <input
              type="text"
              id="Qualification"
              name="Qualification"
              value={teacher.qualification}
              onChange={inputChangeHandler}

              className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-300 mb-2">Short Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={teacher.bio}
              onChange={inputChangeHandler}

              rows="4"
              className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-sm font-bold text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Update
          </button>
        </form>
      </div>
    </div>
			</main>
		</div>
		</div>
		</>
	);
};
export default Upteacher;
