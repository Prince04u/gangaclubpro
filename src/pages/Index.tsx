import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Shield, Users, Gift, Zap, Trophy, ArrowRight, Star, Clock, TrendingUp, Wallet, HeadphonesIcon, Lock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";
const TELEGRAM_LINK = "https://t.me/gangaclubofficiaal";

const features = [
  { icon: Shield, title: "100% Secure Platform", desc: "GangaClub uses military-grade SSL encryption and multi-layer security protocols to ensure your personal data, login credentials, and financial transactions are fully protected at all times. Your safety is our number one priority.", accent: "38 100% 55%" },
  { icon: Zap, title: "Instant Payouts", desc: "Unlike other prediction platforms that make you wait hours or even days, GangaClub processes all withdrawals within minutes. Whether you win ₹100 or ₹1,00,000, your earnings are transferred directly to your bank account instantly.", accent: "195 100% 45%" },
  { icon: Gift, title: "Free Giftcodes Daily", desc: "Claim exclusive GangaClub free giftcode rewards every single day through our official Telegram channel. These giftcodes include bonus credits, cashback offers, and access to premium prediction rounds that boost your earnings.", accent: "320 80% 55%" },
  { icon: HeadphonesIcon, title: "24/7 Live Support", desc: "Our dedicated customer support team is available around the clock to assist you with any queries — from GangaClub login issues to withdrawal questions. Most tickets are resolved within minutes, making us the fastest support in the industry.", accent: "38 100% 55%" },
  { icon: Trophy, title: "Mega Deposit Bonuses", desc: "GangaClub offers one of the most generous deposit bonus structures in India. Your first three deposits each come with escalating bonus percentages, with rewards going up to ₹8,666 on a single deposit. Every rupee you add is rewarded.", accent: "195 100% 45%" },
  { icon: Star, title: "Expert Predictions", desc: "Join our official Telegram prediction group where experienced analysts share winning picks before every round. Thousands of members benefit daily from accurate predictions, strategy discussions, and community-driven insights.", accent: "320 80% 55%" },
  { icon: TrendingUp, title: "Agent Program", desc: "Build your own team and earn daily salaries ranging from ₹100 to ₹80,000. The GangaClub agent program offers 3% deposit-base commissions across 6 tiers, making it one of the most lucrative referral systems available.", accent: "38 100% 55%" },
  { icon: Wallet, title: "Multiple Payment Methods", desc: "GangaClub supports UPI, bank transfers, digital wallets, and more for both deposits and withdrawals. No matter how you prefer to transact, we have a fast, secure option ready for you.", accent: "195 100% 45%" },
  { icon: Lock, title: "Provably Fair Games", desc: "Every prediction round on GangaClub uses independently verifiable algorithms. Results are transparent, auditable, and cannot be manipulated. You can trust that every game you play is completely fair and unbiased.", accent: "320 80% 55%" },
];

const stats = [
  { number: "5L+", label: "Active Players" },
  { number: "₹10Cr+", label: "Total Paid Out" },
  { number: "24/7", label: "Support" },
  { number: "99.9%", label: "Uptime" },
];

