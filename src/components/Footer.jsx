import { brand, footer } from '../content';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <img className="footer__mark" src={brand.markWhite} alt={brand.name} width="256" height="256" />

        <p className="footer__disclosure">{footer.disclosure}</p>

        <ul className="footer__socials">
          {footer.socials.map((s) => (
            <li key={s.label}>
              <a href={s.href}>{s.label}</a>
            </li>
          ))}
        </ul>

        <p className="footer__copy">{footer.copyright}</p>
      </div>
    </footer>
  );
}
