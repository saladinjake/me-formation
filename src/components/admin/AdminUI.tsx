'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AdminLayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
  color: #1e293b;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const FormCard = styled(motion.div)`
  background: white;
  padding: 2.5rem;
  border-radius: 2rem;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  label { display: block; margin-bottom: 0.75rem; font-weight: 700; color: #334155; }
  input, textarea, select {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.2s;
    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
    }
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

export const AddBtn = styled.button`
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  &:hover { background: var(--primary-dark); transform: translateY(-2px); }
`;

export const ListItem = styled.div`
  background: var(--accent);
  padding: 1.5rem;
  border-radius: 1.25rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  transition: all 0.2s;
  &:hover {
    border-color: var(--primary-light);
    background: white;
    box-shadow: var(--shadow-sm);
  }
  .info {
    h4 { font-size: 1.1rem; margin-bottom: 0.25rem; }
    p { font-size: 0.9rem; color: var(--secondary); }
  }
  .actions { display: flex; gap: 1rem; }
`;

export const ActionBtn = styled.button<{ $type: 'edit' | 'delete' }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.$type === 'edit' ? 'white' : '#fee2e2'};
  color: ${props => props.$type === 'edit' ? 'var(--primary)' : '#ef4444'};
  border: 1px solid ${props => props.$type === 'edit' ? 'var(--border)' : 'transparent'};
  &:hover { transform: scale(1.1); }
`;

export const SaveBtn = styled.button`
  background: var(--primary);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 100px;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3);
  margin-left: auto;
  &:hover { background: var(--primary-dark); transform: translateY(-3px); }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1rem;
  .icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: var(--accent);
    color: var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    h5 { font-size: 0.85rem; color: var(--secondary); margin-bottom: 0.25rem; }
    p { font-size: 1.25rem; font-weight: 800; }
  }
`;
