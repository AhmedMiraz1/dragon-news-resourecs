import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import zone1 from '../../assets/qZone1.png'
import zone2 from '../../assets/qZone2.png'
import zone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      <div className='p-4 space-y-3 mb-6'>
        <h2 className="text-2xl font-bold text-green-500">Login With </h2>
        <button className="btn btn-outline w-full">
          <FaGoogle/>
          Login with google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub/>
          Login with github
        </button>
      </div>
      <div className='p-4  mb-6'>
        <h2 className="text-2xl font-bold text-green-500 mb-6">Find Us On </h2>
        <a className='p-4 flex items-center gap-1 text-lg border rounded-t-lg ' href="">
            <FaFacebook className='text-sky-500 bg-[#F3F3F3] p-1 rounded-full text-3xl'/>
            Facebook
        </a>
        <a className='p-4 flex items-center gap-1 text-lg border-x ' href="">
            <FaTwitter className='text-sky-500 bg-[#F3F3F3] p-1 rounded-full text-3xl'/>
            Twitter
        </a>
        <a className='p-4 flex items-center gap-1 text-lg  border rounded-b-lg' href="">
            <FaInstagram className='text-pink-500 bg-[#F3F3F3] p-1 rounded-full text-3xl'/>
            Instagram
        </a>
        
      </div>
      <div className='m-4 p-4 space-y-3 mb-6 bg-[#F3F3F3] rounded-xl'>
        <h2 className="text-2xl font-medium text-[#403F3F]">Q-Zone </h2>
        <img className='mx-auto' src={zone1} alt="" />
        <p className='text-center font-medium'>Swimming</p>   
        <h2 className="text-2xl font-medium text-[#403F3F]">Q-Zone </h2>
        <img className='mx-auto' src={zone2} alt="" />
        <p className='text-center font-medium'>Class</p>     
        <h2 className="text-2xl font-medium text-[#403F3F]">Q-Zone </h2>
        <img className='mx-auto' src={zone3} alt="" />
        <p className='text-center font-medium'>Play Ground</p> 
      </div>
    </div>
  );
};

export default RightSideNav;
