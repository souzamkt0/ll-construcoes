# Construtora - Simulador de Vendas Imobiliárias

Um sistema completo e profissional para simulação de vendas de imóveis com calculadora de financiamento, benefícios e informações legais detalhadas.

## 🏠 Funcionalidades Principais

### 1. Simulador de Financiamento
- **Cálculo Automático**: Parcelas baseadas em entrada e prazo
- **Múltiplas Opções**: Casa 2 quartos (R$ 260.000) e 3 quartos (R$ 280.000)
- **Configuração Flexível**: Entrada de 10% a 50%, prazos de 15 a 30 anos
- **Tabela de Custos**: Detalhamento completo de taxas e impostos
- **Resumo Financeiro**: Valor total, juros e parcelas mensais
- **Informações do Empreendimento**: Prazo de entrega, localização, status

### 2. Benefícios e Diferenciais
- **8 Benefícios Principais**: Localização, garantia, entrega, financiamento, etc.
- **4 Diferenciais Exclusivos**: Acabamentos, eficiência energética, sustentabilidade
- **Estatísticas**: Números de satisfação, prazo de entrega, garantias
- **CTA Especial**: Agendamento de visitas e contato com corretores

### 3. Informações Legais
- **Código de Defesa do Consumidor**: Direitos básicos e arrependimento
- **Contrato de Compra e Venda**: Elementos essenciais e cláusulas obrigatórias
- **Desistência e Desfazimento**: Prazos e procedimentos
- **Garantias e Responsabilidades**: Responsabilidades da construtora
- **Aviso Legal**: Disclaimer profissional
- **Contato Jurídico**: Botões para falar com advogado

## 📊 Especificações Técnicas

### Imóveis Disponíveis
- **Casa 2 Quartos**: R$ 260.000 (20x80m²)
- **Casa 3 Quartos**: R$ 280.000 (20x80m²)
- **Prazo de Entrega**: 24 meses
- **Localização**: Zona Sul da cidade

### Custos Adicionais Calculados
- **ITBI**: 2% do valor do imóvel
- **Registro**: R$ 1.500
- **Escritura**: R$ 1.200
- **Habite-se**: R$ 500
- **AVCB**: R$ 300
- **Cartório**: R$ 800

### Financiamento
- **Programa**: Minha Casa Minha Vida
- **Entrada**: 10% a 50% configurável
- **Prazo**: 15, 20, 25 ou 30 anos
- **Taxa de Juros**: 0.8% ao mês (exemplo)

## 🛠️ Tecnologias Utilizadas

- **React 18**: Framework principal
- **Tailwind CSS**: Estilização e design responsivo
- **Lucide React**: Ícones modernos
- **Vite**: Build tool e servidor de desenvolvimento
- **JavaScript ES6+**: Funcionalidades avançadas

## 🚀 Instalação e Execução

1. **Clone o repositório** ou baixe os arquivos
2. **Instale as dependências**:
```bash
npm install
```

3. **Execute o projeto**:
```bash
npm run dev
```

4. **Acesse a aplicação** em `http://localhost:3000`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── PropertySimulator.jsx    # Simulador de financiamento
│   ├── PropertyBenefits.jsx     # Benefícios e diferenciais
│   └── LegalInformation.jsx     # Informações legais
├── App.jsx                      # Componente principal
├── main.jsx                     # Ponto de entrada
└── index.css                    # Estilos globais
```

## 🎨 Design e UX

- **Interface Moderna**: Design clean e profissional
- **Cores Profissionais**: Tons de verde (emerald) e azul
- **Gradientes**: Efeitos visuais atrativos
- **Animações**: Transições suaves e hover effects
- **Responsividade**: Adaptável para mobile, tablet e desktop
- **Acessibilidade**: Contraste adequado e navegação intuitiva

## 📋 Informações Legais Incluídas

### Direitos do Consumidor (CDC)
- Direito à informação clara e adequada
- Direito ao arrependimento em 7 dias
- Direito à qualidade do produto
- Direito à segurança
- Direito à proteção contratual

### Desistência e Desfazimento
- Prazo de 7 dias para desistência
- Devolução integral do valor pago
- Sem multas ou penalidades
- Direito à correção monetária
- Proteção contra cláusulas abusivas

## 🔧 Personalização

### Modificar Imóveis
Edite o objeto `properties` no arquivo `PropertySimulator.jsx`:
```javascript
const properties = {
  'novoImovel': {
    name: 'Nome do Imóvel',
    price: 300000,
    size: '25x100m²',
    // ... outras propriedades
  }
};
```

### Ajustar Taxas
Modifique o objeto `additionalCosts`:
```javascript
const additionalCosts = {
  itbi: currentProperty.price * 0.02, // 2% ITBI
  registro: 1500,
  // ... outras taxas
};
```

### Personalizar Benefícios
Edite os arrays `benefits` e `differentials` no arquivo `PropertyBenefits.jsx`.

## 📱 Responsividade

O sistema é totalmente responsivo e funciona perfeitamente em:
- **Desktop**: Layout completo com todas as funcionalidades
- **Tablet**: Adaptação automática para telas médias
- **Mobile**: Interface otimizada para smartphones

## 🚀 Build para Produção

Para criar uma versão otimizada para produção:
```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 📞 Suporte

Para dúvidas ou sugestões sobre o sistema, entre em contato através dos botões disponíveis na aplicação ou abra uma issue no repositório.

---

**Desenvolvido com ❤️ para facilitar a simulação de vendas de imóveis de forma transparente e profissional.**
