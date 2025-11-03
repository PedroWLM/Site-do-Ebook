/** Config do Lighthouse CI — assert desligado para nunca quebrar o workflow */
module.exports = {
  ci: {
    collect: {
      staticDistDir: ".",
      numberOfRuns: 1,
      settings: {
        output: "html",
        locale: "pt-BR",
        formFactor: "desktop",
        screenEmulation: {
          mobile: false,
          width: 1366,
          height: 768,
          deviceScaleFactor: 1,
          disabled: false
        }
      }
    },
    upload: {
      target: "temporary-public-storage"
    },
    assert: {
      // Desliga todas as checagens que retornam exit code != 0
      assertions: {
        "*": "off"
      }
    }
  }
};
