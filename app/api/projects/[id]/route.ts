import { NextResponse } from 'next/server';
import { getProjectById } from '@/lib/projects-db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  // Nos aseguramos de resolver los params si vienen como Promesa
  const resolvedParams = 'then' in params ? await params : params;
  const id = Number(resolvedParams.id);

  if (Number.isNaN(id)) {
    return NextResponse.json({ error: 'Invalid id' }, { status: 400 });
  }

  const project = await getProjectById(id);
  if (!project) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}