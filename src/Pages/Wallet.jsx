import React from 'react';
import { Link } from 'react-router-dom';
import img from "../assets/download.png"; // Adjust the path based on your project structure
import Footer from './Footer';

export default function Wallet() {
  return (
    <>
    <div className=' bg-blue-700 '>
      {/* Navbar for Wallet */}
      <div className='bg-black flex justify-between'>
        <div className='text-white pt-5 ml-20 font-thin text-5xl mb-5'>
          <Link to='/'>BuildSO</Link> 
        </div>
        <div className='text-white text-3xl pt-9 mr-6'> 
          Wallet
        </div>
        <div className='text-white text-3xl pt-9 mr-6'> 
          Other Services
        </div>
      </div>

      {/* Body or Content of Wallet */}
      <div className='w-full flex justify-center items-center mt-20 pt-32'>
        <div className='w-1/2'>
          <div className='text-5xl font-semibold text-center'>
            <p>Introducing Wallet by <span className='italic'>BuildSo</span></p> 
            <p className='pt-10'>
              Faster, Secure, and Reliable
            </p>
          </div>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
          <img src={img} alt="Wallet" className='w-200' />
        </div>
      </div>
      
      {/* Additional content */}
      <div className=' pt-60 text-center space-y-6'>
        <p className=' text-5xl'>Why BuildSo wallet</p>
        <p className=' text-wrap text-xl '>
        Introducing the Wallet By BuildSo, a revolutionary advancement in digital finance. More than just a wallet, it stands out with its cutting-edge security features and lightning-fast transaction capabilities. Built on advanced encryption protocols, it ensures your assets are always protected, allowing you to trade securely and with confidence. Whether you're a seasoned trader or new to cryptocurrencies, the BuildSo wallet offers an intuitive user experience, simplifying the management of your digital assets. Experience seamless exchanges between cryptocurrencies and enjoy the convenience of monitoring market trends effortlessly. With its commitment to innovation and security, the Wallet By BuildSo sets the standard for reliability and performance in the world of digital wallets, empowering you to navigate the future of finance with ease.The wallet By BuildSo isn't just a normal wallet. This wallet comes with more advanced security and faster exchanges in cyrpto currency
        </p>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </>
  )
}
