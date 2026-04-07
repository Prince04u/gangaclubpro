import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";
const TELEGRAM_LINK = "https://t.me/gangaclubofficiaal";

const salaryData = [
  { players: "3", deposit: "1,000", salary: "100" },
  { players: "5", deposit: "2,000", salary: "300" },
  { players: "10", deposit: "6,000", salary: "600" },
  { players: "20", deposit: "15,000", salary: "1,200" },
  { players: "40", deposit: "25,000", salary: "2,600" },
  { players: "60", deposit: "45,000", salary: "4,600" },
  { players: "80", deposit: "55,000", salary: "6,500" },
  { players: "100", deposit: "90,000", salary: "8,600" },
  { players: "130", deposit: "1,30,000", salary: "11,000" },
  { players: "150", deposit: "1,80,000", salary: "13,500" },
  { players: "200", deposit: "2,50,000", salary: "20,000" },
  { players: "500", deposit: "5,50,000", salary: "55,000" },
  { players: "1,000", deposit: "10,00,000", salary: "80,000" },
];

const rechargeData = {
  first: [
    { range: "100 – 299", bonus: "₹20" }, { range: "300 – 499", bonus: "₹58" },
    { range: "500 – 999", bonus: "₹88" }, { range: "1,000 – 4,999", bonus: "₹120" },
    { range: "5,000 – 9,999", bonus: "₹600" }, { range: "10,000 – 49,999", bonus: "₹1,200" },
  ],
  second: [
    { range: "300 – 499", bonus: "₹48" }, { range: "500 – 999", bonus: "₹60" },
    { range: "1,000 – 4,999", bonus: "₹90" }, { range: "5,000 – 9,999", bonus: "₹120" },
    { range: "10,000 – 49,999", bonus: "₹600" },
  ],
  third: [
    { range: "1,000 – 4,999", bonus: "₹90" }, { range: "5,000 – 9,999", bonus: "₹120" },
    { range: "10,000 – 49,999", bonus: "₹600" }, { range: "50,000 – 99,999", bonus: "₹1,678" },
  ],
};

const tierAccent = { first: "38 100% 55%", second: "195 100% 45%", third: "320 80% 55%" };

const terms = [
  "As a GangaClub agent, you receive a 10-day support period at 2.5% salary rate to help build your team with no profit limit.",
  "Direct deposits must account for at least 30% of team deposits. If not met but profit exists, salary portion that falls short will be paid at 1%.",
  "If the team records losses for 3 consecutive days, salary payments will be suspended until cumulative losses are recovered.",
  "New deposit members require a minimum of 3 days to be eligible for salary. No new members mean no further salary dispatch.",
  "Agents placing ads must prepay their own advertising fees and retain receipts for reimbursement (up to ₹10,000 per submission).",
  "We recommend all agents operate a prediction channel to earn more betting commissions and grow your team organically.",
];

const faqs = [
  { q: "How do I become a GangaClub agent?", a: "Becoming a GangaClub agent is completely free and automatic. After completing your GangaClub register, you receive a unique refer code that you can share with others. When people sign up using your code, they become part of your team, and you start earning agent commissions and salary immediately. There's no application process or approval needed." },
  { q: "How is the agent daily salary calculated?", a: "Your daily salary is determined by two factors: the number of active deposit members in your team and the total minimum deposit amount. For example, if you have 10 active members with combined deposits of ₹6,000 or more, you earn ₹600 per day. The salary scales up to ₹80,000/day for teams with 1,000+ members." },
  { q: "What is the 3% deposit-base commission?", a: "GangaClub agents earn a 3% commission on all deposits made by their team members across 6 tiers. This means if a team member deposits ₹10,000, you earn ₹300 commission. This applies to every deposit, not just the first one — creating a continuous passive income stream." },
  { q: "What are member recharge rebates?", a: "Recharge rebates are additional bonuses agents earn when their Tier-1 (direct) team members make their first three recharges. The rebate amount depends on the recharge amount and which recharge it is (first, second, or third). This is separate from the daily salary and deposit-base commission." },
  { q: "Can I be both a player and an agent?", a: "Absolutely! Most GangaClub agents are also active players. You can play prediction games, earn from your own winnings, and simultaneously earn agent commissions and salary from your team. There's no conflict between the two — in fact, being an active player helps you understand the platform better and advise your team members." },
  { q: "Is there a limit to how much agents can earn?", a: "There is no earning cap for GangaClub agents. Your salary scales with team size up to ₹80,000/day, and the 3% deposit-base commission applies to all team deposits without limit. Top agents on GangaClub earn lakhs per month through a combination of salary, commissions, and rebates." },
];

