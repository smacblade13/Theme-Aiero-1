import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <section className="page-banner10">
      <div className="shape" />
      <div className="shape2" />
      <div className="shape4" />
      <div className="container">
        <div className="page-content10">
          <Image
            src="/assets/images/logo4.svg"
            alt="AI Agency & Technology HTML Template"
            width={203}
            height={37}
          />
          <h2 className="title">404</h2>
          <h4 className="title2">Oooop! Page not found</h4>
          <p>
            You are here because you entered the address of a page that no
            longer exists or has been moved to a different address
          </p>
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            title=""
            className="ibt-btn ibt-btn-outline"
          >
            <span>Home page</span>
            <i className="icon-arrow-top" />
          </Link>
          <ul className="social-icon">
            <li>
              <a href="#" title="">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="#" title="">
                <i className="fab fa-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
