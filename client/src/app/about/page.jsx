"use client";

import WordPullUp from "@/components/ui/word-pull-up";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function WordPullUpDemo() {
      const router = useRouter();

    const minter = () => {
      toast.success("Thank you for reading")
      setTimeout(() => {
        router.push("/mint")
      }, 3000)
    }
    
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center absolute top-0 z-[-2] w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent animate-gradient">
                About Us
            </h1>

            <div className="mt-8 gap-20 w-full max-w-5xl">
                <WordPullUp className="w-full text-xl text-gray-200">
                    Ownio is an innovative web app that allows users to generate NFTs from articles, combining the
                    world of digital art with written content. By transforming articles into unique, tradable digital
                    assets, Ownio empowers creators and writers to explore new ways of monetizing their work and
                    engaging with their audience. Whether you're a journalist, blogger, or content creator, Ownio
                    provides a seamless platform to turn your articles into valuable NFTs, offering a creative and
                    secure method for preserving and sharing your intellectual property. With Ownio, you can easily
                    upload your articles, customize the appearance of your NFTs, and list them for sale on various
                    NFT marketplaces. Our platform leverages blockchain technology to ensure the authenticity and
                    ownership of each NFT, providing a transparent and trustworthy environment for both creators and
                    buyers. Join the revolution and start turning your words into digital treasures with Ownio today
                </WordPullUp>
                <button
                    className="text-green-700 hover:text-white border mt-8 border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                    onClick={minter}
                >
                    Done Reading
                </button>
            </div>
        </div>
    );
}
