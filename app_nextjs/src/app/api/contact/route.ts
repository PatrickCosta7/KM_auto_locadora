import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, car } = body;

    // Validate required fields
    if (!name || !phone || !email || !car) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM system
    // 4. Log the submission

    console.log('Contact form submission:', { name, phone, email, car });

    // For now, just return success
    // In production, implement actual form processing logic
    return NextResponse.json(
      { message: 'Formulário recebido com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
