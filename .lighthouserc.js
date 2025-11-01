/** @type {import('@lhci/cli').LHCIConfig} */
module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run serve",
      url: ["http://localhost:3000/"],
      numberOfRuns: 3,
      settings: {
        preset: "mobile",
        formFactor: "mobile",
        screenEmulation: { mobile: true, width: 360, height: 640, disabled: false },
        throttling: { rttMs: 150, throughputKbps: 1638.4, cpuSlowdownMultiplier: 4 }
      },
      // Coleta extra: uma rodada desktop para comparação
      puppeteerScript: "./scripts/lhci-extra.js"
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { "minScore": 0.90 }],
        "categories:accessibility": ["warn", { "minScore": 0.95 }],
        "categories:best-practices": ["warn", { "minScore": 0.95 }],
        "categories:seo": ["warn", { "minScore": 0.95 }],
        // Regra ruidosa em páginas estáticas simples
        "uses-rel-preconnect": "off",
        "unused-javascript": "off"
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  }
};
