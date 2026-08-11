import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className='sticky top-0 w-auto text-lg px-6 py-3 flex justify-between items-center bg-white border-b-2 border-gray-200'>
      <span>JobBoard</span>
      <ul className="flex gap-4">
  <li>
    <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold text-blue-600" : "")}>
      Jobs
    </NavLink>
  </li>
  <li>
    <NavLink to="/saved" className={({ isActive }) => (isActive ? "font-bold text-blue-600" : "")}>
      Saved
    </NavLink>
  </li>
  <li>
    <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold text-blue-600" : "")}>
      About
    </NavLink>
  </li>
</ul>
      <button className='px-4 py-1 cursor-pointer border-2 rounded-md border-gray-200'>Sign In</button>
    </div>
  );
}

export default Header;
