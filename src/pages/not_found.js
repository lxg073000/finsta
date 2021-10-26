import React from "react";

const NotFound = () => {
  return (
    <div className="grid place-content-center h-screen">
      <div className="bg-gray-background border border-gray-primary rounded p-10">
        <img
          src="../../images/logo.png"
          alt="instagram"
          className="mx-auto mb-2"
        />
        <h2 className="text-blue-medium">
          404 Error, Page Requested Was Not Found.
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
