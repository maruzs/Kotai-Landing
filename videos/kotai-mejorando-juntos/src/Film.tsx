import React from "react";
import {
  AbsoluteFill,
  Audio,
  Easing,
  Img,
  OffthreadVideo,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";
import "./style.css";

const REGIONAL_COVERAGE = "Y además toda la región del Biobío y Ñuble";

const C = {
  red: "#8b0b1d",
  ink: "#18181b",
  paper: "#fafaf9",
  muted: "#625d5e",
};
const clamp = { extrapolateLeft: "clamp", extrapolateRight: "clamp" } as const;
const ease = Easing.bezier(0.23, 1, 0.32, 1);
const reveal = (frame: number, delay = 0, duration = 26) =>
  interpolate(frame, [delay, delay + duration], [0, 1], {
    ...clamp,
    easing: ease,
  });

type Shot = {
  start: number;
  end: number;
  kind: string;
  title?: string;
  sub?: string;
  tag?: string;
  img?: string;
  second?: string;
  num?: string;
  video?: boolean;
  trim?: number;
  dark?: boolean;
};
export const shots: Shot[] = [
  { start: 0, end: 4.8, kind: "intro", img: "home.jpg" },
  {
    start: 4.8,
    end: 10.5,
    kind: "photo",
    img: "after.jpg",
    tag: "CADA MEJORA CUENTA",
    title: "Tu hogar merece\nestar mejor.",
    sub: "Más confort. Más bienestar.",
  },
  {
    start: 10.5,
    end: 17.5,
    kind: "mosaic",
    title: "El cambio empieza\ncon las personas.",
    sub: "Un equipo comprometido con tu hogar.",
  },
  {
    start: 17.5,
    end: 24.8,
    kind: "split",
    img: "home.jpg",
    tag: "DEMOS EL PRIMER PASO",
    title: "¿Quieres mejorar\ntu casa?",
    sub: "Kotai te ayuda a comenzar.",
  },
  {
    start: 24.8,
    end: 32.4,
    kind: "photo",
    img: "office-tour.mp4",
    video: true,
    trim: 27,
    tag: "CONSTRUCTORA KOTAI",
    title: "Un equipo\ncerca de ti.",
    sub: "Te escuchamos. Te orientamos. Te acompañamos.",
  },
  { start: 32.4, end: 40.6, kind: "slogan" },
  {
    start: 40.6,
    end: 47.8,
    kind: "split",
    img: "team-2.jpg",
    tag: "ACOMPAÑAMIENTO CERCANO",
    title: "Tu proyecto,\ncon orientación.",
    sub: "Nuestro equipo te acompaña paso a paso.",
  },
  {
    start: 47.8,
    end: 53.8,
    kind: "service",
    img: "window.jpg",
    num: "01",
    tag: "MEJORAMIENTO TÉRMICO",
    title: "Que el confort\nse quede en casa.",
    sub: "Aislación · Ventanas termopanel · Puertas",
  },
  {
    start: 53.8,
    end: 57.5,
    kind: "electric",
    num: "02",
    tag: "MEJORAMIENTO ELÉCTRICO",
    title: "Más tranquilidad.\nCada día.",
    sub: "Orientación para mejorar tu instalación eléctrica.",
  },
  {
    start: 57.5,
    end: 64.4,
    kind: "solar",
    num: "03",
    tag: "COLECTORES SOLARES",
    title: "El sol también\nmejora tu hogar.",
    sub: "Conoce las alternativas de agua caliente solar.",
  },
  {
    start: 64.4,
    end: 71.3,
    kind: "split",
    img: "team-3.jpg",
    tag: "ORIENTACIÓN GRATUITA",
    title: "¿No sabes\nde subsidios?",
    sub: "No necesitas saberlo todo para empezar.",
  },
  { start: 71.3, end: 76.5, kind: "steps" },
  { start: 76.5, end: 81.5, kind: "locations" },
  {
    start: 81.5,
    end: 87.5,
    kind: "photo",
    img: "office-tour.mp4",
    video: true,
    trim: 28,
    tag: "PERSONAS QUE TE ACOMPAÑAN",
    title: "Siempre\njunto a ti.",
    sub: "Desde la primera conversación.",
  },
  { start: 87.5, end: 94.5, kind: "beforeafter" },
  {
    start: 94.5,
    end: 100.5,
    kind: "mosaic",
    title: "Mejoremos también\nnuestra comunidad.",
    sub: "Conversa con tus dirigentes. Activa a tus vecinos.",
  },
  { start: 100.5, end: 106.5, kind: "contact" },
  { start: 106.5, end: 118.8, kind: "outro" },
];

const Photo: React.FC<{
  src: string;
  video?: boolean;
  trim?: number;
  pos?: string;
  f: number;
  duration?: number;
}> = ({ src, video, trim = 0, pos = "center", f, duration = 210 }) => {
  const p = interpolate(f, [0, duration], [0, 1], clamp);
  const style: React.CSSProperties = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: pos,
    transform: `scale(${1.025 + p * 0.065}) translateX(${(p - 0.5) * -1.5}%)`,
  };
  return video ? (
    <OffthreadVideo
      src={staticFile(src)}
      muted
      trimBefore={trim * 30}
      style={style}
    />
  ) : (
    <Img src={staticFile(src)} style={style} />
  );
};

