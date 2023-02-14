import React from 'react';

function TechStack() {
  return (
    <div className="p-5 w-fit" id="skills">
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 md:max-w-[500px]">
          <div className="flex flex-col gap-y-1">
            <h2 className="text-blue-500 text-2xl font-bold">Tech Stack</h2>
            <p className="text-gray-700">The technology or framework I've learned so far</p>
          </div>
          <div className="flex gap-5 md:justify-start justify-center items-center flex-wrap">
            <div className="w-[42px]">

              <img src="assets/icons/html.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/css.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/javascript.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/bootstrap.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/tailwindcss.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/webpack.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/reactjs.png" alt="" className="pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 md:max-w-[500px]">
          <div>
            <h2 className="text-blue-500 text-2xl font-bold">Currently Learning</h2>
          </div>
          <div className="flex gap-5 md:justify-start justify-center items-center flex-wrap">
            <div className="w-[42px]">
              <img src="assets/icons/nextjs.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/typescript.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/redux.png" alt="" className="pointer-events-none" />
            </div>
            <div className="w-[42px]">
              <img src="assets/icons/react-testing-library.png" alt="" className="pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
