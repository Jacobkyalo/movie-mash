import React from "react";
import Hero from "../components/hero/hero";
import SectionComponent from "../components/section/section";
import "../components/section/section.scss";
import tv from "../assets/images/tv.png";
import mobile from "../assets/images/mobile.jpg";
import watch from "../assets/images/watch.png";
import kids from "../assets/images/kids.png";
import {
    kidsHeading,
    kidsSubHeading,
    mobileHeading,
    mobileSubHeading,
    tvHeading,
    tvSubHeading,
    watchHeading,
    watchSubHeading,
} from "../utils/strings";
import Faqs from "../components/faqs/faqs";
import Footer from "../components/footer/footer";

const Home = () => {
    return (
        <>
            <Hero />
            <SectionComponent>
                <div className="section-content">
                    <h1>{tvHeading}</h1>
                    <h2>{tvSubHeading}</h2>
                </div>
                <div className="sectionImage-wrapper">
                    <img src={tv} alt="tvImage" loading="lazy" />
                </div>
            </SectionComponent>
            <SectionComponent>
                <div className="section-content mobile-content">
                    <h1>{mobileHeading}</h1>
                    <h2>{mobileSubHeading}</h2>
                </div>
                <div className="sectionImage-wrapper mobile-image">
                    <img src={mobile} alt="mobileImage" loading="lazy" />
                </div>
            </SectionComponent>
            <SectionComponent>
                <div className="section-content">
                    <h1>{watchHeading}</h1>
                    <h2>{watchSubHeading}</h2>
                </div>
                <div className="sectionImage-wrapper">
                    <img src={watch} alt="watchImage" loading="lazy" />
                </div>
            </SectionComponent>
            <SectionComponent>
                <div className="section-content kids-content">
                    <h1>{kidsHeading}</h1>
                    <h2>{kidsSubHeading}</h2>
                </div>
                <div className="sectionImage-wrapper kids-image">
                    <img src={kids} alt="kidsImage" loading="lazy" />
                </div>
            </SectionComponent>
            <Faqs />
            <Footer />
        </>
    );
};

export default React.memo(Home);
