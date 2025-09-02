import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "cdn.pixabay.com",
      "res.cloudinary.com",
      // Add any other domains you use for images here
    ],
  },
};

export default nextConfig;
