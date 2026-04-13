(function () {
  var translations = {
    en: {
      subtitle: "Senior iOS Engineer \u00b7 14+ years building iOS apps",
      aboutTitle: "About",
      aboutP1: "Nearly 10 years at Ocado Technology contributing to Ocado Smart Platform \u2014 a modular, multi-tenant e-commerce platform with iOS build targets for 12 retailers across 10+ markets (Aeon, Alcampo, Auchan, Bon Preu, ICA, Lotte, Monoprix, Morrisons, Naturalia, Panda, Voila and Zoom). Focused on code quality, modular architecture (50+ feature modules), testing, accessibility, and large-scale technical migrations (Objective-C \u2192 Swift, UIKit \u2192 SwiftUI, RxSwift \u2192 async/await).",
      aboutP2: "Outside of work, I also build my own projects, driven by two things I care about: nature and technology. I use AI as a multiplier across every phase \u2014 architecture, design, implementation, testing, localization, and even App Store preparation.",
      projectsTitle: "Projects",
      projectsNote: "Repos are private \u2014 TestFlight builds and demos available on request. SnapGPX is a mature, production-ready project I\u2019m preparing for the App Store. SmartCharge and PlanToWatch are proof-of-concept explorations to validate the feasibility of each idea.",
      snapgpxBadge: "TestFlight",
      snapgpxDesc: "Born from a love for outdoor activities. Export your Apple Health workouts to GPX \u2014 individually or in bulk \u2014 with route visualization, elevation charts, multi-segment route merging, individual multi-sport workout export to Strava, and support for 11 languages.",
      snapgpxHighlights: ["Unit tests, UI tests, localization (11 languages), accessibility", "Design system, feature-based architecture", "CI/CD: GitHub Actions + Xcode Cloud", "AI-driven development across every phase: architecture, design, implementation, testing, localization, market research, App Store copy"],
      smartchargeBadge: "Proof of Concept",
      smartchargeDesc: "Intelligent EV charging for Tesla vehicles. Optimizes for the lowest electricity prices (Spanish PVPC tariff), adapts to your usage patterns, and schedules charging automatically.",
      smartchargeHighlights: ["Tesla Fleet API integration: OAuth PKCE + Vehicle Command Protocol", "Price-optimized scheduling with historical data prediction", "Calendar awareness and proactive notifications", "125 unit tests, zero external dependencies"],
      plantowatchBadge: "Proof of Concept",
      plantowatchDesc: "Takes workout instructions from coaching apps \u2014 as screenshots, camera photos, or pasted text \u2014 and turns them into Custom Workouts that sync to Apple Watch via WorkoutKit.",
      plantowatchHighlights: ["On-device AI: Apple Foundation Models with @Generable, greedy sampling, post-validation", "Parser escalation: Foundation Models \u2192 Claude Haiku. Future: Gemma 4 via MLX Swift", "Flow: Screenshot/Camera/Text \u2192 OCR \u2192 Foundation Models \u2192 Edit \u2192 Apple Watch", "10 tests (8 active, 2 conditionally skipped for FM on physical device)"],
      aiTitle: "The AI Journey",
      aiP1: "AI-augmented development is still new territory for all of us. Over the past year, I\u2019ve been learning by doing \u2014 exploring the possibilities, hitting the limits, and iterating until things work.",
      aiP2: "SnapGPX has been my main playground. What started as a side project became a full exploration of what\u2019s possible when AI participates in every phase of development \u2014 not just writing code, but shaping architecture, designing a design system, setting up CI/CD, localizing to 11 languages, and even preparing App Store copy. 318 commits later (90% co-authored with Claude), the codebase has 38K lines of Swift across 194 files, with 93 refactoring passes, 578 tests (unit + UI), and 8 documented rule files that guide how AI and I collaborate.",
      aiP3: "One area where AI has been especially valuable is third-party API integration. Navigating the Strava API and Tesla Fleet API \u2014 with their OAuth flows and edge cases \u2014 became significantly faster with AI assistance. What used to take days of reading docs and trial-and-error now flows much more naturally.",
      aiP4: "Along the way, I\u2019ve gone through several iterations of skills, hooks, agents, and agent teams \u2014 learning what works and what doesn\u2019t. That experience led me to build the tools below to package what I\u2019ve learned into reusable resources.",
      aiP5: "SmartCharge (105 commits, 125 tests) and PlanToWatch (built in 6 days from idea to working prototype) each taught me something different \u2014 from integrating complex third-party APIs with AI assistance to exploring on-device Foundation Models.",
      aiP6: "This isn\u2019t about replacing engineering judgment \u2014 it\u2019s about amplifying it. The craft still matters. The AI just lets you go further.",
      templateDesc: "Reusable Claude Code setup for iOS projects: 12 skills, 4 audit agents, git hooks, rules, and commands.",
      marketplaceDesc: "Personal plugin marketplace for Claude Code with iOS development, workflow, and utility plugins.",
      stackTitle: "Tech Stack",
      stackLanguages: "Swift, Objective-C",
      stackUI: "SwiftUI, UIKit",
      stackArch: "MVVM, Clean Architecture, Modular SPM (50+ feature modules), Dependency Injection, Coordinators, SOLID",
      stackConcurrency: "async/await, Combine, RxSwift, GCD",
      stackTesting: "Swift Testing, XCTest, Unit Tests, Snapshot Testing, Integration Tests",
      stackTooling: "Xcode, Git, CI/CD (GitLab CI, GitHub Actions, Xcode Cloud), Fastlane, SPM",
      stackOther: "REST APIs, Design Systems, Accessibility, i18n/l10n, A/B Testing",
      stackAI: "Claude Code (skills/hooks/agents/plugins), Cursor, Gemini CLI, GitHub Copilot",
      footerNote: "Repos are private \u2014 TestFlight builds and demos available on request.",
      connectTitle: "Let\u2019s connect",
      connectNote: "I\u2019m always happy to collaborate on meaningful projects where craft and quality matter. I\u2019m especially excited about what AI is bringing to our field \u2014 it\u2019s changing how we build, and I want to be part of that conversation. Whether it\u2019s iOS, AI-augmented development, or just swapping trail stories, feel free to reach out.",
      langToggle: "ES",
      stackLblLanguages: "Languages", stackLblUI: "UI", stackLblArch: "Architecture", stackLblConcurrency: "Concurrency",
      stackLblTesting: "Testing", stackLblTooling: "Tooling", stackLblOther: "Other", stackLblAI: "AI"
    },
    es: {
      subtitle: "Senior iOS Engineer \u00b7 14+ a\u00f1os desarrollando apps iOS",
      aboutTitle: "Sobre m\u00ed",
      aboutP1: "Casi 10 a\u00f1os en Ocado Technology contribuyendo a Ocado Smart Platform, una plataforma e-commerce modular y multi-tenant con build targets iOS para 12 retailers en 10+ mercados (Aeon, Alcampo, Auchan, Bon Preu, ICA, Lotte, Monoprix, Morrisons, Naturalia, Panda, Voila y Zoom). Enfocado en calidad de c\u00f3digo, arquitectura modular (50+ feature modules), testing, accesibilidad y migraciones t\u00e9cnicas a gran escala (Objective-C \u2192 Swift, UIKit \u2192 SwiftUI, RxSwift \u2192 async/await).",
      aboutP2: "Adem\u00e1s, construyo mis propios proyectos, impulsado por dos cosas que me apasionan: la naturaleza y la tecnolog\u00eda. Uso la IA como multiplicador en cada fase: arquitectura, dise\u00f1o, implementaci\u00f3n, testing, localizaci\u00f3n y hasta la preparaci\u00f3n para App Store.",
      projectsTitle: "Proyectos",
      projectsNote: "Los repositorios son privados. Builds de TestFlight y demos disponibles a petici\u00f3n. SnapGPX es un proyecto maduro y listo para producci\u00f3n que estoy preparando para la App Store. SmartCharge y PlanToWatch son pruebas de concepto para validar la viabilidad de cada idea.",
      snapgpxBadge: "TestFlight",
      snapgpxDesc: "Nacida del amor por las actividades en la naturaleza. Exporta tus entrenamientos de Apple Health a GPX, individual o en lote, con visualizaci\u00f3n de rutas, gr\u00e1ficos de elevaci\u00f3n, combinaci\u00f3n de rutas multi-segmento, exportaci\u00f3n individual de entrenamientos multideporte a Strava y soporte para 11 idiomas.",
      snapgpxHighlights: ["Tests unitarios, tests de UI, localizaci\u00f3n (11 idiomas), accesibilidad", "Design system, arquitectura basada en features", "CI/CD: GitHub Actions + Xcode Cloud", "Desarrollo impulsado por IA en cada fase: arquitectura, dise\u00f1o, implementaci\u00f3n, testing, localizaci\u00f3n, estudio de mercado, textos App Store"],
      smartchargeBadge: "Prueba de Concepto",
      smartchargeDesc: "Carga inteligente de veh\u00edculos el\u00e9ctricos Tesla. Optimiza seg\u00fan los precios m\u00e1s baratos de electricidad (tarifa PVPC), se adapta a tus patrones de uso y programa la carga autom\u00e1ticamente.",
      smartchargeHighlights: ["Integraci\u00f3n Tesla Fleet API: OAuth PKCE + Vehicle Command Protocol", "Programaci\u00f3n optimizada por precio con predicci\u00f3n basada en datos hist\u00f3ricos", "Conciencia de calendario y notificaciones proactivas", "125 tests unitarios, cero dependencias externas"],
      plantowatchBadge: "Prueba de Concepto",
      plantowatchDesc: "Toma instrucciones de entrenamiento de apps de coaching (capturas de pantalla, fotos o texto) y las convierte en Custom Workouts que se sincronizan con el Apple Watch via WorkoutKit.",
      plantowatchHighlights: ["IA on-device: Apple Foundation Models con @Generable, greedy sampling, post-validaci\u00f3n", "Escalado de parser: Foundation Models \u2192 Claude Haiku. Futuro: Gemma 4 via MLX Swift", "Flujo: Captura/C\u00e1mara/Texto \u2192 OCR \u2192 Foundation Models \u2192 Edici\u00f3n \u2192 Apple Watch", "10 tests (8 activos, 2 condicionalmente omitidos para FM en dispositivo f\u00edsico)"],
      aiTitle: "El viaje con la IA",
      aiP1: "El desarrollo aumentado con IA es territorio nuevo para todos. Durante el \u00faltimo a\u00f1o, he aprendido haciendo: explorando las posibilidades, encontrando los l\u00edmites e iterando hasta que las cosas funcionan.",
      aiP2: "SnapGPX ha sido mi campo de pruebas principal. Lo que empez\u00f3 como un proyecto personal se convirti\u00f3 en una exploraci\u00f3n completa de lo que es posible cuando la IA participa en cada fase del desarrollo. No solo escribir c\u00f3digo, sino definir arquitectura, dise\u00f1ar un design system, configurar CI/CD, localizar a 11 idiomas y hasta preparar textos para la App Store. 318 commits despu\u00e9s (90% co-authored con Claude), el c\u00f3digo tiene 38K l\u00edneas de Swift en 194 archivos, con 93 pases de refactoring, 578 tests (unit + UI) y 8 archivos de reglas documentadas que gu\u00edan c\u00f3mo colaboramos la IA y yo.",
      aiP3: "Un \u00e1rea donde la IA ha sido especialmente valiosa es la integraci\u00f3n con APIs de terceros. Navegar la API de Strava y la Tesla Fleet API, con sus flujos OAuth y edge cases, se volvi\u00f3 significativamente m\u00e1s r\u00e1pido con asistencia de IA. Lo que antes llevaba d\u00edas de leer documentaci\u00f3n y prueba-error ahora fluye de forma mucho m\u00e1s natural.",
      aiP4: "Por el camino, he pasado por varias iteraciones de skills, hooks, agents y agent teams, aprendiendo qu\u00e9 funciona y qu\u00e9 no. Esa experiencia me llev\u00f3 a crear las herramientas de abajo para empaquetar lo aprendido en recursos reutilizables.",
      aiP5: "SmartCharge (105 commits, 125 tests) y PlanToWatch (construido en 6 d\u00edas desde la idea hasta el prototipo funcional) me ense\u00f1aron cosas diferentes: desde integrar APIs complejas de terceros con asistencia de IA hasta explorar Foundation Models on-device.",
      aiP6: "No se trata de reemplazar el criterio ingenieril, sino de amplificarlo. El oficio sigue importando. La IA simplemente te permite llegar m\u00e1s lejos.",
      templateDesc: "Setup reutilizable de Claude Code para proyectos iOS: 12 skills, 4 agentes de auditor\u00eda, git hooks, reglas y comandos.",
      marketplaceDesc: "Marketplace personal de plugins para Claude Code con plugins de desarrollo iOS, workflow y utilidades.",
      stackTitle: "Stack T\u00e9cnico",
      stackLanguages: "Swift, Objective-C",
      stackUI: "SwiftUI, UIKit",
      stackArch: "MVVM, Clean Architecture, SPM modular (50+ feature modules), Dependency Injection, Coordinators, SOLID",
      stackConcurrency: "async/await, Combine, RxSwift, GCD",
      stackTesting: "Swift Testing, XCTest, Tests Unitarios, Snapshot Testing, Tests de Integraci\u00f3n",
      stackTooling: "Xcode, Git, CI/CD (GitLab CI, GitHub Actions, Xcode Cloud), Fastlane, SPM",
      stackOther: "REST APIs, Design Systems, Accesibilidad, i18n/l10n, A/B Testing",
      stackAI: "Claude Code (skills/hooks/agents/plugins), Cursor, Gemini CLI, GitHub Copilot",
      footerNote: "Los repositorios son privados. Builds de TestFlight y demos disponibles a petici\u00f3n.",
      connectTitle: "Contacto",
      connectNote: "Siempre encantado de colaborar en proyectos donde la calidad y el buen hacer importan. Estoy especialmente entusiasmado con lo que la IA est\u00e1 trayendo a nuestro campo. Est\u00e1 cambiando c\u00f3mo construimos, y quiero ser parte de esa conversaci\u00f3n. Ya sea iOS, desarrollo aumentado con IA, o simplemente compartir historias de monta\u00f1a, no dudes en contactarme.",
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
