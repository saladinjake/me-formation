'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Save, User } from 'lucide-react';
import {
    FormCard, FormGroup, SaveBtn,
    StatGrid, StatCard
} from '@/components/admin/AdminUI';

export default function AdminAboutPage() {
    const queryClient = useQueryClient();
    const [formData, setFormData] = useState<any>(null);

    const { data: about, isLoading } = useQuery({
        queryKey: ['admin-about'],
        queryFn: () => fetch('/api/data?type=about').then(res => res.json())
    });

    useEffect(() => {
        if (about) setFormData(about);
    }, [about]);

    const mutation = useMutation({
        mutationFn: (updatedData: any) =>
            fetch('/api/data?type=about', {
                method: 'POST',
                body: JSON.stringify(updatedData),
                headers: { 'Content-Type': 'application/json' }
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-about'] });
            alert('Profile updated successfully!');
        }
    });

    if (isLoading || !formData) return <div>Loading Profile...</div>;

    return (
        <>
            <StatGrid>
                <StatCard>
                    <div className="icon"><User size={20} /></div>
                    <div className="text"><h5>Identity</h5><p>{formData.name}</p></div>
                </StatCard>
            </StatGrid>

            <FormCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <h2 style={{ marginBottom: '2rem', fontSize: '1.5rem', fontWeight: 800 }}>Profile Settings</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                    <FormGroup style={{ gridColumn: '1 / -1' }}>
                        <label>Full Professional Name</label>
                        <input
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Role / Title</label>
                        <input
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Years of Expertise</label>
                        <input
                            type="number"
                            value={formData.experience_years}
                            onChange={e => setFormData({ ...formData, experience_years: parseInt(e.target.value) })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Email</label>
                        <input
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <label>Phone</label>
                        <input
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup style={{ gridColumn: '1 / -1' }}>
                        <label>Location</label>
                        <input
                            value={formData.location}
                            onChange={e => setFormData({ ...formData, location: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup style={{ gridColumn: '1 / -1' }}>
                        <label>Professional Biography</label>
                        <textarea
                            rows={6}
                            value={formData.bio}
                            onChange={e => setFormData({ ...formData, bio: e.target.value })}
                        />
                    </FormGroup>
                    <FormGroup style={{ gridColumn: '1 / -1' }}>
                        <label>Hero Highlights (one per line)</label>
                        <textarea
                            rows={4}
                            value={formData.hero_highlights?.join('\n')}
                            onChange={e => setFormData({ ...formData, hero_highlights: e.target.value.split('\n').filter(h => h.trim() !== '') })}
                        />
                    </FormGroup>
                </div>

                <div style={{ marginTop: '2rem', display: 'flex' }}>
                    <SaveBtn onClick={() => mutation.mutate(formData)}>
                        <Save size={20} /> Update Identity
                    </SaveBtn>
                </div>
            </FormCard>
        </>
    );
}
