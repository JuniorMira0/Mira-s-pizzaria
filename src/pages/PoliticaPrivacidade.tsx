// src/pages/PoliticaPrivacidade.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PoliticaPrivacidade: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidade - Miras Pizzaria</title>
        <meta
          name="description"
          content="Conheça a política de privacidade simplificada da Miras Pizzaria."
        />
      </Helmet>

      <div className="container mx-auto px-6 pb-12 pt-20 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold mt-6 mb-3">1. Introdução</h2>
          <p>
            Esta é a Política de Privacidade da Miras Pizzaria LTDA ("nós",
            "nosso"), referente ao uso do nosso site institucional
            [https://miraspizzaria.com.br/]. Nosso site tem como principal
            objetivo apresentar nossa empresa, nossos produtos e fornecer meios
            de contato e acesso aos nossos canais de venda (como WhatsApp,
            Instagram e plataformas de delivery).
          </p>
          <p>
            Levamos sua privacidade a sério. Esta política descreve de forma
            simplificada como lidamos com informações enquanto você navega em
            nosso site, em conformidade com a Lei Geral de Proteção de Dados
            Pessoais (LGPD).
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            2. Coleta e Uso de Informações
          </h2>
          <p>
            Este site é primariamente informativo e **não coleta ativamente
            dados pessoais identificáveis** como nome, e-mail, telefone ou
            endereço através de formulários ou cadastros diretamente aqui.
          </p>
          <p>
            No entanto, algumas informações podem ser coletadas automaticamente
            para o funcionamento técnico e análise de uso do site:
          </p>
          <ul>
            <li>
              <strong>Dados Técnicos e de Uso:</strong> Podemos coletar
              informações que o seu navegador envia sempre que visita nosso
              site, como o endereço IP do seu computador, tipo e versão do
              navegador, páginas visitadas, hora e data da visita, tempo gasto
              nessas páginas e outros dados de diagnóstico. Utilizamos essas
              informações (muitas vezes de forma agregada ou anonimizada) para
              manter o site funcionando, garantir sua segurança e analisar como
              ele é usado para podermos melhorá-lo. Essas informações podem ser
              coletadas através de registros do servidor ou ferramentas de
              análise (como Google Analytics, se utilizado). Ao utilizar nosso
              site, você concorda com a coleta e uso dessas informações
              conforme descrito.
            </li>
            <li>
              <strong>Cookies:</strong> Podemos usar cookies essenciais para o
              funcionamento do site e, opcionalmente, cookies analíticos para
              entender melhor o tráfego. Cookies são pequenos arquivos
              armazenados no seu dispositivo. Você geralmente pode instruir seu
              navegador a recusar todos os cookies ou a indicar quando um cookie
              está sendo enviado.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            3. Links Externos e Contato
          </h2>
          <p>
            Nosso site contém links para outros sites e plataformas que não são
            operados por nós (como WhatsApp, Instagram, plataformas de
            delivery). Se você clicar nesses links, será direcionado para o site
            de terceiros.
          </p>
          <p>
            É importante ressaltar que **não temos controle sobre o conteúdo e
            as práticas de privacidade desses sites de terceiros**. Qualquer
            informação que você forneça a eles (como seu nome, telefone ou
            pedido ao iniciar uma conversa no WhatsApp ou ao usar uma plataforma
            de delivery) será regida pela política de privacidade **deles**.
            Recomendamos fortemente que você revise a Política de Privacidade de
            cada site que visitar.
          </p>
          <p>
            Da mesma forma, se você nos contatar através dos canais fornecidos
            (como WhatsApp ou telefone), coletaremos as informações necessárias
            para atender sua solicitação ou processar seu pedido (nome,
            telefone, endereço para entrega, detalhes do pedido), mas essa
            coleta ocorrerá diretamente nesses canais de comunicação, e não
            através de armazenamento no website.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            4. Compartilhamento de Informações
          </h2>
          <p>
            Não vendemos nem alugamos informações de identificação pessoal. Os
            dados técnicos e de uso coletados automaticamente podem ser
            processados por provedores de serviços essenciais para nós (como
            provedor de hospedagem do site ou ferramentas de análise – ex:
            Google), sempre sob obrigações de confidencialidade e apenas para os
            fins descritos nesta política. Não compartilhamos outras
            informações, exceto se exigido por lei.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            5. Segurança e Seus Direitos (LGPD)
          </h2>
          <p>
            Empregamos medidas de segurança razoáveis para proteger as
            informações contra acesso não autorizado ou alteração. No entanto,
            nenhum método de transmissão pela Internet ou armazenamento
            eletrônico é 100% seguro.
          </p>
          <p>
            Mesmo com a coleta limitada de dados por este site, a LGPD garante a
            você direitos sobre seus dados pessoais (acesso, correção, etc.). Se
            tiver alguma dúvida sobre como lidamos com a privacidade ou quiser
            exercer seus direitos, entre em contato conosco (veja seção 7).
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            6. Alterações a Esta Política
          </h2>
          <p>
            Podemos atualizar nossa Política de Privacidade periodicamente.
            Notificaremos sobre quaisquer alterações publicando a nova Política
            de Privacidade nesta página e atualizando a data da "Última
            atualização".
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">7. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade,
            entre em contato:
          </p>
          <p>
            Miras Pizzaria LTDA
            <br />
            CNPJ: 13.650.975/0001-07
            <br />
            Endereço: Rua João Alencar Guimarães, 791 - Santa Quitéria, Curitiba
            - PR
            <br />
            Telefone/WhatsApp: 4130144656
          </p>
        </div>
      </div>
    </>
  );
};

export default PoliticaPrivacidade;
