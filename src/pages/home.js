import React, {useState} from "react";
import '../styles/home.css'
import Metamask from "../components/metamask";
import { ethers } from "ethers";
import SwapScreen from "../components/swapscreen";

const Home = () => {
    // usetstate for storing and retrieving wallet details
    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });
 
    // Button handler button for handling a
    // request event for metamask
    const btnhandler = () => {
        // Asking if metamask is already present or not
        if (window.ethereum) {
            // res[0] for fetching a first wallet
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) =>
                    accountChangeHandler(res[0])
                );
        } else {
            alert("install metamask extension!!");
        }
    };
 
    // getbalance function for getting a balance in
    // a right format with help of ethers
    const getbalance = (address) => {
        // Requesting balance method
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"],
            })
            .then((balance) => {
                // Setting balance
                setdata({
                    Balance:
                        ethers.utils.formatEther(balance),
                });
            });
    };
 
    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setdata({
            address: account,
        });
 
        // Setting a balance
        getbalance(account);
    };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl xl:text-4xl font-extrabold">
        Welcome to PitahayaSwap
      </h1>
      <Metamask onConnect={btnhandler} />
      {/* <button className="px-4 py-2 rounded-xl" onClick={}>
            Connect Wallet
        </button> */}
        <SwapScreen />
        <div className="flex flex-col justify-center items-center">
            <strong>Address: </strong>
            {data.address}
            <strong>Balance: </strong>
            {data.balance}
        </div>
        
    </div>
  );
};
export default Home;