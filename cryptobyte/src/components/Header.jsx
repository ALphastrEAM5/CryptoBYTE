import timelessLogo from '../assets/timeless.png'
import { connectWallet } from '../Blockchain.Services'
import { useGlobalState, truncate } from '../store'
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  return (
    <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 cursor-pointer"
          src={timelessLogo}
          alt="Timeless Logo"
        />
      </div>

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">{isAuthenticated && <p>Welcome,<br /> {user.name}</p>}</li>
        {
        isAuthenticated ? (

<li><button style={{display: 'inline-block', padding:'10x 20px', background:'#3498db', color:'white', fontSize:'16px', border:'none', borderRadius:'5px', cursor:'pointer', marginLeft:'-10px', transition:'background-color 0.3s ease, color 0.3s ease'}} onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
Log Out
</button></li>
        ) : (
        <li><button style={{display: 'inline-block', padding:'10x 20px', background:'#3498db', color:'white', fontSize:'16px', border:'none', borderRadius:'5px', cursor:'pointer', marginLeft:'-10px', transition:'background-color 0.3s ease, color 0.3s ease'}} onClick={() => loginWithRedirect()}>Log In</button></li>
        )
}
        <li className="mx-4 cursor-pointer">Market</li>
        
        <li className="mx-4 cursor-pointer">Artist</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
          rounded-full cursor-pointer"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </nav>
  )
}

export default Header
