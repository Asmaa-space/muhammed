import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Layout, { getLang } from "./components/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Project from "./pages/Project";
import Story from "./pages/Story";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Card from "./pages/Card";

function LocalizedApp() {
  const location = useLocation();
  const lang = getLang(location.pathname);
  return <Layout>
    <Routes>
      <Route path="/:lang" element={<Home lang={lang}/>}/>
      <Route path="/:lang/work" element={<Work lang={lang}/>}/>
      <Route path="/:lang/work/:slug" element={<Project lang={lang}/>}/>
      <Route path="/:lang/story" element={<Story lang={lang}/>}/>
      <Route path="/:lang/about" element={<About lang={lang}/>}/>
      <Route path="/:lang/contact" element={<Contact lang={lang}/>}/>
      <Route path="/:lang/card" element={<Card lang={lang}/>}/>
      <Route path="*" element={<Navigate to="/en" replace/>}/>
    </Routes>
  </Layout>;
}
export default function App() {
  return <LocalizedApp/>;
}
