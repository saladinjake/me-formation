'use client';

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Download, Globe, Mail, Phone, MapPin, Printer, Share2, ShieldCheck, Layers, BookOpen, Rocket, Award, ExternalLink } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const PageHero = styled.div`
  padding: 12rem 0 4rem;
  background: var(--accent);
  text-align: center;
`;

const ResumePaper = styled(motion.div)`
  background: white;
  max-width: 1000px;
  margin: -4rem auto 8rem;
  padding: 5rem;
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--border);
  border-radius: 2rem;
  position: relative;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 2rem;
    margin: -2rem 1rem 6rem;
  }
`;

const ResumeHeader = styled.div`
  border-bottom: 3px solid var(--primary);
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  .item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
    color: var(--secondary);
    font-weight: 600;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--primary);
  border-left: 4px solid var(--primary);
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ExpItem = styled.div`
  margin-bottom: 3rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 5px;
    width: 12px;
    height: 12px;
    background: var(--primary-light);
    border-radius: 50%;
  }

  .title-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    
    h3 { font-size: 1.25rem; font-weight: 800; }
    span { font-weight: 700; color: var(--primary); }
  }
  
  .company {
    font-weight: 700;
    color: var(--secondary);
    font-size: 1.05rem;
    margin-bottom: 1rem;
    display: block;
  }
  
  ul {
    list-style: none;
    li {
      margin-bottom: 0.75rem;
      color: #334155;
      line-height: 1.6;
      display: flex;
      gap: 1rem;
      
      &::before { content: '•'; color: var(--primary); font-weight: 900; }
    }
  }
`;

const SkillBadgeGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  
  span {
    background: var(--accent);
    color: var(--primary-dark);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.85rem;
    border: 1px solid var(--border);
  }
`;

const FloatingActions = styled.div`
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
`;

const ActionBtn = styled.button`
  width: 60px;
  height: 60px;
  background: white;
  color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--border);
  
  &:hover {
    background: var(--primary);
    color: white;
    transform: scale(1.1);
  }
`;

import { useQuery } from '@tanstack/react-query';

