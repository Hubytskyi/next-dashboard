import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

function Layout({ children }) {
    return (
        <div className='flex bg-gray-50 text-black overflow-none'>
            <Sidebar/>
            <div className='flex flex-col w-full '>
                <Header/>
                {children}
            </div>
        </div>
    );
}

export default Layout;
