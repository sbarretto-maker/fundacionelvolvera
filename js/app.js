{
/* ============================================================
   Fundación El Volverá · sitio bilingüe (español / English)
   El contenido editable vive en /content/*.json
   ============================================================ */

const T = {
  es: {
    saltar:"Ir al contenido", menu:"Menú",
    nav_inicio:"Inicio", nav_jesus:"Conoce a Jesús", nav_biblia:"Biblia", nav_recursos:"Recursos",
    nav_actividades:"Actividades", nav_noticias:"Noticias", nav_finanzas:"Finanzas", nav_nosotros:"Nosotros", nav_donar:"Donar",
    pie_t:"Fundación El Volverá", pie_n:"Navegar",
    pie_p:"Fundación sin fines de lucro constituida en la República de Panamá para proclamar el Evangelio y la venida de Jesucristo.",
    hero_t:"Él volverá", hero_s:"Proclamamos el Evangelio a todas las naciones",
    hero_p:"Una fundación panameña que comparte las buenas nuevas de salvación con la Palabra de Dios, en español y en inglés, por todos los medios a nuestro alcance.",
    hero_b1:"Conoce a Jesús", hero_b2:"Apoya la misión",
    gc_t:"La Gran Comisión", gc_p:"Nuestro propósito nace de estas palabras de Jesús.",
    sec_t:"Qué encontrarás aquí", sec_p:"Todo está organizado para que puedas llegar rápido a lo que buscas.",
    s_jesus:"Una guía sencilla para quien quiere conocer a Jesús y su mensaje.",
    s_biblia:"La Palabra de Dios en Reina-Valera 1960 y King James.",
    s_recursos:"Videos, audios, podcasts, películas y publicaciones para compartir.",
    s_actividades:"Foros, debates, estudios bíblicos y eventos.",
    s_noticias:"Lo que está pasando en la fundación.",
    s_finanzas:"Cada dólar, a la vista: informes y estados auditados.",
    ver:"Ver", ultimas:"Últimas noticias", todas:"Ver todas las noticias",
    trans_t:"Transparencia total", trans_p:"Creemos que quien da con generosidad merece saber cómo se usa cada donación. Publicamos nuestros números y estados financieros auditados.",
    trans_b:"Ver las finanzas",
    jesus_t:"Conoce a Jesús", jesus_p:"Si nunca has escuchado el mensaje de Jesús, o quieres entenderlo mejor, aquí está lo esencial en cuatro pasos, con la Biblia en la mano.",
    p1_t:"Dios te ama", p2_t:"Todos hemos pecado", p3_t:"Jesús pagó por ti", p4_t:"Recíbelo por la fe",
    oracion_t:"Una oración sencilla",
    oracion:"Señor Jesús, reconozco que soy pecador y que necesito tu perdón. Creo que moriste en la cruz por mis pecados y que resucitaste. Hoy te recibo como mi Señor y Salvador. Gracias por el regalo de la vida eterna. Amén.",
    oracion_n:"Las palabras no salvan por sí mismas; lo que importa es la fe sincera en Jesucristo.",
    hablar_t:"¿Quieres hablar con alguien?", hablar_p:"Si hiciste esta oración o tienes preguntas, escríbenos. Con gusto te acompañamos y te ayudamos a encontrar una iglesia cerca de ti.",
    escribir:"Escríbenos",
    biblia_t:"La Biblia", biblia_p:"Leemos y compartimos la Palabra de Dios en dos versiones clásicas: la Reina-Valera 1960 en español y la King James en inglés.",
    rv60_p:"La traducción más leída en el mundo de habla hispana.", kjv_p:"La versión clásica en inglés, publicada en 1611.",
    leer:"Leer en línea", buscar_t:"Buscar un pasaje", pasaje:"Pasaje (por ejemplo: Juan 3:16)", version:"Versión", buscar:"Buscar",
    clave_t:"Versículos clave", clave_p:"Los mismos pasajes, lado a lado en las dos versiones.",
    biblia_n:"El texto completo se abre en BibleGateway. Para publicar la RV60 completa dentro de este sitio hace falta permiso de Sociedades Bíblicas Unidas; la King James es de dominio público.",
    rec_t:"Recursos", rec_p:"Material para crecer en la fe y compartir el mensaje de salvación.",
    f_todo:"Todo", f_video:"Videos", f_audio:"Audios", f_podcast:"Podcasts", f_pelicula:"Películas", f_publicacion:"Publicaciones",
    t_video:"Video", t_audio:"Audio", t_podcast:"Podcast", t_pelicula:"Película", t_publicacion:"Publicación",
    abrir:"Abrir", descargar:"Descargar", pronto:"Disponible pronto", vacio:"Aún no hay contenido en esta categoría.",
    act_t:"Actividades", act_p:"Encuentros para estudiar la Biblia, conversar y dar a conocer el Evangelio. Abiertos a todos.",
    f_estudio:"Estudios bíblicos", f_debate:"Debates", f_foro:"Foros", f_evento:"Eventos",
    t_estudio:"Estudio bíblico", t_debate:"Debate", t_foro:"Foro", t_evento:"Evento",
    inscribir:"Más información", foro_t:"Foro en línea",
    foro_p:"Estamos preparando un espacio en línea para preguntas y conversación. Mientras tanto, escríbenos y te responderemos personalmente.",
    not_t:"Noticias", not_p:"Novedades de la fundación y de la obra.", leer_mas:"Leer más",
    fin_t:"Finanzas y transparencia", fin_p:"Publicamos cómo recibimos y usamos cada donación. Los estados financieros son revisados por auditores independientes.",
    periodo:"Período", ingresos:"Ingresos", gastos:"Gastos", saldo:"Saldo del período", concepto:"Concepto", monto:"Monto", total:"Total", porc:"%",
    docs_t:"Documentos", docs_p:"Estados auditados, informes y documentos legales en PDF.",
    d_auditado:"Estado auditado", d_informe:"Informe", d_legal:"Documento legal",
    ejemplo:"Cifras y documentos de ejemplo para mostrar el diseño; se reemplazarán por los reales.",
    donar_t:"Apoya la misión", donar_p:"Tu donación ayuda a llevar el Evangelio a más personas, en Panamá y en todo el mundo. Gracias por sembrar en esta obra.",
    yappy_p:"Desde Panamá, con tu celular. Abre Yappy, busca la fundación por su nombre en el directorio y envía tu donación.", yappy_buscar:"Busca en el directorio",
    paypal_p:"Desde cualquier país, con tarjeta o cuenta PayPal.", paypal_b:"Donar con PayPal",
    banco_t:"Transferencia bancaria", banco_p:"Para donaciones grandes o desde el exterior.",
    numero:"Número", nombre:"A nombre de", cuenta:"Cuenta", swift:"SWIFT", banco:"Banco",
    copiar:"Copiar", copiado:"Copiado", por_confirmar:"Por confirmar",
    donar_n:"Al donar recibirás nuestro agradecimiento por correo. Si necesitas un comprobante, escríbenos.",
    ver_finanzas:"Mira cómo usamos las donaciones",
    nos_t:"Quiénes somos",
    nos_p1:"La Fundación El Volverá es una organización sin fines de lucro constituida en la República de Panamá. Existimos para proclamar el Evangelio de Jesucristo y anunciar su regreso, en obediencia a la Gran Comisión (Mateo 28:18-20).",
    nos_p2:"Lo hacemos con todos los medios disponibles: publicaciones, audios, videos, podcasts, películas, foros, debates y actividades presenciales, siempre con la Biblia como base.",
    mision:"Misión", mision_p:"Llevar las buenas nuevas de salvación a todas las personas y orientar a quienes aún no conocen a Jesús.",
    vision:"Visión", vision_p:"Que en cada nación haya quien escuche, crea y espere con esperanza el regreso de Cristo.",
    creemos:"Lo que creemos", creemos_p:"Que la Biblia es la Palabra de Dios, que la salvación es por gracia mediante la fe en Jesucristo, y que Él volverá.",
    contacto:"Contacto", correo:"Correo", ubicacion:"Ubicación",
    error:"No se pudo cargar este contenido. Intenta recargar la página."
  },
  en: {
    saltar:"Skip to content", menu:"Menu",
    nav_inicio:"Home", nav_jesus:"Meet Jesus", nav_biblia:"Bible", nav_recursos:"Resources",
    nav_actividades:"Activities", nav_noticias:"News", nav_finanzas:"Finances", nav_nosotros:"About us", nav_donar:"Give",
    pie_t:"El Volverá Foundation", pie_n:"Explore",
    pie_p:"A nonprofit foundation established in the Republic of Panama to proclaim the Gospel and the coming of Jesus Christ.",
    hero_t:"He will return", hero_s:"Proclaiming the Gospel to all nations",
    hero_p:"A Panamanian foundation sharing the good news of salvation through God's Word, in Spanish and English, by every means we can.",
    hero_b1:"Meet Jesus", hero_b2:"Support the mission",
    gc_t:"The Great Commission", gc_p:"Our purpose comes from these words of Jesus.",
    sec_t:"What you will find here", sec_p:"Everything is organized so you can quickly reach what you are looking for.",
    s_jesus:"A simple guide for anyone who wants to know Jesus and His message.",
    s_biblia:"God's Word in the Reina-Valera 1960 and the King James Version.",
    s_recursos:"Videos, audio, podcasts, films and publications to share.",
    s_actividades:"Forums, debates, Bible studies and events.",
    s_noticias:"What is happening at the foundation.",
    s_finanzas:"Every dollar in plain view: reports and audited statements.",
    ver:"View", ultimas:"Latest news", todas:"See all news",
    trans_t:"Full transparency", trans_p:"We believe those who give generously deserve to know how every gift is used. We publish our figures and audited financial statements.",
    trans_b:"See the finances",
    jesus_t:"Meet Jesus", jesus_p:"If you have never heard the message of Jesus, or want to understand it better, here is the heart of it in four steps, Bible in hand.",
    p1_t:"God loves you", p2_t:"We have all sinned", p3_t:"Jesus paid for you", p4_t:"Receive Him by faith",
    oracion_t:"A simple prayer",
    oracion:"Lord Jesus, I admit that I am a sinner and I need Your forgiveness. I believe You died on the cross for my sins and rose again. Today I receive You as my Lord and Savior. Thank You for the gift of eternal life. Amen.",
    oracion_n:"Words alone do not save; what matters is sincere faith in Jesus Christ.",
    hablar_t:"Would you like to talk to someone?", hablar_p:"If you prayed this prayer or have questions, write to us. We will gladly walk with you and help you find a church near you.",
    escribir:"Write to us",
    biblia_t:"The Bible", biblia_p:"We read and share God's Word in two classic versions: the Reina-Valera 1960 in Spanish and the King James Version in English.",
    rv60_p:"The most widely read translation in the Spanish-speaking world.", kjv_p:"The classic English version, published in 1611.",
    leer:"Read online", buscar_t:"Look up a passage", pasaje:"Passage (for example: John 3:16)", version:"Version", buscar:"Search",
    clave_t:"Key verses", clave_p:"The same passages, side by side in both versions.",
    biblia_n:"The full text opens on BibleGateway. Publishing the full RV60 on this site requires permission from the United Bible Societies; the King James Version is in the public domain.",
    rec_t:"Resources", rec_p:"Material to grow in faith and share the message of salvation.",
    f_todo:"All", f_video:"Videos", f_audio:"Audio", f_podcast:"Podcasts", f_pelicula:"Films", f_publicacion:"Publications",
    t_video:"Video", t_audio:"Audio", t_podcast:"Podcast", t_pelicula:"Film", t_publicacion:"Publication",
    abrir:"Open", descargar:"Download", pronto:"Coming soon", vacio:"There is no content in this category yet.",
    act_t:"Activities", act_p:"Gatherings to study the Bible, talk together and make the Gospel known. Open to everyone.",
    f_estudio:"Bible studies", f_debate:"Debates", f_foro:"Forums", f_evento:"Events",
    t_estudio:"Bible study", t_debate:"Debate", t_foro:"Forum", t_evento:"Event",
    inscribir:"More information", foro_t:"Online forum",
    foro_p:"We are preparing an online space for questions and conversation. Meanwhile, write to us and we will answer you personally.",
    not_t:"News", not_p:"Updates from the foundation and its work.", leer_mas:"Read more",
    fin_t:"Finances and transparency", fin_p:"We publish how we receive and use every donation. Our financial statements are reviewed by independent auditors.",
    periodo:"Period", ingresos:"Income", gastos:"Expenses", saldo:"Balance for the period", concepto:"Item", monto:"Amount", total:"Total", porc:"%",
    docs_t:"Documents", docs_p:"Audited statements, reports and legal documents in PDF.",
    d_auditado:"Audited statement", d_informe:"Report", d_legal:"Legal document",
    ejemplo:"Sample figures and documents to show the layout; they will be replaced with the real ones.",
    donar_t:"Support the mission", donar_p:"Your gift helps bring the Gospel to more people, in Panama and around the world. Thank you for sowing into this work.",
    yappy_p:"From Panama, with your phone. Open Yappy, look up the foundation by name in the directory and send your gift.", yappy_buscar:"Search the directory for",
    paypal_p:"From any country, by card or PayPal account.", paypal_b:"Give with PayPal",
    banco_t:"Bank transfer", banco_p:"For large gifts or international transfers.",
    numero:"Number", nombre:"Account name", cuenta:"Account", swift:"SWIFT", banco:"Bank",
    copiar:"Copy", copiado:"Copied", por_confirmar:"To be confirmed",
    donar_n:"You will receive a thank-you by email. If you need a receipt, write to us.",
    ver_finanzas:"See how we use donations",
    nos_t:"About us",
    nos_p1:"El Volverá Foundation is a nonprofit organization established in the Republic of Panama. We exist to proclaim the Gospel of Jesus Christ and announce His return, in obedience to the Great Commission (Matthew 28:18-20).",
    nos_p2:"We do it through every available means: publications, audio, video, podcasts, films, forums, debates and in-person activities, always grounded in the Bible.",
    mision:"Mission", mision_p:"To bring the good news of salvation to everyone and guide those who do not yet know Jesus.",
    vision:"Vision", vision_p:"That in every nation there will be those who hear, believe and wait in hope for Christ's return.",
    creemos:"What we believe", creemos_p:"That the Bible is the Word of God, that salvation is by grace through faith in Jesus Christ, and that He will return.",
    contacto:"Contact", correo:"Email", ubicacion:"Location",
    error:"This content could not be loaded. Please try reloading the page."
  }
};

/* Versículos: RV60 (español) y KJV (inglés) */
const V = {
  gc:{es:["Y Jesús se acercó y les habló diciendo: Toda potestad me es dada en el cielo y en la tierra. Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo. Amén.","Mateo 28:18-20, RV60"],
      en:["And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you alway, even unto the end of the world. Amen.","Matthew 28:18-20, KJV"]},
  j316:{es:["Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.","Juan 3:16"],
        en:["For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.","John 3:16"]},
  r323:{es:["por cuanto todos pecaron, y están destituidos de la gloria de Dios.","Romanos 3:23"],
        en:["For all have sinned, and come short of the glory of God.","Romans 3:23"]},
  r623:{es:["Porque la paga del pecado es muerte, mas la dádiva de Dios es vida eterna en Cristo Jesús Señor nuestro.","Romanos 6:23"],
        en:["For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.","Romans 6:23"]},
  r58:{es:["Mas Dios muestra su amor para con nosotros, en que siendo aún pecadores, Cristo murió por nosotros.","Romanos 5:8"],
       en:["But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.","Romans 5:8"]},
  r109:{es:["que si confesares con tu boca que Jesús es el Señor, y creyeres en tu corazón que Dios le levantó de los muertos, serás salvo.","Romanos 10:9"],
        en:["That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.","Romans 10:9"]},
  e28:{es:["Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras, para que nadie se gloríe.","Efesios 2:8-9"],
       en:["For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast.","Ephesians 2:8-9"]},
  j146:{es:["Jesús le dijo: Yo soy el camino, y la verdad, y la vida; nadie viene al Padre, sino por mí.","Juan 14:6"],
        en:["Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.","John 14:6"]},
  j143:{es:["Y si me fuere y os preparare lugar, vendré otra vez, y os tomaré a mí mismo, para que donde yo estoy, vosotros también estéis.","Juan 14:3"],
        en:["And if I go and prepare a place for you, I will come again, and receive you unto myself; that where I am, there ye may be also.","John 14:3"]}
};

const RUTAS = ["inicio","conoce-a-jesus","biblia","recursos","actividades","noticias","finanzas","nosotros","donar"];
const NAVK = {"inicio":"nav_inicio","conoce-a-jesus":"nav_jesus","biblia":"nav_biblia","recursos":"nav_recursos","actividades":"nav_actividades","noticias":"nav_noticias","finanzas":"nav_finanzas","nosotros":"nav_nosotros","donar":"nav_donar"};

let lang = "es";
try { lang = localStorage.getItem("ev-idioma") || ((navigator.language||"es").startsWith("es") ? "es" : "en"); } catch(e) {}
const t = k => (T[lang][k] ?? T.es[k] ?? k);
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const L = (o, campo) => esc(o[campo + "_" + lang] || o[campo + "_es"] || "");
const url = u => /^(https?:\/\/|documentos\/|\/)/.test(u || "") ? esc(u) : "";
const fechaF = f => { try { return new Date(f + "T12:00:00").toLocaleDateString(lang === "es" ? "es-PA" : "en-US", {day:"numeric",month:"long",year:"numeric"}); } catch(e) { return esc(f); } };
const dinero = (n, m) => new Intl.NumberFormat(lang === "es" ? "es-PA" : "en-US", {style:"currency",currency:m||"USD",maximumFractionDigits:0}).format(n);
const verso = (k, l = lang) => `<blockquote class="verso">${esc(V[k][l][0])}<cite>${esc(V[k][l][1])}${l==="es" && k!=="gc" ? ", RV60" : (l==="en" && k!=="gc" ? ", KJV" : "")}</cite></blockquote>`;

/* Iconos */
const I = {
  cruz:'<path d="M20 4v32M10 14h20" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" fill="none"/>',
  libro:'<path d="M6 8c5-2 10-2 14 1 4-3 9-3 14-1v24c-5-2-10-2-14 1-4-3-9-3-14-1z M20 9v24" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round"/>',
  play:'<rect x="5" y="9" width="30" height="22" rx="4" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M17 15v10l9-5z" fill="currentColor"/>',
  gente:'<circle cx="14" cy="14" r="5" stroke="currentColor" stroke-width="2.5" fill="none"/><circle cx="27" cy="15" r="4" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M5 32c1-6 5-9 9-9s8 3 9 9M23 31c1-4 3-6 5-6 3 0 6 2 7 6" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/>',
  diario:'<rect x="6" y="7" width="28" height="26" rx="3" stroke="currentColor" stroke-width="2.5" fill="none"/><path d="M11 14h18M11 20h18M11 26h11" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>',
  balanza:'<path d="M20 6v28M10 34h20M8 12h24M8 12l-4 10h8zM32 12l-4 10h8z" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linejoin="round" stroke-linecap="round"/>'
};
const ico = n => `<span class="ico"><svg viewBox="0 0 40 40" aria-hidden="true">${I[n]}</svg></span>`;

/* Carga de contenido */
const cache = {};
async function datos(nombre) {
  if (cache[nombre]) return cache[nombre];
  const r = await fetch(`content/${nombre}.json`, {cache:"no-cache"});
  if (!r.ok) throw new Error(nombre);
  return (cache[nombre] = await r.json());
}

/* ---------- Páginas ---------- */
const encabezado = (k, i) => `<section class="encab"><div class="in"><h1>${t(k)}</h1><p>${t(i)}</p></div></section>`;
const P = {};

P["inicio"] = async () => {
  let nots = [];
  try { nots = (await datos("noticias")).noticias.slice().sort((a,b)=>b.fecha.localeCompare(a.fecha)).slice(0,3); } catch(e) {}
  const secs = [["conoce-a-jesus","nav_jesus","s_jesus","cruz"],["biblia","nav_biblia","s_biblia","libro"],["recursos","nav_recursos","s_recursos","play"],["actividades","nav_actividades","s_actividades","gente"],["noticias","nav_noticias","s_noticias","diario"],["finanzas","nav_finanzas","s_finanzas","balanza"]];
  const rayos = Array.from({length:24},(_,i)=>`<path d="M100 100 L${(100+98*Math.cos((i*15-3)*Math.PI/180)).toFixed(1)} ${(100+98*Math.sin((i*15-3)*Math.PI/180)).toFixed(1)} L${(100+98*Math.cos((i*15+3)*Math.PI/180)).toFixed(1)} ${(100+98*Math.sin((i*15+3)*Math.PI/180)).toFixed(1)}Z" fill="url(#r)" opacity="${i%2?.45:.8}"/>`).join("");
  return `
  <section class="portada foto">
    <div class="portada-in">
      <div>
        <h1>${t("hero_t")}<em>${t("hero_s")}</em></h1>
        <p>${t("hero_p")}</p>
        <div class="botones">
          <a class="btn oro" href="#conoce-a-jesus">${t("hero_b1")}</a>
          <a class="btn linea" href="#donar">${t("hero_b2")}</a>
        </div>
      </div>
    </div>
  </section>
  <section class="band oscura"><div class="in">
    <div class="dos"><div><h2>${t("gc_t")}</h2><p class="intro">${t("gc_p")}</p></div>${verso("gc")}</div>
  </div></section>
  <section class="band"><div class="in">
    <h2>${t("sec_t")}</h2><p class="intro">${t("sec_p")}</p>
    <div class="rej secciones">${secs.map(([r,n,d,i])=>`<a class="tar" href="#${r}">${ico(i)}<h3>${t(n)}</h3><p>${t(d)}</p><span class="mas">${t("ver")} →</span></a>`).join("")}</div>
  </div></section>
  <section class="band alt"><div class="in">
    <h2>${t("ultimas")}</h2>
    <div class="rej">${nots.map(tarNoticia).join("")}</div>
    <p style="margin-top:18px"><a href="#noticias">${t("todas")} →</a></p>
  </div></section>
  <section class="band oscura"><div class="in">
    <div class="dos"><div><h2>${t("trans_t")}</h2><p class="intro">${t("trans_p")}</p></div>
    <div class="botones"><a class="btn oro" href="#finanzas">${t("trans_b")}</a><a class="btn linea" href="#donar">${t("nav_donar")}</a></div></div>
  </div></section>`;
};

P["conoce-a-jesus"] = async () => {
  const c = await datos("config").catch(()=>({}));
  const pasos = [["p1_t","j316"],["p2_t","r323"],["p3_t","r58"],["p4_t","r109"]];
  return `
  ${encabezado("jesus_t","jesus_p")}<section class="band"><div class="in">
    <ol class="pasos">${pasos.map(([h,v])=>`<li><div><h3>${t(h)}</h3>${verso(v)}</div></li>`).join("")}</ol>
  </div></section>
  <section class="band oscura"><div class="in">
    <h2>${t("oracion_t")}</h2>
    <p class="verso" style="font-style:normal">${t("oracion")}</p>
    <p class="intro">${t("oracion_n")}</p>
    ${verso("j146")}
  </div></section>
  <section class="band"><div class="in">
    <h2>${t("hablar_t")}</h2><p>${t("hablar_p")}</p>
    ${contactoHTML(c)}
  </div></section>`;
};

P["biblia"] = async () => {
  const claves = ["gc","j316","j146","r623","e28","j143"];
  return `
  ${encabezado("biblia_t","biblia_p")}<section class="band"><div class="in">
    <div class="versiones">
      <div class="tar">${ico("libro")}<h3>Reina-Valera 1960</h3><p>${t("rv60_p")}</p><a class="btn azul" href="https://www.bible.com/bible/149/JHN.3.16.RVR1960" target="_blank" rel="noopener">${t("leer")}</a></div>
      <div class="tar">${ico("libro")}<h3>King James Version</h3><p>${t("kjv_p")}</p><a class="btn azul" href="https://www.biblegateway.com/versions/King-James-Version-KJV-Bible/" target="_blank" rel="noopener">${t("leer")}</a></div>
    </div>
  </div></section>
  <section class="band alt"><div class="in">
    <h2>${t("buscar_t")}</h2>
    <form class="buscar" id="formBiblia">
      <label>${t("pasaje")}<input id="pasaje" name="pasaje" value="${lang==="es"?"Juan 3:16":"John 3:16"}" required></label>
      <label style="flex:0 1 200px">${t("version")}<select id="ver"><option value="RVR1960" ${lang==="es"?"selected":""}>RV60</option><option value="KJV" ${lang==="en"?"selected":""}>King James</option></select></label>
      <button class="btn azul" type="submit">${t("buscar")}</button>
    </form>
    <p class="nota" id="enlaceBiblia"></p>
  </div></section>
  <section class="band"><div class="in">
    <h2>${t("clave_t")}</h2><p class="intro">${t("clave_p")}</p>
    ${claves.map(k=>`<div class="par">${verso(k,"es")}${verso(k,"en")}</div>`).join("")}
    <p class="nota">${t("biblia_n")}</p>
  </div></section>`;
};

const TIPOS_REC = ["video","audio","podcast","pelicula","publicacion"];
let filtroRec = "todo", filtroAct = "todo";

function ytId(u) { const m = String(u||"").match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/); return m ? m[1] : ""; }

