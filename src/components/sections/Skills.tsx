'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section } from '../ui/Container';

const SkillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: center;
  margin-top: 4rem;
`;

const SkillPill = styled(motion.div)`
  padding: 0.85rem 1.75rem;
  background: white;
  border: 1px solid var(--border);
  border-radius: 100px;
  font-weight: 700;
  color: var(--secondary);
  box-shadow: var(--shadow-sm);
  cursor: default;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  backdrop-filter: blur(8px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--primary);
    border-color: var(--primary);
    box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
    transform: translateY(-5px) scale(1.05);
    background: var(--accent);
  }

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.6;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  margin-bottom: 1.25rem;
  letter-spacing: -1px;
`;

const SectionDesc = styled(motion.p)`
  text-align: center;
  color: var(--secondary);
  max-width: 650px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.7;
`;

export const Skills = ({ data }: { data: any[] }) => {
    return (
        <Section style={{ background: 'var(--accent)', position: 'relative', overflow: 'hidden' }}>
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'rgba(139, 92, 246, 0.03)',
                borderRadius: '50%',
                filter: 'blur(80px)'
            }} />
            <Container>
                <SectionTitle
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Ecosystem
                </SectionTitle>
                <SectionDesc
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Leveraging a diverse stack of modern technologies to build high-performance,
                    enterprise-standard applications with complex design patterns.
                </SectionDesc>
                <SkillGrid>
                    {data?.map((skill, i) => (
                        <SkillPill
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: 'spring',
                                stiffness: 260,
                                damping: 20,
                                delay: i * 0.05
                            }}
                            viewport={{ once: true }}
                        >
                            {skill.name}
                        </SkillPill>
                    ))}
                </SkillGrid>
            </Container>
        </Section>
    );
};
