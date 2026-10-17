import DiagonalBanner from "@/components/DiagonalBanner";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our team | BSO AI Review Private Limited",
};
export default function Page() {
  return (
    <main id="main">
      <DiagonalBanner
        eyebrow="Our team"
        title="People behind the platform."
        description="A team working across grassroots sport, technology, operations and product design."
        image="/team-collaboration.jpg"
        imageAlt="Illustrative stock photograph of people collaborating with laptops"
      />
      <section className="page-section wrap">
        <div className="section-heading">
          <div>
            <div className="overline">Leadership and delivery</div>
            <h2>Meet the team.</h2>
          </div>
          <p>
            These names and roles are drawn from the Bharat Sports Olymps team
            profile.
          </p>
        </div>
        <div className="team-grid">
          <article className="person">
            <img
              src="/team-vikas.png"
              alt="Portrait of Vikas Sharma"
              loading="lazy"
            />
            <div className="detail">
              <small>Founder</small>
              <h2>Vikas Sharma</h2>
              <p>Building the merit-driven athlete ecosystem.</p>
            </div>
          </article>
          <article className="person">
            <img
              src="/team-harsh.jpg"
              alt="Portrait of Harsh Singhal"
              loading="lazy"
            />
            <div className="detail">
              <small>Co Founder</small>
              <h2>Harsh Singhal</h2>
              <p>Working to develop the Bharat Sports Olymps platform.</p>
            </div>
          </article>
          <article className="person">
            <img
              src="/team-aakash.png"
              alt="Portrait of Aakash Singhal"
              loading="lazy"
            />
            <div className="detail">
              <small>CTO</small>
              <h2>Aakash Singhal</h2>
              <p>Leading technology and platform architecture.</p>
            </div>
          </article>
          <article className="person">
            <img
              src="/team-mayank.png"
              alt="Portrait of Mayank Panchal"
              loading="lazy"
            />
            <div className="detail">
              <small>COO</small>
              <h2>Mayank Panchal</h2>
              <p>Driving operations and execution.</p>
            </div>
          </article>
          <article className="person">
            <img
              src="/team-abhishek.png"
              alt="Portrait of Abhishek Pundir"
              loading="lazy"
            />
            <div className="detail">
              <small>Project Designer</small>
              <h2>Abhishek Pundir</h2>
              <p>Designing clear experiences for athletes.</p>
            </div>
          </article>
        </div>
      </section>
      <section className="teaser">
        <div className="wrap">
          <div>
            <div className="overline">Our purpose</div>
            <h2>We are building a clearer path for talent in sport.</h2>
          </div>
          <a href="/about/">About BSO</a>
        </div>
      </section>
    </main>
  );
}
