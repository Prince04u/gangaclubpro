import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";
const TELEGRAM_LINK = "https://t.me/gangaclubofficiaal";

const depositData = {
  first: [
    { deposit: "100", bonus: "20" }, { deposit: "300", bonus: "56" }, { deposit: "500", bonus: "76" },
    { deposit: "1,000", bonus: "146" }, { deposit: "5,000", bonus: "666" }, { deposit: "10,000", bonus: "1,366" },
    { deposit: "30,000", bonus: "3,366" }, { deposit: "50,000", bonus: "5,666" },
  ],
  second: [
    { deposit: "100", bonus: "22" }, { deposit: "300", bonus: "66" }, { deposit: "500", bonus: "86" },
    { deposit: "1,000", bonus: "166" }, { deposit: "5,000", bonus: "766" }, { deposit: "10,000", bonus: "1,566" },
    { deposit: "30,000", bonus: "3,866" }, { deposit: "50,000", bonus: "6,666" },
  ],
  third: [
    { deposit: "300", bonus: "76" }, { deposit: "500", bonus: "106" }, { deposit: "1,000", bonus: "196" },
    { deposit: "5,000", bonus: "866" }, { deposit: "10,000", bonus: "1,666" },
    { deposit: "30,000", bonus: "4,666" }, { deposit: "50,000", bonus: "8,666" },
  ],
};

const invitationData = [
  { people: "2", reward: "56" }, { people: "4", reward: "156" }, { people: "10", reward: "356" },
  { people: "30", reward: "1,556" }, { people: "50", reward: "2,556" }, { people: "75", reward: "3,556" },
  { people: "100", reward: "5,566" }, { people: "200", reward: "11,566" }, { people: "500", reward: "25,566" },
  { people: "1,000", reward: "55,566" }, { people: "5,000", reward: "1,11,666" }, { people: "10,000", reward: "2,66,666" },
];

const tierColors = {
  first: "38 100% 55%",
  second: "195 100% 45%",
  third: "320 80% 55%",
};

const faqs = [
  { q: "How do I claim my GangaClub deposit bonus?", a: "After completing your GangaClub register and first GangaClub login, simply make a deposit using UPI, bank transfer, or any supported method. The deposit bonus is automatically calculated based on the tier and amount, and is instantly credited to your wallet. No promo code is required for deposit bonuses — they are applied automatically." },
  { q: "Can I claim all three deposit bonuses?", a: "Yes! GangaClub offers bonuses on your first three deposits, each with increasing reward percentages. This means your second and third deposits earn even bigger bonuses than your first. Plan your deposits strategically to maximize your total bonus earnings across all three tiers." },
  { q: "How does the GangaClub giftcode work?", a: "GangaClub giftcodes are special reward codes distributed through our official Telegram group. After GangaClub login, navigate to the giftcode section in your account, enter the code, and the reward — which could be free credits, cashback, or bonus multipliers — is instantly added to your wallet. New GangaClub free giftcode offers are shared daily." },
  { q: "What is the invitation bonus and how do I earn it?", a: "The invitation bonus rewards you for bringing new players to GangaClub. Share your unique refer code with friends and family. When they complete their GangaClub register using your code, you earn reward credits. Bonuses accumulate as you invite more people — up to ₹2,66,666 for 10,000 successful invitations." },
  { q: "When do bonuses get credited to my wallet?", a: "All bonuses on GangaClub are credited instantly. Deposit bonuses appear the moment your deposit is confirmed. Invitation bonuses are credited as soon as your referred friend completes their registration. GangaClub giftcode rewards are added immediately after entering a valid code." },
  { q: "Are there any conditions for withdrawing bonus amounts?", a: "Deposit bonuses and giftcode rewards typically have a turnover requirement (usually 1x to 2x the bonus amount) before they can be withdrawn. This ensures fair play. Invitation bonuses have no turnover requirement and can be withdrawn directly." },
];

