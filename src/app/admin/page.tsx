'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {
    Folder, FileText, Award, Rocket, BookOpen,
    ArrowRight, Activity, Users, Zap, User
} from 'lucide-react';
import Link from 'next/link';
import styled from 'styled-components';
import { StatGrid, StatCard, FormCard } from '@/components/admin/AdminUI';

const QuickLinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const QuickLinkCard = styled(Link)`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: var(--primary);
    box-shadow: var(--shadow-md);
  }

  .icon-wrap {
    width: 50px;
    height: 50px;
    background: var(--accent);
    color: var(--primary);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 { font-size: 1.25rem; font-weight: 800; color: var(--foreground); }
  p { color: var(--secondary); font-size: 0.9rem; line-height: 1.5; }
  .arrow { margin-left: auto; color: var(--primary); }
`;

export default function AdminDashboard() {
    const { data: about } = useQuery({ queryKey: ['about'], queryFn: () => fetch('/api/data?type=about').then(res => res.json()) });
    const { data: projects } = useQuery({ queryKey: ['projects'], queryFn: () => fetch('/api/data?type=projects').then(res => res.json()) });
    const { data: experience } = useQuery({ queryKey: ['experience'], queryFn: () => fetch('/api/data?type=experience').then(res => res.json()) });

    const stats = [
        { icon: <Activity size={20} />, label: 'System Status', value: 'Optimal' },
        { icon: <Zap size={20} />, label: 'Site Speed', value: 'A+' },
        { icon: <Users size={20} />, label: 'Visitors', value: 'Active' },
        { icon: <Award size={20} />, label: 'Sync', value: 'Live' },
    ];

    return (
        <>
            <StatGrid>
                {stats.map((stat, i) => (
                    <StatCard key={i}>
                        <div className="icon">{stat.icon}</div>
                        <div className="text"><h5>{stat.label}</h5><p>{stat.value}</p></div>
                    </StatCard>
                ))}
            </StatGrid>

            <FormCard initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Welcome, {about?.name?.split(' ')[0] || 'Victor'}</h2>
                <p style={{ color: 'var(--secondary)', marginBottom: '3rem' }}>Your digital portfolio is synchronized and performing at peak efficiency.</p>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem' }}>Core Modules</h3>
                <QuickLinkGrid>
                    <QuickLinkCard href="/admin/projects">
                        <div className="icon-wrap"><Folder size={24} /></div>
                        <h4>Main Projects</h4>
                        <p>Showcase your enterprise-level architected solutions.</p>
                        <ArrowRight size={20} className="arrow" />
                    </QuickLinkCard>

                    <QuickLinkCard href="/admin/side-projects">
                        <div className="icon-wrap"><Rocket size={24} /></div>
                        <h4>Side Projects</h4>
                        <p>Manage secondary labs and open source contributions.</p>
                        <ArrowRight size={20} className="arrow" />
                    </QuickLinkCard>

                    <QuickLinkCard href="/admin/education">
                        <div className="icon-wrap"><BookOpen size={24} /></div>
                        <h4>Education</h4>
                        <p>Keep your academic background and learning history up to date.</p>
                        <ArrowRight size={20} className="arrow" />
                    </QuickLinkCard>
                </QuickLinkGrid>
            </FormCard>
        </>
    );
}
