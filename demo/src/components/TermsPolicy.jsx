import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export default function TermsPolicy() {
  return (
    <>
      <Header />
      <div className="container py-5 text-black">
        <h1 className="text-center mb-4">Terms and Policy</h1>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to our Terms and Policy page. By using this website, you
            agree to comply with the terms and conditions outlined below.
          </p>
        </section>

        <section>
          <h2>Terms of Service</h2>
          <p>
            1. You agree to use this website in accordance with all applicable
            laws and regulations.
            <br />
            2. The website owner reserves the right to modify or terminate
            services without prior notice.
            <br />
            3. Users are responsible for maintaining the confidentiality of
            their account information.
            <br />
            4. Any misuse of the website may result in the suspension or
            termination of access to the service.
          </p>
        </section>

        <section>
          <h2>Privacy Policy</h2>
          <p>
            We value your privacy. Here’s what we do with your data:
            <br />
            1. We collect basic information such as your name, email, and usage
            data for the purpose of providing better services.
            <br />
            2. Your personal data will not be sold or shared with third parties
            without your consent.
            <br />
            3. We take reasonable measures to ensure the security of your data,
            but no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <section>
          <h2>Cookie Policy</h2>
          <p>
            1. We use cookies to enhance your experience on our website.
            <br />
            2. Cookies are small text files stored on your device that help us
            understand how you use our site.
            <br />
            3. You can modify your browser settings to refuse cookies, but this
            may affect your user experience.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns regarding our Terms and
            Policy, feel free to{" "}
            <a href="mailto:contact@website.com">contact us</a>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
