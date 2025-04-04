import React from 'react';
import styles from './Footer.module.css'; // Assuming you are using CSS modules
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Top Section */}
            <div className={styles.topSection}>
                <div className={styles.topItem}>𝌣 Transforming Digital Solutions</div>
                <div className={styles.topItem}>🤖 AI-Powered Tools  </div>
                <div className={styles.topItem}>👍 24/7 Customer Support</div>
            </div>

            {/* Branding Section */}
            <div className={styles.brandingSection}>
                <img src="/ss.png" alt="Winpoint Digital Logo" className={styles.logo} />
                <h2>Winpoint Digital</h2>
                <p>Empowering Businesses Digitally</p>
            </div>

            {/* Social Media */}


            {/* Links Section */}
            <div className={styles.linksSection}>
                <div className={styles.linksColumn}>
                    <h4>SERVICES</h4>
                    <a >Website Development</a>
                    <a>AI-Driven Marketing</a>
                    <a>Brand Identity Design</a>
                    <a >Business Automation</a>
                    <a >SEO Optimization</a>
                </div>

                <div className={styles.linksColumn}>
                    <h4>COMPANY</h4>
                    <a href="/" >Home</a>
                    <a href="/team">Our Team</a>
                    <a href="/investors">Investors</a>
                    <a href="/industries">Industries</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About Us</a>
                    <a href="/contactus">Contact Us</a>
                </div>

                <div className={styles.linksColumn}>
                    <h4>RESOURCES</h4>
                    <a>Client Success Stories</a>
                    <a>Digital Toolkits</a>
                    <a>Winpoint Blog</a>
                    <a>Service Packages</a>
                    <a>Newsletter Subscription</a>
                    <a>Digital Transformation Insights</a>
                    <a>AI & Automation Guides</a>
                    <a>Web Development Best Practices</a>
                    <a>Branding Strategies</a>
                    <a>SEO & Marketing Tips</a>

                </div>

                <div className={styles.socialMedia}>
                    <a href="https://instagram.com" target='_blank'><FaInstagram /></a>
                    <a href="https://facebook.com" target='_blank'><FaFacebookF /></a>
                    <a href="https://twitter.com" target='_blank'><FaTwitter /></a>
                    <a href="https://linkedin.com" target='_blank'><FaLinkedinIn /></a>
                </div>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                © {new Date().getFullYear()} Winpoint Digital. All rights reserved.
            </div>
        </footer>
    );
}
