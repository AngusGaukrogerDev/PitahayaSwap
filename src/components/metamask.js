import React from "react";

const Metamask = ({ onConnect }) => {
  return (
    <div
      onClick={onConnect}
      className="flex flex-row justify-center items-center p-3 border-2 text-blue-600 border-blue-600 font-bold hover:text-white hover:bg-blue-600 hover:cursor-pointer w-96"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
        alt="Metamask"
        className="h-5 mr-2"
      />
      Connect to Metamask
    </div>
  );
};
export default Metamask;
