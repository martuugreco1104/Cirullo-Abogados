
const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

html = html.replace(
    `<span class="text-[10px] sm:text-xs font-bold tracking-wider text-brand-petrol uppercase">ESTUDIO JURÍDICO · ESPECIALISTA EN DERECHO PENAL</span>`,
    `<span class="text-[10px] sm:text-xs font-bold tracking-wider text-brand-petrol uppercase text-center block leading-relaxed">ESTUDIO JURÍDICO<br><span class="opacity-80">CABA · Provincia de Buenos Aires</span></span>`
);
html = html.replace(
    `Asesoramiento y representación jurídica con un abordaje profesional, personalizado y cercano. Respuestas claras y acción rápida en momentos donde una decisión importa.`,
    `Asesoramiento y representación jurídica con un abordaje profesional, personalizado y cercano.`
);
html = html.replace(
    `<span>Consulta Urgente por WhatsApp</span>`,
    `<span>Hacé tu consulta</span>`
);
html = html.replace(
    `<span class="font-bold text-brand-petrol uppercase tracking-wide text-xs">Guardia activa</span>`,
    `<span class="font-bold text-brand-petrol uppercase tracking-wide text-xs">ATENCIÓN URGENTE 24 HS.</span>`
);
html = html.replace(
    `Atención inmediata ante detenciones, allanamientos y citaciones en CABA y PBA.`,
    `Intervención penal inmediata en CABA & Provincia de Buenos Aires.`
);

html = html.replace(
    `Soy <strong>Camila Cirullo</strong>, abogada egresada de la Universidad de Buenos Aires (UBA), matriculada para litigar tanto en la Ciudad Autónoma de Buenos Aires como en la Provincia de Buenos Aires.`,
    `Soy <strong>Camila Cirullo</strong>, abogada egresada de la Universidad de Buenos Aires (UBA), matriculada para litigar tanto en la Ciudad Autónoma de Buenos Aires, Provincia de Buenos Aires y ante la Justicia Federal.`
);
html = html.replace(
    `Abordo cada situación desde una mirada estratégica, evaluando las alternativas y los distintos escenarios para definir el abordaje jurídico más adecuado y eficaz para cada caso particular.`,
    `Abordo cada situación desde una mirada estratégica, evaluando las alternativas y los distintos escenarios para definir el abordaje jurídico más adecuado.`
);
html = html.replace(
    `Entiendo la abogacía como una práctica profesional rigurosa, pero también como la capacidad de <strong>explicar con claridad aquello que muchas veces resulta complejo</strong>, acompañar y estar presente cuando una decisión jurídica importa.`,
    `Entiendo la abogacía como una práctica profesional, pero también como la capacidad de <strong>explicar con claridad aquello que muchas veces resulta complejo</strong>, acompañar y estar presente cuando una decisión jurídica importa.`
);

// Pillars
html = html.replace(
    /<div class=\"grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-brand-creamDark\">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
    `<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 pt-8 border-t border-brand-creamDark">
              <div>
                <div class="text-brand-petrol font-bold text-sm mb-1 flex items-center gap-1.5">
                  <i class="ph ph-handshake text-brand-accent text-lg"></i>
                  Trato Directo
                </div>
                <p class="text-xs text-slate-600">Comunicación personal constante con tu abogada de cabecera.</p>
              </div>

              <div>
                <div class="text-brand-petrol font-bold text-sm mb-1 flex items-center gap-1.5">
                  <i class="ph ph-lock-key text-brand-accent text-lg"></i>
                  Confidencialidad
                </div>
                <p class="text-xs text-slate-600">Reserva y ética profesional garantizada en cada proceso.</p>
              </div>
            </div></div></div>`
);

// Badge over image
html = html.replace(
    `<!-- Badge de matriculación superpuesto -->
                <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-brand-creamDark shadow-sm text-center">
                  <p class="text-sm font-bold text-brand-petrol mb-1">Dra. Camila Cirullo</p>
                  <p class="text-[11px] text-slate-600 mb-1">Abogada • Universidad de Buenos Aires (UBA)</p>
                  <p class="text-[9.5px] font-bold text-brand-accent uppercase tracking-wider">Matriculada CPACF · Colegios de Abogados PBA</p>
                </div>`,
    ""
);

