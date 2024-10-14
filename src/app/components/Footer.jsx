"use client";
import { useState, useEffect } from "react";
import { RiCopyrightLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <>
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Company Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Discount Offers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-white">
                <FaInstagramSquare />
              </a>
              <a href="#" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white">
                <FaFacebook />
              </a>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2">Download Our App</h4>
              <div className="flex space-x-2">
                <FaGooglePlay />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} AQTECH. All rights reserved.</p>
          <p>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>{" "}
            |{" "}
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
