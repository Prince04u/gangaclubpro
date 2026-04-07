import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";
const TELEGRAM_LINK = "https://t.me/gangaclubofficiaal";

const steps = [
  { num: "01", title: "Register on GangaClub", desc: "Visit the official GangaClub register page and create your account in under 60 seconds. Enter your mobile number, set a secure password, and use refer code 3733139807 during GangaClub signup to unlock your maximum welcome bonus instantly. The registration process is designed to be the fastest in the industry — no lengthy forms, no unnecessary verification steps, and no waiting periods. You'll have full platform access immediately after signup.", accent: "38 100% 55%" },
  { num: "02", title: "Complete GangaClub Login", desc: "After registration, complete your GangaClub login using your registered phone number and password. Your personal dashboard gives you access to all available prediction games, your wallet balance, bonus offers, agent tools, and complete account settings. The login process is protected by multi-layer encryption, ensuring your account credentials and personal data remain secure at all times.", accent: "195 100% 45%" },
  { num: "03", title: "Make Your First Deposit", desc: "Add funds to your GangaClub wallet using UPI, bank transfer, digital wallets, or other supported payment methods. Your first deposit automatically triggers the deposit bonus — which can be up to ₹5,666 depending on the amount. Before depositing, don't forget to claim your GangaClub free giftcode from our official Telegram group for additional bonus credits on top of the deposit bonus.", accent: "320 80% 55%" },
  { num: "04", title: "Choose a Prediction Game", desc: "Navigate to the game lobby and select your preferred colour prediction game mode. GangaClub offers multiple game modes with different time intervals — from fast-paced 1-minute rounds for experienced players to relaxed 10-minute rounds for those who prefer a more strategic approach. Each mode has its own game room, timer, and result history to help you analyze patterns.", accent: "38 100% 55%" },
  { num: "05", title: "Place Your Prediction", desc: "Select a colour (Red, Green, or Violet), a specific number (0–9), or a size category (Big for numbers 5–9, Small for numbers 0–4). Set your bet amount and confirm your prediction. The minimum bet is very affordable, making it accessible to all players. Once the timer ends, results are generated using a provably fair algorithm and your winnings are instantly credited.", accent: "195 100% 45%" },
  { num: "06", title: "Withdraw Your Winnings", desc: "Earnings are instantly added to your GangaClub wallet after each winning round. Navigate to the withdrawal section, enter your bank account details (UPI ID or bank account number), specify the amount, and submit your request. GangaClub processes all withdrawals within minutes — one of the fastest payout speeds in the industry. Your winnings go directly to your bank account.", accent: "320 80% 55%" },
];

const tips = [
  "Start with smaller bets to understand game patterns and build confidence before increasing your stake. Many successful players on GangaClub started with minimum bets.",
  "Join the official GangaClub Telegram prediction group for expert tips and daily winning picks from experienced analysts who share predictions before each round.",
  "Claim your GangaClub free giftcode from Telegram before every gaming session. These free credits boost your wallet balance without requiring any deposit.",
  "Use the deposit bonus structure wisely — plan your deposits strategically across all three tiers to maximize your total bonus earnings on GangaClub.",
  "Set a daily budget and stick to it for long-term enjoyment. Responsible gaming is key to a sustainable and enjoyable experience on GangaClub.",
  "Refer friends using your unique code to earn passive agent income. Even while you play, your team deposits generate 3% commission for you across 6 tiers.",
  "Study the result history available in each game room. While results are random, understanding patterns helps you develop better prediction strategies.",
  "Try different game modes to find what suits your style. Some players prefer 1-minute rounds for quick action, while others prefer 5 or 10-minute rounds for careful analysis.",
];

