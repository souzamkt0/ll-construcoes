import React, { useState } from 'react';
import { 
  User, Phone, Mail, DollarSign, Users, CreditCard, 
  Building2, Home, MapPin, CheckCircle, Send, 
  ChevronLeft, ChevronRight, ArrowRight, MessageCircle, Calculator, Calendar
} from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    renda: '',
    preferencia: ''
  });

  const steps = ['Nome', 'WhatsApp', 'Renda Mensal', 'Escolha da Casa', 'Escolha do Plano', 'Simulação Completa'];

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

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Nome
        return (
          <div className="text-center space-y-6 px-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">👋 Olá!</h2>
              <p className="text-gray-600 text-sm">Como podemos te chamar?</p>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  placeholder="Digite seu nome completo"
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 text-base"
                />
              </div>
              
              <button
                onClick={nextStep}
                disabled={!formData.nome.trim()}
                className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
                  formData.nome.trim()
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
          <div className="text-center space-y-6 px-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-2xl">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-800">📱 WhatsApp</h2>
              <p className="text-gray-600 text-sm">Olá {formData.nome}! Qual seu WhatsApp?</p>
            </div>
            
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MessageCircle className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                  placeholder="(81) 99999-9999"
                  className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all duration-300 text-base"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 text-sm font-medium">+55</span>
                </div>
              </div>
              
              <button
                onClick={nextStep}
                disabled={!formData.whatsapp.trim()}
                className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 ${
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
          <div className="text-center space-y-4 px-4">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl">
              <DollarSign className="w-10 h-10 text-white" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-gray-800">💰 Renda Mensal</h2>
              <p className="text-gray-600 text-sm">Olá {formData.nome}! Qual sua renda mensal?</p>
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
            <h2 className="text-xl font-bold text-gray-800">Escolha sua Casa</h2>
            <p className="text-gray-600 text-sm">Qual unidade você prefere para sua futura casa?</p>

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
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Escolha seu Plano</h2>
            <p className="text-gray-600 text-sm">Qual opção de financiamento você prefere?</p>

            <div className="space-y-4">
              {/* Plano Financiamento */}
              <button
                onClick={() => {
                  setFormData(prev => ({ ...prev, selectedPlan: 'financiamento' }));
                  nextStep();
                }}
                className="w-full p-4 rounded-xl border-2 border-green-200 bg-white hover:bg-green-50 hover:border-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-left"
              >
                <div className="space-y-3">
                  {/* Cabeçalho */}
                  <div className="text-center">
                    <div className="w-14 h-14 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg mb-2">
                      <span className="text-xl text-white font-bold">💰</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">Venda Financiada</h4>
                    <p className="text-xl font-bold text-green-600">
                      R$ {formData.selectedUnit === '2quartos' ? '260.000' : '280.000'}
                    </p>
                  </div>

                  {/* Valores Detalhados */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-2 border border-green-200">
                      <p className="text-green-600 font-medium text-xs">Sinal (8%)</p>
                      <p className="text-green-800 font-bold text-sm">
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
                  <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-3 border border-yellow-200 text-center">
                    <p className="text-yellow-600 font-medium text-xs">💰 VALOR PARA INÍCIO</p>
                    <p className="text-yellow-800 font-bold text-lg">
                      R$ {formData.selectedUnit === '2quartos' ? '22.479' : '24.208'}
                    </p>
                    <p className="text-yellow-700 text-xs">(Sinal + 1ª Parcela Mensal)</p>
                  </div>

                  {/* Características */}
                  <div className="text-center">
                    <p className="text-gray-600 text-xs">✅ Entrega em 24 meses • ✅ Financiamento bancário • ✅ Parcelas sem juros</p>
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
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Simulação Completa</h2>
              <p className="text-gray-600 text-sm">Sua proposta personalizada está sendo preparada...</p>
            </div>
            
            {/* Resumo da Simulação */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Resumo da Simulação</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Nome:</strong> {formData.nome}</p>
                <p><strong>WhatsApp:</strong> {formData.whatsapp}</p>
                <p><strong>Renda:</strong> {formData.renda}</p>
                <p><strong>Casa Selecionada:</strong> {formData.selectedUnit === '2quartos' ? '2 Quartos' : '3 Quartos'}</p>
                <p><strong>Plano Selecionado:</strong> {formData.selectedPlan === 'vista' ? 'Venda Direta' : 'Venda Financiada'}</p>
              </div>
            </div>

            {/* Planta da Casa */}
            <div className="bg-white border-2 border-green-200 rounded-xl p-4 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">🏗️ Planta da Casa</h3>
              
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
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-3 border border-yellow-200 text-center mt-3">
                <h5 className="font-semibold text-yellow-800 mb-2 text-sm">📊 Resumo da Área</h5>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-yellow-600 font-medium">Área Total:</p>
                    <p className="text-yellow-800 font-bold">{formData.selectedUnit === '2quartos' ? '42m²' : '48m²'}</p>
                  </div>
                  <div>
                    <p className="text-yellow-600 font-medium">Terreno:</p>
                    <p className="text-yellow-800 font-bold">160m²</p>
                  </div>
                  <div>
                    <p className="text-yellow-600 font-medium">Quartos:</p>
                    <p className="text-yellow-800 font-bold">{formData.selectedUnit === '2quartos' ? '2' : '3'}</p>
                  </div>
                  <div>
                    <p className="text-yellow-600 font-medium">Banheiros:</p>
                    <p className="text-yellow-800 font-bold">{formData.selectedUnit === '2quartos' ? '1' : '2'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botão WhatsApp */}
            <div className="text-center">
              <button
                onClick={() => {
                  const message = `🏠 *PROPOSTA COMPLETA LL CONSTRUÇÕES* 🏠

*DADOS DO CLIENTE:*
👤 Nome: ${formData.nome}
📱 WhatsApp: +55 ${formData.whatsapp}
💵 Renda: ${formData.renda}

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
                  const whatsappUrl = `https://wa.me/81993798551?text=${encodedMessage}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Enviar Proposta Completa via WhatsApp</span>
              </button>
            </div>
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
                  : 'bg-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
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
