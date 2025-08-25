'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    car: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Formulário enviado com sucesso!');
        setFormData({ name: '', phone: '', email: '', car: '' });
      } else {
        alert('Erro ao enviar formulário. Tente novamente.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Erro ao enviar formulário. Tente novamente.');
    }
  };

  return (
    <section id="contato" className="py-16 lg:py-20 xl:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Car Image - Hidden on mobile */}
          <div className="hidden lg:block">
            {/* <Image
              src="/images/car.png"
              alt="Imagem de carro"
              width={500}
              height={400}
              className="w-full h-auto max-w-lg xl:max-w-xl"
            /> */}
          </div>

          {/* Contact Form */}
          <div className="lg:ml-8 xl:ml-12">
            <div className="bg-slate-200 rounded-3xl p-6 lg:p-8 xl:p-10 shadow-lg max-w-lg mx-auto lg:mx-0">
              <h3 className="text-2xl lg:text-2xl xl:text-3xl font-semibold text-primary mb-6 lg:mb-8 font-oxygen text-center">
                Quero ser um investidor KM
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">

                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nome"
                  required
                />

                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Telefone"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  required
                />

                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />

                <Input
                  type="text"
                  name="car"
                  value={formData.car}
                  onChange={handleInputChange}
                  placeholder="Modelo do veículo"
                  required
                />

                <Button
                  type="submit"
                  className="w-full text-md lg:text-lg py-1 lg:py-4"
                >
                  Quero ser um investidor KM
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
