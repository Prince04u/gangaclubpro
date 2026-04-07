import { Link } from "react-router-dom";

const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";
const TELEGRAM_LINK = "https://t.me/gangaclubofficiaal";

const Footer = () => (
  <footer className="relative mesh-bg pt-20 pb-10 geo-pattern">
    <div className="orb orb-gold w-64 h-64 -top-20 -left-20 opacity-40" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer">
              <img src="/images/ganga-club-logo.jpeg" alt="GangaClub Footer Logo" className="w-11 h-11 rounded-xl" />
            </a>
            <span className="text-shimmer font-bold text-xl" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>GangaClub</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">
            India's premier colour prediction platform. Trusted by thousands for fair games, instant payouts, and generous rewards.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Explore</h4>
          <div className="flex flex-col gap-3">
            {[
              { to: "/", label: "Home" },
              { to: "/bonuses", label: "Bonuses & Rewards" },
              { to: "/agent-program", label: "Agent Program" },
              { to: "/how-to-play", label: "How to Play" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
            ].map(l => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">{l.label}</Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Quick Access</h4>
          <div className="flex flex-col gap-3">
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">GangaClub Register</a>
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">GangaClub Login</a>
            <Link to="/bonuses" className="text-sm text-muted-foreground hover:text-primary transition-colors">GangaClub Giftcode</Link>
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">GangaClub Signup</a>
            <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-sm uppercase tracking-wider text-primary mb-5" style={{ fontFamily: "'Space Grotesk'" }}>Community</h4>
          <a href={TELEGRAM_LINK} target="_blank" rel="noopener noreferrer" className="glass-card p-4 flex items-center gap-3 group mb-4 block">
            <span className="text-2xl">📱</span>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Telegram Group</p>
              <p className="text-xs text-muted-foreground">Daily predictions & giftcodes</p>
            </div>
          </a>
          <div className="glass-card p-4">
            <p className="text-xs text-muted-foreground mb-1">Refer Code</p>
            <p className="text-primary font-bold text-xl" style={{ fontFamily: "'Space Grotesk'" }}>3733139807</p>
          </div>
        </div>
      </div>

      <div className="line-glow mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} GangaClub. All rights reserved. Play responsibly. Must be 18+.
      </p>
    </div>
  </footer>
);

export default Footer;
