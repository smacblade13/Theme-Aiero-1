import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import PageHeader from "@/components/common/PageHeader";
import Services2 from "@/components/homes/home-1/Services2";
import Features from "@/components/homes/home-1/Features";
import Faqs from "@/components/homes/home-1/Faqs";
import Partners from "@/components/homes/home-1/Partners";
import Contact from "@/components/contact/Contact";
import { servicesPageContent } from "@/data/pages/services";

export const metadata = {
  title: servicesPageContent.metadata.title,
  description: servicesPageContent.metadata.description,
};

export default function ServicesPage() {
  const { header } = servicesPageContent;
  return (
    <div className="wrapper">
      <Header1 stickyClass="sticky-active is-sticky" />
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <Services2 />
      <Features />
      <Faqs />
      <Partners />
      <section className="main-sec">
        <Contact
          eyebrow="get a quote"
          title="Have a project in mind? Let's scope it together."
          intro="Send a short brief and we'll come back with a fixed-scope proposal or a discovery call."
        />
        <Footer1 />
      </section>
    </div>
  );
}
