'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Save, Plus, Trash2, Edit3, BookOpen } from 'lucide-react';
import {
    FormCard, FormGroup, SaveBtn, AddBtn,
    ListItem, ActionBtn, ListHeader, StatGrid, StatCard
} from '@/components/admin/AdminUI';

export default function AdminEducationPage() {
    const queryClient = useQueryClient();
    const [list, setList] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const { data: education, isLoading } = useQuery({
        queryKey: ['admin-education'],
        queryFn: () => fetch('/api/data?type=education').then(res => res.json())
    });

    useEffect(() => {
        if (education) setList(education);
    }, [education]);

    const mutation = useMutation({
        mutationFn: (updatedData: any[]) =>
            fetch('/api/data?type=education', {
                method: 'POST',
                body: JSON.stringify(updatedData),
                headers: { 'Content-Type': 'application/json' }
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-education'] });
            alert('Academic record updated!');
        }
    });

    const handleAdd = () => {
        const newItem = { school: 'New University', degree: 'Degree Name', period: 'Year - Year', description: '' };
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

    if (isLoading) return <div>Loading Academy History...</div>;

    return (
        <>
            <StatGrid>
                <StatCard>
                    <div className="icon"><BookOpen size={20} /></div>
                    <div className="text"><h5>Academy</h5><p>{list.length} Records</p></div>
                </StatCard>
            </StatGrid>

            <FormCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <ListHeader>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Manage Educational Background</h3>
                    <AddBtn onClick={handleAdd}><Plus size={20} /> Add Academic Record</AddBtn>
                </ListHeader>

                <div>
                    {list.map((item, i) => (
                        <div key={i}>
                            {editingIndex === i ? (
                                <div style={{ padding: '2rem', background: 'var(--accent)', borderRadius: '1.5rem', marginBottom: '1.5rem', border: '2px solid var(--primary)' }}>
                                    <FormGroup><label>Institution / School</label><input value={item.school} onChange={(e) => handleUpdate(i, { school: e.target.value })} /></FormGroup>
                                    <FormGroup><label>Degree / Certification</label><input value={item.degree} onChange={(e) => handleUpdate(i, { degree: e.target.value })} /></FormGroup>
                                    <FormGroup><label>Period</label><input value={item.period} onChange={(e) => handleUpdate(i, { period: e.target.value })} /></FormGroup>
                                    <FormGroup><label>Description / Honors</label><textarea rows={3} value={item.description} onChange={(e) => handleUpdate(i, { description: e.target.value })} /></FormGroup>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                        <button onClick={() => setEditingIndex(null)} style={{ background: 'var(--foreground)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700 }}>Confirm Record</button>
                                        <button onClick={() => handleDelete(i)} style={{ color: '#ef4444', fontWeight: 600 }}>Remove Record</button>
                                    </div>
                                </div>
                            ) : (
                                <ListItem>
                                    <div className="info">
                                        <h4>{item.degree}</h4>
                                        <p>{item.school} • {item.period}</p>
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
                        <Save size={20} /> Synchronize Academy
                    </SaveBtn>
                </div>
            </FormCard>
        </>
    );
}
