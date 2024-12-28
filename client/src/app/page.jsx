"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { WalletContext } from "@/context/wallet";
import { BrowserProvider } from "ethers";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import toast from "react-hot-toast";

export default function AuroraBackgroundDemo() {
  const router = useRouter();
  const {
    isConnected,
    setIsConnected,
    userAddress,
    setUserAddress,
    signer,
    setSigner,
  } = useContext(WalletContext);

  const connectWallet = async () => {
    if (!window.ethereum) {
      toast.error('Wallet Not Found');
      return;
    }

    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      setSigner(signer);

      const accounts = await provider.send("eth_requestAccounts", []);
      setUserAddress(accounts[0]);
      setIsConnected(true);

      const { chainId } = await provider.getNetwork();
      const sepoliaNetworkId = "545";

      if (chainId.toString() !== sepoliaNetworkId) {
        toast.error('Please Switch To Flow Testnet');
      }
      else {
        toast.success('Wallet Connected');
        setTimeout(() => {
          router.push("/about");
        }, 3000);
      }
    } catch (error) {
      toast.error("Error In Connecting Wallet")
      console.error("Connection error:", error);
    }
  };

  return (
    (<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Own Your Credentials With Ownio
        </div>
        <button onClick={connectWallet} className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {isConnected
              ? `${userAddress.slice(0, 12)}...${userAddress.slice(-13)}` : 'Connect With Metamask'}
          </div>
        </button>
      </motion.div>
    </AuroraBackground>)
  );
}
