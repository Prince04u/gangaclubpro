import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";
const TELEGRAM_LINK = "https://t.me/gangaclubofficiaal";

const platformFeatures = [
  "Fast and secure GangaClub signup process — create your account in under 60 seconds",
  "Multiple colour prediction game modes with varying time intervals (1 to 10 minutes)",
  "Instant deposits via UPI, bank transfer, digital wallets, and more payment options",
  "Lightning-fast withdrawals processed directly to your bank within minutes",
  "Daily GangaClub free giftcode rewards distributed via our official Telegram channel",
  "Comprehensive agent program with daily salary scaling up to ₹80,000 per day",
  "24/7 professional customer support with rapid response times under 5 minutes",
  "Provably fair gaming with independently verifiable and transparent results",
  "Generous three-tier deposit bonus system rewarding up to ₹8,666 per deposit",
  "Invitation bonus program offering up to ₹2,66,666 for referring friends",
  "Mobile-optimized platform for seamless gaming on smartphones and tablets",
  "Secure SSL encryption and multi-layer authentication protecting all accounts",
];

const faqs = [
  { q: "Who founded GangaClub?", a: "GangaClub was founded by a team of gaming and technology professionals who recognized the need for a trustworthy, transparent, and rewarding colour prediction platform in India. The founding team's vision was simple: create a platform where players can enjoy fair games, earn real money, and be part of a supportive community." },
  { q: "How does GangaClub ensure fair play?", a: "GangaClub uses provably fair algorithms with independently verifiable results for every prediction round. The platform maintains complete audit trails and publishes real-time statistics. Results cannot be manipulated, and every player can verify the fairness of any round through our transparency tools." },
  { q: "Is GangaClub legal in India?", a: "GangaClub operates as an online entertainment and prediction platform. We encourage all users to check their local regulations regarding online gaming. GangaClub promotes responsible gaming practices and requires all users to be 18 years of age or older." },
  { q: "How does GangaClub protect my personal data?", a: "GangaClub employs advanced SSL encryption, secure payment gateways with PCI-DSS compliance, and multi-factor authentication to protect all user data. Your personal information, login credentials, and financial details are stored using industry-standard security protocols." },
  { q: "How can I contact GangaClub support?", a: "You can reach GangaClub support 24/7 through our official Telegram group, in-app support chat, or through the contact information on our Contact page. Most queries are resolved within minutes — we pride ourselves on being one of the fastest support teams in the industry." },
  { q: "What makes GangaClub different from other platforms?", a: "GangaClub stands apart through its combination of provably fair games, instant payouts, generous bonuses (deposit, invitation, and daily giftcodes), the most rewarding agent program in India, and a vibrant community of active players. No other platform offers this complete package." },
];

