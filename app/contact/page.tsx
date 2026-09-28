import Header1 from "@/components/headers/Header1";
import Footer1 from "@/components/footers/Footer1";
import PageHeader from "@/components/common/PageHeader";
import Contact from "@/components/contact/Contact";
import { contactPageContent } from "@/data/pages/contact";

export const metadata = {
  title: contactPageContent.metadata.title,
  description: contactPageContent.metadata.description,
};

export default function ContactPage() {
  const { header } = contactPageContent;
  return (
    <div className="wrapper">
      <Header1 stickyClass="sticky-active is-sticky" />
      <PageHeader
        eyebrow={header.eyebrow}
        title={header.title}
        intro={header.intro}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <section className="main-sec">
        <Contact />
        <Footer1 />
      </section>
    </div>
  );
}
