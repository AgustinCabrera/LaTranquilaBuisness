import Link from 'next/link';
import Image from 'next/image';
import './navbar.css';

const NavBar: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Image src="/logo1.png" alt="logo" width={50} height={50} />
      </div>
      <nav className="nav">
        <div className="links">
          <Link href="/" passHref>
            <a>Principal</a>
          </Link>
          <Link href="/category/overview" passHref>
            <a>Información</a>
          </Link>
          <Link href="/category/map" passHref>
            <a>Ubicación</a>
          </Link>
          <Link href="/category/gallery" passHref>
            <a>Galería</a>
          </Link>
          <Link href="/category/rates" passHref>
            <a>Valoraciones</a>
          </Link>
          <Link href="/category/localguide" passHref>
            <a>Guía local</a>
          </Link>
          <Link href="/category/contact" passHref>
            <a>Contacto</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
