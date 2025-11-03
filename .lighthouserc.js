module.exports = {
  ci: {
    collect: {
      // usamos site estático (raiz do repo)
      staticDistDir: ".",
      numberOfRuns: 1,
      settings: {
        // evita falhas por sandbox/Headless no runner
        chromeFlags: "--no-sandbox",
      },
    },
    assert: {
      // não queremos que o workflow "falhe" por nota baixa
      preset: "lighthouse:no-pwa",
      assertions: {
        // opcional: apenas warnings nas categorias
        "categories:performance": ["warn", { minScore: 0.6 }],
        "categories:accessibility": ["warn", { minScore: 0.7 }],
        "categories:best-practices": ["warn", { minScore: 0.7 }],
        "categories:seo": ["warn", { minScore: 0.7 }],
      },
    },
    upload: {
      // também publicamos no storage temporário (link aparece no log)
      target: "temporary-public-storage",
    },
  },
};
