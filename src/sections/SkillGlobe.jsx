import { useEffect, useRef, useState } from "react";
import { portfolio } from "../data/portfolioData";
import { SiFlutter, SiJavascript, SiSpringboot, SiMysql, SiHtml5, SiGit, SiGithub, SiPostman, SiVercel } from "react-icons/si";
import { FaJava, FaReact, FaCss3Alt, FaHandPointer } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
const XdIcon = (props) => <span {...props}>Xd</span>;
const categories = {
 mobile: { label: "Mobile", color: "#38bdf8" },
 lang: { label: "Programming", color: "#eab308" },
 backend: { label: "Backend", color: "#22c55e" },
 frontend: { label: "Frontend", color: "#a78bfa" },
 tools: { label: "Tools & Design", color: "#f472b6" },
};
const visuals = {
 Flutter: [SiFlutter, "#42a5f5", "mobile"],
 Java: [FaJava, "#f89820", "lang"],
 JavaScript: [SiJavascript, "#d4b900", "lang"],
 "React.js": [FaReact, "#00bcd4", "frontend"],
 "Spring Boot": [SiSpringboot, "#6db33f", "backend"],
 MySQL: [SiMysql, "#00758f", "backend"],
 HTML: [SiHtml5, "#e34f26", "frontend"],
 CSS: [FaCss3Alt, "#2965f1", "frontend"],
 Git: [SiGit, "#f05032", "tools"],
 GitHub: [SiGithub, "var(--text-primary)", "tools"],
 "VS Code": [VscVscode, "#23a9f2", "tools"],
 Postman: [SiPostman, "#ff6c37", "tools"],
 "Adobe XD": [XdIcon, "#ff26be", "tools"],
 Vercel: [SiVercel, "var(--text-primary)", "tools"],
};
const skills = portfolio.skills.map(({name}) => {
 const [Icon, color, cat] = visuals[name] || [XdIcon, "#8b5cf6", "tools"];
 return {name, Icon, color, cat};
});
const connections = [
 ["Flutter", "Java"], ["Flutter", "Postman"], ["Java", "Spring Boot"],
 ["Spring Boot", "MySQL"], ["Spring Boot", "Postman"],
 ["JavaScript", "React.js"], ["React.js", "HTML"], ["HTML", "CSS"],
 ["React.js", "Vercel"], ["Git", "GitHub"], ["GitHub", "Vercel"],
 ["VS Code", "Git"], ["Adobe XD", "Flutter"], ["Adobe XD", "React.js"],
];
/* ================= World map ================= */
// 180x90 land bitmask (2° cells) generated from Natural Earth 110m land data.
const LAND = "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAfAP8HAAAAAAAAAAAAAAAAAAAAAADo//z//wcAAAAAAAACAAAAAAAAAAAAhvvw//8PAPABAAAAwAMAAAAAAAAAwADkw////wEABAAAAABgAAAAAAAAAADAUT8A/v8PAAAAAAwA/j8AuAEAAAAAcBHtDcD/fwAAAAAwAPz/fwMAABCAAQD5w/wD8P8FAAAcAIL7//9//xOAAP/ff0668QD/HwAA+A8At///////v3/w/////x8++B8AAOD/1//7////////jP////+/+AE/gAcAn9f//////////w/w/////wEs4AEAAHz+////////////gL////8HeAAcAADg5///////////9ADgAf7/f4AnAAAAAH78////////H0QAAAiA//8f8AcAAIBB4////////38ADwAQAOD//5//AQAAHAT/////////A3AAAAAA/v//+T8AAGDz//////////8DAQAAAMD/////AwAAsP//////////LwAAAAAA6P///2IAAAD+//////////8CAAAAAAD///8/CAAA4P//////////JwAAAAAA8P///wYAAAD+/unz/////z8AAAAAAAD///8HAAAA/pgPPP//////MQAAAAAA8P//PwAAAMBD9v7n/////wcBAAAAAAD///8AAAAAPkD7f/7///8hEAAAAAAA4P//DwAAAIDhAv/n////f8YAAAAAAAD8//8AAAAA+AdE//////8jDwAAAAAAgP//AwAAAMD/APD/////PxgAAAAAAADw/x8AAAAA/n/v//////8HAAAAAAAAAPwDAgAAAOD////7////fwAAAAAAAACgHyAAAACA//9/f/7///8DAAAAAAAAAPQBAAAAAPj//+cv+P//PwAAAAAAAAAAHjAAAADA/////g/+//8EAAAAAAAAAOBhCAAAAP7//99/4D//AAAAAAAAAAAAPAMEAADA////+Qf84BcAAAAAAAAAAAA/AAAAAPz//58fgAf+QAAAAAAAAAAAAA8AAADg////ewA4gA8EAAAAAAAAAADAAAAAAPz//38BgAP4QQAAAAAAAAAAAAgPAADA////zwAwgAwQAAAAAAAAAAAA9Q8AAPj///8HAAVIAAAAAAAAAAAAAID/AQAA////fwBAAAAQAAAAAAAAAAAA+P8AAGDh//8DAAA0GAAAAAAAAAAAAID/HwAAAPj/HwAAgMIBAAAAAAAAAAAA/P8BAACA//8AAAAYXgAAAAAAAAAAAMD/fwAAAPz/BwAAAOOBAQAAAAAAAAAA/P8/AACA/z8AAABgbtQBAAAAAAAAAOD//w8AAPD/AwAAAAQIeAAAAAAAAAAA/P//AQAA/z8AAACAA4APAQAAAAAAAID//w8AAPD/AwAAAAARsEAAAAAAAAAA+P9/AAAA/j8AAAAAAAAAAAAAAAAAAAD//wcAAPD/QwAAAACAIwAAAAAAAAAA8P9/AAAA/z8EAAAAAD8GIAAAAAAAAAD8/wMAAPD/cQAAAAD4ZwAAAAAAAAAAgP8/AAAA/w8HAAAAgP8HAAAAAAAAAAD4/wMAAOD/MAAAAAD//wEBAAAAAAAAgP8PAAAA/g8DAAAA+P8fAAAAAAAAAAD4PwAAAOB/EAAAAID//wMAAAAAAAAAgP8DAAAA/AMAAAAA+P9/AAAAAAAAAAD8HwAAAMA/AAAAAID//wcAAAAAAAAAwP8BAAAA+AEAAAAA8P9/AAAAAAAAAAD8DwAAAIAPAAAAAAAP/gMAAAAAAAAAwB8AAAAAAAAAAAAAEIAfAAEAAAAAAAD+AwAAAAAAAAAAAAAA8AEgAAAAAAAA4AcAAAAAAAAAAAAAAAAAAAYAAAAAAABeAAAAAAAAAAAAAAAAwAAwAAAAAAAAwAMAAAAAAAAAAAAAAAAIgAEAAAAAAAAeAAAAAAAAAAAAAAAAAAAMAAAAAAAA4AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAABAAAAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAB4AEDwn/8HAAAAAAAAAAAwAAAAAACA/P/h/////w8AAAAAAAAAwAcAAAD4////z///////PwAAAAAAHALwAACA//////////////8HAADw/y///wMAAP7/////////////HwAA+P///38AAID///////////////8AAPL/////BwAO////////////////DwAA8P////8HEPD//////////////z8AAOD/////////////////////////H/AfwP//////////////////////////////////////////////////////////////////////////////////////";
function buildLandDots() {
  const bin = atob(LAND);
  const isLand = (lat, lon) => {
    const i = Math.min(179, Math.max(0, Math.floor((lon + 180) / 2)));
    const j = Math.min(89, Math.max(0, Math.floor((90 - lat) / 2)));
    const k = j * 180 + i;
    return (bin.charCodeAt(k >> 3) >> (k & 7)) & 1;
  };
  const out = [];
  const step = 1.6;
  for (let lat = -58; lat <= 82; lat += step) {
    const phi = (lat * Math.PI) / 180;
    const count = Math.round((360 / step) * Math.cos(phi));
    for (let k = 0; k < count; k++) {
      const lon = -180 + (k / count) * 360;
      if (!isLand(lat, lon)) continue;
      const th = (lon * Math.PI) / 180;
      out.push([Math.cos(phi) * Math.sin(th), -Math.sin(phi), Math.cos(phi) * Math.cos(th)]);
    }
  }
  return out;
}
/* ================= Maths ================= */
const rotate = ([x, y, z], ax, ay) => {
  const x1 = x * Math.cos(ay) + z * Math.sin(ay);
  const z1 = -x * Math.sin(ay) + z * Math.cos(ay);
  const y2 = y * Math.cos(ax) - z1 * Math.sin(ax);
  const z2 = y * Math.sin(ax) + z1 * Math.cos(ax);
  return [x1, y2, z2];
};
const norm = (v) => { const l = Math.hypot(...v); return v.map((x) => x / l); };
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const slerp = (a, b, t) => {
  const d = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const th = Math.acos(d);
  if (th < 1e-4) return a;
  const s1 = Math.sin((1 - t) * th) / Math.sin(th), s2 = Math.sin(t * th) / Math.sin(th);
  return [a[0] * s1 + b[0] * s2, a[1] * s1 + b[1] * s2, a[2] * s1 + b[2] * s2];
};
/* canvas colours for each site theme */
const palettes = {
  dark: {
    atmo: "139,92,246", atmoAlpha: 0.45,
    body: ["#38235d", "#22143e", "#100c20"],
    land: "180,155,255", landBase: 0.18,
    rim: "165,130,250", rimAlpha: 0.35,
  },
  light: {
    atmo: "124,58,237", atmoAlpha: 0.28,
    body: ["#ffffff", "#eee7ff", "#c4b5ed"],
    land: "115,72,190", landBase: 0.22,
    rim: "124,58,237", rimAlpha: 0.3,
  },
};
const rgba = (hex, a) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
};
/* Skills of one category sit together; categories spread over the globe */
function layout() {
  const keys = Object.keys(categories);
  const centers = [
    [-0.55, -0.35], [0.9, -0.2], [2.2, 0.25], [-1.9, 0.3], [3.4, -0.45],
  ]; // [longitude, latitude] in radians
  const pts = new Array(skills.length);
  const angles = {};
  keys.forEach((key, ci) => {
    const [lon, lat] = centers[ci % centers.length];
    const cen = [Math.cos(lat) * Math.sin(lon), -Math.sin(lat), Math.cos(lat) * Math.cos(lon)];
    const u = norm(cross([0, 1, 0], cen));
    const v = cross(cen, u);
    const ids = skills.map((s, i) => (s.cat === key ? i : -1)).filter((i) => i >= 0);
    ids.forEach((id, k) => {
      const t = (k / ids.length) * Math.PI * 2 + 0.6;
      const r = 0.5;
      pts[id] = norm(cen.map((c, d) => c + (u[d] * Math.cos(t) + v[d] * Math.sin(t)) * r));
    });
    // rotation that brings this cluster to the front
    const ay = Math.atan2(-cen[0], cen[2]);
    const z1 = -cen[0] * Math.sin(ay) + cen[2] * Math.cos(ay);
    angles[key] = { ay, ax: Math.atan2(cen[1], z1) };
  });
  return { pts, angles };
}
const indexOf = Object.fromEntries(skills.map((s, i) => [s.name, i]));
const links = connections
  .filter(([a, b]) => indexOf[a] !== undefined && indexOf[b] !== undefined)
  .map(([a, b]) => [indexOf[a], indexOf[b]]);
