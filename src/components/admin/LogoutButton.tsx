'use client';

import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

const Button = styled.button`
  background: white;
  border: 1px solid var(--border);
  color: var(--error);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #fee2e2;
    border-color: #fca5a5;
  }
`;

export const AdminLogout = () => {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/admin/login');
        router.refresh(); // Clear client cache
    };

    return (
        <Button onClick={handleLogout}>
            <LogOut size={16} /> Logout
        </Button>
    );
};
