import Header from "../shared/Header";
import LeftSideNav from "../shared/LeftSideNav";
import Navbar from "../shared/Navbar";
import RightSideNav from "../shared/RightSideNav";
import BrakingNews from "./BrakingNews";


const Home = () => {
    return (
        <div>
           <Header/>
           <BrakingNews/>
           <Navbar/>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           <div className=""> <LeftSideNav/></div>
            <div className=" md:col-span-2 "> this is middle</div>
            <div className=" "> <RightSideNav/></div>
           </div>
        </div>
    );
};

export default Home;