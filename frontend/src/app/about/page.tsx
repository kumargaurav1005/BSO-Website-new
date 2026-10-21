import DiagonalBanner from "@/components/DiagonalBanner";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About us | BSO AI Review Private Limited",
};
export default function Page() {
  return (
    <main id="main">
      <DiagonalBanner
        eyebrow="About us"
        title="Sport deserves a clearer path."
        description="Our work connects athlete recognition with the systems that can make competition more measurable and trustworthy."
        image="/about-athletes.webp"
        imageAlt="Runners training outdoors at sunrise"
      />
      <section className="page-section wrap story-grid">
        <div>
          <div className="overline">Our story</div>
          <h2>From local grounds to lasting recognition.</h2>
        </div>
        <div>
          <p>
            Bharat Sports Olymps is being built as a grassroots sports ecosystem
            where athletes can create a credible record of performance,
            participate in structured competition and become more visible to the
            people who can support their progress.
          </p>
          <p>
            BSO AI Review Private Limited brings a technology focus to that
            mission. Our development work explores assisted review and
            measurement through ThirdEye AI, SmartBall and BirdEye AI.
          </p>
          <p>
            We are starting with a Dehradun-focused approach and a broader
            ambition: make sporting progress easier to record, understand and
            recognise.
          </p>
          <a
            className="text-link"
            href="https://www.bsolymps.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore Bharat Sports Olymps
          </a>
        </div>
      </section>
      <section className="feature-band">
        <div className="wrap">
          <img srcSet="/stadium-720.webp 720w, /stadium.webp 1600w" sizes="(max-width: 760px) 100vw, 50vw" decoding="async" width={1600} height={900}
            src="/stadium.webp"
            alt="Cricket ground under lights"
            loading="lazy"
          />
          <div>
            <div className="overline">What drives us</div>
            <h2>Recognition grounded in performance.</h2>
            <p>
              Sporting opportunity should grow from a visible history of
              participation and results. The BSO ecosystem is designed around
              athlete profiles, verified competition records, rankings and
              pathways to discovery.
            </p>
            <p>
              Our review concepts aim to provide another layer of useful context
              where decisions are difficult to make from the sidelines.
            </p>
          </div>
        </div>
      </section>
      <section className="page-section wrap">
        <div className="overline">Our priorities</div>
        <h2>Built around the people in sport.</h2>
        <div className="value-grid">
          <div className="value">
            <h3>Athlete visibility</h3>
            <p>
              Help performance and progression become easier to document and
              discover.
            </p>
          </div>
          <div className="value">
            <h3>Clearer evidence</h3>
            <p>
              Explore accessible tools for capturing and reviewing important
              moments.
            </p>
          </div>
          <div className="value">
            <h3>Human accountability</h3>
            <p>
              Support organisers and officials with information while keeping
              decisions responsible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