P["recursos"] = async () => {
  const {recursos} = await datos("recursos");
  const lista = recursos.filter(r => filtroRec === "todo" || r.tipo === filtroRec);
  return `
  ${encabezado("rec_t","rec_p")}<section class="band"><div class="in">
    <div class="filtros" data-filtro="rec">${["todo",...TIPOS_REC].map(f=>`<button type="button" data-f="${f}" aria-pressed="${f===filtroRec}">${t("f_"+f)}</button>`).join("")}</div>
    ${lista.length ? `<div class="rej">${lista.map(r=>{
      const id = ytId(r.enlace);
      const arch = url(r.archivo), enl = url(r.enlace);
      const media = id ? `<button class="media" data-yt="${esc(id)}" aria-label="${t("abrir")}: ${L(r,"titulo")}"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="#0008" stroke="currentColor" stroke-width="2"/><path d="M16 12v16l12-8z" fill="currentColor"/></svg></button>` : "";
      const audio = arch && /\.(mp3|m4a|ogg)$/i.test(arch) ? `<audio controls preload="none" src="${arch}" style="width:100%;margin-bottom:10px"></audio>` : "";
      const accion = arch ? `<a class="mas" href="${arch}" target="_blank" rel="noopener">${t("descargar")} →</a>` : enl ? `<a class="mas" href="${enl}" target="_blank" rel="noopener">${t("abrir")} →</a>` : `<span class="mas nota">${t("pronto")}</span>`;
      return `<article class="tar">${media}<span class="etq">${t("t_"+(TIPOS_REC.includes(r.tipo)?r.tipo:"video"))}</span><h3>${L(r,"titulo")}</h3><p>${L(r,"descripcion")}</p>${audio}${accion}</article>`;
    }).join("")}</div>` : `<p>${t("vacio")}</p>`}
  </div></section>`;
};

