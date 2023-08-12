import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../src/components/data";
import airplane from './images/airplane.png';
import Cookies from 'js-cookie';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const linksRef = useRef(null);
  const LinksContainer = useRef(null);
  const username = Cookies.get('username');
  
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      LinksContainer.current.style.height = `${linksHeight}px`;
    } else {
      LinksContainer.current.style.height = "0px";
    }
  }, [showLinks]);
  
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h3 style={{ color: 'lightblue' }}>TravelGenius</h3>
          <img src={airplane} height={20} width={20} alt="Example" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={LinksContainer}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              if ((text === 'Log in' || text === 'Sign up') && username) {
                return null;
              }
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
            {username && <li><a href="/profile">{username}</a></li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
