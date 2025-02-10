import React from "react";

interface SeoProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function Seo({
  title = "Liane COUPAT CANDOULIVES - Web Developer",
  description = "Mon portfolio de développeur web. Découvrez mes compétences en front et back end ainsi que mes projets.",
  url = "https://www.lianecc.com",
  image = "https://www.lianecc.com/images/miniatureportfolio.png",
}: SeoProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </>
  );
}