const TIPOS_ACT = ["estudio","debate","foro","evento"];
P["actividades"] = async () => {
  const {actividades} = await datos("actividades");
  const c = await datos("config").catch(()=>({}));
  const lista = actividades.filter(a => filtroAct === "todo" || a.tipo === filtroAct).sort((a,b)=>a.fecha.localeCompare(b.fecha));
  return `
  ${encabezado("act_t","act_p")}<section class="band"><div class="in">
    <div class="filtros" data-filtro="act">${["todo",...TIPOS_ACT].map(f=>`<button type="button" data-f="${f}" aria-pressed="${f===filtroAct}">${t("f_"+f)}</button>`).join("")}</div>
    ${lista.length ? `<div class="rej">${lista.map(a=>`<article class="tar"><span class="etq">${t("t_"+(TIPOS_ACT.includes(a.tipo)?a.tipo:"evento"))}</span><h3>${L(a,"titulo")}</h3><p class="fecha">${fechaF(a.fecha)}${a.hora?" · "+esc(a.hora):""} · ${L(a,"lugar")}</p><p>${L(a,"descripcion")}</p>${url(a.enlace)?`<a class="mas" href="${url(a.enlace)}" target="_blank" rel="noopener">${t("inscribir")} →</a>`:""}</article>`).join("")}</div>` : `<p>${t("vacio")}</p>`}
  </div></section>
  <section class="band alt"><div class="in">
    <h2>${t("foro_t")}</h2><p>${t("foro_p")}</p>${contactoHTML(c)}
  </div></section>`;
};

