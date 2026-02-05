'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container, Section } from '../ui/Container';

const StrengthGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const BarContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-md);
    border-color: var(--primary-light);
  }
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  h4 { font-size: 1.1rem; color: var(--foreground); }
  span { font-weight: 800; color: var(--primary); font-size: 1.1rem; }
`;

const BarTrack = styled.div`
  height: 12px;
  background: var(--accent);
  border-radius: 100px;
  overflow: hidden;
  border: 1px solid rgba(139, 92, 246, 0.1);
`;

const BarFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%);
  border-radius: 100px;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.2);
`;

const Header = styled.div`
  text-align: center;
`;

interface ProgressBarProps {
  label: string;
  value: number;
  render: (value: number) => React.ReactNode;
}

const ProgressBar = ({ label, value, render }: ProgressBarProps) => (
  <BarContainer>
    <LabelRow>
      <h4>{label}</h4>
      {render(value)}
    </LabelRow>
    <BarTrack>
      <BarFill
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </BarTrack>
  </BarContainer>
);

export const Strength = ({ data }: { data: any[] }) => {
  const strengths = data?.slice(0, 12) || [];

  return (
    <Section style={{ background: 'var(--accent)', position: 'relative' }}>
      <Container>
        <Header>
          <motion.h2
            style={{ fontSize: '3rem', fontWeight: 800, letterSpacing: '-1px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Core Competencies
          </motion.h2>
          <motion.p
            style={{ color: 'var(--secondary)', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Demonstrating expertise through <strong>Design Patterns</strong> for granular UI control and api solutions.
          </motion.p>
        </Header>

        <StrengthGrid>
          {strengths.map((item, i) => (
            <ProgressBar
              key={i}
              label={item.name}
              value={item.level}
              render={(val) => <span>{val}%</span>}
            />
          ))}
        </StrengthGrid>
      </Container>
    </Section>
  );
};
