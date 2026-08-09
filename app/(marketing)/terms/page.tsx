import { Metadata } from "next";
import Link from "next/link";

import { constructMetadata } from "@/lib/utils";
import LegalDocument from "@/components/legal-document";

export const metadata: Metadata = constructMetadata({
  title: "Website Terms — Droidsize",
  description:
    "Terms governing use of the Droidsize Technologies corporate website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalDocument
      eyebrow="Legal"
      title="Website Terms of Use"
      description="Terms governing use of the Droidsize Technologies corporate website."
    >
      <p>
        <strong>Last updated: 27 July 2026</strong>
      </p>
      <p>
        These terms govern your use of www.droidsize.com, the corporate website
        of DROIDSIZE TECHNOLOGIES PRIVATE LIMITED (“Droidsize”, “we”, “us”). By
        using the website, you agree to these terms. If you do not agree, please
        stop using the website.
      </p>

      <h2>Website purpose</h2>
      <p>
        This website provides general information about Droidsize, its
        capabilities, and its products. It does not create a client, employment,
        partnership, fiduciary, or professional-adviser relationship. Any paid
        services, project work, or product-specific obligations are governed by
        the agreement that applies to that engagement or product.
      </p>

      <h2>Acceptable use</h2>
      <p>
        You must not misuse the website, interfere with its operation or
        security, attempt unauthorized access, introduce malicious code, scrape
        it in a way that disrupts service, or use its content unlawfully.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The website, its design, text, graphics, code, and brand elements are
        owned by or licensed to Droidsize unless stated otherwise. You may view
        the website for lawful personal or business evaluation. No other right
        or licence is granted without our written permission.
      </p>
      <p>
        Third-party names, marks, and services remain the property of their
        respective owners.
      </p>

      <h2>Accuracy and availability</h2>
      <p>
        We aim to keep corporate and product information accurate, but website
        content may be updated and may not always be complete. The website is
        provided on an “as available” basis. We do not guarantee uninterrupted
        operation or that every item will remain current.
      </p>

      <h2>Third-party links</h2>
      <p>
        The website may link to third-party services for convenience. Those
        services have their own terms and policies, and we are not responsible
        for their content or operation.
      </p>

      <h2>Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, Droidsize will not be
        liable for indirect, incidental, special, or consequential loss arising
        only from use of, or inability to use, this corporate website. Nothing
        in these terms excludes liability that cannot lawfully be excluded.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Notice</Link> explains how we handle
        information submitted through this website.
      </p>

      <h2>Changes</h2>
      <p>
        We may update the website and these terms. The “last updated” date shows
        when these terms were most recently revised. Continued use after an
        update means the revised terms apply from that point.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of India. Subject to applicable
        law, courts in New Delhi, Delhi will have jurisdiction over disputes
        concerning this website.
      </p>

      <h2>Contact</h2>
      <address>
        DROIDSIZE TECHNOLOGIES PRIVATE LIMITED
        <br />
        CIN: U72200DL2019PTC347342
        <br />
        190, Baba Faridpuri, West Patel Nagar
        <br />
        New Delhi, Delhi 110008, India
        <br />
        <a href="mailto:contact@droidsize.com">contact@droidsize.com</a>
        <br />
        <a href="tel:+919958007011">+91 99580 07011</a>
      </address>
    </LegalDocument>
  );
}
