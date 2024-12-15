import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../../../contexts/AuthContext";
const CreateProfile = () => {
    const { UserData } = useAuth();
  
  const teachers = {
    name: UserData.name || "",
    email: UserData.email || "",
    phone: "",
    subject: "",
    qualification: "",
    bio: "",
    uid: UserData.uid || "",
  };

  const [uId, setUid] = useState('');


  useEffect(() => {
    let userData = localStorage.getItem('user_data'); 
    if (userData) {
      let parsedData = JSON.parse(userData); // Parse the JSON string into an object
      let uid = parsedData.uid; // Extract the uid property
      setUid(uid);
      setTeacher(prevState => ({
        ...prevState, // Keep the previous state values
        uid: uId // Update the uid
      }));
    } else {
      console.log('No user data found in localStorage');
    }
  }, [uId]);
  

  const [teacher, setTeacher] = useState(teachers);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post("http://localhost:5000/api/create", teacher);
   
      toast.success(
        <div>
          <strong>Data Inserted!</strong> {response.data.message}
        </div>,
        { position: "top-center" }
      );
      setTeacher(teachers);
    } catch (error) {
      console.log(error);
      toast.error("Error submitting data", { position: "top-center" });
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
        {/* BG */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <Sidebar />
        <div className="flex-1 overflow-auto relative z-10">
          <Header title="Create profile" />
          <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-purple-400 mb-6">
                  Create Your Profile
                </h2>
                <form onSubmit={submitForm}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={UserData.name}
                      onChange={inputHandler}
                      className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter full name"
                      required
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={UserData.email}
                      onChange={inputHandler}
                      className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter email address"
                      required
                      readOnly
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="contact"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Contact
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={teacher.phone}
                      onChange={inputHandler}
                      className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter Contact"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject Specialty
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={teacher.subject}
                      onChange={inputHandler}
                      className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="qualification"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Qualification
                    </label>
                    <input
                      type="text"
                      id="qualification"
                      name="qualification"
                      value={teacher.qualification}
                      onChange={inputHandler}
                      className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Enter qualification"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="bio"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Short Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={teacher.bio}
                      onChange={inputHandler}
                      rows="4"
                      className="w-full px-4 py-2 text-sm text-gray-200 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Write a brief bio"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-bold text-white bg-purple-500 rounded-lg hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400"
                  >
                    Submit
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

export default CreateProfile;

