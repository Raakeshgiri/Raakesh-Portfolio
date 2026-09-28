import { bindStyles } from "../../utils/bindStyles";
import styles from "./SkillGlobe.module.css";
import { useEffect, useRef, useState } from "react";
import { portfolio } from "../../data/portfolioData";
import { SiFlutter, SiJavascript, SiSpringboot, SiMysql, SiHtml5, SiGit, SiGithub, SiPostman, SiVercel } from "react-icons/si";
import { FaJava, FaReact, FaCss3Alt, FaHandPointer } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const classes = bindStyles(styles);
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
const HOME_TILT = 0; // Upright: equator aligned with the horizontal center.
const TILT_RETURN_SPEED = 5; // Higher values return to center sooner.

function recenterTilt(m, seconds, reduce) {
  if (reduce) { m.ax = HOME_TILT; m.vx = 0; return; }
  // Exact critically damped spring: smooth settling without oscillation.
  const offset = m.ax - HOME_TILT;
  const coupled = m.vx + TILT_RETURN_SPEED * offset;
  const decay = Math.exp(-TILT_RETURN_SPEED * seconds);
  m.ax = HOME_TILT + (offset + coupled * seconds) * decay;
  m.vx = (m.vx - TILT_RETURN_SPEED * coupled * seconds) * decay;
  if (Math.abs(m.ax - HOME_TILT) < 0.0001 && Math.abs(m.vx) < 0.0001) {
    m.ax = HOME_TILT;
    m.vx = 0;
  }
}

const rotate = ([x, y, z], ax, ay) => {
  const x1 = x * Math.cos(ay) + z * Math.sin(ay);
  const z1 = -x * Math.sin(ay) + z * Math.cos(ay);
  const y2 = y * Math.cos(ax) - z1 * Math.sin(ax);
  const z2 = y * Math.sin(ax) + z1 * Math.cos(ax);
  return [x1, y2, z2];
};
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
/* Evenly distribute every skill over the sphere, independent of category. */
function layout() {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));
  const pts = skills.map((_, i) => {
    const y = 1 - (2 * (i + 0.5)) / skills.length;
    const radius = Math.sqrt(1 - y * y);
    const theta = i * goldenAngle;
    return [Math.cos(theta) * radius, y, Math.sin(theta) * radius];
  });
  const angles = {};
  Object.keys(categories).forEach((key) => {
    const first = skills.findIndex((skill) => skill.cat === key);
    if (first < 0) { angles[key] = { ax: -0.3, ay: 0 }; return; }
    const p = pts[first];
    const ay = Math.atan2(-p[0], p[2]);
    const z = -p[0] * Math.sin(ay) + p[2] * Math.cos(ay);
    angles[key] = { ay, ax: Math.atan2(p[1], z) };
  });
  return { pts, angles };
}

