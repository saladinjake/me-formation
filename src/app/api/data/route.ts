import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (!type) {
        return NextResponse.json({ error: 'Data type is required' }, { status: 400 });
    }

    const filePath = path.join(DATA_DIR, `${type}.json`);

    try {
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const body = await request.json();

    if (!type) {
        return NextResponse.json({ error: 'Data type is required' }, { status: 400 });
    }

    const filePath = path.join(DATA_DIR, `${type}.json`);

    try {
        fs.writeFileSync(filePath, JSON.stringify(body, null, 2));
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to write data' }, { status: 500 });
    }
}