function tarNoticia(n) {
  return `<article class="tar"><p class="fecha">${fechaF(n.fecha)}</p><h3>${L(n,"titulo")}</h3><p>${L(n,"resumen")}</p>${url(n.enlace)?`<a class="mas" href="${url(n.enlace)}" target="_blank" rel="noopener">${t("leer_mas")} →</a>`:""}</article>`;
}
P["noticias"] = async () => {
  const {noticias} = await datos("noticias");
  return `${encabezado("not_t","not_p")}<section class="band"><div class="in">
    <div class="rej">${noticias.slice().sort((a,b)=>b.fecha.localeCompare(a.fecha)).map(tarNoticia).join("")}</div></div></section>`;
};

P["finanzas"] = async () => {
  const f = await datos("finanzas");
  const per = f.periodos[0];
  const suma = l => l.reduce((s,x)=>s+Number(x.monto||0),0);
  const ti = suma(per.ingresos), tg = suma(per.gastos);
  const tabla = (titulo, filas, tot) => `<div><h3>${titulo}</h3><table><thead><tr><th>${t("concepto")}</th><th class="num">${t("monto")}</th><th class="num">${t("porc")}</th></tr></thead><tbody>
    ${filas.map(x=>`<tr><td>${L(x,"concepto")}</td><td class="num">${dinero(x.monto,f.moneda)}</td><td class="num">${tot?Math.round(x.monto/tot*100):0}%</td></tr>`).join("")}
    <tr class="total"><td>${t("total")}</td><td class="num">${dinero(tot,f.moneda)}</td><td class="num">100%</td></tr></tbody></table></div>`;
  const docs = f.documentos.slice().sort((a,b)=>String(b.anio).localeCompare(String(a.anio)));
  return `
  ${encabezado("fin_t","fin_p")}<section class="band"><div class="in">
    ${f.ejemplo?`<p class="aviso">${t("ejemplo")}</p>`:""}
    <h2 style="margin-top:24px">${t("periodo")} ${esc(per.anio)}</h2>
    <div class="cifras">
      <div class="cifra"><span>${t("ingresos")}</span><b>${dinero(ti,f.moneda)}</b></div>
      <div class="cifra"><span>${t("gastos")}</span><b>${dinero(tg,f.moneda)}</b></div>
      <div class="cifra"><span>${t("saldo")}</span><b>${dinero(ti-tg,f.moneda)}</b></div>
    </div>
    <div class="tablas">${tabla(t("ingresos"),per.ingresos,ti)}${tabla(t("gastos"),per.gastos,tg)}</div>
  </div></section>
  <section class="band alt"><div class="in">
    <h2>${t("docs_t")}</h2><p class="intro">${t("docs_p")}</p>
    <ul class="docs">${docs.map(d=>`<li><div><strong>${L(d,"titulo")}</strong><small>${t("d_"+(["auditado","informe","legal"].includes(d.tipo)?d.tipo:"informe"))} · ${esc(d.anio)}</small></div>${url(d.archivo)?`<a class="btn azul" href="${url(d.archivo)}" target="_blank" rel="noopener">PDF</a>`:`<span class="nota">${t("pronto")}</span>`}</li>`).join("")}</ul>
  </div></section>`;
};

