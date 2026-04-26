/** @type {import('next').NextConfig} */
const nextConfig = {
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
  webpack(config, { dev }) {
    if (dev) {
      // Stop webpack from watching public/ — static assets are not part of the
      // JS module graph, so changes there should never trigger a recompile.
      // Use a RegExp (not an array) to avoid webpack's strict array-element schema.
      config.watchOptions = {
        ...config.watchOptions,
        ignored: /[\\/](node_modules|\.next|public)[\\/]/,
      };
      // Use named (path-based string) chunk IDs instead of the default sequential
      // numeric IDs. Sequential IDs drift on every HMR recompile — the stale
      // webpack-runtime.js still references the old ID (e.g. './950.js') which
      // no longer exists, causing "Cannot find module './950.js'" errors.
      // 'named' IDs are stable across recompiles and never produce 'undefined'
      // (unlike 'deterministic', which hashes virtual modules to undefined for
      // next/font/local, causing './undefined.js' errors).
      config.optimization = {
        ...config.optimization,
        chunkIds: "named",
      };
    }
    return config;
  },
};

export default nextConfig;
