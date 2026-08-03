import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const menu = {
  moneda: "CRC",
  gelatos: {
    cono_azucarado: 1200,
    taza_mediana: 2200,
    taza_mediana_1_sirope_2_toppings: 2950,
    taza_grande: 3200,
    taza_grande_1_sirope_3_toppings: 3950,
    topping_extra: 375
  },
  gofre_burbuja: {
    precio: 3600,
    incluye: ["1 Nutella", "1 bola de helado", "Chantilly", "2 toppings a elegir"]
  },
  granizado: {
    grande_con_2_leches: 1700,
    grande_con_2_leches_y_helado: 2400
  },
  frozzy_shake: {
    pequeno: 2700,
    grande: 3450,
    sabores: ["Oreo", "Galleta Lotus Biscoff", "Hershey's", "Reese's", "Arequipe"]
  },
  batidos: {
    agua: {
      pequeno: 1700,
      grande: 1900
    },
    leche: {
      pequeno: 2100,
      grande: 2400
    },
    sabores: ["Mango", "Fresa", "Mora", "Sandia (solo en agua)"],
    otras_opciones: {
      cafe: 1000,
      capuccino: 1300,
      agua: 500
    }
  },
  otras_bebidas: {
    frozzynada_mangonada_grande: 2600,
    frozen_capuccino: 2100,
    frozen_sabor_algodon_de_azucar: {
      precio: 2600,
      colores: ["Rosa", "Celeste"]
    }
  }
};

const menuBears = [
  { top: "4%", left: "6%", size: "118px", rotate: "-14deg", opacity: 0.34 },
  { top: "8%", left: "24%", size: "82px", rotate: "9deg", opacity: 0.24 },
  { top: "6%", left: "48%", size: "104px", rotate: "-7deg", opacity: 0.26 },
  { top: "12%", left: "70%", size: "88px", rotate: "17deg", opacity: 0.24 },
  { top: "10%", left: "91%", size: "132px", rotate: "12deg", opacity: 0.32 },
  { top: "22%", left: "13%", size: "76px", rotate: "18deg", opacity: 0.22 },
  { top: "25%", left: "34%", size: "126px", rotate: "-10deg", opacity: 0.28 },
  { top: "21%", left: "58%", size: "72px", rotate: "6deg", opacity: 0.2 },
  { top: "28%", left: "82%", size: "110px", rotate: "-16deg", opacity: 0.3 },
  { top: "36%", left: "5%", size: "94px", rotate: "7deg", opacity: 0.24 },
  { top: "41%", left: "20%", size: "138px", rotate: "-18deg", opacity: 0.3 },
  { top: "37%", left: "45%", size: "86px", rotate: "14deg", opacity: 0.22 },
  { top: "43%", left: "67%", size: "120px", rotate: "-8deg", opacity: 0.3 },
  { top: "39%", left: "94%", size: "78px", rotate: "19deg", opacity: 0.24 },
  { top: "53%", left: "10%", size: "128px", rotate: "-6deg", opacity: 0.28 },
  { top: "57%", left: "30%", size: "74px", rotate: "11deg", opacity: 0.22 },
  { top: "52%", left: "52%", size: "150px", rotate: "16deg", opacity: 0.26 },
  { top: "59%", left: "75%", size: "88px", rotate: "-14deg", opacity: 0.24 },
  { top: "54%", left: "90%", size: "116px", rotate: "8deg", opacity: 0.28 },
  { top: "68%", left: "4%", size: "84px", rotate: "13deg", opacity: 0.22 },
  { top: "73%", left: "18%", size: "146px", rotate: "16deg", opacity: 0.28 },
  { top: "70%", left: "40%", size: "96px", rotate: "-12deg", opacity: 0.24 },
  { top: "75%", left: "63%", size: "130px", rotate: "7deg", opacity: 0.29 },
  { top: "71%", left: "86%", size: "92px", rotate: "-18deg", opacity: 0.26 },
  { top: "84%", left: "8%", size: "108px", rotate: "-20deg", opacity: 0.24 },
  { top: "88%", left: "27%", size: "76px", rotate: "10deg", opacity: 0.22 },
  { top: "86%", left: "47%", size: "124px", rotate: "-5deg", opacity: 0.27 },
  { top: "91%", left: "70%", size: "82px", rotate: "15deg", opacity: 0.22 },
  { top: "87%", left: "96%", size: "140px", rotate: "-11deg", opacity: 0.3 },
  { top: "16%", left: "2%", size: "62px", rotate: "22deg", opacity: 0.22 },
  { top: "64%", left: "98%", size: "68px", rotate: "-22deg", opacity: 0.24 },
  { top: "96%", left: "56%", size: "104px", rotate: "9deg", opacity: 0.2 }
];