// Separate projected labels while keeping their pins on the globe surface.
function spaceLabels(rp, elements, center, radius, size) {
  const labels = rp.map(([x, y, z], i) => {
    const scale = 0.82 + z * 0.18;
    const width = (elements[i]?.offsetWidth || 90) * scale;
    const height = (elements[i]?.offsetHeight || 30) * scale;
    return { x: center + x * radius, y: center + y * radius - 20 - height / 2,
      width, height, scale, visible: z > 0.02 };
  });
  for (let pass = 0; pass < 16; pass++) {
    for (let i = 0; i < labels.length; i++) {
      const a = labels[i];
      if (!a.visible) continue;
      for (let j = i + 1; j < labels.length; j++) {
        const b = labels[j];
        if (!b.visible) continue;
        const dx = b.x - a.x, dy = b.y - a.y;
        const overlapX = (a.width + b.width) / 2 + 10 - Math.abs(dx);
        const overlapY = (a.height + b.height) / 2 + 10 - Math.abs(dy);
        if (overlapX <= 0 || overlapY <= 0) continue;
        if (overlapX < overlapY) {
          const shift = (overlapX / 2 + 0.5) * (dx >= 0 ? 1 : -1);
          a.x -= shift; b.x += shift;
        } else {
          const shift = (overlapY / 2 + 0.5) * (dy >= 0 ? 1 : -1);
          a.y -= shift; b.y += shift;
        }
      }
    }
    labels.forEach((a) => {
      a.x = Math.max(a.width / 2 + 6, Math.min(size - a.width / 2 - 6, a.x));
      a.y = Math.max(a.height / 2 + 6, Math.min(size - a.height / 2 - 40, a.y));
    });
  }
  return labels;
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
  // Velocities are radians per second, independent of display refresh rate.
  const motion = useRef({ ax: HOME_TILT, ay: 0.5, vx: 0, vy: 0.132,
    direction: 1, hoverReady: true, pointerX: null, pointerY: null, drag: null });
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
  live.current.paused = false;
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
    let previousLabels = [];
    let previousSize = 0;
    const draw = (now) => {
      if (!inView || document.hidden) { previous = now; raf = requestAnimationFrame(draw); return; }
      const reduce = reduceQuery.matches;
      const seconds = Math.min(0.05, Math.max(0, (now - (previous || now)) / 1000));
      const dt = seconds * 60;
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
      } else if (!m.drag && !reduce && live.current.hovered == null) {
        // Integrate exponential friction exactly so 60/120 Hz feel alike.
        // Retain the flick direction even when returning to idle rotation.
        const idle = 0.132 * m.direction;
        const decay = Math.exp(-0.65 * seconds);
        m.ay += idle * seconds + (m.vy - idle) * (1 - decay) / 0.65;
        m.vy = idle + (m.vy - idle) * decay;

      }
      // Release vertical tilt back to center, independently of horizontal spin.
      // A deliberate label hover/focus still pauses the globe.
      if (!m.drag && !f && live.current.hovered == null) {
        recenterTilt(m, seconds, reduce);
      }
      m.ax = Math.max(-0.9, Math.min(0.9, m.ax));
      if (Math.abs(m.ax) >= 0.9) m.vx = 0;
      m.ay = Math.atan2(Math.sin(m.ay), Math.cos(m.ay));
      const c = size / 2;
      const R = size * 0.35;
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
        const base = on && act !== null ? 0.9 : 0.55;
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
      const targets = spaceLabels(rp, chipRefs.current, c, R, size);
      const blend = reduce || m.drag ? 1 : 1 - Math.exp(-seconds / 0.035);
      const labels = targets.map((target, i) => {
        const old = previousLabels[i];
        if (!old || previousSize !== size || !old.visible) return target;
        // Freeze the hit target while a skill is hovered or focused.
        if (live.current.hovered != null && !m.drag) return old;
        return { ...target,
          x: old.x + (target.x - old.x) * blend,
          y: old.y + (target.y - old.y) * blend,
        };
      });
      previousLabels = labels;
      previousSize = size;
      /* ---- pins + chips ---- */
      rp.forEach(([x, y, z], i) => {
        const el = chipRefs.current[i];
        const col = categories[catOf(i)].color;
        const X = c + x * R, Y = c + y * R;
        const label = labels[i];
        const dimmed = false; // Keep every visible skill readable during hover.
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
          ctx.beginPath(); ctx.moveTo(X, Y - 3); ctx.lineTo(label.x, label.y + label.height / 2); ctx.stroke();
        }
        if (!el) return;
        el.style.transform = `translate(${label.x}px, ${label.y}px) translate(-50%, -50%) scale(${label.scale})`;
        el.style.opacity = (vis * (dimmed ? 0.14 : 1)).toFixed(3);
        el.style.zIndex = String(Math.round(z * 100) + 100);
        el.style.pointerEvents = vis > 0.4 ? "auto" : "none";
        el.tabIndex = vis > 0.4 ? 0 : -1;
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    /* ---- drag to spin: recent movement determines release momentum ---- */
    const sensitivity = () => 3.2 / Math.max(280, stage.clientWidth);
    const down = (e) => {
      if (!e.isPrimary || e.button !== 0 || e.target.closest("button") || m.drag) return;
      e.preventDefault();
      live.current.hovered = null; live.current.active = null; live.current.selected = null;
      setHovered(null); setSelected(null);
      m.vx = 0; m.vy = 0; m.hoverReady = false;
      m.drag = { pointerId: e.pointerId, x: e.clientX, y: e.clientY,
        samples: [{ x: e.clientX, y: e.clientY, time: e.timeStamp }] };
      stage.dataset.dragging = "true";
      stage.setPointerCapture(e.pointerId);
      if (live.current.filter) { live.current.filter = null; setFilter(null); }
    };
    const move = (e) => {
      if (!m.drag) {
        // A moving chip under a stationary cursor must not cancel a flick.
        if (m.pointerX !== e.clientX || m.pointerY !== e.clientY) m.hoverReady = true;
        m.pointerX = e.clientX; m.pointerY = e.clientY;
        return;
      }
      if (e.pointerId !== m.drag.pointerId) return;
      e.preventDefault();
      const d = m.drag;
      const events = e.getCoalescedEvents?.();
      for (const point of events?.length ? events : [e]) {
        const factor = sensitivity();
        m.ay += (point.clientX - d.x) * factor;
        m.ax = Math.max(-0.9, Math.min(0.9, m.ax - (point.clientY - d.y) * factor));
        d.x = point.clientX; d.y = point.clientY;
        d.samples.push({ x: d.x, y: d.y, time: point.timeStamp });
        while (d.samples.length > 2 && d.samples[0].time < point.timeStamp - 80) d.samples.shift();
      }
    };
    const up = (e) => {
      if (!m.drag || (e?.pointerId != null && e.pointerId !== m.drag.pointerId)) return;
      const { pointerId, samples } = m.drag;
      const last = samples[samples.length - 1];
      const first = samples[0];
      const elapsed = (last.time - first.time) / 1000;
      const released = e?.type === "pointerup";
      if (released && elapsed > 0.008 && e.timeStamp - last.time < 100) {
        const factor = sensitivity();
        m.vy = Math.max(-6, Math.min(6, (last.x - first.x) * factor / elapsed));
        // Vertical release returns to center rather than carrying tilt outward.
        m.vx = 0;
        if (Math.abs(m.vy) > 0.04) m.direction = Math.sign(m.vy);
      } else {
        m.vx = 0; m.vy = 0.132 * m.direction;
      }
      m.pointerX = e?.clientX ?? last.x; m.pointerY = e?.clientY ?? last.y;
      m.hoverReady = false;
      m.drag = null;
      delete stage.dataset.dragging;
      if (stage.hasPointerCapture(pointerId)) stage.releasePointerCapture(pointerId);
    };
    const preventSelection = (e) => e.preventDefault();
    const cancelOnBlur = () => up();
    stage.addEventListener("selectstart", preventSelection);
    stage.addEventListener("dragstart", preventSelection);
    window.addEventListener("blur", cancelOnBlur);
    stage.addEventListener("pointerdown", down);
    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerup", up);
    stage.addEventListener("pointercancel", up);
    stage.addEventListener("lostpointercapture", up);
    return () => {
      cancelAnimationFrame(raf);
      up();
      stage.removeEventListener("selectstart", preventSelection);
      stage.removeEventListener("dragstart", preventSelection);
      window.removeEventListener("blur", cancelOnBlur);
      observer.disconnect();
      stage.removeEventListener("pointerdown", down);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerup", up);
      stage.removeEventListener("pointercancel", up);
      stage.removeEventListener("lostpointercapture", up);
    };
  }, []);
  // All panels share one grid cell. Hidden panels still reserve their natural
  // height, so switching skills cannot resize the card or shift the page.
  const infoPanels = [
    { id: null, name: "My skills, connected",
      description: "Hover or tap a skill to see what it works with. Drag the globe to explore more skills." },
    ...skills.map((skill, i) => {
      const related = links.filter(([a, b]) => a === i || b === i)
        .map(([a, b]) => skills[a === i ? b : a].name);
      return { ...skill, id: i,
        description: related.length ? `Works with ${related.join(", ")}` : "Part of my development toolkit." };
    }),
  ];
  return (
    <div className={styles["gs"]}>
      <div className={styles["gs-stage"]} ref={stageRef} tabIndex={0}
        onPointerLeave={() => hoverSkill(null)}
        role="group" aria-label="Interactive skill globe. Use left and right arrow keys to rotate."
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget) return;
          if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
          event.preventDefault(); setFilter(null); setActive(null); hoverSkill(null);
          const m = motion.current;
          if (event.key === "ArrowLeft") m.ay -= 0.2;
          if (event.key === "ArrowRight") m.ay += 0.2;
          if (event.key === "ArrowUp") { m.ax = Math.max(-0.9, m.ax - 0.15); m.vx = 0; }
          if (event.key === "ArrowDown") { m.ax = Math.min(0.9, m.ax + 0.15); m.vx = 0; }
        }}>
        <canvas ref={canvasRef} className={styles["gs-canvas"]} aria-hidden="true" />
        {skills.map((sk, i) => (
          <button
            key={sk.name}
            ref={(el) => { chipRefs.current[i] = el; }}
            type="button"
            className={classes(`gs-chip ${active === i ? "on" : ""}`)}
            style={{ "--cat": categories[sk.cat].color }}
            onPointerEnter={(event) => { if (event.pointerType === "mouse" && !motion.current.drag && motion.current.hoverReady) hoverSkill(i); }}
            onPointerMove={(event) => {
              const m = motion.current;
              if (event.pointerType === "mouse" && !m.drag &&
                  (m.pointerX !== event.clientX || m.pointerY !== event.clientY)) {
                m.hoverReady = true;
                hoverSkill(i);
              }
            }}
            onPointerLeave={() => hoverSkill(null)}
            onFocus={() => hoverSkill(i)}
            onBlur={() => hoverSkill(null)}
            onClick={() => { setActive(selected === i ? null : i); }}
            aria-label={`${sk.name}, ${categories[sk.cat].label}`}
          >
            <span className={styles["gs-chip-icon"]}><sk.Icon style={{ color: sk.color }} /></span>
            <span className={styles["gs-chip-name"]}>{sk.name}</span>
          </button>
        ))}
        <p className={styles["gs-hint"]}><FaHandPointer aria-hidden="true" /> Drag to spin </p>
      </div>
      <div className={styles["gs-info"]} aria-live="polite" aria-atomic="true">
        {infoPanels.map((panel) => {
          const visible = active === panel.id;
          const Icon = panel.Icon;
          return (
            <div key={panel.id ?? "intro"} className={styles["gs-info-panel"]}
              style={{ visibility: visible ? "visible" : "hidden" }}
              aria-hidden={!visible}>
              {Icon && (
                <span className={styles["gs-info-icon"]} style={{ "--cat": categories[panel.cat].color }}>
                  <Icon style={{ color: panel.color }} />
                </span>
              )}
              <div>
                <strong>{panel.name}</strong>
                {panel.cat && <small style={{ color: categories[panel.cat].color }}>{categories[panel.cat].label}</small>}
                <p>{panel.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
