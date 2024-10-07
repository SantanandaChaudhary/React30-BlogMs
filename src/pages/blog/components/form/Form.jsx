import React from "react";

const Form = () => {
  return (
    <>
      <div className="flex justify-center  w-screen h-screen bg-white ">
        <div className="container my-4  lg:px-20 ">
          <div className=" w-auto p-4 my-8 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40  rounded-2xl shadow-2xl mx-40 ">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Create <br /> Blog
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 ">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Title*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Sub- title*"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="file"
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Category *"
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="my-2 w-1/2 lg:w-1/4">
              <button
                className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
              >
                Add Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
