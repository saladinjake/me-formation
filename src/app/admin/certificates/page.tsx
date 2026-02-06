'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Save, Plus, Trash2, Edit3, Award } from 'lucide-react';
import {
    FormCard, FormGroup, SaveBtn, AddBtn,
    ListItem, ActionBtn, ListHeader, StatGrid, StatCard
} from '@/components/admin/AdminUI';

export default function AdminCertificatesPage() {
    const queryClient = useQueryClient();
    const [list, setList] = useState<any[]>([]);
    const [editingIndex, setEditingIndex] = useState<number | null>(null);

    const { data: certificates, isLoading } = useQuery({
        queryKey: ['admin-certificates'],
        queryFn: () => fetch('/api/data?type=certificates').then(res => res.json())
    });

    useEffect(() => {
        if (certificates) setList(certificates);
    }, [certificates]);

    const mutation = useMutation({
        mutationFn: (updatedData: any[]) =>
            fetch('/api/data?type=certificates', {
                method: 'POST',
                body: JSON.stringify(updatedData),
                headers: { 'Content-Type': 'application/json' }
            }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['admin-certificates'] });
            alert('Credentials updated!');
        }
    });

    const handleAdd = () => {
        const newItem = { title: 'New Accreditation', issuer: 'Issuer', date: '2025', image: '' };
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

    if (isLoading) return <div>Loading Accreditations...</div>;

    return (
        <>
            <StatGrid>
                <StatCard>
                    <div className="icon"><Award size={20} /></div>
                    <div className="text"><h5>Validated</h5><p>{list.length} Credentials</p></div>
                </StatCard>
            </StatGrid>

            <FormCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <ListHeader>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Technical Accreditations</h3>
                    <AddBtn onClick={handleAdd}><Plus size={20} /> Register Credential</AddBtn>
                </ListHeader>

                <div>
                    {list.map((item, i) => (
                        <div key={i}>
                            {editingIndex === i ? (
                                <div style={{ padding: '2rem', background: 'var(--accent)', borderRadius: '1.5rem', marginBottom: '1.5rem', border: '2px solid var(--primary)' }}>
                                    <FormGroup><label>Accreditation Title</label><input value={item.title} onChange={(e) => handleUpdate(i, { title: e.target.value })} /></FormGroup>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                        <FormGroup><label>Issuing Organization</label><input value={item.issuer} onChange={(e) => handleUpdate(i, { issuer: e.target.value })} /></FormGroup>
                                        <FormGroup><label>Award Date</label><input value={item.date} onChange={(e) => handleUpdate(i, { date: e.target.value })} /></FormGroup>
                                    </div>
                                    <FormGroup><label>Verification Image URL</label><input value={item.image} onChange={(e) => handleUpdate(i, { image: e.target.value })} /></FormGroup>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                        <button onClick={() => setEditingIndex(null)} style={{ background: 'var(--foreground)', color: 'white', padding: '0.5rem 1.5rem', borderRadius: '0.5rem', fontWeight: 700 }}>Validate Edits</button>
                                        <button onClick={() => handleDelete(i)} style={{ color: '#ef4444', fontWeight: 600 }}>Revoke Credential</button>
                                    </div>
                                </div>
                            ) : (
                                <ListItem>
                                    <div className="info">
                                        <h4>{item.title}</h4>
                                        <p>{item.issuer} • {item.date}</p>
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
                        <Save size={20} /> Synchronize Credentials
                    </SaveBtn>
                </div>
            </FormCard>
        </>
    );
}
