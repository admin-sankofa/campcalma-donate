import React, { useState, useEffect, useMemo } from 'react';
import { ChevronsUpDown, Check, Award, Gift, Mail, ArrowRight, X } from 'lucide-react';
import sankofaLogo from './assets/pictures/SankofaLogo.jpeg';
import mini4Image   from './assets/pictures/mini4flymore.jpg';
import mini3Image   from './assets/pictures/mini3flymore.jpg';
import macbookM3    from './assets/pictures/macbookm3.avif';
import macbookM2    from './assets/pictures/macbookm2.jpg';
import backgroundimage    from './assets/pictures/background.jpeg';
import community01   from './assets/pictures/community01.jpeg';
import communitykitchen01    from './assets/pictures/communitykitchen01.jpeg';
import communitykitchen02    from './assets/pictures/communitykitchen02.jpeg';


// --- TRANSLATIONS OBJECT ---
// All text content is stored here for easy EN/PT toggling
const translations = {
  en: {
    nav: {
      description: 'The Project',
      donate: 'Donate & Win',
      prizes: 'Prizes',
      faq: 'FAQ',
    },
    hero: {
      support_fairs_heading: 'Support our fair participation!',
      support_fairs_text: 'Help the NGO Sankofa Living & Learning and our project Camp Calma to be present at the fairs Reiselust, Fisch & Feines and Caravan Bremen. With your donation, we finance stand rent, travel, and materials to make sustainable living visible!',
      donate_button: 'Donate',
      every_donation_text: 'Every donation brings us one step closer to our goal. Thank you for your support!',      
      subheading: 'Support a Dream, Win Amazing Prizes',
      heading: 'Help Build Camp Calma in Portugal',
      cta: 'Donate Now & Get Raffle Tickets',
    },
    description: {
      heading: 'About Camp Calma',
      p1: 'Camp Calma is a project by Sankofa Living & Learning, an NGO dedicated to creating regenerative living and learning spaces. Located in the heart of Portugal, Camp Calma aims to be an off-grid educational homestead and a sanctuary for community, nature, and personal growth.',
      p2: 'Your contribution directly funds the construction of essential infrastructure, educational programs, and sustainable resources. By participating in our raffle, you\'re not just getting a chance to win incredible prizes—you\'re helping build a foundation for a better future. 🙏🏽',
    },
    donate: {
      heading: 'Choose Your Support Level',
      subheading: 'Every contribution makes a difference. More support means more chances to win!',
      tier1: {
        price: '€10',
        tickets: '20 Tickets',
        description: 'A great way to show your support.',
      },
      tier2: {
        price: '€20',
        tickets: '80 Tickets',
        description: 'Our most popular choice! 4x the tickets.',
        popular: 'POPULAR',
      },
      tier3: {
        price: '€30',
        tickets: '160 Tickets',
        description: 'Best value for the biggest impact.',
      },
      button: 'Donate & Participate',
    },
    milestones: {
      heading: 'Fundraising Milestones & Prizes',
      subheading: 'As we reach our goals, we unlock more amazing prizes for the raffle!',
      current_funding: 'Current Funding',
      goal: 'Goal',
      prize1: 'DJI Mini 3 Pro Fly More Combo',
      prize2: 'DJI Mini 4 Pro',
      prize3: 'MacBook Air MM2',
      prize4: 'MacBook Air M3 (Grand Prize)',
      unlocked: 'UNLOCKED!',
    },
    countdown: {
      heading: 'Raffle Ends In',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
    prizes: {
      heading: 'A Closer Look at the Prizes',
      subheading: 'High-tech gadgets could be yours. All prizes are brand new.',
      grand_prize: 'Grand Prize',
    },
    faq: {
      heading: 'Frequently Asked Questions',
      q1: 'How does the raffle work?',
      a1: 'For every donation, you receive a number of raffle tickets based on the tier you choose. Once the campaign ends, a winner will be drawn randomly from all the tickets issued. The prizes are unlocked based on the total funds raised.',
      q2: 'Is my donation secure?',
      a2: 'Yes, all payments are processed securely through Stripe. We do not store any of your payment information on our servers.',
      q3: 'When will the winner be announced?',
      a3: 'The winner will be drawn and announced on August 31, 2025, shortly after the countdown ends. The winner will be notified via email.',
      q4: 'Can I enter for free?',
      a4: 'Yes, there is an Alternate Method of Entry (AMOE). Please see the "Free Entry" section below for instructions on how to participate without a donation.',
    },
    amoe: {
      title: 'Alternate Method of Entry (Free Entry)',
      button_text: 'Click here for Free Entry Form',
      modal_heading: 'Free Entry Form (AMOE)',
      modal_subheading: 'Please fill out the form completely to receive one (1) raffle ticket.',
      name: 'Full Name',
      email: 'Email Address',
      address: 'Full Postal Address',
      statement: 'Statement of Participation',
      statement_placeholder: 'Please write a short statement expressing your genuine interest in participating in the Camp Calma raffle.',
      submit: 'Submit Free Entry',
      success: 'Thank you! Your free entry has been submitted. You will receive a confirmation email shortly.',
      close: 'Close',
 consent_html: 'I accept the <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Terms</a> and acknowledge the <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Privacy Notice</a>, including consent to be contacted by email and WhatsApp regarding this raffle.',
 whatsapp: 'WhatsApp Number',
    },
    footer: {
      contact: 'Contact Us',
 follow_us: 'Follow Us',
 youtube_channel: 'YouTube Channel',
    },
    payment_success: {
        heading: "Thank You for Your Support!",
        message: "Your donation has been processed successfully. Your raffle ticket numbers have been sent to your email. Good luck!",
    }
  },
  pt: {
    nav: {
      description: 'O Projeto',
      donate: 'Doar & Ganhar',
      prizes: 'Prémios',
      faq: 'FAQ',
    },
    hero: {
      support_fairs_heading: 'Apoie a nossa participação em feiras!',
      support_fairs_text: 'Ajude a ONG Sankofa Living & Learning e o nosso projeto Camp Calma a estarem presentes nas feiras Reiselust, Fisch & Feines e Caravan Bremen. Com a sua doação, financiamos o aluguer do stand, viagens e materiais para tornar a vida sustentável visível.',
      donate_button: 'Doe agora',
      every_donation_text: 'Cada doação aproxima-nos um passo do nosso objetivo. Obrigado pelo seu apoio!',      
      subheading: 'Apoie um Sonho, Ganhe Prémios Incríveis',
      heading: 'Ajude a Construir o Camp Calma em Portugal',
      cta: 'Doe Agora & Receba Bilhetes para o Sorteio',
    },
    description: {
      heading: 'Sobre o Camp Calma',
      p1: 'O Camp Calma é um projeto da Sankofa Living & Learning, uma ONG dedicada à criação de espaços de vida e aprendizagem regenerativos. Localizado no coração de Portugal, o Camp Calma pretende ser uma quinta educacional autossuficiente e um santuário para a comunidade, a natureza e o crescimento pessoal.',
      p2: 'A sua contribuição financia diretamente a construção de infraestruturas essenciais, programas educacionais e recursos sustentáveis. Ao participar no nosso sorteio, não está apenas a ter a oportunidade de ganhar prémios incríveis—está a ajudar a construir as bases para um futuro melhor.',
    },
    donate: {
      heading: 'Escolha o Seu Nível de Apoio',
      subheading: 'Cada contribuição faz a diferença. Mais apoio significa mais chances de ganhar!',
      tier1: {
        price: '€10',
        tickets: '20 Bilhetes',
        description: 'Uma ótima forma de mostrar o seu apoio.',
      },
      tier2: {
        price: '€20',
        tickets: '80 Bilhetes',
        description: 'A nossa escolha mais popular! 4x mais bilhetes.',
        popular: 'POPULAR',
      },
      tier3: {
        price: '€30',
        tickets: '160 Bilhetes',
        description: 'O melhor valor para o maior impacto.',
      },
      button: 'Doar & Participar',
    },
    milestones: {
      heading: 'Metas de Angariação & Prémios',
      subheading: 'À medida que atingimos os nossos objetivos, desbloqueamos mais prémios fantásticos para o sorteio!',
      current_funding: 'Financiamento Atual',
      goal: 'Meta',
      prize1: 'DJI Mini 3 Pro Fly More Combo',
      prize2: 'DJI Mini 4 Pro',
      prize3: 'MacBook Air M2',
      prize4: 'MacBook Air M3 (Prémio Principal)',
      unlocked: 'DESBLOQUEADO!',
    },
    countdown: {
      heading: 'O Sorteio Termina Em',
      days: 'Dias',
      hours: 'Horas',
      minutes: 'Minutos',
      seconds: 'Segundos',
    },
    prizes: {
      heading: 'Um Olhar Detalhado sobre os Prémios',
      subheading: 'Gadgets de alta tecnologia podem ser seus. Todos os prémios são novos.',
      grand_prize: 'Prémio Principal',
    },
    faq: {
      heading: 'Perguntas Frequentes',
      q1: 'Como funciona o sorteio?',
      a1: 'Por cada doação, recebe um número de bilhetes de sorteio com base no nível que escolher. Assim que a campanha terminar, um vencedor será sorteado aleatoriamente de todos os bilhetes emitidos. Os prémios são desbloqueados com base no total de fundos angariados.',
      q2: 'A minha doação é segura?',
      a2: 'Sim, todos os pagamentos são processados de forma segura através do Stripe. N��o armazenamos nenhuma das suas informações de pagamento nos nossos servidores.',
      q3: 'Quando será anunciado o vencedor?',
      a3: 'O vencedor será sorteado e anunciado a 31 de agosto de 2025, pouco depois do final da contagem decrescente. O vencedor será notificado por e-mail.',
      q4: 'Posso participar gratuitamente?',
      a4: 'Sim, existe um Método Alternativo de Entrada (AMOE). Por favor, consulte a secção "Entrada Gratuita" abaixo para obter instruções sobre como participar sem fazer uma doação.',
    },
    amoe: {
      title: 'Método Alternativo de Entrada (Entrada Gratuita)',
      button_text: 'Clique aqui para o Formulário de Entrada Gratuita',
      modal_heading: 'Formulário de Entrada Gratuita (AMOE)',
      modal_subheading: 'Por favor, preencha o formulário completamente para receber um (1) bilhete de sorteio.',
      name: 'Nome Completo',
      email: 'Endereço de Email',
      address: 'Morada Postal Completa',
      statement: 'Declaração de Participação',
      statement_placeholder: 'Por favor, escreva uma breve declaração expressando o seu interesse genuíno em participar no sorteio do Camp Calma.',
      submit: 'Submeter Entrada Gratuita',
      success: 'Obrigado! A sua entrada gratuita foi submetida. Receberá um e-mail de confirmação em breve.',
      close: 'Fechar',
 consent_html: 'Aceito os <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Termos</a> e reconheço a <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Política de Privacidade</a>, incluindo o consentimento para ser contactado por email e WhatsApp relativamente a este sorteio.',
 whatsapp: 'Número de WhatsApp',
    },
    footer: {
      contact: 'Contacte-nos',
 follow_us: 'Siga-nos',
 youtube_channel: 'Canal do YouTube',
    },
    payment_success: {
        heading: "Obrigado pelo seu Apoio!",
        message: "A sua doação foi processada com sucesso. Os números dos seus bilhetes de sorteio foram enviados para o seu email. Boa sorte!",
    }
  },
};

// --- HELPER COMPONENTS ---

// ShadCN-style Button Component
const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const variants = {
    default: 'bg-green-600 text-white hover:bg-green-700',
    destructive: 'bg-red-500 text-destructive-foreground hover:bg-red-600',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-gray-200 text-secondary-foreground hover:bg-gray-300',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };
  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- UI COMPONENTS ---

const LanguageToggle = ({ language, setLanguage }) => (
  <div className="flex items-center space-x-2">
    <span className={`cursor-pointer font-semibold ${language === 'pt' ? 'text-green-600' : 'text-gray-500'}`} onClick={() => setLanguage('pt')}>PT</span>
    <div className="relative">
      <button onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')} className="w-12 h-6 rounded-full bg-gray-300 flex items-center transition-colors duration-300 ease-in-out">
        <span className={`block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${language === 'en' ? 'translate-x-6' : 'translate-x-1'}`}></span>
      </button>
    </div>
    <span className={`cursor-pointer font-semibold ${language === 'en' ? 'text-green-600' : 'text-gray-500'}`} onClick={() => setLanguage('en')}>EN</span>
  </div>
);

const Header = ({ language, setLanguage, t }) => (
  <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm shadow-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-2">
<img src={sankofaLogo} alt="Sankofa Living & Learning Logo" className="h-10 w-10 " />

           <span className="font-bold text-lg text-gray-800">Sankofa Living & Learning</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#project" className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.description}</a>
          <a href="#donate" className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.donate}</a>
          <a href="#prizes" className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.prizes}</a>
          <a href="#faq" className="text-gray-600 hover:text-green-600 transition-colors">{t.nav.faq}</a>
        </nav>
        <LanguageToggle language={language} setLanguage={setLanguage} />
      </div>
    </div>
  </header>
);

