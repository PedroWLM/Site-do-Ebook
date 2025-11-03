module.exports = {
  ci: {
    collect: {
      staticDistDir: ".",
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--no-sandbox --headless",
      },
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": "off",
        "categories:accessibility": "off",
        "categories:best-practices": "off",
        "categories:seo": "off",
      },
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
