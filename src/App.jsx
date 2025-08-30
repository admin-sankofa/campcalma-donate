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
// All text content is stored here for easy EN/PT/DE/TWI toggling
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
      support_fairs_heading: 'Support our fair participation!',
      support_fairs_text: 'Help the NGO Sankofa Living & Learning and our project Camp Calma to be present at the fairs Reiselust, Fisch & Feines and Caravan Bremen. With your donation, we finance stand rent, travel, and materials to make sustainable living visible!',
      donate_button: 'Donate',
      every_donation_text: 'Every donation brings us one step closer to our goal. Thank you for your support!',      
      subheading: 'Support a Dream, Win Amazing Prizes',
      heading: 'Help Build Camp Calma in Portugal',
      cta: 'Donate Now & Get Raffle Tickets',
    },
    video: {
 heading: 'See Camp Calma in Action',
 youtube_link: 'https://www.youtube.com/embed/sG3dgRxuIHc?rel=0',
    },
    victron: {
      heading: 'Victron Energy Dashboard',
      subheading: 'Get insight into our solar power in real time.',
      open_fullscreen: 'Open fullscreen for an advanced dashboard with more information'
    },
    african_campers: {
      heading: 'African‑Inspired Campers – Our Vision',
      text: 'At Camp Calma and Sankofa Living & Learning, many creative ideas and projects connect knowledge, culture, and sustainable living. Daniel brings experience from the caravanning world, off‑grid life, and his former work as a quality manager in the automotive industry. From this, the vision has grown to develop African‑inspired caravans—built in Ghana, exported worldwide, and sparking enthusiasm for travel and tourism to Ghana. This goal is realistic, but only possible together: we need people who commit to such projects—or donations so that Sankofa Living & Learning can make these pioneering initiatives a reality.'
    },
    press: {
      heading: 'Featured in TV and Press',
      subheading: 'Years of hands‑on campervan conversions — building trust through public coverage.',
      video_cta: 'Watch on YouTube',
      article_cta: 'Read the article'
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
      subheading: 'High-tech gadgets could be yours.',
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
    },
    bisafo: {
      heading: "Become Part of the Bisafo Circle 🚀",
      subheading: "Monthly support · Direct access · Prize chances from 450 members",
      current_members: "Current Members",
      capacity: "Limited Spots",
      sustainability_label: "Sustainability Goal",
      raffle_label: "Giveaway",
      capacity_label: "Capacity Reached",
      milestone_0_299: "💙 Up to 299: Building Phase",
      milestone_300_349: "💚 300–349: Sustainability Achieved",
      milestone_350_449: "💛 350–449: Exclusive Access & Event Notifications",
      milestone_450_500: "💜 450+: Monthly Giveaways (e.g. MacBook)",
      status_building: "Building Phase: NGO Development 💙",
      status_sustainability: "Sustainability Achieved 💚",
      status_exclusive: "Exclusive Access & Event Notifications ✨",
      status_raffles: "Monthly Giveaways Unlocked 🎁",
      benefits_heading: "Exclusive Benefits for Bisafo Members",
      benefit_1: "✅ Exclusive access to Daniel",
      benefit_2: "📩 First notification for events",
      benefit_3: "🎥 Exclusive content & community updates",
      benefit_4: "🎁 Prize chances from 450+ members",
      cta_button: "Become Member Now"
    },
    bisafo_about: {
      heading: "About the Bisafo Circle",
      subheading: "The exclusive community of Sankofa Living & Learning",
      feature_founders: "Founders Club",
      feature_safe_harbor: "Safe Harbor",
      feature_shared_learning: "Shared Learning",
      feature_monthly_raffles: "Monthly Raffles",
      background: "“Bisafo” comes from the Twi language of Ghana and describes “the seekers, learners, and questioners.” At Camp Calma, the Bisafo Circle is the Founders Club — a network of pioneers who explore, discover, and learn together. The Bisafo Spirit is curiosity, shared learning, and adventure — the beating heart of Camp Calma.",
      exclusivity: "The first 500 members form the exclusive Bisafo Circle and will always keep their special founder advantages as long as they remain active. Later, the community will grow to 5,000 Gold Members, while the Bisafo Circle retains unique founder status.",
      sustainability: "These first 500 members — shown in the dashboard — are the group whose monthly contributions secure the NGO’s sustainability and unlock monthly raffles.",
      benefits_title: "Member Benefits",
      benefits: [
        "🌱 50% discount on Camp Calma stays (Bisafo Circle), 30% for Gold Members.",
        "🎁 Access to exclusive prize pools and grand prizes (e.g., land, campervans) once milestones are reached.",
        "📚 Access to digital resources (Permaculture Guide, recipes, yoga, learning materials).",
        "🗳️ Co-determination in workshops, events, and community projects.",
        "🎥 Exclusive live/stream events, community calls, retreat previews.",
        "📝 Name recognition on website/social/video as founding supporters."
      ],
      info_box: "The Bisafo Circle (500 Members) forms the Founders Club. Later, the community will expand to 5,000 Gold Members — but the Bisafo Circle will always keep its unique founder privileges.",
      narrative_title: "Project “Safe Harbor” & Autarky",
      narrative: "This is more than a lottery. Your contribution is a catalyst for personal and communal resilience — an investment in building a Safe Harbor: a place of learning, community, and practical self‑sufficiency. Together, Camp Calma and Sankofa aim to inspire a movement of lived self‑sufficiency and resilience."
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
 video: {
 heading: 'Veja o Camp Calma em Ação',
 youtube_link: 'https://www.youtube.com/embed/VIDEO_ID_PORTUGUES?rel=0',
    },
    victron: {
      heading: 'Painel Victron Energy',
      subheading: 'Veja em tempo real a nossa energia solar.',
      open_fullscreen: 'Abrir em ecrã inteiro para um painel avançado com mais informações'
    },
    african_campers: {
      heading: 'Caravanas inspiradas em África – A nossa visão',
      text: 'Na Camp Calma e na Sankofa Living & Learning surgem muitas ideias e projetos criativos que ligam conhecimento, cultura e vida sustentável. Daniel traz a sua experiência do mundo das caravanas, da vida off‑grid e do seu trabalho anterior como gestor de qualidade na indústria automóvel. Daí nasceu a visão de desenvolver caravanas inspiradas em África — fabricadas no Gana, exportadas para o mundo e, ao mesmo tempo, um impulso para inspirar viagens e turismo para o Gana. Este objetivo é realista, mas só é possível em conjunto: precisamos de pessoas empenhadas nestes projetos — ou de doações, para que a Sankofa Living & Learning possa tornar estas iniciativas pioneiras realidade.'
    },
    press: {
      heading: 'Na televisão e na imprensa',
      subheading: 'Anos de conversões práticas de autocaravanas — confiança através da visibilidade pública.',
      video_cta: 'Ver no YouTube',
      article_cta: 'Ler o artigo'
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
      a2: 'Sim, todos os pagamentos são processados de forma segura através do Stripe. Não armazenamos nenhuma das suas informações de pagamento nos nossos servidores.',
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
      statement: 'Declaração de Participaç��o',
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
    },
    bisafo: {
      heading: "Torna-te Parte dos 500 Membros Bisafo 🚀",
      subheading: "Apoio mensal · Acesso direto · Chances de prémio a partir dos 450 membros",
      current_members: "Membros Atuais",
      capacity: "Lugares Limitados",
      sustainability_label: "Meta de Sustentabilidade",
      raffle_label: "Sorteio",
      capacity_label: "Capacidade Atingida",
      milestone_0_299: "💙 Até 299: Fase de Construção",
      milestone_300_349: "💚 300–349: Sustentabilidade Alcançada",
      milestone_350_449: "💛 350–449: Acesso Exclusivo e Notificações de Eventos",
      milestone_450_500: "💜 450+: Sorteios Mensais (ex. MacBook)",
      status_building: "Fase de Construção: Desenvolvimento da ONG 💙",
      status_sustainability: "Sustentabilidade Alcançada 💚",
      status_exclusive: "Acesso Exclusivo e Notificações de Eventos ✨",
      status_raffles: "Sorteios Mensais Desbloqueados 🎁",
      benefits_heading: "Benefícios Exclusivos para Membros Bisafo",
      benefit_1: "✅ Acesso exclusivo ao Daniel",
      benefit_2: "📩 Primeira notificação para eventos",
      benefit_3: "🎥 Conteúdo exclusivo e atualizações da comunidade",
      benefit_4: "🎁 Chances de prémio a partir dos 450+ membros",
      cta_button: "Tornar-me Membro Agora"
    },
    bisafo_about: {
      heading: "Sobre o Círculo Bisafo",
      subheading: "A comunidade exclusiva da Sankofa Living & Learning",
      feature_founders: "Clube de Fundadores",
      feature_safe_harbor: "Porto Seguro",
      feature_shared_learning: "Aprendizagem Partilhada",
      feature_monthly_raffles: "Sorteios Mensais",
      background: "“Bisafo” vem da língua Twi do Gana e significa “os que procuram, aprendem e questionam”. No Camp Calma, o Círculo Bisafo é o Clube de Fundadores — uma rede de pioneiros que exploram, descobrem e aprendem juntos. O Espírito Bisafo é curiosidade, aprendizagem partilhada e aventura — o coração pulsante do Camp Calma.",
      exclusivity: "Os primeiros 500 membros formam o exclusivo Círculo Bisafo e manterão para sempre as vantagens especiais de fundadores enquanto permanecerem ativos. Mais tarde, a comunidade crescerá para 5.000 Membros Gold, enquanto o Círculo Bisafo mantém o estatuto único de fundador.",
      sustainability: "Estes primeiros 500 membros — mostrados no painel — são o grupo cujas contribuições mensais asseguram a sustentabilidade da ONG e desbloqueiam sorteios mensais.",
      benefits_title: "Benefícios para Membros",
      benefits: [
        "🌱 50% de desconto em estadias no Camp Calma (Círculo Bisafo), 30% para Membros Gold.",
        "🎁 Acesso a prémios exclusivos e grandes prémios (ex.: terreno, autocaravanas) após atingir marcos.",
        "📚 Acesso a recursos digitais (Guia de Permacultura, receitas, yoga, materiais de aprendizagem).",
        "🗳️ Co-determinação em workshops, eventos e projetos comunitários.",
        "🎥 Eventos exclusivos ao vivo/stream, chamadas da comunidade, prévias de retiros.",
        "📝 Reconhecimento do nome no site/redes/vídeo como apoiadores fundadores."
      ],
      info_box: "O Círculo Bisafo (500 Membros) forma o Clube de Fundadores. Mais tarde, a comunidade expandir‑se‑á para 5.000 Membros Gold — mas o Círculo Bisafo manterá sempre os seus privilégios únicos de fundador.",
      narrative_title: "Projeto “Porto Seguro” & Autossuficiência",
      narrative: "Isto é mais do que uma lotaria. A sua contribuição é um catalisador de resiliência pessoal e comunitária — um investimento na construção de um Porto Seguro: um lugar de aprendizagem, comunidade e autossuficiência prática. Juntos, o Camp Calma e a Sankofa inspiram um movimento de autossuficiência e resiliência vividas."
    }
  },
  de: {
 nav: {
 description: 'Das Projekt',
 donate: 'Spenden & Gewinnen',
 prizes: 'Preise',
 faq: 'FAQ',
    },
    hero: {
 support_fairs_heading: 'Unterstütze unsere Messeteilnahmen!',
 support_fairs_text: 'Hilf der NGO Sankofa Living & Learning und unserem Projekt Camp Calma, bei den Messen Reiselust, Fisch & Feines und Caravan Bremen dabei zu sein. Mit deiner Spende finanzieren wir Standmiete, Reise und Materialien, um nachhaltiges Leben sichtbar zu machen.',
      donate_button: 'Jetzt Spenden',
 every_donation_text: 'Jede Spende bringt uns unserem Ziel einen Schritt näher. Vielen Dank für deine Unterstützung!',      
 subheading: 'Unterstütze einen Traum, Gewinne tolle Preise',
 heading: 'Hilf mit beim Aufbau von Camp Calma in Portugal',
 cta: 'Jetzt Spenden & Lose erhalten',
    },
 video: {
 heading: 'Camp Calma in Aktion sehen',
 youtube_link: 'https://www.youtube.com/embed/VIDEO_ID_DEUTSCH?rel=0',
    },
    victron: {
      heading: 'Victron Energy Dashboard',
      subheading: 'Erhalte Einblicke in unsere Solarenergie in Echtzeit.',
      open_fullscreen: 'Im Vollbild öffnen für ein erweitertes Dashboard mit mehr Informationen'
    },
    african_campers: {
      heading: 'Afrikanisch inspirierte Camper – Unsere Vision',
      text: 'Bei Camp Calma und Sankofa Living & Learning entstehen viele kreative Ideen und Projekte, die Wissen, Kultur und nachhaltiges Leben verbinden. Daniel bringt seine Erfahrungen aus der Caravaning‑Welt, dem Off‑Grid‑Leben und seiner früheren Tätigkeit als Qualitätsmanager in der Automobilindustrie ein. Daraus ist auch die Vision gewachsen, afrikanisch inspirierte Wohnwagen zu entwickeln – gefertigt in Ghana, weltweit exportiert und zugleich ein Impuls, Menschen für Reisen und Tourismus nach Ghana zu begeistern. Dieses Ziel ist realistisch, aber nur gemeinsam umsetzbar: wir brauchen Menschen, die sich für solche Projekte engagieren – oder Spenden, damit Sankofa Living & Learning solche wegweisenden Initiativen realisieren kann.'
    },
    press: {
      heading: 'In TV und Presse',
      subheading: 'Jahre echter Campervan‑Umbauten — Vertrauen durch öffentliche Berichterstattung.',
      video_cta: 'Auf YouTube ansehen',
      article_cta: 'Artikel lesen'
    },
    description: {
 heading: 'Über Camp Calma',
 p1: 'Camp Calma ist ein Projekt von Sankofa Living & Learning, einer NGO, die sich der Schaffung regenerativer Lebens- und Lernräume verschrieben hat. Im Herzen Portugals gelegen, soll Camp Calma ein autarkes Bildungshof und ein Zufluchtsort für Gemeinschaft, Natur und persönliches Wachstum sein.',
 p2: 'Deine Spende finanziert direkt den Bau wesentlicher Infrastruktur, Bildungsprogramme und nachhaltiger Ressourcen. Durch die Teilnahme an unserer Verlosung hast du nicht nur die Chance, unglaubliche Preise zu gewinnen — du hilfst beim Aufbau einer Grundlage für eine bessere Zukunft. 🙏🏽',
    },
    donate: {
 heading: 'Wähle dein Unterstützungslevel',
 subheading: 'Jeder Beitrag macht einen Unterschied. Mehr Unterstützung bedeutet mehr Gewinnchancen!',
      tier1: {
 price: '€10',
 tickets: '20 Lose',
 description: 'Eine großartige Möglichkeit, deine Unterstützung zu zeigen.',
      },
      tier2: {
 price: '€20',
 tickets: '80 Lose',
 description: 'Unsere beliebteste Wahl! 4x so viele Lose.',
 popular: 'BELIEBT',
      },
      tier3: {
 price: '€30',
 tickets: '160 Lose',
 description: 'Bester Wert für die größte Wirkung.',
      },
 button: 'Spenden & Teilnehmen',
    },
    milestones: {
 heading: 'Fundraising Meilensteine & Preise',
 subheading: 'Wenn wir unsere Ziele erreichen, schalten wir weitere tolle Preise für die Verlosung frei!',
 current_funding: 'Aktuelle Finanzierung',
 goal: 'Ziel',
 prize1: 'DJI Mini 3 Pro Fly More Combo',
 prize2: 'DJI Mini 4 Pro',
 prize3: 'MacBook Air M2',
 prize4: 'MacBook Air M3 (Hauptpreis)',
 unlocked: 'FREIGESCHALTET!',
    },
    countdown: {
 heading: 'Verlosung Endet In',
 days: 'Tage',
 hours: 'Stunden',
 minutes: 'Minuten',
 seconds: 'Sekunden',
    },
    prizes: {
 heading: 'Ein genauerer Blick auf die Preise',
 subheading: 'Hightech-Gadgets könnten dir gehören. Alle Preise sind brandneu.',
 grand_prize: 'Hauptpreis',
    },
    faq: {
 heading: 'Häufig gestellte Fragen',
 q1: 'Wie funktioniert die Verlosung?',
 a1: 'Für jede Spende erhältst du eine Anzahl von Losen, basierend auf dem von dir gewählten Betrag. Nach Ablauf der Kampagne wird ein Gewinner zufällig aus allen ausgestellten Losen gezogen. Die Preise werden basierend auf den gesammelten Spenden freigeschaltet.',
 q2: 'Ist meine Spende sicher?',
 a2: 'Ja, alle Zahlungen werden sicher über Stripe verarbeitet. Wir speichern keine deiner Zahlungsinformationen auf unseren Servern.',
 q3: 'Wann wird der Gewinner bekannt gegeben?',
 a3: 'Der Gewinner wird am 31. August 2025, kurz nach Ablauf des Countdowns, gezogen und bekannt gegeben. Der Gewinner wird per E-Mail benachrichtigt.',
 q4: 'Kann ich kostenlos teilnehmen?',
 a4: 'Ja, es gibt eine alternative Teilnahmemethode (AMOE). Bitte siehe den Abschnitt "Kostenlose Teilnahme" unten für Anweisungen, wie du ohne Spende teilnehmen kannst.',
    },
    amoe: {
 title: 'Alternative Teilnahmemethode (Kostenlose Teilnahme)',
 button_text: 'Klicke hier für das Formular zur kostenlosen Teilnahme',
 modal_heading: 'Formular für kostenlose Teilnahme (AMOE)',
 modal_subheading: 'Bitte fülle das Formular vollständig aus, um ein (1) Los zu erhalten.',
 name: 'Vollständiger Name',
 email: 'E-Mail Adresse',
 address: 'Vollständige Postanschrift',
 statement: 'Teilnahmeerklärung',
 statement_placeholder: 'Bitte schreibe eine kurze Erklärung, die dein echtes Interesse an der Teilnahme an der Camp Calma Verlosung ausdrückt.',
 submit: 'Kostenlose Teilnahme absenden',
 success: 'Vielen Dank! Deine kostenlose Teilnahme wurde übermittelt. Du erhältst in Kürze eine Bestätigungs-E-Mail.',
 close: 'Schließen',
 consent_html: 'Ich akzeptiere die <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Bedingungen</a> und erkenne die <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Datenschutzerklärung</a> an, einschließlich der Zustimmung, per E-Mail und WhatsApp bezüglich dieser Verlosung kontaktiert zu werden.',
 whatsapp: 'WhatsApp Nummer',
    },
    footer: {
 contact: 'Kontaktiere uns',
 follow_us: 'Folge uns',
 youtube_channel: 'YouTube Kanal',
    },
    payment_success: {
 heading: "Vielen Dank für deine Unterstützung!",
 message: "Deine Spende wurde erfolgreich verarbeitet. Deine Losnummern wurden an deine E-Mail-Adresse gesendet. Viel Glück!",
    },
    bisafo: {
      heading: "Werde Teil der 500 Bisafo Members 🚀",
      subheading: "Monatliche Unterstützung · Direkter Zugang · Gewinnchancen ab 450 Mitgliedern",
      current_members: "Aktuelle Mitglieder",
      capacity: "Limitierte Plätze",
      sustainability_label: "Nachhaltigkeitsziel",
      raffle_label: "Gewinnspiel",
      capacity_label: "Kapazität erreicht",
      milestone_0_299: "💙 Bis 299: Aufbauphase",
      milestone_300_349: "💚 300–349: Nachhaltigkeit erreicht",
      milestone_350_449: "💛 350–449: Exklusiver Zugang & Event-Benachrichtigungen",
      milestone_450_500: "💜 450+: Gewinnspiele jeden Monat (z.B. MacBook)",
      status_building: "Startphase: Aufbau der NGO 💙",
      status_sustainability: "Nachhaltigkeit erreicht 💚",
      status_exclusive: "Exklusiver Zugang & Event-Benachrichtigungen ✨",
      status_raffles: "Monatliche Gewinnspiele freigeschaltet 🎁",
      benefits_heading: "Exklusive Vorteile für Bisafo Members",
      benefit_1: "✅ Exklusiver Zugang zu Daniel",
      benefit_2: "📩 Erste Benachrichtigung bei Events",
      benefit_3: "🎥 Exklusiver Content & Community-Updates",
      benefit_4: "🎁 Gewinnchancen ab 450+ Mitgliedern",
      cta_button: "Jetzt Mitglied werden"
    },
    bisafo_about: {
      heading: "Über den Bisafo‑Kreis",
      subheading: "Die exklusive Community von Sankofa Living & Learning",
      feature_founders: "Founders Club",
      feature_safe_harbor: "Sicherer Hafen",
      feature_shared_learning: "Gemeinsames Lernen",
      feature_monthly_raffles: "Monatliche Verlosungen",
      background: "Der Bisafo Circle ist die neue, exklusive Community und der Founders Club von Camp Calma. Der Name „Bisafo“ stammt aus der Twi‑Sprache Ghanas und bedeutet „die Fragenden, Suchenden oder Lernenden“. Der Kreis versteht sich als Netzwerk für Menschen, die gemeinsam neue Wege gehen, entdecken, erleben und voneinander lernen möchten — inspiriert vom ghanaischen Bisafo‑Spirit.",
      exclusivity: "Die ersten 500 Mitglieder bilden den exklusiven Bisafo‑Kreis (Founders Club) und behalten dauerhaft besondere Gründer‑Vorteile, solange sie aktiv bleiben. Später wächst die Community auf 5.000 Gold‑Mitglieder; der Bisafo‑Kreis behält seinen einzigartigen Gründer‑Status.",
      sustainability: "Diese ersten 500 Mitglieder — im Dashboard sichtbar — sind die Gruppe, deren monatliche Beiträge die Nachhaltigkeit der NGO sichern und monatliche Verlosungen ermöglichen.",
      benefits_title: "Mitgliedsvorteile",
      benefits: [
        "🌱 50% Rabatt auf Camp‑Calma‑Aufenthalte (Bisafo‑Kreis), 30% für Gold‑Mitglieder.",
        "🎁 Zugang zu exklusiven Preispools und Hauptpreisen (z. B. Land, Campervans), sobald Meilensteine erreicht sind.",
        "📚 Zugang zu digitalen Ressourcen (Permakultur‑Guide, Rezepte, Yoga, Lernmaterialien).",
        "🗳️ Mitbestimmung bei Workshops, Events und Community‑Projekten.",
        "🎥 Exklusive Live/Stream‑Events, Community‑Calls, Retreat‑Previews.",
        "📝 Namensnennung auf Website/Social/Video als Gründungsunterstützer."
      ],
      info_box: "Der Bisafo‑Kreis (500 Mitglieder) bildet den Founders Club. Später wächst die Community auf 5.000 Gold‑Mitglieder — doch der Bisafo‑Kreis behält dauerhaft seine einzigartigen Gründer‑Privilegien.",
      narrative_title: "Projekt „Sicherer Hafen“ & Autarkie 2025",
      narrative: "Mehr als eine Lotterie: Dein Beitrag beschleunigt persönliche und gemeinschaftliche Resilienz — eine Investition in den Aufbau eines Sicheren Hafens: ein Ort des Lernens, der Gemeinschaft und praktischer Autarkie. Camp Calma und die Sankofa‑NGO wirken als Facilitatoren dieser Bewegung und stoßen eine Kultur gelebter Selbstversorgung an; mit Starthilfe‑Chancen auf reale Werte (z. B. Grundstück, Campervan), die den Aufbau zusätzlich beschleunigen."
    }
  },
  twi: {
 nav: {
 description: 'Adwuma no',
 donate: 'Mma ne Bɔ��l',
 prizes: 'Akyɛdeɛ',
 faq: 'FAQ',
    },
    hero: {
 support_fairs_heading: 'Boa yɛn ma yɛnkɔ afayɛ!',
 support_fairs_text: 'Boa Sankofa Living & Learning NGO ne yɛn adwuma Camp Calma ma yɛnkɔ Reiselust, Fisch & Feines, ne Caravan Bremen afayɛ no ase. Wo mmɔhoɔ boa yɛn ma yɛtua baabi a yɛbɛgyina, akwantu, ne nneɛma a ɛho hia ma yɛayi abrabɔ pa adi!',
 donate_button: 'Mma',
 every_donation_text: 'Mmɔhoɔ biara ma yɛn bɛn yɛn botaeɛ. Agyina mo ase yɛn mmoa no!',
 subheading: 'Boa Daakye, Fa Nneɛma Pa',
 heading: 'Boa Ma Camp Calma Nsi Portugal',
 cta: 'Mma Afei na Fa Bɔɔl',
    },
 video: {
 heading: 'Hwɛ Camp Calma Anwum',
 youtube_link: 'https://www.youtube.com/embed/VIDEO_ID_TWI?rel=0',
    },
    victron: {
      heading: 'Victron Energy Dashboard',
      subheading: 'Hunu yɛn sɔla tumi wɔ bere tenten mu seesei.',
      open_fullscreen: 'Bue wɔ kɛse so na kɔ dashboard kɛse a ɛma nsɛm bebree'
    },
    african_campers: {
      heading: 'Afrika‑nsusuwii Camper – Yɛn Adwene',
      text: 'Wɔ Camp Calma ne Sankofa Living & Learning mu na nsusuwii ne nnwuma foforɔ bebree reba a ɛde nimdeɛ, amammerɛ ne asetena mu dɔnhwerehwɛ hyia. Daniel de ne nimdeɛ firi caravan wiase, off‑grid abrabɔ ne ne adwuma dedaw sɛ quality manager wɔ akwadwumayɛ mu hyɛ mu. Eyi mu na adwene no fi sɛ yɛbɛyɛ caravan a ɛtɔ Afrika amammerɛ so — wobeyɛ wɔ Ghana, na wɔde akotuu wiase nyinaa, na ��nam so nso bɔ nnipa kɔkɔ sɛ wɔnkɔtɔ Ghana akɔtwa kwan ne atudɔ. Botae yi yɛ ampa, nanso ɛy�� adwuma a ɛsɛ sɛ yɛyɛ bom: yehia nnipa a wobɛhyɛ saa nnwuma yi mu den — anaa akatua/ayɛde��, na Sankofa Living & Learning atumi de saa ɔkwan‑tuntum adwumayɛ yi ayɛ adwuma.'
    },
    press: {
      heading: 'TV ne nsɛmmɔne mu aka yɛn ho',
      subheading: 'Mfeɛ ahe na yɛreyɛ campervan‑nsakrae wɔ adwumayɛ mu — eyi ma ɔdɔ ne gyidie.',
      video_cta: 'Hwɛ wɔ YouTube so',
      article_cta: 'Kenkan asɛmmisa no'
    },
    description: {
 heading: 'Ɛfa Camp Calma Ho',
 p1: 'Camp Calma yɛ Sankofa Living & Learning, NGO bi a ɛboa ma nnipa nya baabi a wɔbɛtena ne wɔn ho bɛsua adeɛ. Ɛwɔ Portugal mfimfini, Camp Calma botaeɛ ne sɛ ɛbɛyɛ sukuu fie a ɛnfa anyinam ahoɔden ho, na ɛbɛyɛ baabi a amanfoɔ, abɔdeɛ, ne obiara nneɛma bɛyɛ yie.',
 p2: 'Wo mmɔhoɔ no kɔ tẽẽ boa ma wɔsi nneɛma a ɛho hia, nwomasua nhyehyɛeɛ, ne nneɛma a ɛbɛboa ma yɛatra hɔ kyɛ. Wobɛka bɔɔl no ho a, ɛnyɛ akwanya kɛkɛ na wobɛnya sɛ wobɛfa nneɛma pa���wobɛboa ma wɔnsi fapem ma daakye pa. 🙏🏽',
    },
    donate: {
 heading: 'Yi Wo Boa No Mu',
 subheading: 'Mmɔhoɔ biara wɔ ne mfasoɔ. Mmɔhoɔ pii kyerɛ akwanya pii sɛ wob��gye!',
      tier1: {
 price: '€10',
 tickets: '20 Bɔɔl',
 description: 'Ɔkwan pa a wobɛfa so akyerɛ sɛ wob�� yɛn ho mmɔden.',
      },
      tier2: {
 price: '€20',
 tickets: '80 Bɔɔl',
 description: 'Yɛn deɛ nnipa pii pɛ! Bɔɔl mpɛn 4.',
 popular: 'ƆDƆ FOO',
      },
      tier3: {
 price: '€30',
 tickets: '160 Bɔɔl',
 description: 'Nea ɛho tɔn sen biara ma nea ɛyɛ kɛseɛ.',
      },
 button: 'Mma & Kɔ',
    },
    milestones: {
 heading: 'Sika Akwantu Ne Akyɛdeɛ',
 subheading: 'Sɛ yɛduru yɛn botaeɛ so a, yɛbɛyi akyɛdeɛ foforɔ bi a ɛyɛ anika ama bɔɔl no!',
 current_funding: 'Sika a Yɛanya Sɛe Nie',
 goal: 'Botaeɛ',
 prize1: 'DJI Mini 3 Pro Fly More Combo',
 prize2: 'DJI Mini 4 Pro',
 prize3: 'MacBook Air M2',
 prize4: 'MacBook Air M3 (Akyɛdeɛ Kɛseɛ)',
 unlocked: 'ABUE!',
    },
    countdown: {
 heading: 'Bɔɔl No Bɛba Awiei Wɔ',
 days: 'Nna',
 hours: 'Nnɔnhwerew',
 minutes: 'Nkyekyɛmu',
 seconds: 'Sikani',
    },
    prizes: {
 heading: 'Nhwɛɛmu Pa Akyɛdeɛ No Ho',
 subheading: 'Nneɛma a ɛyɛ foforɔ betumi ayɛ wo deɛ. Akyɛde�� nyinaa yɛ foforɔ.',
 grand_prize: 'Akyɛdeɛ Kɛseɛ',
    },
    faq: {
 heading: 'Nsɛm A Wobisa No Mpɛn Pii',
 q1: 'Bɔɔl no yɛ adwuma sɛn?',
 a1: 'Mmɔhoɔ biara a wobɛma no, wobɛnya bɔɔl akyɛdeɛ a ɛgyina sika dodoɔ a woayi no so. Sɛ adwuma no ba awiei a, wɔbɛyi obiara a wanya bɔɔl no mu baako mpofirim. Wɔde sika a wɔanya nyinaa na ��kyerɛ akyɛdeɛ a wobɛnya.',
 q2: 'M’mmɔhoɔ no yɛ tẽẽ anaa?',
 a2: 'Yoo, wɔde Stripe na ɛyɛ sika ho nsɛm nyinaa yie. Yɛnnfa wo sika ho nsɛm nkora yɛn mfiri so.',
 q3: 'Da bɛn na wɔbɛka obi a wanya bɔɔl no din?',
 a3: 'Wɔbɛyi obi a wanya bɔɔl no na wɔaka ne din kyerɛ obiara wɔ Ɔsanaa 31, 2025, bere tiaa bi a wɔbɛgye bɔɔl no totoo no akyi. Wɔbɛde email abɔ ne amaneɛ.',
 q4: 'Metumi akɔ mu kwa anaa?',
 a4: 'Yoo, akwan foforɔ wɔ hɔ a wobɛfa so akɔ mu (AMOE). Y��srɛ wo hwɛ "Kɔ Mu Kwa" dwumadie a ɛwɔ aseɛ hɔ no mu na hwɛ kwan a wobɛfa so akɔ mu a wode sika mma biara.',
    },
    amoe: {
 title: 'Ɔkwan Foforɔ A Wob��fa So Akɔ Mu (Kɔ Mu Kwa)',
 button_text: 'Klik ha fa kɔ ne Form no so kɔ mu kwa',
 modal_heading: 'Kɔ Mu Kwa Form (AMOE)',
 modal_subheading: 'Yɛsrɛ wo, hyɛ form no nyinaa ma na woanya bɔɔl (1).',
 name: 'Din Nyinaa',
 email: 'Email Adrɛs',
 address: 'Post Adrɛs Nyinaa',
 statement: 'Nsɛm A ɛkyerɛ Sɛ Wobɛkɔ Mu',
 statement_placeholder: 'Yɛsrɛ wo, kyerɛ nsɛm tiawa bi a ɛkyerɛ wo pɛ sɛ wokɔ Camp Calma bɔɔl no mu.',
 submit: 'Fa kɔ mu kwa kɔ',
 success: 'Meda wo ase! Wo kɔ mu kwa no akɔ. Wobɛnya email bi a ɛkyerɛ sɛ akɔ.',
 close: 'To mu',
 consent_html: 'Me gyina <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Mmra</a> no so na me gyina <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Abataseɛ Ho Nsɛm</a> a ɛfa email ne WhatsApp so a wɔbɛtumi ne me ayɛ nsɛm fa bɔɔl yi ho.',
 whatsapp: 'WhatsApp Nɔmba',
    },
    footer: {
 contact: 'Yɛne wo nkasa',
 follow_us: 'Fa yɛn di dwuma',
 youtube_channel: 'YouTube Dwumadie',
    },
    payment_success: {
 heading: "Meda wo ase wo wo mmoa no ho!",
 message: "Wo mmɔhoɔ no ayɛ yie. Wo bɔɔl nɔmba no akɔ wo email mu. Wɔbɛn yɛn!",
    },
    bisafo: {
      heading: "Bɛyɛ Bisafo Nnipa 500 No Mu Baako 🚀",
      subheading: "Bosome biara mmoa · Soronko kwan · Akyɛdeɛ akwanya firi nnipa 450",
      current_members: "Nnipa A Wɔwɔ Hɔ Seesei",
      capacity: "Baabi A Wɔahyɛ",
      sustainability_label: "Botaeɛ A Ɛb���tena Hɔ",
      raffle_label: "Bɔɔl",
      capacity_label: "Baabi Nyinaa Ahyɛ",
      milestone_0_299: "💙 Kɔsi 299: Mfitiaseɛ",
      milestone_300_349: "💚 300–349: Botaeɛ A Ɛbɛtena Hɔ Adu",
      milestone_350_449: "💛 350–449: Soronko Kwan & Dwumadi Ho Amaneɛ",
      milestone_450_500: "���� 450+: Bosome Biara Bɔɔl (te sɛ MacBook)",
      status_building: "Mfitiase��: NGO Nkɔso 💙",
      status_sustainability: "Botaeɛ A Ɛbɛtena Hɔ Adu 💚",
      status_exclusive: "Soronko Kwan & Dwumadi Ho Amaneɛ ✨",
      status_raffles: "Bosome Biara Bɔɔl Abue 🎁",
      benefits_heading: "Bisafo Nnipa No Soronko Mfasoɔ",
      benefit_1: "✅ Soronko kwan kɔ Daniel nkyɛn",
      benefit_2: "📩 Kane amaneɛ fa dwumadi ho",
      benefit_3: "🎥 Soronko nsɛm & mpɔtam ho nsɛm foforɔ",
      benefit_4: "🎁 Akyɛdeɛ akwanya firi nnipa 450+",
      cta_button: "Bɛyɛ Nnwumani Seesei"
    },
    bisafo_about: {
      heading: "Ɛfa Bisafo Circle Ho",
      subheading: "Sankofa Living & Learning kuromfow mimofo kurom",
      feature_founders: "Founders Club",
      feature_safe_harbor: "Safe Harbor",
      feature_shared_learning: "Shared Learning",
      feature_monthly_raffles: "Monthly Raffles",
      background: "“Bisafo” firi Twi kasa mu na ɛkyerɛ “ɛhwehwɛfo, asuafo ne wɔn a wɔbisabisa”. Wɔ Camp Calma mu, Bisafo Circle yɛ Founders Club — nnuanom a wɔhyia na wɔhwehwɛ, hu ade na wɔsua bom. Bisafo Sunsum ne anibuei, asuae fa, ne akwantu — Camp Calma akoma b��.",
      exclusivity: "Membifo 500 a edi kan na wɔb��yɛ Bisafo Circle soronko no, na wɔbɛkora wɔn titiriw so wɔ bere nyinaa sɛdeɛ wɔn da so yɛ adwumayɛfo. Akyiri yi, kurom no bɛkɔ so akɔ 5,000 Gold Membifo; nanso Bisafo Circle bɛkɔ so anya adwumayɛfo animuonyam no daa, sɛ wɔda so yɛ nnipa a wɔyɛ adwuma mu.",
      sustainability: "Membifo 500 a ɛda dashboard no so yi ne kuw no a wɔn bosome‑bosome mmoa na ɛma NGO no tena pintinn na ɛma bosome biara bɔɔl yɛ yiye.",
      benefits_title: "Mfaso a Membifo nya",
      benefits: [
        "🌱 50% turun tram wɔ Camp Calma tena (Bisafo Circle), 30% ma Gold Membifo.",
        "�� Kwan kɔ akyɛde kɛse ne akyɛde‑kɛse kuo mu (te sɛ asase, campervan) bere a yɛdu Srade so.",
        "📚 Kwan kɔ dijital nneɛma (Permaculture Guide, nnuan, yoga, ade kyeŋkyerɛ).",
        "🗳️ Nea ɛkɔ so wɔ workshops, amanneɛ, ne kurom adwuma ho mu tumi ka mu.",
        "🎥 Live/stream anɔpa a ɛyɛ soronko, kuromfrɔmfrɔm nkɔmmɔ, ne retreat nhwehwɛmu.",
        "📝 Din bɛda so wɔ website/social/video so sɛ adwumayɛfo a mokoaa."
      ],
      info_box: "Bisafo Circle (Membifo 500) na ɛyɛ Founders Club no. Akyiri no, kurom no bɛkɔ 5,000 Gold Membifo — nanso Bisafo Circle bɛkɔ so anya adwumayɛfo tumi ne hokwan titiriw no daa.",
      narrative_title: "Dwumadie “Safe Harbor” ne Wo‑ariwo (Autarky)",
      narrative: "Eyi yɛ kɛse sen bɔɔl. Wo mmoa yɛ akwadworoma ma nipasu ne kurom mu gyinabere — sikasɛm a wode si Safe Harbor a ɛyɛ sukuu, kurom, ne wo ara wo ho adwuma mu. Camp Calma ne Sankofa pɛ sɛ wɔhyɛ nkɔso wɔ abrabɔ‑wɔ‑ho adwuma ne gyinabere mu."
    }
  },
  ig: {
    nav: {
      description: 'Ihe oru',
      donate: 'Nyere aka & Merie',
      prizes: 'Onyinye',
      faq: 'Ajụjụ'
    },
    hero: {
      support_fairs_heading: 'Soro mee ka anyi gara ngosi!',
      support_fairs_text: 'Nye aka NGO Sankofa Living & Learning na oru anyi Camp Calma ka ha nwee ike ịga ngosi Reiselust, Fisch & Feines na Caravan Bremen. Onyinye gi na-akwụ ụgwọ ebe e ji guo, njem na ihe eji eme ka ndụ na-adigide pụta ìhè!',
      donate_button: 'Nyefe onyinye',
      every_donation_text: 'Onyinye ọ bụla na-eburu anyi nso ebumnuche anyi. Daalụ maka nkwado gị!',
      subheading: 'Soro nrọ kwadoo, nweta onyinye mara mma',
      heading: 'Nyere aka wuo Camp Calma na Portugal',
      cta: 'Nyefee ugbu a & nweta tiketi mgbasa'
    },
    video: {
      heading: 'Lee Camp Calma n\'omume',
      youtube_link: 'https://www.youtube.com/embed/sG3dgRxuIHc?rel=0'
    },
    victron: {
      heading: 'Pụọrụ Victron Energy',
      subheading: 'Hụ ike anyanwụ anyị n\'oge dị adị.',
      open_fullscreen: 'Mepee ihuenyo dum maka dashboard zuru ezu'
    },
    african_campers: {
      heading: '���gbọ njem mepụtara site n\'akpụkpọ Afrịka – Echiche anyị',
      text: 'Na Camp Calma na Sankofa Living & Learning, ọtụtụ echiche na oru jikọtara ọmụma, omenala na ndụ na-adigide. Daniel na-eweta ahụmịhe site n\'uwa caravan, ndụ n\'enweghị grid na ọrụ ya gara aga dịka onye njikwa ogo na ụlọ ọrụ ụgbọ ala. Site na nke a, e bidoro echiche ịmepụta caravans kpaliri Afrịka — a na-emepụta ya na Ghana, ebufere ụwa niile, ma kpalie ndị mmadụ ịga Ghana maka njem na njem nleta. Ebumnuche a kwe omume, mana ọ bụ naanị site n\'ịrụkọ ọrụ ọnụ: anyị chọrọ ndị na-etinye aka ma ọ bụ onyinye ka Sankofa Living & Learning nwee ike imezu ọrụ ndú a.'
    },
    press: {
      heading: 'Na telivishọn na akwụkwọ akụkọ',
      subheading: 'Afọ nke ọrụ aka n’ịgbanwe campervan — iwulite ntụkwasị obi site n’ọha.',
      video_cta: 'Lelee na YouTube',
      article_cta: 'Gụọ akụkọ ahụ'
    },
    description: {
      heading: 'Banyere Camp Calma',
      p1: 'Camp Calma bụ oru Sankofa Living & Learning, NGO nke na-ewu ebe obibi na ebe mmụta na-emeghari. Nime Portugal, Camp Calma bu n’obi ka ọ bụrụ ebe obibi mmụta nke onwe na ebe mgbaghara maka obodo, okike na uto onwe onye.',
      p2: 'Onyinye gị na-akwado ozugbo iwulite ihe ndị bụ isi, mmemme mmụta na ak���rụngwa na-adigide. Site n’iso na mgbasa anyi, ị naghị enweta ohere nnwere onyinye naanị—ị na-enyekwa aka iwuli ntọala maka ọdịnihu ka mma. 🙏🏽'
    },
    donate: {
      heading: 'Họrọ ogo nkwado gị',
      subheading: 'Onyinye ọ bụla bara uru. Nkwado ka ukwuu pụtara ohere mmeri ka ukwuu!',
      tier1: {
        price: '€10',
        tickets: 'Tiketi 20',
        description: 'Ụzọ dị mma isi gosi nkwado gị.'
      },
      tier2: {
        price: '€20',
        tickets: 'Tiketi 80',
        description: 'Nhọrọ kacha ewu ewu! Tiketi ugboro 4.',
        popular: 'MARA MMA'
      },
      tier3: {
        price: '€30',
        tickets: 'Tiketi 160',
        description: 'Uru kacha mma maka mmetụta kacha ukwuu.'
      },
      button: 'Nyefee & Soro'
    },
    milestones: {
      heading: 'Ebumnuche ego na onyinye',
      subheading: 'Ka anyị na-eru ebumnuche, anyi na-emeghe onyinye ọzọ!',
      current_funding: 'Ego a chịkọtara',
      goal: 'Ebumnuche',
      prize1: 'DJI Mini 3 Pro Fly More Combo',
      prize2: 'DJI Mini 4 Pro',
      prize3: 'MacBook Air M2',
      prize4: 'MacBook Air M3 (Onyinye kacha ibu)',
      unlocked: 'EMEGHELA!'
    },
    countdown: {
      heading: 'Mgbasa ga-akwụsị n\'ime',
      days: 'Ụbọchị',
      hours: 'Awa',
      minutes: 'Nkeji',
      seconds: 'Sekọnd'
    },
    prizes: {
      heading: 'Lezienụ anya na onyinye',
      subheading: 'Ngwaọrụ teknụzụ elu nwere ike bụrụ nke gị.',
      grand_prize: 'Onyinye kacha'
    },
    faq: {
      heading: 'Ajụjụ a na-ajụkarị',
      q1: 'Olee otú mgbasa si arụ ọrụ?',
      a1: 'Maka onyinye ọ bụla, ị na-enweta nọmba tiketi dabere na ogo i họrọ. Mgbe mkpọsa gwụsịrị, a ga-adọta mmeri site n’itughari n’ime tiketi niile. A na-emeghe onyinye dabere na ego a chịkọtara.',
      q2: 'Onyinye m dị nchebe?',
      a2: 'Ee, a na-achịkwa ịkwụ ụgwọ niile site na Stripe nke ọma. Anyi anaghị echekwa ozi ịkwụ ụgwọ gị n’ọrụ anyị.',
      q3: 'Gịnị bụ mgbe a ga-akọwa onye mmeri?',
      a3: 'A ga-adọta onye mmeri ma kọọ ọkwa na Ọgọst 31, 2025, oge na-erughị anya mgbe countdown gwụsịrị. A ga-eziga email kụziere onye mmeri.',
      q4: 'Enwere m ike banye n\'efu?',
      a4: 'Ee, enwere Usoro Nbanye Ozugbo (AMOE). Biko hụ ngalaba "Nbanye n’efu" n’okpuru maka ntuziaka esi soro na-enweghị onyinye.'
    },
    amoe: {
      title: 'Usoro Nbanye Ozugbo (Nbanye n’efu)',
      button_text: 'Pịa ebe a maka f���m nbanye n’efu',
      modal_heading: 'Fọm nbanye n’efu (AMOE)',
      modal_subheading: 'Biko juo fọm a nke ọma ka i nwetaghachi otu (1) tiketi mgbasa.',
      name: 'Aha zuru ezu',
      email: 'Adreesị email',
      address: 'Adreesị ozi‑ozi zuru ezu',
      statement: 'Okwu nbanye',
      statement_placeholder: 'Biko dee okwu mkpirikpi na-egosi mmasị eziokwu gị isonye na mgbasa Camp Calma.',
      submit: 'Zipu nbanye n��efu',
      success: 'Daalụ! Nbanye gị n’efu eziputela. Ị ga-enweta email nkwenye n’oge na-adịghị anya.',
      close: 'Mechie',
      consent_html: 'Anabata m <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Usoro</a> ma na-aghọta <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Nzere nzuzo</a>, tinyekwara ikike ịkpọtụrụ m site na email na WhatsApp gbasara mgbasa a.',
      whatsapp: 'Nọmba WhatsApp'
    },
    footer: {
      contact: 'Kpọtụrụ anyị',
      follow_us: 'Soro anyị',
      youtube_channel: 'Òdù YouTube'
    },
    payment_success: {
      heading: 'Daalụ maka nkwado gị!',
      message: 'A rụchaaala ịkwụ ụgwọ gị nke ọma. A zigara nọmba tiketi gị na email gị. Ka chi nyere gị!'
    },
    bisafo: {
      heading: 'Jikọọ na Otu Bisafo 500 🚀',
      subheading: 'Nkwado ọnwa · Ntinye ozugbo · Oge mmeri site na ndị 450',
      current_members: 'Ụmụsonye ugbu a',
      capacity: 'Ọnụ ọgụgụ kacha',
      sustainability_label: 'Ebumnuche ịdịgide',
      raffle_label: 'Mgbasa',
      capacity_label: 'Ejuola',
      milestone_0_299: '💙 Ruo 299: Oge owuwu',
      milestone_300_349: '💚 300–349: Idịgide ruru',
      milestone_350_449: '💛 350–449: Ntinye pụrụ iche & Ụzọ ọmụma',
      milestone_450_500: '���� 450+: Mgbasa kwa ọnwa (dịka MacBook)',
      status_building: 'Oge mmalite: ��zụlite NGO 💙',
      status_sustainability: 'Idịgide ruru 💚',
      status_exclusive: 'Ntinye pụrụ iche & Ụbọchị omume ✨',
      status_raffles: 'Mgbasa kwa ọnwa emeghe 🎁',
      benefits_heading: 'Uru pụrụ iche maka ndị Bisafo',
      benefit_1: '✅ Ntinye pụrụ iche na Daniel',
      benefit_2: '📩 Ozi mbụ maka omume',
      benefit_3: '🎥 Ihe pụrụ iche & mmelite obodo',
      benefit_4: '🎁 Oge mmeri site na ndị 450+',
      cta_button: 'Banye ugbu a'
    },
    bisafo_about: {
      heading: 'Banyere Otu Bisafo',
      subheading: 'Obodo pụrụ iche nke Sankofa Living & Learning',
      feature_founders: 'Otu Ndị guzobere',
      feature_safe_harbor: 'Safe Harbor',
      feature_shared_learning: 'Mmụta ọnụ',
      feature_monthly_raffles: 'Mgbasa kwa ọnwa',
      background: '“Bisafo” sitere na asụsụ Twi nke Ghana ma pụtara “ndị na-achọ, ndị na-amụta, na ndị na-ajụ ajụjụ.” Na Camp Calma, Otu Bisafo bụ Otu Ndị guzobere — netwọkụ nke ndị pionia na-enyocha, na-achọpụta na na-amụta ọnụ. Mmụọ Bisafo bụ ọchịchọ ịmata ihe, mmụta ọnụ na njem — obi na‑agba nke Camp Calma.',
      exclusivity: 'Ndị otu 500 mbụ na-eme Otu Bisafo pụrụ iche ma ga-edobe uru ha dịka nd��� guzobere ruo mgbe ha ka nọ n’ọrụ. Mgbe e mesịrị, obodo ga-eto ruo ndị otu 5,000 Gold, ebe Otu Bisafo na-edobe ọnọdụ pụrụ iche nke ndị guzobere.',
      sustainability: 'Ndị otu 500 mbụ — gosiri na dashboard — bụ ndị na-enye onyinye kwa ọnwa nke na‑echekwa ịdịgide NGO ma mepee mgbasa kwa ọnwa.',
      benefits_title: 'Uru ndị otu',
      benefits: [
        '🌱 Nchekwa 50% na ibi na Camp Calma (Otu Bisafo), 30% maka Ndị otu Gold.',
        '🎁 Njikọ na onyinye pụrụ iche na nnukwu onyinye (dịka ala, campervan) mgbe e ruru milestones.',
        '📚 Ọnụ ụzọ n’akụrụngwa dijitalụ (Permaculture Guide, nri, yoga, ihe mmụta).',
        '🗳️ Nsonye na mkpebi n’ogbako, ihe omume na oru obodo.',
        '🎥 Ihe omume live/stream pụrụ iche, oku obodo, nlele retreats.',
        '📝 Aha a ga‑egosi na websaịtị/social/vidiyo dịka ndị na-akwado guzobere.'
      ],
      info_box: 'Otu Bisafo (Ndị otu 500) na-eme Otu Ndị guzobere. Mgbe e mesịrị, obodo ga-eto ruo 5,000 Ndị otu Gold — ma Otu Bisafo ga-anọgide na-enwe uru pụrụ iche nke ndị guzobere.',
      narrative_title: 'Ọrụ “Safe Harbor” & Autarky',
      narrative: 'Eziokwu karịrị lotiri: onyinye gị bụ mmanụ ụgbọala maka ịd��te aka onwe na nke obodo — itinye ego na iwuli Safe Harbor: ebe mmụta, obodo na onwe‑onwe n’ọrụ. N’ịkọrịta aka, Camp Calma na Sankofa na‑kpali mmegharị nke ndụ onwe‑onwe na ịdịte aka.'
    }
  },
};

