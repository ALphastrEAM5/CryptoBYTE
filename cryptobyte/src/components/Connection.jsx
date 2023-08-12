import React, { useState } from 'react';
import { ethers } from 'ethers';

const ConnectWalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const connectedAccount = await signer.getAddress();

        setIsConnected(true);
        setAccount(connectedAccount);
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error("MetaMask not detected.");
    }
  };

  return (
    <div>
      {isConnected ? (
        <p>Connected Account: {account}</p>
      ) : (
        <button className="header-btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
