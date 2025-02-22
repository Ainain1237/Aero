import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata = {
  title: 'Privacy Policy - BrightQ Aerospace Limited',
  description: 'BAL&apos;s privacy policy and data protection practices.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        <h2>1. Introduction</h2>
        <p>
          BrightQ Aerospace Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
        </p>
        <h2>2. Information We Collect</h2>
        <p>
          We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and any other information you choose to provide.
        </p>
        <h2>3. How We Use Your Information</h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to comply with legal obligations.
        </p>
        <h2>4. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect the security of your personal information.
        </p>
        <h2>5. Your Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your data.
        </p>
        <h2>6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at privacy@spaceventure.com.
        </p>
      </div>
    </div>
  )
}