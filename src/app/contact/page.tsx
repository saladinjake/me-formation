'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Twitter, Github } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const PageHero = styled.div`
  padding: 12rem 0 4rem;
  background: radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.05) 0%, transparent 50%);
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;
  margin-top: 4rem;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const InfoBox = styled.div`
  .head {
    margin-bottom: 3rem;
    h2 { font-size: 2.5rem; font-weight: 900; margin-bottom: 1rem; }
    p { color: var(--secondary); font-size: 1.15rem; line-height: 1.6; }
  }
`;

const ContactCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    border-color: var(--primary-light);
    box-shadow: var(--shadow-md);
  }

  .icon {
    width: 60px;
    height: 60px;
    background: var(--accent);
    color: var(--primary);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details {
    h4 { font-size: 0.9rem; text-transform: uppercase; color: var(--secondary); letter-spacing: 1px; margin-bottom: 0.25rem; }
    p { font-size: 1.15rem; font-weight: 700; color: var(--foreground); }
  }
`;

const FormBox = styled(motion.form)`
  background: white;
  padding: 4rem;
  border-radius: 2.5rem;
  box-shadow: var(--shadow-glass);
  border: 1px solid rgba(139, 92, 246, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (max-width: 576px) {
    padding: 2rem;
  }
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--foreground);
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  input, textarea {
    width: 100%;
    padding: 1.25rem;
    background: #f8fafc;
    border: 1px solid var(--border);
    border-radius: 1rem;
    font-family: inherit;
    font-size: 1rem;
    transition: all 0.2s;

    &:focus {
      outline: none;
      background: white;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
    }
  }
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  padding: 1.25rem;
  border-radius: 1.25rem;
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
  margin-top: 1rem;

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-3px);
  }
`;

const SocialStrip = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  
  a {
    width: 50px;
    height: 50px;
    background: var(--foreground);
    color: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    
    &:hover {
      background: var(--primary);
      transform: translateY(-5px);
    }
  }
`;

import { useQuery } from '@tanstack/react-query';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');

  const { data: about, isLoading } = useQuery({
    queryKey: ['about'],
    queryFn: () => fetch('/api/data?type=about').then(res => res.json())
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  if (isLoading) return null;

  return (
    <>
      <Navbar />
      <PageHero>
        <Container>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span style={{ color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>Get In Touch</span>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, marginTop: '1rem', letterSpacing: '-2px' }}>
              Let's Build Something <span style={{ color: 'var(--primary)' }}>Exceptional</span>
            </h1>
          </motion.div>
        </Container>
      </PageHero>

      <Section>
        <Container>
          <ContactGrid>
            <InfoBox>
              <div className="head">
                <h2>Contact Information</h2>
                <p>
                  Whether you have a specific project inquiry or just want to discuss technical architecture,
                  I am always open to high-impact conversations.
                </p>
              </div>

              <ContactCard>
                <div className="icon"><Mail size={28} /></div>
                <div className="details">
                  <h4>Email Address</h4>
                  <p>{about.email}</p>
                </div>
              </ContactCard>

              <ContactCard>
                <div className="icon"><Phone size={28} /></div>
                <div className="details">
                  <h4>Direct Line</h4>
                  <p>{about.phone}</p>
                </div>
              </ContactCard>

              <ContactCard>
                <div className="icon"><MapPin size={28} /></div>
                <div className="details">
                  <h4>Headquarters</h4>
                  <p>{about.location}</p>
                </div>
              </ContactCard>

              <SocialStrip>
                <a href="https://linkedin.com" target="_blank"><Linkedin size={22} /></a>
                <a href="https://github.com" target="_blank"><Github size={22} /></a>
                <a href="https://twitter.com" target="_blank"><Twitter size={22} /></a>
                <a href="#"><MessageSquare size={22} /></a>
              </SocialStrip>
            </InfoBox>

            <FormBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
            >
              <InputGroup>
                <Field>
                  <label>First Name</label>
                  <input placeholder="Jane" required />
                </Field>
                <Field>
                  <label>Last Name</label>
                  <input placeholder="Doe" required />
                </Field>
              </InputGroup>

              <Field>
                <label>Professional Email</label>
                <input type="email" placeholder="jane@company.com" required />
              </Field>

              <Field>
                <label>Project Details / Message</label>
                <textarea rows={5} placeholder="Tell me about your goals or technical challenges..." required />
              </Field>

              <SubmitButton type="submit" disabled={status !== 'idle'}>
                {status === 'idle' && <><Send size={20} /> Transmit Message</>}
                {status === 'sending' && 'Transmitting...'}
                {status === 'sent' && 'Message Received ✓'}
              </SubmitButton>

              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ color: 'var(--success)', fontWeight: 700, textAlign: 'center' }}
                >
                  Thank you! I will respond to your inquiry within 24 hours.
                </motion.p>
              )}
            </FormBox>
          </ContactGrid>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
