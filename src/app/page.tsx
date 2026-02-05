'use client';

import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Experience } from '@/components/sections/Experience';
import { Strength } from '@/components/sections/Strength';
import { Certificates } from '@/components/sections/Certificates';

const Main = styled.main`
  overflow-x: hidden;
`;

const LoadingOverlay = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
`;

export default function Home() {
    const { data: about, isLoading: loadingAbout } = useQuery({
        queryKey: ['about'],
        queryFn: () => fetch('/api/data?type=about').then(res => res.json())
    });

    const { data: skills, isLoading: loadingSkills } = useQuery({
        queryKey: ['skills'],
        queryFn: () => fetch('/api/data?type=skills').then(res => res.json())
    });

    const { data: experience, isLoading: loadingExp } = useQuery({
        queryKey: ['experience'],
        queryFn: () => fetch('/api/data?type=experience').then(res => res.json())
    });

    const { data: certificates, isLoading: loadingCerts } = useQuery({
        queryKey: ['certificates'],
        queryFn: () => fetch('/api/data?type=certificates').then(res => res.json())
    });

    if (loadingAbout || loadingSkills || loadingExp || loadingCerts) {
        return <LoadingOverlay>Loading Portfolio...</LoadingOverlay>;
    }

    return (
        <>
            <Navbar />
            <Main>
                <Hero data={about} />
                <Skills data={skills} />
                <Experience data={experience} />
                <Strength data={skills} />
                <Certificates data={certificates} />
            </Main>
            <Footer />
        </>
    );
}
