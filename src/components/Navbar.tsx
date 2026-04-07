import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const REGISTER_LINK = "https://www.ganga10.com/#/pages/login/register?invitationCode=3733139807";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Bonuses", path: "/bonuses" },
  { label: "Agent Program", path: "/agent-program" },
  { label: "How to Play", path: "/how-to-play" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-3 rounded-2xl bg-background/40 backdrop-blur-xl border border-border/20 shadow-lg shadow-background/50">
        <div className="flex items-center justify-between py-3 px-5">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/images/ganga-club-logo.jpeg" alt="GangaClub Logo" className="w-10 h-10 rounded-xl group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl" style={{ boxShadow: "0 0 15px hsl(38 100% 55% / 0.3)" }} />
            </div>
            <span className="text-shimmer font-bold text-lg hidden sm:block" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>GangaClub</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  pathname === item.path
                    ? "text-primary bg-primary/10"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
                {pathname === item.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero text-xs py-2 px-5 hidden sm:inline-block">
              Join Now
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground/70 hover:text-foreground p-2 rounded-xl hover:bg-foreground/5 transition-all">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-2 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/20 animate-fade-in-up overflow-hidden">
          <div className="py-3 px-5 flex flex-col gap-1">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                  pathname === item.path ? "text-primary bg-primary/10" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a href={REGISTER_LINK} target="_blank" rel="noopener noreferrer" className="btn-hero text-center text-xs py-3 mt-2">
              Join Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
