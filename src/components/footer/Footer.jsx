import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-neutral text-neutral-content">
            {/* Main Grid Container */}
            <div className="px-6 py-10 max-w-7xl mx-auto flex flex-col items-center text-center gap-10 md:flex-row md:justify-between md:items-start md:text-left">

                {/* Brand Info */}
                <aside>
                    <img
                        src="/RoomieConnect 3D.png"
                        alt="Roomie Connect Logo"
                        className="w-[80px] rounded-2xl mb-2 mx-auto md:mx-0"
                    />
                    <p className="max-w-xs">
                        <span className="text-xl font-bold block">
                            <span className="text-indigo-500">Roomie</span>
                            <span className="text-cyan-300">Connect</span>
                        </span>
                        Providing reliable roommate matchmaking since 2019.
                    </p>
                </aside>

                {/* Contact Details */}
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <ul className="space-y-1">
                        <li><strong>Address:</strong> Dhaka Highway, Near Sadar Hospital</li>
                        <li><strong>Phone:</strong> +880 1644 000688</li>
                        <li><strong>Email:</strong> support@roomieconnect.com</li>
                    </ul>
                </nav>

                {/* Legal and Support Links */}
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <ul className="space-y-1">
                        <li>
                            <Link to="/termsConditions" className="link link-hover">Terms & Conditions</Link>
                        </li>
                        <li>
                            <Link to="/privacyPolicy" className="link link-hover">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="link link-hover">Contact & Support</Link>
                        </li>
                    </ul>
                </nav>

                {/* Social Links */}
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <div className="flex gap-4 text-lg justify-center md:justify-start">
                        <a
                            href="https://www.x.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition duration-300"
                        >
                            <BsTwitterX />
                        </a>
                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition duration-300"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition duration-300"
                        >
                            <FaFacebookF />
                        </a>
                    </div>
                </nav>
            </div>

            {/* Bottom Footer */}
            <div className="footer footer-center pb-5 text-sm border-t border-base-300">
                <aside>
                    <p>
                        © {new Date().getFullYear()} <strong>Roomie Connect Pvt. Ltd</strong> — All rights reserved.
                    </p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;