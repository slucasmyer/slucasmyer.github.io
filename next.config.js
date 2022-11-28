/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/',
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
    config.experiments = { ...config.experiments, asyncWebAssembly: true }
    return config
  },
}

