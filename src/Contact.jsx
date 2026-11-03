import { useState } from "react";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { copy, profile } from "../data/content";

export default function Contact({lang}) {
  const t = copy[lang], rtl = lang === "ar";
  const [form,setForm] = useState({name:"",email:"",message:""});
  const [error,setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError(rtl ? "يرجى تعبئة جميع الحقول." : "Please complete all fields.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    if (!profile.email) {
      setError(rtl ? "لم يُضف البريد الإلكتروني بعد. يمكنك التواصل عبر LinkedIn." : "The email address has not been configured yet. Please use LinkedIn.");
      return;
    }
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setError("");
  };
  return <div className="page">
    <section className="page-hero section-shell contact-hero">
      <p className="eyebrow">{t.contact.eyebrow}</p><h1>{t.contact.title}</h1><p className="page-lead">{t.contact.intro}</p>
    </section>
    <section className="section-shell contact-layout">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>{t.contact.name}<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder={rtl?"الاسم":"Name"} /></label>
        <label>{t.contact.email}<input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="name@example.com"/></label>
        <label>{t.contact.message}<textarea rows="5" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder={rtl?"اكتب رسالتك هنا...":"Write your message..."}/></label>
        {error && <p className="form-error" role="alert">{error}</p>}
        <button className="button button-dark" type="submit">{t.contact.send}<ArrowUpRight size={17}/></button>
        <p className="form-note">{t.contact.privacy}</p>
      </form>
      <aside className="contact-aside">
        <p className="eyebrow">{rtl ? "روابط مباشرة" : "DIRECT LINKS"}</p>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><span><Linkedin/>LinkedIn</span><ArrowUpRight/></a>
        {profile.email && <a href={`mailto:${profile.email}`}><span><Mail/>Email</span><ArrowUpRight/></a>}
        <div className="contact-note"><span>LET’S MAKE SOMETHING MEANINGFUL.</span><div className="note-mark">M<span>.</span></div></div>
      </aside>
    </section>
  </div>;
}
