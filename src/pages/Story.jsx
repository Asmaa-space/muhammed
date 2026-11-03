import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { copy, timeline } from "../data/content";
import Reveal from "../components/Reveal";

export default function Story({lang}) {
  const [active,setActive] = useState(0);
  const rtl = lang === "ar", t = copy[lang], item = timeline[active];
  const next = () => setActive(v => (v + 1) % timeline.length);
  const prev = () => setActive(v => (v - 1 + timeline.length) % timeline.length);
  return <div className="page">
    <section className="page-hero section-shell">
      <p className="eyebrow">{t.story.eyebrow}</p><h1>{t.story.title}</h1><p className="page-lead">{t.story.intro}</p>
    </section>
    <section className="section-shell timeline-section">
      <div className="timeline-rail">
        {timeline.map((entry,i) => <button key={i} className={`timeline-dot ${active===i?"active":""}`} onClick={()=>setActive(i)} aria-label={`Go to milestone ${i+1}`}><span>{String(i+1).padStart(2,"0")}</span></button>)}
      </div>
      <div className="timeline-display" key={`${active}-${lang}`}>
        <div className="timeline-index"><span>{String(active+1).padStart(2,"0")}</span><span> / {String(timeline.length).padStart(2,"0")}</span></div>
        <p className="eyebrow">{rtl ? item.dateAr : item.date}</p>
        <h2>{rtl ? item.titleAr : item.title}</h2>
        <h3>{rtl ? item.subtitleAr : item.subtitle}</h3>
        <p className="timeline-text">{rtl ? item.textAr : item.text}</p>
        <div className="timeline-controls">
          <button onClick={prev} aria-label={t.common.previous}>{rtl ? <ArrowRight/> : <ArrowLeft/>}</button>
          <button onClick={next} aria-label={t.common.next}>{rtl ? <ArrowLeft/> : <ArrowRight/>}</button>
        </div>
      </div>
      <div className="timeline-side-note"><span>MUHAMMAD ALSHARIF</span><span>{rtl ? "محطات مختارة" : "SELECTED MILESTONES"}</span></div>
    </section>
    <section className="section-shell timeline-bottom"><p>{rtl ? "كل محطة تضيف سؤالًا جديدًا، ومهارة جديدة، وطريقة مختلفة لرؤية ما يمكن بناؤه." : "Every milestone brings a new question, a new skill and another way to see what can be built."}</p></section>
  </div>;
}
