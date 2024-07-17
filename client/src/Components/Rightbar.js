import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ImStatsDots } from "react-icons/im";
import { MdSportsEsports } from "react-icons/md";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiLifeJacket, GiTravelDress } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";
import { MdHealthAndSafety } from "react-icons/md";
import { SiApplemusic } from "react-icons/si";

const Rightbar = () => {
  const location = useLocation();
  const virat =
    "data:image/webp;base64,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MDI0IFN1cGVyIEVpZ2h0IG1hdGNoIGJldHdlZW4gQXVzdHJhbGlhIGFuZCBJbmRpYSBhdCBEYXJlbiBTYW1teSBOYXRpb25hbCBDcmlja2V0IFN0YWRpdW0gb24gSnVuZSAyNCwgMjAyNCBpbiBHcm9zIElzbGV0LCBTYWludCBMdWNpYS4gKFBob3RvIGJ5IEdhcmV0aCBDb3BsZXkvR2V0dHkgSW1hZ2VzKTIwMjQgR2V0dHkgSW1hZ2VzLAEAAAEAAAAsAQAAAQAAAABYTVAgnwYAAGh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+Cgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgoJCTxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6SXB0YzR4bXBDb3JlPSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wQ29yZS8xLjAveG1sbnMvIiAgIHhtbG5zOkdldHR5SW1hZ2VzR0lGVD0iaHR0cDovL3htcC5nZXR0eWltYWdlcy5jb20vZ2lmdC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIiB4bWxuczp4bXBSaWdodHM9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9yaWdodHMvIiBkYzpSaWdodHM9IjIwMjQgR2V0dHkgSW1hZ2VzIiBwaG90b3Nob3A6Q3JlZGl0PSJHZXR0eSBJbWFnZXMiIEdldHR5SW1hZ2VzR0lGVDpBc3NldElEPSIyMTU5MDQ3MDcyIiB4bXBSaWdodHM6V2ViU3RhdGVtZW50PSJodHRwczovL3d3dy5nZXR0eWltYWdlcy5jb20vZXVsYT91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgcGx1czpEYXRhTWluaW5nPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3ZvY2FiL0RNSS1QUk9ISUJJVEVELUVYQ0VQVFNFQVJDSEVOR0lORUlOREVYSU5HIiA+CjxkYzpjcmVhdG9yPjxyZGY6U2VxPjxyZGY6bGk+R2FyZXRoIENvcGxleTwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+R1JPUyBJU0xFVCwgU0FJTlQgTFVDSUEgLSBKVU5FIDI0OiBWaXJhdCBLb2hsaSBvZiBJbmRpYSBkdXJpbmcgdGhlIElDQyBNZW4mYXBvcztzIFQyMCBDcmlja2V0IFdvcmxkIEN1cCBXZXN0IEluZGllcyAmYW1wOyBVU0EgMjAyNCBTdXBlciBFaWdodCBtYXRjaCBiZXR3ZWVuIEF1c3RyYWxpYSBhbmQgSW5kaWEgYXQgRGFyZW4gU2FtbXkgTmF0aW9uYWwgQ3JpY2tldCBTdGFkaXVtIG9uIEp1bmUgMjQsIDIwMjQgaW4gR3JvcyBJc2xldCwgU2FpbnQgTHVjaWEuIChQaG90byBieSBHYXJldGggQ29wbGV5L0dldHR5IEltYWdlcyk8L3JkZjpsaT48L3JkZjpBbHQ+PC9kYzpkZXNjcmlwdGlvbj4KPHBsdXM6TGljZW5zb3I+PHJkZjpTZXE+PHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+PHBsdXM6TGljZW5zb3JVUkw+aHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2RldGFpbC8yMTU5MDQ3MDcyP3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+CgA=";


    const ball = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D";

  return (
    <div>
      <div className="h-full flex-col hidden md:flex fixed w-[25%]  ml-[75%] p-4 bg-black text-white">
        <div className="border-[0.2px] border-[#2F3336] h-fit w-[80%] p-2 rounded-xl ">
          <h1 className="flex font-semibold opacity-70 text-[20px] ">
            What's happening ?
          </h1>
          <div className="flex mt-4">
            <div className="h-[60px] w-[60px]">
              <img className="rounded-xl w-full h-full " src={virat} alt="" />
            </div>
            <div className="text-md ml-2 ">
              <p className="text-md opacity-90 ">Virat kohli</p>
              <p className="text-[14px] opacity-70 mt-[-4px] ">world cup t20</p>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="h-[60px] w-[60px]">
              <img className="rounded-xl w-full h-full " src={ball} alt="" />
            </div>
            <div className="text-md ml-2 ">
              <p className="text-md opacity-90 ">running</p>
              <p className="text-[14px] opacity-70 mt-[-4px] ">Runner ups</p>
            </div>
          </div>
        </div>

        <div className="border-[0.2px] mt-4 pl-4 border-[#2F3336] h-fit w-[80%] p-2 rounded-xl">
          <p className="flex font-semibold opacity-70 text-[20px]">Catagory</p>
          <div className="flex flex-col mt-2 items-start  w-full  text-white  h-full">
            <Link
              to="/sports"
              className={`flex gap-4 text-[18px] font-semibold justify-center items-center  hover:opacity-100 ${
                location.pathname === "/sports" ? "opacity-100" : "opacity-70"
              }`}
            >
              < MdSportsEsports/>
              <p>Sports</p>
            </Link>

            <Link
              to="/food"
              className={`flex gap-4 mt-2 text-[18px] font-semibold justify-center items-center  hover:opacity-100 ${
                location.pathname === "/food" ? "opacity-100" : "opacity-70"
              }`}
            >
              < IoFastFoodSharp/>
              <p>Food</p>
            </Link>

            <Link
              to="/lifestyle"
              className={`flex gap-4 mt-2 text-[18px] font-semibold justify-center items-center  hover:opacity-100 ${
                location.pathname === "/lifestyle" ? "opacity-100" : "opacity-70"
              }`}
            >
              < GiLifeJacket/>
              <p>Lifestyle</p>
            </Link>
            <Link
              to="/travel"
              className={`flex gap-4 mt-2 text-[18px] font-semibold justify-center items-center  hover:opacity-100 ${
                location.pathname === "/travel" ? "opacity-100" : "opacity-70"
              }`}
            >
              < MdTravelExplore/>
              <p>Travel</p>
            </Link>

            <Link
              to="/business"
              className={`flex gap-4 mt-2 text-[18px] font-semibold justify-center items-center  hover:opacity-100 ${
                location.pathname === "/business" ? "opacity-100" : "opacity-70"
              }`}
            >
              < BiSolidBusiness/>
              <p>Business</p>
            </Link>

            <Link
              to="/health"
              className={`flex gap-4 mt-2 text-[18px] font-semibold justify-center items-center  hover:opacity-100 ${
                location.pathname === "/health" ? "opacity-100" : "opacity-70"
              }`}
            >
              < MdHealthAndSafety/>
              <p>Health and fitness</p>
            </Link>

            <Link
              to="/music"
              className={`flex gap-4 mt-2 text-[18px] font-semibold justify-center items-center  hover:opacity-100 ${
                location.pathname === "/music" ? "opacity-100" : "opacity-70"
              }`}
            >
              < SiApplemusic/>
              <p>Music</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
