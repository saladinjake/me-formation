'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { Container, Section } from '../ui/Container';

const ExpCard = styled(motion.div)`
  background: white;
  border: 1px solid var(--border);
  border-radius: 2rem;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.4s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--primary-light);
  }
`;

const ExpHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  gap: 2rem;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CompanyIcon = styled.div`
  width: 60px;
  height: 60px;
  background: var(--accent);
  color: var(--primary);
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid var(--border);
`;

const MainInfo = styled.div`
  flex: 1;
  h3 {
    font-size: 1.6rem;
    color: var(--primary-dark);
    margin-bottom: 0.25rem;
  }
  h4 {
    font-size: 1.1rem;
    color: var(--foreground);
    font-weight: 600;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
  @media (max-width: 576px) {
    align-items: flex-start;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--secondary);
    font-size: 0.9rem;
    font-weight: 500;
  }
`;

const CollapsibleContent = styled(motion.div)`
  overflow: hidden;
`;

const Divider = styled.div`
  height: 1px;
  background: linear-gradient(to right, var(--border), transparent);
  margin: 1.5rem 0;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.5rem;

  span {
    padding: 0.4rem 1rem;
    background: var(--accent);
    color: var(--primary);
    border-radius: 100px;
    font-size: 0.8rem;
    font-weight: 700;
    border: 1px solid var(--border);
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ProductCard = styled(motion.div)`
  background: var(--accent);
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid var(--border);
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1.25rem;
    box-shadow: var(--shadow-sm);
  }

  h5 { font-size: 1.1rem; margin-bottom: 0.5rem; }
  p { font-size: 0.9rem; color: var(--secondary); line-height: 1.5; }
`;

const AchievementList = styled.ul`
  list-style: none;
  margin-top: 1rem;
  li {
    display: flex;
    gap: 1rem;
    margin-bottom: 0.75rem;
    color: var(--secondary);
    line-height: 1.5;
    
    &::before {
      content: '→';
      color: var(--primary);
      font-weight: 800;
    }
  }
`;

const ExperienceItem = ({ exp }: { exp: any }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <ExpCard
            layout
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <ExpHeader onClick={() => setIsExpanded(!isExpanded)}>
                <div style={{ display: 'flex', gap: '1.5rem', flex: 1 }}>
                    <CompanyIcon>
                        <Briefcase size={28} />
                    </CompanyIcon>
                    <MainInfo>
                        <h3>{exp.company}</h3>
                        <h4>{exp.role}</h4>
                    </MainInfo>
                </div>
                <MetaInfo>
                    <span><Calendar size={16} /> {exp.period}</span>
                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        style={{ color: 'var(--primary)', background: 'var(--accent)', borderRadius: '50%', padding: '5px' }}
                    >
                        <ChevronDown size={20} />
                    </motion.div>
                </MetaInfo>
            </ExpHeader>

            <AnimatePresence>
                {isExpanded && (
                    <CollapsibleContent
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <Divider />
                        <p style={{ color: 'var(--foreground)', fontSize: '1.05rem' }}>{exp.description}</p>

                        <h5 style={{ margin: '1.5rem 0 0.5rem', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Key Achievements:</h5>
                        <AchievementList>
                            {exp.achievements?.map((a: string, i: number) => (
                                <li key={i}>{a}</li>
                            ))}
                        </AchievementList>

                        {exp.products && exp.products.length > 0 && (
                            <>
                                <h5 style={{ margin: '2rem 0 1rem', fontSize: '1.1rem', color: 'var(--primary-dark)' }}>Delivered Products:</h5>
                                <ProductGrid>
                                    {exp.products.map((p: any, i: number) => (
                                        <ProductCard
                                            key={i}
                                            whileHover={{ y: -5 }}
                                        >
                                            <img src={p.image} alt={p.name} />
                                            <h5>{p.name}</h5>
                                            <p>{p.description}</p>
                                        </ProductCard>
                                    ))}
                                </ProductGrid>
                            </>
                        )}

                        {exp.stacks && (
                            <TechStack>
                                {exp.stacks.map((s: string) => <span key={s}>{s}</span>)}
                            </TechStack>
                        )}
                    </CollapsibleContent>
                )}
            </AnimatePresence>
        </ExpCard>
    );
};

export const Experience = ({ data }: { data: any[] }) => {
    return (
        <Section>
            <Container>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.h2
                        style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Professional Journey
                    </motion.h2>
                    <motion.p
                        style={{ color: 'var(--secondary)', fontSize: '1.2rem', marginTop: '1rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        8 years of delivering high-impact solutions for enterprise clients.
                    </motion.p>
                </div>
                <div>
                    {data?.map((exp, i) => (
                        <ExperienceItem key={i} exp={exp} />
                    ))}
                </div>
            </Container>
        </Section>
    );
};
