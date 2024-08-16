import { forwardRef } from "react";
import Navbar from "@/components/_shared/core/navbar";
import Footer from "../footer";


const Layout = ({ children }) => {
  return (
    <div className="w-full h-full bg-base-100 scroll-auto">
      <Navbar />
      <div className="bg-base-100 mb-[32rem] relative z-40">
        {children}
      </div>
      <Footer className="fixed bottom-0 left-0 right-0" />
    </div>
  )
}

export default forwardRef(Layout);