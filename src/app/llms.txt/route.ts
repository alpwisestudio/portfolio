import { contact, faqs, features, serviceHref, services, site, siteUrl, steps } from '@/content/site';

// /llms.txt: riassunto in Markdown per gli assistenti AI (https://llmstxt.org). Generato dagli stessi testi del sito.
export const dynamic = 'force-static';

export function GET() {
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `Studio di consulenza digitale e sviluppo software con sede a ${site.locality} (${site.province}), ${site.region}. Lavora con PMI, attività locali e studi professionali. Lingua: italiano.`,
    '',
    '## Servizi',
    '',
    ...services.map((s) => `- **[${s.name}](${siteUrl}${serviceHref(s)})**: ${s.lead} ${s.text} (${s.points.map((p) => p.title).join(', ')})`),
    '',
    '## Come lavoriamo',
    '',
    ...steps.map((s, i) => `${i + 1}. **${s.title}**: ${s.text}`),
    '',
    '## Domande',
    '',
    ...faqs.map((f) => `- **${f.q}** ${f.a}`),
    '',
    '## Contatti',
    '',
    `- Sede: ${contact.address}`,
    `- Tempi di risposta: ${contact.reply.toLowerCase()}`,
    ...(contact.email ? [`- Email: ${contact.email}`] : []),
    ...(contact.phone ? [`- Telefono: ${contact.phone}`] : []),
    ...(features.contactForm ? [`- Modulo: ${siteUrl}/contatti`] : []),
    '',
    '## Pagine',
    '',
    `- [Home](${siteUrl}/): come lavoriamo, servizi, case study, studio e domande`,
    ...services.map((s) => `- [${s.name}](${siteUrl}${serviceHref(s)}): ${s.page.seo.description}`),
    `- [Alpwise book](${siteUrl}/book): prenotazioni online per ristoranti, il gestionale costruito dallo studio`,
    `- [Contatti](${siteUrl}/contatti): raccontaci il tuo progetto`,
    ...(features.legal ? [`- [Privacy](${siteUrl}/privacy)`, `- [Cookie](${siteUrl}/cookie)`] : []),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
