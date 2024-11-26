import React, { useState } from 'react';
import { BrowserProvider } from 'ethers';

// Add TypeScript declaration for window.ethereum
declare global {
  interface Window {
    ethereum?: any;
  }
}

const WalletConnect = () => {
  const [account, setAccount] = useState<string>('');
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        // Using ethers v6 syntax
        const provider = new BrowserProvider(window.ethereum);
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        
        setAccount(address);
        setIsConnected(true);
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <button
      onClick={connectWallet}
      className="px-8 py-3 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition-colors duration-200"
    >
      {isConnected ? 
        `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 
        'Connect Wallet'}
    </button>
  );
};

export default WalletConnect;