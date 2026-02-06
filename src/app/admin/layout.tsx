'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard, Folder, Lightbulb, User, FileText,
    Award, ChevronLeft, ChevronRight, LogOut, Bell, BookOpen, Rocket
} from 'lucide-react';
import { AdminLayoutWrapper, MainContent } from '@/components/admin/AdminUI';

const Sidebar = styled(motion.aside) <{ $collapsed: boolean }>`
  width: ${props => props.$collapsed ? '80px' : '280px'};
  background: white;
  border-right: 1px solid var(--border);
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: sticky;
  top: 0;
  height: 100vh;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 100;
`;

const SidebarItem = styled(Link) <{ $active: boolean; $collapsed: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem;
  border-radius: 0.75rem;
  width: 100%;
  text-align: left;
  font-weight: 600;
  color: ${props => props.$active ? 'white' : 'var(--secondary)'};
  background: ${props => props.$active ? 'var(--primary)' : 'transparent'};
  justify-content: ${props => props.$collapsed ? 'center' : 'flex-start'};
  text-decoration: none;
  
  &:hover {
    background: ${props => props.$active ? 'var(--primary-dark)' : 'var(--accent)'};
    color: ${props => props.$active ? 'white' : 'var(--primary)'};
  }

  span {
    display: ${props => props.$collapsed ? 'none' : 'block'};
    white-space: nowrap;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 100px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow-sm);
  }
`;

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/admin' },
        { icon: <User size={20} />, label: 'About Me', path: '/admin/about' },
        { icon: <Lightbulb size={20} />, label: 'Skills', path: '/admin/skills' },
        { icon: <Folder size={20} />, label: 'Main Projects', path: '/admin/projects' },
        { icon: <Rocket size={20} />, label: 'Side Projects', path: '/admin/side-projects' },
        { icon: <FileText size={20} />, label: 'Experience', path: '/admin/experience' },
        { icon: <BookOpen size={20} />, label: 'Education', path: '/admin/education' },
        { icon: <Award size={20} />, label: 'Certificates', path: '/admin/certificates' },
    ];

    return (
        <AdminLayoutWrapper>
            <Sidebar $collapsed={isCollapsed} animate={{ width: isCollapsed ? 80 : 280 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: isCollapsed ? 'center' : 'space-between', padding: '0 0.5rem 2rem' }}>
                    {!isCollapsed && <h2 style={{ fontSize: '1.25rem', fontWeight: 900, color: 'var(--primary)' }}>CONSOLE</h2>}
                    <button onClick={() => setIsCollapsed(!isCollapsed)} style={{ color: 'var(--secondary)' }}>
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                {menuItems.map((item) => (
                    <SidebarItem
                        key={item.path}
                        href={item.path}
                        $active={pathname === item.path}
                        $collapsed={isCollapsed}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </SidebarItem>
                ))}

                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <SidebarItem href="/" $active={false} $collapsed={isCollapsed}>
                        <LogOut size={20} />
                        <span>Public Site</span>
                    </SidebarItem>
                </div>
            </Sidebar>

            <MainContent>
                <Header>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.5px' }}>
                            Victor <span style={{ color: 'var(--primary)' }}>Console</span>
                        </h1>
                    </div>
                    <div className="user-info">
                        <Bell size={18} />
                        <div style={{ width: 1, height: 20, background: 'var(--border)' }} />
                        <span style={{ fontWeight: 700 }}>Victor Juwa</span>
                        <img src="https://ui-avatars.com/api/?name=Victor+Juwa&background=8B5CF6&color=fff" style={{ width: 35, height: 35, borderRadius: '50%' }} />
                    </div>
                </Header>
                {children}
            </MainContent>
        </AdminLayoutWrapper>
    );
}
