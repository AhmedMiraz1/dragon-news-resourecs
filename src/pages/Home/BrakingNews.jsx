import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
  return (
    <div className="flex bg-[#F3F3F3] p-4 rounded-xl ">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true} speed={200}>
     <Link  to='/' className="mr-10"> Match Highlights: Germany vs Spain — as it happened   ! </Link> 
     <Link  to='/' className="mr-10"> Match Highlights: Germany vs Spain — as it happened   ! </Link>
     <Link to='/' className="mr-10"> Match Highlights: Germany vs Spain — as it happened   ! </Link>
     <Link to='/' className="mr-10"> Match Highlights: Germany vs Spain — as it happened   ! </Link>

      </Marquee>
    </div>
  );
};

export default BrakingNews;
