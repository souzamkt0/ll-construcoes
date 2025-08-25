import React from 'react';
import { Star, Shield, Clock, MapPin, Home, Users, Car, Tree, Wifi, Camera, Lock, Award } from 'lucide-react';

export default function PropertyBenefits() {
  const benefits = [
    {
      icon: Home,
      title: 'Localização Privilegiada',
      description: 'Zona Sul da cidade, próximo a escolas, comércio e transporte público',
      color: 'emerald'
    },
    {
      icon: Shield,
      title: 'Garantia de Qualidade',
      description: '5 anos de garantia na construção e acabamentos de primeira linha',
      color: 'blue'
    },
    {
      icon: Clock,
      title: 'Entrega Garantida',
      description: 'Prazo de 24 meses com multa por atraso conforme CDC',
      color: 'orange'
    },
    {
      icon: Award,
      title: 'Financiamento Facilitado',
      description: 'Minha Casa Minha Vida com juros reduzidos e entrada facilitada',
      color: 'purple'
    },
    {
      icon: Tree,
      title: 'Área Verde',
      description: 'Quintal espaçoso e área de lazer com playground',
      color: 'green'
    },
    {
      icon: Car,
      title: 'Vaga Coberta',
      description: 'Garagem coberta para 1 veículo com possibilidade de expansão',
      color: 'gray'
    },
    {
      icon: Wifi,
      title: 'Infraestrutura Completa',
      description: 'Rede de internet, TV a cabo e telefone já instalados',
      color: 'indigo'
    },
    {
      icon: Camera,
      title: 'Segurança 24h',
      description: 'Sistema de monitoramento e portaria com controle de acesso',
      color: 'red'
    }
  ];

  const differentials = [
    {
      title: 'Acabamentos Premium',
      items: ['Porcelanato no piso', 'Pintura lavável', 'Armários planejados', 'Pias de inox']
    },
    {
      title: 'Eficiência Energética',
      items: ['Painéis solares', 'Lâmpadas LED', 'Isolamento térmico', 'Ventilação natural']
    },
    {
      title: 'Sustentabilidade',
      items: ['Coleta seletiva', 'Área de compostagem', 'Jardim vertical', 'Cisterna para reuso']
    },
    {
      title: 'Conveniências',
      items: ['Delivery de alimentos', 'Lavanderia', 'Farmácia', 'Padaria']
    }
  ];

  const colorClasses = {
    emerald: 'bg-emerald-100 text-emerald-600',
    blue: 'bg-blue-100 text-blue-600',
    orange: 'bg-orange-100 text-orange-600',
    purple: 'bg-purple-100 text-purple-600',
    green: 'bg-green-100 text-green-600',
    gray: 'bg-gray-100 text-gray-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    red: 'bg-red-100 text-red-600'
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
        <div className="flex items-center space-x-3 mb-4">
          <Star className="w-8 h-8" />
          <h2 className="text-3xl font-bold">Benefícios e Diferenciais</h2>
        </div>
        <p className="text-purple-100 text-lg">
          Descubra por que nosso empreendimento é a escolha certa para sua família
        </p>
      </div>

      <div className="p-8">
        {/* Benefícios Principais */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2 text-purple-600" />
            Principais Benefícios
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                  <div className={`w-12 h-12 rounded-lg ${colorClasses[benefit.color]} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Star className="w-6 h-6 mr-2 text-purple-600" />
            Diferenciais Exclusivos
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((differential, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Lock className="w-5 h-5 mr-2 text-purple-600" />
                  {differential.title}
                </h4>
                <ul className="space-y-2">
                  {differential.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2 text-purple-600" />
            Números que Impressionam
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-emerald-600 mb-2">98%</div>
              <div className="text-gray-700 font-medium">Satisfação dos Clientes</div>
            </div>
            <div className="text-center bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
              <div className="text-gray-700 font-medium">Meses para Entrega</div>
            </div>
            <div className="text-center bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">5</div>
              <div className="text-gray-700 font-medium">Anos de Garantia</div>
            </div>
            <div className="text-center bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Documentação em Dia</div>
            </div>
          </div>
        </div>

        {/* CTA Especial */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Quer Conhecer Pessoalmente?</h3>
          <p className="text-purple-100 mb-6">
            Agende uma visita ao nosso stand de vendas e conheça todos os benefícios de perto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-colors">
              Agendar Visita
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold transition-colors">
              Falar com Corretor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