const dato = (etq, valor) => `<div class="dato"><span>${etq}:</span>${valor ? `<code>${esc(valor)}</code><button class="copiar" type="button" data-copiar="${esc(valor)}">${t("copiar")}</button>` : `<em>${t("por_confirmar")}</em>`}</div>`;

P["donar"] = async () => {
  const c = await datos("config");
  const pp = url(c.paypal_enlace);
  return `
  ${encabezado("donar_t","donar_p")}<section class="band"><div class="in">
    <div class="donar">
      <div class="tar"><h3>Yappy · Banco General</h3><p>${t("yappy_p")}</p>${dato(t("yappy_buscar"),c.yappy_directorio||"Fundación El Volverá")}${c.yappy_numero?dato(t("numero"),c.yappy_numero):""}</div>
      <div class="tar"><h3>PayPal</h3><p>${t("paypal_p")}</p>${pp?`<a class="btn oro" href="${pp}" target="_blank" rel="noopener">${t("paypal_b")}</a>`:`<span class="btn oro" aria-disabled="true">${t("paypal_b")}</span><p class="nota">${t("por_confirmar")}</p>`}</div>
      <div class="tar"><h3>${t("banco_t")}</h3><p>${t("banco_p")}</p>${dato(t("banco"),c.banco_nombre)}${dato(t("nombre"),c.yappy_nombre)}${dato(t("cuenta"),c.banco_cuenta)}${dato(t("swift"),c.banco_swift)}</div>
    </div>
    <p class="nota">${t("donar_n")}</p>
    <p><a href="#finanzas">${t("ver_finanzas")} →</a></p>
  </div></section>`;
};