/* ================= Component ================= */
export default function SkillGlobe() {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);
  const chipRefs = useRef([]);
  const live = useRef({ filter: null, active: null });
  const motion = useRef({ ax: -0.3, ay: 0.5, vx: 0, vy: 0.0022, drag: null });
  const [paused, setPaused] = useState(false);
  const [filter, setFilter] = useState(null);
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const active = hovered ?? selected;
  const setActive = (value) => {
    live.current.active = value;
    setSelected(value);
  };
  const hoverSkill = (value) => {
    live.current.hovered = value;
    live.current.active = value ?? live.current.selected;
    setHovered(value);
  };
  live.current.paused = paused;
  live.current.filter = filter;
  live.current.active = active;
  live.current.selected = selected;
  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let inView = true;
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; });
    observer.observe(stage);
    let previous = 0;
    const land = buildLandDots();
    const { pts, angles } = layout();
    const m = motion.current;
    let raf;
    const draw = (now) => {
      if (!inView || document.hidden) { previous = now; raf = requestAnimationFrame(draw); return; }
      const reduce = reduceQuery.matches;
      const dt = Math.min(2, (now - (previous || now)) / 16.667);
      previous = now;
      const time = now / 1000;
      const size = stage.clientWidth;
      if (!size) { raf = requestAnimationFrame(draw); return; }
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      if (canvas.width !== Math.round(size * dpr)) {
        canvas.width = Math.round(size * dpr);
        canvas.height = Math.round(size * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, size, size);
      const { filter: f, active: act } = live.current;
      const pal = palettes[document.documentElement.dataset.theme === "dark" ? "dark" : "light"];
      /* ---- motion ---- */
      if (f && !m.drag && live.current.hovered == null) {
        const t = angles[f];
        const d = Math.atan2(Math.sin(t.ay - m.ay), Math.cos(t.ay - m.ay));
        m.ay += d * (reduce ? 1 : 0.07);
        m.ax += (Math.max(-0.8, Math.min(0.8, t.ax)) - m.ax) * (reduce ? 1 : 0.07);
      } else if (!m.drag && !reduce && !live.current.paused && act === null) {
        if (act === null && !reduce) m.ay += m.vy * dt;
        m.ax += m.vx;
        m.vx *= 0.93;
        m.vy += (0.0022 - m.vy) * 0.02;
        m.ax += (-0.3 - m.ax) * 0.01; // settle back to a gentle tilt
      }
      m.ax = Math.max(-0.9, Math.min(0.9, m.ax));
      const c = size / 2;
      const R = size * (size < 450 ? 0.38 : 0.34);
      /* ---- atmosphere ---- */
      const atmo = ctx.createRadialGradient(c, c, R * 0.96, c, c, R * 1.28);
      atmo.addColorStop(0, `rgba(${pal.atmo},${pal.atmoAlpha})`);
      atmo.addColorStop(0.25, `rgba(${pal.atmo},${pal.atmoAlpha * 0.36})`);
      atmo.addColorStop(1, `rgba(${pal.atmo},0)`);
      ctx.fillStyle = atmo;
      ctx.beginPath(); ctx.arc(c, c, R * 1.28, 0, Math.PI * 2); ctx.fill();
      /* ---- sphere ---- */
      const body = ctx.createRadialGradient(c - R * 0.35, c - R * 0.4, 0, c, c, R);
      body.addColorStop(0, pal.body[0]);
      body.addColorStop(0.55, pal.body[1]);
      body.addColorStop(1, pal.body[2]);
      ctx.fillStyle = body;
      ctx.beginPath(); ctx.arc(c, c, R, 0, Math.PI * 2); ctx.fill();
      /* ---- continents ---- */
      for (let i = 0; i < land.length; i++) {
        const [x, y, z] = rotate(land[i], m.ax, m.ay);
        if (z <= 0) continue;
        const light = Math.max(0, (-x * 0.35 - y * 0.4 + z * 0.85));
        ctx.fillStyle = `rgba(${pal.land},${pal.landBase + z * 0.45 + light * 0.3})`;
        const r = 0.55 + z * 0.75;
        ctx.fillRect(c + x * R - r, c + y * R - r, r * 2, r * 2);
      }
      /* ---- rim light ---- */
      const rim = ctx.createRadialGradient(c, c, R * 0.86, c, c, R);
      rim.addColorStop(0, `rgba(${pal.rim},0)`);
      rim.addColorStop(1, `rgba(${pal.rim},${pal.rimAlpha})`);
      ctx.fillStyle = rim;
      ctx.beginPath(); ctx.arc(c, c, R, 0, Math.PI * 2); ctx.fill();
      const rp = pts.map((p) => rotate(p, m.ax, m.ay));
      const catOf = (i) => skills[i].cat;
      /* ---- arcs ---- */
      links.forEach(([a, b], li) => {
        const on = act !== null ? a === act || b === act : !f || catOf(a) === f || catOf(b) === f;
        const ang = Math.acos(Math.max(-1, Math.min(1, pts[a][0] * pts[b][0] + pts[a][1] * pts[b][1] + pts[a][2] * pts[b][2])));
        const height = Math.min(0.3, 0.08 + ang * 0.2);
        const N = 40;
        const seg = [];
        for (let i = 0; i <= N; i++) {
          const t = i / N;
          const q = slerp(rp[a], rp[b], t);
          const h = 1 + Math.sin(t * Math.PI) * height;
          seg.push([c + q[0] * h * R, c + q[1] * h * R, q[2], h]);
        }
        const ca = categories[catOf(a)].color, cb = categories[catOf(b)].color;
        const visible = (p) => p[2] > -0.02;
        const base = on ? (act !== null ? 0.9 : 0.55) : 0.07;
        ctx.lineWidth = on && act !== null ? 2 : 1.3;
        for (let i = 1; i <= N; i++) {
          const p = seg[i], q = seg[i - 1];
          if (!visible(p) || !visible(q)) continue;
          const fade = Math.min(1, (p[2] + 0.35) * 1.5);
          ctx.strokeStyle = rgba(i < N / 2 ? ca : cb, base * Math.max(0, fade));
          ctx.beginPath(); ctx.moveTo(q[0], q[1]); ctx.lineTo(p[0], p[1]); ctx.stroke();
        }
        // travelling light
        if (on && !reduce && !live.current.paused) {
          const k = Math.floor(((time * 0.45 + li * 0.173) % 1) * N);
          const p = seg[k];
          if (visible(p) && p[2] > -0.2) {
            const g = ctx.createRadialGradient(p[0], p[1], 0, p[0], p[1], 7);
            g.addColorStop(0, "rgba(255,255,255,0.95)");
            g.addColorStop(0.3, rgba(k < N / 2 ? ca : cb, 0.8));
            g.addColorStop(1, rgba(ca, 0));
            ctx.fillStyle = g;
            ctx.beginPath(); ctx.arc(p[0], p[1], 7, 0, Math.PI * 2); ctx.fill();
          }
        }
      });
      /* ---- pins + chips ---- */
      rp.forEach(([x, y, z], i) => {
        const el = chipRefs.current[i];
        const col = categories[catOf(i)].color;
        const X = c + x * R, Y = c + y * R;
        const dimmed = (f && catOf(i) !== f) || (act !== null && act !== i &&
          !links.some(([a, b]) => (a === act && b === i) || (b === act && a === i)));
        const vis = Math.max(0, Math.min(1, (z - 0.02) / 0.22));
        if (z > 0) {
          // pulsing ring
          const pulse = (reduce || live.current.paused) ? 0.5 : (time * 0.8 + i * 0.37) % 1;
          ctx.strokeStyle = rgba(col, (1 - pulse) * 0.7 * vis * (dimmed ? 0.3 : 1));
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.ellipse(X, Y, 3 + pulse * 11, (3 + pulse * 11) * Math.max(0.3, z), Math.atan2(y, x) + Math.PI / 2, 0, Math.PI * 2);
          ctx.stroke();
          // pin dot
          ctx.fillStyle = rgba(col, vis * (dimmed ? 0.35 : 1));
          ctx.shadowColor = col; ctx.shadowBlur = dimmed ? 0 : 8;
          ctx.beginPath(); ctx.arc(X, Y, 3, 0, Math.PI * 2); ctx.fill();
          ctx.shadowBlur = 0;
          // stem
          ctx.strokeStyle = rgba(col, 0.6 * vis * (dimmed ? 0.3 : 1));
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(X, Y - 3); ctx.lineTo(X, Y - 16); ctx.stroke();
        }
        if (!el) return;
        const scale = 0.82 + z * 0.18;
        el.style.transform = `translate(${X}px, ${Y - 16}px) translate(-50%, -100%) scale(${scale})`;
        el.style.opacity = (vis * (dimmed ? 0.14 : 1)).toFixed(3);
        el.style.zIndex = String(Math.round(z * 100) + 100);
        el.style.pointerEvents = vis > 0.4 ? "auto" : "none";
        el.tabIndex = vis > 0.4 ? 0 : -1;
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    /* ---- drag to spin ---- */
    const down = (e) => {
      if (e.button !== 0 || e.target.closest("button")) return;
      live.current.hovered = null; live.current.active = null; live.current.selected = null;
      setHovered(null); setSelected(null);
      m.drag = { x: e.clientX, y: e.clientY };
      stage.setPointerCapture(e.pointerId);
      if (live.current.filter) { live.current.filter = null; setFilter(null); }
    };
    const move = (e) => {
      if (!m.drag) return;
      const dx = e.clientX - m.drag.x, dy = e.clientY - m.drag.y;
      m.drag = { x: e.clientX, y: e.clientY };
      m.ay += dx * 0.007; m.ax -= dy * 0.007;
      m.vy = Math.max(-0.015, Math.min(0.015, dx * 0.0012));
      m.vx = Math.max(-0.015, Math.min(0.015, -dy * 0.0012));
    };
    const up = () => { m.drag = null; };
    stage.addEventListener("pointerdown", down);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerup", up);
    stage.addEventListener("pointercancel", up);
    stage.addEventListener("lostpointercapture", up);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      stage.removeEventListener("pointerdown", down);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerup", up);
      stage.removeEventListener("pointercancel", up);
      stage.removeEventListener("lostpointercapture", up);
    };
  }, []);
  const activeSkill = active !== null ? skills[active] : null;
  const related = active !== null
    ? links.filter(([a, b]) => a === active || b === active).map(([a, b]) => skills[a === active ? b : a].name)
    : [];
  const count = (key) => skills.filter((s) => s.cat === key).length;
  return (
    <div className="gs">
      <style>{`
        #skills .gs-stage { isolation: isolate; }
        #skills .gs-chip {
          transition: none !important;
          animation: none !important;
          backface-visibility: hidden;
        }
        #skills .gs-chip > * { pointer-events: none; }
        #skills .gs-info { min-height: 140px; align-items: flex-start; }
        @media (max-width: 600px) { #skills .gs-info { min-height: 190px; } }
      `}</style>
      <div className="gs-filters" role="group" aria-label="Focus the globe on a category">
        <button type="button" aria-pressed={filter === null} onClick={() => setFilter(null)}>
          All <span>{skills.length}</span>
        </button>
        {Object.entries(categories).map(([key, c]) => (
          <button key={key} type="button" aria-pressed={filter === key} style={{ "--dot": c.color }}
                  onClick={() => setFilter(filter === key ? null : key)}>
            <i /> {c.label} <span>{count(key)}</span>
          </button>
        ))}
      </div>
      <div className="gs-controls">
        <button type="button" aria-pressed={paused} onClick={() => { const next = !paused; live.current.paused = next; setPaused(next); if (!next) { hoverSkill(null); setActive(null); } }}>{paused ? "Resume rotation" : "Pause rotation"}</button>
        <label>Explore a skill
          <select value={selected ?? ""} onChange={(event) => {
            const i = event.target.value === "" ? null : Number(event.target.value);
            setActive(i); setPaused(true); setFilter(i === null ? null : skills[i].cat);
          }}>
            <option value="">Choose a skill</option>
            {skills.map((skill, i) => <option key={skill.name} value={i}>{skill.name}</option>)}
          </select>
        </label>
      </div>
      <div className="gs-stage" ref={stageRef} tabIndex={0}
        onPointerLeave={() => hoverSkill(null)}
        role="group" aria-label="Interactive skill globe. Use left and right arrow keys to rotate."
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
          event.preventDefault(); setFilter(null); setPaused(true);
          const m = motion.current;
          if (event.key === "ArrowLeft") m.ay -= 0.2;
          if (event.key === "ArrowRight") m.ay += 0.2;
          if (event.key === "ArrowUp") m.ax -= 0.15;
          if (event.key === "ArrowDown") m.ax += 0.15;
        }}>
        <canvas ref={canvasRef} className="gs-canvas" aria-hidden="true" />
        {skills.map((sk, i) => (
          <button
            key={sk.name}
            ref={(el) => { chipRefs.current[i] = el; }}
            type="button"
            className={`gs-chip ${active === i ? "on" : ""}`}
            style={{ "--cat": categories[sk.cat].color }}
            onPointerEnter={(event) => { if (event.pointerType === "mouse" && !motion.current.drag) hoverSkill(i); }}
            onPointerLeave={() => hoverSkill(null)}
            onFocus={() => hoverSkill(i)}
            onBlur={() => hoverSkill(null)}
            onClick={() => { setActive(i); setPaused(true); }}
            aria-label={`${sk.name}, ${categories[sk.cat].label}`}
          >
            <span className="gs-chip-icon"><sk.Icon style={{ color: sk.color }} /></span>
            <span className="gs-chip-name">{sk.name}</span>
          </button>
        ))}
        <p className="gs-hint"><FaHandPointer aria-hidden="true" /> Drag horizontally to spin · Arrow keys to rotate</p>
      </div>
      <div className="gs-info" aria-live="polite">
        {activeSkill ? (
          <>
            <span className="gs-info-icon" style={{ "--cat": categories[activeSkill.cat].color }}>
              <activeSkill.Icon style={{ color: activeSkill.color }} />
            </span>
            <div>
              <strong>{activeSkill.name}</strong>
              <small style={{ color: categories[activeSkill.cat].color }}>{categories[activeSkill.cat].label}</small>
              <p>{related.length ? `Works with ${related.join(", ")}` : "Part of my development toolkit."}</p>
            </div>
          </>
        ) : (
          <div>
            <strong>{filter ? `${categories[filter].label} skills` : "My skills, connected"}</strong>
            <p>{filter
              ? skills.filter((s) => s.cat === filter).map((s) => s.name).join(", ")
              : "Hover or tap a skill to see what it works with. Pick a category to bring it to the front."}</p>
          </div>
        )}
      </div>
    </div>
  );
}
