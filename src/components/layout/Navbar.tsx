'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Container } from '../ui/Container';
import Link from 'next/link';

const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.$scrolled ? '70px' : '90px'};
  background: ${props => props.$scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.$scrolled ? 'blur(12px)' : 'none'};
  z-index: 1000;
  border-bottom: ${props => props.$scrolled ? '1px solid rgba(139, 92, 246, 0.1)' : 'none'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

const NavContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const Logo = styled(Link)`
  font-size: 1.75rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinkWrapper = styled.div`
  position: relative;
`;

const NavLink = styled(Link)`
  font-weight: 600;
  color: var(--secondary);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: var(--primary);
  }
`;

const DropdownMenu = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  width: 220px;
  background: white;
  border-radius: 1rem;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: var(--shadow-glass);
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DropdownItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  color: var(--secondary);
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    background: var(--accent);
    color: var(--primary);
  }
`;

const MenuButton = styled.button`
  display: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--primary);
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileDrawer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 350px;
  background: white;
  z-index: 1001;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: -10px 0 50px rgba(139, 92, 246, 0.1);
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 1000;
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showContactDropdown, setShowContactDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Nav $scrolled={isScrolled}>
        <NavContent>
          <Logo href="/">VJ Portfolio</Logo>
          <NavLinks>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/resume">Resume</NavLink>

            <NavLinkWrapper
              onMouseEnter={() => setShowContactDropdown(true)}
              onMouseLeave={() => setShowContactDropdown(false)}
            >
              <NavLink href="/contact">
                Contact Me <ChevronDown size={14} style={{ transform: showContactDropdown ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </NavLink>
              <AnimatePresence>
                {showContactDropdown && (
                  <DropdownMenu
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DropdownItem href="mailto:saleem@example.com">
                      <Mail size={18} /> Email Me
                    </DropdownItem>
                    <DropdownItem href="https://linkedin.com/victor-juwa" target="_blank">
                      <Linkedin size={18} /> LinkedIn
                    </DropdownItem>
                    <DropdownItem href="https://github.com/saladinjake" target="_blank">
                      <Github size={18} /> GitHub
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </AnimatePresence>
            </NavLinkWrapper>

            <NavLink href="/admin" style={{
              background: 'var(--primary)',
              color: 'white',
              padding: '0.6rem 1.25rem',
              borderRadius: '100px',
              boxShadow: '0 4px 15px rgba(139, 92, 246, 0.3)'
            }}>Admin</NavLink>
          </NavLinks>
          <MenuButton onClick={toggle}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </MenuButton>
        </NavContent>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggle}
            />
            <MobileDrawer
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <Logo href="/" onClick={toggle}>SK.</Logo>
                <button onClick={toggle} style={{ color: 'var(--secondary)' }}><X size={28} /></button>
              </div>
              <NavLink href="/" onClick={toggle} style={{ fontSize: '1.2rem', padding: '0.5rem 0' }}>Home</NavLink>
              <NavLink href="/projects" onClick={toggle} style={{ fontSize: '1.2rem', padding: '0.5rem 0' }}>Projects</NavLink>
              <NavLink href="/resume" onClick={toggle} style={{ fontSize: '1.2rem', padding: '0.5rem 0' }}>Resume</NavLink>
              <NavLink href="/contact" onClick={toggle} style={{ fontSize: '1.2rem', padding: '0.5rem 0' }}>Contact Me</NavLink>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Link href="/admin" onClick={toggle} style={{
                  background: 'var(--primary)',
                  color: 'white',
                  padding: '1rem',
                  borderRadius: '1rem',
                  textAlign: 'center',
                  fontWeight: 700,
                  boxShadow: '0 10px 20px rgba(139, 92, 246, 0.2)'
                }}>
                  Admin Portal
                </Link>
              </div>
            </MobileDrawer>
          </>
        )}
      </AnimatePresen