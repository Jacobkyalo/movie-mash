import React from "react";
import Hero from "../components/hero/hero.component";
import SectionComponent from "../components/section/section.component";
import "../components/section/section.component.scss";
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
                    <img src={tv} alt="tvImage" />
                </div>
            </SectionComponent>
            <SectionComponent>
                <div className="section-content mobile-content">
                    <h1>{mobileHeading}</h1>
                    <h2>{mobileSubHeading}</h2>
                </div>
                <div className="sectionImage-wrapper mobile-image">
                    <img src={mobile} alt="mobileImage" />
                </div>
            </SectionComponent>
            <SectionComponent>
                <div className="section-content">
                    <h1>{watchHeading}</h1>
                    <h2>{watchSubHeading}</h2>
                </div>
                <div className="sectionImage-wrapper">
                    <img src={watch} alt="watchImage" />
                </div>
            </SectionComponent>
            <SectionComponent>
                <div className="section-content kids-content">
                    <h1>{kidsHeading}</h1>
                    <h2>{kidsSubHeading}</h2>
                </div>
                <div className="sectionImage-wrapper kids-image">
                    <img src={kids} alt="kidsImage" />
                </div>
            </SectionComponent>
            <Faqs />
            <Footer />
        </>
    );
};

export default React.memo(Home);
