import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-50 border-t border-amber-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">La Tranquila</h3>
            <p className="text-gray-600 mb-4">
              Un refugio natural a orillas del Río Paraná, donde la naturaleza
              se convierte en tu hogar.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-600 hover:text-amber-600"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://instagram.com"
                className="text-gray-600 hover:text-amber-600"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-amber-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/informacion"
                  className="text-gray-600 hover:text-amber-600"
                >
                  Información
                </Link>
              </li>
              <li>
                <Link
                  href="/ubicacion"
                  className="text-gray-600 hover:text-amber-600"
                >
                  Ubicación
                </Link>
              </li>
              <li>
                <Link
                  href="/guia-local"
                  className="text-gray-600 hover:text-amber-600"
                >
                  Guía Local
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-600" />
                <span className="text-gray-600">+54 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-600" />
                <span className="text-gray-600">info@latranquila.com</span>
              </li>
              <li className="text-gray-600 mt-2">
                Aldea Brasilera, Entre Ríos, Argentina
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