// NL translations appended after base translations
const nlTranslations = {
  nav: {
    description: 'Het Project',
    donate: 'Doneer & Win',
    prizes: 'Prijzen',
    faq: 'FAQ',
  },
  hero: {
    support_fairs_heading: 'Steun onze beursdeelnames!',
    support_fairs_text: 'Help de NGO Sankofa Living & Learning en ons project Camp Calma aanwezig te zijn op de beurzen Reiselust, Fisch & Feines en Caravan Bremen. Met jouw donatie betalen we standhuur, reizen en materialen om duurzaam leven zichtbaar te maken!',
    donate_button: 'Doneer',
    every_donation_text: 'Elke donatie brengt ons een stap dichter bij ons doel. Bedankt voor je steun!',
    subheading: 'Steun een droom, win geweldige prijzen',
    heading: 'Help Camp Calma op te bouwen in Portugal',
    cta: 'Doneer nu & ontvang loten',
  },
  video: {
    heading: 'Bekijk Camp Calma in actie',
    youtube_link: 'https://www.youtube.com/embed/sG3dgRxuIHc?rel=0'
  },
  victron: {
    heading: 'Victron Energy Dashboard',
    subheading: 'Krijg realtime inzicht in onze zonne-energie.',
    open_fullscreen: 'Open volledig scherm voor een uitgebreid dashboard met meer informatie'
  },
  african_campers: {
    heading: 'Afrikaans geïnspireerde campers – Onze visie',
    text: 'Bij Camp Calma en Sankofa Living & Learning ontstaan veel creatieve ideeën en projecten die kennis, cultuur en duurzaam leven verbinden. Daniel brengt ervaring mee uit de caravanwereld, off‑grid leven en zijn eerdere werk als kwaliteitsmanager in de auto-industrie. Hieruit is de visie gegroeid om Afrikaans geïnspireerde caravans te ontwikkelen — gebouwd in Ghana, wereldwijd geëxporteerd en een impuls om reizen en toerisme naar Ghana te inspireren. Dit doel is realistisch, maar alleen samen mogelijk: we hebben mensen nodig die zich inzetten voor zulke projecten — of donaties zodat Sankofa Living & Learning deze pioniersinitiatieven kan realiseren.'
  },
  press: {
    heading: 'Op tv en in de pers',
    subheading: 'Jaren aan praktijkervaring met camperombouw — vertrouwen door zichtbaarheid in de media.',
    video_cta: 'Bekijk op YouTube',
    article_cta: 'Lees het artikel'
  },
  description: {
    heading: 'Over Camp Calma',
    p1: 'Camp Calma is een project van Sankofa Living & Learning, een NGO die zich inzet voor regeneratieve woon- en leeromgevingen. Gelegen in het hart van Portugal wil Camp Calma een off‑grid educatieve woonplek zijn en een toevluchtsoord voor gemeenschap, natuur en persoonlijke groei.',
    p2: 'Jouw bijdrage financiert direct de bouw van essentiële infrastructuur, onderwijsprogramma\'s en duurzame middelen. Door deel te nemen aan onze verloting krijg je niet alleen kans op geweldige prijzen — je helpt ook mee aan een fundament voor een betere toekomst. 🙏🏽'
  },
  donate: {
    heading: 'Kies je steunniveau',
    subheading: 'Elke bijdrage telt. Meer steun betekent meer winkansen!',
    tier1: { price: '€10', tickets: '20 Loten', description: 'Een mooie manier om je steun te tonen.' },
    tier2: { price: '€20', tickets: '80 Loten', description: 'Onze populairste keuze! 4x zoveel loten.', popular: 'POPULAIR' },
    tier3: { price: '€30', tickets: '160 Loten', description: 'Beste waarde voor de grootste impact.' },
    button: 'Doneer & Doe mee',
  },
  milestones: {
    heading: 'Financieringsmijlpalen & Prijzen',
    subheading: 'Naarmate we doelen halen, ontgrendelen we meer geweldige prijzen voor de verloting!',
    current_funding: 'Huidige financiering',
    goal: 'Doel',
    prize1: 'DJI Mini 3 Pro Fly More Combo',
    prize2: 'DJI Mini 4 Pro',
    prize3: 'MacBook Air M2',
    prize4: 'MacBook Air M3 (Hoofdprijs)',
    unlocked: 'VRIJGESPEELD!'
  },
  countdown: {
    heading: 'Verloting eindigt over',
    days: 'Dagen', hours: 'Uren', minutes: 'Minuten', seconds: 'Seconden'
  },
  prizes: {
    heading: 'Een nadere blik op de prijzen',
    subheading: 'High‑tech gadgets kunnen van jou zijn.',
    grand_prize: 'Hoofdprijs'
  },
  faq: {
    heading: 'Veelgestelde vragen',
    q1: 'Hoe werkt de verloting?',
    a1: 'Voor elke donatie ontvang je een aantal loten op basis van het gekozen niveau. Na afloop wordt een winnaar willekeurig getrokken uit alle uitgegeven loten. Prijzen worden ontgrendeld op basis van het totaal opgehaalde bedrag.',
    q2: 'Is mijn donatie veilig?',
    a2: 'Ja, alle betalingen verlopen veilig via Stripe. We slaan geen betaalgegevens op onze servers op.',
    q3: 'Wanneer wordt de winnaar bekendgemaakt?',
    a3: 'De winnaar wordt getrokken en bekendgemaakt op 31 augustus 2025, kort na het einde van de countdown. De winnaar krijgt bericht per e‑mail.',
    q4: 'Kan ik gratis meedoen?',
    a4: 'Ja, er is een Alternatieve ToegangsMethode (AMOE). Zie de sectie "Gratis Meedoen" hieronder voor instructies om zonder donatie deel te nemen.'
  },
  amoe: {
    title: 'Alternatieve Toegangsmethode (Gratis meedoen)',
    button_text: 'Klik hier voor het gratis deelnameformulier',
    modal_heading: 'Gratis deelnameformulier (AMOE)',
    modal_subheading: 'Vul het formulier volledig in om één (1) lot te ontvangen.',
    name: 'Volledige naam',
    email: 'E‑mailadres',
    address: 'Volledig postadres',
    statement: 'Motivatie',
    statement_placeholder: 'Schrijf kort waarom je graag wilt deelnemen aan de Camp Calma‑verloting.',
    submit: 'Gratis deelname verzenden',
    success: 'Bedankt! Je gratis deelname is verzonden. Je ontvangt zo spoedig mogelijk een bevestiging per e‑mail.',
    close: 'Sluiten',
    consent_html: 'Ik accepteer de <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Voorwaarden</a> en heb kennisgenomen van de <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Privacyverklaring</a>, inclusief toestemming om per e‑mail en WhatsApp over deze verloting benaderd te worden.',
    whatsapp: 'WhatsApp‑nummer'
  },
  footer: {
    contact: 'Neem contact op',
    follow_us: 'Volg ons',
    youtube_channel: 'YouTube‑kanaal'
  },
  payment_success: {
    heading: 'Bedankt voor je steun!',
    message: 'Je donatie is succesvol verwerkt. Je lotnummers zijn naar je e‑mail verzonden. Succes!'
  },
  bisafo: {
    heading: 'Word deel van de 500 Bisafo‑leden 🚀',
    subheading: 'Maandelijkse steun · Directe toegang · Winkansen vanaf 450 leden',
    current_members: 'Huidige leden',
    capacity: 'Beperkte plaatsen',
    sustainability_label: 'Duurzaamheidsdoel',
    raffle_label: 'Verloting',
    capacity_label: 'Capaciteit bereikt',
    milestone_0_299: '💙 Tot 299: Opbouwfase',
    milestone_300_349: '💚 300–349: Duurzaamheid behaald',
    milestone_350_449: '💛 350–449: Exclusieve toegang & event‑meldingen',
    milestone_450_500: '💜 450+: Maandelijkse verlotingen (bijv. MacBook)',
    status_building: 'Opstartfase: uitbouw van de NGO 💙',
    status_sustainability: 'Duurzaamheid behaald 💚',
    status_exclusive: 'Exclusieve toegang & event‑meldingen ✨',
    status_raffles: 'Maandelijkse verlotingen ontgrendeld 🎁',
    benefits_heading: 'Exclusieve voordelen voor Bisafo‑leden',
    benefit_1: '✅ Exclusieve toegang tot Daniel',
    benefit_2: '📩 Als eerste bericht over events',
    benefit_3: '🎥 Exclusieve content & community‑updates',
    benefit_4: '🎁 Winkansen vanaf 450+ leden',
    cta_button: 'Word nu lid'
  },
  bisafo_about: {
    heading: 'Over de Bisafo‑kring',
    subheading: 'De exclusieve community van Sankofa Living & Learning',
    feature_founders: 'Founders Club',
    feature_safe_harbor: 'Veilige haven',
    feature_shared_learning: 'Samen leren',
    feature_monthly_raffles: 'Maandelijkse verlotingen',
    background: '“Bisafo” komt uit het Twi van Ghana en betekent “de zoekenden, lerenden en vragers”. Bij Camp Calma is de Bisafo‑kring de Founders Club — een netwerk van pioniers die samen ontdekken en leren. De Bisafo‑geest is nieuwsgierigheid, samen leren en avontuur — het kloppende hart van Camp Calma.',
    exclusivity: 'De eerste 500 leden vormen de exclusieve Bisafo‑kring en behouden hun bijzondere founders‑voordelen zolang ze actief blijven. Later groeit de community naar 5.000 Gold‑leden, terwijl de Bisafo‑kring de unieke founder‑status behoudt.',
    sustainability: 'Deze eerste 500 leden — zichtbaar op het dashboard — vormen de groep waarvan de maandelijkse bijdragen de duurzaamheid van de NGO waarborgen en maandelijkse verlotingen mogelijk maken.',
    benefits_title: 'Ledenvoordelen',
    benefits: [
      '🌱 50% korting op verblijven bij Camp Calma (Bisafo‑kring), 30% voor Gold‑leden.',
      '🎁 Toegang tot exclusieve prijzengroepen en hoofdprijzen (bijv. grond, camper) zodra mijlpalen zijn bereikt.',
      '📚 Toegang tot digitale resources (Permacultuurgids, recepten, yoga, leermateriaal).',
      '🗳️ Medezeggenschap bij workshops, events en community‑projecten.',
      '🎥 Exclusieve live/stream‑events, community‑calls, retreat‑previews.',
      '📝 Naamsvermelding op website/social/video als founding supporters.'
    ],
    info_box: 'De Bisafo‑kring (500 leden) vormt de Founders Club. Later groeit de community naar 5.000 Gold‑leden — maar de Bisafo‑kring behoudt blijvend zijn unieke founder‑privileges.',
    narrative_title: 'Project “Veilige Haven” & Autarkie',
    narrative: 'Dit is meer dan een loterij. Jouw bijdrage is een aanjager van persoonlijke en gemeenschaps‑resilience — een investering in het bouwen van een Veilige Haven: een plek voor leren, community en praktische zelfredzaamheid.'
  }
};
translations.nl = nlTranslations;

