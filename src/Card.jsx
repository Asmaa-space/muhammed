import { useRef, useState } from "react";
import { ArrowUpRight, RotateCw } from "lucide-react";
import { copy, profile, skills } from "../data/content";

export default function Card({lang}) {
  const [flipped,setFlipped] = useState(false);
  const cardRef = useRef(null);
  const rtl = lang === "ar", t = copy[lang];
  const handleMove = (e) => {
    if (!cardRef.current || window.matchMedia("(pointer: coarse)").matches) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    cardRef.current.style.setProperty("--rx", `${(0.5-y)*10}deg`);
    cardRef.current.style.setProperty("--ry", `${(x-0.5)*12}deg`);
    cardRef.current.style.setProperty("--mx", `${x*100}%`);
    cardRef.current.style.setProperty("--my", `${y*100}%`);
  };
  const resetMove = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rx","0deg");
    cardRef.current.style.setProperty("--ry","0deg");
  };
  return <div className="page">
    <section className="page-hero section-shell">
      <p className="eyebrow">{t.card.eyebrow}</p><h1>{t.card.title}</h1>
      <p className="page-lead">{rtl ? "بطاقة رقمية تختصر بعض الاهتمامات المهنية وطريقة العمل." : "A small digital introduction to professional interests and working principles."}</p>
    </section>
    <section className="section-shell card-stage">
      <button className="ability-card-wrap" onClick={()=>setFlipped(!flipped)} onMouseMove={handleMove} onMouseLeave={resetMove} ref={cardRef} aria-label={t.card.flip}>
        <div className={`ability-card ${flipped?"flipped":""}`}>
          <div className="ability-face ability-front">
            <div className="card-meta"><span>PERSONAL PROFILE / 2026</span><span>01 — 02</span></div>
            <div className="card-monogram">M<span>.</span></div>
            <div className="card-person"><h2>{rtl ? profile.nameAr : profile.name}</h2><p>{rtl ? "طالب هندسة برمجيات" : profile.role}</p></div>
            <div className="card-bottom"><span>{rtl ? "هندسة البرمجيات" : t.card.front}</span><span>UQU · QIMAM ’26</span></div>
          </div>
          <div className="ability-face ability-back">
            <div className="card-meta"><span>PROFILE / APPROACH</span><span>02 — 02</span></div>
            <h3>{t.card.back}</h3>
            <div className="card-skills">{skills.slice(0,4).map(s=><span key={s.en}>{rtl?s.ar:s.en}</span>)}</div>
            <div className="card-lines"><p>{t.card.line1}</p><p>{t.card.line2}</p><p>{t.card.line3}</p></div>
            <div className="card-bottom"><span>{profile.name.toUpperCase()}</span><span>↗</span></div>
          </div>
        </div>
      </button>
      <button className="flip-button" onClick={()=>setFlipped(!flipped)}><RotateCw size={16}/>{t.card.flip}</button>
      <p className="card-hint">{rtl ? "اضغط على البطاقة لقلبها" : "Click the card to turn it over"}</p>
    </section>
  </div>;
}
