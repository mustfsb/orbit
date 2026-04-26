/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/landing/index.html" },
        { source: "/about", destination: "/landing/about/index.html" },
        { source: "/about/:path*", destination: "/landing/about/:path*/index.html" },
        { source: "/news", destination: "/landing/news/index.html" },
        { source: "/news/:path*", destination: "/landing/news/:path*/index.html" },
        { source: "/resources", destination: "/landing/resources/index.html" },
        { source: "/resources/:path*", destination: "/landing/resources/:path*/index.html" },
        { source: "/handbook", destination: "/landing/handbook/index.html" },
        { source: "/handbook/:path*", destination: "/landing/handbook/:path*/index.html" },
        { source: "/policies-and-priorities", destination: "/landing/policies-and-priorities/index.html" },
        { source: "/policies-and-priorities/:path*", destination: "/landing/policies-and-priorities/:path*/index.html" },
        { source: "/government-technology-jobs", destination: "/landing/government-technology-jobs/index.html" },
        { source: "/privacy-statement", destination: "/landing/privacy-statement/index.html" },
        { source: "/accessibility-policy", destination: "/landing/accessibility-policy/index.html" },
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