const Bonuses = () => (
  <>
    <Helmet>
      <title>GangaClub Bonuses – Deposit Bonus, Free Giftcode & Invitation Rewards</title>
      <meta name="description" content="Claim your GangaClub giftcode, deposit bonus up to ₹8,666, and invitation rewards up to ₹2,66,666. GangaClub free giftcode offers available daily. Register now!" />
      <link rel="canonical" href="https://gangaclub.lovable.app/bonuses" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="relative pt-32 pb-20 mesh-bg geo-pattern overflow-hidden">
      <div className="orb orb-gold w-80 h-80 top-0 right-0 opacity-30" />
      <div className="orb orb-pink w-64 h-64 bottom-0 left-10 opacity-20" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="hex-badge mx-auto mb-6">Bonuses & Rewards</div>
          <h1 className="text-4xl md:text-6xl font-black text-shimmer mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Earn More with Every Move</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            GangaClub rewards every player with industry-leading bonuses that start the moment you complete your GangaClub register. From automatic deposit bonuses to daily GangaClub free giftcode drops and one of the most generous invitation reward programs in India, every action on GangaClub puts real money back in your wallet. This isn't just a platform — it's a rewards ecosystem designed to maximize your earnings at every stage of your journey.
          </p>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>

    {/* About Bonuses */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Understanding GangaClub Bonuses</h2>
            <div className="text-foreground/60 text-sm leading-[1.9] space-y-4">
              <p>
                GangaClub has designed its bonus system to be the most rewarding in the Indian colour prediction industry. Every new player who completes their GangaClub signup with refer code <strong className="text-primary">3733139807</strong> instantly qualifies for the full bonus suite — including three tiers of deposit bonuses, invitation rewards, and daily GangaClub free giftcode offers. Unlike other platforms that limit rewards to first-time users, GangaClub continues rewarding you long after your initial registration.
              </p>
              <p>
                The deposit bonus structure is straightforward: your first three deposits each trigger automatic bonus credits. The percentage increases with each tier, meaning your second deposit earns more than your first, and your third earns the most. This encourages strategic depositing and ensures that every rupee you add to your GangaClub wallet is amplified with bonus credits. The maximum single bonus reaches ₹8,666 on a third deposit of ₹50,000.
              </p>
              <p>
                Beyond deposit bonuses, GangaClub's invitation system lets you earn up to ₹2,66,666 by referring friends. Every person who registers using your code contributes to your invitation bonus total, which accumulates automatically. And for daily passive rewards, our official <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Telegram prediction group</a> shares GangaClub giftcode offers that give you free credits, cashback, and premium access — no deposit required.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Deposit Bonuses */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-cyan w-72 h-72 top-10 right-0 opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer mb-3" style={{ fontFamily: "'Space Grotesk'" }}>Deposit Bonuses</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">Receive bonus credits on your first three deposits. Bonuses auto-credit immediately after GangaClub login and deposit confirmation. No promo code needed — the system handles everything automatically.</p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-14">
          <div className="glass-card max-w-2xl mx-auto overflow-hidden">
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
              <img src="/images/deposit-bonus.jpeg" alt="GangaClub Three Tier Deposit Bonus Reward Structure" className="w-full" loading="lazy" />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {(["first", "second", "third"] as const).map((tier, idx) => (
            <AnimatedSection key={tier} delay={idx * 120}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full" style={{ background: `hsl(${tierColors[tier]})`, boxShadow: `0 0 12px hsl(${tierColors[tier]} / 0.5)` }} />
                  <h3 className="text-lg font-bold text-foreground capitalize" style={{ fontFamily: "'Space Grotesk'" }}>{tier} Deposit</h3>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-muted-foreground uppercase tracking-wider pb-2 border-b border-border/20">
                    <span>Deposit ₹</span><span>Bonus ₹</span>
                  </div>
                  {depositData[tier].map(row => (
                    <div key={row.deposit} className="flex justify-between text-sm py-2 border-b border-border/5 hover:bg-foreground/[0.02] transition-colors rounded px-1">
                      <span className="text-foreground/70">{row.deposit}</span>
                      <span className="font-semibold" style={{ color: `hsl(${tierColors[tier]})` }}>{row.bonus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="mt-10 max-w-3xl mx-auto">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>How Deposit Bonuses Work</h3>
            <div className="text-foreground/60 text-sm leading-relaxed space-y-3">
              <p>When you make a deposit on GangaClub, the system automatically calculates your bonus based on the tier (first, second, or third deposit) and the amount deposited. The bonus is instantly credited to your wallet — you'll see it reflected immediately after the deposit is confirmed.</p>
              <p>For example, if your first deposit is ₹5,000, you'll receive ₹666 in bonus credits automatically. If your second deposit is ₹10,000, you'll receive ₹1,566. And if your third deposit is ₹50,000, you'll receive a massive ₹8,666 bonus. Strategic players often plan their deposits to maximize bonus earnings across all three tiers.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Invitation Bonus */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer mb-3" style={{ fontFamily: "'Space Grotesk'" }}>Invitation Bonus</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">Invite friends and earn massive rewards. Bonuses accumulate automatically and are credited when each milestone is reached. There's no limit to how many people you can invite.</p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-14">
          <div className="glass-card max-w-2xl mx-auto overflow-hidden">
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
              <img src="/images/invitation-bonus.jpeg" alt="GangaClub Invitation Bonus Milestone Rewards Up to 2.66 Lakh" className="w-full" loading="lazy" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card max-w-2xl mx-auto p-6">
            <div className="grid grid-cols-2 gap-3">
              {invitationData.map(row => (
                <div key={row.people} className="flex justify-between items-center py-2.5 px-4 rounded-xl hover:bg-foreground/[0.03] transition-colors">
                  <span className="text-sm text-foreground/70">{row.people} People</span>
                  <span className="stat-number text-sm">₹{row.reward}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={300} className="mt-10 max-w-3xl mx-auto">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>Maximizing Your Invitation Earnings</h3>
            <div className="text-foreground/60 text-sm leading-relaxed space-y-3">
              <p>The invitation bonus system rewards you for every friend who completes their GangaClub register using your unique refer code. Bonuses are cumulative — as you reach each milestone, the corresponding reward is automatically credited to your wallet. The system tracks all your referrals in real-time from your dashboard.</p>
              <p>Top inviters on GangaClub earn lakhs through this system alone. Combined with the agent program's daily salary structure, building a team on GangaClub can become a significant income source. Share your refer code on social media, messaging apps, and in your personal network to accelerate your earnings.</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Giftcode */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-gold w-72 h-72 top-0 left-0 opacity-20" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            <div className="hex-badge mx-auto mb-6">Free Rewards</div>
            <h2 className="text-2xl md:text-3xl font-bold text-shimmer mb-4" style={{ fontFamily: "'Space Grotesk'" }}>GangaClub Giftcode</h2>
            <div className="text-foreground/60 text-sm leading-relaxed mb-8 max-w-lg mx-auto space-y-3 text-left">
              <p>
                GangaClub giftcodes are one of the most popular features among our players. These special reward codes are distributed daily through our official <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Telegram prediction group</a> and offer free credits, cashback rewards, bonus multipliers, and exclusive access to premium prediction rounds — all without requiring any deposit.
              </p>
              <p>
                To claim a GangaClub free giftcode, simply complete your GangaClub login, navigate to the giftcode section in your account, and enter the code. The reward is instantly credited to your wallet. New giftcodes are shared every day, so make sure you're a member of our Telegram group to never miss an offer. Some giftcodes are limited in quantity, so early claimers get the best rewards.
              </p>
              <p>
                Regular giftcode claimers on GangaClub report earning significant additional credits each month — completely free. It's our way of saying thank you to our loyal community members. Whether you're a new player who just completed their GangaClub signup or a veteran with thousands of rounds played, giftcodes are available to everyone.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero py-3 px-8">Claim Bonus Now</a>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost py-3 px-8">📱 Get Free Giftcodes</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="hex-badge mx-auto mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>Bonus FAQs</h2>
          <p className="text-muted-foreground mt-3 text-sm">Common questions about GangaClub bonuses, giftcodes, and rewards.</p>
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

    {/* Bottom SEO */}
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <div className="line-glow mb-8 max-w-xs mx-auto" />
          <div className="text-foreground/40 text-sm leading-relaxed text-center space-y-3">
            <p>
              GangaClub's bonus system is designed to maximize your earnings at every stage of your journey. Whether you're making your first deposit after GangaClub signup, inviting friends to join the platform, or claiming your daily GangaClub free giftcode from our Telegram group, every single action on GangaClub is rewarded with real money.
            </p>
            <p>
              Complete your <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GangaClub register</a> with code <strong className="text-primary">3733139807</strong> and start earning. Explore our <Link to="/agent-program" className="text-primary hover:underline">Agent Program</Link> for daily salary opportunities, or visit <Link to="/how-to-play" className="text-primary hover:underline">How to Play</Link> to learn the complete game guide.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Bonuses;