const faqs = [
  { q: "How do I start playing on GangaClub?", a: "To start playing, complete your GangaClub register at the official registration page, use refer code 3733139807 for maximum bonus, make your first deposit, and choose a prediction game from the lobby. The entire process — from registration to your first prediction — takes less than 2 minutes." },
  { q: "What are the different bet types on GangaClub?", a: "GangaClub offers three main bet types: Colour prediction (Red, Green, or Violet), Number prediction (specific number 0-9), and Size prediction (Big for numbers 5-9, Small for numbers 0-4). Colour bets offer approximately 2x returns, while number bets offer higher payouts due to lower probability." },
  { q: "What is the minimum bet amount?", a: "The minimum bet on GangaClub is very affordable, making the platform accessible to all players regardless of budget. You can start with small bets to learn the game mechanics before increasing your stakes as you gain confidence and experience." },
  { q: "Are the game results fair?", a: "Absolutely. GangaClub uses provably fair algorithms with independently verifiable results. Every round's outcome is generated randomly and cannot be manipulated. The platform maintains complete transparency with result histories available in every game room." },
  { q: "How long does withdrawal take?", a: "GangaClub processes all withdrawal requests within minutes. Once you submit a withdrawal from your wallet, funds are transferred directly to your linked bank account via UPI or bank transfer. There are no hidden delays — GangaClub has one of the fastest payout speeds in India." },
  { q: "Can I play on mobile?", a: "Yes! GangaClub is fully optimized for mobile devices. You can complete your GangaClub login, play prediction games, claim giftcodes, manage your wallet, and withdraw winnings — all from your smartphone. The mobile experience is just as smooth and feature-rich as desktop." },
  { q: "How do I claim my GangaClub free giftcode?", a: "Join the official GangaClub Telegram prediction group where free giftcodes are shared daily. After your GangaClub login, navigate to the giftcode section, enter the code, and the reward is instantly credited to your wallet. Giftcodes offer free credits, cashback, and bonus multipliers." },
];

