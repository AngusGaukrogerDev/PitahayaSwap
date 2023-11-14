import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import "../styles/home.css";
import Metamask from "../components/metamask";
import SwapScreen from "../components/swapscreen";
// import { ChainId, Fetcher, WETH, Route } from "@uniswap/sdk";
 
const Home = () => {
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });
  const [connectionSuccessful, setConnectionSuccessful] = useState(false);

  // const chainId = ChainId.MAINNET;
  // const tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"; //DAI
  
  // const init = async () => {
  //   try {
  //     const dai = await Fetcher.fetchTokenData(chainId, tokenAddress); 
  //     const weth = WETH[chainId];
  //     const pair = await Fetcher.fetchPairData(dai, weth);
  //     const route = new Route([pair], weth);
  //     console.log(route.midPrice.toSignificant(6));
  //     console.log(route.midPrice.invert().toSignificant(6));
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
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
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata({
      address: account,
    });
    setConnectionSuccessful(true);
    // Setting a balance
    getbalance(account);
  };

  useEffect(() => {
    init();
  })

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-2">
      {connectionSuccessful ? (<SwapScreen />) : (<Metamask onConnect={btnhandler} />) }
    </div>
  );
};
export default Home;