function contactoHTML(c) {
  const wa = String(c.whatsapp||"").replace(/\D/g,"");
  return `<div class="dato"><span>${t("correo")}:</span><a href="mailto:${esc(c.correo)}">${esc(c.correo)}</a></div>${wa?`<div class="dato"><span>WhatsApp:</span><a href="https://wa.me/${wa}" target="_blank" rel="noopener">+${esc(wa)}</a></div>`:""}`;
}

P["nosotros"] = async () => {
  const c = await datos("config").catch(()=>({}));
  return `
  ${encabezado("nos_t","nos_p1")}<section class="band"><div class="in"><p>${t("nos_p2")}</p>
    <div class="rej" style="margin-top:24px">
      <div class="tar"><h3>${t("mision")}</h3><p>${t("mision_p")}</p></div>
      <div class="tar"><h3>${t("vision")}</h3><p>${t("vision_p")}</p></div>
      <div class="tar"><h3>${t("creemos")}</h3><p>${t("creemos_p")}</p></div>
    </div>
  </div></section>
  <section class="band oscura"><div class="in">${verso("j143")}</div></section>
  <section class="band"><div class="in">
    <h2>${t("contacto")}</h2>${contactoHTML(c)}<div class="dato"><span>${t("ubicacion")}:</span>${esc(c.direccion)}</div>
  </div></section>`;
};

