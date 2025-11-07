import { withSentryConfig } from '@sentry/nextjs';

const isProd = process.env.NODE_ENV === 'production';
const repo = 'My-portfolio';  

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? `/${repo}/` : '',
  basePath: isProd ? `/${repo}` : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
};

export default withSentryConfig(
  nextConfig,
  {
    silent: true,
    org: "javascript-mastery",
    project: "javascript-nextjs",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
