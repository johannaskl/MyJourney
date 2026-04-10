import { Outlet } from "react-router";

function ProfileLayout() {

    return (
        <div className="flex flex-col items-center justify-center text-center px-4">
            <div className="my-11 flex flex-col md:flex-row items-center justify-center md:space-x-6 w-full max-w-4xl"> 
                <Outlet />
            </div>
        </div>
    );
    
}

export default ProfileLayout;