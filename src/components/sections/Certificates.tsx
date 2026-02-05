'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, ZoomIn } from 'lucide-react';
import { Container, Section } from '../ui/Container';

const CertGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`;

const CertCard = styled(motion.div)`
  background: white;
  border: 1px solid var(--border);
  border-radius: 2rem;
  overflow: hidden;
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  position: relative;
  
  &:hover {
    box-shadow: var(--shadow-lg);
    border-color: var(--primary-light);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${CertCard}:hover & img {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(139, 92, 246, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;

  ${CertCard}:hover & {
    opacity: 1;
  }
`;

const CertInfo = styled.div`
  padding: 1.75rem;
  
  .badge {
    background: var(--accent);
    color: var(--primary);
    padding: 0.3rem 0.8rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 800;
    display: inline-block;
    margin-bottom: 1rem;
    border: 1px solid var(--border);
  }

  h4 {
    font-size: 1.25rem;
    color: var(--foreground);
    margin-bottom: 0.5rem;
    line-height: 1.3;
  }

  p {
    color: var(--secondary);
    font-size: 0.95rem;
    font-weight: 500;
  }
`;

const ModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  width: 100%;
  max-width: 900px;
  border-radius: 2.5rem;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 45px;
  height: 45px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--foreground);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  z-index: 10;
  
  &:hover {
    transform: rotate(90deg);
    color: var(--error);
  }
`;

export const Certificates = ({ data }: { data: any[] }) => {
    const [selected, setSelected] = useState<any>(null);

    return (
        <Section>
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <motion.h2
                        style={{ fontSize: '3rem', fontWeight: 800 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Verified Expertise
                    </motion.h2>
                    <motion.p
                        style={{ color: 'var(--secondary)', fontSize: '1.2rem', marginTop: '1rem' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        A collection of certifications and honors validating technical proficiency.
                    </motion.p>
                </div>

                <CertGrid>
                    {data?.map((cert, i) => (
                        <CertCard
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelected(cert)}
                        >
                            <ImageWrapper>
                                <img src={cert.image} alt={cert.title} />
                                <Overlay>
                                    <ZoomIn size={32} />
                                </Overlay>
                            </ImageWrapper>
                            <CertInfo>
                                <span className="badge">{cert.issuer}</span>
                                <h4>{cert.title}</h4>
                                <p>{cert.date}</p>
                            </CertInfo>
                        </CertCard>
                    ))}
                </CertGrid>
            </Container>

            <AnimatePresence>
                {selected && (
                    <ModalBackdrop
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <ModalContainer
                            initial={{ scale: 0.8, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.8, y: 50, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <CloseButton onClick={() => setSelected(null)}>
                                <X size={24} />
                            </CloseButton>
                            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(400px, 1fr) 1.2fr', gap: '0' }}>
                                <div style={{ height: '500px' }}>
                                    <img
                                        src={selected.image}
                                        alt={selected.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Award size={60} style={{ color: 'var(--primary)', marginBottom: '2rem' }} />
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', lineHeight: '1.2' }}>{selected.title}</h3>
                                    <p style={{ color: 'var(--secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                                        Successfully verified and issued by <strong>{selected.issuer}</strong> in {selected.date}.
                                        This credential recognizes advanced proficiency in architectural design and technical implementation.
                                    </p>
                                    <button style={{
                                        background: 'var(--foreground)',
                                        color: 'white',
                                        padding: '1.25rem 2rem',
                                        borderRadius: '1rem',
                                        fontWeight: 700,
                                        display: 'flex',
                                        alignItems: center,
                                        gap: '0.75rem',
                                        width: 'fit-content'
                                    }}>
                                        Verify Credential <ExternalLink size={20} />
                                    </button>
                                </div>
                            </div>
                        </ModalContainer>
                    </ModalBackdrop>
                )}
            </AnimatePresence>
        </Section>
    );
};