const ctaBears = [
  { top: "8%", left: "5%", size: "112px", rotate: "-12deg", opacity: 0.24 },
  { top: "18%", left: "24%", size: "74px", rotate: "10deg", opacity: 0.2 },
  { top: "12%", left: "46%", size: "96px", rotate: "-8deg", opacity: 0.2 },
  { top: "14%", left: "84%", size: "132px", rotate: "15deg", opacity: 0.24 },
  { top: "45%", left: "13%", size: "82px", rotate: "18deg", opacity: 0.2 },
  { top: "52%", left: "36%", size: "126px", rotate: "-16deg", opacity: 0.22 },
  { top: "48%", left: "58%", size: "88px", rotate: "10deg", opacity: 0.2 },
  { top: "58%", left: "76%", size: "110px", rotate: "-9deg", opacity: 0.22 },
  { top: "82%", left: "7%", size: "92px", rotate: "8deg", opacity: 0.2 },
  { top: "84%", left: "29%", size: "118px", rotate: "-14deg", opacity: 0.22 },
  { top: "86%", left: "66%", size: "78px", rotate: "16deg", opacity: 0.18 },
  { top: "78%", left: "94%", size: "102px", rotate: "-18deg", opacity: 0.22 }
];

const mapsUrl = "https://maps.app.goo.gl/TPPRj9rDiY4FCncu7";

const formatPrice = (value) =>
  new Intl.NumberFormat("es-CR", {
    style: "currency",
    currency: menu.moneda,
    maximumFractionDigits: 0
  }).format(value);

const labelize = (text) =>
  text
    .replace(/_/g, " ")
    .replace("pequeno", "pequeno")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

function BrandMark() {
  return (
    <div className="brand-mark" aria-label="Moodzzy">
      <img className="logo-image" src="/Logo.png" alt="" />
      <span className="brand-name">Moodzzy</span>
    </div>
  );
}

function DecorativeBears({ bears }) {
  return (
    <div className="bear-field" aria-hidden="true">
      {bears.map((bear, index) => (
        <img
          className="floating-bear"
          src="/Icon_No_Fondo.png"
          alt=""
          key={`${bear.top}-${bear.left}-${index}`}
          style={{
            "--bear-top": bear.top,
            "--bear-left": bear.left,
            "--bear-size": bear.size,
            "--bear-rotate": bear.rotate,
            "--bear-opacity": bear.opacity
          }}
        />
      ))}
    </div>
  );
}

function PriceRow({ name, price, note }) {
  return (
    <li className="price-row">
      <span>
        {name}
        {note ? <small>{note}</small> : null}
      </span>
      <strong>{formatPrice(price)}</strong>
    </li>
  );
}

function MenuCard({ title, kicker, children, accent = "red" }) {
  return (
    <article className={`menu-card accent-${accent}`}>
      <div className="card-heading">
        <span>{kicker}</span>
        <h3>{title}</h3>
      </div>
      {children}
    </article>
  );
}

