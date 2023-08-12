import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { useAuth0 } from "@auth0/auth0-react";


const Header = ({ defaultAccount, setDefaultAccount }) => {


    const [errorMessage, setErrorMessage] = useState(null);
    
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    const connectWalletHandler = () => {
      if (window.ethereum && window.ethereum.isMetaMask) {
        console.log('MetaMask Here!');
    
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(result => {
            accountChangedHandler(result[0]);
            setConnButtonText('Wallet Connected');
            getAccountBalance(result[0]);
          })
          .catch(error => {
            setErrorMessage(error.message);
          });
    
      } else {
        console.log('Need to install MetaMask');
        setErrorMessage('Please install MetaMask browser extension to interact');
      }
    }
    
  
    // update account, will cause component re-render
    const accountChangedHandler = (newAccount) => {
      setDefaultAccount(newAccount); // Update the selected account's address
      getAccountBalance(newAccount.toString()); // Fetch and display balance for the selected account
    }
  
    const getAccountBalance = (account) => {
      if (window.ethereum) {
        window.ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] })
          .then(balance => {
            setUserBalance(ethers.utils.formatEther(balance));
          })
          .catch(error => {
            setErrorMessage(error.message);
          });
      } else {
        console.log('Ethereum not available.');
      }
    };
    
  
    const chainChangedHandler = () => {
      // reload the page to avoid any errors with chain change mid use of application
      window.location.reload();
    }
  
  
    // listen for account changes
    window.ethereum.on('accountsChanged', accountChangedHandler);
  
    window.ethereum.on('chainChanged', chainChangedHandler);
  

  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
   

  return (
    <div className="w-4/5 flex justify-between md:justify-center items-center py-4 mx-auto navbar">
        <span className="lf-nav-widget">
      <div className='md:flex-[0.5] flex-initial img-cont justify-center items-center'>
        
        <img className='w-32 logo cursor-pointer' src={logo} height="150" width="210" alt="logo" />
      </div>

      <ul className='md:flex-[0.5] text-white nav-menu md:flex'>
        <li>Market</li>
        <li>Artist</li>
        <li>Features</li>
        <li>Community</li>
        <li>{isAuthenticated && <p>Welcome, {user.name}</p>}</li>
        {
        isAuthenticated ? (

<li><button style={{display: 'inline-block', padding:'10x 20px', background:'#3498db', color:'white', fontSize:'16px', border:'none', borderRadius:'5px', cursor:'pointer', marginLeft:'-10px', transition:'background-color 0.3s ease, color 0.3s ease'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
Log Out
</button></li>
        ) : (
        <li><button style={{display: 'inline-block', padding:'10x 20px', background:'#3498db', color:'white', fontSize:'16px', border:'none', borderRadius:'5px', cursor:'pointer', marginLeft:'-10px', transition:'background-color 0.3s ease, color 0.3s ease'}} onClick={() => loginWithRedirect()}>Log In</button></li>
        )
}
        
      </ul>
      </span>

    <span className="rt-nav-widget">
      <button className="header-btn" onClick={connectWalletHandler}>
        Connect Wallet
      </button>
      
    </span>
    </div>
  )
}

export default Header;
