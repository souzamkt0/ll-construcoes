import React, { useState } from 'react';
import { 
  User, Phone, Mail, DollarSign, Users, CreditCard, 
  Building2, Home, MapPin, CheckCircle, Send, 
  ChevronLeft, ChevronRight, ArrowRight, MessageCircle, Calculator, Calendar,
  Shield, Award, Plus, Minus, ThumbsUp, AlertTriangle, Heart, CheckCircle2,
  Clock, Timer, Zap, Star, Crown, Target, TrendingUp, Briefcase, Key, 
  PresentationChart, Eye, BadgeCheck, Sparkles, Gift
} from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    renda: '',
    preferencia: ''
  });
  const [expandedSections, setExpandedSections] = useState({});

  const steps = ['Nome', 'WhatsApp', 'Renda Mensal', 'Escolha da Casa', 'Escolha do Plano', 'Simulação Completa', 'Finalização'];

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
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Função para validar se pode avançar para próxima página
  const canProceedToNextStep = () => {
    switch (currentStep) {
      case 0: // Nome
        return formData.nome.trim().length >= 2;
      case 1: // WhatsApp
        return formData.whatsapp.trim().length >= 8;
      case 2: // Renda
        return formData.renda !== '';
      case 3: // Casa
        return formData.selectedUnit !== undefined;
      case 4: // Plano
        return formData.selectedPlan !== undefined;
      default:
        return true;
    }
  };

  // Função para converter renda em valor numérico
  const getRendaValue = () => {
    switch (formData.renda) {
      case 'ate2k':
        return 'R$ 1.500,00';
      case '2k3k':
        return 'R$ 2.500,00';
      case '3k5k':
        return 'R$ 4.000,00';
      case 'acima5k':
        return 'R$ 7.500,00';
      default:
        return 'Não informado';
    }
  };



  const renderStep = () => {
    switch (currentStep) {
      case 0: // Nome
        return (
          <div className="text-center space-y-6 px-4">
            {/* Header Premium */}
            <div className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 rounded-2xl p-6 text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-xl mb-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold mb-2">👋 Bem-vindo(a)!</h2>
                <p className="text-slate-300 text-sm mb-2">Consultoria Imobiliária Exclusiva</p>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-300 text-xs font-medium">Atendimento VIP</span>
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
              </div>
            </div>

            {/* Formulário Premium */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 shadow-lg">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Briefcase className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-bold text-slate-800">Dados do Cliente</h3>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-slate-700 text-sm font-semibold mb-2">Nome Completo *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      value={formData.nome}
                      onChange={(e) => handleInputChange('nome', e.target.value)}
                      placeholder="Seu nome completo"
                      className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-base font-medium shadow-sm"
                    />
                  </div>
                </div>
                
                <button
                  onClick={nextStep}
                  disabled={!formData.nome.trim()}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 shadow-lg ${
                    formData.nome.trim()
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-emerald-200 hover:shadow-xl transform hover:scale-105 border-2 border-emerald-400'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed border-2 border-slate-300'
                  }`}
                >
                  {formData.nome.trim() ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Sparkles className="w-5 h-5" />
                      <span>INICIAR CONSULTORIA</span>
                      <Sparkles className="w-5 h-5" />
                    </div>
                  ) : (
                    'Preencha seu nome'
                  )}
                </button>
              </div>
            </div>

            {/* Benefícios Premium */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-lg p-3 border border-emerald-200">
                <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-emerald-800 text-center">Garantia</p>
                <p className="text-xs text-emerald-600 text-center">5 Anos</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-blue-800 text-center">Entrega</p>
                <p className="text-xs text-blue-600 text-center">24 Meses</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-3 border border-purple-200">
                <Crown className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-purple-800 text-center">Atendimento</p>
                <p className="text-xs text-purple-600 text-center">VIP</p>
              </div>
            </div>
          </div>
        );

      case 1: // WhatsApp
        return (
          <div className="text-center space-y-6 px-4">
            {/* Header Premium */}
            <div className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 rounded-2xl p-6 text-white overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-xl mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-xl font-bold mb-2">📱 Contato Premium</h2>
                <p className="text-emerald-100 text-sm">Olá {formData.nome}! Vamos conectar você ao nosso time</p>
              </div>
            </div>

            {/* Formulário Premium */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 shadow-lg">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Phone className="w-5 h-5 text-slate-600" />
                <h3 className="text-lg font-bold text-slate-800">WhatsApp Verificado</h3>
              </div>
              
              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-slate-700 text-sm font-semibold mb-2">Número WhatsApp *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="text-emerald-600 text-sm font-bold">🇧🇷 +55</span>
                    </div>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                      placeholder="(81) 99999-9999"
                      className="w-full pl-20 pr-4 py-4 bg-white border-2 border-slate-300 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 text-base font-medium shadow-sm text-center"
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                      <MessageCircle className="w-5 h-5 text-emerald-500" />
                    </div>
                  </div>
                  <p className="text-slate-500 text-xs mt-2 text-center">
                    📞 Nosso consultor entrará em contato em até 1 hora
                  </p>
                </div>
                
                <button
                  onClick={nextStep}
                  disabled={!formData.whatsapp.trim()}
                  className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 shadow-lg ${
                    formData.whatsapp.trim()
                      ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-emerald-200 hover:shadow-xl transform hover:scale-105 border-2 border-emerald-400'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed border-2 border-slate-300'
                  }`}
                >
                  {formData.whatsapp.trim() ? (
                    <div className="flex items-center justify-center space-x-2">
                      <MessageCircle className="w-5 h-5" />
                      <span>CONECTAR AGORA</span>
                      <MessageCircle className="w-5 h-5" />
                    </div>
                  ) : (
                    'Informe seu WhatsApp'
                  )}
                </button>
              </div>
            </div>

            {/* Garantias de Segurança */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border border-emerald-200">
                <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-emerald-800 text-center">Dados</p>
                <p className="text-xs text-emerald-600 text-center">Protegidos</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border border-blue-200">
                <BadgeCheck className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                <p className="text-xs font-semibold text-blue-800 text-center">Atendimento</p>
                <p className="text-xs text-blue-600 text-center">Verificado</p>
              </div>
            </div>
          </div>
        );

      case 2: // Renda
        return (
          <div className="text-center space-y-4 px-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-bold text-gray-800">💰 Renda Mensal</h2>
              <p className="text-gray-600 text-xs">Olá {formData.nome}! Qual sua renda mensal?</p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => {
                  handleInputChange('renda', 'ate2k');
                  nextStep();
                }}
                className="w-full p-3 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl hover:from-blue-100 hover:to-indigo-100 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
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
                  nextStep();
                }}
                className="w-full p-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl hover:from-green-100 hover:to-emerald-100 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
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
                  nextStep();
                }}
                className="w-full p-3 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl hover:from-orange-100 hover:to-amber-100 hover:border-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
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
                  nextStep();
                }}
                className="w-full p-3 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl hover:from-red-100 hover:to-pink-100 hover:border-red-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
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

      case 3: // Escolha da Casa
        return (
          <div className="text-center space-y-4 px-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center shadow-xl">
              <Home className="w-10 h-10 text-white" />
            </div>
            <div className="text-center space-y-3">
              <h2 className="text-lg font-bold text-gray-800">Escolha sua Casa</h2>
              <p className="text-gray-600 text-xs">Qual unidade você prefere para sua futura casa?</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, selectedUnit: '2quartos' }));
                  nextStep();
                }}
                className="w-full p-4 rounded-xl border-2 border-green-200 bg-white hover:bg-green-50 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Casa 2 Quartos</h4>
                    <p className="text-xl font-bold text-green-600">R$ 260.000</p>
                    <p className="text-gray-600 text-sm">Área: 42m² • Terreno: 160m²</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, selectedUnit: '3quartos' }));
                  nextStep();
                }}
                className="w-full p-4 rounded-xl border-2 border-blue-200 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <div className="text-center space-y-3">
                  <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800">Casa 3 Quartos</h4>
                    <p className="text-xl font-bold text-blue-600">R$ 280.000</p>
                    <p className="text-gray-600 text-sm">Área: 48m² • Terreno: 160m²</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );

      case 4: // Escolha do Plano
        return (
          <div className="text-center space-y-4 px-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <div className="text-center space-y-3">
              <h2 className="text-lg font-bold text-gray-800">Escolha seu Plano</h2>
              <p className="text-gray-600 text-xs">Qual opção de financiamento você prefere?</p>
            </div>

            <div className="space-y-4">
              {/* Plano Financiamento */}
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, selectedPlan: 'financiamento' }));
                  nextStep();
                }}
                className="w-full p-4 rounded-xl border-2 border-blue-200 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-left"
              >
                <div className="space-y-3">
                  {/* Cabeçalho */}
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg mb-2">
                      <span className="text-xl text-white font-bold">💰</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">Venda Financiada</h4>
                    <p className="text-xl font-bold text-blue-600">
                      R$ {formData.selectedUnit === '2quartos' ? '260.000' : '280.000'}
                    </p>
                  </div>

                  {/* Valores Detalhados */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-2 border border-blue-200">
                      <p className="text-blue-600 font-medium text-xs">Sinal (8%)</p>
                      <p className="text-blue-800 font-bold text-sm">
                        R$ {formData.selectedUnit === '2quartos' ? '20.800' : '22.400'}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2 border border-blue-200">
                      <p className="text-blue-600 font-medium text-xs">Mensais (24x)</p>
                      <p className="text-blue-800 font-bold text-sm">
                        R$ {formData.selectedUnit === '2quartos' ? '1.679' : '1.808'}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-2 border border-purple-200">
                      <p className="text-purple-600 font-medium text-xs">Intercaladas (4x)</p>
                      <p className="text-purple-800 font-bold text-sm">
                        R$ {formData.selectedUnit === '2quartos' ? '4.875' : '5.250'}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-2 border border-orange-200">
                      <p className="text-orange-600 font-medium text-xs">Financiamento</p>
                      <p className="text-orange-800 font-bold text-sm">
                        R$ {formData.selectedUnit === '2quartos' ? '179.400' : '193.200'}
                      </p>
                    </div>
                  </div>

                  {/* Valor para Início */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200 text-center">
                    <p className="text-blue-600 font-medium text-xs">💰 VALOR PARA INÍCIO</p>
                    <p className="text-blue-800 font-bold text-lg">
                      R$ {formData.selectedUnit === '2quartos' ? '22.479' : '24.208'}
                    </p>
                    <p className="text-blue-700 text-xs">(Sinal + 1ª Parcela Mensal)</p>
                  </div>

                  {/* Características */}
                  <div className="text-center">
                    <p className="text-blue-600 text-xs font-medium">✅ Entrega em 24 meses • ✅ Financiamento bancário • ✅ Parcelas sem juros</p>
                  </div>
                </div>
              </button>

              {/* Plano Venda Direta */}
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, selectedPlan: 'vista' }));
                  nextStep();
                }}
                className="w-full p-4 rounded-xl border-2 border-blue-200 bg-white hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-left"
              >
                <div className="space-y-3">
                  {/* Cabeçalho */}
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg mb-2">
                      <span className="text-xl text-white font-bold">💳</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">Venda Direta</h4>
                    <p className="text-xl font-bold text-blue-600">
                      R$ {formData.selectedUnit === '2quartos' ? '260.000' : '280.000'}
                    </p>
                  </div>

                  {/* Valores Detalhados */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2 border border-blue-200">
                      <p className="text-blue-600 font-medium text-xs">Entrada (30%)</p>
                      <p className="text-blue-800 font-bold text-sm">
                        R$ {formData.selectedUnit === '2quartos' ? '78.000' : '84.000'}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200">
                      <p className="text-green-600 font-medium text-xs">Mensais (30x)</p>
                      <p className="text-green-800 font-bold text-sm">
                        R$ {formData.selectedUnit === '2quartos' ? '6.067' : '6.533'}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-2 border border-purple-200">
                      <p className="text-purple-600 font-medium text-xs">Intercaladas (4x)</p>
                      <p className="text-purple-800 font-bold text-sm">
                        R$ {formData.selectedUnit === '2quartos' ? '4.875' : '5.250'}
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-2 border border-orange-200">
                      <p className="text-orange-600 font-medium text-xs">Sem Financiamento</p>
                      <p className="text-orange-800 font-bold text-sm">-</p>
                    </div>
                  </div>

                  {/* Valor para Início */}
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-3 border border-yellow-200 text-center">
                    <p className="text-yellow-600 font-medium text-xs">💰 VALOR PARA INÍCIO</p>
                    <p className="text-yellow-800 font-bold text-lg">
                      R$ {formData.selectedUnit === '2quartos' ? '82.875' : '89.250'}
                    </p>
                    <p className="text-yellow-700 text-xs">(Entrada + 1ª Intercalada)</p>
                  </div>

                  {/* Características */}
                  <div className="text-center">
                    <p className="text-gray-600 text-xs">✅ Entrega em 24 meses • ✅ Sem juros • ✅ Parcelas fixas • ✅ 4 intercaladas durante obra</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        );

      case 5: // Simulação Completa
        return (
          <div className="space-y-4 px-4">
            {/* Cabeçalho */}
            <div className="text-center space-y-3">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-xl">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-lg font-bold text-gray-800">Simulação Completa</h2>
              <p className="text-gray-600 text-xs">Sua proposta personalizada está sendo preparada...</p>
            </div>


            
            {/* Resumo da Simulação */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Resumo da Simulação</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>WhatsApp:</strong> {formData.whatsapp}</p>
                <p><strong>Renda:</strong> {getRendaValue()}</p>
                <p><strong>Casa Selecionada:</strong> {formData.selectedUnit === '2quartos' ? '2 Quartos' : '3 Quartos'}</p>
                <p><strong>Plano Selecionado:</strong> {formData.selectedPlan === 'vista' ? 'Venda Direta' : 'Venda Financiada'}</p>
              </div>
            </div>

            {/* Planta da Casa */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center">
                  <Home className="w-5 h-5 mr-2 text-blue-600" />
                  🏗️ Planta da Casa
                </h3>
                <button
                  onClick={() => toggleSection('housePlan')}
                  className="flex items-center space-x-2 px-3 py-1 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                >
                  {expandedSections.housePlan ? (
                    <>
                      <Minus className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-600 text-sm font-medium">Recolher</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-600 text-sm font-medium">Expandir</span>
                    </>
                  )}
                </button>
              </div>
              
              {/* Informações Básicas */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-2 border border-blue-200 text-center">
                  <p className="text-blue-600 font-medium text-xs">Área Total</p>
                  <p className="text-blue-800 font-bold text-sm">{formData.selectedUnit === '2quartos' ? '42m²' : '48m²'}</p>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200 text-center">
                  <p className="text-green-600 font-medium text-xs">Quartos</p>
                  <p className="text-green-800 font-bold text-sm">{formData.selectedUnit === '2quartos' ? '2' : '3'}</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-2 border border-purple-200 text-center">
                  <p className="text-purple-600 font-medium text-xs">Banheiros</p>
                  <p className="text-purple-800 font-bold text-sm">{formData.selectedUnit === '2quartos' ? '1' : '2'}</p>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-2 border border-orange-200 text-center">
                  <p className="text-orange-600 font-medium text-xs">Terreno</p>
                  <p className="text-orange-800 font-bold text-sm">160m²</p>
                </div>
              </div>

              {expandedSections.housePlan && (
                <>
                  {/* Especificações Técnicas */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200 mb-3">
                    <h5 className="font-semibold text-blue-800 mb-2 text-center text-sm">📐 Especificações Técnicas</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center">
                    <p className="text-blue-600 font-medium">Terreno</p>
                    <p className="text-gray-700">20m x 80m</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-600 font-medium">Área Construída</p>
                    <p className="text-gray-700">{formData.selectedUnit === '2quartos' ? '42m²' : '48m²'}</p>
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
              <div className="space-y-2">
                {/* Sala */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200">
                  <h5 className="font-semibold text-green-800 mb-1 flex items-center text-sm">
                    🛋️ Sala de Estar
                  </h5>
                  <div className="grid grid-cols-2 gap-1 text-xs">
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
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-2 border border-orange-200">
                  <h5 className="font-semibold text-orange-800 mb-1 flex items-center text-sm">
                    🍳 Cozinha
                  </h5>
                  <div className="grid grid-cols-2 gap-1 text-xs">
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
                {formData.selectedUnit === '2quartos' ? (
                  <>
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-2 border border-purple-200">
                      <h5 className="font-semibold text-purple-800 mb-1 flex items-center text-sm">
                        🛏️ Quarto Principal
                      </h5>
                      <div className="grid grid-cols-2 gap-1 text-xs">
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

                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-2 border border-pink-200">
                      <h5 className="font-semibold text-pink-800 mb-1 flex items-center text-sm">
                        🛏️ Quarto Secundário
                      </h5>
                      <div className="grid grid-cols-2 gap-1 text-xs">
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
                    <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg p-2 border border-purple-200">
                      <h5 className="font-semibold text-purple-800 mb-1 flex items-center text-sm">
                        🛏️ Suíte Master
                      </h5>
                      <div className="grid grid-cols-2 gap-1 text-xs">
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

                    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-2 border border-pink-200">
                      <h5 className="font-semibold text-pink-800 mb-1 flex items-center text-sm">
                        🛏️ Quarto 2
                      </h5>
                      <div className="grid grid-cols-2 gap-1 text-xs">
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

                    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-2 border border-indigo-200">
                      <h5 className="font-semibold text-indigo-800 mb-1 flex items-center text-sm">
                        🛏️ Quarto 3
                      </h5>
                      <div className="grid grid-cols-2 gap-1 text-xs">
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
                <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg p-2 border border-cyan-200">
                  <h5 className="font-semibold text-cyan-800 mb-1 flex items-center text-sm">
                    🚿 {formData.selectedUnit === '2quartos' ? 'Banheiro' : 'Banheiro Social'}
                  </h5>
                  <div className="grid grid-cols-2 gap-1 text-xs">
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
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-2 border border-gray-200">
                  <h5 className="font-semibold text-gray-800 mb-1 flex items-center text-sm">
                    🧺 Área de Serviço
                  </h5>
                  <div className="grid grid-cols-2 gap-1 text-xs">
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
                <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg p-2 border border-emerald-200">
                  <h5 className="font-semibold text-emerald-800 mb-1 flex items-center text-sm">
                    🌿 Área Externa
                  </h5>
                  <div className="grid grid-cols-2 gap-1 text-xs">
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

                  {/* Resumo da Área */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-200 text-center mt-3">
                    <h5 className="font-semibold text-blue-800 mb-2 text-sm">📊 Resumo da Área</h5>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-blue-600 font-medium">Área Total:</p>
                        <p className="text-blue-800 font-bold">{formData.selectedUnit === '2quartos' ? '42m²' : '48m²'}</p>
                      </div>
                      <div>
                        <p className="text-blue-600 font-medium">Terreno:</p>
                        <p className="text-blue-800 font-bold">160m²</p>
                      </div>
                      <div>
                        <p className="text-blue-600 font-medium">Quartos:</p>
                        <p className="text-blue-800 font-bold">{formData.selectedUnit === '2quartos' ? '2' : '3'}</p>
                      </div>
                      <div>
                        <p className="text-blue-600 font-medium">Banheiros:</p>
                        <p className="text-blue-800 font-bold">{formData.selectedUnit === '2quartos' ? '1' : '2'}</p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Botão Enviar Proposta */}
            <div className="text-center">
              <button
                onClick={() => {
                  // Primeiro, enviar a mensagem pelo WhatsApp
                  const message = `🏠 *PROPOSTA COMPLETA LL CONSTRUÇÕES* 🏠

*DADOS DO CLIENTE:*
👤 Nome: ${formData.nome}
📱 WhatsApp: +55 ${formData.whatsapp.replace(/^\(81\)\s*/, '')}
💵 Renda Mensal: ${getRendaValue()}

*CASA SELECIONADA:*
🏠 ${formData.selectedUnit === '2quartos' ? '2 Quartos' : '3 Quartos'}
💰 Valor: R$ ${formData.selectedUnit === '2quartos' ? '260.000' : '280.000'}
📐 Área: ${formData.selectedUnit === '2quartos' ? '42m²' : '48m²'}
🏗️ Terreno: 160m² (20x80m)

*PLANO ESCOLHIDO:*
💳 ${formData.selectedPlan === 'vista' ? 'Venda Direta' : 'Venda Financiada'}

${formData.selectedPlan === 'vista' ? 
`*VALORES VENDA DIRETA:*
💙 Entrada (30%): R$ ${formData.selectedUnit === '2quartos' ? '78.000' : '84.000'}
💚 Mensais (30x): R$ ${formData.selectedUnit === '2quartos' ? '6.067' : '6.533'}
🟣 Intercaladas (4x): R$ ${formData.selectedUnit === '2quartos' ? '4.875' : '5.250'}
💛 Valor para Início: R$ ${formData.selectedUnit === '2quartos' ? '82.875' : '89.250'}` : 
`*VALORES VENDA FINANCIADA:*
💚 Sinal (8%): R$ ${formData.selectedUnit === '2quartos' ? '20.800' : '22.400'}
💙 Mensais (24x): R$ ${formData.selectedUnit === '2quartos' ? '1.679' : '1.808'}
🟣 Intercaladas (4x): R$ ${formData.selectedUnit === '2quartos' ? '4.875' : '5.250'}
🟠 Financiamento: R$ ${formData.selectedUnit === '2quartos' ? '179.400' : '193.200'}
💛 Valor para Início: R$ ${formData.selectedUnit === '2quartos' ? '22.479' : '24.208'}`}

*PLANTA DETALHADA:*
🛋️ Sala: 6m x 3m (18m²) - Integrada com cozinha
🍳 Cozinha: 6m x 2.5m (15m²) - Armários planejados
${formData.selectedUnit === '2quartos' ? 
`🛏️ Quarto Principal: 3.5m x 3m (10.5m²) - Suíte com closet
🛏️ Quarto Secundário: 3m x 3m (9m²) - Armário embutido
🚿 Banheiro: 2m x 1.5m (3m²) - Box de vidro` : 
`🛏️ Suíte Master: 4m x 3.5m (14m²) - Closet walk-in
🛏️ Quarto 2: 3.5m x 3m (10.5m²) - Armário embutido
🛏️ Quarto 3: 3m x 3m (9m²) - Armário embutido
🚿 Banheiro Social: 2m x 1.5m (3m²) - Box de vidro`}
🧺 Área de Serviço: 2m x 1.5m (3m²) - Tanque de lavar
🌿 Área Externa: 6m x 3m (18m²) - Churrasqueira e jardim

*CARACTERÍSTICAS TÉCNICAS:*
✅ Entrega em 24 meses
✅ Terreno 20m x 80m
✅ Largura da casa: 6m
✅ Comprimento da casa: 7m
✅ Ventilação natural em todos os ambientes
✅ Iluminação direta nos quartos

_Interessado em agendar uma visita e fechar negócio!_ 🏠✨`;

                  const encodedMessage = encodeURIComponent(message);
                  const phoneNumber = formData.whatsapp.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
                  const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank');
                  
                  // Depois, avançar para a página de agradecimento
                  setTimeout(() => {
                    nextStep();
                  }, 1000); // Aguarda 1 segundo para dar tempo de abrir o WhatsApp
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <Send className="w-6 h-6" />
                <span>Enviar Proposta</span>
              </button>
            </div>
          </div>
        );

      case 6: // Página de Agradecimento
        return (
          <div className="text-center space-y-6 px-4">
            {/* Header Premium */}
            <div className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 rounded-2xl p-8 text-white overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl mb-4">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold mb-2">✅ Proposta Enviada com Sucesso!</h2>
                <p className="text-lg text-emerald-300 font-semibold mb-1">
                  Parabéns, {formData.nome}!
                </p>
                <p className="text-blue-100 text-sm">
                  Sua reserva foi registrada em nosso sistema
                </p>
              </div>
            </div>

            {/* Alerta de Urgência - Últimas Unidades */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-xl border-2 border-orange-300 animate-pulse">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Timer className="w-6 h-6" />
                <h3 className="text-xl font-bold">🚨 ÚLTIMAS UNIDADES!</h3>
                <Timer className="w-6 h-6" />
              </div>
              <p className="text-orange-100 font-medium text-lg mb-2">
                Restam apenas poucas unidades disponíveis
              </p>
              <p className="text-white text-sm font-semibold">
                ⚡ Garanta a sua agora mesmo antes que seja tarde!
              </p>
            </div>

            {/* Informações de Entrega */}
            <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border-2 border-emerald-200 shadow-lg">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Key className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-emerald-800">Entrega das Chaves</h3>
              </div>
              <div className="bg-white rounded-lg p-4 border border-emerald-200">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Calendar className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 font-bold text-xl">24 MESES</span>
                </div>
                <p className="text-gray-600 text-sm">
                  Prazo garantido com multa por atraso
                </p>
              </div>
            </div>

            {/* Cards de Benefícios Premium */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 shadow-lg">
                <div className="flex flex-col items-center">
                  <Crown className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="text-sm font-bold text-blue-800">Atendimento VIP</h4>
                  <p className="text-xs text-blue-600 text-center">Consultor exclusivo</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200 shadow-lg">
                <div className="flex flex-col items-center">
                  <Shield className="w-8 h-8 text-emerald-600 mb-2" />
                  <h4 className="text-sm font-bold text-emerald-800">Garantia Total</h4>
                  <p className="text-xs text-emerald-600 text-center">5 anos cobertura</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200 shadow-lg">
                <div className="flex flex-col items-center">
                  <Zap className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="text-sm font-bold text-purple-800">Resposta Rápida</h4>
                  <p className="text-xs text-purple-600 text-center">24h úteis</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 shadow-lg">
                <div className="flex flex-col items-center">
                  <Award className="w-8 h-8 text-amber-600 mb-2" />
                  <h4 className="text-sm font-bold text-amber-800">Negociação</h4>
                  <p className="text-xs text-amber-600 text-center">Condições especiais</p>
                </div>
              </div>
            </div>

            {/* Status Premium */}
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-6 text-white shadow-xl">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <BadgeCheck className="w-6 h-6 text-emerald-400" />
                <h3 className="text-lg font-bold">Status da Proposta</h3>
              </div>
              <div className="bg-slate-700 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Cliente:</span>
                  <span className="font-bold text-white">{formData.nome}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-slate-300">WhatsApp:</span>
                  <span className="font-bold text-emerald-400">{formData.whatsapp}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-slate-300">Status:</span>
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">EM ANÁLISE</span>
                </div>
              </div>
            </div>

            {/* Call to Action Premium */}
            <div className="space-y-4">
              <button
                onClick={() => {
                  const quickMessage = `🏠 LL CONSTRUÇÕES - URGENTE!
                  
Olá! Acabei de enviar minha proposta e gostaria de GARANTIR minha unidade o quanto antes, pois soube que restam poucas disponíveis.

👤 Nome: ${formData.nome}
📱 Contato: ${formData.whatsapp}
🏠 Interesse: ${formData.selectedUnit === '2quartos' ? 'Casa 2 Quartos' : 'Casa 3 Quartos'}

Posso agendar uma reunião ainda hoje para fechar negócio? Tenho urgência em garantir minha casa dos sonhos!

Aguardo retorno imediato! 🚀`;
                  const encodedMessage = encodeURIComponent(quickMessage);
                  const phoneNumber = formData.whatsapp.replace(/\D/g, '');
                  const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-3 border-2 border-emerald-400"
              >
                <Sparkles className="w-6 h-6" />
                <span className="text-lg">FALAR COM CONSULTOR AGORA</span>
                <Sparkles className="w-6 h-6" />
              </button>
              
              <button
                onClick={() => {
                  const urgentMessage = `🚨 ÚLTIMA CHANCE - LL CONSTRUÇÕES

Quero GARANTIR minha unidade AGORA! Vi que restam poucas unidades e não posso perder essa oportunidade.

Preciso de atendimento PRIORITÁRIO para:
✅ Confirmar disponibilidade
✅ Reservar minha unidade  
✅ Agendar assinatura hoje mesmo

Nome: ${formData.nome}
Unidade: ${formData.selectedUnit === '2quartos' ? 'Casa 2 Quartos - R$ 260.000' : 'Casa 3 Quartos - R$ 280.000'}

ME CHAME URGENTE! ⚡`;
                  const encodedMessage = encodeURIComponent(urgentMessage);
                  const phoneNumber = formData.whatsapp.replace(/\D/g, '');
                  const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 animate-pulse"
              >
                <Timer className="w-5 h-5" />
                <span>🚨 GARANTIR MINHA UNIDADE AGORA</span>
              </button>
            </div>

            {/* Footer Premium */}
            <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-xl p-4 border border-slate-300">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Crown className="w-4 h-4 text-slate-600" />
                <span className="text-slate-700 font-bold text-sm">LL CONSTRUÇÕES</span>
              </div>
              <p className="text-slate-600 text-xs">
                © 2024 • Mais de 10 anos realizando sonhos • Entrega garantida em 24 meses
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-4 py-6">
        {/* Header Premium Imobiliário */}
        <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl rounded-xl sm:rounded-2xl mb-4 sm:mb-6 overflow-hidden">
          <div className="max-w-md mx-auto px-3 sm:px-6 py-4 sm:py-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
            <button 
              onClick={() => setCurrentStep(0)}
              className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-4 w-full hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow">
                <Building2 className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="text-center flex-1">
                <h1 className="text-base sm:text-xl font-bold text-white tracking-wide hover:text-emerald-300 transition-colors">LL CONSTRUÇÕES</h1>
                <p className="text-emerald-300 text-xs sm:text-sm font-medium">Premium Real Estate</p>
              </div>
              <div className="flex flex-col items-center">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                <span className="text-yellow-300 text-xs font-bold">VIP</span>
              </div>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-md mx-auto px-3 sm:px-6 py-4 sm:py-6">
          <div className="bg-white border border-blue-200/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden ring-1 ring-white/20">
            <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-500 rounded-t-2xl sm:rounded-t-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/90 rounded-2xl sm:rounded-3xl"></div>
            <div className="relative z-10">
              {renderStep()}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 gap-3 sm:gap-4">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border-2 ${
                currentStep === 0
                  ? 'bg-slate-700/50 text-slate-400 cursor-not-allowed border-slate-600/50'
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20 hover:border-white/50 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm'
              }`}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 inline mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Anterior</span>
              <span className="sm:hidden">Voltar</span>
            </button>

            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1 || !canProceedToNextStep()}
              className={`flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 border-2 ${
                currentStep === steps.length - 1 || !canProceedToNextStep()
                  ? 'bg-slate-700/50 text-slate-400 cursor-not-allowed border-slate-600/50'
                  : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-emerald-400 shadow-lg hover:shadow-xl transform hover:scale-105'
              }`}
            >
              <span className="hidden sm:inline">Próximo</span>
              <span className="sm:hidden">Avançar</span>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 inline ml-1 sm:ml-2" />
            </button>
          </div>

          {/* Step Indicator */}
          <div className="mt-6 sm:mt-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/20">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2 sm:mb-3 overflow-x-auto">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-500 relative flex-shrink-0 ${
                      index === currentStep
                        ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 scale-125 shadow-lg shadow-emerald-500/50'
                        : index < currentStep
                        ? 'bg-emerald-400 shadow-md'
                        : 'bg-white/30 border-2 border-white/50'
                    }`}
                  >
                    {index < currentStep && (
                      <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white absolute inset-0 m-auto" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-white font-bold text-xs sm:text-sm">
                Passo {currentStep + 1} de {steps.length}
              </p>
              <p className="text-white/70 text-xs mt-1 break-words">
                {steps[currentStep]}
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="max-w-md mx-auto px-3 sm:px-6 py-4 sm:py-6 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-white/20">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              <p className="text-white font-bold text-xs sm:text-sm">
                LL CONSTRUÇÕES
              </p>
              <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
            </div>
            <p className="text-white/80 text-xs leading-relaxed">
              © 2024 • Entrega garantida em 24 meses<br className="sm:hidden" />
              <span className="hidden sm:inline"> • </span>Premium Real Estate
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 mt-3 bg-emerald-500/20 rounded-lg p-2">
              <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
              <p className="text-emerald-400 text-xs font-medium text-center">
                Atendimento VIP: (81) 99379-8551
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
