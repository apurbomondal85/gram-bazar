import { ReactNode } from "react"
import MobileBar from "../components/MobileBar";
import Header from "./Home/Header";
import Footer from "../components/shared/Footer";

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  return (
    <div>
      <Header />
      <MobileBar />
      {children}
      <Footer />
    </div>
  )
}

export default layout