const AgentProgram = () => (
  <>
    <Helmet>
      <title>GangaClub Agent Program – Earn Daily Salary Up to ₹80,000 | Join Now</title>
      <meta name="description" content="Become a GangaClub agent and earn daily salary from ₹100 to ₹80,000. Enjoy 3% deposit-base commissions, member recharge rebates, and team bonuses. GangaClub register as agent today!" />
      <link rel="canonical" href="https://gangaclub.lovable.app/agent-program" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}</script>
    </Helmet>

    {/* Hero */}
    <section className="relative pt-32 pb-20 mesh-bg geo-pattern overflow-hidden">
      <div className="orb orb-gold w-96 h-96 -top-20 -right-20 opacity-25" />
      <div className="orb orb-cyan w-72 h-72 bottom-10 left-10 opacity-20" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="hex-badge mx-auto mb-6">Agent Program</div>
          <h1 className="text-4xl md:text-6xl font-black text-shimmer mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Build Your Empire</h1>
          <p className="text-foreground/60 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            The GangaClub agent program is one of the most rewarding referral systems in India's colour prediction industry. After completing your GangaClub register, you can immediately start building a team and earning daily salaries that scale from ₹100 to ₹80,000 per day. With the 3% deposit-base commission across all agent levels (Tier 1–6), every team deposit puts money directly in your pocket. This isn't just a referral program — it's a full-fledged income opportunity that thousands of GangaClub agents are already leveraging every single day.
          </p>
        </AnimatedSection>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>

    {/* How Agent Program Works */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl">
        <AnimatedSection>
          <div className="glass-card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-foreground mb-5" style={{ fontFamily: "'Space Grotesk'" }}>How the Agent Program Works</h2>
            <div className="text-foreground/60 text-sm leading-[1.9] space-y-4">
              <p>
                The GangaClub agent program transforms regular players into earners by rewarding them for building and maintaining active teams. Once you complete your GangaClub signup, you receive a unique refer code — the same code that your friends and contacts will use during their GangaClub register. Every person who signs up using your code becomes a Tier-1 member of your team, and their referrals become your Tier-2 members, extending up to 6 tiers deep.
              </p>
              <p>
                Your earnings as a GangaClub agent come from three sources: daily salary (based on team size and total deposits), 3% deposit-base commission (earned on every deposit across all 6 tiers), and member recharge rebates (bonuses when Tier-1 members make their first three recharges). These three income streams combined make the GangaClub agent program one of the most lucrative opportunities available.
              </p>
              <p>
                The best part? You don't need to be a big player to start. Even with just 3 active team members and ₹1,000 in combined deposits, you earn ₹100/day in salary. As your team grows, your earnings compound dramatically — top agents with 1,000+ members earn ₹80,000 daily. Join the GangaClub <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">agent support group on Telegram</a> for tips on building your team effectively.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Agent Salary */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-gold w-72 h-72 top-0 right-0 opacity-15" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer mb-3" style={{ fontFamily: "'Space Grotesk'" }}>Agent Salary – Active Base</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">Your daily salary scales with team size and total deposits. Meet the minimum requirements and your salary is dispatched automatically every day.</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <AnimatedSection delay={100}>
            <div className="glass-card overflow-hidden">
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
                <img src="/images/agent-active-base.jpeg" alt="GangaClub Agent Active Base Salary Requirements and Earnings" className="w-full" loading="lazy" />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="glass-card p-6 overflow-auto max-h-[500px]">
              <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk'" }}>Daily Salary Structure</h3>
              <div className="space-y-1">
                <div className="grid grid-cols-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider pb-2 border-b border-border/20">
                  <span>Players</span><span>Min. Deposit ₹</span><span>Salary ₹/Day</span>
                </div>
                {salaryData.map((row, i) => (
                  <div key={row.players} className={`grid grid-cols-3 text-sm py-2.5 border-b border-border/5 rounded px-1 ${i % 2 === 0 ? 'bg-foreground/[0.01]' : ''}`}>
                    <span className="text-foreground/70">{row.players}</span>
                    <span className="text-foreground/70">{row.deposit}</span>
                    <span className="stat-number">{row.salary}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Sikka Team Terms */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer mb-2" style={{ fontFamily: "'Space Grotesk'" }}>Sikka Team Agent Salary</h2>
          <div className="hex-badge mx-auto mt-4">3% Deposit-Base • Tier 1–6</div>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-10">
          <div className="glass-card max-w-xl mx-auto overflow-hidden">
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
              <img src="/images/agent-salary.jpeg" alt="GangaClub Sikka Team Multi-Tier Agent Commission Structure" className="w-full" loading="lazy" />
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={150} className="mb-10 max-w-3xl mx-auto">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: "'Space Grotesk'" }}>Understanding the 6-Tier System</h3>
            <div className="text-foreground/60 text-sm leading-relaxed space-y-3">
              <p>GangaClub's agent commission structure extends across 6 tiers, meaning you earn 3% commission not just from your direct referrals (Tier 1) but also from their referrals (Tier 2), and so on up to Tier 6. This multi-level structure means your earning potential grows exponentially as your team members recruit their own teams.</p>
              <p>For example, if you refer 10 people (Tier 1) and each of them refers 5 people (Tier 2), you have 60 members generating deposits — and you earn 3% on every single deposit across all tiers. This compounding effect is what allows top GangaClub agents to earn substantial daily incomes.</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-foreground mb-6" style={{ fontFamily: "'Space Grotesk'" }}>Terms & Conditions</h3>
            <div className="space-y-4">
              {terms.map((term, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold" style={{ background: "hsl(38 100% 55% / 0.1)", color: "hsl(38 100% 55%)" }}>
                    {i + 1}
                  </div>
                  <p className="text-foreground/60 text-sm leading-relaxed">{term}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Member Recharge Rebate */}
    <section className="py-24 relative mesh-bg">
      <div className="orb orb-pink w-72 h-72 top-10 left-10 opacity-15" />
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer mb-3" style={{ fontFamily: "'Space Grotesk'" }}>Member Recharge Rebate</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm">Earn additional rebates when your Tier-1 members make their first three recharges. This is on top of your daily salary and deposit-base commission — a true triple-income system.</p>
        </AnimatedSection>

        <AnimatedSection delay={100} className="mb-14">
          <div className="glass-card max-w-lg mx-auto overflow-hidden">
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
              <img src="/images/recharge-rebate.jpeg" alt="GangaClub Agent Member Recharge Rebate Bonus Tiers" className="w-full" loading="lazy" />
            </a>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {(["first", "second", "third"] as const).map((tier, idx) => (
            <AnimatedSection key={tier} delay={idx * 120}>
              <div className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-3 h-3 rounded-full" style={{ background: `hsl(${tierAccent[tier]})`, boxShadow: `0 0 12px hsl(${tierAccent[tier]} / 0.5)` }} />
                  <h3 className="text-lg font-bold text-foreground capitalize" style={{ fontFamily: "'Space Grotesk'" }}>{tier} Recharge</h3>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] font-semibold text-muted-foreground uppercase tracking-wider pb-2 border-b border-border/20">
                    <span>Amount ₹</span><span>Agent Bonus</span>
                  </div>
                  {rechargeData[tier].map(row => (
                    <div key={row.range} className="flex justify-between text-sm py-2 border-b border-border/5 hover:bg-foreground/[0.02] transition-colors rounded px-1">
                      <span className="text-foreground/70">{row.range}</span>
                      <span className="font-semibold" style={{ color: `hsl(${tierAccent[tier]})` }}>{row.bonus}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={400} className="mt-10 max-w-4xl mx-auto">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-foreground mb-4" style={{ fontFamily: "'Space Grotesk'" }}>Important Notes</h3>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li className="flex gap-2"><span className="text-primary">•</span>Rebate is limited to the first three recharges per Tier-1 member.</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Both agents and members must link valid bank information. Duplicate IPs, phone numbers, or emails are invalid.</li>
              <li className="flex gap-2"><span className="text-primary">•</span>Members must meet 2X betting requirement — malicious arbitrage results in bonus denial.</li>
              <li className="flex gap-2"><span className="text-primary">•</span>All members need to add a bank card. This agent bonus has 1x turnover requirement.</li>
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-24 relative">
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <AnimatedSection className="text-center mb-14">
          <div className="hex-badge mx-auto mb-4">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold text-shimmer" style={{ fontFamily: "'Space Grotesk'" }}>Agent Program FAQs</h2>
          <p className="text-muted-foreground mt-3 text-sm">Everything you need to know about earning as a GangaClub agent.</p>
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
    <section className="py-20 relative mesh-bg geo-pattern">
      <div className="orb orb-gold w-80 h-80 top-0 left-1/3 opacity-20" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedSection>
          <div className="glass-card max-w-2xl mx-auto p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-shimmer mb-4" style={{ fontFamily: "'Space Grotesk'" }}>Ready to Earn?</h2>
            <p className="text-foreground/60 mb-6 text-sm leading-relaxed max-w-md mx-auto">Complete your GangaClub signup with refer code <strong className="text-primary">3733139807</strong>, build your team, and start earning daily salary. Join thousands of successful agents who are already earning on GangaClub. Visit our <Link to="/bonuses" className="text-primary hover:underline">Bonuses page</Link> to see the full reward structure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero py-3 px-8">Become an Agent</a>
              <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost py-3 px-8">📱 Agent Support</a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default AgentProgram;
