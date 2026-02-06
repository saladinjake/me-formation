'use client';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Github, ExternalLink, Filter, Code2, Layers } from 'lucide-react';
import { Container, Section } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const PageHeader = styled.div`
  padding: 12rem 0 6rem;
  background: radial-gradient(circle at 50% 100%, rgba(139, 92, 246, 0.08) 0%, transparent 70%);
  text-align: center;
  border-bottom: 1px solid var(--border);
`;

const HeaderBadge = styled.span`
  background: var(--accent);
  color: var(--primary);
  padding: 0.5rem 1.25rem;
  border-radius: 100px;
  font-weight: 800;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SearchContainer = styled.div`
  max-width: 800px;
  margin: 3rem auto 0;
  display: flex;
  gap: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
  position: relative;
  
  input {
    width: 100%;
    padding: 1.25rem 1.5rem 1.25rem 3.5rem;
    border-radius: 1.25rem;
    border: 1px solid var(--border);
    font-size: 1.1rem;
    box-shadow: var(--shadow-md);
    transition: all 0.3s;
    background: white;
    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.1);
    }
  }
  
  svg {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--secondary);
  }
`;

const FilterBtn = styled.button<{ $active: boolean }>`
  padding: 0 1.5rem;
  border-radius: 1.25rem;
  background: ${props => props.$active ? 'var(--primary)' : 'white'};
  color: ${props => props.$active ? 'white' : 'var(--secondary)'};
  border: 1px solid ${props => props.$active ? 'var(--primary)' : 'var(--border)'};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 700;
  box-shadow: var(--shadow-sm);
  
  &:hover {
    background: ${props => props.$active ? 'var(--primary-dark)' : 'var(--accent)'};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 2.25rem;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.15);
    border-color: var(--primary-light);
  }
`;

const CardImage = styled.div`
  position: relative;
  height: 240px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${Card}:hover & img { transform: scale(1.1); }
  
  .complexity {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(8px);
    padding: 0.5rem 1rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 800;
    color: var(--primary);
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  }
`;

const CardBody = styled.div`
  padding: 2.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  p {
    color: var(--secondary);
    line-height: 1.6;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2rem;
  
  span {
    padding: 0.35rem 0.85rem;
    background: var(--accent);
    color: var(--primary);
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
  }
`;

const LinkRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: auto;
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 800;
    font-size: 0.9rem;
    color: var(--foreground);
    
    &:hover { color: var(--primary); }
  }
`;

export default function ProjectsPage() {
  const [sideProjects, setSideProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/data?type=projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setFiltered(data);
      });

    fetch('/api/data?type=side_projects')
      .then(res => res.json())
      .then(data => setSideProjects(data));
  }, []);

  useEffect(() => {
    let results = projects.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.stacks.some((s: string) => s.toLowerCase().includes(search.toLowerCase()))
    );

    if (complexityFilter !== 'All') {
      results = results.filter(p => p.complexity === complexityFilter);
    }

    setFiltered(results);
  }, [search, projects, complexityFilter]);

  return (
    <>
      <Navbar />
      <PageHeader>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HeaderBadge>Portfolio Repository</HeaderBadge>
            <h1 style={{ fontSize: '4rem', fontWeight: 900, marginTop: '1.5rem', letterSpacing: '-2px' }}>
              My Technical <span style={{ color: 'var(--primary)' }}>Projects</span>
            </h1>
            <p style={{ color: 'var(--secondary)', fontSize: '1.2rem', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
              Exploring the boundary between performance and design through enterprise-grade architecture.
            </p>
          </motion.div>

          <SearchContainer>
            <SearchWrapper>
              <Search size={24} />
              <input
                placeholder="Search by tech stack (e.g. Next.js, TypeScript)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </SearchWrapper>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {['All', 'High', 'Medium'].map(lvl => (
                <FilterBtn
                  key={lvl}
                  $active={complexityFilter === lvl}
                  onClick={() => setComplexityFilter(lvl)}
                >
                  {lvl}
                </FilterBtn>
              ))}
            </div>
          </SearchContainer>
        </Container>
      </PageHeader>

      <Section>
        <Container>
          <AnimatePresence>
            <Grid>
              {filtered.map((proj, i) => (
                <Card
                  key={proj.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <CardImage>
                    <img src={proj.image || `https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600`} alt={proj.title} />
                    <span className="complexity">{proj.complexity} Complexity</span>
                  </CardImage>
                  <CardBody>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                      <Code2 size={20} color="var(--primary)" />
                      <h3 style={{ margin: 0 }}>{proj.title}</h3>
                    </div>
                    <p>{proj.description}</p>
                    <TagList>
                      {proj.stacks?.map((s: string) => <span key={s}>{s}</span>)}
                    </TagList>
                    <LinkRow>
                      <a href={proj.github} target="_blank"><Github size={18} /> Source</a>
                      <a href={proj.liveLink} target="_blank"><ExternalLink size={18} /> Live Performance</a>
                    </LinkRow>
                  </CardBody>
                </Card>
              ))}
            </Grid>
          </AnimatePresence>
        </Container>
      </Section>

      <Section style={{ background: 'var(--accent)', paddingTop: '6rem', paddingBottom: '8rem' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <HeaderBadge>Internal Labs</HeaderBadge>
            <h2 style={{ fontSize: '3rem', fontWeight: 900, marginTop: '1rem', letterSpacing: '-1.5px' }}>
              Side <span style={{ color: 'var(--primary)' }}>Projects</span>
            </h2>
            <p style={{ color: 'var(--secondary)', marginTop: '0.5rem' }}>Experimental builds and open source contributions.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {sideProjects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                style={{
                  background: 'white',
                  padding: '2rem',
                  borderRadius: '1.5rem',
                  border: '1px solid var(--border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
              >
                <div style={{ background: 'var(--accent)', width: 50, height: 50, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Layers size={24} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{proj.title}</h4>
                <p style={{ color: 'var(--secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{proj.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', paddingTop: '1rem' }}>
                  {proj.tech?.map((t: string) => (
                    <span key={t} style={{ fontSize: '0.7rem', fontWeight: 800, background: 'var(--accent)', color: 'var(--primary)', padding: '0.25rem 0.6rem', borderRadius: '4px' }}>{t}</span>
                  ))}
                </div>
                <a href={proj.link} target="_blank" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)' }}>
                  <Github size={16} /> View Repository
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
