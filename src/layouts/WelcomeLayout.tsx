import { Outlet } from "react-router";
import Typography from "@mui/material/Typography";

function WelcomeLayout() {
  return (
    <main className="w-screen h-screen p-3 md:p-5 flex flex-col md:flex-row gap-5 ">
      <div
        id="logo-illustration"
        className="hidden md:flex md:flex-1/2 lg:flex-1/2 flex-col items-start justify-start bg-black rounded-xl p-6 lg:px-12"
      >
        <div className="flex-1/4">
          <Typography variant="h3" fontWeight={400} color="#ffffff">
            Organic <br /> Mind
          </Typography>
        </div>
        <div className="flex-3/4 flex flex-col items-center justify-center w-full">
          <img
            src={"/cherry-blossom-tree.png"}
            alt="cherry-blossom-tree"
            className=" object-scale-down"
          />
        </div>
      </div>
      <div className=" rounded-xl flex-4/5 md:flex-1/2 lg:flex-1/2 flex flex-col items-center justify-center w-full p-6 lg:px-12">
        <Outlet />
      </div>
    </main>
  );
}

export default WelcomeLayout;
