import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
   
  const loginpage = ()=>{
    navigate("/login")
  }
  return (
    <>
      <header className="bg-transparent  px-6 py-4 sticky top-0 border-b border-b-slate-500 h-20 z-50 backdrop-blur-md shadow-md">
        <div className="flex flex-wrap items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <img src="" alt="logo" className="w-10 h-10" />
            <h2 className="text-white text-2xl font-bold tracking-wide">
              Testify
            </h2>
          </div>

          <nav className="mt-3">
            <ul className="flex flex-col md:flex-row justify-center gap-8 text-white  md:text-base">
              <li className="text-xl">
                <NavLink
                  to={"/home"}
                  className={({ isActive }) =>
                    isActive ? "decoration-blue-400 underline text-blue-400" : "hover:text-blue-400"
                   }
                >
                  Home
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink
                  to={"about"}
                  className={({ isActive }) =>
                    isActive ? "decoration-slate-400 underline text-blue-400" : "hover:text-blue-400"
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink
                  to={"features"}
                  className={({ isActive }) =>
                    isActive ? "decoration-slate-400 underline text-blue-400" : "hover:text-blue-400"
                  }
                >
                  Features
                </NavLink>
              </li>
              <li className="text-xl">
                <NavLink
                  to={"contact"}
                  className={({ isActive }) =>
                    isActive ? "decoration-slate-400 underline text-blue-400" : "hover:text-blue-400"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div>
            <button
              className="bg-gray-400 px-5 py-2 rounded-full flex items-center  transition-colors duration-500 ease-in-out hover:shadow-lg focus:outline-none hover:ring-2 hover:ring-purple-300 hover:bg-black hover:text-white"
              aria-label="Sign up for an account" onClick={loginpage}
            >
              Login
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