function ChipList({ items }) {
  return (
    <div className="chip-list">
      {items.map((item) => (
        <span className="chip" key={item}>
          {item}
        </span>
      ))}
    </div>
  );
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="nav-brand" href="#inicio" aria-label="Moodzzy inicio">
          <BrandMark />
        </a>
        <nav aria-label="Principal">
          <a href="#menu">Menu</a>
          <a href="#sabores">Sabores</a>
          <a href="https://www.instagram.com/moodzzy_cr" target="_blank" rel="noreferrer">
            @Moodzzy_cr
          </a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <img src="/moodzzy-hero.png" alt="" className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <img className="hero-logo" src="/Logo.png" alt="Logo de Moodzzy" />
          <p className="eyebrow">Gelatos, waffles y frozen drinks</p>
          <h1>Moodzzy</h1>
          <p className="hero-copy">
            Postres frios con mood dulce, toppings generosos y una vibra neon lista para
            antojos de tarde, salida con amigas o foto de Instagram.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#menu">
              Ver menu
            </a>
            <a className="button ghost" href="https://www.instagram.com/moodzzy_cr" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="menu">
        <DecorativeBears bears={menuBears} />
        <div className="section-title">
          <h2>Frozzy Menu</h2>
        </div>

        <div className="menu-grid">
          <MenuCard title="Gelatos" kicker="Cremoso" accent="pink">
            <ul>
              {Object.entries(menu.gelatos).map(([name, price]) => (
                <PriceRow key={name} name={labelize(name)} price={price} />
              ))}
            </ul>
          </MenuCard>

          <MenuCard title="Gofre burbuja" kicker="Full topping" accent="chocolate">
            <ul>
              <PriceRow name="Gofre burbuja" price={menu.gofre_burbuja.precio} />
            </ul>
            <p className="includes-title">Incluye</p>
            <ChipList items={menu.gofre_burbuja.incluye} />
          </MenuCard>

          <MenuCard title="Granizado" kicker="Refrescante" accent="red">
            <ul>
              {Object.entries(menu.granizado).map(([name, price]) => (
                <PriceRow key={name} name={labelize(name)} price={price} />
              ))}
            </ul>
          </MenuCard>

          <MenuCard title="Frozzy Shake" kicker="Dulce intenso" accent="pink">
            <ul>
              <PriceRow name="Pequeno" price={menu.frozzy_shake.pequeno} />
              <PriceRow name="Grande" price={menu.frozzy_shake.grande} />
            </ul>
            <p className="includes-title" id="sabores">
              Sabores
            </p>
            <ChipList items={menu.frozzy_shake.sabores} />
          </MenuCard>

          <MenuCard title="Batidos" kicker="Agua o leche" accent="chocolate">
            <div className="split-list">
              <div>
                <h4>En agua</h4>
                <ul>
                  <PriceRow name="Pequeno" price={menu.batidos.agua.pequeno} />
                  <PriceRow name="Grande" price={menu.batidos.agua.grande} />
                </ul>
              </div>
              <div>
                <h4>En leche</h4>
                <ul>
                  <PriceRow name="Pequeno" price={menu.batidos.leche.pequeno} />
                  <PriceRow name="Grande" price={menu.batidos.leche.grande} />
                </ul>
              </div>
            </div>
            <p className="includes-title">Sabores</p>
            <ChipList items={menu.batidos.sabores} />
          </MenuCard>

          <MenuCard title="Otras bebidas" kicker="Frias y antojables" accent="red">
            <ul>
              {Object.entries(menu.batidos.otras_opciones).map(([name, price]) => (
                <PriceRow key={name} name={labelize(name)} price={price} />
              ))}
              <PriceRow name="Frozzynada / Mangonada grande" price={menu.otras_bebidas.frozzynada_mangonada_grande} />
              <PriceRow name="Frozen capuccino" price={menu.otras_bebidas.frozen_capuccino} />
              <PriceRow
                name="Frozen sabor algodon de azucar"
                note={menu.otras_bebidas.frozen_sabor_algodon_de_azucar.colores.join(" / ")}
                price={menu.otras_bebidas.frozen_sabor_algodon_de_azucar.precio}
              />
            </ul>
          </MenuCard>
        </div>
      </section>

      <section className="location-section" id="ubicacion">
        <div className="location-copy">
          <p className="eyebrow">Visitanos</p>
          <h2>Encuentra Moodzzy en Google Maps</h2>
          <p>
            Guarda la ruta, revisa indicaciones y llega directo por tu gelato,
            gofre burbuja o frozen favorito.
          </p>
          <a className="button primary" href={mapsUrl} target="_blank" rel="noreferrer">
            Abrir ubicacion
          </a>
        </div>

      </section>

      <footer className="cta-band">
        <div>
          <p className="eyebrow">Mood del dia</p>
          <h2>Algo frio, algo rojo, algo bien Moodzzy.</h2>
        </div>
        <a className="button footer-button" href="https://www.instagram.com/moodzzy_cr" target="_blank" rel="noreferrer">
          Pedir por Instagram
        </a>
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);