import React, { useEffect } from "react";
import {
  X,
  ShieldCheck,
  FileText,
  Lock,
  ScrollText,
} from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-4 py-4 backdrop-blur-sm sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="terms-modal-title"
    >
      <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-2xl">
        {/* Background accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-48 w-48 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-100/50 blur-3xl" />
        </div>

        {/* HEADER */}
        <div className="relative border-b border-blue-100 bg-gradient-to-r from-sky-600 via-blue-600 to-cyan-500 px-5 py-5 text-white sm:px-7 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur">
                <ShieldCheck className="h-4 w-4" />
                Legal Information
              </div>

              <h2
                id="terms-modal-title"
                className="text-xl font-bold leading-tight sm:text-2xl"
              >
                Termos e Condições de Uso & Política de Privacidade
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-50/95 sm:text-base">
                Leia atentamente os termos de utilização da plataforma e a forma
                como os seus dados são tratados.
              </p>
            </div>

            <button
              onClick={onClose}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
              aria-label="Fechar modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative max-h-[calc(92vh-110px)] overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
          <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2 text-blue-700">
                  <ScrollText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Termos de Uso
                  </p>
                  <p className="text-xs text-gray-500">
                    Regras e condições da plataforma
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2 text-blue-700">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Privacidade
                  </p>
                  <p className="text-xs text-gray-500">
                    Como os seus dados são utilizados
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-[#fafafa] p-4">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2 text-blue-700">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Consentimento
                  </p>
                  <p className="text-xs text-gray-500">
                    Utilização e notificações
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-sm leading-7 text-gray-700 sm:text-[15px]">
            <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Termos e Condições de Uso
              </h3>

              <ol className="list-decimal space-y-4 pl-5 marker:font-semibold marker:text-blue-700">
                <li>
                  <strong>Aceitação dos Termos:</strong> Ao acessar e utilizar a
                  plataforma Trilho Acadêmico da SyncTechX Lda., você concorda de
                  forma plena e irrevogável com os Termos e Condições descritos
                  neste documento. Caso não concorde com qualquer cláusula ou
                  termo aqui estabelecido, você deve interromper imediatamente o
                  uso da plataforma. O uso contínuo implica na aceitação de
                  quaisquer alterações ou atualizações feitas nestes termos.
                </li>

                <li>
                  <strong>Objetivo da Plataforma:</strong> A plataforma Trilho
                  Acadêmico é uma ferramenta digital projetada para oferecer
                  suporte educacional aos estudantes moçambicanos. O principal
                  objetivo da plataforma é:
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
                    <li>
                      <strong>Orientação Vocacional:</strong> Ajudar os
                      estudantes a identificar suas áreas de interesse e
                      aptidões, oferecendo sugestões personalizadas de carreiras.
                    </li>
                    <li>
                      <strong>Escolha de Cursos:</strong> Ajudar na seleção de
                      cursos que correspondam ao perfil acadêmico e às demandas
                      do mercado de trabalho.
                    </li>
                    <li>
                      <strong>Acesso a Oportunidades:</strong> Fornecer
                      informações sobre bolsas de estudo, universidades e outras
                      oportunidades, tanto dentro de Moçambique quanto no
                      exterior.
                    </li>
                    <li>
                      <strong>Planejamento Acadêmico:</strong> Guiar os
                      estudantes no planejamento da sua trajetória educacional,
                      desde o ensino secundário até o ingresso no ensino
                      superior.
                    </li>
                  </ul>
                  <p className="mt-2">
                    A plataforma também oferece serviços adicionais, como o
                    apoio à mobilidade internacional, conectando jovens a
                    universidades e oportunidades de estudo fora de Moçambique.
                  </p>
                </li>

                <li>
                  <strong>Uso da Plataforma:</strong> A plataforma é destinada ao
                  uso exclusivo de:
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
                    <li>
                      <strong>Estudantes:</strong> Para orientação educacional e
                      acesso a oportunidades.
                    </li>
                    <li>
                      <strong>Educadores:</strong> Para promover a melhoria do
                      processo educacional e facilitar o acesso a informações
                      sobre o desenvolvimento acadêmico dos alunos.
                    </li>
                    <li>
                      <strong>Profissionais e Empresas Parceiras:</strong> Para
                      divulgar programas de bolsas de estudo, estágios,
                      parcerias educacionais, entre outros.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Você concorda em usar a plataforma de maneira ética e
                    responsável, respeitando todas as leis e regulamentos
                    aplicáveis, incluindo, mas não se limitando a, leis de
                    propriedade intelectual, direitos autorais e privacidade de
                    dados.
                  </p>
                </li>

                <li>
                  <strong>Responsabilidade pelo Conteúdo:</strong> A SyncTechX
                  Lda. não se responsabiliza por qualquer erro, omissão ou dano
                  relacionado ao conteúdo fornecido por universidades, empresas
                  parceiras ou usuários da plataforma. Embora todos os esforços
                  sejam feitos para garantir a precisão das informações, o
                  usuário é responsável por validar as informações antes de tomar
                  decisões com base nelas. A plataforma oferece as ferramentas
                  para que o usuário faça essas validações, mas não garante a
                  totalidade da veracidade de todas as informações fornecidas.
                </li>

                <li>
                  <strong>Alterações aos Termos:</strong> A SyncTechX Lda.
                  reserva-se o direito de modificar, alterar ou atualizar estes
                  Termos e Condições a qualquer momento, com ou sem aviso
                  prévio. Caso haja alteração significativa nos termos, ela será
                  comunicada na plataforma, e a versão atualizada estará
                  disponível para consulta a qualquer momento. Tais alterações
                  entrarão em vigor assim que forem publicadas. O uso contínuo da
                  plataforma após a alteração dos Termos e Condições implicará na
                  aceitação das modificações.
                </li>

                <li>
                  <strong>Responsabilidade do Usuário:</strong> O usuário é
                  responsável por manter suas informações de conta, incluindo
                  credenciais de login, em segurança. A SyncTechX Lda. não se
                  responsabiliza por qualquer uso indevido ou perda decorrente de
                  falhas de segurança relacionadas ao gerenciamento das suas
                  credenciais. Caso o usuário perceba qualquer atividade suspeita
                  em sua conta, deve informar imediatamente a SyncTechX Lda. para
                  que medidas corretivas sejam tomadas.
                </li>
              </ol>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Política de Privacidade
              </h3>

              <ol className="list-decimal space-y-4 pl-5 marker:font-semibold marker:text-blue-700">
                <li>
                  <strong>Coleta de Dados:</strong> A SyncTechX Lda. coleta
                  diferentes tipos de dados para fornecer uma experiência
                  personalizada e melhorar a funcionalidade da plataforma. Esses
                  dados são essenciais para que possamos entregar os serviços de
                  forma eficaz. As informações coletadas incluem:
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
                    <li>
                      <strong>Informações Pessoais:</strong> Nome completo,
                      e-mail, número de telefone, data de nascimento, e outras
                      informações de identificação.
                    </li>
                    <li>
                      <strong>Dados Acadêmicos:</strong> Histórico escolar,
                      notas, cursos de interesse, preferências educacionais, e
                      outras informações relacionadas ao perfil acadêmico.
                    </li>
                    <li>
                      <strong>Informações de Perfil Profissional:</strong> Dados
                      sobre as áreas de interesse profissional, estágios
                      anteriores, e outros dados relevantes para orientação
                      vocacional.
                    </li>
                    <li>
                      <strong>Dados de Navegação:</strong> Informações sobre como
                      você interage com a plataforma, como páginas visitadas,
                      tempo gasto em cada seção, e interações com as
                      funcionalidades.
                    </li>
                    <li>
                      <strong>Dados de Localização:</strong> A plataforma pode
                      coletar dados de localização (caso você autorize) para
                      oferecer recomendações personalizadas relacionadas a
                      cursos, universidades e oportunidades educacionais na sua
                      região ou fora dela.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Uso dos Dados:</strong> Os dados coletados são
                  utilizados para as seguintes finalidades:
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
                    <li>
                      <strong>Melhoria dos Serviços:</strong> Utilizamos as
                      informações para otimizar a experiência de navegação e
                      fornecer recomendações personalizadas.
                    </li>
                    <li>
                      <strong>Personalização das Recomendações:</strong> Os
                      dados são usados para sugerir cursos, universidades e
                      bolsas de estudo alinhados ao perfil do usuário, suas
                      aptidões e interesses.
                    </li>
                    <li>
                      <strong>Notificações Importantes:</strong> Enviamos
                      atualizações sobre novas oportunidades educacionais,
                      alterações nos cursos e novas parcerias com universidades
                      ou empresas.
                    </li>
                    <li>
                      <strong>Pesquisas e Feedback:</strong> Coletamos dados para
                      realizar pesquisas de satisfação e obter feedback sobre a
                      experiência do usuário com a plataforma.
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Segurança dos Dados:</strong> A SyncTechX Lda. adota as
                  melhores práticas de segurança para proteger seus dados
                  pessoais contra acessos não autorizados, alteração, divulgação
                  ou destruição. Implementamos medidas de segurança físicas,
                  administrativas e técnicas para garantir que seus dados
                  permaneçam seguros. No entanto, reconhecemos que nenhuma
                  transmissão de dados pela internet pode ser completamente
                  segura, e por isso não garantimos a segurança absoluta das
                  informações.
                </li>

                <li>
                  <strong>Compartilhamento de Dados:</strong> A SyncTechX Lda.
                  compromete-se a não compartilhar seus dados pessoais com
                  terceiros, exceto nas seguintes situações:
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
                    <li>
                      <strong>Cumprimento de Obrigações Legais:</strong> Quando
                      exigido por lei, ordem judicial ou outra autoridade
                      competente.
                    </li>
                    <li>
                      <strong>Parcerias com Instituições:</strong> Compartilhamos
                      informações com universidades e empresas parceiras somente
                      quando necessário para a execução de serviços diretamente
                      relacionados ao uso da plataforma, como o fornecimento de
                      bolsas de estudo ou programas de estágio.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Em nenhuma hipótese seus dados serão vendidos a terceiros.
                  </p>
                </li>

                <li>
                  <strong>Consentimento para Notificações:</strong> Ao utilizar
                  a plataforma, você consente explicitamente em receber
                  notificações e anúncios via WhatsApp relacionados a
                  oportunidades educacionais, como novas bolsas de estudo,
                  cursos, programas de intercâmbio, e outros serviços
                  relevantes. Caso não deseje continuar recebendo essas
                  notificações, você poderá desativá-las a qualquer momento nas
                  configurações de sua conta ou entrando em contato com nossa
                  equipe através do e-mail info@synctechx.com.
                </li>

                <li>
                  <strong>Direitos do Usuário:</strong> Você tem o direito de
                  acessar, corrigir ou excluir seus dados pessoais a qualquer
                  momento. Se desejar fazer isso, pode entrar em contato conosco
                  através do e-mail info@synctechx.com. Também oferecemos a
                  possibilidade de atualização de seus dados diretamente na
                  plataforma, na seção de configurações de perfil.
                </li>

                <li>
                  <strong>Cookies:</strong> A plataforma utiliza cookies para
                  melhorar a experiência de navegação e coletar dados
                  relacionados ao uso da plataforma. Cookies são pequenos
                  arquivos armazenados em seu dispositivo que nos permitem
                  lembrar suas preferências e melhorar a personalização da
                  plataforma. Você pode desativar os cookies através das
                  configurações do seu navegador, mas é importante notar que isso
                  pode afetar a funcionalidade da plataforma, tornando algumas
                  funcionalidades limitadas ou indisponíveis.
                </li>

                <li>
                  <strong>
                    Consentimento para Envio de Notificações e Anúncios via
                    WhatsApp:
                  </strong>{" "}
                  Ao aceitar os Termos e Condições de Uso e a Política de
                  Privacidade, você também consente em receber notificações e
                  anúncios relevantes via WhatsApp. Essas notificações podem
                  incluir, mas não se limitam a:
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-gray-600">
                    <li>Oportunidades de bolsas de estudo.</li>
                    <li>Programas de estágio e emprego.</li>
                    <li>Notícias sobre cursos e universidades.</li>
                    <li>
                      Atualizações sobre o processo educacional e novas
                      funcionalidades da plataforma.
                    </li>
                  </ul>
                  <p className="mt-2">
                    Você pode optar por desativar o recebimento dessas
                    notificações a qualquer momento, acessando as configurações
                    de sua conta ou enviando um e-mail para info@synctechx.com.
                  </p>
                </li>
              </ol>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;