const HeroSection = ({ t }) => (
  <section className="relative h-[70vh] min-h-[500px] text-white flex items-center justify-center">
    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
    <img src={backgroundimage}
      alt="Beautiful landscape in Portugal" 
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 text-center p-4">
      <h2 className="text-2xl md:text-3xl font-light tracking-wider uppercase">{t.hero.subheading}</h2>
      <h1 className="text-5xl md:text-7xl font-bold my-4 drop-shadow-lg"> {t.hero.heading}</h1>
      <a href="#donate">
        <Button className="mt-8 px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform">
          {t.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </a>
    </div>
  </section>
);

const ProjectDescription = ({ t }) => (
  <section id="project" className="py-20 bg-stone-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{t.description.heading}</h2>
        <p className="text-lg text-gray-600 mb-4">{t.description.p1}</p>
        <p className="text-lg text-gray-600 mb-4">{t.description.p2}</p>
        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="text-center">
            <img src={community01} alt="Placeholder 1" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">Hosts and Volunteers</p>
          </div>
          <div className="text-center">
            <img src={communitykitchen01} alt="Placeholder 2" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">Building our community kitchen</p>
          </div>
          <div className="text-center">
            <img src={communitykitchen02} alt="Placeholder 3" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">Off-Grid Shower and Toilet</p>
          </div>
          {/* Add more carousel items here if needed */}
        </div>
      </div>
    </div>
  </section> // Added closing div tag here
);

const DonationTiers = ({ t, onDonate }) => {
  const tiers = [
    { amount: 10, price: t.donate.tier1.price, tickets: t.donate.tier1.tickets, desc: t.donate.tier1.description, popular: false },
    { amount: 20, price: t.donate.tier2.price, tickets: t.donate.tier2.tickets, desc: t.donate.tier2.description, popular: true },
    { amount: 30, price: t.donate.tier3.price, tickets: t.donate.tier3.tickets, desc: t.donate.tier3.description, popular: false },
  ];

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t.donate.heading}</h2>
          <p className="text-lg text-gray-500 mt-2">{t.donate.subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, index) => (
            <div key={index} className={`border rounded-lg p-8 text-center flex flex-col transition-all duration-300 ${tier.popular ? 'border-green-500 border-2 scale-105 bg-green-50 shadow-2xl' : 'border-gray-200 shadow-lg'}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">{t.donate.tier2.popular}</div>
              )}
              <h3 className="text-2xl font-bold text-gray-800">{tier.price}</h3>
              <p className="text-green-600 font-semibold text-xl my-4">{tier.tickets}</p>
              <p className="text-gray-500 flex-grow">{tier.desc}</p>
 
              {tier.amount === 10 ? (
                <a
                  href="https://donate.stripe.com/14A5kFebJ3n317J9soe3e02"
                  className="mt-8 w-full py-3 text-base inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700"
                >
                  {t.donate.button}
                </a>
              ) : (
                <Button onClick={() => onDonate(tier.amount)} className="mt-8 w-full py-3 text-base">
                  {t.donate.button}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MilestoneTracker = ({ t }) => {
  const [currentFunding, setCurrentFunding] = useState(3250); // Mocked value
  const totalGoal = 10000;
  const progress = (currentFunding / totalGoal) * 100;

  const milestones = [
    { amount: 1000, prize: t.milestones.prize1 },
    { amount: 2500, prize: t.milestones.prize2 },
    { amount: 5000, prize: t.milestones.prize3 },
    { amount: 10000, prize: t.milestones.prize4 },
  ];

  return (
    <section id="milestones" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t.milestones.heading}</h2>
          <p className="text-lg text-gray-500 mt-2">{t.milestones.subheading}</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-2 text-gray-600">
            <span className="font-bold text-lg">{t.milestones.current_funding}: €{currentFunding.toLocaleString()}</span>
            <span className="font-bold text-lg">{t.milestones.goal}: €{totalGoal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-6">
            <div className="bg-green-500 h-6 rounded-full transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {milestones.map((milestone, index) => {
              const unlocked = currentFunding >= milestone.amount;
              return (
                <div key={index} className={`p-4 rounded-lg transition-all duration-500 ${unlocked ? 'bg-green-100 shadow-md' : 'bg-gray-100'}`}>
                  <Award className={`mx-auto h-10 w-10 mb-2 ${unlocked ? 'text-green-500' : 'text-gray-400'}`} />
                  <p className="font-semibold text-gray-700">{milestone.prize}</p>
                  <p className="text-sm text-gray-500">€{milestone.amount.toLocaleString()}</p>
                  {unlocked && (
                    <p className="text-green-600 font-bold text-xs mt-2 animate-pulse">{t.milestones.unlocked}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const CountdownTimer = ({ t }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-08-31T23:59:59') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [
        { label: t.countdown.days, value: timeLeft.days },
        { label: t.countdown.hours, value: timeLeft.hours },
        { label: t.countdown.minutes, value: timeLeft.minutes },
        { label: t.countdown.seconds, value: timeLeft.seconds },
    ];

    return (
        <section className="py-20 bg-green-700 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold">{t.countdown.heading}</h2>
                </div>
                <div className="flex justify-center space-x-4 md:space-x-8">
                    {timerComponents.map((component, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-7xl font-bold bg-white/20 rounded-lg p-3 md:p-6">
                                {String(component.value).padStart(2, '0')}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const PrizeShowcase = ({ t }) => {
  const prizes = [
    { name: t.milestones.prize1, image: mini3Image, unlocked: true },
    { name: t.milestones.prize2, image: mini4Image, unlocked: true },
    { name: t.milestones.prize3, image: macbookM2, unlocked: false },
    { name: t.milestones.prize4, image: macbookM3, unlocked: false, isGrand: true },
  ];
  return (
    <section id="prizes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t.prizes.heading}</h2>
          <p className="text-lg text-gray-500 mt-2">{t.prizes.subheading}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-lg group">
              <div className="relative">
                <img src={prize.image} alt={prize.name} className="w-full h-56 object-cover" />
                {prize.isGrand && <div className="absolute top-2 right-2 bg-yellow-400 text-gray-800 text-xs font-bold px-2 py-1 rounded">{t.prizes.grand_prize}</div>}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{prize.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left">
        <span className="text-lg font-medium text-gray-800">{q}</span>
        <ChevronsUpDown className={`h-5 w-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && <p className="mt-4 text-gray-600">{a}</p>}
    </div>
  );
};

