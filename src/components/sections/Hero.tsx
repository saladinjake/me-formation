'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Section } from '../ui/Container';
import { ArrowRight, Trophy, Code2, Rocket } from 'lucide-react';

const HeroSection = styled(Section)`
  padding-top: 140px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 90% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 5rem;
  align-items: center;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const Badge = styled(motion.span)`
  background: var(--accent);
  color: var(--primary);
  padding: 0.6rem 1.2rem;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 2rem;
  border: 1px solid var(--border);
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -2px;

  span {
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--secondary);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
`;

const CTAWrap = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const CTAButton = styled.button<{ $primary?: boolean }>`
  padding: 1.25rem 2.5rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: ${props => props.$primary ? 'var(--primary)' : 'white'};
  color: ${props => props.$primary ? 'white' : 'var(--foreground)'};
  border: ${props => props.$primary ? 'none' : '1px solid var(--border)'};
  box-shadow: ${props => props.$primary ? '0 10px 30px rgba(139, 92, 246, 0.3)' : 'var(--shadow-md)'};

  &:hover {
    transform: translateY(-5px);
    background: ${props => props.$primary ? 'var(--primary-dark)' : 'var(--accent)'};
  }
`;

const SliderWrapper = styled(motion.div)`
  position: relative;
  height: 500px;
  border-radius: 2.5rem;
  overflow: hidden;
  box-shadow: var(--shadow-glass);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const SliderBackground = styled(motion.div) <{ $color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.$color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: white;
`;

const IconWrap = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const highlights = [
    {
        title: "5+ Years of Excellence",
        desc: "Building scalable enterprise applications with cutting-edge tech.",
        color: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
        icon: <Code2 size={40} />
    },
    {
        title: "20+ Successful Products",
        desc: "From fintech to e-commerce, delivering value to global clients.",
        color: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
        icon: <Trophy size={40} />
    },
    {
        title: "Performance Driven",
        desc: "Optimizing for speed, accessibility, and robust architecture.",
        color: 'linear-gradient(135deg, #6D28D9 0%, #4C1D95 100%)',
        icon: <Rocket size={40} />
    }
];

export const Hero = ({ data }: { data: any }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % highlights.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <HeroSection>
            <Container>
                <HeroGrid>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <Badge
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Available for New Projects
                        </Badge>
                        <Title>
                            Hello, I am <br />
                            <span>{data?.name || 'Saleem Kudra'}</span>
                        </Title>
                        <Description>
                            A {data?.title || 'Senior Fullstack Developer'} with {data?.experience_years || 8} years of experience.
                            {data?.bio || 'I specialize in building complex, data-driven interfaces with modern React patterns and enterprise-grade architecture.'}
                        </Description>
                        <CTAWrap>
                            <CTAButton $primary onClick={() => window.location.href = '/projects'}>
                                View My Work <ArrowRight size={20} />
                            </CTAButton>
                            <CTAButton onClick={() => window.location.href = '/contact'}>
                                Hire Me
                            </CTAButton>
                        </CTAWrap>
                    </motion.div>

                    <SliderWrapper
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        <AnimatePresence mode="wait">
                            <SliderBackground
                                key={index}
                                $color={highlights[index].color}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.6, cubicBezier: [0.4, 0, 0.2, 1] }}
                            >
                                <IconWrap>{highlights[index].icon}</IconWrap>
                                <motion.h3
                                    style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 800, color: "#fff" }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {highlights[index].title}
                                </motion.h3>
                                <motion.p
                                    style={{ fontSize: '1.2rem', opacity: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    {highlights[index].desc}
                                </motion.p>
                            </SliderBackground>
                        </AnimatePresence>
                    </SliderWrapper>
                </HeroGrid>
            </Container>
        </HeroSection>
    );
};
