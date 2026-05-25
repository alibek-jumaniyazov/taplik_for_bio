import { useState } from "react";
import {
  PROFILE,
  SOCIAL_LINKS,
  QUICK_LINKS,
  CATEGORIES,
  CATALOG_ITEMS,
  formatPrice,
} from "./data/config";
import { Icons } from "./components/Icons";
import logoSrc from "./assets/logo.jpg";
import "./App.css";

// ─────────────────────────────────────────
// PROFILE SECTION
// ─────────────────────────────────────────
function ProfileSection() {
  return (
    <section className="profile-section">
      {/* subtle top glow */}
      <div className="profile-glow" aria-hidden="true" />

      {/* Logo */}
      <div className="profile-logo-wrap">
        <img src={logoSrc} alt="Nargis Collection logo" className="profile-logo" />
      </div>

      <h1 className="profile-name">{PROFILE.name}</h1>
      <p className="profile-title">{PROFILE.title}</p>
      <p className="profile-bio">{PROFILE.bio}</p>

      <div className="profile-meta">
        <span className="profile-location">
          <Icons.location />
          {PROFILE.location}
        </span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// QUICK LINKS
// ─────────────────────────────────────────
function QuickLinks() {
  return (
    <section className="section">
      <div className="quick-links">
        {QUICK_LINKS.map((link) => (
          <a
            key={link.id}
            id={`quick-${link.id}`}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`quick-link-btn ${link.isPrimary ? "quick-link-primary" : ""}`}
          >
            <span className="quick-link-icon">{link.icon}</span>
            <div className="quick-link-text">
              <span className="quick-link-label">{link.label}</span>
              <span className="quick-link-desc">{link.description}</span>
            </div>
            <span className="quick-link-arrow"><Icons.chevronRight /></span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// SOCIAL LINKS
// ─────────────────────────────────────────
function SocialLinks() {
  return (
    <section className="section">
      <h2 className="section-title">Ijtimoiy tarmoqlar</h2>

      <div className="social-grid">
        {SOCIAL_LINKS.map((link) => {
          const IconComp = Icons[link.icon as keyof typeof Icons] as React.FC;
          return (
            <a
              key={link.id}
              id={`social-${link.id}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-card"
              style={{ "--social-color": link.color } as React.CSSProperties}
            >
              <div className="social-icon-wrap">
                <IconComp />
              </div>
              <div className="social-info">
                <span className="social-label">{link.label}</span>
                <span className="social-username">{link.username}</span>
              </div>
              <div className="social-right">
                <span className="social-arrow"><Icons.externalLink /></span>
              </div>
            </a>
          );
        })}
      </div>

      {/* ── Phone Contact Card ── */}
      <a
        id="contact-phone"
        href={`tel:${PROFILE.phone}`}
        className="phone-card"
        aria-label={`Qo'ng'iroq qilish: ${PROFILE.phone}`}
      >
        <div className="phone-icon-wrap">
          <Icons.phone />
        </div>
        <div className="phone-info">
          <span className="phone-label">Aloqa uchun</span>
          <span className="phone-number">{PROFILE.phone}</span>
        </div>
        <span className="phone-action">Qo'ng'iroq</span>
      </a>
    </section>
  );
}

// ─────────────────────────────────────────
// CATALOG CARD
// ─────────────────────────────────────────
function CatalogCard({ item }: { item: (typeof CATALOG_ITEMS)[0] }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <article
      id={`item-${item.id}`}
      className={`catalog-card ${item.isSold ? "catalog-card--sold" : ""}`}
    >
      <div className="catalog-img-wrap">
        {!loaded && <div className="catalog-skeleton" aria-hidden="true" />}
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className={`catalog-img ${loaded ? "catalog-img--visible" : ""}`}
          onLoad={() => setLoaded(true)}
        />
        <div className="catalog-badges">
          {item.isNew && !item.isSold && <span className="badge badge--new">Yangi</span>}
          {item.isSold && <span className="badge badge--sold">Sotildi</span>}
        </div>
      </div>
      <div className="catalog-info">
        <h3 className="catalog-name">{item.name}</h3>
        <p className="catalog-price">{formatPrice(item.price)}</p>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────
// CATALOG SECTION
// ─────────────────────────────────────────
function CatalogSection() {
  const [activeCat, setActiveCat] = useState("all");

  const items =
    activeCat === "all"
      ? CATALOG_ITEMS
      : CATALOG_ITEMS.filter((i) => i.category === activeCat);

  return (
    <section id="catalog" className="section catalog-section">
      <div className="catalog-header">
        <h2 className="section-title">Katalog</h2>
        <span className="catalog-count">{items.length} model</span>
      </div>

      {/* Category tabs */}
      <div className="cat-scroll" role="tablist" aria-label="Kategoriyalar">
        <div className="cat-tabs">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              id={`cat-${c.id}`}
              role="tab"
              aria-selected={activeCat === c.id}
              className={`cat-tab ${activeCat === c.id ? "cat-tab--active" : ""}`}
              onClick={() => setActiveCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {items.length > 0 ? (
        <div className="catalog-grid">
          {items.map((item) => (
            <CatalogCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="catalog-empty">
          <span>🔍</span>
          <p>Bu kategoriyada mahsulot yo'q</p>
        </div>
      )}
    </section>
  );
}

// ─────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-line" />
      <img src={logoSrc} alt="Nargis Collection" className="footer-logo" />
      <p className="footer-copy">© {new Date().getFullYear()} Nargis Collection</p>
      <p className="footer-sub">Barcha huquqlar himoyalangan</p>
    </footer>
  );
}

// ─────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────
export default function App() {
  return (
    <div className="app">
      <div className="bg-noise" aria-hidden="true" />

      <main className="container">
        <ProfileSection />
        <QuickLinks />
        <SocialLinks />
        <CatalogSection />
        <Footer />
      </main>
    </div>
  );
}
