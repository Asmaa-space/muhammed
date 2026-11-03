import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { copy, disciplines, profile, projects } from "../data/content";
import { localizedPath } from "../components/Layout";
import Reveal from "../components/Reveal";

export default function Home({lang}) {
  const t = copy[lang];
  const rtl = lang === "ar";
  return <div className="page home-page">
    <section className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot"/>{t.home.eyebrow}</p>
        <h1>{t.home.title}</h1>
        <p className="hero-intro">{t.home.intro}</p>
        <div className="hero-actions">
          <Link className="button button-dark" to={localizedPath(lang, "/work")}>{t.common.explore}<MoveUpRight size={17}/></Link>
          <Link className="text-link" to={localizedPath(lang, "/story")}>{t.common.story}<ArrowUpRight size={16}/></Link>
        </div>
        <div className="hero-footnote"><span className="small-line"/>{t.home.note}</div>
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          <img src={profile.portrait} alt={rtl ? "صورة محمد الشريف" : "Portrait of Muhammad Alsharif"} />
          <span className="portrait-index">01 / PROFILE</span>
        </div>
        <div className="hero-side-note"><span>UQU</span><span>QIMAM ’26</span><span>SAUDI ARABIA</span></div>
      </div>
      <a href="#disciplines" className="scroll-cue"><span>{t.common.available}</span><ArrowDown size={16}/></a>
      <span className="hero-coordinate">21° 25' N / 39° 49' E</span>
    </section>

    <section className="intro-strip">
      <div className="section-shell intro-strip-inner"><span>01 — {rtl ? "التوجه" : "THE APPROACH"}</span><p>{rtl ? "أهتم ببناء حلول واضحة تبدأ بفهم الإنسان والمشكلة وتنتهي بأثر يمكن ملاحظته." : "I’m drawn to work that starts with understanding people and problems, then turns that understanding into something useful."}</p></div>
    </section>

    <section id="disciplines" className="section-shell section-block">
      <Reveal className="section-heading">
        <div><p className="eyebrow">02 — {rtl ? "مجالات الاهتمام" : "AREAS OF INTEREST"}</p><h2>{t.home.disciplines}</h2></div>
        <p className="section-lead">{t.home.disciplinesIntro}</p>
      </Reveal>
      <div className="door-grid">
        {disciplines.map((d) => <Link key={d.id} to={localizedPath(lang, "/work")} className="door-card">
          <div className="door-top"><span>{d.number}</span><span className="door-symbol">{d.symbol}</span></div>
          <div className="door-bottom"><h3>{lang === "ar" ? d.titleAr : d.title}</h3><p>{lang === "ar" ? d.descriptionAr : d.description}</p><span className="door-open">{rtl ? "استكشف المجال" : "Explore discipline"} <ArrowUpRight size={15}/></span></div>
        </Link>)}
      </div>
    </section>

    <section className="section-shell section-block work-preview">
      <Reveal className="section-heading">
        <div><p className="eyebrow">03 — {rtl ? "مختارات" : "SELECTED WORK"}</p><h2>{t.common.selected}</h2></div>
        <p className="section-lead">{t.home.selected}</p>
      </Reveal>
      <div className="project-list">
        {projects.map((p) => <Link key={p.slug} to={localizedPath(lang, `/work/${p.slug}`)} className="project-row">
          <span className="project-number">{p.number}</span><div><h3>{lang === "ar" ? p.titleAr : p.title}</h3><p>{lang === "ar" ? p.categoryAr : p.category}</p></div><ArrowUpRight className="project-arrow"/>
        </Link>)}
      </div>
      <Link to={localizedPath(lang, "/work")} className="underlined-link">{rtl ? "عرض جميع الأعمال" : "View all work"} <ArrowUpRight size={16}/></Link>
    </section>

    <section className="statement-band">
      <div className="section-shell statement-inner"><p className="eyebrow">04 — {rtl ? "الفكرة" : "THE IDEA"}</p><h2>{rtl ? "لا تبدأ الحلول الجيدة بالإجابات، بل بالأسئلة الصحيحة." : "Good solutions don’t begin with answers. They begin with better questions."}</h2><Link to={localizedPath(lang, "/about")} className="circle-link" aria-label="About"><ArrowUpRight/></Link></div>
    </section>
  </div>;
}
