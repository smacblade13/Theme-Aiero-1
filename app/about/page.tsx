import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import PageHeader from "@/components/common/PageHeader";
import About from "@/components/homes/home-1/About";
import Facts from "@/components/homes/home-1/Facts";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Partners from "@/components/homes/home-1/Partners";
import Contact from "@/components/contact/Contact";
import { aboutPageContent } from "@/data/pages/about";

export const metadata = {
  title: aboutPageContent.metadata.title,
  description: aboutPageContent.metadata.description,
};

export default function AboutPage() {
  const { header } = aboutPageContent;
  return (
    <div className="wrapper">
      <Header1 stickyClass="sticky-active is-sticky" />
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />
      <About />
      <Facts />
      <Testimonials />
      <Partners />
      <section className="main-sec">
        <Contact
          eyebrow="work with us"
          title="Ready to make AI work for your team?"
          intro="Tell us about your goals and constraints — we'll come back with a concrete next step."
        />
        <Footer1 />
      </section>
    </div>
  );
}
