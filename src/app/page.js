import Banner from "@/component/homepage/Banner";
import Library from "@/component/homepage/Library";
import Footer from "@/component/shared/Footer";
import Navbar from "@/component/shared/Navbar";


export default function Home() {
  return ( <div>
   <Navbar/>
   <Banner/>
   <Library></Library>
   <Footer/>
    </div>
  )
}
