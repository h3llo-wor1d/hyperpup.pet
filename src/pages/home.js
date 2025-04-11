import Header from "../components/Header"
import About from "../sections/about"
import Footer from "../sections/footer"
import NewReleases from "../sections/newreleases"
import TourDates from "../sections/tourdates"

export default function Home() {
    
    return (
        <div>
            <Header/><br/>
            <About /><br/>
            <NewReleases /><br/>
            <TourDates /><br/>
            <Footer />
        </div>
    )
}