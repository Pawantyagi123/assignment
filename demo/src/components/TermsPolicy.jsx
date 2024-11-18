import React from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

export default function TermsPolicy() {
  return (
    <>
    <div className="container py-5 text-black">
  {/* Header Section */}
  <div className="text-center mb-4 position-relative">
    <h1 className="mb-0">Terms and Policy</h1>
    <div className="custom-border"></div>
  </div>

  {/* Welcome Section */}
  <section className="mb-5">
    <h2 className="border-bottom pb-2 mb-4">Welcome to Testfy!</h2>
    <p className="text-muted">
      These terms and conditions outline the rules and regulations for the use
      of <strong>Company Name's</strong> Website, located at Website.com. By
      accessing this website, we assume you accept these terms and conditions.
    </p>
    <p className="text-muted">
      Most interactive websites use cookies to retrieve user details for each
      visit. Cookies are used by our website to enable certain functionalities
      and enhance the user experience. Some affiliate/advertising partners may
      also use cookies.
    </p>
  </section>

  {/* License Section */}
  <section className="mb-5">
    <h2 className="border-bottom pb-2 mb-4">License</h2>
    <p className="text-muted">
      Unless otherwise stated, <strong>Company Name</strong> and/or its
      licensors own the intellectual property rights for all material on
      Website Name. You may access this material for personal use, subject to
      the restrictions set in these terms and conditions.
    </p>
    <ul className="list-unstyled ps-4">
      <li className="mb-2">❌ Republish material from Website Name</li>
      <li className="mb-2">❌ Sell, rent or sub-license material from Website Name</li>
      <li className="mb-2">❌ Reproduce, duplicate, or copy material from Website Name</li>
      <li>❌ Redistribute content from Website Name</li>
    </ul>
  </section>

  {/* Comments Section */}
  <section className="mb-5">
    <h2 className="border-bottom pb-2 mb-4">Comments</h2>
    <p className="text-muted">
      <strong>Company Name</strong> reserves the right to monitor comments and
      remove any that are deemed inappropriate or offensive.
    </p>
    <ul className="list-unstyled ps-4">
      <li className="mb-2">✔ You are entitled to post comments with proper licenses.</li>
      <li className="mb-2">
        ✔ Comments do not infringe on intellectual property rights.
      </li>
      <li className="mb-2">
        ✔ Comments are not defamatory or offensive in any manner.
      </li>
      <li>✔ Comments do not promote unlawful activities.</li>
    </ul>
  </section>

  {/* Contact Us Section */}
  <section className="mb-5">
    <h2 className="border-bottom pb-2 mb-4">Contact Us</h2>
    <p className="text-muted">
      If you have any questions or concerns, feel free to{" "}
      <a href="mailto:contact@website.com" className="text-decoration-underline">
        contact us
      </a>
      .
    </p>
  </section>

  {/* Action Buttons */}
  <div className="d-flex justify-content-center">
    <button className="btn btn-primary me-3">Accept</button>
    <button className="btn btn-outline-secondary">Decline</button>
  </div>
</div>

    </>
  );
}
