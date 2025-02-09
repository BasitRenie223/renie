import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const Navbar = () => {
  const navRef = useRef(null);
  const menuImageRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const buttonRef = useRef(null);
  const tl = useRef(gsap.timeline({ paused: true }));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust based on mobile breakpoint
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    // GSAP Animation for Navbar Toggle
    tl.current
      .set([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 1,
      })
      .set(menuImageRef.current, { opacity: 0, display: "none" }) // Initially hide small.png
      .to([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 0,
        display: "none",
        duration: 0,
      })
      .to(
        navRef.current,
        {
          width: "78px",
          background: "white",
          height: "65px",
          borderRadius: "8px",
          duration: 0.4,
        },
        "<"
      )
      .to(
        menuImageRef.current,
        {
          opacity: 1,
          display: "block",
          duration: 0,
        },
        "<"
      );

    const handleScroll = () => {
      if (window.scrollY > 1 || isMobile) {
        gsap.to(menuImageRef.current, { opacity: 1, display: "block", duration: 0.3 }); // Show small.png
        tl.current.play();
      } else {
        gsap.to(menuImageRef.current, { opacity: 0, display: "none", duration: 0.3 }); // Hide small.png
        tl.current.reverse();
        gsap.to(navRef.current, {
          height: "70px",
          duration: 0.5,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScreenSize);
    };
  }, [isMobile]);

  const handleMouseEnter = () => {
    if (window.scrollY > 1 || isMobile) {
      gsap.to(navRef.current, {
        width: "100%",
        height: "70px",
        borderRadius: "0px",
        duration: 0.6, // Slower transition (increased from 0.3 to 0.6)
      });
      gsap.to([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 1,
        display: "flex",
        duration: 0.6, // Slower transition (increased from 0.3 to 0.6)
      });
      gsap.to(menuImageRef.current, { opacity: 0, duration: 0.4 }); // Slower fade (increased from 0.2 to 0.4)
    }
  };
  
  const handleMouseLeave = () => {
    if (window.scrollY > 1 || isMobile) {
      gsap.to([logoRef.current, linksRef.current, buttonRef.current], {
        opacity: 0,
        display: "none",
        duration: 0.6, // Slower transition (increased from 0.3 to 0.6)
      });
      gsap.to(navRef.current, {
        width: "78px",
        height: "65px",
        borderRadius: "8px",
        duration: 0.6, // Slower transition (increased from 0.3 to 0.6)
      });
      gsap.to(menuImageRef.current, { opacity: 1, duration: 0.4 }); // Slower fade (increased from 0.3 to 0.4)
    }
  };
  

  return (
    <nav
      ref={navRef}
      className="main-navbar container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        ref={logoRef}
        src="/assets/logo.png"
        alt="Renie Logo"
        width={140}
        height={50}
      />
      <ul
        ref={linksRef}
        className="d-flex gap-3 navbar-links"
        style={{
          listStyle: "none",
          display: "flex",
          flexWrap: "nowrap",
        }}
      >
        <li>Renie Bin</li>
        <li>Renie Hub</li>
        <li>Renie App</li>
        <li>Ads that Matter</li>
        <li>Media Hub</li>
      </ul>
      <button ref={buttonRef} className="btn">
        Connect with an expert
      </button>
      <Image
        ref={menuImageRef}
        src="/assets/small.png"
        alt="Menu Icon"
        width={40}
        height={40}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          display: "none", 
        }}
      />
    </nav>
  );
};

export default Navbar;