export default function ResumePage() {
  const { data: about, isLoading: loadingAbout } = useQuery({
    queryKey: ['about'],
    queryFn: () => fetch('/api/data?type=about').then(res => res.json())
  });

  const { data: experience, isLoading: loadingExperience } = useQuery({
    queryKey: ['experience'],
    queryFn: () => fetch('/api/data?type=experience').then(res => res.json())
  });

  const { data: skills, isLoading: loadingSkills } = useQuery({
    queryKey: ['skills'],
    queryFn: () => fetch('/api/data?type=skills').then(res => res.json())
  });

  const { data: education, isLoading: loadingEducation } = useQuery({
    queryKey: ['education'],
    queryFn: () => fetch('/api/data?type=education').then(res => res.json())
  });

  const { data: sideProjects, isLoading: loadingSideProjects } = useQuery({
    queryKey: ['side_projects'],
    queryFn: () => fetch('/api/data?type=side_projects').then(res => res.json())
  });

  const { data: certificates, isLoading: loadingCertificates } = useQuery({
    queryKey: ['certificates'],
    queryFn: () => fetch('/api/data?type=certificates').then(res => res.json())
  });

  if (loadingAbout || loadingExperience || loadingSkills || loadingEducation || loadingSideProjects || loadingCertificates) return null;

  return (
    <>
      <Navbar />
      <PageHero>
        <Container>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <span style={{ background: 'white', padding: '0.4rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', border: '1px solid var(--border)' }}>
              Juwa Victor
            </span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 900, marginTop: '1.5rem', letterSpacing: '-1.5px' }}>

            </h1>
          </motion.div>
        </Container>
      </PageHero>

      <Container>
        <ResumePaper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ResumeHeader>
            <div>
              <h1 style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-1px' }}>{about.name}</h1>
              <h3 style={{ color: 'var(--secondary)', fontSize: '1.4rem', fontWeight: 600 }}>{about.title}</h3>
            </div>
            <ContactGrid>
              <div className="item"><Mail size={18} /> {about.email}</div>
              <div className="item"><Phone size={18} /> {about.phone}</div>
              <div className="item"><Globe size={18} /> Link: victor-juwa.vercel.app</div>
              <div className="item"><MapPin size={18} /> {about.location}</div>
            </ContactGrid>
          </ResumeHeader>

          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle><ShieldCheck size={24} /> Professional Summary</SectionTitle>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155' }}>
              {about.bio}
            </p>
          </div>

          <div style={{ marginBottom: '4rem', paddingLeft: '2.5rem', borderLeft: '2px dashed var(--border)' }}>
            <SectionTitle style={{ marginLeft: '-2.7rem' }}><Printer size={24} /> Experience</SectionTitle>

            {experience.map((exp: any, i: number) => (
              <ExpItem key={i}>
                <div className="title-row">
                  <h3>{exp.role}</h3>
                  <span>{exp.period}</span>
                </div>
                <span className="company">{exp.company}</span>
                <ul>
                  {exp.achievements?.map((a: string, j: number) => (
                    <li key={j}>{a}</li>
                  ))}
                </ul>

                {exp.products && exp.products.length > 0 && (
                  <div style={{ marginTop: '1.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--accent)' }}>
                    <h5 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Delivered Milestones</h5>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {exp.products.map((prod: any, k: number) => (
                        <div key={k}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
                            <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{prod.name}</span>
                            {prod.link && (
                              <a href={prod.link} target="_blank" style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                View <ExternalLink size={12} />
                              </a>
                            )}
                          </div>
                          <p style={{ fontSize: '0.9rem', color: '#475569', marginBottom: '0.5rem' }}>{prod.description}</p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                            {prod.techStack?.map((t: string) => (
                              <span key={t} style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', background: '#f1f5f9', borderRadius: '4px', color: '#475569', fontWeight: 600 }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ExpItem>
            ))}
          </div>

          <div style={{ marginBottom: '4rem', paddingLeft: '2.5rem', borderLeft: '2px dashed var(--border)' }}>
            <SectionTitle style={{ marginLeft: '-2.7rem' }}><BookOpen size={24} /> Education</SectionTitle>

            {education?.map((edu: any, i: number) => (
              <ExpItem key={i}>
                <div className="title-row">
                  <h3>{edu.degree}</h3>
                  <span>{edu.period}</span>
                </div>
                <span className="company">{edu.school}</span>
                <p style={{ color: '#334155', lineHeight: '1.6' }}>{edu.description}</p>
              </ExpItem>
            ))}
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle><Rocket size={24} /> Strategic Side Projects</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {sideProjects?.map((proj: any, i: number) => (
                <div key={i} style={{ padding: '1.5rem', background: 'var(--accent)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h4 style={{ fontWeight: 800, color: 'var(--primary-dark)' }}>{proj.title}</h4>
                    {proj.link && (
                      <a href={proj.link} target="_blank" style={{ color: 'var(--primary)' }}>
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--secondary)', marginBottom: '1rem' }}>{proj.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {proj.tech?.map((t: string) => (
                      <span key={t} style={{ fontSize: '0.7rem', fontWeight: 800, background: 'white', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '4rem' }}>
            <SectionTitle><Award size={24} /> Professional Certifications</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
              {certificates?.map((cert: any, i: number) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '100%', aspectRatio: '4/3', background: 'var(--accent)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', border: '1px solid var(--border)' }}>
                    <Award size={40} color="var(--primary)" opacity={0.3} />
                  </div>
                  <h5 style={{ fontWeight: 800, fontSize: '0.9rem' }}>{cert.title}</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionTitle><Layers size={24} /> Technical Arsenal</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
              <div>
                <h4 style={{ marginBottom: '1rem', fontWeight: 800 }}>Core Technologies</h4>
                <SkillBadgeGrid>
                  {skills.slice(0, 10).map((s: any) => <span key={s.name}>{s.name}</span>)}
                </SkillBadgeGrid>
              </div>
              <div>
                <h4 style={{ marginBottom: '1rem', fontWeight: 800 }}>Primary Focus</h4>
                <SkillBadgeGrid>
                  {skills.slice(10, 20).map((s: any) => <span key={s.name}>{s.name}</span>)}
                </SkillBadgeGrid>
              </div>
            </div>
          </div>
        </ResumePaper>
      </Container>

      <FloatingActions>
        <ActionBtn title="Download PDF"><Download size={24} /></ActionBtn>
        <ActionBtn title="Share Profile"><Share2 size={24} /></ActionBtn>
      </FloatingActions>
      <Footer />
    </>
  );
}
