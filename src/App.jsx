import React, { useState } from 'react';
import { 
  User, Phone, Mail, DollarSign, Users, CreditCard, 
  Building2, Home, MapPin, CheckCircle, Send, 
  ChevronLeft, ChevronRight, ArrowRight, MessageCircle
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
        sinal: 20800,
        parcelasMensais: 1679.17,
        totalMensais: 40300.08,
        parcelasIntercaladas: 4875,
        totalIntercaladas: 19500,
        financiamentoBancario: 179400,
        valorInicio: 22479.17
      },
      plano2: {
        sinal: 20800,
        parcelasIntercaladas: 4800,
        totalIntercaladas: 48000,
        saldoMensais: 191200,
        parcelasMensais: 7966.67,
        totalMensais: 191200,
        valorInicio: 28766.67,
        financiamentoBancario: 0
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
        sinal: 22400,
        parcelasMensais: 1754,
        totalMensais: 42096,
        parcelasIntercaladas: 5250,
        totalIntercaladas: 21000,
        financiamentoBancario: 193200,
        valorInicio: 24154
      },
      plano2: {
        sinal: 22400,
        parcelasIntercaladas: 5200,
        totalIntercaladas: 52000,
        saldoMensais: 205600,
        parcelasMensais: 8566.67,
        totalMensais: 205600,
        valorInicio: 30966.67,
        financiamentoBancario: 0
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
    const { renda, preferencia } = formData;
    
    let unit = 'casa2quartos';
    let plan = 'plano1';
    let reasoning = '';

    // Lógica de recomendação baseada na renda
    if (renda === 'acima5k') {
      unit = 'casa3quartos';
      reasoning = 'Sua renda indica que a casa de 3 quartos seria ideal.';
    }

    // Escolher o plano baseado na preferência
    if (preferencia === 'vendaDireta') {
      plan = 'plano2';
      reasoning += ' Você prefere venda direta sem financiamento bancário.';
    } else {
      plan = 'plano1';
      reasoning += ' Recomendamos o plano com financiamento bancário.';
    }

    setRecommendation({ unit, plan, reasoning });
    return { unit, plan, reasoning };
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
🔄 Intercaladas: ${formatCurrency(planData.parcelasIntercaladas)}
${plan === 'plano1' ? `🏦 Financiamento: ${formatCurrency(planData.financiamentoBancario)}` : ''}
🚀 Valor para Início: ${formatCurrency(planData.valorInicio)}

*Entrega: 24 meses*
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
          <div className="text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <CreditCard className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
            <p className="text-gray-600">{step.description}</p>
            
            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => {
                  handleInputChange('preferencia', 'vendaFinanciada');
                  nextStep();
                }}
                className="p-6 bg-gradient-to-r from-green-100 to-orange-100 border-2 border-green-300 rounded-xl hover:from-green-200 hover:to-orange-200 hover:border-green-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">🏦 Venda Financiada</h3>
                <p className="text-gray-600">Com financiamento bancário</p>
              </button>

              <button
                onClick={() => {
                  handleInputChange('preferencia', 'vendaDireta');
                  nextStep();
                }}
                className="p-6 bg-gradient-to-r from-green-100 to-orange-100 border-2 border-green-300 rounded-xl hover:from-green-200 hover:to-orange-200 hover:border-green-400 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">💳 Venda Direta</h3>
                <p className="text-gray-600">Sem financiamento bancário</p>
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
                          <span className="text-gray-700 font-medium">Intercaladas:</span>
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