const faqs = [
  { q: "What is GangaClub?", a: "GangaClub is India's leading colour prediction platform where players predict the outcome of each round — choosing a colour, number, or size — and win real money. The platform offers instant payouts, generous bonuses, and a vibrant community of active players. GangaClub is trusted by over 5 lakh users across India." },
  { q: "How do I complete my GangaClub register?", a: "To complete your GangaClub register, visit the official registration page, enter your mobile number, set a password, and use refer code 3733139807 to unlock your welcome bonus. The entire GangaClub signup process takes under 60 seconds, and you can start playing immediately after." },
  { q: "How does GangaClub login work?", a: "After registration, GangaClub login is simple — enter your registered mobile number and password on the login page. Your dashboard gives you instant access to all games, bonuses, account settings, and withdrawal options. If you face any login issues, our 24/7 support team is ready to help." },
  { q: "What is a GangaClub giftcode and how do I claim it?", a: "A GangaClub giftcode is a special reward code that gives you free credits, cashback, or bonus multipliers. GangaClub free giftcode offers are shared daily in our official Telegram group. After GangaClub login, navigate to the giftcode section, enter the code, and the reward is instantly credited to your wallet." },
  { q: "Is GangaClub safe and secure?", a: "Absolutely. GangaClub employs SSL encryption, secure payment gateways, and multi-factor authentication to protect your account. All games use provably fair algorithms with verifiable results. Your funds and personal information are always safe on GangaClub." },
  { q: "How fast are withdrawals on GangaClub?", a: "GangaClub processes all withdrawal requests within minutes. Once you submit a withdrawal from your wallet, funds are transferred directly to your linked bank account. There are no hidden delays or excessive processing times — we believe your winnings should reach you fast." },
  { q: "Can I earn money without playing on GangaClub?", a: "Yes! Through the GangaClub agent program, you can earn daily salaries by referring new players. Agents earn 3% deposit-base commissions across 6 tiers, plus daily salary payouts scaling from ₹100 to ₹80,000 depending on team size and activity." },
  { q: "What games are available on GangaClub?", a: "GangaClub offers multiple colour prediction game modes with varying time intervals — from 1-minute rounds to 10-minute rounds. Players can predict colours (Red, Green, Violet), specific numbers (0-9), or sizes (Big/Small). Each mode offers different payout structures to suit your strategy." },
];

