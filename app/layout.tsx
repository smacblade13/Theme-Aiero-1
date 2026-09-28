import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import { UiProvider } from "@/context/UiContext";
import { site } from "@/data/site";
import "../public/assets/scss/style.scss";
import Sidemenu from "@/components/headers/Sidemenu";
import SearchPopup from "@/components/common/SearchPopup";
import MobileMenu from "@/components/headers/MobileMenu";
import TitleSplitProvider from "@/components/common/TitleSplitProvider";
import SubTitleSplitProvider from "@/components/common/SubTitleSplitProvider";
import { VideoModalProvider } from "@/context/VideoModalContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CartProvider } from "@/context/CartContext";
import { LenisProvider } from "@/context/LenisContext";
import ThemeButton from "@/components/common/ThemeButton";
import ScrollToTop from "../components/common/ScrollToTop";
import SmoothScroll from "@/components/common/SmoothScroll";
import Preloader from "@/components/common/Preloader";
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.seo.siteUrl),
  title: {
    default: site.seo.defaultTitle,
    template: site.seo.titleTemplate,
  },
  description: site.seo.defaultDescription,
  applicationName: site.brand.name,
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: site.brand.name,
    title: site.seo.defaultTitle,
    description: site.seo.defaultDescription,
    url: site.seo.siteUrl,
    images: [{ url: site.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.defaultTitle,
    description: site.seo.defaultDescription,
    images: [site.seo.ogImage],
    ...(site.seo.twitterHandle
      ? { creator: site.seo.twitterHandle, site: site.seo.twitterHandle }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${sora.variable} ${manrope.variable} font-sans antialiased`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof localStorage!=='undefined'&&localStorage.getItem('themeMode')!=='inactive'){document.body.classList.add('active-body','dark-mode');}})();`,
          }}
        />
        <LenisProvider>
          <SmoothScroll>
            <UiProvider>
              <ThemeProvider>
                <CartProvider>
                  <VideoModalProvider>
                    <TitleSplitProvider>
                      <SubTitleSplitProvider>
                        <Preloader />
                        {children}
                        <ScrollToTop />
                      </SubTitleSplitProvider>
                    </TitleSplitProvider>
                    <Sidemenu />
                    <SearchPopup />
                    <MobileMenu />
                  </VideoModalProvider>
                  <ThemeButton />
                </CartProvider>
              </ThemeProvider>
            </UiProvider>
          </SmoothScroll>
        </LenisProvider>
      </body>
    </html>
  );
}
