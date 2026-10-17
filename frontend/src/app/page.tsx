import HeroCarousel from "@/components/HeroCarousel";
export default function HomePage() {
  return (
    <main id="main">
      <HeroCarousel />
      <section className="intro wrap">
        <div>
          <div className="overline">Who we are</div>
          <h2>Sport deserves more than a moment.</h2>
        </div>
        <div>
          <p className="intro-copy">
            Bharat Sports Olymps is working to make athlete progress visible
            through profiles, structured competition and rankings.{" "}
            <strong>BSO AI Review Private Limited</strong> develops technology
            concepts that can add clearer evidence to the game.
          </p>
          <a className="text-link" href="/about/">
            About the company
          </a>
        </div>
      </section>
      <section className="portfolio-section">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="overline">Our portfolio</div>
              <h2>Technology for the moments that matter.</h2>
            </div>
            <p>
              Our development work spans accessible review, connected equipment
              and court vision.
            </p>
          </div>
          <div className="portfolio-grid">
            <a className="portfolio-feature" href="/products/#thirdeye">
              <img
                src="/thirdeye-scene.png"
                alt="Cricket play recorded on a smartphone"
                loading="lazy"
              />
              <div>
                <span>01 / Cricket review</span>
                <h3>BSO ThirdEye AI</h3>
                <p>On-device analysis for cricket review</p>
              </div>
            </a>
            <div className="portfolio-side">
              <a href="/products/#smartball">
                <img
                  src="/smartball-scene.png"
                  alt="Cricket ball on a pitch"
                  loading="lazy"
                />
                <div>
                  <span>02 / Connected equipment</span>
                  <h3>BSO SmartBall</h3>
                </div>
              </a>
              <a href="/products/#birdeye">
                <img
                  src="/birdeye-scene.png"
                  alt="Badminton match viewed from above"
                  loading="lazy"
                />
                <div>
                  <span>03 / Court review</span>
                  <h3>BSO BirdEye AI</h3>
                </div>
              </a>
            </div>
          </div>
          <p className="portfolio-note">
            Products are in development. Images illustrate sporting use cases,
            not working hardware or software.
          </p>
        </div>
      </section>
      <section className="capability-section wrap">
        <div className="section-heading">
          <div>
            <div className="overline">How we think</div>
            <h2>From the field to a fuller picture.</h2>
          </div>
          <p>
            Three connected priorities guide our work across the BSO ecosystem
            and AI review concepts.
          </p>
        </div>
        <div className="capability-list">
          <div>
            <span>01</span>
            <h3>Capture performance</h3>
            <p>
              Help athletes and organisers retain a clearer record of
              participation and results.
            </p>
          </div>
          <div>
            <span>02</span>
            <h3>Measure what matters</h3>
            <p>
              Explore video, audio and sensor data that can provide context
              during play.
            </p>
          </div>
          <div>
            <span>03</span>
            <h3>Support decisions</h3>
            <p>
              Present useful evidence while keeping people accountable for the
              final call.
            </p>
          </div>
        </div>
      </section>
      <section className="editorial-band">
        <div className="wrap editorial-layout">
          <img
            src="/stadium.png"
            alt="Cricket ground under lights"
            loading="lazy"
          />
          <div>
            <div className="overline">Bharat Sports Olymps</div>
            <h2>A platform for talent to be seen.</h2>
            <p>
              From local grounds to a broader sporting pathway, the BSO
              ecosystem is being built around verified profiles, competition
              records and discoverable progress.
            </p>
            <a className="text-link" href="/about/">
              Explore our purpose
            </a>
          </div>
        </div>
      </section>
      <section className="teaser">
        <div className="wrap">
          <div>
            <div className="overline">The team</div>
            <h2>Meet the people building the next chapter of BSO.</h2>
          </div>
          <a href="/team/">Meet the team</a>
        </div>
      </section>
    </main>
  );
}
