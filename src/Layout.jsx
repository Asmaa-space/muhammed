import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowUpRight, Menu, X, Languages } from "lucide-react";
import { copy, profile } from "../data/content";

export function getLang(pathname) {
  return pathname.startsWith("/ar") ? "ar" : "en";
}
export function localizedPath(lang, path = "") {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${clean === "/" ? "" : clean}`;
}

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = getLang(location.pathname);
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const isRTL = lang === "ar";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.body.classList.toggle("rtl", isRTL);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [lang, location.pathname, isRTL]);

  const switchLanguage = () => {
    const target = location.pathname.replace(/^\/(en|ar)/, "") || "/";
    navigate(localizedPath(lang === "en" ? "ar" : "en", target));
  };

  const navItems = [
    ["home", ""], ["work", "/work"], ["story", "/story"], ["about", "/about"], ["contact", "/contact"]
  ];

  return (
    <>
      <header className="site-header">
        <Link to={localizedPath(lang)} className="brand" aria-label={profile.name}>
          <span className="brand-mark">M<span>.</span></span>
          <span className="brand-name">{profile.name}</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([key, path]) => (
            <NavLink key={key} end={!path} to={localizedPath(lang, path)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav[key]}</NavLink>
          ))}
          <Link className="nav-card-link" to={localizedPath(lang, "/card")}>{t.nav.card}<ArrowUpRight size={14}/></Link>
        </nav>
        <div className="header-actions">
          <button className="language-button" onClick={switchLanguage} aria-label="Switch language"><Languages size={16}/><span>{lang === "en" ? "عربي" : "EN"}</span></button>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
        </div>
      </header>
      {open && <div className="mobile-menu">
        {navItems.map(([key, path]) => <Link key={key} to={localizedPath(lang, path)}>{t.nav[key]}<ArrowUpRight size={17}/></Link>)}
        <Link to={localizedPath(lang, "/card")}>{t.nav.card}<ArrowUpRight size={17}/></Link>
        <button onClick={switchLanguage}>{lang === "en" ? "التبديل إلى العربية" : "Switch to English"}</button>
      </div>}
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-top">
          <Link to={localizedPath(lang)} className="footer-brand">M<span>.</span></Link>
          <p>{t.footer}</p>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><span> {t.home.eyebrow}</span></div>
      </footer>
    </>
  );
}
