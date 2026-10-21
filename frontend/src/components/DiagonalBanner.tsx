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
        <img src={image} alt={imageAlt} width={1200} height={800}
          srcSet={`${image.replace(".webp", "-720.webp")} 720w, ${image} 1200w`}
          sizes="(max-width: 600px) 100vw, 42vw" decoding="async" fetchPriority="high" />
      </div>
    </section>
  );
}
