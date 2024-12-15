import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewProfile = () => {
  const [uId, setUid] = useState('');
  const [userData, setUserData] = useState({});

  // Fetch the UID from localStorage and get user data
  useEffect(() => {
    let userDataFromLocalStorage = localStorage.getItem('user_data');
    if (userDataFromLocalStorage) {
      let parsedData = JSON.parse(userDataFromLocalStorage);
      let uid = parsedData.uid;
      setUid(uid);
    } else {
      console.log('No user data found in localStorage');
    }
  }, []);

  // Fetch user data based on UID
  useEffect(() => {
    if (uId) {
      getUserdata();
    }
  }, [uId]);

  const getUserdata = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/getone/${uId}`);
      console.log(response);
      setUserData(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Error submitting data", { position: "top-center" });
    }
  };

  return (
    <>
      <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>
        {/* Background */}
        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div>
        <Sidebar />
        <div className='flex-1 overflow-auto relative z-10'>
          <Header title='Your Information' />

          <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
            <div className="flex items-center justify-center min-h-screen text-gray-100">
              <div className="w-full max-w-lg bg-gray-800 rounded-lg p-8">
                {/* Card Header */}
                <div className="mb-6 border-b border-gray-700 pb-4">
                  <h2 className="text-3xl font-semibold text-center">Your Profile</h2>
                  <p className="text-sm text-gray-400 text-center">
                    Your Information
                  </p>
                </div>

                {/* Profile Details */}
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Name:</span>
                    <span className="text-gray-100 font-medium">{userData.name || "Loading..."}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-gray-100 font-medium">{userData.email || "Loading..."}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Phone:</span>
                    <span className="text-gray-100 font-medium">{userData.phone || "Loading..."}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Subject:</span>
                    <span className="text-gray-100 font-medium">{userData.subject || "Loading..."}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-gray-100 font-medium">{userData.qualification || "Loading..."}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Qualification:</span>
                    <span className="text-gray-100 font-medium">{userData.bio || "Loading..."}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-8 flex justify-center">
                  <Link to={`/teacherdashboard/Edit/`+userData._id} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg">
                    Update Information
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ViewProfile;
