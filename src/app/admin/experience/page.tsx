'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Save, Plus, Trash2, Edit3, FileText } from 'lucide-react';
import {
    FormCard, FormGroup, SaveBtn, AddBtn,
    ListItem, ActionBtn, ListHeader, StatGrid, StatCard
} from '@/components/admin/AdminUI';

export default function AdminExperiencePage() {
    const queryClient = useQueryClient();
    const [list, setList] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const { data: experience, isLoading } = useQuery({
        queryKey: ['admin-experience'],
        queryFn: () => fetch('/api/data?type=experience').then(res => res.json())
    });

    useEffect(() => {
        if (experience) setList(experience);
    }, [experience]);

    const mutation = useMutation({
        mutationFn: (updatedData: any[]) =>
            fetch('/api/data?type=experience', {
                method: 'POST',
                body: JSON.stringify(updatedData),
                headers: { 'Content-Type': 'application/json' }
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-experience'] });
            alert('Chronicle updated!');
        }
    });

    const handleAdd = () => {
        const newItem = { company: 'New Org', role: 'Engineer', period: '2025 - Present', description: '', achievements: [], products: [] };
        const newList = [...list, newItem];
        setList(newList);
        setEditingIndex(newList.length - 1);
    };

    const handleUpdate = (index: number, payload: any) => {
        const newList = [...list];
        newList[index] = { ...newList[index], ...payload };
        setList(newList);
    };

    const handleDelete = (index: number) => {
        setList(list.filter((_, i) => i !== index));
        setEditingIndex(null);
    };

    if (isLoading) return <div>Loading Career...</div>;

    return (
        <>
            <StatGrid>
                <StatCard>
                    <div className="icon"><FileText size={20} /></div>
                    <div className="text"><h5>Chronicle</h5><p>{list.length} Milestones</p></div>
                </StatCard>
            </StatGrid>

            <FormCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <ListHeader>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Professional Chronicle</h3>
                    <AddBtn onClick={handleAdd}><Plus size={20} /> Record Milestone</AddBtn>
                </ListHeader>

                <div>
                    {list.map((item, i) => (
                        <div key={i}>
                            {editingIndex === i ? (
                                <div style={{ padding: '2rem', background: 'var(--accent)', borderRadius: '1.5rem', marginBottom: '1.5rem', border: '2px solid var(--primary)' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <FormGroup><label>Organization</label><input value={item.company} onChange={(e) => handleUpdate(i, { company: e.target.value })} /></FormGroup>
                                        <FormGroup><label>Designation</label><input value={item.role} onChange={(e) => handleUpdate(i, { role: e.target.value })} /></FormGroup>
                                    </div>
                                    <FormGroup><label>Tenure</label><input value={item.period} onChange={(e) => handleUpdate(i, { period: e.target.value })} /></FormGroup>
                                    <FormGroup><label>Mission Description</label><textarea rows={3} value={item.description} onChange={(e) => handleUpdate(i, { description: e.target.value })} /></FormGroup>
                                    <FormGroup><label>Achievements (one per line)</label>
                                        <textarea rows={4} value={item.achievements?.join('\n')} onChange={(e) => handleUpdate(i, { achievements: e.target.value.split('\n').filter(a => a.trim() !== '') })} />
                                    </FormGroup>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                        <button onClick={() => setEditingIndex(null)} style={{ background: 'var(--foreground)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700 }}>Record Edits</button>
                                        <button onClick={() => handleDelete(i)} style={{ color: '#ef4444', fontWeight: 600 }}>Archived Entry</button>
                                    </div>
                                </div>
                            ) : (
                                <ListItem>
                                    <div className="info">
                                        <h4>{item.role}</h4>
                                        <p>{item.company} • {item.period}</p>
                                    </div>
                                    <div className="actions">
                                        <ActionBtn $type="edit" onClick={() => setEditingIndex(i)}><Edit3 size={18} /></ActionBtn>
                                        <ActionBtn $type="delete" onClick={() => handleDelete(i)}><Trash2 size={18} /></ActionBtn>
                                    </div>
                                </ListItem>
                            )}
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '3rem', display: 'flex' }}>
                    <SaveBtn onClick={() => mutation.mutate(list)}>
                        <Save size={20} /> Synchronize Chronicle
                    </SaveBtn>
                </div>
            </FormCard>
        </>
    );
}
