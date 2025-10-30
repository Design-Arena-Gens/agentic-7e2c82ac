import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Vector-based and scalable",
  "Vibrant dual-tone palette",
  "Strength + motion symbolism"
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="copy">
          <span className="eyebrow">Gym Identity Concept</span>
          <h1>IronPulse Fitness</h1>
          <p>
            A bold emblem capturing explosive energy and precision strength. The
            geometric shield frames a barbell core with dual-color streaks that
            nod to endurance and agility.
          </p>
          <ul className="highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="actions">
            <Link className="button primary" href="/logo.svg" download>
              Download SVG
            </Link>
            <a
              className="button ghost"
              href="#usage"
            >
              Usage Notes
            </a>
          </div>
        </div>
        <div className="visual">
          <div className="logo-card">
            <Image
              src="/logo.svg"
              alt="IronPulse Fitness logo"
              width={420}
              height={420}
              priority
            />
          </div>
        </div>
      </section>
      <section id="usage" className="usage">
        <h2>Usage Guidance</h2>
        <div className="grid">
          <article>
            <h3>Color Palette</h3>
            <p>
              Primary blaze orange and aqua accent highlight intensity and focus.
              Pair with midnight backgrounds or grayscale neutrals for contrast.
            </p>
            <div className="swatches">
              <span style={{ background: "#f97316" }}>#f97316</span>
              <span style={{ background: "#22d3ee" }}>#22d3ee</span>
              <span style={{ background: "#0f1729" }}>#0f1729</span>
            </div>
          </article>
          <article>
            <h3>Logo Lockups</h3>
            <p>
              Use the full emblem for signage, apparel, and hero placements. For
              social avatars, crop to the central shield at 1:1 ratio and retain
              the glow halo for dimensional impact.
            </p>
          </article>
          <article>
            <h3>Typography</h3>
            <p>
              Pair the mark with condensed, uppercase sans-serif typefaces like
              <strong> Bebas Neue</strong> or <strong> Oswald</strong> to mirror
              the vertical momentum in the emblem.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