html = html.replace(
    `<img src="Foto.jpeg" \n                     alt="Dra. Camila Cirullo - Abogada UBA" \n                     class="w-full h-[450px] object-cover object-top filter brightness-[0.98]">\n                \n              </div>`,
    `<img src="Foto.jpeg" alt="Dra. Camila Cirullo - Abogada UBA" class="w-full h-[450px] object-cover object-top filter brightness-[0.98]"></div><div class="relative -mt-6 mx-4 bg-white rounded-2xl p-4 border border-brand-creamDark shadow-elevated text-center z-10"><p class="text-base font-serif font-bold text-brand-petrol mb-1">Dra. Camila Cirullo</p><p class="text-xs text-brand-accent font-semibold tracking-wider">T° 157 F° 432 (CPACF)</p>`
);

html = html.replace(
    `Asesoramiento y representación jurídica en materia penal, tanto en la defensa de personas imputadas como en la representación de víctimas. Abordamos cada caso de manera integral, atendiendo a las particularidades de cada etapa del proceso.`,
    `Asesoramiento y representación jurídica en materia penal. Abordamos cada caso de manera integral, atendiendo a las particularidades de cada etapa del proceso.`
);

html = html.replace(
    `<span class="text-sm text-slate-700 leading-snug">Excarcelaciones</span>\n              </li>`,
    `<span class="text-sm text-slate-700 leading-snug">Excarcelaciones y exenciones de prisión</span>\n              </li>\n              <li class="flex items-start gap-3">\n                <span class="inline-flex flex-shrink-0 mt-[2px]"><i class="ph ph-check-circle text-slate-800 text-[18px] leading-none"></i></span>\n                <span class="text-sm text-slate-700 leading-snug">Asistencia a víctimas</span>\n              </li>`
);

html = html.replace(
    `Orientación y acompañamiento jurídica en conflictos familiares`,
    `Orientación y acompañamiento jurídico en conflictos familiares`
);

html = html.replace(
    `CABA y Provincia de Buenos Aires`,
    `CABA & PROV. DE BUENOS AIRES`
);

html = html.replace(
    `<span>CPACF (CABA)</span>\n          <span class="text-brand-accent mx-1">•</span>\n          <span>Colegio de Abogados (PBA)</span>\n          <span class="text-brand-accent mx-1">•</span>\n          <span>Buenos Aires, Argentina</span>`,
    `<span>Buenos Aires, Argentina</span>`
);

html = html.replace(
    `<p>© 2026 Cirullo Abogados. Todos los derechos reservados.</p>`,
    `<div class="flex items-center gap-4">\n          <a href="#" class="text-white hover:text-brand-accent transition-colors" aria-label="LinkedIn"><i class="ph ph-linkedin-logo text-2xl"></i></a>\n          <a href="#" class="text-white hover:text-brand-accent transition-colors" aria-label="Instagram"><i class="ph ph-instagram-logo text-2xl"></i></a>\n        </div>\n        <p>© 2026 Cirullo Abogados. Todos los derechos reservados.</p>`
);

// Reordering sections
let heroMatch = html.match(/<!-- HERO SECTION -->[\s\S]*?<\/section>/)[0];
let servMatch = html.match(/<!-- SECCIÓN SERVICIOS -->[\s\S]*?<\/section>/)[0];
let sobMatch = html.match(/<!-- SECCIÓN QUIÉN ESTÁ DETRÁS \/ SOBRE MÍ -->[\s\S]*?<\/section>/)[0];

html = html.replace(heroMatch, "");
html = html.replace(servMatch, "");
html = html.replace(sobMatch, "");

let newOrder = heroMatch + "\n\n    " + sobMatch + "\n\n    " + servMatch;
html = html.replace("<main>", "<main>\n    " + newOrder);

fs.writeFileSync("index.html", html, "utf8");
