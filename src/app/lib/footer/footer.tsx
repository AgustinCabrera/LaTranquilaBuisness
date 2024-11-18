import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer>
  <div className="footer-content">
    <div className="footer-section">
      <h3>Customer Service</h3>
      <ul>
        <li><Link href="/help">Help Center</Link></li>
        <li><Link href="/returns">Returns</Link></li>
        <li><Link href="/shipping">Shipping Info</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>About Us</h3>
      <ul>
        <li><Link href="/about">Nuestra historia</Link></li>
        <li><Link href="/sustainability">Guia local</Link></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Follow Us</h3>
      <ul className="social-links">
        <li><Link href="https://www.instagram.com">Instagram</Link></li>
        <li><Link href="https://www.twitter.com">Twitter</Link></li>
        <li><Link href="https://www.facebook.com">Facebook</Link></li>
      </ul>
    </div>
  </div>

  <div className="footer-bottom">
    <p>© {new Date().getFullYear()} La Tranquila, Casa de la costa. All rights reserved.</p>
    <Link href="/">Volver al inicio</Link>
  </div>
</footer>
  )
}
export default Footer;