import { Outlet } from "react-router-dom";


const MainLayouts = () => {
    return (
        <div className="container mx-auto px-6 font-display">
            <Outlet/>
        </div>
    );
};

export default MainLayouts;