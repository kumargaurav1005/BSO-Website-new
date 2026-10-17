type DiagonalBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
};

export default function DiagonalBanner({ eyebrow, title, description, image, imageAlt }: DiagonalBannerProps) {
  return (
    <section className="diagonal-banner">
      <div className="diagonal-banner-copy">
        <div className="overline">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="diagonal-banner-image">
        <img src={image} alt={imageAlt} fetchPriority="high" />
      </div>
    </section>
  );
}
