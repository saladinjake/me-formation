'use client';

import styled from 'styled-components';
import { Container } from '../ui/Container';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FooterBase = styled.footer`
  padding: 8rem 0 4rem;
  background: white;
  border-top: 1px solid var(--border);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--primary-light), transparent);
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 4rem;
  margin-bottom: 6rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const FooterCols = styled.div`
  h4 {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary);
  }
  
  p {
    color: var(--secondary);
    line-height: 1.7;
    font-size: 1rem;
    max-width: 300px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  
  a {
    color: var(--secondary);
    font-weight: 600;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: var(--primary);
      transform: translateX(5px);
    }
  }
`;

const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  border-top: 1px solid var(--border);
  color: var(--secondary);
  font-size: 0.95rem;
  font-weight: 500;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    width: 45px;
    height: 45px;
    background: var(--accent);
    color: var(--primary);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid var(--border);

    &:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-5px) rotate(8deg);
      box-shadow: 0 10px 20px rgba(139, 92, 246, 0.2);
    }
  }
`;

const Logo = styled(Link)`
  font-size: 2rem;
  font-weight: 900;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: block;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
`;

export const Footer = () => {
    return (
        <FooterBase>
            <Container>
                <FooterGrid>
                    <FooterCols>
                        <Logo href="/">SK Portfolio</Logo>
                        <p>
                            Architecting high-performance digital experiences with focus on
                            enterprise-grade scalability and robust design patterns.
                        </p>
                        <SocialLinks style={{ marginTop: '2.5rem' }}>
                            <a href="#"><Linkedin size={20} /></a>
                            <a href="#"><Github size={20} /></a>
                            <a href="#"><Twitter size={20} /></a>
                            <a href="#"><Mail size={20} /></a>
                        </SocialLinks>
                    </FooterCols>

                    <FooterCols>
                        <h4>Sitemap</h4>
                        <ul>
                            <li><Link href="/">Home <ArrowUpRight size={14} opacity={0.5} /></Link></li>
                            <li><Link href="/projects">Projects <ArrowUpRight size={14} opacity={0.5} /></Link></li>
                            <li><Link href="/resume">Resume <ArrowUpRight size={14} opacity={0.5} /></Link></li>
                            <li><Link href="/contact">Contact <ArrowUpRight size={14} opacity={0.5} /></Link></li>
                        </ul>
                    </FooterCols>

                    <FooterCols>
                        <h4>Technical</h4>
                        <ul>
                            <li><a href="#">Next.js 15</a></li>
                            <li><a href="#">TypeScript</a></li>
                            <li><a href="#">Styled Components</a></li>
                            <li><a href="#">Framer Motion</a></li>
                        </ul>
                    </FooterCols>

                    <FooterCols>
                        <h4>Hire Me</h4>
                        <p style={{ marginBottom: '1.5rem' }}>Currently open to senior engineering roles and technical consulting.</p>
                        <Link href="/contact" style={{
                            color: 'var(--primary)',
                            fontWeight: 800,
                            borderBottom: '2px solid var(--primary)'
                        }}>
                            Start a Conversation
                        </Link>
                    </FooterCols>
                </FooterGrid>

                <Copyright>
                    <span>© {new Date().getFullYear()} Saleem Kudra. All rights reserved.</span>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </Copyright>
            </Container>
        </FooterBase>
    );
};
