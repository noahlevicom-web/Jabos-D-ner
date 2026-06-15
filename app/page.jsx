"use client";
import { useState } from "react";

const slides = [
  {
    image: "/innenraum.png",
    text: "Gemütliche Atmosphäre mitten in Heidelberg — komm vorbei und fühl dich wie zuhause."
  },
  {
    image: "/speisekarte.png",
    text: "Von Döner bis Steinofenpizza — für jeden Geschmack ist etwas dabei."
  },
  {
    image: "/kisir.png",
    text: "Frische Zutaten, täglich zubereitet — Qualität die man schmeckt."
  },
  {
    image: "/doenerteller.png",
    text: "Der JaBo's Dönerteller — großzügig, sättigend und unwiderstehlich."
  },
  {
    image: "/doenerteller2.png",
    text: "Steak Döner vom Lavastein-Grill — knusprig außen, saftig innen."
  }
];

const Flames = ({ opacity = 0.5, height = 200 }) => (
  <div className="absolute bottom-0 left-0 w-full" style={{height: `${height}px`, pointerEvents: "none"}}>
    <svg viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <radialGradient id="fg1" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#ff6600" stopOpacity="1"/>
          <stop offset="60%" stopColor="#ff2200" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#cc0000" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="fg2" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#ffaa00" stopOpacity="1"/>
          <stop offset="50%" stopColor="#ff5500" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#ff0000" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <g className="flame flame1"><path d="M80,200 C65,160 50,120 70,80 C80,62 90,75 85,100 C98,70 112,35 100,12 C118,38 125,82 112,118 C122,95 128,68 118,48 C132,72 135,125 118,172 C108,190 88,200 80,200Z" fill="url(#fg2)" opacity={opacity}/></g>
      <g className="flame flame2"><path d="M200,200 C185,158 178,115 198,72 C208,52 218,67 213,93 C225,62 242,28 230,8 C248,35 255,82 240,120 C250,97 257,70 247,48 C262,74 264,128 248,175 C238,193 215,200 200,200Z" fill="url(#fg1)" opacity={opacity}/></g>
      <g className="flame flame3"><path d="M350,200 C336,157 330,113 350,70 C360,50 370,65 365,92 C377,60 395,28 382,7 C401,35 408,83 392,122 C403,98 410,70 400,48 C415,74 417,129 400,176 C390,194 366,200 350,200Z" fill="url(#fg2)" opacity={opacity}/></g>
      <g className="flame flame4"><path d="M490,200 C476,156 470,112 490,68 C500,48 511,63 506,90 C518,58 537,25 523,6 C543,33 550,82 534,121 C545,97 552,69 542,47 C557,73 559,128 542,175 C532,193 508,200 490,200Z" fill="url(#fg1)" opacity={opacity}/></g>
      <g className="flame flame5"><path d="M630,200 C617,156 611,112 631,68 C641,48 652,63 647,90 C659,58 678,25 664,6 C684,33 691,82 675,121 C686,97 693,69 683,47 C698,73 700,128 683,175 C673,193 649,200 630,200Z" fill="url(#fg2)" opacity={opacity}/></g>
      <g className="flame flame6"><path d="M770,200 C757,156 751,112 771,68 C781,48 792,63 787,90 C799,58 818,25 804,6 C824,33 831,82 815,121 C826,97 833,69 823,47 C838,73 840,128 823,175 C813,193 789,200 770,200Z" fill="url(#fg1)" opacity={opacity}/></g>
      <g className="flame flame7"><path d="M910,200 C897,156 891,112 911,68 C921,48 932,63 927,90 C939,58 958,25 944,6 C964,33 971,82 955,121 C966,97 973,69 963,47 C978,73 980,128 963,175 C953,193 929,200 910,200Z" fill="url(#fg2)" opacity={opacity}/></g>
      <g className="flame flame8"><path d="M1060,200 C1047,156 1041,112 1061,68 C1071,48 1082,63 1077,90 C1089,58 1108,25 1094,6 C1114,33 1121,82 1105,121 C1116,97 1123,69 1113,47 C1128,73 1130,128 1113,175 C1103,193 1079,200 1060,200Z" fill="url(#fg1)" opacity={opacity}/></g>
    </svg>
  </div>
);

