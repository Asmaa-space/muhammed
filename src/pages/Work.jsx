import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { copy, disciplines, projects } from "../data/content";
import { localizedPath } from "../components/Layout";
import Reveal from "../components/Reveal";

export default function Work({lang}) {
  const t = copy[lang], rtl = lang === "ar";
  return <div className="page">
    <section className="page-hero section-shell">
      <p className="eyebrow">{t.work.eyebrow}</p><h1>{t.work.title}</h1><p className="page-lead">{t.work.intro}</p>
    </section>
    <section className="section-shell section-block">
      <Reveal className="section-heading"><div><p className="eyebrow">01 — {rtl ? "المجالات" : "DISCIPLINES"}</p><h2>{rtl ? "أبواب أستكشفها" : "Doors I explore."}</h2></div></Reveal>
      <div className="discipline-list">
        {disciplines.map(d => <article className="discipline-row" key={d.id}>
          <span>{d.number}</span><div><h3>{rtl ? d.titleAr : d.title}</h3><p>{rtl ? d.descriptionAr : d.description}</p></div><span className="discipline-mark">{d.symbol}</span>
        </article>)}
      </div>
    </section>
    <section className="section-shell section-block">
      <Reveal className="section-heading"><div><p className="eyebrow">02 — {rtl ? "المشاريع" : "PROJECTS"}</p><h2>{rtl ? "من الفكرة إلى التجربة." : "From idea to experience."}</h2></div></Reveal>
      <div className="work-grid">
        {projects.map(p => <Link key={p.slug} to={localizedPath(lang, `/work/${p.slug}`)} className="work-card">
          <div className={`work-art art-${p.number}`}><span>{p.number}</span><span className="art-cross">✳</span><span className="art-caption">{p.category}</span></div>
          <div className="work-card-info"><div><h3>{rtl ? p.titleAr : p.title}</h3><p>{rtl ? p.summaryAr : p.summary}</p></div><ArrowUpRight/></div>
          <span className="work-status">{rtl ? p.statusAr : p.status}</span>
        </Link>)}
      </div>
    </section>
  </div>;
}
