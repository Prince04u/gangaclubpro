import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const Terms = () => (
  <>
    <Helmet>
      <title>Terms & Conditions – GangaClub | Platform Rules & Guidelines</title>
      <meta name="description" content="Read GangaClub's terms and conditions. Understand the rules, guidelines, and policies governing your use of India's #1 colour prediction platform." />
      <link rel="canonical" href="https://gangaclub.lovable.app/terms" />
    </Helmet>

    <section className="relative pt-32 pb-20 mesh-bg geo-pattern overflow-hidden">
      <div className="orb orb-gold w-80 h-80 top-0 left-0 opacity-20" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="hex-badge mx-auto mb-6">Legal</div>
          <h1 className="text-4xl md:text-6xl font-black text-shimmer mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Terms & Conditions</h1>
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
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>1. Acceptance of Terms</h2>
                <p>By accessing, browsing, or using the GangaClub platform — including completing your GangaClub register, GangaClub login, or any other interaction with our services — you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use GangaClub's services. These terms apply to all users, including players, agents, and visitors.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>2. Eligibility</h2>
                <p>To use GangaClub, you must be at least 18 years of age. By completing the GangaClub signup process, you confirm that you meet this age requirement. GangaClub reserves the right to request age verification at any time and to terminate accounts of users who are found to be underage. Users are responsible for ensuring that their participation on GangaClub complies with all applicable local laws and regulations.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>3. Account Registration</h2>
                <p>When you complete your GangaClub register, you agree to provide accurate, current, and complete information. You are solely responsible for maintaining the confidentiality of your GangaClub login credentials and for all activities that occur under your account. GangaClub is not responsible for any unauthorized access resulting from your failure to protect your login information. Each user is permitted only one account — duplicate accounts will be terminated.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>4. Deposits & Withdrawals</h2>
                <p>All deposits on GangaClub are processed through secure payment channels including UPI, bank transfer, and digital wallets. Deposit bonuses are automatically applied based on the tier structure and cannot be manually adjusted. Withdrawals are processed within minutes to your linked bank account. GangaClub reserves the right to verify your identity before processing large withdrawals. Minimum and maximum withdrawal limits may apply.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>5. Bonus & Giftcode Terms</h2>
                <p>Deposit bonuses, invitation rewards, and GangaClub giftcode credits are subject to turnover requirements before withdrawal. Typically, deposit bonuses require 1x to 2x turnover, while GangaClub free giftcode rewards may have specific conditions attached. Attempting to abuse the bonus system through duplicate accounts, fraudulent referrals, or any form of manipulation will result in immediate account termination and forfeiture of all bonuses.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>6. Agent Program Terms</h2>
                <p>The GangaClub agent program allows registered users to earn commissions and daily salary by building teams. Agents must comply with all agent-specific terms including the 30% direct deposit requirement, the 3-day new member eligibility period, and the consecutive loss suspension policy. Agents found engaging in fraudulent activities — including fake accounts, self-referrals, or manipulative practices — will have their agent privileges revoked and earnings forfeited.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>7. Game Fairness</h2>
                <p>All prediction games on GangaClub use provably fair algorithms with independently verifiable results. GangaClub does not manipulate game outcomes under any circumstances. Players who attempt to exploit system vulnerabilities, use automated betting tools, or engage in collusion will have their accounts terminated. GangaClub promotes fair play and expects all users to participate honestly.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>8. Prohibited Activities</h2>
                <p className="mb-2">The following activities are strictly prohibited on GangaClub:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Creating multiple accounts or using someone else's account.</li>
                  <li>• Using automated tools, bots, or scripts to interact with the platform.</li>
                  <li>• Attempting to reverse-engineer, hack, or exploit platform vulnerabilities.</li>
                  <li>• Engaging in money laundering or fraudulent financial activities.</li>
                  <li>• Providing false information during GangaClub register or verification.</li>
                  <li>• Abusing the bonus system through any form of manipulation.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>9. Limitation of Liability</h2>
                <p>GangaClub provides its services on an "as is" and "as available" basis. While we strive for 99.9% uptime and instant payouts, GangaClub is not liable for any losses, damages, or inconveniences arising from platform downtime, technical issues, payment processing delays, or any other circumstances beyond our reasonable control. Users participate in prediction games at their own risk and discretion.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>10. Modifications to Terms</h2>
                <p>GangaClub reserves the right to modify these Terms and Conditions at any time. Changes will be communicated through platform notifications and our official Telegram group. Continued use of GangaClub after modifications constitutes acceptance of the updated terms. We encourage all users to review these terms periodically to stay informed of any changes.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>11. Contact</h2>
                <p>For questions about these Terms and Conditions, please visit our <Link to="/contact" className="text-primary hover:underline">Contact page</Link> or reach out through the official <a href="https://t.me/gangaclubofficiaal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GangaClub Telegram group</a>.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Terms;