const Roof: React.FC<{ color?: string; opacity?: number }> = ({
  color = C.red,
  opacity = 1,
}) => (
  <svg
    viewBox="0 0 1200 1000"
    preserveAspectRatio="none"
    style={{ width: "100%", height: "100%", opacity }}
  >
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <path
        key={i}
        d={`M ${-420 + i * 120} 1050 L ${180 + i * 120} 0 L ${780 + i * 120} 1050`}
        stroke={color}
        strokeWidth="26"
        fill="none"
      />
    ))}
  </svg>
);

const Logo: React.FC<{ large?: boolean }> = ({ large = false }) => (
  <div
    style={{
      background: "white",
      width: large ? 420 : 174,
      padding: large ? "18px 26px" : "10px 15px",
    }}
  >
    <Img
      src={staticFile("logo.png")}
      style={{ width: "100%", display: "block" }}
    />
  </div>
);
const Brand: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <div className="brand">
    <Logo />
    <span style={{ color: light ? "#fff" : C.ink }}>MEJORANDO JUNTOS</span>
  </div>
);
const Tag: React.FC<{
  children: React.ReactNode;
  f: number;
  light?: boolean;
}> = ({ children, f, light = false }) => (
  <div
    className="eyebrow"
    style={{
      color: light ? "#fff" : C.red,
      opacity: reveal(f, 8),
      transform: `translateY(${(1 - reveal(f, 8)) * 12}px)`,
    }}
  >
    <i style={{ background: light ? "#fff" : C.red }} />
    {children}
  </div>
);
const Head: React.FC<{
  children: string;
  f: number;
  size?: number;
  delay?: number;
  color?: string;
}> = ({ children, f, size = 92, delay = 14, color = C.ink }) => (
  <h1 style={{ fontSize: size, color }}>
    {children.split("\n").map((line, i) => (
      <span className="line" key={line}>
        <span
          style={{
            display: "block",
            transform: `translateY(${(1 - reveal(f, delay + i * 5, 32)) * 110}%)`,
            opacity: reveal(f, delay + i * 5, 24),
          }}
        >
          {line}
        </span>
      </span>
    ))}
  </h1>
);
const Sub: React.FC<{
  children: React.ReactNode;
  f: number;
  light?: boolean;
  delay?: number;
}> = ({ children, f, light = false, delay = 36 }) => (
  <p
    className="sub"
    style={{
      color: light ? "#fff" : C.muted,
      opacity: reveal(f, delay),
      transform: `translateY(${(1 - reveal(f, delay)) * 18}px)`,
    }}
  >
    {children}
  </p>
);

const HouseDiagram: React.FC<{ f: number; solar?: boolean }> = ({
  f,
  solar = false,
}) => {
  const p = reveal(f, 8, 65);
  return (
    <svg
      viewBox="0 0 700 650"
      style={{ width: 620, height: 580 }}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g strokeDasharray="2300" strokeDashoffset={(1 - p) * 2300}>
        <path d="M70 310L350 95L630 310M130 265V575H570V265M295 575V410H405V575M185 350H250V430H185ZM450 350H515V430H450Z" />
        {solar ? (
          <>
            <path d="M260 205L325 157L455 253L390 300ZM292 181L422 277M303 237L368 189M347 269L412 221M455 253L477 268M467 262V460H413" />
            <circle cx="551" cy="93" r="40" />
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <path
                key={i}
                d={`M ${551 + Math.cos((i * Math.PI) / 4) * 62} ${93 + Math.sin((i * Math.PI) / 4) * 62} l ${Math.cos((i * Math.PI) / 4) * 16} ${Math.sin((i * Math.PI) / 4) * 16}`}
              />
            ))}
          </>
        ) : (
          <>
            <path d="M345 253L312 316H356L328 378M217 430V490H350M482 430V490H350M350 490V575" />
            <circle cx="350" cy="490" r="9" />
          </>
        )}
      </g>
      <path d="M80 608H620" strokeOpacity=".3" />
      <circle
        cx="350"
        cy="490"
        r={16 + (f % 50) / 2}
        opacity={solar ? 0 : 0.5 * (1 - (f % 50) / 50)}
        strokeWidth="2"
      />
    </svg>
  );
};

