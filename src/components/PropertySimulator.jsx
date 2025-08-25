import React, { useState } from 'react';
import { Calculator, Home, Shield, FileText, AlertCircle, CheckCircle, DollarSign, Calendar, MapPin, Users, TrendingUp, CreditCard, Clock, Star } from 'lucide-react';

export default function PropertySimulator() {
  const [selectedProperty, setSelectedProperty] = useState('102');

  const properties = {
    '102': {
      name: 'Unidade 102',
      price: 342315.72,
      size: '42,79 m²',
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      features: ['Sala de estar', 'Cozinha integrada', 'Área de serviço', 'Varanda'],
      popular: true,
      unit: '102'
    },
    '105': {
      name: 'Unidade 105',
      price: 342315.72,
      size: '42,79 m²',
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      features: ['Sala de estar', 'Cozinha integrada', 'Área de serviço', 'Varanda'],
      popular: false,
      unit: '105'
    },
    '101': {
      name: 'Unidade 101',
      price: 345995.68,
      size: '43,25 m²',
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      features: ['Sala de estar', 'Cozinha integrada', 'Área de serviço', 'Varanda'],
      popular: false,
      unit: '101'
    },
    '106': {
      name: 'Unidade 106',
      price: 345995.68,
      size: '43,25 m²',
      rooms: 2,
      bathrooms: 1,
      garage: 1,
      features: ['Sala de estar', 'Cozinha integrada', 'Área de serviço', 'Varanda'],
      popular: false,
      unit: '106'
    },
    '103': {
      name: 'Unidade 103',
      price: 461434.23,
      size: '57,68 m²',
      rooms: 3,
      bathrooms: 2,
      garage: 1,
      features: ['Sala de estar', 'Cozinha integrada', 'Área de serviço', 'Varanda', 'Suíte'],
      popular: false,
      unit: '103'
    },
    '104': {
      name: 'Unidade 104',
      price: 461434.23,
      size: '57,68 m²',
      rooms: 3,
      bathrooms: 2,
      garage: 1,
      features: ['Sala de estar', 'Cozinha integrada', 'Área de serviço', 'Varanda', 'Suíte'],
      popular: false,
      unit: '104'
    }
  };

  const currentProperty = properties[selectedProperty];
  
  // Cálculos baseados no plano The Link Residence
  const sinal = currentProperty.price * 0.08; // 8% de sinal
  const parcelasMensais = currentProperty.price * 0.0645; // 6,45% em 24 parcelas
  const parcelasIntercaladas = currentProperty.price * 0.0188; // 1,88% em 4 parcelas
  const financiamentoBancario = currentProperty.price * 0.69; // 69% financiamento
  
  // Valor para início (Sinal + 1ª Parcela Mensal)
  const valorInicio = sinal + (parcelasMensais / 24);

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
      {/* Header com gradiente */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800 text-white p-8 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
              <Calculator className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">The Link Residence</h2>
              <p className="text-emerald-100 text-lg">
                Simulador de Financiamento - Plano Oficial
              </p>
            </div>
          </div>
          
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Entrega</span>
              </div>
              <div className="text-2xl font-bold mt-1">24 meses</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">Garantia</span>
              </div>
              <div className="text-2xl font-bold mt-1">5 anos</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">Valorização</span>
              </div>
              <div className="text-2xl font-bold mt-1">+15% ao ano</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span className="text-sm">Localização</span>
              </div>
              <div className="text-2xl font-bold mt-1">Premium</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Seleção de Imóvel */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Home className="w-6 h-6 mr-3 text-emerald-600" />
            Escolha sua Unidade
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(properties).map(([key, property]) => (
              <button
                key={key}
                onClick={() => setSelectedProperty(key)}
                className={`relative p-6 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                  selectedProperty === key
                    ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-emerald-100 shadow-lg'
                    : 'border-gray-200 hover:border-emerald-300 bg-white hover:shadow-md'
                }`}
              >
                {property.popular && (
                  <div className="absolute -top-3 -right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Mais Popular
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <h4 className="text-xl font-bold text-gray-800">{property.name}</h4>
                  <div className="text-3xl font-bold text-emerald-600 mt-2">
                    R$ {property.price.toLocaleString('pt-BR')}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{property.size}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{property.rooms} quartos</span>
                  </div>
                </div>
                
                <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
                  {property.features.join(' • ')}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Valor para Início */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">💰 VALOR PARA INÍCIO</h3>
            <div className="text-5xl font-bold mb-2">
              R$ {valorInicio.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
            </div>
            <p className="text-emerald-100 text-lg">
              (Sinal + 1ª Parcela Mensal)
            </p>
          </div>
        </div>

        {/* Tabela de Valores */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-emerald-600" />
            Detalhamento do Plano de Pagamento
          </h3>
          <div className="overflow-hidden rounded-2xl border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    COMPONENTE
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    VALOR
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    OBSERVAÇÃO
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    Valor Total
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">
                    R$ {currentProperty.price.toLocaleString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    Valor do imóvel
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    Sinal
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">
                    R$ {sinal.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    8% do valor total
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    Parcelas Mensais
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">
                    R$ {(parcelasMensais / 24).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    24 parcelas durante a obra
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                  <td className="px-6 py-4 text-sm font-semibold text-gray-800">
                    Parcelas Intercaladas
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">
                    R$ {(parcelasIntercaladas / 4).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    4 parcelas extras (semestrais)
                  </td>
                </tr>
                <tr className="bg-gradient-to-r from-emerald-50 to-emerald-100 border-t-2 border-emerald-200">
                  <td className="px-6 py-4 text-sm font-bold text-gray-800">
                    Financiamento Bancário
                  </td>
                  <td className="px-6 py-4 text-sm text-right font-bold text-emerald-600">
                    R$ {financiamentoBancario.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    69% do valor financiado
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Resumo Financeiro */}
        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-emerald-600" />
              Resumo do Plano
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                <span className="text-gray-600">Sinal (8%):</span>
                <span className="font-semibold text-gray-800">R$ {sinal.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                <span className="text-gray-600">24 Parcelas Mensais:</span>
                <span className="font-semibold text-gray-800">R$ {(parcelasMensais / 24).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-emerald-200">
                <span className="text-gray-600">4 Parcelas Intercaladas:</span>
                <span className="font-semibold text-gray-800">R$ {(parcelasIntercaladas / 4).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-emerald-200 rounded-lg px-4">
                <span className="font-semibold text-gray-800">Financiamento (69%):</span>
                <span className="font-bold text-emerald-700">R$ {financiamentoBancario.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-blue-600" />
              Informações do Empreendimento
            </h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-blue-200">
                <span className="text-gray-600">Prazo de entrega:</span>
                <span className="font-semibold text-gray-800">24 meses</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-blue-200">
                <span className="text-gray-600">Localização:</span>
                <span className="font-semibold text-gray-800">Zona Premium</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-blue-200">
                <span className="text-gray-600">Status:</span>
                <span className="font-semibold text-green-600">Em construção</span>
              </div>
              <div className="flex justify-between items-center py-3 bg-blue-200 rounded-lg px-4">
                <span className="font-semibold text-gray-800">Plano:</span>
                <span className="font-bold text-blue-700">The Link Residence</span>
              </div>
            </div>
          </div>
        </div>

        {/* Observações Importantes */}
        <div className="mb-8">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200">
            <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-orange-600" />
              Observações Importantes
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <strong>Forma de pagamento:</strong> Sinal + 24 parcelas mensais + 4 intercaladas + financiamento bancário
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <strong>Parcelas intercaladas:</strong> Pagas durante a obra, geralmente a cada 6 meses
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <strong>Financiamento:</strong> Valor restante é financiado após a entrega das chaves
                </li>
              </ul>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <strong>Tabela válida:</strong> Até 31/07/2025
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <strong>Documentação:</strong> 100% em dia e regularizada
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <strong>Garantia:</strong> 5 anos de garantia na construção
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-12 py-6 rounded-2xl text-xl font-bold transition-all transform hover:scale-105 shadow-xl">
            Reservar Unidade {currentProperty.unit}
          </button>
          <p className="text-gray-500 mt-4 text-lg">
            Entre em contato para garantir sua unidade preferida
          </p>
        </div>
      </div>
    </div>
  );
}
