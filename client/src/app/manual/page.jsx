import Head from 'next/head';
import Link from 'next/link';

export default function StepsPage() {
  const steps = [
    {
      number: 1,
      title: 'Create Wallet',
      description: 'Create a Flow / Metamask Wallet to store your NFTs and manage your assets.',
    },
    {
      number: 2,
      title: 'Add Flow on EVM',
      description: (
        <>Add Flow on EVM Testnet (Chain ID - 545) to your wallet by visiing <Link target='_blank' className='text-blue-500 underline' href="https://chainlist.org">Chainlist</Link>.</>
      ),
    },
    {
      number: 3,
      title: 'Add Funds',
      description: (
        <>Use <Link target='_blank' className='text-blue-500 underline' href="https://faucet.flow.com/fund-account">Fow Testnet Faucet</Link> to add funds to your Flow Wallet to cover transaction fees.</>
      ),
    },
    {
      number: 4,
      title: 'Generate NFT',
      description: <>
        Start by uploading your article. Supported formats include <Link target='_blank' href="https://pdfcandy.com/blog/what-is-jpg.html" className="text-blue-500 hover:underline">.jpg</Link>, <Link href="https://shorthand.com/the-craft/what-is-a-jpeg-file/index.html" className="text-blue-500 hover:underline">.jpeg</Link> and <Link target='_blank' href="https://www.techtarget.com/whatis/definition/PNG-Portable-Network-Graphics" className="text-blue-500 hover:underline">.png</Link>.
      </>,
    },
    {
      number: 5,
      title: 'Mint NFT',
      description: 'Finalize the NFT creation process by minting your NFT on the Flow blockchain.',
    },
    {
      number: 6,
      title: 'View NFT',
      description: 'View your NFT on the Flow blockchain using the profile window in our app.',
    },
    {
      number: 7,
      title: 'Verify an NFT',
      description: 'Verify the authenticity of an NFT by entering its transaction ID from activity log of your wallet.',
    }
  ];

  return (
    <>
      <Head>
        <title>Step-by-Step Process</title>
        <meta name="description" content="Learn how to create NFTs step by step." />
      </Head>
      <main className="min-h-screen inset-0 -z-10 w-full [background:radial-gradient(160%_160%_at_50%_10%,#000_40%,#63e_100%)] text-gray-200 flex flex-col items-center">
        <header className="w-full py-6 bg-[#000000] shadow-xl">
          <h1 className="text-3xl font-bold text-center text-gray-100">NFT Creation & Verification Steps</h1>
        </header>

        <section className="w-full mb-8 max-w-4xl mt-8 px-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="mb-8 border border-gray-700 rounded-lg p-6 bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full font-bold text-lg">
                  {step.number}
                </div>
                <h2 className="text-xl font-semibold text-gray-100">{step.title}</h2>
              </div>
              <p className="mt-4 text-gray-300">{step.description}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
