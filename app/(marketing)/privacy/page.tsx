import { Metadata } from "next";
import Link from "next/link";

import { constructMetadata } from "@/lib/utils";
import LegalDocument from "@/components/legal-document";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Notice — Droidsize",
  description:
    "How Droidsize Technologies handles information submitted through its corporate website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalDocument
      eyebrow="Privacy"
      title="Privacy Notice"
      description="How Droidsize Technologies handles information submitted through its corporate website."
    >
      <p>
        <strong>Last updated: 27 July 2026</strong>
      </p>
      <p>
        DROIDSIZE TECHNOLOGIES PRIVATE LIMITED (“Droidsize”, “we”, “us”)
        respects your privacy. This notice explains how we handle personal
        information when you visit www.droidsize.com or contact us through the
        details published on this website.
      </p>
      <p>
        This notice covers the corporate website. A product may have a separate
        privacy notice that describes that product&apos;s data practices. Please
        use the support route linked from the relevant product or app-store
        listing.
      </p>

      <h2>Information we handle</h2>
      <h3>Information you provide</h3>
      <p>
        When you email or call us, we may receive your name, contact details,
        organization, the contents of your message, and any information you
        choose to include. Please do not send passwords, payment-card
        information, government identifiers, medical information, or other
        sensitive information unless we have specifically asked for it through
        an appropriate secure channel.
      </p>

      <h3>Website and device information</h3>
      <p>
        Our hosting, security, and analytics providers may process technical
        information needed to deliver and protect the website. This can include
        IP address, request and error logs, browser and device information,
        referring page, pages viewed, timestamps, and approximate location
        derived from network information.
      </p>

      <h2>Why we use information</h2>
      <ul>
        <li>Respond to enquiries and support requests.</li>
        <li>Operate, secure, diagnose, and improve the website.</li>
        <li>Understand website usage in aggregate.</li>
        <li>Maintain business and legal records.</li>
        <li>Comply with applicable law or protect our rights and users.</li>
      </ul>

      <h2>Sharing and service providers</h2>
      <p>
        We do not sell personal information. We may share limited information
        with service providers that host, secure, monitor, or support the
        website and our communications. We may also disclose information when
        required by law, to protect legal rights, or as part of a corporate
        transaction subject to appropriate safeguards.
      </p>

      <h2>Retention</h2>
      <p>
        We keep information only for as long as reasonably necessary for the
        purpose for which it was received, including support, security,
        contractual, accounting, and legal requirements. Retention periods
        depend on the nature of the information and the applicable obligation.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable technical and organizational measures intended to
        protect information. No online service or method of transmission is
        completely secure, so please use care when deciding what to send.
      </p>

      <h2>Your choices and requests</h2>
      <p>
        You may ask us to access, correct, or delete information you have
        provided, or raise a concern about our handling of it. Some information
        may need to be retained where required by law or for legitimate security
        and record-keeping purposes.
      </p>

      <h2>Children</h2>
      <p>
        This corporate website is not directed to children. If you believe a
        child has provided personal information through this website, please
        contact us so we can review the situation.
      </p>

      <h2>External links</h2>
      <p>
        Links to third-party websites and services are governed by their own
        privacy practices. We are not responsible for the content or practices
        of those services.
      </p>

      <h2>Contact and grievance officer</h2>
      <address>
        <strong>Evisha Soni</strong>
        <br />
        Chief Operating Officer and Grievance Officer
        <br />
        DROIDSIZE TECHNOLOGIES PRIVATE LIMITED
        <br />
        190, Baba Faridpuri, West Patel Nagar
        <br />
        New Delhi, Delhi 110008, India
        <br />
        <a href="mailto:contact@droidsize.com">contact@droidsize.com</a>
        <br />
        <a href="tel:+919958007011">+91 99580 07011</a>
      </address>
      <p>
        For product help, visit the{" "}
        <Link href="/support">
          Merry Magic Mail support page
        </Link>
        .
      </p>
    </LegalDocument>
  );
}
