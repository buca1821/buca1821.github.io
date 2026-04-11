(function () {
  var translations = {
    en: {
      subtitle: "Senior iOS Engineer \u00b7 14+ years building iOS apps",
      aboutTitle: "About",
      aboutP1: "Nearly 10 years at Ocado Technology contributing to Ocado Smart Platform \u2014 a modular, multi-tenant e-commerce platform powering 13 retail partners across 11 markets (Marks & Spencer, Kroger, AEON, Coles, and others). Focused on code quality, modular architecture, testing, and large-scale technical migrations (Objective-C \u2192 Swift, UIKit \u2192 SwiftUI, RxSwift \u2192 Combine/async-await).",
      aboutP2: "Now building personal projects, using AI as a multiplier across every phase of development: architecture, implementation, design, testing, localization, CI/CD, market research, and App Store preparation.",
      projectsTitle: "Projects",
      projectsNote: "Repos are private \u2014 TestFlight builds and demos available on request.",
      snapgpxBadge: "App Store",
      snapgpxDesc: "Born from a love for trail running and hiking. Export your Apple Health workouts to GPX \u2014 individually or in bulk \u2014 with route visualization, elevation charts, multi-segment route merging, individual multi-sport workout export to Strava, and support for 11 languages.",
      snapgpxHighlights: ["Unit tests, UI tests, localization (11 languages), accessibility", "Design system, feature-based architecture", "CI/CD: GitHub Actions + Xcode Cloud", "AI-driven development across every phase: architecture, design, implementation, testing, localization, market research, App Store copy"],
      smartchargeBadge: "Proof of Concept",
      smartchargeDesc: "Intelligent EV charging for Tesla vehicles. Optimizes for the lowest electricity prices (Spanish PVPC tariff), learns your habits, and schedules charging automatically.",
      smartchargeHighlights: ["Tesla Fleet API integration: OAuth PKCE + Vehicle Command Protocol", "Price-optimized scheduling with historical data prediction", "Calendar awareness and proactive notifications", "125 unit tests, zero external dependencies"],
      plantowatchBadge: "Proof of Concept",
      plantowatchDesc: "Takes workout instructions from coaching apps \u2014 as screenshots, camera photos, or pasted text \u2014 and turns them into Custom Workouts that sync to Apple Watch via WorkoutKit.",
      plantowatchHighlights: ["On-device AI: Apple Foundation Models with @Generable, greedy sampling, post-validation", "Parser escalation: Foundation Models \u2192 Claude Haiku. Future: Gemma 4 via MLX Swift", "Flow: Screenshot/Camera/Text \u2192 OCR \u2192 Foundation Models \u2192 Edit \u2192 Apple Watch", "10 tests (8 active, 2 conditionally skipped for FM on physical device)"],
      aiTitle: "AI-Augmented Development",
      aiIntro: "Early adopter of AI-augmented development. Advanced customization of Claude Code with skills, hooks, agents, and plugins to automate the full development cycle.",
      templateDesc: "Reusable Claude Code setup for iOS projects: 12 skills, 4 audit agents, git hooks, rules, and commands.",
      marketplaceDesc: "Personal plugin marketplace for Claude Code with iOS development, workflow, and utility plugins.",
      stackTitle: "Tech Stack",
      stackLanguages: "Swift, Objective-C",
      stackUI: "SwiftUI, UIKit",
      stackArch: "MVVM, Clean Architecture, Modular SPM (39+ modules), DI Containers, Coordinators, SOLID",
      stackConcurrency: "async/await, Combine, RxSwift, GCD",
      stackTesting: "Swift Testing, XCTest, Unit Tests, Snapshot Testing, Integration Tests",
      stackTooling: "Xcode, Git, CI/CD (GitLab CI, GitHub Actions, Xcode Cloud), Fastlane, SPM",
      stackOther: "REST APIs, Design Systems, Accessibility, i18n/l10n, A/B Testing",
      stackAI: "Claude Code (skills/hooks/agents/plugins), Cursor, Gemini CLI, GitHub Copilot",
      footerNote: "Repos are private \u2014 TestFlight builds and demos available on request.",
      langToggle: "ES",
      stackLblLanguages: "Languages", stackLblUI: "UI", stackLblArch: "Architecture", stackLblConcurrency: "Concurrency",
      stackLblTesting: "Testing", stackLblTooling: "Tooling", stackLblOther: "Other", stackLblAI: "AI"
    },
    es: {
      subtitle: "Senior iOS Engineer \u00b7 14+ a\u00f1os desarrollando apps iOS",
      aboutTitle: "Sobre m\u00ed",
      aboutP1: "Casi 10 a\u00f1os en Ocado Technology contribuyendo a Ocado Smart Platform \u2014 una plataforma e-commerce modular y multi-tenant usada por 13 socios minoristas en 11 mercados (Marks & Spencer, Kroger, AEON, Coles, entre otros). Enfocado en calidad de c\u00f3digo, arquitectura modular, testing y migraciones t\u00e9cnicas a gran escala (Objective-C \u2192 Swift, UIKit \u2192 SwiftUI, RxSwift \u2192 Combine/async-await).",
      aboutP2: "Ahora construyendo proyectos personales, usando IA como multiplicador en cada fase del desarrollo: arquitectura, implementaci\u00f3n, dise\u00f1o, testing, localizaci\u00f3n, CI/CD, estudio de mercado y preparaci\u00f3n para App Store.",
      projectsTitle: "Proyectos",
      projectsNote: "Los repositorios son privados \u2014 builds de TestFlight y demos disponibles a petici\u00f3n.",
      snapgpxBadge: "App Store",
      snapgpxDesc: "Nacida del amor por el trail running y el senderismo. Exporta tus entrenamientos de Apple Health a GPX \u2014 individual o en lote \u2014 con visualizaci\u00f3n de rutas, gr\u00e1ficos de elevaci\u00f3n, combinaci\u00f3n de rutas multi-segmento, exportaci\u00f3n individual de entrenamientos multideporte a Strava, y soporte para 11 idiomas.",
      snapgpxHighlights: ["Tests unitarios, tests de UI, localizaci\u00f3n (11 idiomas), accesibilidad", "Design system, arquitectura basada en features", "CI/CD: GitHub Actions + Xcode Cloud", "Desarrollo impulsado por IA en cada fase: arquitectura, dise\u00f1o, implementaci\u00f3n, testing, localizaci\u00f3n, estudio de mercado, textos App Store"],
      smartchargeBadge: "Prueba de Concepto",
      smartchargeDesc: "Carga inteligente de veh\u00edculos el\u00e9ctricos Tesla. Optimiza seg\u00fan los precios m\u00e1s baratos de electricidad (tarifa PVPC), aprende tus h\u00e1bitos y programa la carga autom\u00e1ticamente.",
      smartchargeHighlights: ["Integraci\u00f3n Tesla Fleet API: OAuth PKCE + Vehicle Command Protocol", "Programaci\u00f3n optimizada por precio con predicci\u00f3n basada en datos hist\u00f3ricos", "Conciencia de calendario y notificaciones proactivas", "125 tests unitarios, cero dependencias externas"],
      plantowatchBadge: "Prueba de Concepto",
      plantowatchDesc: "Toma instrucciones de entrenamiento de apps de coaching \u2014 capturas de pantalla, fotos o texto \u2014 y las convierte en Custom Workouts que se sincronizan con el Apple Watch via WorkoutKit.",
      plantowatchHighlights: ["IA on-device: Apple Foundation Models con @Generable, greedy sampling, post-validaci\u00f3n", "Escalado de parser: Foundation Models \u2192 Claude Haiku. Futuro: Gemma 4 via MLX Swift", "Flujo: Captura/C\u00e1mara/Texto \u2192 OCR \u2192 Foundation Models \u2192 Edici\u00f3n \u2192 Apple Watch", "10 tests (8 activos, 2 condicionalmente omitidos para FM en dispositivo f\u00edsico)"],
      aiTitle: "Desarrollo Aumentado con IA",
      aiIntro: "Early adopter del desarrollo asistido por IA. Personalizaci\u00f3n avanzada de Claude Code con skills, hooks, agents y plugins para automatizar el ciclo completo de desarrollo.",
      templateDesc: "Setup reutilizable de Claude Code para proyectos iOS: 12 skills, 4 agentes de auditor\u00eda, git hooks, reglas y comandos.",
      marketplaceDesc: "Marketplace personal de plugins para Claude Code con plugins de desarrollo iOS, workflow y utilidades.",
      stackTitle: "Stack T\u00e9cnico",
      stackLanguages: "Swift, Objective-C",
      stackUI: "SwiftUI, UIKit",
      stackArch: "MVVM, Clean Architecture, SPM modular (39+ m\u00f3dulos), DI Containers, Coordinators, SOLID",
      stackConcurrency: "async/await, Combine, RxSwift, GCD",
      stackTesting: "Swift Testing, XCTest, Tests Unitarios, Snapshot Testing, Tests de Integraci\u00f3n",
      stackTooling: "Xcode, Git, CI/CD (GitLab CI, GitHub Actions, Xcode Cloud), Fastlane, SPM",
      stackOther: "REST APIs, Design Systems, Accesibilidad, i18n/l10n, A/B Testing",
      stackAI: "Claude Code (skills/hooks/agents/plugins), Cursor, Gemini CLI, GitHub Copilot",
      footerNote: "Los repositorios son privados \u2014 builds de TestFlight y demos disponibles a petici\u00f3n.",
      langToggle: "EN",
      stackLblLanguages: "Lenguajes", stackLblUI: "UI", stackLblArch: "Arquitectura", stackLblConcurrency: "Concurrencia",
      stackLblTesting: "Testing", stackLblTooling: "Herramientas", stackLblOther: "Otros", stackLblAI: "IA"
    }
  };

  function detectLang() {
    var stored = localStorage.getItem("lang");
    if (stored) return stored;
    var nav = navigator.language || navigator.userLanguage || "en";
    return nav.startsWith("es") ? "es" : "en";
  }

  function applyLang(lang) {
    var t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] != null) el.textContent = t[key];
    });
    var highlightKeys = ["snapgpxHighlights", "smartchargeHighlights", "plantowatchHighlights"];
    highlightKeys.forEach(function (key) {
      var ul = document.querySelector('[data-i18n-list="' + key + '"]');
      if (ul && t[key]) {
        ul.innerHTML = "";
        t[key].forEach(function (item) {
          var li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });
      }
    });
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var lang = detectLang();
    applyLang(lang);
    document.querySelector(".lang-toggle").addEventListener("click", function () {
      var current = localStorage.getItem("lang") || detectLang();
      var next = current === "en" ? "es" : "en";
      applyLang(next);
    });
  });
})();
