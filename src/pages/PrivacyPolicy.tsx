import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy – GangaClub | Your Data Protection & Security</title>
      <meta name="description" content="Read GangaClub's privacy policy. Learn how we collect, use, and protect your personal data on India's most trusted colour prediction platform." />
      <link rel="canonical" href="https://gangaclub.lovable.app/privacy-policy" />
    </Helmet>

    <section className="relative pt-32 pb-20 mesh-bg geo-pattern overflow-hidden">
      <div className="orb orb-cyan w-80 h-80 top-0 right-0 opacity-20" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="hex-badge mx-auto mb-6">Legal</div>
          <h1 className="text-4xl md:text-6xl font-black text-shimmer mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Privacy Policy</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto">Last updated: April 2026</p>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>

    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-10">
            <div className="text-foreground/60 text-sm leading-[1.9] space-y-6">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>1. Introduction</h2>
                <p>Welcome to GangaClub's Privacy Policy. This document explains how GangaClub collects, uses, stores, and protects your personal information when you use our colour prediction platform. By completing your GangaClub register and using our services, you agree to the practices described in this policy. We are committed to safeguarding your privacy and ensuring that your personal data is handled responsibly and transparently.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>2. Information We Collect</h2>
                <p className="mb-2">When you create an account through GangaClub signup, we collect the following types of information:</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Personal Information:</strong> Mobile number, name (if provided), and email address used during GangaClub register.</li>
                  <li>• <strong>Account Credentials:</strong> Encrypted password and authentication tokens for secure GangaClub login.</li>
                  <li>• <strong>Financial Information:</strong> Bank account details, UPI IDs, and transaction history for deposits and withdrawals.</li>
                  <li>• <strong>Usage Data:</strong> Game history, prediction records, bonus claims, GangaClub giftcode redemptions, and platform interaction patterns.</li>
                  <li>• <strong>Device Information:</strong> IP address, device type, browser version, and operating system for security and optimization purposes.</li>
                  <li>• <strong>Referral Data:</strong> Refer code usage, agent team structure, and commission records.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>3. How We Use Your Information</h2>
                <p className="mb-2">GangaClub uses your personal information for the following purposes:</p>
                <ul className="space-y-1 ml-4">
                  <li>• To create and manage your GangaClub account and facilitate secure GangaClub login sessions.</li>
                  <li>• To process deposits, withdrawals, and other financial transactions securely.</li>
                  <li>• To calculate and distribute deposit bonuses, invitation rewards, agent commissions, and GangaClub free giftcode credits.</li>
                  <li>• To provide customer support and resolve account-related queries.</li>
                  <li>• To prevent fraud, detect suspicious activity, and maintain platform security.</li>
                  <li>• To improve our services, develop new features, and enhance user experience.</li>
                  <li>• To communicate important updates, promotional offers, and system notifications.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>4. Data Security</h2>
                <p>GangaClub employs industry-leading security measures to protect your personal data. All data transmissions are encrypted using SSL/TLS protocols. Our payment processing partners are PCI-DSS compliant, ensuring bank-grade security for all financial transactions. We implement multi-factor authentication, regular security audits, and advanced threat detection systems to prevent unauthorized access to your account.</p>
                <p className="mt-2">Your password is stored using one-way hashing algorithms — even our own team cannot see your password. We regularly update our security infrastructure to address emerging threats and maintain the highest standards of data protection.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>5. Data Sharing</h2>
                <p>GangaClub does not sell, rent, or trade your personal information to third parties for marketing purposes. We may share limited data with trusted service providers who assist us in operating the platform (such as payment processors and hosting providers), but only to the extent necessary for them to perform their services. All third-party partners are contractually obligated to protect your data.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>6. Cookies & Tracking</h2>
                <p>GangaClub uses cookies and similar technologies to enhance your browsing experience, remember your GangaClub login preferences, and analyze platform usage patterns. These technologies help us improve our services and provide personalized experiences. You can manage cookie preferences through your browser settings.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>7. Your Rights</h2>
                <p className="mb-2">As a GangaClub user, you have the following rights regarding your personal data:</p>
                <ul className="space-y-1 ml-4">
                  <li>• <strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li>• <strong>Correction:</strong> Request corrections to inaccurate or incomplete personal data.</li>
                  <li>• <strong>Deletion:</strong> Request deletion of your account and associated personal data.</li>
                  <li>• <strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
                </ul>
                <p className="mt-2">To exercise any of these rights, please contact our support team through the official <a href="https://t.me/gangaclubofficiaal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GangaClub Telegram group</a>.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>8. Children's Privacy</h2>
                <p>GangaClub services are strictly intended for users who are 18 years of age or older. We do not knowingly collect personal information from individuals under 18. If we become aware that a minor has created an account, we will immediately terminate the account and delete all associated data.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>9. Policy Updates</h2>
                <p>GangaClub reserves the right to update this Privacy Policy at any time. Significant changes will be communicated through platform notifications and our Telegram group. Continued use of GangaClub after policy updates constitutes acceptance of the revised terms. We encourage you to review this policy periodically.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>10. Contact Us</h2>
                <p>If you have questions or concerns about this Privacy Policy or how GangaClub handles your data, please reach out through our <Link to="/contact" className="text-primary hover:underline">Contact page</Link> or join our official <a href="https://t.me/gangaclubofficiaal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram community</a> for direct assistance.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default PrivacyPolicy;