const HowToPlay = () => (
  <>
    <Helmet>
      <title>How to Play on GangaClub – Complete Colour Prediction Guide | Register & Win</title>
      <meta name="description" content="Learn how to play colour prediction games on GangaClub. Step-by-step guide for GangaClub login, register, deposit, and winning. Claim your GangaClub giftcode and start playing today!" />
      <link rel="canonical" href="https://gangaclub.lovable.app/how-to-play" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "HowTo",
        "name": "How to Play Colour Prediction on GangaClub",
        "description": "Complete guide to playing colour prediction games on GangaClub platform.",
        "step": steps.map((s, i) => ({ "@type": "HowToStep", "position": i + 1, "name": s.title, "text": s.desc }))
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="relative pt-32 pb-20 mesh-bg geo-pattern overflow-hidden">
      <div className="orb orb-cyan w-96 h-96 -top-20 left-10 opacity-25" />
      <div className="orb orb-gold w-64 h-64 bottom-0 right-0 opacity-20" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="hex-badge mx-auto mb-6">Guide</div>
          <h1 className="text-4xl md:text-6xl font-black text-shimmer mb-5" style={{ fontFamily: "'Space Grotesk'" }}>How to Play on GangaClub</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Getting started on GangaClub is incredibly simple and takes less than 2 minutes from start to finish. This comprehensive guide walks you through every step — from completing your GangaClub register to placing your first colour prediction and withdrawing your winnings to your bank account. Whether you're a seasoned prediction game player or completely new to colour prediction, GangaClub's intuitive platform and this detailed guide make it easy for everyone to start earning real money.
          </p>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>

    {/* Steps */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>Step-by-Step Guide</h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-lg mx-auto">Follow these six simple steps to go from registration to withdrawal on GangaClub.</p>
        </AnimatedSection>

        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/20 to-accent/10 hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 80}>
                <div className="glass-card p-6 flex gap-5 items-start relative">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg relative z-10" style={{
                    fontFamily: "'Space Grotesk'",
                    background: `hsl(${step.accent} / 0.1)`,
                    border: `1px solid hsl(${step.accent} / 0.3)`,
                    color: `hsl(${step.accent})`,
                    boxShadow: `0 0 20px hsl(${step.accent} / 0.1)`
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
      </div>
    </section>

    {/* Understanding the Game */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-pink w-72 h-72 top-10 right-10 opacity-15" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>Understanding the Game</h2>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="glass-card p-8">
            <div className="text-foreground/60 text-sm leading-[1.8] space-y-4">
              <p>
                Colour prediction on GangaClub is a straightforward yet thrilling game where players predict the outcome of each round. Every round generates a random number between 0 and 9, each associated with a colour — Red, Green, or Violet. Players can bet on a specific colour, number, or whether the result will be Big (5–9) or Small (0–4). The simplicity of the concept combined with the excitement of real-time results makes it one of the most engaging gaming experiences available.
              </p>
              <p>
                The payout structure on GangaClub is designed to be fair and transparent. Colour predictions typically offer approximately a 2x return on your bet, making them the most popular choice among players. Number predictions offer significantly higher payouts due to their lower probability — correctly predicting the exact number can yield substantial returns. Violet predictions cover numbers 0 and 5, offering unique payout ratios that experienced players often leverage in their strategies.
              </p>
              <p>
                GangaClub offers multiple game modes with different time intervals to suit every playing style. The 1-minute mode is perfect for players who enjoy fast-paced action and quick decisions. The 3-minute and 5-minute modes give you more time to analyze recent results and make informed predictions. The 10-minute mode is ideal for strategic players who prefer thorough analysis before each bet. All modes use the same provably fair algorithm, ensuring consistent fairness across the platform.
              </p>
              <p>
                For best results, combine your own analysis with predictions shared in the official <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GangaClub Telegram prediction group</a>, where expert analysts share picks before each round. Many successful players on GangaClub credit the community insights as a key factor in their consistent earnings. Pairing community predictions with GangaClub free giftcode rewards creates a powerful combination for maximizing your returns.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Pro Tips */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>Pro Tips for Winning</h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-lg mx-auto">Expert advice from experienced GangaClub players to help you maximize your earnings.</p>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tips.map((tip, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="glass-card p-5 h-full flex gap-3 items-start">
                <span className="stat-number text-lg flex-shrink-0">💡</span>
                <p className="text-foreground/60 text-sm leading-relaxed">{tip}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-cyan w-64 h-64 top-10 left-10 opacity-15" />
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="hex-badge mx-auto mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>How to Play FAQs</h2>
          <p className="text-muted-foreground mt-3 text-sm">Common questions about playing colour prediction games on GangaClub.</p>
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

    {/* Refer Code CTA */}
    <section className="py-24 relative geo-pattern">
      <div className="orb orb-gold w-80 h-80 top-0 left-1/4 opacity-20" />
      <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
        <AnimatedSection>
          <div className="glass-card p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-shimmer mb-6" style={{ fontFamily: "'Space Grotesk'" }}>Your Refer Code</h2>
            <p className="text-foreground/60 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Enter the code below during your GangaClub register process in the "Invitation Code" field. This ensures you receive the maximum welcome bonus and connects you to an active support team. The refer code cannot be added after registration, so make sure to enter it during signup.
            </p>
            <div className="glass-card inline-block px-10 py-5 mb-8">
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Refer Code</p>
              <p className="stat-number text-4xl md:text-5xl">3733139807</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero py-3 px-8">Register with Code →</a>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost py-3 px-8">📱 Prediction Group</a>
            </div>
            <p className="text-foreground/40 text-xs mt-6">
              Already registered? Explore our <Link to="/bonuses" className="text-primary hover:underline">Bonuses</Link>, learn about the <Link to="/agent-program" className="text-primary hover:underline">Agent Program</Link>, or read <Link to="/about" className="text-primary hover:underline">About GangaClub</Link>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default HowToPlay;
