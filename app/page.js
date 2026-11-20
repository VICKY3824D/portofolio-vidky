import Image from "next/image";
import { profile, projects, experience, skills, education } from "./data";

function Frame({ src, alt, priority }) {
  return (
    <figure className="frame">
      <div className="bar" aria-hidden="true"><i /><i /><i /></div>
      <Image src={`/images/${src}.jpg`} alt={alt} width={1400} height={600} priority={priority} sizes="(max-width: 900px) 90vw, 640px" />
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <header className="top">
        <a className="brand" href="#atas">Vidky Adhi Pradana</a>
        <nav aria-label="Navigasi utama">
          <a href="#proyek">Proyek</a>
          <a href="#pengalaman">Pengalaman</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#kontak">CV dan kontak</a>
        </nav>
      </header>

      <main id="atas">
        <section className="hero wrap">
          <div className="hero-text">
            <Image className="me" src="/vidky.jpg" alt="Foto Vidky Adhi Pradana" width={335} height={458} priority />
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="intro">{profile.intro}</p>
            <div className="actions">
              {profile.cvs.map((c, i) => (
                <a key={c.href} className={i === 0 ? "btn primary" : "btn"} href={c.href} download>{c.label}</a>
              ))}
            </div>
          </div>
          <div className="stack" aria-label="Cuplikan proyek">
            <Frame src="jeka-landing" alt="Halaman depan JEKA" priority />
            <Frame src="kismantoro" alt="Beranda Explore Kismantoro" priority />
            <Frame src="lsp-landing" alt="Halaman depan LSP UGM" priority />
          </div>
        </section>

        <section id="proyek" className="wrap sec">
          <h2>Proyek</h2>
          {projects.map((p) => (
            <article className="proj" key={p.name}>
              <div className="proj-text">
                <h3>{p.name}</h3>
                <p className="meta">{p.meta}</p>
                {p.text.map((t) => <p key={t}>{t}</p>)}
                {p.tech && <p className="tech">Teknologi: {p.tech}</p>}
                {p.url ? (
                  <a className="link" href={p.url} target="_blank" rel="noopener noreferrer">Buka {p.url.replace("https://", "")}</a>
                ) : (
                  <p className="note">{p.note}</p>
                )}
              </div>
              {p.shots.length > 0 && (
                <div className="shots" tabIndex={0} aria-label={`Tangkapan layar ${p.name}`}>
                  {p.shots.map(([f, alt]) => <Frame key={f} src={f} alt={alt} />)}
                </div>
              )}
            </article>
          ))}
        </section>

        <section id="pengalaman" className="wrap sec">
          <h2>Pengalaman</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.title + e.when}>
                <p className="when">{e.when}</p>
                <div>
                  <h3>{e.title}</h3>
                  <p className="meta">{e.org}</p>
                  <p>{e.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="keahlian" className="wrap sec two">
          <div>
            <h2>Keahlian</h2>
            <dl className="skills">
              {skills.map(([k, v]) => (<div key={k}><dt>{k}</dt><dd>{v}</dd></div>))}
            </dl>
          </div>
          <div>
            <h2>Pendidikan</h2>
            <h3>{education.school}</h3>
            <p className="meta">{education.degree}</p>
            <p>{education.note}</p>
            <h3 className="sub">Kursus</h3>
            <ul>{education.courses.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </section>

        <section id="kontak" className="wrap sec contact">
          <h2>CV dan kontak</h2>
          <p>Dua versi CV tersedia, sesuaikan dengan peran yang Anda cari.</p>
          <div className="actions">
            {profile.cvs.map((c, i) => (
              <a key={c.href} className={i === 0 ? "btn primary" : "btn"} href={c.href} download>{c.label}</a>
            ))}
          </div>
          <p className="reach">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
        </section>
      </main>

      <footer className="wrap foot">Vidky Adhi Pradana, Wonogiri, Jawa Tengah</footer>
    </>
  );
}