const Faq = ({ t }) => (
  <section id="faq" className="py-20 bg-stone-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">{t.faq.heading}</h2>
        <FaqItem q={t.faq.q1} a={t.faq.a1} />
        <FaqItem q={t.faq.q2} a={t.faq.a2} />
        <FaqItem q={t.faq.q3} a={t.faq.a3} />
        <FaqItem q={t.faq.q4} a={t.faq.a4} />
      </div>
    </div>
  </section>
);

const AmoeModal = ({ t, isOpen, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        // ⬇️ Deine Google Apps Script Web-App URL hier eintragen
        // IMPORTANT: This should be your actual script URL for production!
        // For development purposes, you might want to mock the submission or use a test script.
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyuTOoexdZskXOV9T_JYdWKlBOai8P3Ydfyl8IzeEyp4CIJnXM2Go7BStYyiBEfPIOcuA/exec';

        e.preventDefault();
        const formData = new FormData(e.target);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                if (response.ok) {
                    setSubmitted(true);
                    console.log('AMOE Submission Successful!', response);
                } else {
                    // Handle errors here, maybe show an error message
                    console.error('AMOE Submission Failed!', response);
                    alert('There was an error submitting your form. Please try again.'); // Simple error handling
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('There was an error submitting your form. Please try again.'); // Simple error handling
            });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-lg w-full relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X className="h-6 w-6" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{t.amoe.modal_heading}</h2>
                
                {submitted ? (
                    <div className="text-center py-8">
                        <Check className="h-16 w-16 mx-auto text-green-500 bg-green-100 rounded-full p-2" />
                        <p className="mt-4 text-lg text-gray-700">{t.amoe.success}</p>
                        <Button onClick={onClose} className="mt-6 px-6 py-2">{t.amoe.close}</Button>
                    </div>
                ) : (
                    <>
                        <p className="text-gray-500 mb-6">{t.amoe.modal_subheading}</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Pflicht-Hiddenfelder */}
                            <input type="hidden" name="campaign_id" value="campcalma_2025_08" />
                            <input type="hidden" name="entry_type" value="AMOE" />
                            <input type="hidden" name="ua" value={typeof navigator !== "undefined" ? navigator.userAgent : ""} />

                            {/* Honeypot gegen Bots */}
                            <input type="text" name="website" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                           <div>
                                <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">{t.amoe.name}</label>
                                <input type="text"
                                    id="full_name"
                                    name="full_name"
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    placeholder="João Neves"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    {t.amoe.email}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                   name="email"
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    placeholder="João@sankofa-ngo.org"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                                    {t.amoe.whatsapp}
                                </label>
                                <input type="tel" id="whatsapp" name="whatsapp" required pattern="^\+?\d{7,15}$" title="Please enter your WhatsApp number with country code, e.g. +351924327868" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="+351123456789" />
                            </div>

                            <div>
                                <label htmlFor="postal_address" className="block text-sm font-medium text-gray-700">
                                    {t.amoe.address}
                                </label>
                                <input
                                    type="text"
                                    id="postal_address"
                                    name="postal_address"
                                    required
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                                    placeholder="Rua Exemplo 123, Lisboa, 1000-000"
                                />
                            </div>


                            <div>
                                <label htmlFor="statement" className="block text-sm font-medium text-gray-700">
                                    {t.amoe.statement}
                                </label>
                                <textarea
                                    id="statement"
                                    name="statement"
                                    rows={3}
                                    required
                                    placeholder={t.amoe.statement_placeholder}
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
                                />
                            </div>

                            <label className="flex items-start gap-2 text-sm">
                                <input type="checkbox" name="consent" required />
                                <span dangerouslySetInnerHTML={{ __html: t.amoe.consent_html }} />
                            </label>

                            <Button type="submit" className="w-full py-3">
                                {t.amoe.submit}
                            </Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

const AmoeSection = ({ t, onOpenModal }) => (
    <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-gray-800">{t.amoe.title}</h3>
            <Button onClick={onOpenModal} variant="link" className="mt-2 text-green-600 text-lg">
                {t.amoe.button_text}
            </Button>
        </div>
    </section>
);


const Footer = ({ t }) => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="font-bold text-lg mb-4">Sankofa Living & Learning</h3>
          <p className="text-gray-400">Palanque, Tinalhas</p>
          <p className="text-gray-400">Castelo Branco, Portugal, 6000-740</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">{t.footer.contact}</h3>
          <p className="text-gray-400 flex items-center justify-center md:justify-start">
            <Mail className="h-4 w-4 mr-2" /> campcalma@sankofa-ngo.org
 </p>
 <a href="https://wa.me/351924327868" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start mt-2">
 <svg fill="#25D366" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-5 w-5 mr-2"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-93-25.7l-6.7-4-69.9 18.3L50 359.3l-4.1-6.9c-18.5-31.4-28.2-67.8-28.2-109.2c0-114.2 93.4-207.6 207.6-207.6 55.8 0 107.8 22.5 146.9 61.6 39.1 39.1 61.6 91.1 61.6 146.9c0 114.2-93.4 207.6-207.6 207.6zm105.1-201.1c-5.3-2.8-32.8-16.2-37.9-18s-8.7-2.8-12.4 2.8c-3.7 5.6-14.3 16.2-17.6 19.4s-6.3 3.7-11.6 1.2c-5.3-2.8-22.4-8.2-42.7-26.4s-35.4-29.4-39.9-37.9c-4.6-8.5-1.2-7.9 2.6-7.9s7.4-2.8 11.6-6.9c4.1-4.1 9.2-9.2 13.8-13.8s6.2-8.7 8.7-14.3c2.5-5.6 1.2-10.5-6.2-17.9s-17.6-42.4-24.1-61.3c-6.2-17.6-12.4-15-17.6-15s-11.6-2.8-17.6-2.8c-5.6 0-14.3 2.1-21.8 10.5s-27.5 27.1-27.5 66.1s28.1 76.5 32 81.6s55.5 84.8 134.2 118.4c33.2 13.9 59 22.3 79.5 28.4 21.5 6.4 40.2 6.7 46.1 5.9 6.5-.9 20.3-8.3 23.2-16.2s2.8-14.3 2.8-26.4c-.1-12.1-4.5-20.3-8.3-26.4z"/></svg>
 (+351) 924327868
 </a>
          <a href="http://www.sankofa-ngo.org" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors mt-2 inline-block">
            www.sankofa-ngo.org
          </a>
        </div>
        <div>
 <h3 className="font-bold text-lg mb-4">{t.footer.follow_us}</h3>
            <a href="https://www.youtube.com/channel/UCfz1cYEX3RX_5ydFITp3CdA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-300 transition-colors flex items-center justify-center md:justify-start">
 <svg fill="#e62117" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-5 w-5 mr-2"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305S1.984 288 1.984 288s0 89.438 11.412 132.305c6.281 23.65 24.787 42.276 48.284 48.597C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.947 48.284-48.597 11.412-42.867 11.412-132.305 11.412-132.305S561.067 288 561.067 288s0-89.438-11.412-132.305zm-317.51 213.508V175.159l103.159 60.17z"/></svg>
 {t.footer.youtube_channel}
            </a>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sankofa Living & Learning. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const PaymentSuccessModal = ({ t, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
                <Check className="h-16 w-16 mx-auto text-green-500 bg-green-100 rounded-full p-2" />
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-2">{t.payment_success.heading}</h2>
                <p className="text-gray-600 mb-8">{t.payment_success.message}</p>
                <Button onClick={onClose} className="px-8 py-2">
                    {t.amoe.close}
                </Button>
            </div>
        </div>
    );
};


// --- MAIN APP COMPONENT ---

export default function App() {
  const [language, setLanguage] = useState('en');
  const [isAmoeModalOpen, setIsAmoeModalOpen] = useState(false);
  const [isPaymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false);

  const t = useMemo(() => translations[language], [language]);

  const handleDonation = (amount) => {
    console.log(`--- MOCK STRIPE PAYMENT ---`);
    console.log(`Processing donation of €${amount}`);
    // Simulate API call to backend
    setTimeout(() => {
        const ticketId = `SANKOFA-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
        console.log(`Payment successful. Ticket generated: ${ticketId}`);
        console.log(`Mock: Sending ticket to user's email and storing in DB.`);
        setPaymentSuccessModalOpen(true);
    }, 1000);
  };

  return (
    <div className="bg-white font-sans">
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main>
        <HeroSection t={t} />
        <ProjectDescription t={t} />
        <DonationTiers t={t} onDonate={handleDonation} />
        <MilestoneTracker t={t} />
        <CountdownTimer t={t} />
        <PrizeShowcase t={t} />
        <div className="bg-gray-50 flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold text-center mb-4 text-black">{t.hero.support_fairs_heading}</h1>
      <p className="text-lg text-center max-w-xl mb-4 text-black">{t.hero.support_fairs_text}</p>

          <a
        href="https://donate.stripe.com/14A5kFebJ3n317J9soe3e02" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md transition"
      >
        {t.hero.donate_button}
      </a>

      <p className="mt-6 text-sm text-gray-600">
        {t.hero.every_donation_text}
      </p>
    </div>
        <Faq t={t} />
        <AmoeSection t={t} onOpenModal={() => setIsAmoeModalOpen(true)} />
      </main>
      <Footer t={t} />

      {/* Modals */}
      <AmoeModal t={t} isOpen={isAmoeModalOpen} onClose={() => setIsAmoeModalOpen(false)} />
      <PaymentSuccessModal t={t} isOpen={isPaymentSuccessModalOpen} onClose={() => setPaymentSuccessModalOpen(false)} />
    </div>
  );
}
