import React, { ReactNode } from "react";
import Navbar from "./components/Navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <nav>navbar</nav>
      <div className="min-h-screen ">
       <Navbar />
        {children}
        </div>
      <footer>Footer</footer>
    </div>
  );
};

export default layout;