export default function Home() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <main className="min-h-screen bg-black text-white font-sans">

      <style>{`
        @keyframes flicker1 {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 1; }
          25% { transform: scaleY(1.06) scaleX(0.97); opacity: 0.9; }
          50% { transform: scaleY(0.96) scaleX(1.03); opacity: 0.8; }
          75% { transform: scaleY(1.04) scaleX(0.98); opacity: 0.95; }
        }
        @keyframes flicker2 {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.85; }
          33% { transform: scaleY(1.08) scaleX(0.95); opacity: 1; }
          66% { transform: scaleY(0.94) scaleX(1.05); opacity: 0.75; }
        }
        @keyframes flicker3 {
          0%, 100% { transform: scaleY(1) scaleX(1); opacity: 0.9; }
          40% { transform: scaleY(1.1) scaleX(0.94); opacity: 1; }
          80% { transform: scaleY(0.93) scaleX(1.06); opacity: 0.72; }
        }
        .flame { transform-origin: bottom center; }
        .flame1 { animation: flicker1 1.8s ease-in-out infinite; }
        .flame2 { animation: flicker2 2.1s ease-in-out infinite; }
        .flame3 { animation: flicker3 1.5s ease-in-out infinite; }
        .flame4 { animation: flicker1 2.4s ease-in-out infinite reverse; }
        .flame5 { animation: flicker2 1.9s ease-in-out infinite; }
        .flame6 { animation: flicker3 2.2s ease-in-out infinite reverse; }
        .flame7 { animation: flicker1 1.6s ease-in-out infinite; }
        .flame8 { animation: flicker2 2.0s ease-in-out infinite reverse; }
      `}</style>

      <nav className="fixed top-0 w-full bg-black bg-opacity-90 z-50 border-b-4 border-red-600">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-8 invert" />
            <span className="text-xl font-bold">JaBo&apos;s Döner</span>
          </div>
          <div className="hidden sm:flex gap-8 text-sm">
            <a href="#spezialitaeten" className="hover:text-red-500 transition">Spezialitäten</a>
            <a href="#speisekarte" className="hover:text-red-500 transition">Speisekarte</a>
            <a href="#kontakt" className="hover:text-red-500 transition">Kontakt</a>
          </div>
        </div>
      </nav>

      <section className="relative h-screen">
        <img src={slides[current].image} alt="JaBos Döner" className="w-full h-full object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <img src="/logo.png" alt="Logo" className="h-16 md:h-24 mb-6 invert" />
          <p className="text-red-500 uppercase tracking-widest text-sm mb-4">Neu in Heidelberg</p>
          <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-lg">JaBo&apos;s Döner</h1>
          <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl px-4">{slides[current].text}</p>
          <a href="tel:062217360555" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 md:px-10 md:py-4 rounded-full text-base md:text-lg transition-colors">Jetzt anrufen</a>
        </div>
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full text-xl">&#8592;</button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full text-xl">&#8594;</button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-red-600" : "bg-gray-400"}`} />
          ))}
        </div>
      </section>

      <section className="bg-black py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-10">Frisch. Heiß. <span className="text-red-600">Unwiderstehlich.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="overflow-hidden rounded-lg">
              <img src="/doenerteller.png" alt="Dönerteller" className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="/doenerteller2.png" alt="Dönerteller" className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="/kisir.png" alt="Kisir" className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <img src="/innenraum.png" alt="Innenraum" className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      <section id="spezialitaeten" className="relative px-6 py-24 bg-black overflow-hidden">
        <Flames opacity={0.35} height={180} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-16">Unsere <span className="text-red-500">Spezialitäten</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 bg-opacity-90 border-l-4 border-red-600 p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Steak Döner</h3>
              <p className="text-gray-300 leading-relaxed">Unser Herzstück: zartes Steakfleisch, täglich frisch vom Lavastein-Grill. Die intensive Hitze verleiht dem Fleisch eine unvergleichliche Kruste, während es innen saftig bleibt. Dazu selbstgemachte Dönerbrote, frische Salate und hausgemachte Soßen — ein Genuss der besonderen Klasse.</p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 border-l-4 border-red-600 p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Steinofenpizza</h3>
              <p className="text-gray-300 leading-relaxed">Knusprig, aromatisch, unwiderstehlich: unsere Pizzen werden im echten Steinofen bei höchster Temperatur gebacken. Der Teig bekommt so eine perfekte, leicht rauchige Note. Mit hochwertigen Zutaten belegt, frisch aus dem Ofen — 30 cm pure Leidenschaft auf dem Teller.</p>
            </div>
            <div className="bg-gray-900 bg-opacity-90 border-l-4 border-red-600 p-8 hover:bg-gray-800 transition-colors">
              <h3 className="text-2xl font-bold mb-4 text-red-500">Tantuni</h3>
              <p className="text-gray-300 leading-relaxed">Eine türkische Spezialität, die begeistert: zart gebratenes Hähnchenfleisch mit frischen Zwiebeln, sonnenreifen Tomaten und aromatischer Petersilie, perfekt gewürzt nach traditionellem Rezept. Saftig, kräftig im Geschmack und jedes Mal ein Erlebnis.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="speisekarte" className="relative px-6 py-20 bg-black overflow-hidden">
        <Flames opacity={0.25} height={160} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4"><span className="text-red-600">Speise</span>karte</h2>
          <p className="text-center text-gray-500 mb-16 text-sm uppercase tracking-widest">Auszug — vollständige Karte im Restaurant</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-black mb-6 text-red-600 uppercase border-b-2 border-red-600 pb-3">Döner</h3>
              <ul className="space-y-3">
                {[
                  ["JaBo's Steak Döner", "9,00 €"],
                  ["Hähnchen-Döner", "8,00 €"],
                  ["Yufka Steak", "10,00 €"],
                  ["JaBo's Taco", "11,00 €"],
                  ["JaBo's Dönerteller", "17,00 €"],
                  ["JaBo's Bowl", "11,00 €"],
                  ["Lahmacun Spezial", "10,00 €"]
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between pb-2 border-b border-gray-700">
                    <span className="text-gray-200">{name}</span>
                    <span className="font-bold text-red-500">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 text-red-600 uppercase border-b-2 border-red-600 pb-3">Pizza (30cm)</h3>
              <ul className="space-y-3">
                {[
                  ["Pizza Margherita", "8,00 €"],
                  ["Pizza Marinara", "8,50 €"],
                  ["Pizza Döner", "11,00 €"],
                  ["JaBo's Pizza", "12,00 €"],
                  ["Pizza Vegetaria", "11,00 €"],
                  ["Pizza Quatro Formaggi", "11,00 €"],
                  ["Pizza Bianco", "10,00 €"]
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between pb-2 border-b border-gray-700">
                    <span className="text-gray-200">{name}</span>
                    <span className="font-bold text-red-500">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 text-red-600 uppercase border-b-2 border-red-600 pb-3">Vegetarisch</h3>
              <ul className="space-y-3">
                {[
                  ["Yufka Vegi", "8,00 €"],
                  ["Yufka Falafel", "8,50 €"],
                  ["Falafel Sandwich", "8,00 €"],
                  ["JaBo's Vegi Teller", "12,00 €"],
                  ["Vegi Bowl", "9,00 €"],
                  ["JaBo's Kisir Teller", "9,00 €"]
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between pb-2 border-b border-gray-700">
                    <span className="text-gray-200">{name}</span>
                    <span className="font-bold text-red-500">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-black mb-6 text-red-600 uppercase border-b-2 border-red-600 pb-3">Pide</h3>
              <ul className="space-y-3">
                {[
                  ["Pide Sultan", "8,00 €"],
                  ["Pide Urfa", "9,00 €"],
                  ["Pide Anatolia", "8,00 €"],
                  ["Pide Royal", "9,00 €"],
                  ["Pide Istanbul", "10,00 €"],
                  ["JaBo's Pide", "11,00 €"]
                ].map(([name, price]) => (
                  <li key={name} className="flex justify-between pb-2 border-b border-gray-700">
                    <span className="text-gray-200">{name}</span>
                    <span className="font-bold text-red-500">{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative px-6 py-20 bg-black overflow-hidden">
        <Flames opacity={0.25} height={160} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-12"><span className="text-red-600">Besuch uns</span> heute</h2>
          <div className="bg-gray-900 bg-opacity-95 border-2 border-red-600 p-10 rounded-lg">
            <p className="text-gray-300 text-lg mb-4">Hauptstraße 61, 69117 Heidelberg</p>
            <a href="tel:062217360555" className="text-3xl font-black text-red-600 hover:text-red-500 transition">06221 7360555</a>
            <div className="mt-8 space-y-2 text-gray-300">
              <p><strong className="text-white">Mo – Do:</strong> 11:00 – 22:00 Uhr</p>
              <p><strong className="text-white">Fr – Sa:</strong> 11:00 – 23:00 Uhr</p>
              <p><strong className="text-white">So:</strong> 11:00 – 00:00 Uhr</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-black border-t-4 border-red-600 px-6 py-12 text-center overflow-hidden">
        <Flames opacity={0.2} height={120} />
        <div className="relative z-10">
          <img src="/logo.png" alt="Logo" className="h-10 invert mx-auto mb-4" />
          <p className="text-gray-500 text-sm mb-4">&copy; 2026 JaBo&apos;s Döner &middot; Hauptstraße 61, 69117 Heidelberg</p>
          <div className="space-x-4">
            <a href="/impressum" className="text-gray-500 hover:text-red-600 transition text-sm">Impressum</a>
            <a href="/datenschutz" className="text-gray-500 hover:text-red-600 transition text-sm">Datenschutz</a>
          </div>
        </div>
      </footer>

    </main>
  );
}