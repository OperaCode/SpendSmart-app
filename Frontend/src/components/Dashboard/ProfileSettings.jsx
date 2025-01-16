import { Link } from "react-router-dom";
import image from "../../assets/picture.jpeg";
import SideBar from "../Layouts/SideBar.jsx";
import { GoPencil } from "react-icons/go";

const ProfileSettings = () => {
  return (
    <div className="lg:flex  bg-indigo-500 p-1">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="bg-slate-100 justify-center rounded p-6 w-full">
        <div className="bg-slate-300 rounded border w-3/4 md: h-screen m-auto p-6">
          <div className="p-6 flex-col justify-center items-center ">
            <div className="text-center space-y-3 mb-6 ">
              <h1 className="text-2xl md:text-2xl font-bold">
                Account Settings
              </h1>
              <p className="text-1xl md:text-xl font-medium">
                Kindly check below to edit Personal Information
              </p>
            </div>

            {/* Profile Picture */}
            <div className="w-full flex justify-center items-center ">
              <div className="relative mb-4">
                <img
                  src={image}
                  alt="Profile"
                  className="w-28 h-28 rounded-full border-4 hover:cursor-pointer border-indigo-300 mb-4"
                />
                <Link to="/edit-picture">
                  <GoPencil className="w-10 h-10 absolute bottom-0 right-0  text-indigo-900 rounded-full p-1" />
                </Link>
              </div>
            </div>

            {/* Form */}
            <form className="  ">
              <div className="space-y-6 w-full flex-col  ">
                
                <div className="flex gap-2  justify-center items-center ">
                  <label className=" text-right font-semibold">
                    First Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-2/3 p-2 border rounded "
                  />
                  <GoPencil className=" text-indigo-500 cursor-pointer" />
                </div>
                <div className="flex gap-2  justify-center items-center ">
                  <label className=" text-right font-semibold">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-2/3 p-2 border rounded "
                  />
                  <GoPencil className=" text-indigo-500 cursor-pointer" />
                </div>
                <div className="flex gap-2 -ml-4 justify-center items-center ">
                  <label className=" text-right font-semibold">
                  Email Address:
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-2/3 mr-8 p-2 border rounded "
                  />
                  <GoPencil className=" text-indigo-500 -ml-8 cursor-pointer" />
                </div>                
                <div className="flex gap-2  justify-center items-center  ">
                  <label className=" text-right font-semibold">Password:</label>
                  <input
                    type="text"
                    placeholder="email@example.com"
                    className="w-2/3 p-2 border rounded "
                  />
                  <GoPencil className=" text-indigo-500 cursor-pointer" />
                </div>

                
                <br />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 text-white w-1/3 p-3 rounded hover:bg-indigo-400"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
