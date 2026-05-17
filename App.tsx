import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Shield, Smartphone, Server, Eye, Lock, Globe } from 'lucide-react';

// --- Constants ---
const APP_NAME = "Digital Organizer";
const DEVELOPER_NAME = "Digital Organizer";
const CONTACT_EMAIL = "suportedigitalorganizer@gmail.com";
const EFFECTIVE_DATE = "2026-05-17";

// --- Types ---
interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

// --- Components ---

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </button>
  );
};

const Section: React.FC<SectionProps> = ({ id, title, children, icon }) => (
  <section id={id} className="mb-12 scroll-mt-24 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100">
    <div className="flex items-center gap-3 mb-4">
      {icon && <div className="text-blue-600">{icon}</div>}
      <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    </div>
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50" id="top">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <Shield className="text-blue-600" />
              {APP_NAME}
            </h1>
            <p className="text-sm text-slate-500 font-medium">Política de Privacidade</p>
          </div>
          <div className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit">
            Última atualização: {EFFECTIVE_DATE}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        
        {/* Intro Card */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 md:p-10 text-white shadow-xl mb-12">
          <h2 className="text-3xl font-bold mb-4">Sua privacidade é nossa prioridade</h2>
          <p className="text-blue-100 text-lg leading-relaxed max-w-2xl">
            Acreditamos na transparência e no respeito aos seus dados. Este documento explica de forma clara e simples como tratamos suas informações em todas as ferramentas e serviços da <strong>{APP_NAME}</strong>.
          </p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-12 bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-2">Índice</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            <li><a href="#intro" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">1. Introdução</a></li>
            <li><a href="#about" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">2. Quem somos</a></li>
            <li><a href="#data-collection" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">3. Quais dados coletamos</a></li>
            <li><a href="#data-usage" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">4. Como usamos seus dados</a></li>
            <li><a href="#ads" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">5. Anúncios e personalização</a></li>
            <li><a href="#permissions" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">6. Permissões do aplicativo</a></li>
            <li><a href="#storage" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">7. Armazenamento local e backups</a></li>
            <li><a href="#sharing" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">8. Compartilhamento de dados</a></li>
            <li><a href="#rights" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">9. Seus direitos (LGPD)</a></li>
            <li><a href="#security" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">10. Segurança</a></li>
            <li><a href="#retention" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">11. Retenção e exclusão</a></li>
            <li><a href="#children" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">12. Crianças e adolescentes</a></li>
            <li><a href="#changes" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">13. Alterações nesta política</a></li>
            <li><a href="#contact" className="text-blue-600 hover:text-blue-800 hover:underline text-sm md:text-base transition-colors">14. Contato</a></li>
          </ul>
        </nav>

        {/* Content Sections */}
        <Section id="intro" title="1. Introdução">
          <p>
            Esta Política de Privacidade descreve as práticas da <strong>{APP_NAME}</strong> sobre a coleta, uso e divulgação de suas informações ao usar nossos Serviços e ferramentas digitais, informando sobre seus direitos de privacidade e proteção legal.
          </p>
          <p>
            Ao usar nossos Serviços, você concorda com a coleta e uso de informações de acordo com esta Política de Privacidade.
          </p>
        </Section>

        <Section id="about" title="2. Quem somos">
          <p>
            A <strong>{APP_NAME}</strong> é uma organização dedicada ao desenvolvimento de ferramentas tecnológicas voltadas para a produtividade e organização pessoal no Brasil. Nosso compromisso é fornecer soluções eficientes que respeitem integralmente a privacidade e a segurança dos dados dos nossos usuários.
          </p>
        </Section>

        <Section id="data-collection" title="3. Quais dados coletamos" icon={<Eye size={24} />}>
          <p>Para melhorar sua experiência e garantir o funcionamento de nossas ferramentas, podemos coletar os seguintes tipos de informações:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <strong>Informações do Dispositivo:</strong> Modelo do dispositivo, versão do sistema operacional, identificadores únicos e informações de rede.
            </li>
            <li>
              <strong>Identificadores de Publicidade:</strong> Caso opte por anúncios personalizados, podemos utilizar identificadores como o GAID (Google Advertising ID).
            </li>
            <li>
              <strong>Dados de Uso e Diagnóstico:</strong> Informações anônimas sobre interação, logs de erros e desempenho para melhoria contínua.
            </li>
            <li>
              <strong>Dados Inseridos pelo Usuário:</strong> Conteúdos como tarefas, notas e eventos que você insere voluntariamente são, em regra, processados localmente.
            </li>
          </ul>
        </Section>

        <Section id="data-usage" title="4. Como usamos seus dados">
          <p>Utilizamos os dados coletados para:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Manutenção e monitoramento da estabilidade dos Nossos Serviços.</li>
            <li>Suporte técnico e atendimento ao usuário.</li>
            <li>Desenvolvimento de novas funcionalidades e correção de bugs.</li>
            <li>Comunicações sobre atualizações, ofertas e novidades (opcional).</li>
            <li>Exibição de anúncios para viabilizar a oferta de ferramentas gratuitas.</li>
          </ul>
        </Section>

        <Section id="ads" title="5. Anúncios e personalização" icon={<Globe size={24} />}>
          <p>
            Para manter nossas ferramentas acessíveis e gratuitas, utilizamos serviços de publicidade de terceiros (como Google AdMob).
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 my-4">
            <h4 className="font-semibold text-slate-800 mb-2">Suas escolhas:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Anúncios Personalizados:</strong> Com seu consentimento, parceiros podem exibir anúncios baseados em seus interesses.
              </li>
              <li>
                <strong>Anúncios Não Personalizados:</strong> Caso não consinta, os anúncios ainda serão exibidos, porém sem utilizar seu perfil para personalização.
              </li>
            </ul>
          </div>
          <p>
            Suas preferências podem ser alteradas a qualquer momento nas configurações de privacidade dentro de cada aplicativo.
          </p>
        </Section>

        <Section id="permissions" title="6. Permissões do aplicativo" icon={<Smartphone size={24} />}>
          <p>Nossas ferramentas podem solicitar permissões específicas para operação adequada:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Notificações:</strong> Para lembretes e avisos importantes.</li>
            <li><strong>Internet:</strong> Para carregamento de anúncios, sincronização opcional e relatórios de erro.</li>
            <li><strong>Armazenamento:</strong> Para funções de exportação ou backups locais quando necessário.</li>
          </ul>
        </Section>

        <Section id="storage" title="7. Armazenamento local e backups" icon={<Server size={24} />}>
          <p>
            Priorizamos a abordagem "offline-first". Em muitas de nossas ferramentas, seus dados pessoais e de organização são armazenados diretamente no banco de dados interno do seu dispositivo.
          </p>
          <p className="mt-2">
            Não acessamos o conteúdo privado de suas anotações ou tarefas em nossos servidores, a menos que uma função específica de sincronização em nuvem seja ativada voluntariamente por você.
          </p>
        </Section>

        <Section id="sharing" title="8. Compartilhamento de dados">
          <p>
            Nós <strong>não vendemos</strong> suas informações pessoais. Podemos compartilhar suas informações nas seguintes situações:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Com Prestadores de Serviço:</strong> Podemos compartilhar informações anônimas com terceiros para monitorar e analisar o uso do nosso Serviço (ex: Google Analytics, Firebase Crashlytics) ou para exibir anúncios.</li>
            <li><strong>Por exigência legal:</strong> Podemos divulgar suas informações se formos obrigados a fazê-lo por lei ou em resposta a solicitações válidas de autoridades públicas.</li>
          </ul>
        </Section>

        <Section id="rights" title="9. Seus direitos (LGPD)" icon={<Shield size={24} />}>
          <p>
            Se você reside no Brasil, a Lei Geral de Proteção de Dados (LGPD) garante a você certos direitos sobre seus dados pessoais, incluindo:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>O direito de confirmar a existência de tratamento de dados.</li>
            <li>O direito de acessar seus dados.</li>
            <li>O direito de corrigir dados incompletos, inexatos ou desatualizados.</li>
            <li>O direito de anonimização, bloqueio ou eliminação de dados desnecessários.</li>
            <li>O direito de revogar o consentimento a qualquer momento (especialmente para publicidade personalizada).</li>
          </ul>
          <p className="mt-4">
            Como a maioria dos seus dados é armazenada localmente, você tem controle total sobre eles diretamente no seu dispositivo.
          </p>
        </Section>

        <Section id="security" title="10. Segurança" icon={<Lock size={24} />}>
          <p>
            A segurança dos seus dados é importante para nós. Adotamos práticas de segurança adequadas para proteger contra acesso não autorizado, alteração, divulgação ou destruição de seus dados. No entanto, lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus dados, não podemos garantir sua segurança absoluta.
          </p>
        </Section>

        <Section id="retention" title="11. Retenção e exclusão">
          <p>
            Reteremos seus dados pessoais apenas pelo tempo necessário para os fins definidos nesta Política de Privacidade.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong>Dados Locais:</strong> Permanecem no seu dispositivo até que você os exclua manualmente ou desinstale o aplicativo correspondente.</li>
            <li><strong>Logs e Análises:</strong> Dados de uso e falhas são retidos por um período limitado conforme as políticas dos nossos parceiros de análise para fins de diagnóstico.</li>
          </ul>
        </Section>

        <Section id="children" title="12. Crianças e adolescentes">
          <p>
            Nosso Serviço não se dirige a menores de 13 anos. Não coletamos intencionalmente informações de identificação pessoal de menores de 13 anos. Se você é pai ou responsável e sabe que seu filho nos forneceu Dados Pessoais, entre em contato conosco. Se tomarmos conhecimento de que coletamos Dados Pessoais de menores de 13 anos sem verificação do consentimento dos pais, tomamos medidas para remover essas informações.
          </p>
        </Section>

        <Section id="changes" title="13. Alterações nesta política">
          <p>
            Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página e atualizando a data de "Última atualização" no topo desta política.
          </p>
          <p className="mt-2">
            Recomendamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As alterações a esta Política de Privacidade entram em vigor quando são publicadas nesta página.
          </p>
        </Section>

        <Section id="contact" title="14. Contato" icon={<Mail size={24} />}>
          <p>
            Se você tiver alguma dúvida sobre esta Política de Privacidade, ou quiser exercer seus direitos relacionados aos seus dados, entre em contato conosco:
          </p>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-3">
            <Mail className="text-blue-600 shrink-0 mt-1" size={20} />
            <div>
              <p className="font-semibold text-blue-900">E-mail</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-700 hover:text-blue-900 hover:underline break-all">
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
             <Shield className="text-blue-500" size={24} />
             <span className="text-white font-bold text-lg">{APP_NAME}</span>
          </div>
          <p className="mb-6 max-w-lg mx-auto text-sm">
            Tecnologia para uma vida mais organizada e segura. 
          </p>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} {DEVELOPER_NAME}. Todos os direitos reservados.</p>
            <p>Brasil</p>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
};

export default App;