const Index = () => (
  <>
    <Helmet>
      <title>GangaClub – Login & Register </title>
      <meta name="description" content="GangaClub is India's most trusted colour prediction platform. GangaClub login, register, claim free giftcode, and start winning real money. Join now with exciting signup bonuses!" />
      <meta name="keywords" content="gangaclub, gangaclub login, gangaclub register, gangaclub giftcode, gangaclub signup, gangaclub free giftcode" />
      <link rel="canonical" href="https://gangaclub.lovable.app/" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "WebSite", "name": "GangaClub",
        "url": "https://gangaclub.lovable.app",
        "description": "India's #1 colour prediction platform with real rewards.",
        "potentialAction": { "@type": "SearchAction", "target": "https://gangaclub.lovable.app/?q={search_term_string}", "query-input": "required name=search_term_string" }
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "Organization", "name": "GangaClub",
        "url": "https://gangaclub.lovable.app",
        "logo": "https://gangaclub.lovable.app/images/ganga-club-logo.jpeg",
        "sameAs": [TELEGRAM_LINK]
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}</script>
    </Helmet>

    {/* ===== HERO ===== */}
    <section className="relative min-h-screen flex items-center mesh-bg geo-pattern overflow-hidden">
      <div className="orb orb-gold w-96 h-96 top-10 -left-32" />
      <div className="orb orb-cyan w-80 h-80 top-40 right-0" />
      <div className="orb orb-pink w-72 h-72 bottom-10 left-1/3" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-10" style={{ animation: "rotate-slow 60s linear infinite" }}>
        <div className="w-full h-full rounded-full border border-primary/30" />
        <div className="absolute inset-8 rounded-full border border-dashed border-secondary/20" />
        <div className="absolute inset-16 rounded-full border border-accent/10" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="hex-badge mx-auto mb-8">
              <Clock size={14} /> India's #1 Prediction Platform
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="relative inline-block mb-8">
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
                <img src="/images/ganga-club-logo.jpeg" alt="GangaClub Official Logo - India's Top Colour Prediction App" className="w-24 h-24 md:w-32 md:h-32 rounded-3xl floating-slow" style={{ boxShadow: "0 0 50px hsl(38 100% 55% / 0.25)" }} />
              </a>
              <div className="absolute -inset-3 rounded-3xl border border-primary/20" style={{ animation: "pulse-ring 2.5s ease-out infinite" }} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={250}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="text-shimmer">GangaClub</span>
              <br />
              <span className="text-foreground/90 text-3xl md:text-5xl lg:text-6xl font-bold">Predict. Play. Prosper.</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              GangaClub is India's premier colour prediction platform where thousands of players earn real money every day. Complete your GangaClub register in under 60 seconds, explore our generous GangaClub giftcode offers, and start winning instantly. Whether you're here for the thrill of prediction games or the lucrative agent program, GangaClub delivers the most rewarding experience in the industry. Our platform is trusted by over 5 lakh active users who enjoy instant payouts, provably fair games, and daily GangaClub free giftcode rewards.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={550}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero text-base py-4 px-12">
                GangaClub Register →
              </a>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost flex items-center gap-2">
                📱 Prediction Group <ArrowRight size={16} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={650}>
            <div className="inline-flex items-center gap-3 glass-card px-6 py-3">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Refer Code</span>
              <span className="w-px h-5 bg-border/50" />
              <span className="stat-number text-xl">3733139807</span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>

    {/* ===== STATS MARQUEE ===== */}
    <section className="py-6 border-y border-border/10 bg-muted/20 overflow-hidden">
      <div className="marquee-track">
        {[...stats, ...stats, ...stats].map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-10">
            <span className="stat-number text-2xl md:text-3xl">{s.number}</span>
            <span className="text-muted-foreground text-sm">{s.label}</span>
            <span className="text-border/30 mx-4">◆</span>
          </div>
        ))}
      </div>
    </section>

    {/* ===== WHAT IS GANGACLUB ===== */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="hex-badge mx-auto mb-4">Introduction</div>
          <h2 className="text-3xl md:text-5xl font-bold text-shimmer mb-4" style={{ fontFamily: "'Space Grotesk'" }}>What is GangaClub?</h2>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="glass-card p-8 md:p-12">
            <div className="text-foreground/60 text-sm leading-[1.9] space-y-4">
              <p>
                GangaClub is India's fastest-growing colour prediction platform that has revolutionized the way people engage with prediction-based gaming. Unlike traditional betting platforms, GangaClub combines the excitement of real-time prediction games with a transparent, secure, and community-driven ecosystem. Every round on GangaClub generates a random result, and players predict whether the outcome will be a specific colour (Red, Green, or Violet), a number (0–9), or a size category (Big or Small). Correct predictions earn real money that can be withdrawn instantly to your bank account.
              </p>
              <p>
                What makes GangaClub truly unique is the combination of entertainment and genuine earning potential. The platform isn't just about playing games — it's about building a sustainable income stream. Through the GangaClub agent program, players can earn daily salaries by building teams, without even placing a single prediction themselves. Combined with daily GangaClub free giftcode rewards distributed through our official Telegram channel, every user on GangaClub has multiple pathways to earn.
              </p>
              <p>
                The GangaClub register process is designed to be incredibly simple. In under 60 seconds, you can create your account, verify your mobile number, and access the full platform. By using refer code <strong className="text-primary">3733139807</strong> during your GangaClub signup, you automatically unlock the maximum welcome bonus and connect with an active support team that helps you get started. After registration, GangaClub login is seamless — just enter your credentials and you're in.
              </p>
              <p>
                GangaClub has paid out over ₹10 crore to its players and agents, processing withdrawals within minutes, not hours or days. With over 5 lakh active users, 99.9% platform uptime, and 24/7 customer support, GangaClub has earned its reputation as India's most trusted colour prediction platform. Whether you're a seasoned player or completely new to colour prediction, GangaClub provides the tools, support, and rewards to make your experience exceptional.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ===== FEATURES ===== */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-cyan w-72 h-72 -top-20 right-10 opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="hex-badge mx-auto mb-4">Why GangaClub</div>
          <h2 className="text-3xl md:text-5xl font-bold text-shimmer mb-4" style={{ fontFamily: "'Space Grotesk'" }}>Built Different</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Here's what makes GangaClub the most trusted and feature-rich colour prediction platform in India. Every feature is designed with our players in mind.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 80}>
              <div className="glass-card p-7 h-full group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110" style={{ background: `hsl(${f.accent} / 0.1)`, border: `1px solid hsl(${f.accent} / 0.2)` }}>
                  <f.icon size={22} style={{ color: `hsl(${f.accent})` }} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk'" }}>{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ===== HOW IT WORKS ===== */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="hex-badge mx-auto mb-4">Getting Started</div>
          <h2 className="text-3xl md:text-5xl font-bold text-shimmer mb-4" style={{ fontFamily: "'Space Grotesk'" }}>How GangaClub Works</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">From registration to withdrawal, everything on GangaClub is designed to be fast, simple, and rewarding.</p>
        </AnimatedSection>

        <div className="space-y-6">
          {[
            { num: "01", title: "Complete Your GangaClub Register", desc: "Visit the official registration page and create your account in under 60 seconds. Enter your mobile number, set a secure password, and use refer code 3733139807 to unlock your maximum welcome bonus. The GangaClub signup process is the simplest in the industry — no lengthy forms, no unnecessary verification steps.", accent: "38 100% 55%" },
            { num: "02", title: "GangaClub Login & Explore", desc: "After registration, complete your GangaClub login and explore the full platform. Your dashboard gives you access to all prediction games, bonus offers, agent tools, and account settings. The interface is clean, intuitive, and optimized for both desktop and mobile users.", accent: "195 100% 45%" },
            { num: "03", title: "Deposit & Claim Bonuses", desc: "Add funds using UPI, bank transfer, or digital wallets. Your first three deposits each trigger automatic bonus credits — up to ₹8,666 on a single deposit. Don't forget to claim your daily GangaClub free giftcode from our Telegram group for additional rewards before every session.", accent: "320 80% 55%" },
            { num: "04", title: "Predict & Win Real Money", desc: "Choose your prediction game mode, select a colour, number, or size, and place your prediction. Results are generated in real-time using provably fair algorithms. Correct predictions are instantly credited to your wallet — ready to withdraw or reinvest in the next round.", accent: "38 100% 55%" },
          ].map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 100}>
              <div className="glass-card p-6 flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg" style={{
                  fontFamily: "'Space Grotesk'",
                  background: `hsl(${step.accent} / 0.1)`,
                  border: `1px solid hsl(${step.accent} / 0.3)`,
                  color: `hsl(${step.accent})`,
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk'" }}>{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ===== BONUS SHOWCASE ===== */}
    <section className="py-24 relative overflow-hidden mesh-bg">
      <div className="orb orb-gold w-96 h-96 top-20 -left-40 opacity-25" />
      <div className="orb orb-pink w-64 h-64 bottom-20 right-0 opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <div className="hex-badge mx-auto mb-4">Rewards</div>
          <h2 className="text-3xl md:text-5xl font-bold text-shimmer mb-4" style={{ fontFamily: "'Space Grotesk'" }}>Massive Bonuses</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">From deposit bonuses to invitation rewards, GangaClub offers the most generous bonus structure in the industry. Every action is rewarded.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            { img: "/images/deposit-bonus.jpeg", alt: "GangaClub Deposit Bonus Structure Showing Three Tier Rewards", title: "Deposit Bonuses", desc: "Get up to ₹8,666 bonus on your deposits across three reload tiers. Every deposit after your GangaClub register triggers automatic bonus credits. The more you deposit, the bigger your bonus — it's GangaClub's way of rewarding your trust.", tag: "3 Tiers", link: "/bonuses" },
            { img: "/images/invitation-bonus.jpeg", alt: "GangaClub Invitation Bonus Rewards Table for Referrals", title: "Invitation Bonuses", desc: "Earn up to ₹2,66,666 by inviting friends to join GangaClub. Share your unique refer code, and every successful registration earns you reward credits. Bonuses accumulate automatically and are credited to your wallet.", tag: "Up to ₹2.6L", link: "/bonuses" },
            { img: "/images/agent-active-base.jpeg", alt: "GangaClub Agent Daily Salary Based on Active Team Members", title: "Agent Daily Salary", desc: "Build a team and earn daily salaries from ₹100 to ₹80,000. The GangaClub agent program is one of the most rewarding referral systems in India, with 3% deposit-base commissions across all tiers.", tag: "₹80K/Day", link: "/agent-program" },
            { img: "/images/recharge-rebate.jpeg", alt: "GangaClub Member Recharge Rebate Commission Details", title: "Recharge Rebates", desc: "Earn rebates every time your Tier-1 team members recharge their wallets. This passive income stream rewards you for building and maintaining an active team on GangaClub.", tag: "Passive Income", link: "/agent-program" },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 120}>
              <div className="glass-card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={item.alt} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </a>
                  <div className="absolute top-4 right-4">
                    <span className="hex-badge">{item.tag}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="p-6 -mt-8 relative z-10">
                  <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk'" }}>{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.desc}</p>
                  <Link to={item.link} className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all duration-300">
                    View Details <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* ===== TELEGRAM CTA ===== */}
    <section className="py-20 relative geo-pattern">
      <div className="orb orb-gold w-80 h-80 top-0 left-1/4 opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection>
          <div className="glass-card max-w-3xl mx-auto p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            <h2 className="text-2xl md:text-4xl font-bold text-shimmer mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Join Our Prediction Group</h2>
            <p className="text-foreground/60 mb-4 max-w-lg mx-auto text-sm leading-relaxed">
              Our official Telegram prediction group is the beating heart of the GangaClub community. With thousands of active members, you get daily winning predictions from expert analysts, instant GangaClub free giftcode drops, strategy discussions, and real-time support. Members who combine community insights with their own analysis consistently see better results.
            </p>
            <p className="text-foreground/60 mb-8 max-w-lg mx-auto text-sm leading-relaxed">
              The group is completely free to join and open to all registered GangaClub users. Whether you're looking for today's giftcode, want expert picks before each round, or just want to connect with fellow players, our Telegram group is the place to be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero py-3 px-8">📱 Join Telegram Group</a>
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost py-3 px-8">GangaClub Login</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* ===== FAQ ===== */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-pink w-64 h-64 top-10 left-10 opacity-15" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="hex-badge mx-auto mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>Frequently Asked Questions</h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">Everything you need to know about GangaClub, from registration to withdrawals.</p>
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

    {/* ===== FINAL SEO CONTENT ===== */}
    <section className="py-20 relative">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-shimmer mb-2" style={{ fontFamily: "'Space Grotesk'" }}>Your Journey Starts Here</h2>
          <div className="line-glow max-w-xs mx-auto mt-4" />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="text-foreground/50 text-sm leading-[1.8] space-y-4">
            <p>
              GangaClub has established itself as India's most reliable colour prediction platform, trusted by hundreds of thousands of players across the country. The GangaClub login process is designed to be simple, fast, and secure, letting you jump straight into the action. New users can complete their GangaClub register in under a minute and immediately access a world of exciting prediction games, generous bonuses, and a vibrant community of like-minded players.
            </p>
            <p>
              What truly sets GangaClub apart from other platforms is our commitment to transparency and fair play. Every prediction game on GangaClub operates with verifiable results, giving you complete confidence in every round. Our GangaClub giftcode system rewards loyal players with free credits, bonus multipliers, and exclusive access to premium prediction rounds. These GangaClub free giftcode offers are distributed through our official Telegram channel, so make sure you join to never miss an opportunity.
            </p>
            <p>
              The GangaClub signup process rewards new members with an incredible welcome bonus structure. Your first three deposits each come with escalating bonus percentages, meaning the more you invest, the more GangaClub rewards your trust. Beyond personal play, our agent program offers one of the most lucrative referral systems in the industry — agents can earn daily salaries based on their team's performance, with earnings scaling from ₹100 to ₹80,000 per day. It's a genuine income opportunity that thousands of agents are already benefiting from.
            </p>
            <p>
              Ready to experience the best in colour prediction gaming? Complete your GangaClub register now using refer code <strong className="text-primary">3733139807</strong>, claim your welcome bonus, and join the thousands of winners already playing on GangaClub. Whether you want to play casually, build a team as an agent, or simply enjoy our GangaClub free giftcode rewards, there's something for everyone at GangaClub. Visit our <Link to="/how-to-play" className="text-primary hover:underline">How to Play</Link> guide, explore <Link to="/bonuses" className="text-primary hover:underline">Bonuses & Rewards</Link>, or learn about the <Link to="/agent-program" className="text-primary hover:underline">Agent Program</Link> to get started.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Index;
