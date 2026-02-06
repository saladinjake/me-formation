'use client';

import { useQuery } from '@tanstack/react-query';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Strength } from '@/components/sections/Strength';
import { Certificates } from '@/components/sections/Certificates';
import styled from 'styled-components';

const PageWrapper = styled.main`
  background: white;
  min-height: 100vh;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-weight: 900;
  color: var(--primary);
  font-size: 1.5rem;
  letter-spacing: -1px;
`;

export default function Home() {
    // Fetching all necessary data via TanStack Query
    const { data: about, isLoading: loadingAbout } = useQuery({
        queryKey: ['about'],
        queryFn: () => fetch('/api/data?type=about').then(res => res.json())
    });

    const { data: skills, isLoading: loadingSkills } = useQuery({
        queryKey: ['skills'],
        queryFn: () => fetch('/api/data?type=skills').then(res => res.json())
    });

    const { data: experience, isLoading: loadingExperience } = useQuery({
        queryKey: ['experience'],
        queryFn: () => fetch('/api/data?type=experience').then(res => res.json())
    });

    const { data: certificates, isLoading: loadingCertificates } = useQuery({
        queryKey: ['certificates'],
        queryFn: () => fetch('/api/data?type=certificates').then(res => res.json())
    });

    if (loadingAbout || loadingSkills || loadingExperience || loadingCertificates) {
        return <LoadingOverlay>Portfolio Initializing...</LoadingOverlay>;
    }

    return (
        <PageWrapper>
            <Navbar />
            <Hero data={about} />
            <div id="about">
                <Strength data={skills} />
            </div>
            <div id="skills">
                <Skills data={skills} />
            </div>
            <div id="experience">
                <Experience data={experience} />
            </div>
            <div id="certificates">
                <Certificates data={certificates} />
            </div>
            <Footer />
        </PageWrapper>
    );
}
