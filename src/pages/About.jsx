import { copy, profile, skills } from "../data/content";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function About({lang}) {
  const t = copy[lang], rtl = lang === "ar";
  return <div className="page">
    <section className="page-hero section-shell">
      <p className="eyebrow">{t.about.eyebrow}</p><h1>{t.about.title}</h1><p className="page-lead">{t.about.intro}</p>
    </section>
    <section className="section-shell about-layout">
      <div className="about-photo"><img src={profile.portrait} alt={rtl ? "محمد الشريف" : "Muhammad Alsharif"}/><span>MUHAMMAD / PROFILE</span></div>
      <div className="about-details">
        <p className="eyebrow">{rtl ? "الاهتمامات المهنية" : "PROFESSIONAL INTERESTS"}</p>
        <h2>{rtl ? "التقنية تصبح أكثر قيمة عندما تخدم حاجة حقيقية." : "Technology becomes more meaningful when it serves a real need."}</h2>
        <p>{rtl ? "أهتم بفهم كيفية بناء المنتجات والأنظمة، وكيف يمكن للفرق أن تعمل بوضوح وتحوّل الأفكار إلى نتائج قابلة للتطوير." : "I’m interested in how products and systems are built, and how teams can work with clarity to turn ideas into outcomes that can be tested, learned from and improved."}</p>
        <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a>
      </div>
    </section>
    <section className="section-shell section-block">
      <Reveal className="section-heading"><div><p className="eyebrow">01 — {rtl ? "مجالات أستكشفها" : "AREAS I EXPLORE"}</p><h2>{rtl ? "مجالات الاهتمام" : "Areas of interest."}</h2></div></Reveal>
      <div className="skills-grid">{skills.map((s,i)=><div className="skill-item" key={s.en}><span>{String(i+1).padStart(2,"0")}</span><h3>{rtl?s.ar:s.en}</h3></div>)}</div>
    </section>
    <section className="section-shell principles-section">
      <p className="eyebrow">02 — {rtl ? "طريقة العمل" : "WORKING PRINCIPLES"}</p><h2>{t.about.approach}</h2>
      <div className="principles-list">{t.about.principles.map((p,i)=><div key={p}><span>0{i+1}</span><p>{p}</p></div>)}</div>
    </section>
  </div>;
}
