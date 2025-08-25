import React, { useState } from 'react';
import { 
  User, Phone, Mail, DollarSign, Users, CreditCard, 
  Building2, Home, MapPin, CheckCircle, Send, 
  ChevronLeft, ChevronRight, ArrowRight, MessageCircle, Calculator
} from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    renda: '',
    preferencia: ''
  });
  const [selectedUnit, setSelectedUnit] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [showFloorPlan, setShowFloorPlan] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const units = {
    casa2quartos: {
      valor: 260000,
      plano1: {
        sinal: 20800, // 8% do valor total
        parcelasMensais: 1679.17,
        totalMensais: 40300.08,
        parcelasIntercaladas: 4875,
        totalIntercaladas: 19500,
        financiamentoBancario: 179400,
        valorInicio: 22479.17, // Sinal + 1ª mensal
        // 4 parcelas intercaladas durante 24 meses (a cada 6 meses)
        intercaladasInfo: {
          quantidade: 4,
          frequencia: 'Semestral',
          valorParcela: 4875,
          total: 19500,
          cronograma: [
            { mes: 6, valor: 4875, descricao: '6º mês', data: 'Julho 2024' },
            { mes: 12, valor: 4875, descricao: '12º mês', data: 'Janeiro 2025' },
            { mes: 18, valor: 4875, descricao: '18º mês', data: 'Julho 2025' },
            { mes: 24, valor: 4875, descricao: '24º mês', data: 'Janeiro 2026' }
          ]
        },
        // 24 parcelas mensais com datas
        mensaisInfo: {
          quantidade: 24,
          frequencia: 'Mensal',
          valorParcela: 1679.17,
          total: 40300.08,
          cronograma: [
            { mes: 1, valor: 1679.17, data: 'Janeiro 2024' },
            { mes: 2, valor: 1679.17, data: 'Fevereiro 2024' },
            { mes: 3, valor: 1679.17, data: 'Março 2024' },
            { mes: 4, valor: 1679.17, data: 'Abril 2024' },
            { mes: 5, valor: 1679.17, data: 'Maio 2024' },
            { mes: 6, valor: 1679.17, data: 'Junho 2024' },
            { mes: 7, valor: 1679.17, data: 'Julho 2024' },
            { mes: 8, valor: 1679.17, data: 'Agosto 2024' },
            { mes: 9, valor: 1679.17, data: 'Setembro 2024' },
            { mes: 10, valor: 1679.17, data: 'Outubro 2024' },
            { mes: 11, valor: 1679.17, data: 'Novembro 2024' },
            { mes: 12, valor: 1679.17, data: 'Dezembro 2024' },
            { mes: 13, valor: 1679.17, data: 'Janeiro 2025' },
            { mes: 14, valor: 1679.17, data: 'Fevereiro 2025' },
            { mes: 15, valor: 1679.17, data: 'Março 2025' },
            { mes: 16, valor: 1679.17, data: 'Abril 2025' },
            { mes: 17, valor: 1679.17, data: 'Maio 2025' },
            { mes: 18, valor: 1679.17, data: 'Junho 2025' },
            { mes: 19, valor: 1679.17, data: 'Julho 2025' },
            { mes: 20, valor: 1679.17, data: 'Agosto 2025' },
            { mes: 21, valor: 1679.17, data: 'Setembro 2025' },
            { mes: 22, valor: 1679.17, data: 'Outubro 2025' },
            { mes: 23, valor: 1679.17, data: 'Novembro 2025' },
            { mes: 24, valor: 1679.17, data: 'Dezembro 2025' }
          ]
        }
      },
      plano2: {
        sinal: 30000, // Valor fixo de 30k para plano direto
        parcelasIntercaladas: 4800,
        totalIntercaladas: 48000,
        saldoMensais: 191200,
        parcelasMensais: 7966.67,
        totalMensais: 191200,
        valorInicio: 30000, // Sinal de 30k
        financiamentoBancario: 0,
        // 4 parcelas intercaladas durante 24 meses (a cada 6 meses)
        intercaladasInfo: {
          quantidade: 4,
          frequencia: 'Semestral',
          valorParcela: 4800,
          total: 48000,
          cronograma: [
            { mes: 6, valor: 4800, descricao: '6º mês', data: 'Julho 2024' },
            { mes: 12, valor: 4800, descricao: '12º mês', data: 'Janeiro 2025' },
            { mes: 18, valor: 4800, descricao: '18º mês', data: 'Julho 2025' },
            { mes: 24, valor: 4800, descricao: '24º mês', data: 'Janeiro 2026' }
          ]
        },
        // 24 parcelas mensais com datas
        mensaisInfo: {
          quantidade: 24,
          frequencia: 'Mensal',
          valorParcela: 7966.67,
          total: 191200,
          cronograma: [
            { mes: 1, valor: 7966.67, data: 'Janeiro 2024' },
            { mes: 2, valor: 7966.67, data: 'Fevereiro 2024' },
            { mes: 3, valor: 7966.67, data: 'Março 2024' },
            { mes: 4, valor: 7966.67, data: 'Abril 2024' },
            { mes: 5, valor: 7966.67, data: 'Maio 2024' },
            { mes: 6, valor: 7966.67, data: 'Junho 2024' },
            { mes: 7, valor: 7966.67, data: 'Julho 2024' },
            { mes: 8, valor: 7966.67, data: 'Agosto 2024' },
            { mes: 9, valor: 7966.67, data: 'Setembro 2024' },
            { mes: 10, valor: 7966.67, data: 'Outubro 2024' },
            { mes: 11, valor: 7966.67, data: 'Novembro 2024' },
            { mes: 12, valor: 7966.67, data: 'Dezembro 2024' },
            { mes: 13, valor: 7966.67, data: 'Janeiro 2025' },
            { mes: 14, valor: 7966.67, data: 'Fevereiro 2025' },
            { mes: 15, valor: 7966.67, data: 'Março 2025' },
            { mes: 16, valor: 7966.67, data: 'Abril 2025' },
            { mes: 17, valor: 7966.67, data: 'Maio 2025' },
            { mes: 18, valor: 7966.67, data: 'Junho 2025' },
            { mes: 19, valor: 7966.67, data: 'Julho 2025' },
            { mes: 20, valor: 7966.67, data: 'Agosto 2025' },
            { mes: 21, valor: 7966.67, data: 'Setembro 2025' },
            { mes: 22, valor: 7966.67, data: 'Outubro 2025' },
            { mes: 23, valor: 7966.67, data: 'Novembro 2025' },
            { mes: 24, valor: 7966.67, data: 'Dezembro 2025' }
          ]
        }
      },
      floorPlan: {
        quartos: 2,
        area: '42m²',
        dimensoes: '20x80',
        especificacoes: {
          sala: { area: '12m²', dimensoes: '4x3m' },
          cozinha: { area: '8m²', dimensoes: '4x2m' },
          quarto1: { area: '10m²', dimensoes: '3.3x3m' },
          quarto2: { area: '9m²', dimensoes: '3x3m' },
          banheiro: { area: '3m²', dimensoes: '2x1.5m' }
        }
      }
    },
    casa3quartos: {
      valor: 280000,
      plano1: {
        sinal: 22400, // 8% do valor total
        parcelasMensais: 1754,
        totalMensais: 42096,
        parcelasIntercaladas: 5250,
        totalIntercaladas: 21000,
        financiamentoBancario: 193200,
        valorInicio: 24154, // Sinal + 1ª mensal
        // 4 parcelas intercaladas durante 24 meses (a cada 6 meses)
        intercaladasInfo: {
          quantidade: 4,
          frequencia: 'Semestral',
          valorParcela: 5250,
          total: 21000,
          cronograma: [
            { mes: 6, valor: 5250, descricao: '6º mês', data: 'Julho 2024' },
            { mes: 12, valor: 5250, descricao: '12º mês', data: 'Janeiro 2025' },
            { mes: 18, valor: 5250, descricao: '18º mês', data: 'Julho 2025' },
            { mes: 24, valor: 5250, descricao: '24º mês', data: 'Janeiro 2026' }
          ]
        },
        // 24 parcelas mensais com datas
        mensaisInfo: {
          quantidade: 24,
          frequencia: 'Mensal',
          valorParcela: 1754,
          total: 42096,
          cronograma: [
            { mes: 1, valor: 1754, data: 'Janeiro 2024' },
            { mes: 2, valor: 1754, data: 'Fevereiro 2024' },
            { mes: 3, valor: 1754, data: 'Março 2024' },
            { mes: 4, valor: 1754, data: 'Abril 2024' },
            { mes: 5, valor: 1754, data: 'Maio 2024' },
            { mes: 6, valor: 1754, data: 'Junho 2024' },
            { mes: 7, valor: 1754, data: 'Julho 2024' },
            { mes: 8, valor: 1754, data: 'Agosto 2024' },
            { mes: 9, valor: 1754, data: 'Setembro 2024' },
            { mes: 10, valor: 1754, data: 'Outubro 2024' },
            { mes: 11, valor: 1754, data: 'Novembro 2024' },
            { mes: 12, valor: 1754, data: 'Dezembro 2024' },
            { mes: 13, valor: 1754, data: 'Janeiro 2025' },
            { mes: 14, valor: 1754, data: 'Fevereiro 2025' },
            { mes: 15, valor: 1754, data: 'Março 2025' },
            { mes: 16, valor: 1754, data: 'Abril 2025' },
            { mes: 17, valor: 1754, data: 'Maio 2025' },
            { mes: 18, valor: 1754, data: 'Junho 2025' },
            { mes: 19, valor: 1754, data: 'Julho 2025' },
            { mes: 20, valor: 1754, data: 'Agosto 2025' },
            { mes: 21, valor: 1754, data: 'Setembro 2025' },
            { mes: 22, valor: 1754, data: 'Outubro 2025' },
            { mes: 23, valor: 1754, data: 'Novembro 2025' },
            { mes: 24, valor: 1754, data: 'Dezembro 2025' }
          ]
        }
      },
      plano2: {
        sinal: 30000, // Valor fixo de 30k para plano direto
        parcelasIntercaladas: 5200,
        totalIntercaladas: 52000,
        saldoMensais: 205600,
        parcelasMensais: 8566.67,
        totalMensais: 205600,
        valorInicio: 30000, // Sinal de 30k
        financiamentoBancario: 0,
        // 4 parcelas intercaladas durante 24 meses (a cada 6 meses)
        intercaladasInfo: {
          quantidade: 4,
          frequencia: 'Semestral',
          valorParcela: 5200,
          total: 52000,
          cronograma: [
            { mes: 6, valor: 5200, descricao: '6º mês', data: 'Julho 2024' },
            { mes: 12, valor: 5200, descricao: '12º mês', data: 'Janeiro 2025' },
            { mes: 18, valor: 5200, descricao: '18º mês', data: 'Julho 2025' },
            { mes: 24, valor: 5200, descricao: '24º mês', data: 'Janeiro 2026' }
          ]
        },
        // 24 parcelas mensais com datas
        mensaisInfo: {
          quantidade: 24,
          frequencia: 'Mensal',
          valorParcela: 8566.67,
          total: 205600,
          cronograma: [
            { mes: 1, valor: 8566.67, data: 'Janeiro 2024' },
            { mes: 2, valor: 8566.67, data: 'Fevereiro 2024' },
            { mes: 3, valor: 8566.67, data: 'Março 2024' },
            { mes: 4, valor: 8566.67, data: 'Abril 2024' },
            { mes: 5, valor: 8566.67, data: 'Maio 2024' },
            { mes: 6, valor: 8566.67, data: 'Junho 2024' },
            { mes: 7, valor: 8566.67, data: 'Julho 2024' },
            { mes: 8, valor: 8566.67, data: 'Agosto 2024' },
            { mes: 9, valor: 8566.67, data: 'Setembro 2024' },
            { mes: 10, valor: 8566.67, data: 'Outubro 2024' },
            { mes: 11, valor: 8566.67, data: 'Novembro 2024' },
            { mes: 12, valor: 8566.67, data: 'Dezembro 2024' },
            { mes: 13, valor: 8566.67, data: 'Janeiro 2025' },
            { mes: 14, valor: 8566.67, data: 'Fevereiro 2025' },
            { mes: 15, valor: 8566.67, data: 'Março 2025' },
            { mes: 16, valor: 8566.67, data: 'Abril 2025' },
            { mes: 17, valor: 8566.67, data: 'Maio 2025' },
            { mes: 18, valor: 8566.67, data: 'Junho 2025' },
            { mes: 19, valor: 8566.67, data: 'Julho 2025' },
            { mes: 20, valor: 8566.67, data: 'Agosto 2025' },
            { mes: 21, valor: 8566.67, data: 'Setembro 2025' },
            { mes: 22, valor: 8566.67, data: 'Outubro 2025' },
            { mes: 23, valor: 8566.67, data: 'Novembro 2025' },
            { mes: 24, valor: 8566.67, data: 'Dezembro 2025' }
          ]
        }
      },
      floorPlan: {
        quartos: 3,
        area: '48m²',
        dimensoes: '20x80',
        especificacoes: {
          sala: { area: '14m²', dimensoes: '4.5x3m' },
          cozinha: { area: '9m²', dimensoes: '4.5x2m' },
          quarto1: { area: '11m²', dimensoes: '3.5x3m' },
          quarto2: { area: '10m²', dimensoes: '3.3x3m' },
          quarto3: { area: '9m²', dimensoes: '3x3m' },
          banheiro: { area: '3m²', dimensoes: '2x1.5m' },
          suite: { area: '4m²', dimensoes: '2x2m' }
        }
      }
    }
  };

  const steps = [
    { title: 'Nome', description: 'Como podemos te chamar?' },
    { title: 'WhatsApp', description: 'Seu número para receber a proposta' },
    { title: 'Renda', description: 'Sua faixa de renda mensal' },
    { title: 'Preferência', description: 'Como prefere comprar?' },
    { title: 'Simulação Completa', description: 'Detalhes da sua proposta' }
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
        unit: 'casa2quartos',
        plan: 'plano1',
        reasoning: 'Com sua renda, recomendamos a casa de 2 quartos com financiamento bancário para diluir os custos'
      };
    } else if (formData.renda === '2k3k') {
      return {
        unit: 'casa2quartos',
        plan: formData.preferencia === 'vendaDireta' ? 'plano2' : 'plano1',
        reasoning: 'Sua renda permite escolher entre financiamento ou venda direta na casa de 2 quartos'
      };
    } else if (formData.renda === '3k5k') {
      return {
        unit: 'casa3quartos',
        plan: formData.preferencia === 'vendaDireta' ? 'plano2' : 'plano1',
        reasoning: 'Com sua renda, você pode optar pela casa de 3 quartos em qualquer modalidade'
      };
    } else {
      return {
        unit: 'casa3quartos',
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
    const { unit, plan, reasoning } = recommendation || generateRecommendation();
    const unitData = units[unit];
    const planData = unitData[plan === 'plano1' ? 'plano1' : 'plano2'];
    
    const message = `🏠 *PROPOSTA PERSONALIZADA LL CONSTRUÇÕES* 🏠

*${unit === 'casa2quartos' ? 'Casa 2 Quartos' : 'Casa 3 Quartos'}*
💰 Valor: ${formatCurrency(unitData.valor)}

*Dados do Cliente:*
👤 Nome: ${formData.name}
📱 WhatsApp: ${formData.whatsapp}
💵 Renda: ${formData.renda}

*Recomendação do Sistema:*
🎯 ${reasoning}

*Plano de Pagamento Recomendado:*
${plan === 'plano1' ? '🏦 Plano Financiamento' : '💳 Plano Venda Direta'}

💳 Sinal (8%): ${formatCurrency(planData.sinal)}
📅 Mensais (24x): ${formatCurrency(planData.parcelasMensais)}
🔄 Intercaladas (4x): ${formatCurrency(planData.parcelasIntercaladas)}

*📅 Cronograma das Intercaladas (24 meses):*
• 6º mês (Julho 2024): ${formatCurrency(planData.intercaladasInfo.cronograma[0].valor)}
• 12º mês (Janeiro 2025): ${formatCurrency(planData.intercaladasInfo.cronograma[1].valor)}
• 18º mês (Julho 2025): ${formatCurrency(planData.intercaladasInfo.cronograma[2].valor)}
• 24º mês (Janeiro 2026): ${formatCurrency(planData.intercaladasInfo.cronograma[3].valor)}

*📅 Cronograma das Mensais (24 meses):*
• 1º mês (Jan 2024) até 24º mês (Dez 2025): ${formatCurrency(planData.parcelasMensais)} cada

${plan === 'plano1' ? `🏦 Financiamento: ${formatCurrency(planData.financiamentoBancario)}` : ''}
🚀 Valor para Início: ${formatCurrency(planData.valorInicio)}

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
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
            
            <div className="space-y-4">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Digite seu nome completo"
                className="w-full px-4 py-3 bg-white border-2 border-green-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
              />
              
              <button
                onClick={() => {
                  if (formData.name.trim()) {
                    nextStep();
                  } else {
                    alert('Por favor, digite seu nome!');
                  }
                }}
                disabled={!formData.name.trim()}
                className={`w-full p-4 rounded-xl font-semibold transition-all ${
                  formData.name.trim()
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continuar
              </button>
            </div>
          </div>
        );

      case 1: // WhatsApp
        return (
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
            
            <div className="space-y-4">
              <input
                type="tel"
                value={formData.whatsapp}
                onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                placeholder="(81) 99999-9999"
                className="w-full px-4 py-3 bg-white border-2 border-green-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition-all"
              />
              
              <button
                onClick={() => {
                  if (formData.whatsapp.trim()) {
                    nextStep();
                  } else {
                    alert('Por favor, digite seu WhatsApp!');
                  }
                }}
                disabled={!formData.whatsapp.trim()}
                className={`w-full p-4 rounded-xl font-semibold transition-all ${
                  formData.whatsapp.trim()
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
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
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <DollarSign className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
            
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => {
                  handleInputChange('renda', 'ate2k');
                  nextStep();
                }}
                className="p-6 bg-gradient-to-r from-green-100 to-orange-100 border-2 border-green-300 rounded-xl hover:from-green-200 hover:to-orange-200 hover:border-green-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">💰 Até R$ 2.000</h3>
                <p className="text-gray-600">Clique para continuar</p>
              </button>

              <button
                onClick={() => {
                  handleInputChange('renda', '2k3k');
                  nextStep();
                }}
                className="p-6 bg-gradient-to-r from-green-100 to-orange-100 border-2 border-green-300 rounded-xl hover:from-green-200 hover:to-orange-200 hover:border-green-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">💰 R$ 2.000 - R$ 3.000</h3>
                <p className="text-gray-600">Clique para continuar</p>
              </button>

              <button
                onClick={() => {
                  handleInputChange('renda', '3k5k');
                  nextStep();
                }}
                className="p-6 bg-gradient-to-r from-green-100 to-orange-100 border-2 border-green-300 rounded-xl hover:from-green-200 hover:to-orange-200 hover:border-green-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">💰 R$ 3.000 - R$ 5.000</h3>
                <p className="text-gray-600">Clique para continuar</p>
              </button>

              <button
                onClick={() => {
                  handleInputChange('renda', 'acima5k');
                  nextStep();
                }}
                className="p-6 bg-gradient-to-r from-green-100 to-orange-100 border-2 border-green-300 rounded-xl hover:from-green-200 hover:to-orange-200 hover:border-green-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">💰 Acima de R$ 5.000</h3>
                <p className="text-gray-600">Clique para continuar</p>
              </button>
            </div>
          </div>
        );

      case 3: // Preferência
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 text-center">Como prefere comprar?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Venda Financiada */}
              <button
                onClick={() => {
                  setFormData({ ...formData, preferencia: 'vendaFinanciada' });
                  setCurrentStep(4); // Vai direto para simulação
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-6 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-3" />
                  <h4 className="text-lg font-bold mb-2">Venda Financiada</h4>
                  <p className="text-sm opacity-90">Sinal 8% + Mensais + Intercaladas + Financiamento</p>
                </div>
              </button>

              {/* Venda Direta */}
              <button
                onClick={() => {
                  setFormData({ ...formData, preferencia: 'vendaDireta' });
                  setCurrentStep(4); // Vai direto para simulação
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-6 px-4 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-center">
                  <CreditCard className="w-12 h-12 mx-auto mb-3" />
                  <h4 className="text-lg font-bold mb-2">Venda Direta</h4>
                  <p className="text-sm opacity-90">Sinal R$ 30k + Mensais + Intercaladas</p>
                </div>
              </button>
            </div>
          </div>
        );

      case 4: // Simulação Completa
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
              <h3 className="text-xl font-semibold text-gray-800 text-center">Escolha sua Casa</h3>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => setSelectedUnit('casa2quartos')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedUnit === 'casa2quartos'
                      ? 'border-orange-400 bg-gradient-to-r from-green-100 to-orange-100 shadow-lg'
                      : 'border-green-200 bg-white hover:bg-green-50 hover:border-green-300'
                  }`}
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800">🏠 Casa 2 Quartos</h4>
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(units.casa2quartos.valor)}</p>
                    <p className="text-gray-600 text-sm">Terreno 20x80m • 42m²</p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedUnit('casa3quartos')}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    selectedUnit === 'casa3quartos'
                      ? 'border-orange-400 bg-gradient-to-r from-green-100 to-orange-100 shadow-lg'
                      : 'border-green-200 bg-white hover:bg-green-50 hover:border-green-300'
                  }`}
                >
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-800">🏠 Casa 3 Quartos</h4>
                    <p className="text-2xl font-bold text-green-600">{formatCurrency(units.casa3quartos.valor)}</p>
                    <p className="text-gray-600 text-sm">Terreno 20x80m • 48m²</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Seleção de Plano */}
            {selectedUnit && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Escolha seu Plano</h3>
                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={() => setSelectedPlan('plano1')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedPlan === 'plano1'
                        ? 'border-orange-400 bg-gradient-to-r from-green-100 to-orange-100 shadow-lg'
                        : 'border-green-200 bg-white hover:bg-green-50 hover:border-green-300'
                    }`}
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800">🏦 Plano Financiamento</h4>
                      <p className="text-gray-600 text-sm">Sinal + Mensais + Financiamento</p>
                    </div>
                  </button>

                  <button
                    onClick={() => setSelectedPlan('plano2')}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedPlan === 'plano2'
                        ? 'border-orange-400 bg-gradient-to-r from-green-100 to-orange-100 shadow-lg'
                        : 'border-green-200 bg-white hover:bg-green-50 hover:border-green-300'
                    }`}
                  >
                    <div className="text-center">
                      <h4 className="text-lg font-semibold text-gray-800">💳 Plano Venda Direta</h4>
                      <p className="text-gray-600 text-sm">Sinal + Intercaladas + Mensais</p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Simulação */}
            {selectedUnit && selectedPlan && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Sua Simulação</h3>
                
                {/* Título do Plano Personalizado */}
                {formData.preferencia === 'personalizada' && formData.valorDisponivel && (
                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 border-2 border-purple-300 rounded-xl p-4 text-center shadow-lg">
                    <h4 className="text-xl font-bold text-purple-700 mb-2">🎯 PLANO PERSONALIZADO</h4>
                    <p className="text-purple-600 font-medium">
                      Entrada de {formatCurrency(formData.valorDisponivel)} • Parcelas Reduzidas
                    </p>
                  </div>
                )}
                
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
                    const planData = unitData[selectedPlan === 'plano1' ? 'plano1' : 'plano2'];
                    
                    return (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Valor Total:</span>
                          <span className="text-xl font-bold text-gray-800">{formatCurrency(unitData.valor)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Sinal (8%):</span>
                          <span className="text-gray-800">{formatCurrency(planData.sinal)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Mensais (24x):</span>
                          <span className="text-gray-800">{formatCurrency(planData.parcelasMensais)}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700 font-medium">Intercaladas (4x):</span>
                          <span className="text-gray-800">{formatCurrency(planData.parcelasIntercaladas)}</span>
                        </div>
                        {selectedPlan === 'plano1' && (
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">Financiamento:</span>
                            <span className="text-gray-800">{formatCurrency(planData.financiamentoBancario)}</span>
                          </div>
                        )}
                        <div className="pt-3 border-t border-green-200">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-semibold text-green-600">Valor para Início:</span>
                            <span className="text-2xl font-bold text-gray-800">{formatCurrency(planData.valorInicio)}</span>
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
                      const planData = unitData[selectedPlan === 'plano1' ? 'plano1' : 'plano2'];
                      
                      if (!planData) return null;
                      
                      return planData.intercaladasInfo.cronograma.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-3 text-center border border-blue-200">
                          <p className="text-blue-600 font-bold text-sm">{item.descricao}</p>
                          <p className="text-gray-800 font-semibold">{formatCurrency(item.valor)}</p>
                          <p className="text-blue-500 font-medium text-xs">{item.data}</p>
                          <p className="text-gray-500 text-xs">Obra: {item.mes} meses</p>
                        </div>
                      ));
                    })()}
                  </div>
                  <div className="mt-3 pt-3 border-t border-blue-200 text-center">
                    <p className="text-blue-700 font-medium">
                      Total Intercaladas: {(() => {
                        const unitData = units[selectedUnit];
                        const planData = unitData[selectedPlan === 'plano1' ? 'plano1' : 'plano2'];
                        
                        if (!planData) return 'R$ 0,00';
                        return formatCurrency(planData.intercaladasInfo.total);
                      })()}
                    </p>
                    <p className="text-blue-600 text-sm">4 parcelas semestrais durante 24 meses</p>
                    <p className="text-blue-500 text-xs mt-1">Início da obra: Janeiro 2024 • Entrega: Janeiro 2026</p>
                  </div>
                </div>

                {/* Cronograma das Mensais */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-4 shadow-lg">
                  <h4 className="text-lg font-semibold text-green-700 mb-3 text-center">📅 Cronograma das Mensais (24x)</h4>
                  <div className="grid grid-cols-3 gap-2 max-h-48 overflow-y-auto">
                    {(() => {
                      const unitData = units[selectedUnit];
                      const planData = unitData[selectedPlan === 'plano1' ? 'plano1' : 'plano2'];
                      
                      if (!planData) return null;
                      
                      return planData.mensaisInfo.cronograma.map((item, index) => (
                        <div key={index} className="bg-white rounded-lg p-2 text-center border border-green-200">
                          <p className="text-green-600 font-bold text-xs">{item.mes}º</p>
                          <p className="text-gray-800 font-semibold text-xs">{formatCurrency(item.valor)}</p>
                          <p className="text-green-500 font-medium text-xs">{item.data}</p>
                        </div>
                      ));
                    })()}
                  </div>
                  <div className="mt-3 pt-3 border-t border-green-200 text-center">
                    <p className="text-green-700 font-medium">
                      Total Mensais: {(() => {
                        const unitData = units[selectedUnit];
                        const planData = unitData[selectedPlan === 'plano1' ? 'plano1' : 'plano2'];
                        
                        if (!planData) return 'R$ 0,00';
                        return formatCurrency(planData.mensaisInfo.total);
                      })()}
                    </p>
                    <p className="text-green-600 text-sm">24 parcelas mensais durante a obra</p>
                  </div>
                </div>

                {/* Botão WhatsApp */}
                <button
                  onClick={sendWhatsAppProposal}
                  className="w-full bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Enviar Proposta pelo WhatsApp</span>
                </button>

                {/* Botão Planta */}
                <button
                  onClick={() => setShowFloorPlan(!showFloorPlan)}
                  className="w-full bg-white hover:bg-green-50 text-gray-800 font-semibold py-3 px-6 rounded-xl border-2 border-green-200 hover:border-green-300 transition-all shadow-md hover:shadow-lg"
                >
                  {showFloorPlan ? 'Ocultar Planta' : 'Ver Planta da Casa'}
                </button>

                {/* Nova Opção: Montar Proposta */}
                <button
                  onClick={() => {
                    // Aqui você pode adicionar lógica para montar uma proposta personalizada
                    alert('Proposta personalizada sendo montada!');
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>🎯 Montar Proposta Personalizada</span>
                </button>
              </div>
            )}

            {/* Planta da Casa */}
            {showFloorPlan && selectedUnit && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 text-center">Planta da Casa</h3>
                <div className="bg-white border-2 border-green-200 rounded-xl p-4 shadow-lg">
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {selectedUnit === 'casa2quartos' ? 'Casa 2 Quartos' : 'Casa 3 Quartos'}
                    </h4>
                    <p className="text-gray-600">
                      Área: {units[selectedUnit].floorPlan.area} • Terreno: {units[selectedUnit].floorPlan.dimensoes}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {Object.entries(units[selectedUnit].floorPlan.especificacoes).map(([room, specs]) => (
                      <div key={room} className="bg-gradient-to-r from-green-50 to-orange-50 rounded-lg p-3 text-center border border-green-200">
                        <h5 className="font-semibold text-gray-800 capitalize mb-1">{room}</h5>
                        <p className="text-green-700 font-medium">{specs.area}</p>
                        <p className="text-gray-600 text-xs">{specs.dimensoes}</p>
                      </div>
                    ))}
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
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-orange-500">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-orange-600 shadow-xl">
        <div className="max-w-md mx-auto px-6 py-4">
          <div className="flex items-center justify-center space-x-3">
            <Building2 className="w-8 h-8 text-white" />
            <div>
              <h1 className="text-xl font-bold text-white">LL Construções</h1>
              <p className="text-white/90 text-sm">Simulador de Financiamento</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-8">
        <div className="bg-white/95 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
          {renderStep()}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              currentStep === 0
                ? 'bg-white/20 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            <ChevronLeft className="w-5 h-5 inline mr-2" />
            Anterior
          </button>

          <button
            onClick={nextStep}
            disabled={currentStep === steps.length - 1}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              currentStep === steps.length - 1
                ? 'bg-white/20 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
            }`}
          >
            Próximo
            <ChevronRight className="w-5 h-5 inline ml-2" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="mt-6 text-center">
          <p className="text-white font-medium text-sm drop-shadow-lg">
            Passo {currentStep + 1} de {steps.length}
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-md mx-auto px-6 py-4 text-center">
        <p className="text-white font-medium text-sm drop-shadow-lg">
          © 2024 LL Construções • Entrega em 24 meses
        </p>
        <p className="text-white/90 text-xs mt-1 drop-shadow-lg">
          WhatsApp: (81) 99379-8551
        </p>
      </footer>
    </div>
  );
}

export default App;
