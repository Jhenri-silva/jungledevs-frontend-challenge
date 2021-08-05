/* eslint-disable import/no-extraneous-dependencies */
/* global require */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    /* global process */
    enabled: process.env.ANALYZE === 'true',
})

/* global module */
module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
})
