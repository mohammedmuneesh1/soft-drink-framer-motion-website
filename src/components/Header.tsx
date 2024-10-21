

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
export default function Header() {

    const menuBarOptions = [
        {
            id:1,
            title:"HOME",
            link:"/",

        },
        {
            id:1,
            title:"CATEGORIES",
            link:"/",

        },
        {
            id:1,
            title:"BLOG",
            link:"/",

        },
        {
            id:1,
            title:"ABOUT",
            link:"/",

        },
        {
            id:1,
            title:"CONTACT",
            link:"/",

        },
    ];

//     HOME
// CATEGORIES
// BLOG
// ABOUT
// CONTACT



  return (
   <header className='z-20 max-w-screen-2xl mx-auto layoutPadding   absolute top-0 left-0 right-0 w-full   text-white py-4 flex items-center justify-between'>
    {/* logo section  start */}
    <div>
        <img src={logo} alt="logo" loading='eager' className="max-w-[80px] invert " />
    </div>
    {/* logo section  end */}
    {/* menu section start */}

<nav className="hidden md:block">
    <ul className="flex items-center gap-6 z-40">
        {
            menuBarOptions?.map((val:{id:number,title:string,link:string})=>(
                <li key={val?.id} className="text-xs lg:text-sm uppercase ">
                    <Link to={val?.link}>{val?.title}</Link>
                </li>
            ))
        }
        <BiUser className="text-xl lg:text-2xl  "/>
    </ul>
</nav>
<IoMenu className="text-xl sm:text-2xl md:hidden block"/>
    {/* menu section end */}
   </header>
  )
}
