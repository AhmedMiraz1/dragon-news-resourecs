import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center space-y-5 my-12'>
            <img className='mx-auto text-[#444444]' src={logo} alt="" />
            <p className='text-lg text-[#706F6F] '>Journalism Without Fear or Favour</p>
            <p className='text-[#403F3F] text-xl font-medium'>{moment().format("dddd, MMMM D , YYYY")}</p>
        </div>
    );
};

export default Header;