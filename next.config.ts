import type { NextConfig } from 'next';

// GitHub Pages ではリポジトリ配下（/oi-expo-site/）に配信されるため、
// production ビルド時のみ basePath と assetPrefix を付与する。
const repoName = 'oi-expo-site';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