const About = () => (
  <>
    <Helmet>
      <title>About GangaClub – India's Most Trusted Colour Prediction Platform</title>
      <meta name="description" content="Learn about GangaClub, India's most trusted colour prediction platform. Discover our mission, security features, community, and why thousands choose GangaClub for daily earnings." />
      <link rel="canonical" href="https://gangaclub.lovable.app/about" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "AboutPage",
        "name": "About GangaClub",
        "description": "GangaClub is India's premier colour prediction platform trusted by over 5 lakh active users.",
        "url": "https://gangaclub.lovable.app/about"
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="relative pt-32 pb-20 mesh-bg geo-pattern overflow-hidden">
      <div className="orb orb-gold w-80 h-80 top-10 left-0 opacity-25" />
      <div className="orb orb-pink w-72 h-72 bottom-0 right-10 opacity-20" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="hex-badge mx-auto mb-6">About Us</div>
          <h1 className="text-4xl md:text-6xl font-black text-shimmer mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Our Story</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            GangaClub is more than just a colour prediction platform — it is a community-driven ecosystem built on the foundations of trust, transparency, and real rewards. Since its inception, GangaClub has grown to become India's most popular destination for colour prediction enthusiasts who want a reliable, fair, and genuinely rewarding gaming experience. With over 5 lakh active users and ₹10 crore paid out, GangaClub has proven that a prediction platform can be both entertaining and trustworthy.
          </p>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>

    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="space-y-8">
          {[
            {
              title: "Our Mission", accent: "38 100% 55%",
              content: [
                "At GangaClub, our mission is to provide a world-class colour prediction experience that is accessible, transparent, and genuinely rewarding for every player. We believe that everyone deserves a platform where games are provably fair, payouts are instant, and the community is supportive. From the moment you complete your GangaClub register using refer code 3733139807, you become part of a family that values integrity, mutual growth, and shared success.",
                "Unlike many platforms that prioritize profits over player experience, GangaClub has built its entire model around player satisfaction. Our GangaClub giftcode system distributes free rewards daily, our deposit bonuses are the most generous in the industry, and our agent program offers genuine income opportunities that thousands are already benefiting from. Every decision we make is guided by a single question: \"Does this make GangaClub better for our players?\"",
                "Looking ahead, GangaClub is committed to continuous improvement. We regularly update our platform with new game modes, enhanced security features, and improved user experiences. Our development team works around the clock to ensure GangaClub remains at the forefront of the colour prediction industry in India."
              ]
            },
            {
              title: "Security & Trust", accent: "195 100% 45%",
              content: [
                "Security is the cornerstone of GangaClub's operations. We employ state-of-the-art SSL encryption technology to protect all user data and financial transactions. Every GangaClub login session is secured with multi-layer authentication protocols, ensuring your account credentials, wallet balance, and personal information are always safe from unauthorized access.",
                "Our payment partners are PCI-DSS compliant, providing bank-grade security for all deposits and withdrawals. Whether you're adding funds via UPI, bank transfer, or digital wallet, every transaction is encrypted end-to-end. We never store sensitive payment information on our servers — all financial data is handled by certified payment processors.",
                "Beyond technical security, GangaClub ensures fairness through provably fair gaming algorithms. Every prediction round uses independently verifiable results that cannot be manipulated by anyone — including our own team. We publish real-time statistics, maintain complete audit trails, and provide transparency tools that allow any player to verify the fairness of any round. This commitment to honesty is why hundreds of thousands of players trust GangaClub with their money."
              ]
            },
            {
              title: "Community & Support", accent: "320 80% 55%",
              content: [
                `The GangaClub community extends far beyond the platform itself. Our official Telegram prediction group has become a vibrant hub where thousands of players share strategies, celebrate wins, discuss game patterns, and support each other's growth. Expert analysts post daily predictions before each round, and our team regularly distributes GangaClub free giftcode offers exclusively to group members.`,
                "Our customer support team operates 24/7 with no holidays or breaks. Whether you need help with GangaClub login issues, have questions about deposit bonuses, need withdrawal assistance, or want guidance on the agent program, our trained support agents are always available. Most queries are resolved within minutes — a response time that's among the fastest in the entire industry.",
                "We believe that a strong community is the backbone of any successful platform. That's why we invest heavily in community building through our Telegram group, regular giftcode distributions, agent support programs, and player engagement initiatives. When you join GangaClub, you're not just signing up for a prediction platform — you're joining a community of winners."
              ]
            },
            {
              title: "Our Track Record", accent: "38 100% 55%",
              content: [
                "Numbers speak louder than words, and GangaClub's track record speaks volumes. With over 5 lakh active players, ₹10 crore in total payouts, 99.9% platform uptime, and 24/7 customer support, GangaClub has consistently delivered on its promises. Our withdrawal processing time averages under 5 minutes — one of the fastest in India.",
                "The GangaClub agent program alone has created thousands of successful earners across India. Top agents earn over ₹80,000 per day through the combination of daily salary, 3% deposit-base commissions, and member recharge rebates. This isn't theoretical — real agents are earning these amounts every single day.",
                "Our bonus system has distributed crores in rewards to players — through deposit bonuses, invitation rewards, and daily GangaClub giftcode offers. Every day, hundreds of new players complete their GangaClub signup and join a platform that has proven its reliability, fairness, and generosity over time."
              ]
            },
          ].map((section, i) => (
            <AnimatedSection key={section.title} delay={i * 100}>
              <div className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full rounded-full" style={{ background: `hsl(${section.accent})`, boxShadow: `0 0 15px hsl(${section.accent} / 0.3)` }} />
                <h2 className="text-2xl font-bold text-foreground mb-5 pl-4" style={{ fontFamily: "'Space Grotesk'" }}>{section.title}</h2>
                <div className="space-y-3 pl-4">
                  {section.content.map((p, j) => (
                    <p key={j} className="text-foreground/60 text-sm leading-[1.8]">{p}</p>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Platform Features */}
          <AnimatedSection delay={400}>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full rounded-full bg-primary" style={{ boxShadow: "0 0 15px hsl(38 100% 55% / 0.3)" }} />
              <h2 className="text-2xl font-bold text-foreground mb-5 pl-4" style={{ fontFamily: "'Space Grotesk'" }}>Platform Features</h2>
              <p className="text-foreground/60 text-sm leading-relaxed mb-4 pl-4">GangaClub offers a comprehensive set of features designed to provide the best possible experience for every user:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4">
                {platformFeatures.map((feat, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-primary mt-0.5">✓</span>
                    <span className="text-foreground/60 text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Responsible Gaming */}
          <AnimatedSection delay={500}>
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full rounded-full bg-secondary" style={{ boxShadow: "0 0 15px hsl(195 100% 45% / 0.3)" }} />
              <h2 className="text-2xl font-bold text-foreground mb-4 pl-4" style={{ fontFamily: "'Space Grotesk'" }}>Responsible Gaming</h2>
              <div className="text-foreground/60 text-sm leading-[1.8] pl-4 space-y-3">
                <p>
                  GangaClub is deeply committed to promoting responsible gaming practices among all our users. We believe that colour prediction games should be enjoyed as a form of entertainment, and we encourage all players to set personal limits, play within their financial means, and never chase losses. Gaming should enhance your life, not complicate it.
                </p>
                <p>
                  Our platform provides tools to help you game responsibly, including deposit limits, session time reminders, and easy access to account management features. If you ever feel that your gaming habits are becoming problematic, we encourage you to take a break and seek support. All players must be 18 years of age or older to participate on GangaClub.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <AnimatedSection className="text-center mb-14">
            <div className="hex-badge mx-auto mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>About GangaClub FAQs</h2>
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

        {/* CTA */}
        <AnimatedSection delay={600} className="mt-14 text-center">
          <div className="line-glow max-w-xs mx-auto mb-6" />
          <p className="text-foreground/50 text-sm mb-6 leading-relaxed max-w-lg mx-auto">
            Join the growing GangaClub community today. Complete your <Link to="/how-to-play" className="text-primary hover:underline">GangaClub register</Link> with refer code <strong className="text-primary">3733139807</strong>, explore our <Link to="/bonuses" className="text-primary hover:underline">bonus programs</Link>, learn about the <Link to="/agent-program" className="text-primary hover:underline">Agent Program</Link>, and discover why GangaClub is India's #1 choice for colour prediction gaming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero py-3 px-8">Join GangaClub Now</a>
            <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost py-3 px-8">📱 Telegram Community</a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default About;
