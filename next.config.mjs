/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["geist"],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/cio-static/index.html",
        },
        {
          source: "/about",
          destination: "/cio-static/about/index.html",
        },
        {
          source: "/about/:path*",
          destination: "/cio-static/about/:path*/index.html",
        },
        {
          source: "/news",
          destination: "/cio-static/news/index.html",
        },
        {
          source: "/news/:path*",
          destination: "/cio-static/news/:path*/index.html",
        },
        {
          source: "/policies-and-priorities",
          destination: "/cio-static/policies-and-priorities/index.html",
        },
        {
          source: "/policies-and-priorities/:path*",
          destination: "/cio-static/policies-and-priorities/:path*/index.html",
        },
        {
          source: "/privacy-statement",
          destination: "/cio-static/privacy-statement/index.html",
        },
        {
          source: "/accessibility-policy",
          destination: "/cio-static/accessibility-policy/index.html",
        },
        {
          source: "/resources",
          destination: "/cio-static/resources/index.html",
        },
        {
          source: "/resources/:path*",
          destination: "/cio-static/resources/:path*/index.html",
        },
        {
          source: "/handbook",
          destination: "/cio-static/handbook/index.html",
        },
        {
          source: "/handbook/:path*",
          destination: "/cio-static/handbook/:path*/index.html",
        },
        {
          source: "/government-technology-jobs",
          destination: "/cio-static/government-technology-jobs/index.html",
        },
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