/* ---------- Marco: menú, idioma, rutas ---------- */
const main = document.getElementById("principal");
const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");

function marco(ruta) {
  document.documentElement.lang = lang;
  document.getElementById("idioma").textContent = lang === "es" ? "EN" : "ES";
  document.querySelectorAll("[data-i]").forEach(el => el.textContent = t(el.dataset.i));
  nav.innerHTML = RUTAS.map(r => `<a href="#${r}" class="${r==="donar"?"donar-link":""}" ${r===ruta?'aria-current="page"':""}>${t(NAVK[r])}</a>`).join("");
  document.getElementById("pieNav").innerHTML = RUTAS.map(r => `<li><a href="#${r}">${t(NAVK[r])}</a></li>`).join("");
  datos("config").then(c => {
    document.getElementById("pieContacto").innerHTML = `${esc(c.direccion)}<br><a href="mailto:${esc(c.correo)}">${esc(c.correo)}</a>`;
  }).catch(()=>{});
  document.querySelector(".pie-final").textContent = lang === "es" ? "“Id, y haced discípulos a todas las naciones” · Mateo 28:19" : "“Go ye therefore, and teach all nations” · Matthew 28:19";
}

async function mostrar(enfocar) {
  const ruta = RUTAS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "inicio";
  marco(ruta);
  nav.classList.remove("abierto"); menuBtn.setAttribute("aria-expanded","false");
  try { main.innerHTML = await P[ruta](); }
  catch(e) { main.innerHTML = `<section class="band"><div class="in"><p class="aviso">${t("error")}</p></div></section>`; }
  document.title = (ruta === "inicio" ? "" : t(NAVK[ruta]) + " · ") + (lang === "es" ? "Fundación El Volverá" : "El Volverá Foundation");
  if (enfocar) { window.scrollTo(0,0); main.focus({preventScroll:true}); }
}

