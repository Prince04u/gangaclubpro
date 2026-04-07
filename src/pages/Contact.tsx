import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";
const TELEGRAM_LINK = "https://t.me/gangaclubofficiaal";

const faqs = [
  { q: "How do I contact GangaClub customer support?", a: "The fastest way to reach GangaClub support is through our official Telegram group. Our support team monitors the group 24/7 and responds to queries within minutes. You can also use the in-app support chat after GangaClub login for account-specific issues." },
  { q: "What is the response time for support queries?", a: "GangaClub's support team typically responds within 2-5 minutes during peak hours and even faster during off-peak times. We pride ourselves on having one of the fastest customer support response times in the entire colour prediction industry." },
  { q: "Can I get help with GangaClub login issues?", a: "Yes! If you're having trouble with your GangaClub login, reach out to our Telegram support group immediately. Our team can help you reset your password, recover your account, or troubleshoot any technical issues preventing you from accessing your account." },
  { q: "How do I report a problem with my withdrawal?", a: "If your withdrawal is delayed or you're experiencing issues, contact us immediately through our Telegram group with your account details and transaction reference number. Our finance team will investigate and resolve the issue as quickly as possible." },
];

const Contact = () => (
  <>
    <Helmet>
      <title>Contact GangaClub – 24/7 Support & Official Prediction Group</title>
      <meta name="description" content="Contact GangaClub support 24/7 through our official Telegram prediction group. Get help with GangaClub login, register, giftcode, withdrawals, and more." />
      <link rel="canonical" href="https://gangaclub.lovable.app/contact" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "ContactPage",
        "name": "Contact GangaClub",
        "description": "Get in touch with GangaClub's 24/7 support team.",
        "url": "https://gangaclub.lovable.app/contact"
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="relative pt-32 pb-20 mesh-bg geo-pattern overflow-hidden">
      <div className="orb orb-pink w-80 h-80 top-0 right-10 opacity-20" />
      <div className="orb orb-gold w-64 h-64 bottom-0 left-0 opacity-25" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="hex-badge mx-auto mb-6">Get in Touch</div>
          <h1 className="text-4xl md:text-6xl font-black text-shimmer mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Contact Us</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            GangaClub's dedicated support team is available 24 hours a day, 7 days a week to help you with anything you need. Whether you have questions about GangaClub login, need assistance with your account, want to learn more about our bonus programs, or need help with the agent program, we're always here for you.
          </p>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>

    {/* Contact Methods */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>How to Reach Us</h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-lg mx-auto">Choose the contact method that works best for you. Our team is ready to help.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection delay={100}>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="glass-card p-8 h-full block group hover:border-primary/30 transition-all duration-300">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: "'Space Grotesk'" }}>Official Telegram Group</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                Our official Telegram prediction group is the primary hub for GangaClub support, daily predictions, and GangaClub free giftcode distribution. With thousands of active members and our dedicated support team monitoring 24/7, this is the fastest way to get help with any issue — from GangaClub login problems to withdrawal queries.
              </p>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                The group also features expert prediction analysts who share winning picks before each round, strategy discussions, and community-driven insights that help thousands of members win daily. It's completely free to join and open to all registered GangaClub users.
              </p>
              <span className="text-primary text-sm font-semibold">Join Telegram Group →</span>
            </a>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-8 h-full">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>In-App Support</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                After completing your GangaClub login, you can access our in-app support chat directly from your dashboard. This is ideal for account-specific issues like deposit verification, withdrawal status, bonus queries, and profile management. Our in-app support team has direct access to your account details, allowing them to resolve issues faster.
              </p>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                The in-app chat supports text messages, screenshots, and transaction reference numbers, making it easy to provide all the information our team needs to help you quickly.
              </p>
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-semibold">GangaClub Login →</a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="glass-card p-8 h-full">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>Agent Support</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                GangaClub agents have access to dedicated agent support channels. If you're part of the agent program and need help with team management, commission queries, salary calculations, or advertising reimbursements, our agent support team is available to assist you. Agents receive priority support with even faster response times.
              </p>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                Not an agent yet? <Link to="/agent-program" className="text-primary hover:underline">Learn about the Agent Program</Link> and start earning daily salary by building your team on GangaClub.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="glass-card p-8 h-full">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>Self-Service Resources</h3>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                Many common questions can be answered through our comprehensive guides and FAQ sections available on every page. Before reaching out to support, check these helpful resources:
              </p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/how-to-play" className="text-primary hover:underline">→ How to Play Guide</Link> — Complete step-by-step instructions</li>
                <li><Link to="/bonuses" className="text-primary hover:underline">→ Bonuses & Rewards</Link> — Deposit, invitation, and giftcode details</li>
                <li><Link to="/agent-program" className="text-primary hover:underline">→ Agent Program</Link> — Salary, commissions, and team building</li>
                <li><Link to="/about" className="text-primary hover:underline">→ About GangaClub</Link> — Platform overview and security</li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-cyan w-64 h-64 top-10 right-10 opacity-15" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="hex-badge mx-auto mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>Support FAQs</h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="glass-card p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/10">
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/60 text-sm leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 relative">
      <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
        <AnimatedSection>
          <div className="glass-card p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-shimmer mb-4" style={{ fontFamily: "'Space Grotesk'" }}>Ready to Get Started?</h2>
            <p className="text-foreground/60 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              Complete your GangaClub register with refer code <strong className="text-primary">3733139807</strong> and join thousands of winners on India's most trusted colour prediction platform. Our support team is always here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero py-3 px-8">GangaClub Register →</a>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost py-3 px-8">📱 Join Telegram</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Contact;
