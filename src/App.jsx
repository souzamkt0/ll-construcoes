import React, { useState } from 'react';
import { 
  User, Phone, Mail, DollarSign, Users, CreditCard, 
  Building2, Home, MapPin, CheckCircle, Send, 
  ChevronLeft, ChevronRight, ArrowRight, MessageCircle, Calculator, Calendar
} from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    renda: '',
    preferencia: ''
  });
  const [selectedUnit, setSelectedUnit] = useState('2quartos');
  const [selectedPlan, setSelectedPlan] = useState('plano1');
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [expandFloorPlan, setExpandFloorPlan] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const units = {
    '2quartos': {
      name: 'Casa 2 Quartos',
      price: 260000,
      area: '20x80',
      floorPlan: {
        '2quartos': '2 quartos, sala, cozinha, banheiro, área de serviço',
        '3quartos': '3 quartos, sala, cozinha, 2 banheiros, área de serviço'
      },
      plans: {
        plano1: { // Financiamento
          name: 'Plano Financiamento',
          sinal: 0.08, // 8%
          mensais: 24,
          intercaladas: 4,
          financiamento: true
        },
        plano2: { // Direto
          name: 'Plano Direto',
          sinal: 30000,
          mensais: 30, // Corrigido para 30 meses
          intercaladas: 4,
          financiamento: false
        }
      },
      intercaladasInfo: {
        '1': 'Janeiro 2025',
        '2': 'Julho 2025', 
        '3': 'Janeiro 2026',
        '4': 'Julho 2026'
      },
      mensaisInfo: {
        '1': 'Fevereiro 2025', '2': 'Março 2025', '3': 'Abril 2025', '4': 'Maio 2025', '5': 'Junho 2025',
        '6': 'Agosto 2025', '7': 'Setembro 2025', '8': 'Outubro 2025', '9': 'Novembro 2025', '10': 'Dezembro 2025',
        '11': 'Fevereiro 2026', '12': 'Março 2026', '13': 'Abril 2026', '14': 'Maio 2026', '15': 'Junho 2026',
        '16': 'Agosto 2026', '17': 'Setembro 2026', '18': 'Outubro 2026', '19': 'Novembro 2026', '20': 'Dezembro 2026',
        '21': 'Janeiro 2027', '22': 'Fevereiro 2027', '23': 'Março 2027', '24': 'Abril 2027', '25': 'Maio 2027',
        '26': 'Junho 2027', '27': 'Julho 2027', '28': 'Agosto 2027', '29': 'Setembro 2027', '30': 'Outubro 2027'
      }
    },
    '3quartos': {
      name: 'Casa 3 Quartos',
      price: 280000,
      area: '20x80',
      floorPlan: {
        '2quartos': '2 quartos, sala, cozinha, banheiro, área de serviço',
        '3quartos': '3 quartos, sala, cozinha, 2 banheiros, área de serviço'
      },
      plans: {
        plano1: { // Financiamento
          name: 'Plano Financiamento',
          sinal: 0.08, // 8%
          mensais: 24,
          intercaladas: 4,
          financiamento: true
        },
        plano2: { // Direto
          name: 'Plano Direto',
          sinal: 30000,
          mensais: 30, // Corrigido para 30 meses
          intercaladas: 4,
          financiamento: false
        }
      },
      intercaladasInfo: {
        '1': 'Janeiro 2025',
        '2': 'Julho 2025',
        '3': 'Janeiro 2026', 
        '4': 'Julho 2026'
      },
      mensaisInfo: {
        '1': 'Fevereiro 2025', '2': 'Março 2025', '3': 'Abril 2025', '4': 'Maio 2025', '5': 'Junho 2025',
        '6': 'Agosto 2025', '7': 'Setembro 2025', '8': 'Outubro 2025', '9': 'Novembro 2025', '10': 'Dezembro 2025',
        '11': 'Fevereiro 2026', '12': 'Março 2026', '13': 'Abril 2026', '14': 'Maio 2026', '15': 'Junho 2026',
        '16': 'Agosto 2026', '17': 'Setembro 2026', '18': 'Outubro 2026', '19': 'Novembro 2026', '20': 'Dezembro 2026',
        '21': 'Janeiro 2027', '22': 'Fevereiro 2027', '23': 'Março 2027', '24': 'Abril 2027', '25': 'Maio 2027',
        '26': 'Junho 2027', '27': 'Julho 2027', '28': 'Agosto 2027', '29': 'Setembro 2027', '30': 'Outubro 2027'
      }
    }
  };

  const steps = [
    { title: 'Nome', description: 'Como devemos chamar você?' },
    { title: 'WhatsApp', description: 'Seu número para contato' },
    { title: 'Renda Mensal', description: 'Qual sua faixa de renda?' },
    { title: 'Simulação Completa', description: 'Sua proposta personalizada' }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateRecommendation = () => {
    // Lógica para outras preferências
    if (formData.renda === 'ate2k') {
      return {
        unit: '2quartos',
        plan: 'plano1',
        reasoning: 'Com sua renda, recomendamos a casa de 2 quartos com financiamento bancário para diluir os custos'
      };
    } else if (formData.renda === '2k3k') {
      return {
        unit: '2quartos',
        plan: formData.preferencia === 'vendaDireta' ? 'plano2' : 'plano1',
        reasoning: 'Sua renda permite escolher entre financiamento ou venda direta na casa de 2 quartos'
      };
    } else if (formData.renda === '3k5k') {
      return {
        unit: '3quartos',
        plan: formData.preferencia === 'vendaDireta' ? 'plano2' : 'plano1',
        reasoning: 'Com sua renda, você pode optar pela casa de 3 quartos em qualquer modalidade'
      };
    } else {
      return {
        unit: '3quartos',
        plan: 'plano1',
        reasoning: 'Sua renda permite escolher a casa de 3 quartos com financiamento bancário'
      };
    }
  };

  const formatCurrency = (value) => {
    if (isNaN(value) || value === 0) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  const sendWhatsAppProposal = () => {
    const unitData = units[selectedUnit];
    const planData = unitData.plans[selectedPlan];
    
    if (!unitData || !planData) {
      alert('Por favor, selecione uma unidade e um plano primeiro!');
      return;
    }
    
    const sinal = planData.financiamento ? unitData.price * planData.sinal : planData.sinal;
    const valorMensal = planData.financiamento 
      ? (unitData.price * 0.69) / 24 
      : (unitData.price - planData.sinal - (planData.sinal * 4)) / planData.mensais;
    
    const message = `🏠 *PROPOSTA PERSONALIZADA LL CONSTRUÇÕES* 🏠

*${unitData.name}*
💰 Valor: ${formatCurrency(unitData.price)}

*Dados do Cliente:*
👤 Nome: ${formData.name}
📱 WhatsApp: ${formData.whatsapp}
💵 Renda: ${formData.renda === 'ate2k' ? 'Até R$ 2.000' : formData.renda === '2k3k' ? 'R$ 2.000 - R$ 3.000' : formData.renda === '3k5k' ? 'R$ 3.000 - R$ 5.000' : 'Acima de R$ 5.000'}

*Plano de Pagamento Selecionado:*
${planData.financiamento ? '🏦 Plano Financiamento' : '💳 Plano Venda Direta'}

💳 Sinal: ${formatCurrency(sinal)}
📅 Mensais (${planData.mensais}x): ${formatCurrency(valorMensal)}
🔄 Intercaladas (4x): ${formatCurrency(sinal)}

*📅 Cronograma das Intercaladas (24 meses):*
• 6º mês (Julho 2024): ${formatCurrency(sinal)}
• 12º mês (Janeiro 2025): ${formatCurrency(sinal)}
• 18º mês (Julho 2025): ${formatCurrency(sinal)}
• 24º mês (Janeiro 2026): ${formatCurrency(sinal)}

*📅 Cronograma das Mensais (${planData.mensais} meses):*
• 1º mês (Jan 2024) até ${planData.mensais}º mês: ${formatCurrency(valorMensal)} cada

${planData.financiamento ? `🏦 Financiamento: ${formatCurrency(unitData.price * 0.69)}` : ''}
🚀 Valor para Início: ${formatCurrency(sinal + valorMensal)}

*Cronograma da Obra:*
🏗️ Início: Janeiro 2024
📅 Duração: 24 meses
🏠 Entrega: Janeiro 2026
📍 Terreno: 20x80m

_Proposta personalizada baseada no seu perfil_`;

    const encodedMessage = encodeURIComponent(message);
    
    // Enviar para o WhatsApp do cliente
    const whatsappUrl = `https://wa.me/${formData.whatsapp.replace(/\D/g, '')}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const renderStep = () => {
    const step = steps[currentStep];
    
    switch (currentStep) {
      case 0: // Nome
        return (
          <div className="text-center space-y-8">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
              <User className="w-14 h-14 text-white" />
            </div>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">👋 Olá!</h2>
              <p className="text-gray-600 text-lg">Como podemos te chamar?</p>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 text-lg"
                />
              </div>
              
              <button
                onClick={() => {
                  if (formData.name.trim()) {
                    nextStep();
                  } else {
                    alert('Por favor, digite seu nome!');
                  }
                }}
                disabled={!formData.name.trim()}
                className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  formData.name.trim()
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continuar
              </button>
            </div>
          </div>
        );

      case 1: // WhatsApp
        return (
          <div className="text-center space-y-8">
            <div className="w-28 h-28 mx-auto bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
              <MessageCircle className="w-14 h-14 text-white" />
            </div>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-gray-800">📱 WhatsApp</h2>
              <p className="text-gray-600 text-lg">Olá {formData.nome}! Qual seu WhatsApp?</p>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  placeholder="(81) 99999-9999"
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300 text-lg"
                />
              </div>
              
              <button
                onClick={() => {
                  if (formData.whatsapp.trim()) {
                    nextStep();
                  } else {
                    alert('Por favor, digite seu WhatsApp!');
                  }
                }}
                disabled={!formData.whatsapp.trim()}
                className={`w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
                  formData.whatsapp.trim()
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Continuar
              </button>
            </div>
          </div>
        );

      case 2: // Renda
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-800">💰 Renda Mensal</h2>
              <p className="text-gray-600 text-base">Olá {formData.nome}! Qual sua renda mensal?</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <button
                onClick={() => {
                  handleInputChange('renda', 'ate2k');
                  setFormData({ ...formData, renda: 'ate2k', preferencia: 'vendaFinanciada' });
                  nextStep();
                }}
                className="p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-gray-800">💰 Até R$ 2.000</h3>
                    <p className="text-gray-600 text-sm">Clique para continuar</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  handleInputChange('renda', '2k3k');
                  setFormData({ ...formData, renda: '2k3k', preferencia: 'vendaFinanciada' });
                  nextStep();
                }}
                className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl hover:from-green-100 hover:to-emerald-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-gray-800">💰 R$ 2.000 - R$ 3.000</h3>
                    <p className="text-gray-600 text-sm">Clique para continuar</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  handleInputChange('renda', '3k5k');
                  setFormData({ ...formData, renda: '3k5k', preferencia: 'vendaFinanciada' });
                  nextStep();
                }}
                className="p-3 bg-gradient-to-r from-purple-50 to-violet-50 border-2 border-purple-200 rounded-xl hover:from-purple-100 hover:to-violet-100 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-gray-800">💰 R$ 3.000 - R$ 5.000</h3>
                    <p className="text-gray-600 text-sm">Clique para continuar</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  handleInputChange('renda', 'acima5k');
                  setFormData({ ...formData, renda: 'acima5k', preferencia: 'vendaFinanciada' });
                  nextStep();
                }}
                className="p-3 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl hover:from-amber-100 hover:to-orange-100 hover:border-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-base font-bold text-gray-800">💰 Acima de R$ 5.000</h3>
                    <p className="text-gray-600 text-sm">Clique para continuar</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );

      case 3: // Simulação Completa
        return (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                <Home className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">{step.title}</h2>
              <p className="text-gray-600">{step.description}</p>
            </div>

            {/* Seleção de Unidade */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 text-center">🏠 Escolha sua Casa</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {/* Casa 2 Quartos */}
                <button
                  onClick={() => setSelectedUnit('2quartos')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedUnit === '2quartos'
                      ? 'border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 shadow-xl'
                      : 'border-green-200 bg-white hover:bg-green-50 hover:border-green-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl text-white font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">Casa 2 Quartos</h4>
                      <p className="text-2xl font-bold text-green-600">R$ 260.000</p>
                      <p className="text-gray-600 text-sm">Área: 42m² • Terreno: 160m²</p>
                    </div>
                  </div>
                </button>

                {/* Casa 3 Quartos */}
                <button
                  onClick={() => setSelectedUnit('3quartos')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedUnit === '3quartos'
                      ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl'
                      : 'border-blue-200 bg-white hover:bg-blue-50 hover:border-blue-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl text-white font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">Casa 3 Quartos</h4>
                      <p className="text-2xl font-bold text-blue-600">R$ 280.000</p>
                      <p className="text-gray-600 text-sm">Área: 48m² • Terreno: 160m²</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Seleção de Plano */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 text-center">💳 Escolha seu Plano</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {/* Plano Financiamento */}
                <button
                  onClick={() => setSelectedPlan('plano1')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedPlan === 'plano1'
                      ? 'border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 shadow-xl'
                      : 'border-green-200 bg-white hover:bg-green-50 hover:border-green-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl text-white">🏦</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">Plano Financiamento</h4>
                      <p className="text-gray-600 text-sm">Sinal + Mensais + Intercaladas + Banco</p>
                      <p className="text-lg font-semibold text-green-600">Entrada: 8%</p>
                    </div>
                  </div>
                </button>

                {/* Plano Venda Direta */}
                <button
                  onClick={() => setSelectedPlan('plano2')}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                    selectedPlan === 'plano2'
                      ? 'border-blue-600 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-xl'
                      : 'border-blue-200 bg-white hover:bg-blue-50 hover:border-blue-300 shadow-lg hover:shadow-xl'
                  }`}
                >
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl text-white">💳</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">Plano Venda Direta</h4>
                      <p className="text-gray-600 text-sm">Sinal + Intercaladas + Mensais</p>
                      <p className="text-lg font-semibold text-blue-600">Entrada: 20%</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Planta da Casa - Movida para o topo */}
            {selectedUnit && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">🏗️ Planta da Casa</h3>
                  <button
                    onClick={() => setExpandFloorPlan(!expandFloorPlan)}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    {expandFloorPlan ? '📁 Recolher Detalhes' : '🔍 Ver Detalhes Completos'}
                  </button>
                </div>
                
                <div className="bg-white border-2 border-green-200 rounded-xl p-4 shadow-lg">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {selectedUnit === '2quartos' ? 'Casa 2 Quartos' : 'Casa 3 Quartos'}
                    </h4>
                    <p className="text-gray-600">
                      Área: {units[selectedUnit].area} • Terreno: {units[selectedUnit].area}
                    </p>
                  </div>
                  
                  {/* Informações Básicas (sempre visíveis) */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200 text-center">
                      <p className="text-blue-600 font-medium text-sm">Área Total</p>
                      <p className="text-blue-800 font-bold">{selectedUnit === '2quartos' ? '42m²' : '48m²'}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200 text-center">
                      <p className="text-green-600 font-medium text-sm">Quartos</p>
                      <p className="text-green-800 font-bold">{selectedUnit === '2quartos' ? '2' : '3'}</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border border-purple-200 text-center">
                      <p className="text-purple-600 font-medium text-sm">Banheiros</p>
                      <p className="text-purple-800 font-bold">{selectedUnit === '2quartos' ? '1' : '2'}</p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 border border-orange-200 text-center">
                      <p className="text-orange-600 font-medium text-sm">Terreno</p>
                      <p className="text-orange-800 font-bold">160m²</p>
                    </div>
                  </div>

                  {/* Informações Detalhadas (expandíveis) */}
                  {expandFloorPlan && (
                    <div className="space-y-4 border-t border-green-200 pt-4">
                      {/* Especificações Técnicas */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200">
                        <h5 className="font-semibold text-blue-800 mb-2 text-center">📐 Especificações Técnicas</h5>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="text-center">
                            <p className="text-blue-600 font-medium">Terreno</p>
                            <p className="text-gray-700">20m x 80m</p>
                          </div>
                          <div className="text-center">
                            <p className="text-blue-600 font-medium">Área Construída</p>
                            <p className="text-gray-700">{selectedUnit === '2quartos' ? '42m²' : '48m²'}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-blue-600 font-medium">Largura</p>
                            <p className="text-gray-700">6m</p>
                          </div>
                          <div className="text-center">
                            <p className="text-blue-600 font-medium">Comprimento</p>
                            <p className="text-gray-700">7m</p>
                          </div>
                        </div>
                      </div>

                      {/* Ambientes Detalhados */}
                      <div className="grid grid-cols-1 gap-3">
                        {/* Sala */}
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                          <h5 className="font-semibold text-green-800 mb-2 flex items-center">
                            🛋️ Sala de Estar
                          </h5>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-green-600 font-medium">Dimensões:</p>
                              <p className="text-gray-700">6m x 3m</p>
                            </div>
                            <div>
                              <p className="text-green-600 font-medium">Área:</p>
                              <p className="text-gray-700">18m²</p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-green-600 font-medium">Características:</p>
                              <p className="text-gray-700">Integrada com cozinha, iluminação natural, ventilação cruzada</p>
                            </div>
                          </div>
                        </div>

                        {/* Cozinha */}
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 border border-orange-200">
                          <h5 className="font-semibold text-orange-800 mb-2 flex items-center">
                            🍳 Cozinha
                          </h5>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-orange-600 font-medium">Dimensões:</p>
                              <p className="text-gray-700">6m x 2.5m</p>
                            </div>
                            <div>
                              <p className="text-orange-600 font-medium">Área:</p>
                              <p className="text-gray-700">15m²</p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-orange-600 font-medium">Características:</p>
                              <p className="text-gray-700">Integrada com sala, armários planejados, bancada de granito</p>
                            </div>
                          </div>
                        </div>

                        {/* Quartos */}
                        {selectedUnit === '2quartos' ? (
                          <>
                            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border border-purple-200">
                              <h5 className="font-semibold text-purple-800 mb-2 flex items-center">
                                🛏️ Quarto Principal
                              </h5>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-purple-600 font-medium">Dimensões:</p>
                                  <p className="text-gray-700">3.5m x 3m</p>
                                </div>
                                <div>
                                  <p className="text-purple-600 font-medium">Área:</p>
                                  <p className="text-gray-700">10.5m²</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-purple-600 font-medium">Características:</p>
                                  <p className="text-gray-700">Suíte com closet, ventilação natural, iluminação direta</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-3 border border-pink-200">
                              <h5 className="font-semibold text-pink-800 mb-2 flex items-center">
                                🛏️ Quarto Secundário
                              </h5>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-pink-600 font-medium">Dimensões:</p>
                                  <p className="text-gray-700">3m x 3m</p>
                                </div>
                                <div>
                                  <p className="text-pink-600 font-medium">Área:</p>
                                  <p className="text-gray-700">9m²</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-pink-600 font-medium">Características:</p>
                                  <p className="text-gray-700">Ventilação natural, armário embutido, iluminação lateral</p>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-3 border border-purple-200">
                              <h5 className="font-semibold text-purple-800 mb-2 flex items-center">
                                🛏️ Suíte Master
                              </h5>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-purple-600 font-medium">Dimensões:</p>
                                  <p className="text-gray-700">4m x 3.5m</p>
                                </div>
                                <div>
                                  <p className="text-purple-600 font-medium">Área:</p>
                                  <p className="text-gray-700">14m²</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-purple-600 font-medium">Características:</p>
                                  <p className="text-gray-700">Suíte completa, closet walk-in, banheiro privativo</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-3 border border-pink-200">
                              <h5 className="font-semibold text-pink-800 mb-2 flex items-center">
                                🛏️ Quarto 2
                              </h5>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-pink-600 font-medium">Dimensões:</p>
                                  <p className="text-gray-700">3.5m x 3m</p>
                                </div>
                                <div>
                                  <p className="text-pink-600 font-medium">Área:</p>
                                  <p className="text-gray-700">10.5m²</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-pink-600 font-medium">Características:</p>
                                  <p className="text-gray-700">Armário embutido, ventilação natural, iluminação direta</p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-3 border border-indigo-200">
                              <h5 className="font-semibold text-indigo-800 mb-2 flex items-center">
                                🛏️ Quarto 3
                              </h5>
                              <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                  <p className="text-indigo-600 font-medium">Dimensões:</p>
                                  <p className="text-gray-700">3m x 3m</p>
                                </div>
                                <div>
                                  <p className="text-indigo-600 font-medium">Área:</p>
                                  <p className="text-gray-700">9m²</p>
                                </div>
                                <div className="col-span-2">
                                  <p className="text-indigo-600 font-medium">Características:</p>
                                  <p className="text-gray-700">Armário embutido, ventilação natural, iluminação lateral</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}

                        {/* Banheiros */}
                        <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-3 border border-cyan-200">
                          <h5 className="font-semibold text-cyan-800 mb-2 flex items-center">
                            🚿 {selectedUnit === '2quartos' ? 'Banheiro' : 'Banheiro Social'}
                          </h5>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-cyan-600 font-medium">Dimensões:</p>
                              <p className="text-gray-700">2m x 1.5m</p>
                            </div>
                            <div>
                              <p className="text-cyan-600 font-medium">Área:</p>
                              <p className="text-gray-700">3m²</p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-cyan-600 font-medium">Características:</p>
                              <p className="text-gray-700">Box de vidro, piso antiderrapante, ventilação natural</p>
                            </div>
                          </div>
                        </div>

                        {/* Área de Serviço */}
                        <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-3 border border-gray-200">
                          <h5 className="font-semibold text-gray-800 mb-2 flex items-center">
                            🧺 Área de Serviço
                          </h5>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-gray-600 font-medium">Dimensões:</p>
                              <p className="text-gray-700">2m x 1.5m</p>
                            </div>
                            <div>
                              <p className="text-gray-600 font-medium">Área:</p>
                              <p className="text-gray-700">3m²</p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-gray-600 font-medium">Características:</p>
                              <p className="text-gray-700">Tanque de lavar, área para máquina, ventilação</p>
                            </div>
                          </div>
                        </div>

                        {/* Área Externa */}
                        <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-3 border border-emerald-200">
                          <h5 className="font-semibold text-emerald-800 mb-2 flex items-center">
                            🌿 Área Externa
                          </h5>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <p className="text-emerald-600 font-medium">Dimensões:</p>
                              <p className="text-gray-700">6m x 3m</p>
                            </div>
                            <div>
                              <p className="text-emerald-600 font-medium">Área:</p>
                              <p className="text-gray-700">18m²</p>
                            </div>
                            <div className="col-span-2">
                              <p className="text-emerald-600 font-medium">Características:</p>
                              <p className="text-gray-700">Quintal com churrasqueira, área gourmet, jardim</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mensagem para Corretores */}
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-lg p-3 text-center">
                      <h5 className="font-semibold text-yellow-800 mb-2">🏠 É Corretor de Imóveis?</h5>
                      <p className="text-yellow-700 text-sm mb-3">Entre em contato conosco para parcerias e informações exclusivas!</p>
                      <button
                        onClick={() => {
                          const message = `🏠 *CORRETOR DE IMÓVEIS - LL CONSTRUÇÕES* 🏠

Olá! Sou corretor de imóveis e gostaria de informações sobre parcerias com a LL Construções.

*Interesse:*
• Parceria comercial
• Informações sobre empreendimentos
• Condições especiais para corretores
• Material de marketing

*Contato:*
📱 WhatsApp: (81) 99379-8551
🏢 LL Construções
📍 Terrenos 20x80m disponíveis

Aguardo retorno!`;

                          const encodedMessage = encodeURIComponent(message);
                          const whatsappUrl = `https://wa.me/81993798551?text=${encodedMessage}`;
                          window.open(whatsappUrl, '_blank');
                        }}
                        className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        💬 Falar com LL Construções
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Simulação */}
            {selectedUnit && selectedPlan && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Sua Simulação</h3>
                
                {/* Título do Plano Personalizado */}
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-2 border-purple-300 rounded-xl p-4 text-center shadow-lg">
                  <h4 className="text-xl font-bold text-purple-700 mb-2">🎯 PLANO RECOMENDADO</h4>
                  <p className="text-purple-600 font-medium">
                    Baseado no seu perfil de renda e preferências
                  </p>
                </div>
                
                {/* Dados do Cliente */}
                <div className="bg-gradient-to-r from-green-100 to-orange-100 border-2 border-green-300 rounded-xl p-4 text-center shadow-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-2">👤 Seus Dados</h4>
                  <div className="space-y-2">
                    <p className="text-gray-800 font-medium">Nome: <span className="text-green-600">{formData.name}</span></p>
                    <p className="text-gray-800 font-medium">WhatsApp: <span className="text-green-600">{formData.whatsapp}</span></p>
                    <p className="text-gray-800 font-medium">Renda: <span className="text-green-600">{formData.renda === 'ate2k' ? 'Até R$ 2.000' : formData.renda === '2k3k' ? 'R$ 2.000 - R$ 3.000' : formData.renda === '3k5k' ? 'R$ 3.000 - R$ 5.000' : 'Acima de R$ 5.000'}</span></p>
                    <p className="text-gray-800 font-medium">Preferência: <span className="text-green-600">{formData.preferencia === 'vendaFinanciada' ? 'Venda Financiada' : 'Venda Direta'}</span></p>
                  </div>
                </div>
                
                <div className="bg-white border-2 border-green-200 rounded-xl p-4 space-y-3 shadow-lg">
                  {(() => {
                    const unitData = units[selectedUnit];
                    const planData = unitData.plans[selectedPlan];
                    
                    if (!planData) return null;
                    
                    // Calcular valores baseados na nova estrutura
                    const sinal = planData.financiamento ? unitData.price * planData.sinal : planData.sinal;
                    const valorMensal = planData.financiamento 
                      ? (unitData.price * 0.69) / 24 
                      : (unitData.price - planData.sinal - (sinal * 4)) / planData.mensais;
                    const valorIntercalada = sinal;
                    
                    return (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Valor Total:</span>
                          <span className="text-xl font-bold text-gray-800">{formatCurrency(unitData.price)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Sinal:</span>
                          <span className="text-gray-800">{formatCurrency(sinal)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Mensais ({planData.mensais}x):</span>
                          <span className="text-gray-800">{formatCurrency(valorMensal)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Intercaladas (4x):</span>
                          <span className="text-gray-800">{formatCurrency(valorIntercalada)}</span>
                        </div>
                        {planData.financiamento && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">Financiamento:</span>
                            <span className="text-gray-800">{formatCurrency(unitData.price * 0.69)}</span>
                          </div>
                        )}
                        <div className="pt-3 border-t border-green-200">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-green-600">Valor para Início:</span>
                            <span className="text-2xl font-bold text-gray-800">{formatCurrency(sinal + valorMensal)}</span>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>

                {/* Cronograma das Intercaladas */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-4 shadow-lg">
                  <h4 className="text-lg font-semibold text-blue-700 mb-3 text-center">📅 Cronograma das Intercaladas</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {(() => {
                      const unitData = units[selectedUnit];
                      const planData = unitData.plans[selectedPlan];
                      
                      if (!planData || !planData.intercaladasInfo) return null;
                      
                      return Object.entries(planData.intercaladasInfo).map(([key, value]) => {
                        const sinal = planData.financiamento ? unitData.price * planData.sinal : planData.sinal;
                        return (
                          <div key={key} className="bg-white rounded-lg p-3 text-center border border-blue-200">
                            <p className="text-blue-600 font-bold text-sm">{value}</p>
                            <p className="text-gray-800 font-semibold">{formatCurrency(sinal)}</p>
                            <p className="text-blue-500 font-medium text-xs">Obra: {key} meses</p>
                          </div>
                        );
                      });
                    })()}
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200 text-center">
                    <p className="text-blue-700 font-medium">
                      Total Intercaladas: {(() => {
                        const unitData = units[selectedUnit];
                        const planData = unitData.plans[selectedPlan];
                        
                        if (!planData) return 'R$ 0,00';
                        const sinal = planData.financiamento ? unitData.price * planData.sinal : planData.sinal;
                        return formatCurrency(sinal * 4);
                      })()}
                    </p>
                    <p className="text-blue-600 text-sm">4 parcelas semestrais durante 24 meses</p>
                    <p className="text-blue-500 text-xs mt-1">Início da obra: Janeiro 2024 • Entrega: Janeiro 2026</p>
                  </div>
                </div>

                {/* Parcelas Mensais */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <span>Parcelas Mensais ({(() => {
                      const unitData = units[selectedUnit];
                      const planData = unitData.plans[selectedPlan];
                      return planData ? planData.mensais : 0;
                    })()}x)</span>
                  </h4>
                  <div className="grid grid-cols-6 gap-2 max-h-40 overflow-y-auto">
                    {(() => {
                      const unitData = units[selectedUnit];
                      const planData = unitData.plans[selectedPlan];
                      
                      if (!planData || !planData.mensaisInfo) return null;
                      
                      const valorMensal = planData.financiamento 
                        ? (unitData.price * 0.69) / 24 
                        : (unitData.price - planData.sinal - (planData.sinal * 4)) / planData.mensais;
                      
                      return Object.entries(planData.mensaisInfo).map(([key, value]) => (
                        <div key={key} className="bg-white rounded-lg p-2 text-center border border-green-200">
                          <p className="text-green-600 font-bold text-xs">{key}º</p>
                          <p className="text-gray-800 font-semibold text-xs">{formatCurrency(valorMensal)}</p>
                          <p className="text-green-500 font-medium text-xs">{value}</p>
                        </div>
                      ));
                    })()}
                  </div>
                  <div className="mt-3 pt-3 border-t border-green-200 text-center">
                    <p className="text-green-700 font-medium">
                      Total Mensais: {(() => {
                        const unitData = units[selectedUnit];
                        const planData = unitData.plans[selectedPlan];
                        
                        if (!planData) return 'R$ 0,00';
                        const valorMensal = planData.financiamento 
                          ? (unitData.price * 0.69) / 24 
                          : (unitData.price - planData.sinal - (planData.sinal * 4)) / planData.mensais;
                        return formatCurrency(valorMensal * planData.mensais);
                      })()}
                    </p>
                    <p className="text-green-600 text-sm">{(() => {
                      const unitData = units[selectedUnit];
                      const planData = unitData.plans[selectedPlan];
                      return planData ? `${planData.mensais} parcelas mensais durante a obra` : 'Parcelas mensais durante a obra';
                    })()}</p>
                  </div>
                </div>

                {/* Botão WhatsApp */}
                <div className="text-center">
                  <button
                    onClick={sendWhatsAppProposal}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 mx-auto"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>Enviar Proposta via WhatsApp</span>
                  </button>
                </div>

                {/* Mensagem de Contato */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">🙏 Obrigado, em breve entraremos em contato!</h4>
                  <p className="text-gray-600 mb-3">Nossa equipe comercial analisará sua proposta e entrará em contato para agendar uma visita e fechar negócio.</p>
                  <div className="bg-white rounded-xl p-4 border border-blue-100">
                    <p className="text-blue-600 font-semibold">📱 WhatsApp: (81) 99379-8551</p>
                    <p className="text-gray-600 text-sm">Horário: Segunda a Sexta, 8h às 18h</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl">
        <div className="max-w-md mx-auto px-6 py-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-white tracking-wide">LL Construções</h1>
              <p className="text-white/90 text-sm font-medium">Simulador Inteligente</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="bg-white/95 backdrop-blur-sm border border-white/30 rounded-3xl p-8 shadow-2xl">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              currentStep === 0
                ? 'bg-white/20 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-5 h-5 inline mr-2" />
            Anterior
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              currentStep === steps.length - 1
                ? 'bg-white/20 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            Próximo
            <ChevronRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="mt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-3">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentStep
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 scale-125'
                    : index < currentStep
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600 font-medium text-sm">
            Passo {currentStep + 1} de {steps.length}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-6 py-6 text-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <p className="text-gray-700 font-medium text-sm">
            © 2024 LL Construções • Entrega em 24 meses
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <MessageCircle className="w-4 h-4 text-green-600" />
            <p className="text-green-600 text-sm font-medium">
              WhatsApp: (81) 99379-8551
            </p>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;
