// src/pages/TermosServico.tsx
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermosServico: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Termos de Serviço - Miras Pizzaria</title>
        <meta
          name="description"
          content="Leia os Termos de Serviço que regem o uso do site da Miras Pizzaria."
        />
      </Helmet>

      <div className="container mx-auto px-6 pb-12 pt-20 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Termos de Serviço
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <h2 className="text-2xl font-semibold mt-6 mb-3">
            1. Introdução e Aceitação
          </h2>
          <p>
            Bem-vindo ao site institucional da Miras Pizzaria LTDA ("nós",
            "nosso"), disponível em [https://miraspizzaria.com.br/] ("Site").
            Estes Termos de Serviço ("Termos") regem o seu acesso e uso do nosso
            Site, que tem como principal objetivo apresentar nossa empresa,
            nossos produtos e fornecer meios de contato e acesso aos nossos
            canais de atendimento e venda (como WhatsApp, Instagram e
            plataformas de delivery parceiras).
          </p>
          <p>
            Ao acessar ou usar o Site, você concorda em ficar vinculado por
            estes Termos. Se você não concordar com qualquer parte dos termos,
            então você não deve acessar o Site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">2. Uso do Site</h2>
          <p>
            Você concorda em usar o Site apenas para fins informativos, legais e
            de acordo com estes Termos. O conteúdo apresentado (cardápio,
            informações) é para sua referência. Ações como realizar pedidos,
            pagamentos ou interações de compra ocorrem através de canais
            externos (WhatsApp, telefone, plataformas de delivery), regidos
            pelos termos e condições dessas respectivas plataformas ou canais.
          </p>
          <p>Você concorda em não usar o Site de forma a:</p>
          <ul>
            <li>Violar qualquer lei ou regulamento aplicável.</li>
            <li>
              Tentar obter acesso não autorizado, interferir, danificar ou
              interromper quaisquer partes do Site.
            </li>
            <li>
              Usar qualquer robô, spider ou outro dispositivo, processo ou meio
              automático para acessar o Site para qualquer finalidade, incluindo
              monitoramento ou cópia de qualquer material no Site.
            </li>
            <li>
              Introduzir quaisquer vírus, cavalos de Troia, worms, bombas
              lógicas ou outro material malicioso ou tecnologicamente
              prejudicial.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            3. Cardápio e Informações
          </h2>
          <p>
            As informações sobre nossos produtos e cardápio apresentadas no Site
            são para fins informativos. Fazemos esforços para manter as
            informações atualizadas, incluindo preços, mas estes estão sujeitos
            a alterações sem aviso prévio e podem diferir dos praticados nos
            canais de venda finais.
          </p>
          <p>
            As imagens dos produtos no site são meramente ilustrativas e podem
            diferir do produto real. A disponibilidade dos itens exibidos no
            cardápio deve ser confirmada através dos nossos canais de
            atendimento ou plataformas de delivery parceiras no momento do
            pedido.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            4. Pedidos e Entrega (Delivery)
          </h2>
          <p>
            Pedidos de delivery devem ser realizados através dos nossos canais
            designados (ex: WhatsApp, telefone, plataformas parceiras), e não
            diretamente por este Site. Os termos específicos do pedido
            (pagamento, confirmação) serão tratados nesses canais.
          </p>
          <p>
            Nossa área de entrega informada no Site, Santa Quitéria e bairros
            adjacentes em Curitiba é indicativa. A possibilidade e as condições
            de entrega (tempo estimado, taxa) serão confirmadas durante o
            processo de pedido nos canais apropriados. É responsabilidade do
            cliente fornecer informações corretas e garantir o recebimento no
            local.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            5. Propriedade Intelectual
          </h2>
          <p>
            O Site e seu conteúdo original, características e funcionalidades
            são e permanecerão propriedade exclusiva da Miras Pizzaria LTDA e
            seus licenciadores. O conteúdo é protegido por direitos autorais,
            marcas registradas e outras leis. Nossas marcas e imagem comercial
            não podem ser usadas sem nosso consentimento prévio por escrito.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            6. Links Para Outros Sites
          </h2>
          <p>
            Nosso Site contém links para sites ou serviços de terceiros (ex:
            Instagram, WhatsApp, plataformas de delivery) que não são de nossa
            propriedade ou controlados por nós. Não temos controle e não
            assumimos responsabilidade pelo conteúdo, políticas de privacidade
            ou práticas desses terceiros. Ao clicar nesses links, você estará
            sujeito aos termos e políticas deles.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            7. Limitação de Responsabilidade e Isenção de Garantias
          </h2>
          <p>
            O Site é fornecido "COMO ESTÁ" e "CONFORME DISPONÍVEL". O uso do
            Site é por sua conta e risco. Na extensão máxima permitida pela lei
            aplicável, nos isentamos de todas as garantias, expressas ou
            implícitas. Não garantimos que o Site funcionará ininterruptamente,
            seguro ou disponível em qualquer momento ou local específico; que
            quaisquer erros ou defeitos serão corrigidos; ou que o Site está
            livre de vírus ou outros componentes prejudiciais.
          </p>
          <p>
            Em nenhuma circunstância a Miras Pizzaria LTDA será responsável por
            quaisquer danos indiretos, incidentais, especiais, consequenciais ou
            punitivos resultantes do seu acesso ou uso ou incapacidade de
            acessar ou usar o Site.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            8. Legislação Aplicável
          </h2>
          <p>
            Estes Termos serão regidos pelas leis da República Federativa do
            Brasil. O foro eleito para dirimir quaisquer controvérsias é o da
            Comarca de Curitiba, Estado do Paraná.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">
            9. Alterações aos Termos
          </h2>
          <p>
            Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou
            substituir estes Termos a qualquer momento e por qualquer motivo,
            sem aviso prévio. É sua responsabilidade verificar estes Termos
            periodicamente para verificar alterações. O uso continuado do Site
            após a publicação de quaisquer alterações a estes Termos constitui
            aceitação dessas alterações.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-3">10. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos, entre em contato
            conosco:
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

export default TermosServico;