window.addEventListener("hashchange", () => mostrar(true));
menuBtn.addEventListener("click", () => {
  const ab = nav.classList.toggle("abierto");
  menuBtn.setAttribute("aria-expanded", String(ab));
});
document.getElementById("idioma").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  try { localStorage.setItem("ev-idioma", lang); } catch(e) {}
  mostrar(false);
});

main.addEventListener("click", e => {
  const f = e.target.closest(".filtros button");
  if (f) {
    if (f.parentElement.dataset.filtro === "rec") filtroRec = f.dataset.f; else filtroAct = f.dataset.f;
    mostrar(false); return;
  }
  const yt = e.target.closest("[data-yt]");
  if (yt) {
    yt.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(yt.dataset.yt)}?autoplay=1" title="YouTube" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    yt.removeAttribute("data-yt"); return;
  }
  const cp = e.target.closest("[data-copiar]");
  if (cp) {
    navigator.clipboard.writeText(cp.dataset.copiar).then(() => { cp.textContent = t("copiado"); setTimeout(()=>cp.textContent=t("copiar"),1800); }).catch(()=>{});
  }
});
main.addEventListener("submit", e => {
  if (e.target.id !== "formBiblia") return;
  e.preventDefault();
  const q = document.getElementById("pasaje").value.trim();
  const v = document.getElementById("ver").value;
  const href = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(q)}&version=${v}`;
  const p = document.getElementById("enlaceBiblia");
  p.innerHTML = `<a class="btn azul" href="${esc(href)}" target="_blank" rel="noopener">${esc(q)} · ${v==="KJV"?"King James":"RV60"} →</a>`;
  p.querySelector("a").focus();
});

mostrar(false);

}
