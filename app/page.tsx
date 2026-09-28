import Contact from "@/components/contact/Contact";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
export const metadata = {
  title: {
    absolute: "Aiero — AI Agency & Technology",
  },
  description:
    "Aiero is a modern AI agency template for startups building intelligent products — neural networks, machine learning, and data science services.",
};
import About from "@/components/homes/home-1/About";
import Blogs from "@/components/homes/home-1/Blogs";
import Brands from "@/components/homes/home-1/Brands";
import Facts from "@/components/homes/home-1/Facts";
import Faqs from "@/components/homes/home-1/Faqs";
import Features from "@/components/homes/home-1/Features";
import Hero from "@/components/homes/home-1/Hero";
import Marquee from "@/components/homes/home-1/Marquee";
import Partners from "@/components/homes/home-1/Partners";
import Services from "@/components/homes/home-1/Services";
import Services2 from "@/components/homes/home-1/Services2";
import Testimonials from "@/components/homes/home-1/Testimonials";

export default function Home1() {
  return (
    <>
      <div className="wrapper">
        <Header1 stickyClass="sticky-active is-sticky" />
        {/*======== / Header ========*/}
        {/* her-style1 */}
        <Hero />
        {/* End hero-style1 */}
        <Brands />
        {/* service-sec */}
        <Services />
        {/* End service-sec */}
        {/* marquee-sec */}
        <Marquee />
        {/* End marquee-sec */}
        {/* feature-style1 */}
        <Features />
        {/* End feature-style1 */}
        {/* about-us-sec */}
        <About />
        {/* about-us-sec */}
        {/* fun-fact-sec */}
        <Facts />
        {/* End fun-fact-sec */}
        {/* service-sec2 */}
        <Services2 />
        {/* End service-sec2 */}
        {/* testimonials-sec */}
        <Testimonials />
        {/* End testimonials-sec */}
        {/* faq-sec */}
        <Faqs />
        {/* End faq-sec */}
        {/* blog-sec */}
        <Blogs />
        {/* End blog-sec */}
        {/* partners-sec */}
        <Partners />
        {/* End partners-sec */}
        {/* main-sec */}
        <section className="main-sec">
          <Contact />
          <Footer1 />
        </section>
      </div>
    </>
  );
}
