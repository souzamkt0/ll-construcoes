import React, { useState } from 'react';
import { Shield, FileText, AlertTriangle, CheckCircle, BookOpen, Scale, UserCheck, Clock } from 'lucide-react';

export default function LegalInformation() {
  const [activeTab, setActiveTab] = useState('cdc');

  const legalInfo = {
    cdc: {
      title: 'Código de Defesa do Consumidor',
      icon: Shield,
      content: [
        {
          subtitle: 'Art. 6º - Direitos Básicos do Consumidor',
          items: [
            'Direito à informação clara e adequada sobre produtos e serviços',
            'Direito à proteção da vida, saúde e segurança',
            'Direito à educação e divulgação sobre o consumo adequado',
            'Direito à proteção contra práticas abusivas',
            'Direito à modificação das cláusulas contratuais',
            'Direito à efetiva prevenção e reparação de danos'
          ]
        },
        {
          subtitle: 'Art. 49 - Direito de Arrependimento',
          items: [
            'Prazo de 7 dias corridos para desistência',
            'Devolução integral do valor pago',
            'Sem necessidade de justificativa',
            'Sem multas ou penalidades',
            'Aplicável a vendas realizadas fora do estabelecimento comercial'
          ]
        }
      ]
    },
    contrato: {
      title: 'Contrato de Compra e Venda',
      icon: FileText,
      content: [
        {
          subtitle: 'Elementos Essenciais',
          items: [
            'Identificação completa das partes',
            'Descrição detalhada do imóvel',
            'Valor e forma de pagamento',
            'Prazo de entrega',
            'Garantias oferecidas',
            'Cláusulas de resolução'
          ]
        },
        {
          subtitle: 'Cláusulas Obrigatórias',
          items: [
            'Prazo de entrega do imóvel',
            'Garantia de qualidade',
            'Responsabilidade por vícios ocultos',
            'Direito de resolução por inadimplemento',
            'Correção monetária',
            'Multa por atraso na entrega'
          ]
        }
      ]
    },
    desistencia: {
      title: 'Desistência e Desfazimento',
      icon: AlertTriangle,
      content: [
        {
          subtitle: 'Direito de Arrependimento',
          items: [
            '7 dias corridos para desistência',
            'Devolução integral do valor pago',
            'Correção monetária obrigatória',
            'Sem necessidade de justificativa',
            'Aplicável mesmo após assinatura do contrato'
          ]
        },
        {
          subtitle: 'Resolução por Inadimplemento',
          items: [
            'Atraso na entrega superior a 90 dias',
            'Vícios ocultos não corrigidos',
            'Descumprimento de obrigações contratuais',
            'Direito à devolução com correção monetária',
            'Possibilidade de indenização por danos'
          ]
        }
      ]
    },
    garantias: {
      title: 'Garantias e Responsabilidades',
      icon: CheckCircle,
      content: [
        {
          subtitle: 'Garantia de Qualidade',
          items: [
            '5 anos para vícios de construção',
            '90 dias para vícios aparentes',
            'Responsabilidade solidária da construtora',
            'Obrigatoriedade de correção de defeitos',
            'Possibilidade de resolução contratual'
          ]
        },
        {
          subtitle: 'Responsabilidades da Construtora',
          items: [
            'Entrega do imóvel no prazo contratado',
            'Qualidade da construção',
            'Documentação em ordem',
            'Habite-se e AVCB',
            'Assistência técnica pós-entrega'
          ]
        }
      ]
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
        <div className="flex items-center space-x-3 mb-4">
          <Scale className="w-8 h-8" />
          <h2 className="text-3xl font-bold">Informações Legais</h2>
        </div>
        <p className="text-blue-100 text-lg">
          Conheça seus direitos e deveres na compra de imóveis
        </p>
      </div>

      <div className="p-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(legalInfo).map(([key, info]) => {
            const IconComponent = info.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  activeTab === key
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span className="text-sm font-medium">{info.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {legalInfo[activeTab].content.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                {section.subtitle}
              </h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h5 className="font-semibold text-yellow-800 mb-2">Aviso Legal</h5>
              <p className="text-yellow-700 text-sm">
                As informações aqui apresentadas são de caráter informativo e não substituem a consulta a um advogado especializado. 
                Para questões específicas sobre seu contrato, recomendamos buscar orientação jurídica profissional.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center">
              <UserCheck className="w-5 h-5 mr-2" />
              Precisa de Ajuda?
            </h4>
            <p className="text-gray-600 mb-4">
              Nossa equipe jurídica está disponível para esclarecer suas dúvidas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Falar com Advogado
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Agendar Consulta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


