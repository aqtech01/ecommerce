import { CiSearch } from "react-icons/ci";
export function Header() {
  return (
    <>
      <header className="bg-orange-500 min-h-10 flex flex-wrap justify-around place-content-center text-center">
        <div id="logo" className="Text-2xl font-extrabold">
          AQTECH
        </div>
        <div className="flex">
          <input
            type="text"
            name=""
            value=""
            className=" rounded-l-lg w-full h-8"
          />
          <span className=" ">
            <CiSearch className="bg-slate-400 text-black w-full h-8 rounded-r-lg shadow-md " />
          </span>
        </div>
        <ul className="  flex gap-4 ">
          <li className="">Home</li>
          <li className="">Products</li>
          <li className="">About</li>
          <li className="">Contact</li>
        </ul>
      </header>
    </>
  );
}
