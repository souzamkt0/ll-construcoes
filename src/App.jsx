import React, { useState } from 'react';
import { Home, MapPin, Phone, Mail, Clock, Calculator, FileText, Eye, EyeOff, ChevronDown, ChevronUp, TrendingUp, Building2, Info, ArrowRight, ArrowLeft, CheckCircle, Star, Users, Target, Award } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    renda: '',
    perfil: '',
    preferencia: '',
    disponibilidade: ''
  });
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState('plano1');
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  // Dados das unidades
  const units = {
    casa2quartos: {
      name: 'Casa 2 Quartos',
      price: 260000,
      area: '20x80m²',
      popular: true,
      plano1: {
        sinal: 260000 * 0.08,
        parcelasMensais: 1679.17,
        totalMensais: 1679.17 * 24,
        parcelasIntercaladas: 4875.00,
        totalIntercaladas: 4875.00 * 4,
        financiamentoBancario: 260000 * 0.69,
        valorInicio: (260000 * 0.08) + 1679.17
      },
      plano2: {
        sinal: 260000 * 0.08,
        parcelasIntercaladas: 4800.00,
        totalIntercaladas: 4800.00 * 10,
        saldoMensais: 260000 - (260000 * 0.08) - (4800.00 * 10),
        parcelasMensais: (260000 - (260000 * 0.08) - (4800.00 * 10)) / 24,
        totalMensais: 260000 - (260000 * 0.08) - (4800.00 * 10),
        valorInicio: (260000 * 0.08) + ((260000 - (260000 * 0.08) - (4800.00 * 10)) / 24),
        financiamentoBancario: 0
      },
      floorPlan: {
        rooms: [
          { id: 1, name: 'SALA DE ESTAR', dimensions: '4,20 x 3,60m', area: '15,12m²', color: 'blue', colSpan: 2, rowSpan: 2 },
          { id: 2, name: 'COZINHA', dimensions: '3,20 x 2,80m', area: '8,96m²', color: 'green', colSpan: 2, rowSpan: 1 },
          { id: 3, name: 'QUARTO 1', dimensions: '3,00 x 2,80m', area: '8,40m²', color: 'purple', colSpan: 1, rowSpan: 1 },
          { id: 4, name: 'QUARTO 2', dimensions: '3,00 x 2,80m', area: '8,40m²', color: 'orange', colSpan: 1, rowSpan: 1 },
          { id: 5, name: 'BANHEIRO', dimensions: '2,20 x 2,00m', area: '4,40m²', color: 'red', colSpan: 1, rowSpan: 1 },
          { id: 6, name: 'ÁREA SERVIÇOS', dimensions: '2,00 x 1,80m', area: '3,60m²', color: 'yellow', colSpan: 1, rowSpan: 1 },
          { id: 7, name: 'CORREDOR', dimensions: '1,20 x 2,80m', area: '3,36m²', color: 'gray', colSpan: 1, rowSpan: 1 }
        ],
        totalArea: '52,20m²',
        terrainDimensions: '20,00 x 80,00m',
        finishingStandard: 'Alto Padrão'
      }
    },
    casa3quartos: {
      name: 'Casa 3 Quartos',
      price: 280000,
      area: '20x80m²',
      popular: false,
      plano1: {
        sinal: 280000 * 0.08,
        parcelasMensais: 1754.00,
        totalMensais: 1754.00 * 24,
        parcelasIntercaladas: 5250.00,
        totalIntercaladas: 5250.00 * 4,
        financiamentoBancario: 280000 * 0.69,
        valorInicio: (280000 * 0.08) + 1754.00
      },
      plano2: {
        sinal: 280000 * 0.08,
        parcelasIntercaladas: 5200.00,
        totalIntercaladas: 5200.00 * 10,
        saldoMensais: 280000 - (280000 * 0.08) - (5200.00 * 10),
        parcelasMensais: (280000 - (280000 * 0.08) - (5200.00 * 10)) / 24,
        totalMensais: 280000 - (280000 * 0.08) - (5200.00 * 10),
        valorInicio: (280000 * 0.08) + ((280000 - (280000 * 0.08) - (5200.00 * 10)) / 24),
        financiamentoBancario: 0
      },
      floorPlan: {
        rooms: [
          { id: 1, name: 'SALA DE ESTAR', dimensions: '4,50 x 3,80m', area: '17,10m²', color: 'blue', colSpan: 2, rowSpan: 2 },
          { id: 2, name: 'COZINHA', dimensions: '3,50 x 3,00m', area: '10,50m²', color: 'green', colSpan: 2, rowSpan: 1 },
          { id: 3, name: 'QUARTO 1', dimensions: '3,20 x 3,00m', area: '9,60m²', color: 'purple', colSpan: 1, rowSpan: 1 },
          { id: 4, name: 'QUARTO 2', dimensions: '3,20 x 3,00m', area: '9,60m²', color: 'orange', colSpan: 1, rowSpan: 1 },
          { id: 5, name: 'QUARTO 3', dimensions: '3,00 x 2,80m', area: '8,40m²', color: 'pink', colSpan: 1, rowSpan: 1 },
          { id: 6, name: 'BANHEIRO 1', dimensions: '2,50 x 2,20m', area: '5,50m²', color: 'red', colSpan: 1, rowSpan: 1 },
          { id: 7, name: 'BANHEIRO 2', dimensions: '2,20 x 2,00m', area: '4,40m²', color: 'indigo', colSpan: 1, rowSpan: 1 },
          { id: 8, name: 'ÁREA SERVIÇOS', dimensions: '2,20 x 2,00m', area: '4,40m²', color: 'yellow', colSpan: 1, rowSpan: 1 },
          { id: 9, name: 'CORREDOR', dimensions: '1,50 x 3,00m', area: '4,50m²', color: 'gray', colSpan: 1, rowSpan: 1 }
        ],
        totalArea: '73,60m²',
        terrainDimensions: '20,00 x 80,00m',
        finishingStandard: 'Alto Padrão'
      }
    }
  };

  const currentUnit = selectedUnit || units.casa2quartos;
  const currentPlan = currentUnit[selectedPlan] || currentUnit.plano1;

  const formatCurrency = (value) => {
    if (value === undefined || value === null || isNaN(value)) {
      return 'R$ 0,00';
    }
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 9) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendation = () => {
    // Lógica para gerar recomendação baseada no perfil do cliente
    const { renda, perfil, preferencia, disponibilidade } = formData;
    
    let recommendedUnit = units.casa2quartos;
    let recommendedPlan = 'plano1';
    let reasoning = [];

    // Recomendação baseada na renda
    if (parseFloat(renda) >= 8000) {
      recommendedUnit = units.casa3quartos;
      reasoning.push('Renda compatível com casa de 3 quartos');
    } else {
      reasoning.push('Renda ideal para casa de 2 quartos');
    }

    // Recomendação baseada no perfil
    if (perfil === 'familia') {
      recommendedUnit = units.casa3quartos;
      reasoning.push('Perfil familiar ideal para 3 quartos');
    } else if (perfil === 'casal') {
      recommendedUnit = units.casa2quartos;
      reasoning.push('Perfil de casal ideal para 2 quartos');
    }

    // Recomendação baseada na preferência de pagamento
    if (preferencia === 'parcelas_menores') {
      recommendedPlan = 'plano1';
      reasoning.push('Preferência por parcelas menores durante a obra');
    } else if (preferencia === 'quitar_rapido') {
      recommendedPlan = 'plano2';
      reasoning.push('Objetivo de quitar o imóvel rapidamente');
    }

    // Recomendação baseada na disponibilidade de entrada
    if (disponibilidade === 'entrada_baixa') {
      recommendedPlan = 'plano1';
      reasoning.push('Entrada menor com financiamento bancário');
    } else if (disponibilidade === 'entrada_alta') {
      recommendedPlan = 'plano2';
      reasoning.push('Maior entrada para quitação direta');
    }

    setRecommendation({
      unit: recommendedUnit,
      plan: recommendedPlan,
      reasoning: reasoning
    });

    setSelectedUnit(recommendedUnit);
    setSelectedPlan(recommendedPlan);
  };

  const steps = [
    { id: 1, title: 'Nome', icon: Users },
    { id: 2, title: 'Telefone', icon: Phone },
    { id: 3, title: 'Email', icon: Mail },
    { id: 4, title: 'Renda', icon: Target },
    { id: 5, title: 'Perfil Familiar', icon: Users },
    { id: 6, title: 'Preferência de Pagamento', icon: Star },
    { id: 7, title: 'Tipo de Entrada', icon: Building2 },
    { id: 8, title: 'Recomendação', icon: Award },
    { id: 9, title: 'Simulação', icon: Calculator }
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">Como podemos te chamar?</h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Vamos começar conhecendo você para oferecer a melhor opção de financiamento
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <div className="text-left mb-8">
                <label className="block text-sm font-medium text-cyan-100 mb-4 text-lg">Nome Completo</label>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className="w-full px-8 py-6 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl focus:ring-4 focus:ring-cyan-400/30 focus:border-cyan-400 transition-all text-xl text-center text-white placeholder-white/60"
                  placeholder="Digite seu nome completo"
                  autoFocus
                />
              </div>
              
              <div className="text-center">
                <p className="text-cyan-200 text-sm">
                  Digite seu nome completo como aparece nos documentos
                </p>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Phone className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">Qual é o seu telefone?</h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Para entrarmos em contato e enviar sua simulação personalizada
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <div className="text-left mb-8">
                <label className="block text-sm font-medium text-cyan-100 mb-4 text-lg">Telefone</label>
                <input
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  className="w-full px-8 py-6 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl focus:ring-4 focus:ring-green-400/30 focus:border-green-400 transition-all text-xl text-center text-white placeholder-white/60"
                  placeholder="(81) 99999-9999"
                  autoFocus
                />
              </div>
              
              <div className="text-center">
                <p className="text-cyan-200 text-sm">
                  WhatsApp ou telefone para contato
                </p>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Mail className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">Qual é o seu email?</h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Para enviarmos sua simulação completa e acompanharmos o processo
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <div className="text-left mb-8">
                <label className="block text-sm font-medium text-cyan-100 mb-4 text-lg">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-8 py-6 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl focus:ring-4 focus:ring-purple-400/30 focus:border-purple-400 transition-all text-xl text-center text-white placeholder-white/60"
                  placeholder="seu@email.com"
                  autoFocus
                />
              </div>
              
              <div className="text-center">
                <p className="text-cyan-200 text-sm">
                  Email válido para receber informações
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Target className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-white mb-6">Qual é a sua renda mensal?</h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Para encontrarmos o financiamento ideal para o seu perfil
              </p>
            </div>
            
            <div className="max-w-lg mx-auto">
              <div className="text-left mb-8">
                <label className="block text-sm font-medium text-cyan-100 mb-4 text-lg">Renda Mensal (R$)</label>
                <div className="relative">
                  <span className="absolute left-8 top-1/2 transform -translate-y-1/2 text-cyan-200 text-xl">R$</span>
                  <input
                    type="number"
                    value={formData.renda}
                    onChange={(e) => handleInputChange('renda', e.target.value)}
                    className="w-full pl-16 pr-8 py-6 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl focus:ring-4 focus:ring-orange-400/30 focus:border-orange-400 transition-all text-xl text-center text-white placeholder-white/60"
                    placeholder="5000"
                    autoFocus
                  />
                </div>
              </div>
              
              <div className="text-center">
                <p className="text-cyan-200 text-sm">
                  Informe sua renda bruta mensal
                </p>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Users className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-slate-800 mb-6">Qual é o seu perfil familiar?</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Para recomendarmos a unidade ideal para suas necessidades
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: 'solteiro', label: 'Solteiro(a)', icon: '👤', desc: 'Pessoa sozinha' },
                  { value: 'casal', label: 'Casal', icon: '👫', desc: 'Sem filhos' },
                  { value: 'familia', label: 'Família', icon: '👨‍👩‍👧‍👦', desc: 'Com filhos' },
                  { value: 'investidor', label: 'Investidor', icon: '💰', desc: 'Para investimento' }
                ].map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleInputChange('perfil', option.value)}
                    className={`p-8 rounded-3xl border-2 cursor-pointer transition-all transform hover:scale-105 ${
                      formData.perfil === option.value
                        ? 'border-red-500 bg-red-50 ring-4 ring-red-500/20'
                        : 'border-slate-200 hover:border-red-300'
                    }`}
                  >
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <div className="font-bold text-slate-800 mb-2 text-lg">{option.label}</div>
                    <div className="text-sm text-slate-600">{option.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Star className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-slate-800 mb-6">Como você prefere pagar?</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Escolha a opção que mais se adequa ao seu planejamento
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    value: 'parcelas_menores', 
                    label: 'Parcelas Menores', 
                    icon: '📅', 
                    desc: 'Parcelas menores durante a obra',
                    detail: 'Ideal para quem quer comprometer menos da renda mensal'
                  },
                  { 
                    value: 'quitar_rapido', 
                    label: 'Quitar Rápido', 
                    icon: '⚡', 
                    desc: 'Quitar o imóvel rapidamente',
                    detail: 'Para quem tem mais disponibilidade financeira'
                  },
                  { 
                    value: 'flexibilidade', 
                    label: 'Flexibilidade', 
                    icon: '🔄', 
                    desc: 'Flexibilidade nos pagamentos',
                    detail: 'Opções adaptáveis conforme sua situação'
                  }
                ].map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleInputChange('preferencia', option.value)}
                    className={`p-8 rounded-3xl border-2 cursor-pointer transition-all transform hover:scale-105 ${
                      formData.preferencia === option.value
                        ? 'border-indigo-500 bg-indigo-50 ring-4 ring-indigo-500/20'
                        : 'border-slate-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <div className="font-bold text-slate-800 mb-3 text-lg">{option.label}</div>
                    <div className="text-sm text-slate-700 mb-3">{option.desc}</div>
                    <div className="text-xs text-slate-600">{option.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Building2 className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-slate-800 mb-6">Qual entrada você prefere?</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Escolha a opção que se adequa à sua disponibilidade financeira
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { 
                    value: 'entrada_baixa', 
                    label: 'Entrada Menor', 
                    icon: '💳', 
                    desc: '8% do valor total',
                    detail: 'R$ 20.800 para casa de 2 quartos'
                  },
                  { 
                    value: 'entrada_alta', 
                    label: 'Entrada Maior', 
                    icon: '🏦', 
                    desc: '20% ou mais',
                    detail: 'Para quem tem mais recursos disponíveis'
                  },
                  { 
                    value: 'flexivel', 
                    label: 'Flexível', 
                    icon: '⚖️', 
                    desc: 'Conforme necessário',
                    detail: 'Adaptável à sua situação atual'
                  }
                ].map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleInputChange('disponibilidade', option.value)}
                    className={`p-8 rounded-3xl border-2 cursor-pointer transition-all transform hover:scale-105 ${
                      formData.disponibilidade === option.value
                        ? 'border-pink-500 bg-pink-50 ring-4 ring-pink-500/20'
                        : 'border-slate-200 hover:border-pink-300'
                    }`}
                  >
                    <div className="text-4xl mb-4">{option.icon}</div>
                    <div className="font-bold text-slate-800 mb-3 text-lg">{option.label}</div>
                    <div className="text-sm text-slate-700 mb-3">{option.desc}</div>
                    <div className="text-xs text-slate-600">{option.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Award className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-slate-800 mb-6">Sua Recomendação Personalizada</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Com base nas suas respostas, preparamos a melhor opção para você
              </p>
            </div>
            
            {!recommendation ? (
              <div className="text-center">
                <div className="w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-10">
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center animate-pulse">
                    <Award className="w-16 h-16 text-white" />
                  </div>
                </div>
                <button
                  onClick={generateRecommendation}
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-16 py-8 rounded-3xl font-bold text-2xl hover:from-amber-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-2xl"
                >
                  🎯 Gerar Minha Recomendação
                </button>
                <p className="text-slate-500 mt-6 text-lg">Clique no botão para receber sua recomendação personalizada</p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Card de Recomendação Principal */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-12 border-2 border-amber-200 shadow-2xl">
                  <div className="flex items-center justify-center mb-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mr-8">
                      <Award className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-amber-800">🏆 Recomendação Principal</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white rounded-3xl p-10 border-2 border-amber-200 shadow-lg">
                      <h4 className="text-3xl font-bold text-amber-800 mb-8 text-center">Unidade Recomendada</h4>
                      <div className="text-center">
                        <h5 className="text-4xl font-bold text-amber-800 mb-4">{recommendation.unit.name}</h5>
                        <p className="text-amber-600 text-xl mb-8">{recommendation.unit.area}</p>
                        <div className="text-5xl font-bold text-amber-800 mb-4">
                          {formatCurrency(recommendation.unit.price)}
                        </div>
                        <p className="text-amber-600 text-lg">Valor total</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-3xl p-10 border-2 border-amber-200 shadow-lg">
                      <h4 className="text-3xl font-bold text-amber-800 mb-8 text-center">Plano Recomendado</h4>
                      <div className="text-center">
                        <h5 className="text-4xl font-bold text-amber-800 mb-4">
                          {recommendation.plan === 'plano1' ? 'Plano Financiamento' : 'Plano Direto'}
                        </h5>
                        <div className="space-y-4 text-amber-700 text-xl">
                          <p>• Sinal: {formatCurrency(recommendation.unit[recommendation.plan].sinal)}</p>
                          <p>• Valor para início: {formatCurrency(recommendation.unit[recommendation.plan].valorInicio)}</p>
                          <p>• Entrega: 24 meses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-10 border-t-2 border-amber-200">
                    <h4 className="text-3xl font-bold text-amber-800 mb-8 text-center">Por que esta recomendação?</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {recommendation.reasoning.map((reason, index) => (
                        <div key={index} className="flex items-center space-x-4 bg-white/70 rounded-2xl p-6 border border-amber-200">
                          <CheckCircle className="w-8 h-8 text-amber-600 flex-shrink-0" />
                          <span className="text-amber-800 font-medium text-xl">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 9:
        return (
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-16">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <Calculator className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-5xl font-bold text-slate-800 mb-6">Simulação Completa</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Explore todas as opções e detalhes do seu financiamento recomendado
              </p>
            </div>
            
            {/* Aqui vai todo o conteúdo do simulador original */}
            <div className="text-center">
              <p className="text-lg text-slate-600 mb-6">
                Simulador completo com todas as funcionalidades será exibido aqui
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      {/* Header Profissional com Design Moderno */}
      <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-800 shadow-2xl border-b-4 border-cyan-400 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-6 sm:mb-0">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-all duration-300">
                <Home className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  LL Construções
                </h1>
                <p className="text-cyan-200 text-lg sm:text-xl font-medium">
                  Simulador Inteligente de Financiamento
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-3 text-cyan-200 bg-blue-800/50 px-4 py-2 rounded-2xl backdrop-blur-sm">
                <Phone className="w-5 h-5" />
                <span className="text-base font-medium">(81) 99379-8551</span>
              </div>
              <div className="flex items-center space-x-3 text-cyan-200 bg-blue-800/50 px-4 py-2 rounded-2xl backdrop-blur-sm">
                <Mail className="w-5 h-5" />
                <span className="text-base font-medium">contato@llconstrucoes.com</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Conteúdo da Etapa com Design Moderno */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-10 mb-12 border border-white/20">
          {renderStep()}
        </div>

        {/* Navegação com Design Moderno */}
        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform ${
              currentStep === 1
                ? 'bg-white/10 text-white/40 cursor-not-allowed backdrop-blur-sm'
                : 'bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:from-blue-600 hover:to-blue-700 hover:scale-105 shadow-2xl border border-white/20'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Etapa Anterior</span>
          </button>

          <div className="text-center">
            <div className="text-sm text-white/80 mb-2">
              {currentStep === 1 && "Preencha seu nome completo"}
              {currentStep === 2 && "Informe seu telefone para contato"}
              {currentStep === 3 && "Digite seu email válido"}
              {currentStep === 4 && "Informe sua renda mensal"}
              {currentStep === 5 && "Escolha seu perfil familiar"}
              {currentStep === 6 && "Selecione sua preferência de pagamento"}
              {currentStep === 7 && "Escolha o tipo de entrada"}
              {currentStep === 8 && "Veja sua recomendação personalizada"}
              {currentStep === 9 && "Explore a simulação completa"}
            </div>
            <div className="text-xs text-white/60">
              {currentStep < 9 ? "Clique em 'Próxima Etapa' para continuar" : "Você completou todas as etapas!"}
            </div>
          </div>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length}
            className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform ${
              currentStep === steps.length
                ? 'bg-white/10 text-white/40 cursor-not-allowed backdrop-blur-sm'
                : 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 hover:scale-105 shadow-2xl border border-white/20'
            }`}
          >
            <span>{currentStep === 8 ? 'Ver Simulação' : 'Próxima Etapa'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
