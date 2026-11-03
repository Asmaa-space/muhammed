import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { copy, projects } from "../data/content";
import { localizedPath } from "../components/Layout";

export default function Project({lang}) {
  const {slug} = useParams();
  const p = projects.find(x => x.slug === slug);
  const rtl = lang === "ar", t = copy[lang];
  if (!p) return <section className="section-shell page-hero"><h1>Project not found.</h1><Link to={localizedPath(lang, "/work")}>{t.common.back}</Link></section>;
  const title = rtl ? p.titleAr : p.title;
  return <div className="page">
    <section className="project-hero section-shell">
      <Link to={localizedPath(lang, "/work")} className="back-link">{rtl ? <ArrowRight size={16}/> : <ArrowLeft size={16}/>} {t.common.back}</Link>
      <p className="eyebrow">{p.number} — {rtl ? p.categoryAr : p.category}</p>
      <h1>{title}</h1>
      <p className="page-lead">{rtl ? p.summaryAr : p.summary}</p>
      <div className={`project-cover art-${p.number}`}><span>{p.number}</span><span className="art-cross">✳</span><span className="art-caption">SELECTED WORK / {p.number}</span></div>
    </section>
    <section className="section-shell project-content">
      <div className="project-main-copy"><p className="eyebrow">{rtl ? "نظرة عامة" : "OVERVIEW"}</p><h2>{rtl ? "عن المشروع" : "About the project"}</h2><p>{rtl ? p.descriptionAr : p.description}</p></div>
      <aside className="project-facts">
        <div><span>{rtl ? "الدور" : "ROLE"}</span><p>{rtl ? p.roleAr : p.role}</p></div>
        <div><span>{rtl ? "الحالة" : "STATUS"}</span><p>{rtl ? p.statusAr : p.status}</p></div>
        <div><span>{rtl ? "النتيجة" : "OUTCOME"}</span><p>{rtl ? p.outcomeAr : p.outcome}</p></div>
      </aside>
    </section>
    <section className="section-shell project-note"><p>{rtl ? "سيتم استكمال دراسة الحالة عند توفر تفاصيل المشروع والمواد المعتمدة." : "This case study will be expanded when the project details and approved materials are available."}</p></section>
  </div>;
}
