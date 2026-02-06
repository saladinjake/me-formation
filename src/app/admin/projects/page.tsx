'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Save, Plus, Trash2, Edit3, Folder } from 'lucide-react';
import {
    FormCard, FormGroup, SaveBtn, AddBtn,
    ListItem, ActionBtn, ListHeader, StatGrid, StatCard
} from '@/components/admin/AdminUI';

export default function AdminProjectsPage() {
    const queryClient = useQueryClient();
    const [list, setList] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const { data: projects, isLoading } = useQuery({
        queryKey: ['admin-projects'],
        queryFn: () => fetch('/api/data?type=projects').then(res => res.json())
    });

    useEffect(() => {
        if (projects) setList(projects);
    }, [projects]);

    const mutation = useMutation({
        mutationFn: (updatedData: any[]) =>
            fetch('/api/data?type=projects', {
                method: 'POST',
                body: JSON.stringify(updatedData),
                headers: { 'Content-Type': 'application/json' }
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-projects'] });
            alert('Main portfolio updated!');
        }
    });

    const handleAdd = () => {
        const newList = [...list, { title: 'New Project', stacks: [], complexity: 'High', description: '', image: '', liveLink: '', github: '' }];
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

    if (isLoading) return <div>Loading Portfolio...</div>;

    return (
        <>
            <StatGrid>
                <StatCard>
                    <div className="icon"><Folder size={20} /></div>
                    <div className="text"><h5>Showcase</h5><p>{list.length} Main Projects</p></div>
                </StatCard>
            </StatGrid>

            <FormCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <ListHeader>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Primary Project Portfolio</h3>
                    <AddBtn onClick={handleAdd}><Plus size={20} /> Deploy New Milestone</AddBtn>
                </ListHeader>

                <div>
                    {list.map((item, i) => (
                        <div key={i}>
                            {editingIndex === i ? (
                                <div style={{ padding: '2rem', background: 'var(--accent)', borderRadius: '1.5rem', marginBottom: '1.5rem', border: '2px solid var(--primary)' }}>
                                    <FormGroup><label>Project Title</label><input value={item.title} onChange={(e) => handleUpdate(i, { title: e.target.value })} /></FormGroup>
                                    <FormGroup><label>Description</label><textarea rows={3} value={item.description} onChange={(e) => handleUpdate(i, { description: e.target.value })} /></FormGroup>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <FormGroup><label>Live URL</label><input value={item.liveLink} onChange={(e) => handleUpdate(i, { liveLink: e.target.value })} /></FormGroup>
                                        <FormGroup><label>Source Code</label><input value={item.github} onChange={(e) => handleUpdate(i, { github: e.target.value })} /></FormGroup>
                                    </div>
                                    <FormGroup><label>Tech Stacks (comma separated)</label><input value={item.stacks?.join(', ')} onChange={(e) => handleUpdate(i, { stacks: e.target.value.split(',').map(s => s.trim()) })} /></FormGroup>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <FormGroup><label>Engineering Complexity</label><select value={item.complexity} onChange={(e) => handleUpdate(i, { complexity: e.target.value })}><option>High</option><option>Medium</option><option>Low</option></select></FormGroup>
                                        <FormGroup><label>Hero Image URL</label><input value={item.image} onChange={(e) => handleUpdate(i, { image: e.target.value })} /></FormGroup>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                        <button onClick={() => setEditingIndex(null)} style={{ background: 'var(--foreground)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700 }}>Finalize Edits</button>
                                        <button onClick={() => handleDelete(i)} style={{ color: '#ef4444', fontWeight: 600 }}>Unpublish</button>
                                    </div>
                                </div>
                            ) : (
                                <ListItem>
                                    <div className="info">
                                        <h4>{item.title}</h4>
                                        <p>{item.complexity} Complexity • {item.stacks?.length || 0} Techs</p>
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
                        <Save size={20} /> Synchronize Showcase
                    </SaveBtn>
                </div>
            </FormCard>
        </>
    );
}
