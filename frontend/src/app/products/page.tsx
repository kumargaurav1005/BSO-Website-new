import DiagonalBanner from "@/components/DiagonalBanner";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Products | BSO AI Review Private Limited",
};
export default function Page() {
  return (
    <main id="main">
      <DiagonalBanner
        eyebrow="Our products"
        title="Technology with a role to play."
        description="Three development concepts focused on capturing different kinds of sporting evidence."
        image="/products-technology.webp"
        imageAlt="Close-up of electronic circuitry illustrating technology development"
      />
      <section className="products wrap">
        <div className="product-list">
          <article className="product" id="thirdeye">
            <div className="product-image">
              <img srcSet="/thirdeye-scene-720.webp 720w, /thirdeye-scene.webp 1086w" sizes="(max-width: 760px) 100vw, 50vw" loading="lazy" decoding="async" width={1086} height={1448}
                src="/thirdeye-scene.webp"
                alt="Cricket play recorded on a smartphone"
              />
            </div>
            <div className="product-copy">
              <div className="product-index">01 / Cricket review</div>
              <h3>BSO ThirdEye AI</h3>
              <div className="descriptor">Review from the boundary.</div>
              <p>
                A smartphone-based, on-device cricket review concept exploring
                ball trajectory, LBW analysis and edge audio cues.
              </p>
              <div className="tags">
                <span>Smartphone capture</span>
                <span>On-device analysis</span>
              </div>
            </div>
          </article>
          <article className="product" id="smartball">
            <div className="product-image">
              <img srcSet="/smartball-scene-720.webp 720w, /smartball-scene.webp 1086w" sizes="(max-width: 760px) 100vw, 50vw" loading="lazy" decoding="async" width={1086} height={1448} src="/smartball-scene.webp" alt="Cricket ball on a pitch" />
            </div>
            <div className="product-copy">
              <div className="product-index">02 / Connected equipment</div>
              <h3>BSO SmartBall</h3>
              <div className="descriptor">Measurement at the source.</div>
              <p>
                A sensor-enabled cricket ball concept intended to capture speed,
                spin and pitch angle during play.
              </p>
              <div className="tags">
                <span>Embedded sensors</span>
                <span>Ball data</span>
              </div>
            </div>
          </article>
          <article className="product" id="birdeye">
            <div className="product-image">
              <img srcSet="/birdeye-scene-720.webp 720w, /birdeye-scene.webp 1086w" sizes="(max-width: 760px) 100vw, 50vw" loading="lazy" decoding="async" width={1086} height={1448}
                src="/birdeye-scene.webp"
                alt="Badminton rally viewed from above"
              />
            </div>
            <div className="product-copy">
              <div className="product-index">03 / Court review</div>
              <h3>BSO BirdEye AI</h3>
              <div className="descriptor">A clearer view of the line.</div>
              <p>
                A top-down, high-speed camera review concept for line-call
                assistance in badminton and other court sports.
              </p>
              <div className="tags">
                <span>Top-down vision</span>
                <span>Line-call support</span>
              </div>
            </div>
          </article>
        </div>
        <p className="product-note">
          Images show sporting use cases, not working product hardware or
          software. These products are in development, and capabilities may
          change during testing.
        </p>
      </section>
      <section className="teaser">
        <div className="wrap">
          <div>
            <div className="overline">Connect with us</div>
            <h2>Interested in a product discussion or pilot?</h2>
          </div>
          <a href="/contact/">Contact us</a>
        </div>
      </section>
    </main>
  );
}
