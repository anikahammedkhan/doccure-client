import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='py-10'
            style={{
                backgroundImage: `url("https://doccure-html.dreamguystech.com/template/assets/img/footer-bg1.jpg")`,
            }}
        >
            <footer className="footer p-10 text-white w-3/4 mx-auto">
                <div>
                    <img src="https://doccure-html.dreamguystech.com/template/assets/img/footer-logo.png" alt="" />
                    <p className='text-white'>Doccure Private Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;