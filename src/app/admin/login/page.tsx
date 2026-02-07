'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Loader2, ShieldCheck, Mail, Lock } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';

const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent);
  padding: 1rem;
`;

const FormCard = styled(motion.div)`
  background: white;
  padding: 3rem 2.5rem;
  border-radius: 2rem;
  box-shadow: var(--shadow-xl);
  max-width: 420px;
  width: 100%;
  text-align: center;
  border: 1px solid var(--border);
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  input {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    border: 1px solid var(--border);
    border-radius: 12px;
    font-size: 1rem;
    background: #f8fafc;
    transition: all 0.3s;

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px var(--accent-medium);
      background: white;
    }
  }

  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondary);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }

  &:disabled {
    background: var(--secondary);
    cursor: not-allowed;
    transform: none;
  }
`;

const ErrorMsg = styled(motion.p)`
  color: var(--error);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: #fee2e2;
  border-radius: 8px;
`;

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (res.ok) {
                router.push('/admin');
            } else {
                const data = await res.json();
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginContainer>
            <FormCard
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'var(--primary)',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <ShieldCheck size={32} />
                </div>

                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--foreground)' }}>
                    Admin Access
                </h2>
                <p style={{ color: 'var(--secondary)', marginBottom: '2rem' }}>
                    Identified personnel only.
                </p>

                <form onSubmit={handleSubmit}>
                    {error && (
                        <ErrorMsg
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {error}
                        </ErrorMsg>
                    )}

                    <InputWrapper>
                        <Mail size={18} />
                        <input
                            type="text"
                            placeholder="Authorized Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </InputWrapper>

                    <InputWrapper>
                        <Lock size={18} />
                        <input
                            type="password"
                            placeholder="Secure Passkey"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </InputWrapper>

                    <Button type="submit" disabled={loading}>
                        {loading ? <><Loader2 className="spin" size={20} /> Verifying...</> : 'Authenticate'}
                    </Button>

                    <style jsx>{`
                        .spin { animation: spin 1s linear infinite; }
                        @keyframes spin { 100% { transform: rotate(360deg); } }
                    `}</style>
                </form>
            </FormCard>
        </LoginContainer>
    );
}