// --- HELPER COMPONENTS ---

// ShadCN-style Button Component
const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseClasses =
 'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  const variants = {
    default: 'bg-green-600 text-white hover:bg-green-700',
    destructive:
 'bg-red-500 text-destructive-foreground hover:bg-red-600',
    outline:
 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary:
 'bg-gray-200 text-secondary-foreground hover:bg-gray-300',
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

const LanguageToggle = ({ language, setLanguage }) => {
  const orderedLanguages = ['en', 'pt', 'de', 'nl', 'twi', 'ig'];
  const tooMany = orderedLanguages.length > 5;
  const [open, setOpen] = useState(false);

  if (!tooMany) {
    return (
      <div className="flex items-center space-x-2">
        {orderedLanguages.map((langCode) => (
          <Button
            key={langCode}
            variant="ghost"
            className={`px-3 py-1 rounded-md font-bold uppercase transition-colors border ${
              language === langCode
                ? 'bg-green-600 text-white border-green-600'
                : 'bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300'
            }`}
            onClick={() => setLanguage(langCode)}
          >
            {langCode.toUpperCase()}
          </Button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className="px-3 py-1 rounded-md font-bold uppercase transition-colors border bg-gray-200 text-gray-700 border-gray-300 hover:bg-gray-300 flex items-center"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        {language.toUpperCase()}
        <ChevronsUpDown className="ml-2 h-4 w-4" />
      </Button>
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
          <ul role="listbox" className="py-1">
            {orderedLanguages.map((langCode) => (
              <li key={langCode}>
                <button
                  role="option"
                  aria-selected={language === langCode}
                  className={`w-full text-left px-3 py-2 text-sm ${
                    language === langCode
                      ? 'bg-green-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setLanguage(langCode);
                    setOpen(false);
                  }}
                >
                  {langCode.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

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

const PartnersSection = ({ t, language }) => {
  const headingByLang = {
    en: 'Partners & Cooperations',
    pt: 'Parceiros & Colaborações',
    de: 'Partner & Kooperationen',
    nl: 'Partners & Samenwerkingen',
    twi: 'Adwumayɛ Mmoafoɔ & Nkitahodie',
    ig: 'Ndị mmekọ & Mmekọrịta',
  };
  const heading = (t.partners && t.partners.heading) || headingByLang[language] || 'Partners & Cooperations';

  const partners = [
    {
      name: 'Social Impact gGmbH',
      url: 'https://socialimpact.eu/',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F33bd29194969431aaef18ad3b20e1eae?format=webp&width=800',
      alt: 'Social Impact gGmbH logo'
    },
    {
      name: 'OUTO (Opening Up The Outdoors)',
      url: 'https://openinguptheoutdoors.com/',
      image: 'https://openinguptheoutdoors.com/_nuxt/logo-OUTO.ClSsF2Js.svg',
      alt: 'Opening Up The Outdoors logo'
    },
    {
      name: 'Black Hills Events',
      url: 'https://www.blackhillseventslx.com/events',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F390f7ed5d9fc423495e1ac9f8c8c6c56?format=webp&width=800',
      alt: 'Black Hills Events organizer logo'
    },
    {
      name: 'Little Ashé',
      url: 'https://littleashe.com/',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Ff9987985104e4a45b8874887eb3b24c1?format=webp&width=800',
      alt: 'Little Ashé logo'
    },
    {
      name: 'Nilua',
      url: 'https://www.instagram.com/niluamusic/',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F75acdbea0432443b9480a27a287ca35c?format=webp&width=800',
      alt: 'Nilua artist profile image placeholder'
    },
    {
      name: 'Oatsfield',
      url: 'https://open.spotify.com/artist/3qlEq77dXOPyIjBCBd289Z',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Fd7c6f660724a4c9597fe4ed002d76674?format=webp&width=800',
      alt: 'Oatsfield release link logo'
    },
    {
      name: 'Jesse Jaxx',
      url: 'https://open.spotify.com/artist/62heZ2iBAWCnfSB356VHR0',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F96067d6067b740fc981bce2c08ac3142?format=webp&width=800',
      alt: 'Jesse Jaxx profile links'
    },
    {
      name: 'KCLAB',
      url: 'https://www.instagram.com/kclab.media/?hl=en',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F9044807b0e6e491380aeeca84fd45cfc?format=webp&width=800',
      alt: 'KCLAB Colours Matter logo'
    },
  ];

  return (
    <section id="partners" className="py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm font-semibold tracking-wider text-gray-500 uppercase text-center">{heading}</h2>
        <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {partners.map((p) => (
            <li key={p.name} className="bg-gray-50 border rounded-md px-3 py-4 text-center flex flex-col items-center">
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="group inline-block">
                <div className="w-full flex items-center justify-center">
                  <img src={p.image} alt={p.alt} className="h-16 object-contain" />
                </div>
                <span className="mt-2 block text-gray-700 text-sm font-medium">{p.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

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
        </div>
      </div>
    </div>
  </section> // Added closing div tag here
);

const VideoSection = ({ t }) => {
 const videoId = t.video.youtube_link.split('/').pop().split('?')[0]; // Extract video ID
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t.video.heading}</h2>
        </div>
        <div className="relative w-full max-w-4xl mx-auto" style={{ paddingBottom: '56.25%', height: 0 }}>
          <iframe className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

// NEW: Safe Harbor Initiative section (multilingual using existing language state)
const SafeHarborSection = ({ t, language }) => {
  const langKey = ['en','pt','de','twi','ig','nl'].includes(language) ? language : 'en';
  const content = {
    en: {
      heading: 'The Safe Harbor Initiative and Project Akoma 2025',
      sub: 'A movement for resilience and autonomy',
      features: [
        { icon: '🌊', title: 'Why & Vision', text: 'A real and digital harbor for learning, community and self‑reliance.' },
        { icon: '⚡', title: 'Akoma 2025: The Accelerator', text: 'Funding that speeds up impact — not a lottery.' },
        { icon: '🎁', title: 'Head‑Start Chance', text: 'Chances to win tangible assets like land or a campervan.' },
        { icon: '🤝', title: 'Lived Through the Bisafo Circle', text: 'Workshops, retreats, courses and community events in Portugal.' }
      ],
      p1: 'A shared promise: a real and digital harbor where we learn, build community and practice self‑reliance — especially when times are uncertain.',
      p2: 'Akoma 2025 turns fundraising into momentum: together we accelerate impact, empower action and unlock head‑start chances that fuel the build‑out.',
      p3: 'Supporters can access a concrete head‑start option — chances to win tangible assets (e.g., land or a campervan) that help propel the build‑out.',
      listTitle: 'Interconnections and Interfaces',
      bullets: [
        'Vision & Practice: “Safe Harbor” provides the frame and the why; the Bisafo Circle makes it tangible — members actively co‑create the harbor.',
        'Financing & Participation: Akoma 2025 links supporter levels (e.g., Gold) with Bisafo membership and offers exclusive head‑start chances (land, campervan). Every contribution builds the harbor.',
        'Lived Values: Access to workshops, retreats, digital courses, community events, and in‑person gatherings in Portugal — the harbor in practice.',
        'Sankofa NGO’s Role: Co‑determination within the Bisafo Circle and stewardship in the overall narrative; the 500‑member goal secures long‑term sustainability.'
      ],
      rec: 'Website recommendation: Present both concepts together in one coherent section and weave them where appropriate, rather than separating them.'
    },
    de: {
      heading: 'Die Safe‑Harbor‑Initiative & Projekt Akoma 2025',
      sub: 'Eine Bewegung für Resilienz und Autarkie',
      features: [
        { icon: '🌊', title: 'Warum & Vision', text: 'Ein realer und digitaler Hafen für Lernen, Gemeinschaft und Selbstversorgung.' },
        { icon: '⚡', title: 'Akoma 2025: Der Beschleuniger', text: 'Finanzierung, die Wirkung beschleunigt – keine Lotterie.' },
        { icon: '🎁', title: 'Starthilfe‑Chance', text: 'Chancen auf greifbare Werte wie Grundstück oder Campervan.' },
        { icon: '🤝', title: 'Gelebt im Bisafo‑Kreis', text: 'Workshops, Retreats, Kurse und Community‑Events in Portugal.' }
      ],
      p1: 'In einer Zeit zunehmender Unsicherheit wächst das Bedürfnis nach Kontrolle, Resilienz und Eigenverantwortung. Der „Sichere Hafen“ ist unser Leuchtturm: ein physischer und digitaler Ort des Lernens, der Gemeinschaft und gelebter Autarkie – eine Brücke zu einem bewussteren, freien Leben.',
      p2: 'Der Motor dahinter ist „Projekt Akoma 2025: Deine Starthilfe“. Keine Lotterie, sondern ein Beschleuniger: Wir befähigen Menschen, Sicherheit und Lebensqualität aktiv zu gestalten. Jeder Beitrag investiert in reale Werte und den Aufbau – mit einmaliger Starthilfe‑Chance auf greifbare Vermögenswerte (z. B. Grundstück, Campervan). „Akoma“ – das Herz – steht für Ausdauer, Wohlwollen und den gemeinsamen Ruf zur Transformation.',
      p3: 'Dazu gehört eine konkrete Starthilfe‑Option für Unterstützer:innen – mit Chancen auf reale Werte wie Grundstück oder Campervan, die den Aufbau zusätzlich vorantreiben.',
      listTitle: 'Zusammenhänge und Schnittstellen',
      bullets: [
        'Vision & Praxis: „Sicherer Hafen“ gibt Rahmen und Warum; der Bisafo‑Kreis macht ihn erfahrbar – Mitglieder gestalten den Hafen aktiv mit.',
        'Finanzierung & Beteiligung: Akoma 2025 verzahnt Unterstützer‑Level (z. B. Gold) mit der Bisafo‑Mitgliedschaft und bietet exklusive Starthilfe‑Chancen (Grundstück, Campervan). Jeder Beitrag baut mit.',
        'Gelebte Werte: Zugang zu Workshops, Retreats, digitalen Kursen, Community‑Events und Begegnungen in Portugal – die praktische Ebene des Hafens.',
        'Rolle der Sankofa‑NGO: Mitbestimmung im Bisafo‑Kreis und Begleitung der Bewegung im Narrativ; das Ziel von bis zu 500 Mitgliedern stärkt die langfristige Tragfähigkeit.'
      ],
      rec: 'Empfehlung für die Webseite: Die beiden Konzepte nicht strikt trennen, sondern sinnvoll verweben bzw. gemeinsam darstellen.'
    },
    nl: {
      heading: 'Het Safe Harbor‑initiatief en Project Akoma 2025',
      sub: 'Een beweging voor veerkracht en autonomie',
      features: [
        { icon: '🌊', title: 'Waarom & Visie', text: 'Een fysieke en digitale haven voor leren, gemeenschap en zelfredzaamheid.' },
        { icon: '⚡', title: 'Akoma 2025: De versneller', text: 'Financiering die impact versnelt — geen loterij.' },
        { icon: '🎁', title: 'Startkans', text: 'Kansen op tastbare waarde zoals grond of een camper.' },
        { icon: '🤝', title: 'Geleefd via de Bisafo‑kring', text: 'Workshops, retreats, cursussen en community‑events in Portugal.' }
      ],
      p1: 'Een gedeelde belofte: een fysieke en digitale haven waar we leren, gemeenschap bouwen en zelfredzaamheid beoefenen — juist in onzekere tijden.',
      p2: 'Akoma 2025 verandert fondsenwerving in momentum: samen versnellen we impact, versterken we handelen en openen we startkansen die de uitbouw voeden.',
      p3: 'Steuners krijgen een concrete startoptie — kansen op tastbare activa (bijv. grond of een camper) die de uitbouw vooruit helpen.',
      listTitle: 'Samenhang en raakvlakken',
      bullets: [
        'Visie & praktijk: “Safe Harbor” biedt het kader en het waarom; de Bisafo‑kring maakt het tastbaar — leden co‑creëren de haven actief.',
        'Financiering & participatie: Akoma 2025 verbindt steunniveaus (bijv. Gold) met Bisafo‑lidmaatschap en biedt exclusieve startkansen (grond, campervan). Elke bijdrage bouwt mee.',
        'Geleefde waarden: Toegang tot workshops, retreats, digitale cursussen, community‑evenementen en ontmoetingen in Portugal — de haven in de praktijk.',
        'Rol van de Sankofa‑NGO: Medezeggenschap binnen de Bisafo‑kring en stewardship in het geheel; het doel van 500 leden borgt lange‑termijn duurzaamheid.'
      ],
      rec: 'Website‑advies: Toon beide concepten samen in één samenhangende sectie en verweef ze waar passend.'
    },
    pt: {
      heading: 'A Iniciativa Porto Seguro e Projeto Akoma 2025',
      sub: 'Um movimento por resiliência e autonomia',
      features: [
        { icon: '🌊', title: 'Porquê & Visão', text: 'Um porto real e digital para aprendizagem, comunidade e autossuficiência.' },
        { icon: '⚡', title: 'Akoma 2025: O Acelerador', text: 'Financiamento que acelera impacto — não é lotaria.' },
        { icon: '🎁', title: 'Arrancada', text: 'Chances de ganhar ativos tangíveis como terreno ou autocaravana.' },
        { icon: '🤝', title: 'Vive‑se no Círculo Bisafo', text: 'Workshops, retiros, cursos e eventos comunitários em Portugal.' }
      ],
      p1: 'Uma promessa partilhada: um porto real e digital onde aprendemos, criamos comunidade e praticamos autossuficiência — sobretudo em tempos incertos.',
      p2: 'Akoma 2025 transforma a angariação em impulso: aceleramos impacto, fortalecemos a ação e abrimos oportunidades de arrancada que sustentam a construção.',
      p3: 'Inclui ainda uma opção concreta de arrancada para apoiantes — chances de ganhar ativos tangíveis (ex.: terreno ou autocaravana) que aceleram a construção.',
      listTitle: 'Ligações e Interfaces',
      bullets: [
        'Visão & Prática: “Porto Seguro” define o quadro e o porquê; o Círculo Bisafo torna‑o palpável �� membros co‑criam ativamente o porto.',
        'Financiamento & Participação: Akoma 2025 liga níveis de apoio (ex.: Gold) à adesão Bisafo e oferece chances exclusivas de arrancada (terreno, autocaravana). Cada contribuição constrói o porto.',
        'Valores Vividos: Acesso a workshops, retiros, cursos digitais, eventos comunitários e encontros presenciais em Portugal — a prática do porto.',
        'Papel da ONG Sankofa: Codeterminação no Círculo Bisafo e orientação no narrativo global; a meta dos 500 membros assegura sustentabilidade a longo prazo.'
      ],
      rec: 'Recomendação: Apresentar os dois conceitos de forma conjunta e interligada no site.'
    },
    twi: {
      heading: 'Safe Harbor Initiative ne Project Akoma 2025',
      sub: 'Nhyiam a ɛma gyinabere ne wo‑ara‑wo‑ho adwuma so',
      features: [
        { icon: '🌊', title: 'Adɛn & Adwene', text: 'Kuro a ɛwɔ asase so ne online ma sukuu, kurom ne w’ankasa wo ho adwuma.' },
        { icon: '⚡', title: 'Akoma 2025: Ntemkɔ', text: 'Sika a ɛma adwuma tu ntɛm — ɛnyɛ bɔɔl.' },
        { icon: '🎁', title: 'Mfitiaseɛ Kwan', text: 'Akwanya kɔ ade titiriw te sɛ asase anaa campervan.' },
        { icon: '🤝', title: 'Wɔte mu wɔ Bisafo', text: 'Workshops, retreats, nwomasua ne kurom‑afahyɛ wɔ Portugal.' }
      ],
      p1: 'Bɔhyɛ koro: kuro a ɛwɔ asase so ne online a yɛsua, yɛ kurom na yɛdwuma yɛ ade — bere a nneɛma hintaw no koraa.',
      p2: 'Akoma 2025 yɛ ahoɔden ma akwankyerɛ: yɛma adwuma tu ntɛm, yɛma nnipa yɛ adwuma na yɛbue mfitiaseɛ akwanya a ɛma si‑so no tu.',
      p3: 'Aboaboafo nya mfitiaseɛ akwanya ankasa — akwanya nkɔ ade titiriw te sɛ asase anaa campervan a ɛma adwuma no tu ntɛm.',
      listTitle: 'Nkitahodie ne Nhyɛe',
      bullets: [
        'Adwene & Dwumadie: Safe Harbor ma yɛhu asɛm no ase; Bisafo Circle ma ɛyɛ ade a wotumi hu — membifo na wodi kan b�� mu.',
        'Sika & Apɔw: Akoma 2025 de akɛse‑akɛse (te sɛ Gold) hyɛ Bisafo mu na ɛma mfitiaseɛ akyɛde (asase, campervan). Mo bɔ biara boa kuro no si.',
        'Nkwa a wɔte mu: Workshops, retreats, dijital nsɛmma, kurom‑afahyɛ ne Portugal mu nhyiam — Safe Harbor no wɔ adwumayɛ mu.',
        'Sankofa dwuma: Ɔtumi ka ho asɛm wɔ Bisafo mu na ɔkyerɛkwɛ adwuma no mu; botae a ɛyɛ 500 membifo ma NGO no gyina pintinn daa.'
      ],
      rec: 'Kyerɛ nkrata a abien no bom wɔ beae koro so, na mma wɔmmu wɔn ntam kyɛnkyɛn.'
    },
    ig: {
      heading: 'Mmegharị Safe Harbor na Project Akoma 2025',
      sub: 'Mgbatị maka ịdịte aka na onwe‑onwe',
      features: [
        { icon: '🌊', title: 'Gịnị & Ọhụhụ', text: 'Ụzọ ezi na dijitalụ maka mmụta, obodo na onwe‑onwe.' },
        { icon: '⚡', title: 'Akoma 2025: Ngwagharị', text: 'Ego na-eme ka mmetụta na-aga ngwa — ọ bụghị lotiri.' },
        { icon: '🎁', title: 'Oge mbido', text: 'Oge mmeri n’akụkụ ihe di n’aka dị ka ala ma ọ bụ campervan.' },
        { icon: '🤝', title: 'Na‑ebi site n’Otu Bisafo', text: 'Ogbugba ọrụ, retreats, kọọsị na ihe obodo na Portugal.' }
      ],
      p1: 'Nkwekọrịta anyị: ebe ezi na dijitalụ ebe anyị na‑amụta, na‑ewu obodo ma na‑eme onwe‑onwe — karịchaa n’oge enweghị nt��kwasị obi.',
      p2: 'Akoma 2025 na‑agbanwe ịnakọta ego ka ọ bụrụ ịrị elu: ọnụ anyị na‑agbagharị mmetụta, na‑enye mmụọ ọrụ ma na‑emepe ohere mbido nke na‑akwalite owuwu.',
      p3: 'Ndị na‑akwado nwere ike nweta nhọrọ mbido doro anya — ohere mmeri maka ihe di n’aka (dịka ala, campervan) na‑eme ka owuwu bụrụ ngwa ngwa.',
      listTitle: 'Njikọ na njikọ ọrụ',
      bullets: [
        'Echiche & Omume: “Safe Harbor” na-enye okpokoro na ihe kpatara; Otu Bisafo na-eme ka ọ bụrụ ihe a na-ahụ anya — ndị otu na‑kọọ ọrụ ọnụ.',
        'Ego & Nsonye: Akoma 2025 jikọtara ogo nkwado (dịka Gold) na mmemme Bisafo ma nye ohere mbido pụrụ iche (ala, campervan). Onyinye ọ bụla na‑ewu ebe ọdụ a.',
        'Uche Ndụ: Ọnụ ụzọ na ogbako, retreats, kọọsị dijitalụ, ihe obodo na nzute ihu n’ihu na Portugal — ọdụ ahụ n’ọrụ.',
        'Ọrụ Sankofa NGO: Nsonye na mkpebi n’ime Otu Bisafo na nlekọta n’akụkọ ukwu; ebumnuche ndị otu 500 na‑echekwa ịdịgide ogologo oge.'
      ],
      rec: 'Ndụmọdụ websaịtị: Gosipụta echiche abụọ ahụ ọnụ ma jikọta ha nke ọma.'
    }
  }[langKey];

  return (
    <section id="safe-harbor" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">{content.heading}</h2>
          <p className="text-green-700 font-semibold uppercase tracking-wide mb-6">{content.sub}</p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-2xl bg-gradient-to-br from-green-100 via-white to-purple-100 p-6 shadow-lg mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.features && content.features.map((f, i) => (
                <div key={i} className="bg-white/80 backdrop-blur rounded-xl p-4 border">
                  <div className="text-2xl">{f.icon}</div>
                  <div className="mt-2 font-semibold text-gray-800">{f.title}</div>
                  <p className="text-gray-700 text-sm mt-1">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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

const MilestoneTracker2 = ({ t }) => {
  const [currentMembers, setCurrentMembers] = useState(280); // Current member count from API
  const capacity = 500; // Maximum capacity
  const sustainabilityGoal = 300; // Goal for sustainability
  const exclusiveThreshold = 350; // Threshold for exclusive access
  const raffleThreshold = 450; // Threshold for monthly raffles

  const progress = (currentMembers / capacity) * 100;

  // Determine current status message and color based on new 4-tier system
  let statusMessage = t.bisafo.status_building;
  let progressColor = 'bg-blue-500'; // Blue (0-299): Startphase

  if (currentMembers >= 300 && currentMembers <= 349) {
    progressColor = 'bg-green-500'; // Green (300-349): Nachhaltigkeit
    statusMessage = t.bisafo.status_sustainability;
  } else if (currentMembers >= 350 && currentMembers <= 449) {
    progressColor = 'bg-yellow-500'; // Yellow (350-449): Exklusiver Zugang
    statusMessage = t.bisafo.status_exclusive;
  } else if (currentMembers >= raffleThreshold) {
    progressColor = 'bg-purple-500'; // Purple (450-500): Gewinnspiele
    statusMessage = t.bisafo.status_raffles;
  }

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{t.bisafo.heading}</h2>
          <p className="text-lg text-gray-500 mt-2">{t.bisafo.subheading}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Current Numbers */}
          <div className="flex justify-between items-end mb-2 text-gray-600">
            <span className="font-bold text-lg">{t.bisafo.current_members}: {currentMembers}</span>
            <span className="font-bold text-lg">{t.bisafo.capacity}: {capacity}</span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-6 mb-2">
            <div
              className={`${progressColor} h-6 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Status Message */}
          <div className="text-center mb-4">
            <p className="text-lg font-semibold text-gray-700">{statusMessage}</p>
          </div>

          {/* Goal markers/labels */}
          <div className="mt-4 mb-6">
            <div className="grid grid-cols-4 gap-2 text-xs text-gray-500 font-medium">
              <div className="text-left">
                <div className="font-semibold">0</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">300</div>
                <div className="text-xs leading-tight">{t.bisafo.sustainability_label}</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">450</div>
                <div className="text-xs leading-tight">{t.bisafo.raffle_label}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold">500</div>
                <div className="text-xs leading-tight">{t.bisafo.capacity_label}</div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-lg p-4 shadow-sm border mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center">
                <span>{t.bisafo.milestone_0_299}</span>
              </div>
              <div className="flex items-center">
                <span>{t.bisafo.milestone_300_349}</span>
              </div>
              <div className="flex items-center">
                <span>{t.bisafo.milestone_350_449}</span>
              </div>
              <div className="flex items-center">
                <span>{t.bisafo.milestone_450_500}</span>
              </div>
            </div>
          </div>

          {/* Benefits Box */}
          <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <span>{t.bisafo.benefit_1}</span>
              </div>
              <div className="flex items-start gap-2">
                <span>{t.bisafo.benefit_2}</span>
              </div>
              <div className="flex items-start gap-2">
                <span>{t.bisafo.benefit_3}</span>
              </div>
              <div className="flex items-start gap-2">
                <span>{t.bisafo.benefit_4}</span>
              </div>
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center">
            <a
              href="https://donate.stripe.com/14A5kFebJ3n317J9soe3e02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform font-medium"
            >
              {t.bisafo.cta_button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutBisafo = ({ t }) => (
  <section className="py-20 bg-stone-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">{t.bisafo_about.heading}</h2>
        <p className="text-green-700 font-semibold uppercase tracking-wide mb-6">{t.bisafo_about.subheading}</p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-2xl bg-gradient-to-br from-green-100 via-white to-purple-100 p-6 shadow-lg mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border">
              <div className="text-2xl">🚀</div>
              <div className="mt-2 font-semibold text-gray-800">{t.bisafo_about.feature_founders}</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border">
              <div className="text-2xl">🌊</div>
              <div className="mt-2 font-semibold text-gray-800">{t.bisafo_about.feature_safe_harbor}</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border">
              <div className="text-2xl">📚</div>
              <div className="mt-2 font-semibold text-gray-800">{t.bisafo_about.feature_shared_learning}</div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border">
              <div className="text-2xl">🎁</div>
              <div className="mt-2 font-semibold text-gray-800">{t.bisafo_about.feature_monthly_raffles}</div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">{t.bisafo_about.background}</p>
          <p className="text-gray-700 mb-4">{t.bisafo_about.exclusivity}</p>
          <p className="text-gray-700 mb-6">{t.bisafo_about.sustainability}</p>

          <div className="bg-yellow-50 border border-yellow-200 text-yellow-900 rounded-lg p-4 mb-6">
            <p className="text-sm">{t.bisafo_about.info_box}</p>
          </div>

          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.bisafo_about.benefits_title}</h3>
            <ul className="space-y-2 text-gray-700">
              {t.bisafo_about.benefits && t.bisafo_about.benefits.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="leading-6">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-6">
            <a
              href="https://donate.stripe.com/14A5kFebJ3n317J9soe3e02"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-transform font-medium"
            >
              {t.bisafo.cta_button}
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
);

const CountdownTimer = ({ t }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2025-09-15T18:00:00+01:00') - +new Date(); // Set to September 15, 2025 at 18:00, Lisbon timezone
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
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyuTOoexdZskXOV9T_JYdWKlBOai8P3Ydfyl8IzeEyp4CIJnXM2Go7BStYyiBEfPIOcuA/exec';

        e.preventDefault();
        const formData = new FormData(e.target);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                if (response.ok) {
                    setSubmitted(true);
                    console.log('AMOE Submission Successful!', response);
                } else {
                    console.error('AMOE Submission Failed!', response);
                    alert('There was an error submitting your form. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error!', error.message);
                alert('There was an error submitting your form. Please try again.');
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
                            <input type="hidden" name="campaign_id" value="campcalma_2025_08" />
                            <input type="hidden" name="entry_type" value="AMOE" />
                            <input type="hidden" name="ua" value={typeof navigator !== "undefined" ? navigator.userAgent : ""} />

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
            <h3 className="text-2xl font-semibold text-gray-800"><a href="https://amoe.campcalma.sankofa-ngo.org" target="_blank" rel="noopener noreferrer">{t.amoe.title}</a></h3>
            <Button onClick={onOpenModal} variant="link" className="mt-2 text-green-600 text-lg">
                {t.amoe.button_text}
            </Button>
        </div>
    </section>
);


const VictronDashboardSection = ({ t }) => {
  const EMBED_SRC = "https://vrm.victronenergy.com/installation/156972/embed/eb7d8f21";
  const FULLSCREEN_SRC = "https://vrm.victronenergy.com/installation/156972/share/5ae69a73";

  return (
    <section id="victron-dashboard" className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            {t.victron.heading}
          </h2>
          <p className="text-gray-600 mt-1">
            {t.victron.subheading}
          </p>
          <a
            href={FULLSCREEN_SRC}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-700 underline"
          >
            {t.victron.open_fullscreen}
          </a>
        </div>

        {/* Compact, fixed heights */}
        <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden rounded-lg shadow-sm">
          <iframe
            className="absolute inset-0 w-full h-full border-0"
            src={EMBED_SRC}
            title="Victron Energy dashboard for Camp Calma"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

const AfricanInspiredCampersSection = ({ t }) => {
  const collageUrl = "https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Fb72ced2a33444d2bbed8f1453fa71779?format=webp&width=800";
  return (
    <section id="african-inspired-campers" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">{t.african_campers.heading}</h2>
            <p className="text-gray-700 leading-relaxed">{t.african_campers.text}</p>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={collageUrl}
              alt="Fotocollage: African inspired caravans with Kente design, interiors and exteriors"
              className="w-full h-72 sm:h-96 lg:h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const PressCoverageSection = ({ t }) => {
  const YT_ID = 'Ee0JOPpsFPo';
  const YT_EMBED = `https://www.youtube.com/embed/${YT_ID}?rel=0`;
  const ARTICLE_URL = 'https://www.noz.de/deutschland-welt/neo/artikel/vanlife-germany-5-wichtige-tipps-fuer-deinen-bulli-ausbau-vanlife-20026901';
  const images = [
    'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F4ae6db7547024865bd58ebb08934d2aa?format=webp&width=800',
    'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Fb5e8f82f4bff4546a1373a5943dbeae5?format=webp&width=800',
    'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Fe0eea7ebe3e147b19840dd0854419f8f?format=webp&width=800'
  ];
  return (
    <section id="media-trust" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">{t.press?.heading || 'In the Media'}</h2>
          <p className="text-lg text-gray-600 mt-2">{t.press?.subheading}</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-start">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-black/5">
            <div className="relative w-full pt-[56.25%] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={YT_EMBED}
                title="YouTube TV feature"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <a href={`https://www.youtube.com/watch?v=${YT_ID}`} target="_blank" rel="noopener noreferrer" className="block text-center mt-3 text-green-600 hover:text-green-700 font-medium">
              {t.press?.video_cta || 'Watch on YouTube'}
            </a>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-3">
              <img src={images[0]} alt="TV interview during campervan conversion" className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg shadow" />
              <img src={images[1]} alt="Hands-on work on campervan interior" className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg shadow" />
              <img src={images[2]} alt="Workshop scene with open van doors" className="w-full h-40 sm:h-48 lg:h-56 object-cover rounded-lg shadow col-span-2" />
            </div>
            <a href={ARTICLE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-4 text-green-600 hover:text-green-700 font-medium">
              {t.press?.article_cta || 'Read the article'} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

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


// --- Afro Village Progress Section ---
const AfroVillageProgress = ({ language }) => {
  const [totalRaised, setTotalRaised] = useState(325000);
  const goal = 1000000;

  const langKey = ['en','pt','de','twi','ig','nl'].includes(language) ? language : 'en';
  const content = {
    en: {
      title: 'Sankofa Village – A Village of Self‑Sufficiency',
      subtitle: 'Step by step we build a village that lives learning, community and self‑reliance. Every contribution builds with us.',
      storyTitle: 'Why Sankofa Village (Sankofa)',
      currentLabel: 'Current Funding',
      goalLabel: 'Goal',
      legend: [
        '🔵 Planning & Start',
        '🟢 Build‑up & first homes',
        '🟡 Infrastructure & Culture',
        '🟣 Sankofa Village Completed',
      ],
      cta: 'Support now',
      unlockedLabel: 'Unlocked',
      lockedLabel: 'Locked',
      milestones: [
        { amount: 10000, name: 'The Foundation', outcome: 'Planning, basic infrastructure (water/energy), start permaculture design', icon: '🧱📐' },
        { amount: 25000, name: 'The First Home', outcome: 'First autonomous mobile home (show‑home)', icon: '🏠' },
        { amount: 50000, name: 'Community Kitchen', outcome: 'Shared kitchen + solar cooking; food‑forest start', icon: '🍲☀️' },
        { amount: 100000, name: 'Education & Encounters', outcome: 'Learning Dome (workshops, music, digital learning)', icon: '🎓🎶' },
        { amount: 250000, name: 'The Heart', outcome: '3 mobile homes completed; first stays possible', icon: '🧡🛏️' },
        { amount: 500000, name: 'Half the Village', outcome: '5 mobile homes, energy/water center, PV + storage', icon: '⚡💧' },
        { amount: 750000, name: 'Culture & Expansion', outcome: 'AfroBeats stage, creative hub, retreat space', icon: '🥁🎭' },
        { amount: 1000000, name: 'Sankofa Village Completed', outcome: '10 autonomous mobile homes in Sankofa/Camp‑Calma design', icon: '🏡✨' },
      ],
      story: [
        'Autarky means real resilience: water, energy and food on site. Sankofa Village shows how self‑sufficiency can be lived in practice.',
        'Community is the heart: we create spaces that foster encounters, music and culture — a place where people are there for each other.',
        'Learning sets you free: workshops, digital education and doing together build skills that carry — today and tomorrow.'
      ]
    },
    nl: {
      title: 'Sankofa Village – Een dorp van zelfredzaamheid',
      subtitle: 'Stap voor stap bouwen we een dorp dat leren, gemeenschap en zelfredzaamheid leeft. Elke bijdrage bouwt mee.',
      storyTitle: 'Waarom Sankofa Village (Sankofa)',
      currentLabel: 'Huidige financiering',
      goalLabel: 'Doel',
      legend: [
        '🔵 Planning & start',
        '🟢 Opbouw & eerste woningen',
        '🟡 Infrastructuur & cultuur',
        '🟣 Sankofa Village voltooid',
      ],
      cta: 'Steun nu',
      unlockedLabel: 'Vrijgespeeld',
      lockedLabel: 'Vergrendeld',
      milestones: [
        { amount: 10000, name: 'Het fundament', outcome: 'Planning, basisinfrastructuur (water/energie), start permacultuurontwerp', icon: '🧱📐' },
        { amount: 25000, name: 'Het eerste thuis', outcome: 'Eerste autonome mobiele woning (show‑home)', icon: '🏠' },
        { amount: 50000, name: 'Gemeenschapskeuken', outcome: 'Gedeelde keuken + zonne‑koken; start voedselbos', icon: '🍲☀️' },
        { amount: 100000, name: 'Educatie & ontmoetingen', outcome: 'Learning Dome (workshops, muziek, digitaal leren)', icon: '🎓🎶' },
        { amount: 250000, name: 'Het hart', outcome: '3 mobiele woningen voltooid; eerste verblijven mogelijk', icon: '🧡🛏️' },
        { amount: 500000, name: 'De helft van het dorp', outcome: '5 mobiele woningen, energie-/watercentrum, PV + opslag', icon: '⚡💧' },
        { amount: 750000, name: 'Cultuur & uitbreiding', outcome: 'AfroBeats‑podium, creative hub, retreat‑ruimte', icon: '🥁🎭' },
        { amount: 1000000, name: 'Sankofa Village voltooid', outcome: '10 autonome mobiele woningen in Sankofa/Camp‑Calma‑design', icon: '🏡✨' },
      ],
      story: [
        'Zelfredzaamheid betekent echte veerkracht: water, energie en voedsel ter plaatse. Sankofa Village laat zien hoe zelfvoorziening in de praktijk geleefd kan worden.',
        'Gemeenschap is het hart: we creëren ruimtes die ontmoeting, muziek en cultuur stimuleren — een plek waar mensen er voor elkaar zijn.',
        'Leren maakt vrij: workshops, digitaal onderwijs en samen doen bouwen vaardigheden op die dragen — vandaag en morgen.'
      ]
    },
    pt: {
      title: 'Sankofa Village – Uma Aldeia de Autossuficiência',
      subtitle: 'Passo a passo construímos uma aldeia que vive aprendizagem, comunidade e autonomia. Cada contribuição constrói connosco.',
      storyTitle: 'Porquê o Sankofa Village (Sankofa)',
      currentLabel: 'Financiamento Atual',
      goalLabel: 'Meta',
      legend: [
        '🔵 Planeamento & Arranque',
        '🟢 Construção & primeiras casas',
        '🟡 Infraestrutura & Cultura',
        '🟣 Sankofa Village Concluída',
      ],
      cta: 'Apoiar agora',
      unlockedLabel: 'Desbloqueado',
      lockedLabel: 'Bloqueado',
      milestones: [
        { amount: 10000, name: 'O Alicerce', outcome: 'Planeamento, infra‑básica (água/energia), início do design de permacultura', icon: '🧱📐' },
        { amount: 25000, name: 'A Primeira Casa', outcome: 'Primeira casa móvel autossuficiente (show‑home)', icon: '🏠' },
        { amount: 50000, name: 'Cozinha Comunitária', outcome: 'Cozinha partilhada + cozinha solar; início da floresta alimentar', icon: '🍲☀️' },
        { amount: 100000, name: 'Educação & Encontros', outcome: 'Domo de Aprendizagem (workshops, música, educação digital)', icon: '🎓🎶' },
        { amount: 250000, name: 'O Coração', outcome: '3 casas móveis concluídas; primeiras estadias possíveis', icon: '🧡🛏️' },
        { amount: 500000, name: 'Meia Aldeia', outcome: '5 casas móveis, centro de energia/água, PV + armazenamento', icon: '⚡💧' },
        { amount: 750000, name: 'Cultura & Expansão', outcome: 'Palco AfroBeats, Creative Hub, espaço de retiro', icon: '🥁🎭' },
        { amount: 1000000, name: 'Sankofa Village Concluída', outcome: '10 casas móveis autônomas em design Sankofa/Camp‑Calma', icon: '🏡✨' },
      ],
      story: [
        'Autossuficiência é resiliência real: água, energia e alimento no local. O Sankofa Village mostra como viver isso na prática.',
        'Comunidade é o coração: criamos espaços que promovem encontros, música e cultura — um lugar de cuidado mútuo.',
        'Aprender liberta: workshops, educação digital e fazer em conjunto desenvolvem competências para hoje e amanhã.'
      ]
    },
    de: {
      title: 'Sankofa Village – Ein Dorf der Autarkie',
      subtitle: '„Schritt für Schritt bauen wir ein Dorf, das Lernen, Gemeinschaft und Selbstversorgung lebt. Jeder Beitrag baut mit.“',
      storyTitle: 'Warum Sankofa Village (Sankofa)',
      currentLabel: 'Aktueller Stand',
      goalLabel: 'Ziel',
      legend: [
        '🔵 Planung & Start',
        '🟢 Aufbau & erste Häuser',
        '🟡 Infrastruktur & Kultur',
        '🟣 Sankofa Village vollendet',
      ],
      cta: 'Jetzt unterstützen',
      unlockedLabel: 'Freigeschaltet',
      lockedLabel: 'Gesperrt',
      milestones: [
        { amount: 10000, name: 'Der Grundstein', outcome: 'Planung, Basis‑Infra (Wasser/Energie), Start Permakultur‑Design', icon: '🧱📐' },
        { amount: 25000, name: 'Das erste Heim', outcome: 'Erstes autarkes Mobilheim (Show‑Home)', icon: '🏠' },
        { amount: 50000, name: 'Community Kitchen', outcome: 'Gemeinschaftsküche + solar Kochen; Food‑Forest Start', icon: '🍲☀️' },
        { amount: 100000, name: 'Bildung & Begegnung', outcome: 'Learning Dome (Workshops, Musik, digitale Bildung)', icon: '🎓🎶' },
        { amount: 250000, name: 'Das Herzstück', outcome: '3 Mobilheime fertig, erste Übernachtungen möglich', icon: '🧡🛏️' },
        { amount: 500000, name: 'Das halbe Dorf', outcome: '5 Mobilheime, Energie‑/Wasserzentrum, PV + Speicher', icon: '⚡💧' },
        { amount: 750000, name: 'Kultur & Expansion', outcome: 'AfroBeats Stage, Creative Hub, Retreat Space', icon: '🥁🎭' },
        { amount: 1000000, name: 'Sankofa Village vollendet', outcome: '10 autarke Mobilheime im Sankofa/Camp‑Calma‑Design', icon: '🏡✨' },
      ],
      story: [
        'Autarkie heißt echte Resilienz: Wasser, Energie und Nahrung vor Ort. Sankofa Village zeigt, wie Selbstversorgung praktisch gelebt werden kann.',
        'Gemeinschaft ist das Herz: Wir bauen Räume, die Begegnung, Musik und Kultur fördern — ein Ort, an dem Menschen füreinander da sind.',
        'Lernen macht frei: Workshops, digitale Bildung und gemeinsames Tun vermitteln Fähigkeiten, die tragen — heute und morgen.'
      ]
    },
    twi: {
      title: 'Sankofa Village – Kuro a ɛma wo‑ara‑wo‑ho adwuma',
      subtitle: 'Akokyem akokyem na yɛrebɔ kuro a ɛma sukuu, kurom ne wo‑ara‑wo‑ho adwuma te ase. Mo boa biara ka adwuma no ho.',
      storyTitle: 'Adɛn Sankofa Village (Sankofa)',
      currentLabel: 'Sika a ɛkɔ so seisei',
      goalLabel: 'Botaeɛ',
      legend: [
        '🔵 Nhyehyɛe & Mfitiaseɛ',
        '🟢 Siesie & Ofie a edi kan',
        '🟡 Ahyehyɛdeɛ & Amammerɛ',
        '🟣 Sankofa Village Ewiee',
      ],
      cta: 'Boa seisei',
      unlockedLabel: 'Abue',
      lockedLabel: 'Esi so',
      milestones: [
        { amount: 10000, name: 'Fapem', outcome: 'Nhyehyɛe, nneɛma a ɛho hia (nsuo/soɛ), fi‑asase permaculture design', icon: '🧱📐' },
        { amount: 25000, name: 'Ofie a edi kan', outcome: 'Ofie a ɛyɛ wo‑ara‑wo‑ho adwuma (show‑home)', icon: '🏠' },
        { amount: 50000, name: 'Kurom Fufuuwee', outcome: 'Kɔkɔɔ mu aduan + solar didie; food‑forest mfiase', icon: '🍲☀️' },
        { amount: 100000, name: 'Sukuuni & Nhyiamu', outcome: 'Learning Dome (workshops, agoro, dijital sukuu)', icon: '🎓��' },
        { amount: 250000, name: 'Akoma', outcome: 'Mobilhome mmiɛnsa ewiee; teteɛ no betumi asi', icon: '🧡🛏️' },
        { amount: 500000, name: 'Kuro Fã', outcome: 'Mobilhome enum, tumi‑/nsuo‑fi, PV + sie', icon: '⚡💧' },
        { amount: 750000, name: 'Amammerɛ & Ntosoɔ', outcome: 'AfroBeats dibea, Creative Hub, retreat beae', icon: '🥁🎭' },
        { amount: 1000000, name: 'Sankofa Village Ewiee', outcome: 'Mobilhome du a wɔyɛ wo‑ara‑wo‑ho adwuma wɔ Sankofa/Camp‑Calma ho‑nhyehyɛe mu', icon: '🏡✨' },
      ],
      story: [
        'Wo‑ara‑wo‑ho adwuma kyerɛ gyinabere ampa: nsuo, soɛ ne aduan wɔ baabi koro. Sankofa Village kyerɛ kwan a ɛsɛ sɛ yɛte mu daadaa.',
        'Kurom ne akoma: yɛsi beae a ɛma nhyiam, nnwom ne amammerɛ — baabi a nnipa hwɛ wɔn ho so.',
        'Sɛ yɛsua a, yɛde ho: workshops, dijital sukuu ne adwuma‑bom ma akyɛde a ɛkyɛ — ɛnnɛ ne ɔkyena.'
      ]
    },
    ig: {
      title: 'Sankofa Village – Obodo nke onwe‑onwe',
      subtitle: 'Nz�� nke nzọ ka anyị na‑ewu obodo nke na‑ebi mmụta, obodo na onwe‑onwe. Onyinye ọ bụla na‑ewu ya.',
      storyTitle: 'Gịnị mere Sankofa Village',
      currentLabel: 'Ego a chịkọtara',
      goalLabel: 'Ebumnuche',
      legend: [
        '🔵 Nhazi & Mmalite',
        '🟢 Owuwu & Ụlọ mbụ',
        '🟡 Akụrụngwa & Omenala',
        '🟣 Sankofa Village zuru oke',
      ],
      cta: 'Kwado ugbu a',
      unlockedLabel: 'Emeghe',
      lockedLabel: 'Emechiri',
      milestones: [
        { amount: 10000, name: 'Ntọala', outcome: 'Nhazi, akụrụngwa b��� isi (mmiri/ike), mbido permaculture', icon: '🧱📐' },
        { amount: 25000, name: 'Ụlọ Mbụ', outcome: 'Ụlọ njem onwe‑onwe mbụ (show‑home)', icon: '🏠' },
        { amount: 50000, name: 'Kịrịchn Obodo', outcome: 'Kichin kesaa + esi anyanwụ; mmalite food‑forest', icon: '🍲☀️' },
        { amount: 100000, name: 'Mmụta & Nzute', outcome: 'Learning Dome (ogbako, egwu, mmụta dijitalụ)', icon: '🎓🎶' },
        { amount: 250000, name: 'Obi', outcome: 'Ụlọ njem 3 zuru ezu; obibia mbu kwe omume', icon: '🧡🛏️' },
        { amount: 500000, name: 'Obodo Ọkara', outcome: 'Ụlọ njem 5, etiti ike/mmiri, PV + nchekwa', icon: '⚡💧' },
        { amount: 750000, name: 'Omenala & Mbelata', outcome: 'AfroBeats ogbo, creative hub, ebe retreat', icon: '🥁🎭' },
        { amount: 1000000, name: 'Sankofa Village zuru oke', outcome: 'Ụlọ njem 10 onwe‑onwe n\'ime imewe Sankofa/Camp‑Calma', icon: '🏡✨' },
      ],
      story: [
        'Onwe‑onwe pụtara ịdịte aka n\'ezoghị oke: mmiri, ike na nri n\'ebe ahụ. Sankofa Village na-egosi ka esi ebi ndụ onwe‑onwe n\'omume.',
        'Obodo bụ obi: anyị na‑emepụta ebe na‑akwalite nzute, egwu na omenala — ebe ndị mmadụ na‑ele ibe ha anya.',
        'Mmụta na‑ewepụ ngw���gide: ogbako, mmụta dijitalụ na ime ọnụ na‑ewu nkà maka taa na echi.'
      ]
    }
  }[langKey];

  const localeMap = { en: 'en-US', pt: 'pt-PT', de: 'de-DE', nl: 'nl-NL', twi: 'en-GB', ig: 'ig-NG' };

  useEffect(() => {
    const url = import.meta.env.VITE_AFRO_VILLAGE_TOTAL_URL;
    if (!url) {
      console.warn('VITE_AFRO_VILLAGE_TOTAL_URL is not set. Using fallback totalRaised value.');
      return;
    }
    let cancelled = false;
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const v = Number(
          data.totalRaisedAfroVillage ?? data.total ?? data.value ?? data.amount
        );
        if (!cancelled && Number.isFinite(v)) setTotalRaised(v);
      })
      .catch((err) => console.warn('AfroVillage fetch failed, using fallback:', err));
    return () => {
      cancelled = true;
    };
  }, []);

  const segments = [
    { start: 0, end: 100000, colorClass: 'brand-blue-bg', label: 'Planung & Start' },
    { start: 100000, end: 250000, colorClass: 'brand-green-bg', label: 'Aufbau & erste Häuser' },
    { start: 250000, end: 500000, colorClass: 'brand-yellow-bg', label: 'Infrastruktur & Kultur' },
    { start: 500000, end: 1000000, colorClass: 'brand-purple-bg', label: 'Sankofa Village vollendet' },
  ];

  const milestones = content.milestones;

  const currency = (n) => `€${Math.max(0, Math.floor(n)).toLocaleString(localeMap[language] || 'de-DE')}`;
  const progressNow = Math.min(goal, Math.max(0, totalRaised));

  const segmentSpan = (s) => s.end - s.start;
  const segmentContainerWidth = (s) => `${(segmentSpan(s) / goal) * 100}%`;
  const segmentFillWidth = (s) => {
    if (progressNow <= s.start) return '0%';
    if (progressNow >= s.end) return '100%';
    const filled = progressNow - s.start;
    return `${(filled / segmentSpan(s)) * 100}%`;
  };

  return (
    <section id="afro-village" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">{content.title}</h2>
          <p className="text-lg text-gray-600 mt-2">{content.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-end mb-2 text-gray-600">
            <span className="font-bold text-lg">{content.currentLabel}: {currency(progressNow)}</span>
            <span className="font-bold text-lg">{content.goalLabel}: {currency(goal)}</span>
          </div>

          <div
            role="progressbar"
            aria-valuenow={progressNow}
            aria-valuemin={0}
            aria-valuemax={goal}
            className="w-full h-6 rounded-full overflow-hidden bg-gray-200 flex"
          >
            {segments.map((seg, i) => (
              <div key={i} className={`relative h-6 ${i < segments.length - 1 ? 'border-r border-white/60' : ''}`} style={{ width: segmentContainerWidth(seg) }}>
                <div
                  className={`h-6 transition-all duration-500 ${seg.colorClass}`}
                  style={{ width: segmentFillWidth(seg) }}
                />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border mt-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full brand-blue-bg" /> <span>{content.legend[0]}</span></div>
              <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full brand-green-bg" /> <span>{content.legend[1]}</span></div>
              <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full brand-yellow-bg" /> <span>{content.legend[2]}</span></div>
              <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 rounded-full brand-purple-bg" /> <span>{content.legend[3]}</span></div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => {
              const unlocked = progressNow >= m.amount;
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border transition-all duration-500 ${
                    unlocked ? 'bg-green-50 border-green-300 shadow-md ring-1 ring-green-200' : 'bg-gray-100 border-gray-200 opacity-90'
                  }`}
                >
                  <div className={`text-2xl ${unlocked ? 'text-green-600' : 'text-gray-400'}`}>{m.icon}</div>
                  <div className="mt-2 font-semibold text-gray-800">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.outcome}</div>
                  <div className="mt-2 text-xs font-medium text-gray-500">{currency(m.amount)}</div>
                  <span className="sr-only">{unlocked ? content.unlockedLabel : content.lockedLabel}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 bg-white border rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800">{content.storyTitle}</h3>
            <p className="text-gray-700 mt-2">{content.story[0]}</p>
            <p className="text-gray-700 mt-2">{content.story[1]}</p>
            <p className="text-gray-700 mt-2">{content.story[2]}</p>
            <div className="mt-4">
              <a href="#donate" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow">
                {content.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
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
        <PartnersSection t={t} language={language} />
        <ProjectDescription t={t} />
 <VideoSection t={t} />
        <DonationTiers t={t} onDonate={handleDonation} />
        <MilestoneTracker t={t} />
        <AfroVillageProgress language={language} />
        <PrizeShowcase t={t} />
        <CountdownTimer t={t} />
        <MilestoneTracker2 t={t} />
        <SafeHarborSection t={t} language={language} />
        <AboutBisafo t={t} />
        <Faq t={t} />
        <AmoeSection t={t} onOpenModal={() => setIsAmoeModalOpen(true)} />
        <VictronDashboardSection t={t} />
        <AfricanInspiredCampersSection t={t} />
        <PressCoverageSection t={t} />
      </main>
      <Footer t={t} />

      {/* Modals */}
      <AmoeModal t={t} isOpen={isAmoeModalOpen} onClose={() => setIsAmoeModalOpen(false)} />
      <PaymentSuccessModal t={t} isOpen={isPaymentSuccessModalOpen} onClose={() => setPaymentSuccessModalOpen(false)} />
    </div>
  );
}
