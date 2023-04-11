import Link from 'next/link';
import { IoLogoAppleAr } from 'react-icons/io5';
import { RxDashboard, RxPerson, RxGear, RxBackpack } from 'react-icons/rx';

const sidebarNavList = [
    {id: 1, href: '/', icon: <RxDashboard size='20'/>},
    {id: 2, href: '/orders', icon: <RxBackpack size='20'/>},
    {id: 3, href: '/customers', icon: <RxPerson size='20'/>},
    {id: 4, href: '/settings', icon: <RxGear size='20'/>},
]

function Sidebar() {
    return (
        <aside className='flex w-20 h-screen p-4 bg-white flex-col items-center border-r-[1px] shadow-sm'>
            <Link href='/'>
                <div className='bg-purple-800 text-white p-3 rounded-lg flex'>
                    <IoLogoAppleAr size='20'/>
                </div>
            </Link>
            <span className='border-b-[1px] border-gray-200 w-full p-2 mb-4'></span>
            {sidebarNavList.map((item) => (
                <Link href={item.href} key={item.id} className='mb-4'>
                    <div className='bg-gray-100 hover:bg-gray-200 text-gray-900 p-3 rounded-lg flex'>
                        {item.icon}
                    </div>
                </Link>
            ))}
        </aside>
    );
}

export default Sidebar;