const Scene: React.FC<{ shot: Shot; index: number }> = ({ shot: s, index }) => {
  const f = useCurrentFrame();
  const duration = (s.end - s.start) * 30;
  const diagonal = index > 0 && index % 3 === 0;
  const p = reveal(f, 0, 18);
  const enter: React.CSSProperties = {
    opacity: index === 0 || diagonal ? 1 : p,
    clipPath: diagonal
      ? `polygon(0 0, ${p * 140}% 0, ${p * 140 - 35}% 100%, 0 100%)`
      : undefined,
  };
  const common = <Brand light={s.kind === "photo"} />;
  let content: React.ReactNode;
  if (s.kind === "intro")
    content = (
      <>
        <div
          className="intro-photo"
          style={{
            clipPath: `polygon(${100 - reveal(f, 5, 45) * 100}% 0,100% 0,100% 100%,0 100%)`,
          }}
        >
          <Photo src={s.img!} f={f} />
          <div className="shade" />
        </div>
        <div className="intro-panel">
          <div
            style={{
              opacity: reveal(f, 2),
              transform: `translateY(${(1 - reveal(f, 2)) * 22}px)`,
            }}
          >
            <Logo large />
          </div>
          <Tag f={f - 12}>CONSTRUCTORA KOTAI</Tag>
          <Head f={f} delay={26} size={100}>
            {"Mejorando\njuntos"}
          </Head>
          <Sub f={f} delay={51}>
            Tu hogar. Nuestra motivación.
          </Sub>
          <div
            className="red-rule"
            style={{ transform: `scaleX(${reveal(f, 46, 42)})` }}
          />
        </div>
        <div className="photo-note">OBRAS REALES · CONSTRUCTORA KOTAI</div>
      </>
    );
  else if (s.kind === "photo")
    content = (
      <>
        <AbsoluteFill>
          <Photo
            src={s.img!}
            video={s.video}
            trim={s.trim}
            f={f}
            duration={duration}
          />
        </AbsoluteFill>
        <div className="shade" />
        {common}
        <div className="photo-copy">
          <Tag f={f} light>
            {s.tag}
          </Tag>
          <Head f={f} color="white" size={104}>
            {s.title!}
          </Head>
          <Sub f={f} light>
            {s.sub}
          </Sub>
        </div>
        <div className="small-index">
          KOTAI / {String(index + 1).padStart(2, "0")}
        </div>
      </>
    );
  else if (s.kind === "split" || s.kind === "service")
    content = (
      <>
        <div className="split-image">
          <Photo src={s.img!} f={f} duration={duration} />
          <div className="image-line" />
        </div>
        {common}
        <div className="split-copy">
          <Tag f={f}>{s.tag}</Tag>
          {s.num && (
            <div className="number" style={{ opacity: reveal(f) }}>
              {s.num}
            </div>
          )}
          <Head f={f} size={s.kind === "service" ? 79 : 86}>
            {s.title!}
          </Head>
          <div
            className="red-rule"
            style={{ transform: `scaleX(${reveal(f, 26, 34)})` }}
          />
          <Sub f={f}>{s.sub}</Sub>
        </div>
        <div className="side-label">CONSTRUIMOS BIENESTAR</div>
      </>
    );
  else if (s.kind === "mosaic")
    content = (
      <>
        <div className="mosaic-grid">
          {["team-1.jpg", "team-5.jpg", "office-1.jpg", "office-3.jpg"].map(
            (img, i) => (
              <div
                key={img}
                style={{
                  overflow: "hidden",
                  opacity: reveal(f, i * 5),
                  transform: `translateY(${(1 - reveal(f, i * 5)) * 40}px)`,
                }}
              >
                <Photo src={img} f={f + i * 20} duration={duration} />
              </div>
            ),
          )}
        </div>
        <div className="mosaic-bottom">
          <Tag f={f}>PERSONAS · EQUIPO · COMUNIDAD</Tag>
          <Head f={f} size={75}>
            {s.title!}
          </Head>
          <Sub f={f}>{s.sub}</Sub>
        </div>
        <div style={{ position: "absolute", right: 70, top: 42 }}>
          <Logo />
        </div>
      </>
    );
  else if (s.kind === "slogan")
    content = (
      <AbsoluteFill style={{ background: C.red, color: "white" }}>
        <div
          style={{
            position: "absolute",
            inset: "-200px -160px -80px 860px",
            transform: `translateX(${(1 - reveal(f, 0, 75)) * 180}px)`,
          }}
        >
          <Roof color="#fff" opacity={0.09} />
        </div>
        <div className="slogan-copy">
          <Tag f={f} light>
            CONSTRUCTORA KOTAI
          </Tag>
          <Head f={f} size={156} color="white">
            {"Mejorando\njuntos"}
          </Head>
          <div
            style={{
              height: 7,
              width: interpolate(f, [35, 110], [0, 460], clamp),
              background: "white",
              marginTop: 35,
            }}
          />
          <Sub f={f} light delay={52}>
            Hogares con más bienestar.
            <br />
            Comunidades con más oportunidades.
          </Sub>
        </div>
        <div className="slogan-film">
          <AbsoluteFill>
            <Photo src="team-4.jpg" f={f} duration={duration} />
          </AbsoluteFill>
          <AbsoluteFill style={{ opacity: reveal(f, 114, 22) }}>
            <Photo src="home.jpg" f={f} duration={duration} />
          </AbsoluteFill>
        </div>
        <div className="slogan-label">EL CAMBIO LO HACEMOS JUNTOS</div>
      </AbsoluteFill>
    );
  else if (s.kind === "electric" || s.kind === "solar")
    content = (
      <AbsoluteFill
        style={{
          background: s.kind === "electric" ? C.ink : C.red,
          color: "white",
        }}
      >
        <div style={{ position: "absolute", inset: 0 }}>
          <Roof color="white" opacity={0.035} />
        </div>
        <div className="technical-copy">
          <Tag f={f} light>
            {s.tag}
          </Tag>
          <div className="tech-number" style={{ opacity: reveal(f) }}>
            {s.num}
          </div>
          <Head f={f} size={90} color="white">
            {s.title!}
          </Head>
          <Sub f={f} light>
            {s.sub}
          </Sub>
        </div>
        <div className="technical-drawing" style={{ opacity: reveal(f, 5) }}>
          <HouseDiagram f={f} solar={s.kind === "solar"} />
          <div className="drawing-label">
            {s.kind === "solar"
              ? "ENERGÍA PARA TU BIENESTAR"
              : "CUIDAMOS LO QUE MÁS IMPORTA"}
          </div>
        </div>
      </AbsoluteFill>
    );
  else if (s.kind === "steps")
    content = (
      <>
        {common}
        <div className="steps">
          <Tag f={f}>ORIENTACIÓN GRATUITA</Tag>
          <Head f={f} size={100}>
            {"Paso a paso. Contigo."}
          </Head>
          <div className="step-grid">
            {[
              ["01", "Conversemos", "Cuéntanos qué necesita tu vivienda."],
              ["02", "Te orientamos", "Conoce las alternativas para tu hogar."],
              ["03", "Avancemos", "Prepara tu siguiente paso con Kotai."],
            ].map((a, i) => (
              <div
                className="step"
                key={a[0]}
                style={{
                  opacity: reveal(f, 20 + i * 18),
                  transform: `translateY(${(1 - reveal(f, 20 + i * 18)) * 30}px)`,
                }}
              >
                <span>{a[0]}</span>
                <h2>{a[1]}</h2>
                <p>{a[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  else if (s.kind === "locations")
    content = (
      <AbsoluteFill style={{ background: C.ink, color: "white" }}>
        <div
          style={{ position: "absolute", inset: "-100px -300px -100px 780px" }}
        >
          <Roof color="white" opacity={0.05} />
        </div>
        <div className="locations">
          <Tag f={f} light>
            MEJORANDO JUNTOS EN TU COMUNA
          </Tag>
          {["Los Ángeles", "Concepción", "Hualpén", "Lota"].map((town, i) => (
            <div
              className="town"
              key={town}
              style={{
                opacity: reveal(f, 8 + i * 8),
                transform: `translateX(${(1 - reveal(f, 8 + i * 8)) * 80}px)`,
              }}
            >
              <span>0{i + 1}</span>
              {town}
              <i
                style={{ transform: `scaleX(${reveal(f, 20 + i * 8, 40)})` }}
              />
            </div>
          ))}
        </div>
        <div className="location-foot" style={{ opacity: reveal(f, 46) }}>
          {REGIONAL_COVERAGE}
        </div>
      </AbsoluteFill>
    );
  else if (s.kind === "beforeafter") {
    const wipe = interpolate(f, [30, 130], [0, 1], {
      ...clamp,
      easing: Easing.inOut(Easing.cubic),
    });
    content = (
      <>
        <div className="comparison">
          <AbsoluteFill>
            <Photo src="before.jpg" f={0} />
          </AbsoluteFill>
          <AbsoluteFill
            style={{ clipPath: `inset(0 ${100 - wipe * 100}% 0 0)` }}
          >
            <Photo src="after.jpg" f={0} />
          </AbsoluteFill>
          <div className="wipe-line" style={{ left: `${wipe * 100}%` }} />
          <div
            className="before-label"
            style={{ opacity: interpolate(wipe, [0.85, 1], [1, 0], clamp) }}
          >
            ANTES
          </div>
          <div className="after-label" style={{ opacity: reveal(f, 65) }}>
            DESPUÉS
          </div>
        </div>
        <div className="comparison-copy">
          <Tag f={f}>OBRAS REALES DE KOTAI</Tag>
          <Head f={f} size={70}>
            {"Un cambio que se ve.\nBienestar que se siente."}
          </Head>
        </div>
      </>
    );
  } else if (s.kind === "contact")
    content = (
      <>
        <div className="contact-photo">
          <Photo src="office-1.jpg" f={f} duration={duration} />
        </div>
        <div className="contact-panel">
          {common}
          <Tag f={f}>TU PRIMER PASO ES CONVERSAR</Tag>
          <Head f={f} size={106}>
            {"Hablemos\nde tu hogar."}
          </Head>
          <div className="contact-phone" style={{ opacity: reveal(f, 35) }}>
            +56 9 5050 1231
          </div>
          <Sub f={f}>Llámanos o escríbenos por WhatsApp.</Sub>
          <div className="contact-url" style={{ opacity: reveal(f, 48) }}>
            constructorakotai.cl ↗
          </div>
        </div>
      </>
    );
  else
    content = (
      <>
        <div className="outro-stripe">
          <Roof color={C.red} opacity={0.09} />
        </div>
        <div className="outro-content">
          <div
            style={{
              opacity: reveal(f),
              transform: `translateY(${(1 - reveal(f)) * 20}px)`,
            }}
          >
            <Logo large />
          </div>
          <Head f={f} delay={10} size={110}>
            {"Mejorando juntos"}
          </Head>
          <Sub f={f} delay={30}>
            Tu hogar es el comienzo.
          </Sub>
          <div
            className="outro-divider"
            style={{ transform: `scaleX(${reveal(f, 32, 50)})` }}
          />
          <div className="outro-url" style={{ opacity: reveal(f, 45) }}>
            constructorakotai.cl
          </div>
          <div className="outro-phone" style={{ opacity: reveal(f, 55) }}>
            Llámanos o escríbenos · +56 9 5050 1231
          </div>
          <div className="outro-towns" style={{ opacity: reveal(f, 65) }}>
            Los Ángeles · Concepción · Hualpén · Lota
          </div>
          <div className="outro-regions" style={{ opacity: reveal(f, 72) }}>
            {REGIONAL_COVERAGE}
          </div>
        </div>
        <div className="outro-bottom">
          CONSTRUCTORA KOTAI{" "}
          <span>ORIENTACIÓN GRATUITA · MEJORAMIENTO DE VIVIENDAS</span>
        </div>
      </>
    );
  return (
    <AbsoluteFill style={{ background: C.paper, overflow: "hidden", ...enter }}>
      {content}
    </AbsoluteFill>
  );
};

export const Film: React.FC = () => {
  const f = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{ background: C.paper, fontFamily: "Jakarta, sans-serif" }}
    >
      <Audio
        src={staticFile("music.mp3")}
        volume={(frame) =>
          interpolate(frame, [0, 10, 3504, 3564], [0, 0.85, 0.85, 0], clamp)
        }
      />
      {shots.map((s, i) => (
        <Sequence
          key={s.start}
          from={Math.round(s.start * 30)}
          durationInFrames={Math.min(
            Math.round((s.end - s.start) * 30) + 18,
            3564 - Math.round(s.start * 30),
          )}
        >
          <Scene shot={s} index={i} />
        </Sequence>
      ))}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 4,
          width: `${(f / 3563) * 100}%`,
          background: C.red,
        }}
      />
    </AbsoluteFill>
  );
};
