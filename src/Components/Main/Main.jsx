import Article from "./Article"
import Header from "./Header"
import WhyUs from "./WhyUs"
import ExploreClinic from "./ExploreClinic"
import OurService from "./OurService"
import Footer from "./Footer"
import { Helmet } from "react-helmet-async";


const Main = () => {
    return(
        <>
            <Helmet>
                <meta name="description"  content="Get professional dental care in Muğla. Painless treatments by expert dentists. Book an appointment now!"/>
                <meta property="og:title" content="Likya Dent | Treating The Patient, Not Just Smile" />
                <meta property="og:description" content="Protect your oral health with expert care! Book an appointment at our exclusive clinics today!" />
            </Helmet>
            <Header />
            <Article />
            <WhyUs />
            <ExploreClinic />
            <OurService />
            <Footer />
        </>
    )
}

export default Main