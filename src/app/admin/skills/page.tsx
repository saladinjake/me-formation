'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Save, Plus, Trash2, Edit3, Lightbulb } from 'lucide-react';
import {
    FormCard, FormGroup, SaveBtn, AddBtn,
    ListItem, ActionBtn, ListHeader, StatGrid, StatCard
} from '@/components/admin/AdminUI';

export default function AdminSkillsPage() {
    const queryClient = useQueryClient();
    const [list, setList] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const { data: skills, isLoading } = useQuery({
        queryKey: ['admin-skills'],
        queryFn: () => fetch('/api/data?type=skills').then(res => res.json())
    });

    useEffect(() => {
        if (skills) setList(skills);
    }, [skills]);

    const mutation = useMutation({
        mutationFn: (updatedData: any[]) =>
            fetch('/api/data?type=skills', {
                method: 'POST',
                body: JSON.stringify(updatedData),
                headers: { 'Content-Type': 'application/json' }
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-skills'] });
            alert('Skills synchronized!');
        }
    });

    const handleAdd = () => {
        const newList = [...list, { name: 'New Skill', level: 80, category: 'Frontend' }];
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

    if (isLoading) return <div>Loading Technical Stack...</div>;

    return (
        <>
            <StatGrid>
                <StatCard>
                    <div className="icon"><Lightbulb size={20} /></div>
                    <div className="text"><h5>Technical</h5><p>{list.length} Skills</p></div>
                </StatCard>
            </StatGrid>

            <FormCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <ListHeader>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Technical Arsenal</h3>
                    <AddBtn onClick={handleAdd}><Plus size={20} /> Add Capability</AddBtn>
                </ListHeader>

                <div>
                    {list.map((item, i) => (
                        <div key={i}>
                            {editingIndex === i ? (
                                <div style={{ padding: '2rem', background: 'var(--accent)', borderRadius: '1.5rem', marginBottom: '1.5rem', border: '2px solid var(--primary)' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
                                        <FormGroup><label>Skill Name</label><input value={item.name} onChange={(e) => handleUpdate(i, { name: e.target.value })} /></FormGroup>
                                        <FormGroup><label>Proficiency (%)</label><input type="number" value={item.level} onChange={(e) => handleUpdate(i, { level: parseInt(e.target.value) })} /></FormGroup>
                                        <FormGroup><label>Category</label><input value={item.category} onChange={(e) => handleUpdate(i, { category: e.target.value })} /></FormGroup>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                        <button onClick={() => setEditingIndex(null)} style={{ background: 'var(--foreground)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700 }}>Done Editing</button>
                                        <button onClick={() => handleDelete(i)} style={{ color: '#ef4444', fontWeight: 600 }}>Delete Permanently</button>
                                    </div>
                                </div>
                            ) : (
                                <ListItem>
                                    <div className="info">
                                        <h4>{item.name}</h4>
                                        <p>{item.category} • {item.level}%</p>
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
                        <Save size={20} /> Synchronize Capabilities
                    </SaveBtn>
                </div>
            </FormCard>
        </>
    );
}
