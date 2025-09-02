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
      photo1_caption: 'Daniel with Nilua and a Dutch family with kids from the African Diaspora',
      photo3_caption: 'Daniel and Nilua’s son making a bonfire',
      photo4_caption: 'Daniel when he settled at the property 2022',
      photo5_caption: 'Camp Calma in 2022',
      photo6_caption: '2022 - First temporary construction and our new water borehole',
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
      text: 'At Camp Calma and Sankofa Living & Learning, many creative ideas and projects connect knowledge, culture, and sustainable living. Daniel brings experience from the caravanning world, off‑grid life, and his former work as a quality manager in the automotive industry. From this, the vision has grown to develop African��inspired caravans—built in Ghana, exported worldwide, and sparking enthusiasm for travel and tourism to Ghana. This goal is realistic, but only possible together: we need people who commit to such projects—or donations so that Sankofa Living & Learning can make these pioneering initiatives a reality.'
    },
    press: {
      heading: 'Featured in TV and Press',
      subheading: 'Years of hands‑on campervan conversions — building trust through public coverage.',
      video_cta: 'Watch on YouTube',
      article_cta: 'Read the article',
      changemakers_label: 'Changemakers 2024 — Social Impact & OUTO',
      outo_cta: 'Open OUTO Programme',
      social_impact_cta: 'Open Social Impact page'
    },
    founder: {
      heading: 'Founder — Daniel Lateef Duroshola',
      subheading: 'Glimpses of everyday life at Camp Calma — trust and authenticity.',
      instagram_cta: 'Open Instagram'
    },
    description: {
      heading: 'About Camp Calma',
      p1: 'Camp Calma is a project by Sankofa Living & Learning, an NGO dedicated to creating regenerative living and learning spaces. Located in the heart of Portugal, Camp Calma aims to be an off-grid educational homestead and a sanctuary for community, nature, and personal growth.',
      p2: 'Your contribution directly funds the construction of essential infrastructure, educational programs, and sustainable resources. By participating in our raffle, you\'re not just getting a chance to win incredible prizes—you\'re helping build a foundation for a better future. 🙏🏽',
      photo1_caption: 'Daniel with Nilua and a Dutch family with kids from the African Diaspora',
      photo3_caption: 'Daniel and Nilua’s son making a bonfire',
      photo4_caption: 'Daniel when he settled at the property 2022',
      photo5_caption: 'Camp Calma in 2022',
      photo6_caption: '2022 - First temporary construction and our new water borehole',
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
      heading: "Bisafoɔ Circle – Your exclusive membership",
      subheading: "Join the 500 Bisafo Founders · Monthly support · Direct access · Raffles from 450 members",
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
      benefits_heading: "Your Benefits as a Bisafo Member",
      benefit_1: "✅ 50% off Camp Calma stays (Founder), 30% for Gold",
      benefit_2: "🏡 First choice for land & mobile‑home projects (e.g., Afro Village)",
      benefit_3: "🎁 Monthly raffles from 450 members",
      benefit_4: "🎥 Exclusive content, community updates & live events",
      benefit_5: "📝 Name recognition as founding supporter",
      benefit_6: "🔗 Personal referral code for friends",
      benefit_7: "🗣️ Founder: 10‑minute private intro call with Daniel (3 daily slots; booking link after joining; first‑come, first‑served)",
      cta_button: "Become Member Now"
    },
    bisafo_about: {
      heading: "About the Bisafoɔ Circle",
      subheading: "The exclusive community of Sankofa Living & Learning",
      feature_founders: "Founders Club",
      feature_safe_harbor: "Safe Harbor",
      feature_shared_learning: "Shared Learning",
      feature_monthly_raffles: "Monthly Raffles",
      background: "“Bisafo” in Twi (Ghana) refers to the seekers, learners, and questioners. At Camp Calma, the Bisafoɔ Circle is our Founders Club — a network of pioneers exploring and learning together.",
      exclusivity: "The first 500 members form the Bisafoɔ Circle (Founders). Founder status remains while you are active; if you leave, your spot opens for someone new. After that, the community grows to 5,000 Gold Members.",
      pricing: "Founder: €99/year with invite code (instead of €132). Gold: €199/year with invite code (instead of €265). 20% referral commission applies.",
      sustainability: "These first 500 secure the NGO’s sustainability and unlock monthly raffles from 450 members.",
      community_app_and_properties: "With 5,000 members we empower each other through the Sankofa Community App. The NGO can give away one sustainable off‑grid property monthly — now in Portugal; later also Ghana.",
      benefits_title: "Member Benefits",
      benefits: [
        "🌱 50% off Camp Calma stays (Founder), 30% for Gold Members",
        "🏡 First choice for land & mobile‑home projects (e.g., Afro Village)",
        "🎁 Exclusive raffles (monthly from 450 members)",
        "📚 Digital resources (permaculture, recipes, yoga, learning materials)",
        "🗳️ Co‑determination in workshops, events & projects",
        "🎥 Exclusive live/stream events & retreat previews",
        "📝 Name recognition as founding supporters",
        "🗣️ Founder perk: 10‑minute private introduction call with Daniel; booking link after registration; 3 daily slots; first‑come, first‑served"
      ],
      info_box: "The Bisafoɔ Circle (500 Founders) forms the Founders Club. Later the community expands to 5,000 Gold Members — the Bisafoɔ Circle keeps its unique founder privileges.",
      founder_title: "Founder Membership (limited to 500)",
      founder_list: [
        "Regular price: €132/year",
        "With invite code: €99/year",
        "20% commission (€19.80) to the referrer — €79.20 remains with the NGO",
        "Founder status lasts only while you are a member",
        "If you leave, your spot becomes available to a new person",
        "Founder perk: 10‑minute private call with Daniel to connect and explore mutual support.",
        "Scheduling: three 10‑minute slots per day; first‑come, first‑served.",
        "After joining, you receive the booking link to schedule your introduction call."
      ],
      gold_title: "Gold Membership (members 501–5,000)",
      gold_list: [
        "Regular price: €265/year",
        "With invite code: €199/year",
        "20% commission (€39.80) to the referrer — €159.20 remains with the NGO",
        "For all new members after the 500 Founders"
      ],
      referral_title: "Your personal referral code",
      referral_text: "Each member receives a personal referral code after joining. We trust personal recommendations over anonymous ads. The commission is appreciation — it strengthens you and the community.",
      future_title: "Future: Normal memberships (unlimited, after 5,000)",
      future_list: [
        "Price: €132/year (≈ like Bisafo)",
        "Benefits: 10% off Camp Calma stays; participation in general votes",
        "Not included: no access to exclusive livestreams & founders events; no premium raffles; no property project privileges; fewer voting rights",
        "Only 500 founder spots; if someone leaves, the spot becomes free (waitlist)",
        "This keeps the Bisafoɔ Circle permanently at 500"
      ],
      narrative_title: "Our shared spirit",
      narrative: "The Bisafoɔ Circle is more than a membership. It shows that as African diaspora we are strong together when we support each other: we build sustainable projects independent of grants, and rely on mutual strength, knowledge and community. Every contribution, recommendation and membership strengthens not only the NGO, but also unity, pride and independence."
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
      article_cta: 'Ler o artigo',
      changemakers_label: 'Changemakers 2024 — Social Impact & OUTO',
      outo_cta: 'Abrir programa OUTO',
      social_impact_cta: 'Abrir página da Social Impact'
    },
    founder: {
      heading: 'Fundador — Daniel Lateef Duroshola',
      subheading: 'Olhares do dia a dia no Camp Calma — confiança e autenticidade.',
      instagram_cta: 'Abrir Instagram'
    },
    description: {
      heading: 'Sobre o Camp Calma',
      p1: 'O Camp Calma é um projeto da Sankofa Living & Learning, uma ONG dedicada à criação de espaços de vida e aprendizagem regenerativos. Localizado no coração de Portugal, o Camp Calma pretende ser uma quinta educacional autossuficiente e um santuário para a comunidade, a natureza e o crescimento pessoal.',
      p2: 'A sua contribuição financia diretamente a construção de infraestruturas essenciais, programas educacionais e recursos sustentáveis. Ao participar no nosso sorteio, não está apenas a ter a oportunidade de ganhar prémios incríveis—está a ajudar a construir as bases para um futuro melhor.',
      photo1_caption: 'Daniel com a Nilua e uma família holandesa com crianças da Diáspora Africana',
      photo3_caption: 'Daniel e o filho da Nilua a fazer uma fogueira',
      photo4_caption: 'Daniel quando se instalou na propriedade em 2022',
      photo5_caption: 'Camp Calma em 2022',
      photo6_caption: '2022 - Primeira construção temporária e o nosso novo furo de água',
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
    },
    bisafo: {
      heading: "Bisafoɔ Circle – A tua adesão exclusiva",
      subheading: "Junta‑te aos 500 Bisafo Founders · Apoio mensal · Acesso direto · Sorteios a partir de 450 membros",
      current_members: "Membros Atuais",
      capacity: "Lugares Limitados",
      sustainability_label: "Meta de Sustentabilidade",
      raffle_label: "Sorteio",
      capacity_label: "Capacidade Atingida",
      milestone_0_299: "💙 Até 299: Fase de Construção",
      milestone_300_349: "💚 300–349: Sustentabilidade Alcançada",
      milestone_350_449: "💛 350–449: Acesso Exclusivo e notificações",
      milestone_450_500: "💜 450+: Sorteios mensais (ex.: MacBook)",
      status_building: "Fase de Construção: Desenvolvimento da ONG 💙",
      status_sustainability: "Sustentabilidade Alcançada 💚",
      status_exclusive: "Acesso Exclusivo e notificações ✨",
      status_raffles: "Sorteios mensais desbloqueados 🎁",
      benefits_heading: "Vantagens como membro Bisafo",
      benefit_1: "✅ 50% de desconto no Camp Calma (Founder), 30% para Gold",
      benefit_2: "🏡 Primeira escolha em projetos de terreno & mobile‑home (ex.: Afro Village)",
      benefit_3: "🎁 Sorteios mensais a partir de 450 membros",
      benefit_4: "🎥 Conteúdo exclusivo, atualizações & eventos ao vivo",
      benefit_5: "📝 Menção nominal como apoiador fundador",
      benefit_6: "🔗 Código pessoal de recomendação para amigos",
      benefit_7: "🗣️ Founder: chamada privada de 10 minutos com Daniel (3 horários/dia; link de marcação após adesão; por ordem de chegada)",
      cta_button: "Tornar‑me Membro"
    },
    bisafo_about: {
      heading: "Sobre o Bisafoɔ Circle",
      subheading: "A comunidade exclusiva da Sankofa Living & Learning",
      feature_founders: "Clube de Fundadores",
      feature_safe_harbor: "Porto Seguro",
      feature_shared_learning: "Aprendizagem Partilhada",
      feature_monthly_raffles: "Sorteios Mensais",
      background: "“Bisafo” no Twi (Gana) significa os que procuram, aprendem e questionam. No Camp Calma, o Bisafoɔ Circle é o nosso Founders Club — uma rede de pioneiros que exploram e aprendem juntos.",
      exclusivity: "Os primeiros 500 formam o Bisafoɔ Circle (Founders). O estatuto de Founder mantém‑se enquanto fores membro; se saíres, o teu lugar fica livre. Depois, a comunidade cresce para 5.000 Membros Gold.",
      pricing: "Founder: €99/ano com convite (em vez de €132). Gold: €199/ano com convite (em vez de ��265). Comissão de 20% para o referenciador.",
      sustainability: "Estes 500 garantem a sustentabilidade da ONG e desbloqueiam sorteios mensais a partir de 450 membros.",
      community_app_and_properties: "Com 5.000 membros, fortalecemo‑nos via a App Comunitária Sankofa. A ONG pode sortear mensalmente uma propriedade off‑grid sustentável — agora em Portugal; no futuro também no Gana.",
      benefits_title: "Benefícios para Membros",
      benefits: [
        "🌱 50% de desconto no Camp Calma (Founder), 30% para Gold",
        "🏡 Primeira escolha em projetos de terreno & mobile‑home (ex.: Afro Village)",
        "🎁 Sorteios exclusivos (mensalmente a partir de 450 membros)",
        "📚 Recursos digitais (permacultura, receitas, yoga, materiais de aprendizagem)",
        "🗳️ Cocriação em workshops, eventos & projetos",
        "🎥 Eventos exclusivos em direto/stream & prévias de retiros",
        "📝 Menção nominal como apoiador fundador",
        "🗣️ Vantagem Founder: chamada privada de 10 minutos com Daniel; link de marcação após adesão; 3 horários/dia; por ordem de chegada"
      ],
      info_box: "O Bisafoɔ Circle (500 Founders) forma o Founders Club. Depois, a comunidade expande‑se para 5.000 Membros Gold — o Círculo mantém privilégios únicos de fundador.",
      founder_title: "Adesão Founder (limitada a 500)",
      founder_list: [
        "Preço normal: €132/ano",
        "Com código de convite: €99/ano",
        "20% de comissão (€19,80) para o referenciador — €79,20 ficam na ONG",
        "Estatuto de Founder enquanto fores membro",
        "Ao sair, o lugar fica livre para outra pessoa",
        "Vantagem Founder: chamada privada de 10 minutos com o Daniel para nos conhecermos e ver como nos podemos apoiar.",
        "Agenda: três horários de 10 minutos por dia; por ordem de chegada.",
        "Após aderir, recebes o link para marcares a tua chamada de apresentação."
      ],
      gold_title: "Adesão Gold (membros 501–5.000)",
      gold_list: [
        "Preço normal: €265/ano",
        "Com código de convite: €199/ano",
        "20% de comissão (€39,80) para o referenciador — €159,20 ficam na ONG",
        "Para novos membros após os 500 Founders"
      ],
      referral_title: "O teu código de recomendação",
      referral_text: "Cada membro recebe um código pessoal após aderir. Preferimos recomendações pessoais a anúncios anónimos. A comissão é um gesto de reconhecimento — fortalece‑te a ti e à comunidade.",
      future_title: "Futuro: Adesões normais (ilimitadas, após 5.000)",
      future_list: [
        "Preço: €132/ano (≈ como Bisafo)",
        "Vantagens: 10% de desconto no Camp Calma; participação em votações gerais",
        "Excluído: sem streams/eventos exclusivos; sem sorteios premium; sem prioridade em projetos de terreno; menos poder de decisão",
        "Apenas 500 lugares Founder; listas de espera quando alguém sair",
        "Assim o Bisafoɔ Circle mantém‑se permanente nos 500"
      ],
      narrative_title: "O nosso espírito comum",
      narrative: "O Bisafoɔ Circle é mais do que uma adesão. Mostra que, como diáspora africana, somos fortes juntos quando nos apoiamos: construímos projetos sustentáveis independentes de subsídios e confiamos na força, conhecimento e comunidade. Cada contribuição, recomendação e adesão fortalece a ONG — e também a união, orgulho e independência."
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
      article_cta: 'Artikel lesen',
      changemakers_label: 'Changemakers 2024 — Social Impact & OUTO',
      outo_cta: 'OUTO‑Programm öffnen',
      social_impact_cta: 'Social‑Impact‑Seite öffnen'
    },
    founder: {
      heading: 'Gründer — Daniel Lateef Duroshola',
      subheading: 'Einblicke in den Alltag bei Camp Calma — Vertrauen und Authentizität.',
      instagram_cta: 'Instagram öffnen'
    },
    description: {
 heading: 'Über Camp Calma',
 p1: 'Camp Calma ist ein Projekt von Sankofa Living & Learning, einer NGO, die sich der Schaffung regenerativer Lebens- und Lernräume verschrieben hat. Im Herzen Portugals gelegen, soll Camp Calma ein autarkes Bildungshof und ein Zufluchtsort für Gemeinschaft, Natur und persönliches Wachstum sein.',
 p2: 'Deine Spende finanziert direkt den Bau wesentlicher Infrastruktur, Bildungsprogramme und nachhaltiger Ressourcen. Durch die Teilnahme an unserer Verlosung hast du nicht nur die Chance, unglaubliche Preise zu gewinnen — du hilfst beim Aufbau einer Grundlage für eine bessere Zukunft. 🙏🏽',
      photo1_caption: 'Daniel mit Nilua und einer niederländischen Familie mit Kindern aus der afrikanischen Diaspora',
      photo3_caption: 'Daniel und Niluas Sohn machen ein Lagerfeuer',
      photo4_caption: 'Daniel, als er sich 2022 auf dem Grundstück niederließ',
      photo5_caption: 'Camp Calma im Jahr 2022',
      photo6_caption: '2022 – Erste provisorische Bauarbeiten und unsere neue Wasserbohrung',
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
      heading: "Bisafoɔ Circle – Deine exklusive Mitgliedschaft",
      subheading: "Werde Teil der 500 Bisafo Founders · Monatliche Unterstützung · Direkter Zugang · Gewinnchancen ab 450 Mitgliedern",
      current_members: "Aktuelle Mitglieder",
      capacity: "Limitierte Plätze",
      sustainability_label: "Nachhaltigkeitsziel",
      raffle_label: "Gewinnspiel",
      capacity_label: "Kapazität erreicht",
      milestone_0_299: "💙 Bis 299: Aufbauphase",
      milestone_300_349: "💚 300–349: Nachhaltigkeit erreicht",
      milestone_350_449: "💛 350–449: Exklusiver Zugang & Event‑Benachrichtigungen",
      milestone_450_500: "💜 450+: Monatliche Gewinnspiele (z. B. MacBook)",
      status_building: "Startphase: Aufbau der NGO 💙",
      status_sustainability: "Nachhaltigkeit erreicht 💚",
      status_exclusive: "Exklusiver Zugang & Event‑Benachrichtigungen ✨",
      status_raffles: "Monatliche Gewinnspiele freigeschaltet 🎁",
      benefits_heading: "Deine Vorteile als Bisafo‑Mitglied",
      benefit_1: "✅ 50 % Rabatt auf Camp‑Calma‑Aufenthalte (Founder), 30 % für Gold",
      benefit_2: "🏡 Erste Wahl bei Grundstücks‑ & Mobilheim‑Projekten (z. B. Afro Village)",
      benefit_3: "🎁 Monatliche Gewinnspiele ab 450 Mitgliedern",
      benefit_4: "🎥 Exklusiver Content, Community‑Updates & Live‑Events",
      benefit_5: "📝 Namentliche Nennung als Gründungsunterstützer",
      benefit_6: "🔗 Individueller Werbecode für Freunde",
      benefit_7: "🗣️ Founder: 10‑min privates Kennenlern‑Gespräch mit Daniel (3 Slots/Tag; Buchungslink nach Beitritt; first come, first served)",
      cta_button: "Jetzt Mitglied werden"
    },
    bisafo_about: {
      heading: "Über den Bisafoɔ Circle",
      subheading: "Die exklusive Community von Sankofa Living & Learning",
      feature_founders: "Founders Club",
      feature_safe_harbor: "Sicherer Hafen",
      feature_shared_learning: "Gemeinsames Lernen",
      feature_monthly_raffles: "Monatliche Verlosungen",
      background: "„Bisafo“ stammt aus dem Twi (Ghana) und beschreibt die Suchenden, Lernenden und Fragenden. Im Camp Calma steht der Bisafoɔ Circle für unseren Founders Club — ein Netzwerk von Pionier:innen, die gemeinsam erkunden, entdecken und wachsen.",
      exclusivity: "Die ersten 500 Mitglieder bilden den Bisafoɔ Circle (Founders). Der Founder‑Status bleibt, solange du Mitglied bist; trittst du aus, wird dein Platz für eine neue Person frei. Danach wächst die Community bis 5.000 Gold‑Mitglieder.",
      pricing: "Founder: 99 €/Jahr mit Einladungscode (statt 132 €). Gold: 199 €/Jahr mit Einladungscode (statt 265 €). 20 % Provision gehen jeweils an den Werber.",
      sustainability: "Diese ersten 500 sichern die Nachhaltigkeit der NGO und schalten ab 450 Mitgliedern monatliche Gewinnspiele frei.",
      community_app_and_properties: "Mit 5.000 Mitgliedern stärken wir uns gegenseitig über die Sankofa Community‑App. Die NGO kann monatlich eine nachhaltige Off‑Grid‑Immobilie verlosen — jetzt in Portugal, künftig auch Ghana.",
      benefits_title: "Mitgliedsvorteile",
      benefits: [
        "🌱 50% Rabatt auf Camp‑Calma‑Aufenthalte (Founder), 30% für Gold‑Mitglieder",
        "🏡 Erste Wahl bei Grundstücks‑ & Mobilheim‑Projekten (z. B. Afro Village)",
        "🎁 Exklusive Gewinnspiele (monatlich ab 450 Mitgliedern)",
        "📚 Digitale Ressourcen (Permakultur, Rezepte, Yoga, Lernmaterialien)",
        "🗳️ Mitbestimmung bei Workshops, Events & Projekten",
        "🎥 Exklusive Live/Stream‑Events & Retreat‑Previews",
        "📝 Namentliche Nennung als Gründungsunterstützer",
        "🗣️ Founder‑Vorteil: 10‑min privates Kennenlern‑Gespräch mit Daniel; Buchungslink nach Beitritt; 3 Slots/Tag; first come, first served"
      ],
      info_box: "Der Bisafoɔ Circle (500 Founder) bildet den Founders Club. Danach wächst die Community auf 5.000 Gold‑Mitglieder — der Bisafoɔ Circle behält seine besonderen Gründer‑Privilegien.",
      founder_title: "Founder‑Mitgliedschaft (limitiert auf 500)",
      founder_list: [
        "Normalpreis: 132 € pro Jahr",
        "Mit Einladungscode: 99 € pro Jahr",
        "20 % Provision (19,80 €) gehen an den Werber — bei der NGO verbleiben 79,20 €",
        "Founder‑Status bleibt nur solange du Mitglied bist",
        "Bei Austritt wird dein Platz für eine neue Person frei",
        "Founder‑Vorteil: 10‑min privates Kennenlern‑Gespräch mit Daniel.",
        "Terminierung: Drei 10‑min Slots pro Tag; Vergabe nach Reihenfolge der Buchung (first come, first served).",
        "Nach dem Beitritt erhältst du den Buchungslink für dein Kennenlern‑Gespräch."
      ],
      gold_title: "Gold‑Mitgliedschaft (Mitglied 501–5.000)",
      gold_list: [
        "Normalpreis: 265 € pro Jahr",
        "Mit Einladungscode: 199 € pro Jahr",
        "20 % Provision (39,80 €) gehen an den Werber — bei der NGO verbleiben 159,20 €",
        "Für alle neuen Mitglieder nach den 500 Founders"
      ],
      referral_title: "Dein individueller Werbecode",
      referral_text: "Jedes Mitglied erhält nach dem Beitritt einen persönlichen Werbecode. Wir setzen bewusst auf persönliche Empfehlungen statt anonymer Werbung. Die Provision ist Wertschätzung: Sie stärkt dich — und die Community.",
      future_title: "Zukunft: Normale Mitgliedschaften (unbegrenzt, nach 5.000)",
      future_list: [
        "Preis: 132 € pro Jahr (≈ wie Bisafo)",
        "Vorteile: 10 % Rabatt auf Camp‑Calma‑Aufenthalte; Teilnahme an allgemeinen Abstimmungen",
        "Nicht enthalten: Kein Zugang zu exklusiven Livestreams & Founders‑Events; keine Teilnahme an Premium‑Gewinnspielen; keine Vorrechte bei Grundstücksprojekten; weniger Mitbestimmung",
        "Nur 500 Founder‑Plätze; bei Austritt wird der Platz frei (Warteliste)",
        "So bleibt der Bisafoɔ Circle dauerhaft bei 500"
      ],
      narrative_title: "Unser gemeinsamer Spirit",
      narrative: "Der Bisafoɔ Circle ist mehr als eine Mitgliedschaft. Er zeigt, dass wir als afrikanische Diaspora gemeinsam stark sind, wenn wir uns gegenseitig unterstützen: wir bauen nachhaltige Projekte unabhängig von Fördergeldern, vertrauen auf gegenseitige Stärke, Wissen und Gemeinschaft. Jeder Beitrag, jede Empfehlung, jede Mitgliedschaft stärkt nicht nur die NGO, sondern auch Zusammenhalt, Stolz und Unabhängigkeit."
    }
  },
  twi: {
 nav: {
 description: 'Adwuma no',
 donate: 'Mma ne Bɔɔl',
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
      text: 'Wɔ Camp Calma ne Sankofa Living & Learning mu na nsusuwii ne nnwuma foforɔ bebree reba a ɛde nimdeɛ, amammerɛ ne asetena mu dɔnhwerehwɛ hyia. Daniel de ne nimdeɛ firi caravan wiase, off‑grid abrabɔ ne ne adwuma dedaw s�� quality manager wɔ akwadwumayɛ mu hyɛ mu. Eyi mu na adwene no fi sɛ yɛbɛyɛ caravan a ɛtɔ Afrika amammerɛ so — wobeyɛ wɔ Ghana, na wɔde akotuu wiase nyinaa, na ��nam so nso bɔ nnipa kɔkɔ sɛ wɔnkɔtɔ Ghana akɔtwa kwan ne atudɔ. Botae yi yɛ ampa, nanso ɛy�� adwuma a ɛsɛ sɛ yɛyɛ bom: yehia nnipa a wobɛhyɛ saa nnwuma yi mu den — anaa akatua/ayɛde��, na Sankofa Living & Learning atumi de saa ɔkwan‑tuntum adwumayɛ yi ayɛ adwuma.'
    },
    press: {
      heading: 'TV ne nsɛmmɔne mu aka yɛn ho',
      subheading: 'Mfeɛ ahe na yɛreyɛ campervan‑nsakrae wɔ adwumayɛ mu — eyi ma ɔdɔ ne gyidie.',
      video_cta: 'Hwɛ wɔ YouTube so',
      article_cta: 'Kenkan asɛmmisa no',
      changemakers_label: 'Changemakers 2024 — Social Impact & OUTO',
      outo_cta: 'Bue OUTO Programme',
      social_impact_cta: 'Bue Social Impact kratafa'
    },
    founder: {
      heading: 'Titiriwfo — Daniel Lateef Duroshola',
      subheading: 'Nsɛnhunu fifiw da biara wɔ Camp Calma — gyidie ne nokwaredi.',
      instagram_cta: 'Bue Instagram'
    },
    description: {
 heading: 'Ɛfa Camp Calma Ho',
 p1: 'Camp Calma yɛ Sankofa Living & Learning, NGO bi a ɛboa ma nnipa nya baabi a wɔbɛtena ne wɔn ho bɛsua adeɛ. Ɛwɔ Portugal mfimfini, Camp Calma botaeɛ ne sɛ ɛbɛyɛ sukuu fie a ɛnfa anyinam ahoɔden ho, na ɛbɛyɛ baabi a amanfoɔ, abɔdeɛ, ne obiara nneɛma bɛyɛ yie.',
 p2: 'Wo mmɔhoɔ no kɔ tẽẽ boa ma wɔsi nneɛma a ɛho hia, nwomasua nhyehyɛeɛ, ne nneɛma a ɛbɛboa ma yɛatra hɔ kyɛ. Wobɛka bɔɔl no ho a, ɛnyɛ akwanya kɛkɛ na wobɛnya sɛ wobɛfa nneɛma pa���wobɛboa ma wɔnsi fapem ma daakye pa. 🙏🏽',
      photo1_caption: 'Daniel ne Nilua ne Dutch abusua bi a wɔn mma fi Africa Diaspora mu',
      photo3_caption: 'Daniel ne Nilua babarima rekyekyere ogya kɛseɛ',
      photo4_caption: 'Daniel bere a ɔtenaa asase no so – 2022',
      photo5_caption: 'Camp Calma wɔ 2022',
      photo6_caption: '2022 – Adwuma a edi kan a yɛyɛe na yɛn nsuo bɔregua foforo',
    },
    donate: {
 heading: 'Yi Wo Boa No Mu',
 subheading: 'Mmɔhoɔ biara wɔ ne mfasoɔ. Mmɔhoɔ pii kyerɛ akwanya pii sɛ wobɛgye!',
      tier1: {
 price: '€10',
 tickets: '20 Bɔɔl',
 description: 'Ɔkwan pa a wobɛfa so akyerɛ sɛ wobɛ yɛn ho mmɔden.',
      },
      tier2: {
 price: '€20',
 tickets: '80 Bɔɔl',
 description: 'Yɛn deɛ nnipa pii p��! Bɔɔl mpɛn 4.',
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
 subheading: 'Nneɛma a ɛyɛ foforɔ betumi ayɛ wo deɛ. Akyɛdeɛ nyinaa yɛ foforɔ.',
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
 title: 'Ɔkwan Foforɔ A Wobɛfa So Akɔ Mu (Kɔ Mu Kwa)',
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
      heading: "Bisafoɔ Circle – Wo adwumaden soronko",
      subheading: "Ka ho bɔ 500 Bisafo Founders · Bosome‑bosome mmoa · Soronko kwan · Bɔɔl firi nnipa 450",
      current_members: "Nnipa a wɔwɔ hɔ seesei",
      capacity: "Baabi a wɔahyɛ",
      sustainability_label: "Botaeɛ a ɛtena hɔ",
      raffle_label: "Bɔɔl",
      capacity_label: "Baabi nyinaa ahyɛ",
      milestone_0_299: "💙 Kɔsi 299: Mfitiaseɛ",
      milestone_300_349: "💚 300–349: Botaeɛ atena hɔ",
      milestone_350_449: "💛 350–449: Soronko kwan & dwumadi ho amaneɛ",
      milestone_450_500: "💜 450+: Bosome‑bosome bɔɔl (te sɛ MacBook)",
      status_building: "Mfitiaseɛ: NGO rekɔ anim 💙",
      status_sustainability: "Botaeɛ atena hɔ 💚",
      status_exclusive: "Soronko kwan & dwumadi ho amaneɛ ✨",
      status_raffles: "Bɔɔl a ɛkɔ so bosome biara abue 🎁",
      benefits_heading: "Mfasoɔ a Bisafo membifo nya",
      benefit_1: "✅ 50% so wɔ Camp Calma (Founder), 30% ma Gold",
      benefit_2: "🏡 Ɛkan so kwan wɔ asase & mobile‑home nnwuma (te sɛ Afro Village)",
      benefit_3: "🎁 Bosome‑bosome bɔɔl firi nnipa 450",
      benefit_4: "🎥 Soronko nsɛm, kurom‑nsɛmmɔne & live‑events",
      benefit_5: "📝 Wo din bɛda hɔ sɛ adwumayɛfo a moeɛdi kan",
      benefit_6: "🔗 Wo ankasa referral code ma nnamfo",
      benefit_7: "🗣️ Founder: nsɛnkanee nkutoo da 10‑min kɔ Daniel ho (slots 3 da biara; link bɛba wuguu mu akyi; first come first served)",
      cta_button: "Bɛyɛ Membifo Seesei"
    },
    bisafo_about: {
      heading: "Ɛfa Bisafoɔ Circle Ho",
      subheading: "Sankofa Living & Learning kuromfɔw a ɛyɛ soronko",
      feature_founders: "Founders Club",
      feature_safe_harbor: "Safe Harbor",
      feature_shared_learning: "Shared Learning",
      feature_monthly_raffles: "Monthly Raffles",
      background: "“Bisafo” firi Twi mu — ɛkyerɛ ɔhwehwɛfo, ɔsuafo ne onibisa. Wɔ Camp Calma mu, Bisafoɔ Circle yɛ Founders Club �� kuw a ɛhwehwɛ na ɛsua bom.",
      exclusivity: "Membifo 500 a edi kan na wɔyɛ Bisafoɔ Circle. Founder‑status da hɔ kosi sɛ wobɛgyae — sɛ wugyae a, deɛ w’akɔ so bɛma obi foforo. Akyiri no, kurom no bɛkɔ 5,000 Gold membifo.",
      pricing: "Founder: €99/afe kɔ wɔ invite code (ɛsɛ €132). Gold: €199/afe kɔ wɔ invite code (ɛsɛ €265). 20% kɔ ma nea ɔde wo baa mu.",
      sustainability: "Membifo 500 no na wɔma NGO no tena pintinn na bɔɔl a ɛkɔ so fi nnipa 450 reba abue.",
      community_app_and_properties: "Sɛ yɛkɔ 5,000 membifo a, yɛbɔ yɛn ho ban wɔ Sankofa Community App so; NGO no betumi ama ofi off‑grid baako bosome biara — seesei Portugal, akyiri no Ghana nso.",
      benefits_title: "Mfaso a membifo nya",
      benefits: [
        "🌱 50% so wɔ Camp Calma (Founder), 30% ma Gold",
        "🏡 Ɛkan so kwan wɔ asase & mobile‑home nnwuma (te sɛ Afro Village)",
        "🎁 Bɔɔl a ɛyɛ soronko (bosome biara firi nnipa 450)",
        "📚 Dijital nsɛmma (permaculture, nnuan, yoga, adekyerɛ)",
        "🗳️ Dwumadi ho abakɔsɛm — workshops, events & projects",
        "🎥 Live/stream anɔpa & retreat previews",
        "📝 Wo din bɛda hɔ sɛ adwumayɛfo a moeɛdi kan",
        "🗣️ Founder mfasoɔ: ns��nkanee nkutoo 10‑min kɔ Daniel ho; link bɛba wuguu mu akyi; slots 3 da biara; first come first served"
      ],
      info_box: "Bisafoɔ Circle (membifo 500) na ɛyɛ Founders Club no. Akyiri no bɛyɛ 5,000 Gold — na Bisafo no benya ne hokwan soronko daa.",
      founder_title: "Founder‑Membifo (akonta 500 pɛ)",
      founder_list: [
        "N’ahoɔden: €132/afe",
        "Wɔ invite code: €99/afe",
        "20% (≈ €19.80) kɔ ma nea ɔde obi baa mu — €79.20 si NGO no mu",
        "Founder‑status wɔ bere a wowɔ mu pɛ",
        "Sɛ wugyae a, w’akɔnni bɛda hɔ ma obi foforo",
        "Founder mfasoɔ: nkɔmmɔ nkutoo 10‑min kɔ Daniel ho.",
        "Nhyehyɛe: da biara slots 3 a ɛyɛ 10‑min; nea ɔto so kan na ɔnya (first come, first served).",
        "Sɛ wuguu mu wie a, wobɛnya link a wobɛde bɔ wo nsɛnkanee bere."
      ],
      gold_title: "Gold‑Membifo (501–5,000)",
      gold_list: [
        "N’ahoɔden: €265/afe",
        "Wɔ invite code: €199/afe",
        "20% (≈ €39.80) kɔ ma nea ɔde obi baa mu — €159.20 si NGO no mu",
        "Ma wɔn a wofra 500 Founders akyi"
      ],
      referral_title: "Wo ankasa referral code",
      referral_text: "Membifo biara benya ne code ankasa. Yɛgye gye di wɔ adansefo anokwa a, ɛnyɛ adwuma a wɔde sika hyɛ mu kɛkɛ. Ɔkaeɛyɛ kɛse yi hyɛ wo den — na ɛhyɛ kurom no nso den.",
      future_title: "Daakye: Membifo a ɛyɛ normal (ɛnyɛ akonta, 5,000 akyi)",
      future_list: [
        "Bo: €132/afe (te sɛ Bisafo)",
        "Mfaso: 10% so wɔ Camp Calma; wopɛ a wobɛto aba kɛse mu",
        "Ɛnkɔ mu: streams a ɛyɛ soronko & founders‑events; premium bɔɔl; asase nnwuma mu kwan‑ahoro; tumi kakra wɔ aba mu",
        "Founder akɔnnidie yɛ 500 pɛ; sɛ obi fi mu a, wɔde ma obi foforo (waitlist)",
        "Ɔkwan yi na ɛma Bisafoɔ Circle da hɔ daa 500"
      ],
      narrative_title: "Ɔsunsum a yɛkyerɛ mu",
      narrative: "Bisafoɔ Circle yɛ dodo sen membifo kɛkɛ. Ɛkyerɛ sɛ, sɛ yɛyɛ diaspora a, yɛtumi yɛ den bom: yɛsi nnwuma a ɛtena hɔ, yɛde nimdeɛ ne kurom‑ahoɔden bɔ yɛn ho ban. Mo bɔ biara, mo adanse biara ne mo membifo yɛ kɛse ma NGO no — na ɛma ahotosoɔ, ahurumayɛ ne anɔpa so gyinabere."
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
      support_fairs_text: 'Nye aka NGO Sankofa Living & Learning na ọrụ anyị Camp Calma ka ha nwee ike ịga ngosi Reiselust, Fisch & Feines na Caravan Bremen. Onyinye gị na-akwụ ụgwọ ebe e ji guo, njem na ihe eji eme ka ndụ na-adigide pụta ìhè!',
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
      heading: 'Ụgbọ njem mepụtara site n\'akpụkpọ Afrịka – Echiche anyị',
      text: 'Na Camp Calma na Sankofa Living & Learning, ọtụtụ echiche na oru jikọtara ọmụma, omenala na nd��� na-adigide. Daniel na-eweta ahụmịhe site n\'uwa caravan, ndụ n\'enweghị grid na ���rụ ya gara aga dịka onye njikwa ogo na ụlọ ọrụ ụgbọ ala. Site na nke a, e bidoro echiche ịmepụta caravans kpaliri Afr���ka — a na-emepụta ya na Ghana, ebufere ụwa niile, ma kpalie ndị mmadụ ịga Ghana maka njem na njem nleta. Ebumnuche a kwe omume, mana ọ bụ naanị site n\'ịrụkọ ọrụ ọnụ: anyị chọrọ ndị na-etinye aka ma ọ bụ onyinye ka Sankofa Living & Learning nwee ike imezu ọrụ ndú a.'
    },
    press: {
      heading: 'Na telivishọn na akwụkwọ akụkọ',
      subheading: 'Afọ nke ọrụ aka n’ịgbanwe campervan — iwulite ntụkwasị obi site n’ọha.',
      video_cta: 'Lelee na YouTube',
      article_cta: 'Gụọ akụkọ ahụ',
      changemakers_label: 'Changemakers 2024 — Social Impact & OUTO',
      outo_cta: 'Mepee mmemme OUTO',
      social_impact_cta: 'Mepee peeji Social Impact'
    },
    founder: {
      heading: 'Onye guzobere — Daniel Lateef Duroshola',
      subheading: 'Nkeji mkpirikpi n’ụbọchị kwa ụbọchị na Camp Calma — ntụkwasị obi na eziokwu.',
      instagram_cta: 'Mepee Instagram'
    },
    description: {
      heading: 'Banyere Camp Calma',
      p1: 'Camp Calma bụ oru Sankofa Living & Learning, NGO nke na‑ewu ebe obibi na ebe mmụta na‑emegharị. N’ime Portugal, Camp Calma bụ n’obi ka ọ bụrụ ebe obibi mmụta nke onwe na ebe mgbaghara maka obodo, okike na uto onwe onye.',
      p2: 'Onyinye gị na-akwado ozugbo iwulite ihe ndị bụ isi, mmemme mmụta na ak���rụngwa na-adigide. Site n’iso na mgbasa anyi, ị naghị enweta ohere nnwere onyinye naanị���ị na-enyekwa aka iwuli ntọala maka ọdịnihu ka mma. 🙏🏽',
      photo1_caption: 'Daniel na Nilua na ezinụlọ Dutch nwere ụmụaka sitere na African Diaspora',
      photo3_caption: 'Daniel na nwa Nilua na‑akpọ ọkụ mgbede',
      photo4_caption: 'Daniel mgbe o guzobere n’ala ahụ na 2022',
      photo5_caption: 'Camp Calma na 2022',
      photo6_caption: '2022 - Owuwu oge mbụ na oghere mmiri ọhụụ anyị'
    },
    donate: {
      heading: 'Họrọ ogo nkwado gị',
      subheading: 'Onyinye ọ bụla bara uru. Nkwado ka ukwuu pụtara ohere mmeri ka ukwuu!',
      tier1: {
        price: '€10',
        tickets: 'Tiketi 20',
        description: 'Ụzọ dị mma isi gosi nkwado g��.'
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
      subheading: 'Ka any�� na-eru ebumnuche, anyi na-emeghe onyinye ọzọ!',
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
      a2: 'Ee, a na-achịkwa ịkwụ ụgwọ niile site na Stripe nke ọma. Anyị anaghị echekwa ozi ịkwụ ụgwọ gị n’ọrụ anyị.',
      q3: 'Gịnị bụ mgbe a ga-akọwa onye mmeri?',
      a3: 'A ga-adọta onye mmeri ma kọọ ọkwa na Ọgọst 31, 2025, oge na-erughị anya mgbe countdown gwụsịrị. A ga-eziga email kụziere onye mmeri.',
      q4: 'Enwere m ike banye n\'efu?',
      a4: 'Ee, enwere Usoro Nbanye Ozugbo (AMOE). Biko hụ ngalaba "Nbanye n’efu" n’okpuru maka ntuziaka esi soro na-enweghị onyinye.'
    },
    amoe: {
      title: 'Usoro Nbanye Ozugbo (Nbanye n’efu)',
      button_text: 'Pịa ebe a maka fọm nbanye n’efu',
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
      heading: 'Bisafoɔ Circle – Nkwenye pụrụ iche gị',
      subheading: 'Jikọọ 500 Bisafo Founders · Nkwado ọnwa · Ntinye ozugbo · Mgbasa site na 450 ndị otu',
      current_members: 'Ndị otu ugbu a',
      capacity: 'Ọnụ ọgụgụ kacha',
      sustainability_label: 'Ebumnuche ịdịgide',
      raffle_label: 'Mgbasa',
      capacity_label: 'Ejuola',
      milestone_0_299: '💙 Ruo 299: Oge owuwu',
      milestone_300_349: '💚 300–349: Idịgide ruru',
      milestone_350_449: '💛 350���449: Ntinye pụrụ iche & ozi banyere mmemme',
      milestone_450_500: '💜 450+: Mgbasa kwa ọnwa (dịka MacBook)',
      status_building: 'Oge mmalite: Ịzụlite NGO 💙',
      status_sustainability: 'Idịgide ruru 💚',
      status_exclusive: 'Ntinye pụrụ iche & ozi mmemme ✨',
      status_raffles: 'Mgbasa kwa ọnwa emeghe 🎁',
      benefits_heading: 'Uru gị dịka onye Bisafo',
      benefit_1: '✅ 50% na ibi na Camp Calma (Founder), 30% maka Gold',
      benefit_2: '🏡 Nhọrọ mbụ n’ọrụ ala & mobile‑home (dịka Afro Village)',
      benefit_3: '🎁 Mgbasa kwa ọnwa site na 450 ndị otu',
      benefit_4: '🎥 Ihe pụrụ iche, mmelite obodo & live‑events',
      benefit_5: '📝 Aha e depụtara dịka onye kwadoro guzobere',
      benefit_6: '🔗 Koodu ntụnye onwe gị maka ndị enyi',
      benefit_7: '🗣️ Founder: oku nzuzo nkeji 10 na Daniel (slots 3 kwa ụbọchị; njikọ ịzụta oge na‑abịa mgbe isonyere; first‑come, first‑served)',
      cta_button: 'Banye ugbu a'
    },
    bisafo_about: {
      heading: 'Banyere Bisafoɔ Circle',
      subheading: 'Obodo pụrụ iche nke Sankofa Living & Learning',
      feature_founders: 'Otu ndị guzobere',
      feature_safe_harbor: 'Safe Harbor',
      feature_shared_learning: 'Mm���ta ọnụ',
      feature_monthly_raffles: 'Mgbasa kwa ọnwa',
      background: '“Bisafo” na Twi pụtara nd�� na‑achọ, ndị na‑amụta na ndị na‑ajụ aj���jụ. Na Camp Calma, Bisafoɔ Circle bụ Founders Club — netwọkụ nke ndị pionia na‑amụtakwa ọnụ.',
      exclusivity: 'Ndị 500 mbụ b��� Bisafo (Founders). Status Founder dịruo mgbe ị nọgidere bụrụ onye otu; mgbe ị pụọ, ebe ahụ ga‑emepe maka onye ọhụrụ. Mgbe e mesịrị, obodo ga‑eto ruo 5,000 ndị otu Gold.',
      pricing: 'Founder: €99/afọ na koodu nkwado (kama €132). Gold: €199/afọ na koodu nkwado (kama €265). 20% ụgwọ ntụnye na‑aga na onye kpọrọ gị.',
      sustainability: 'Ndị mbụ 500 na‑ekwe ka NGO dịgide ma mepee mgbasa kwa ọnwa site na 450 ndị otu.',
      community_app_and_properties: 'Site na 5,000 ndị otu, anyị na‑akwado ibe anyị site na ngwa Sankofa Community; NGO nwere ike inye otu ihe onwunwe off‑grid kwa ọnwa — ugbu a na Portugal; n’ọdịnihu Ghana.',
      benefits_title: 'Uru ndị otu',
      benefits: [
        '🌱 50% na ibi na Camp Calma (Founder), 30% maka Gold',
        '🏡 Nhọrọ mbụ n’ọrụ ala & mobile‑home (dịka Afro Village)',
        '🎁 Mgbasa pụrụ iche (kwa ọnwa site na 450 ndị otu)',
        '📚 Akụrụngwa dijitalụ (permaculture, nri, yoga, ihe mmụta)',
        '🗳️ Nsonye n’ime mkpebi — workshops, events & projects',
        '🎥 Live/stream events & retreat previews',
        '📝 Aha depụtara dịka ndị kwadoro guzobere',
        '🗣️ Uru Founder: oku nzuzo nkeji 10 na Daniel; njikọ ịzụta oge mgbe isonyere; slots 3 kwa ụbọchị; first‑come, first‑served'
      ],
      info_box: 'Bisafoɔ Circle (500 Founders) bụ Founders Club. Mgbe e mesịrị, obodo ga‑eto ruo 5,000 Gold — Bisafoɔ Circle na‑edobe ikike pụrụ iche.',
      founder_title: 'Mmembe Founder (oke na 500)',
      founder_list: [
        'Ọnụahịa nkịtị: €132/afọ',
        'Na koodu nkwado: €99/afọ',
        '20% (€19.80) na‑aga n’aka onye kpọrọ — €79.20 na‑anọ na NGO',
        'Status Founder d�� naanị mgbe ị nọ n’ọgbakọ',
        'Ọ bụrụ na ị pụọ, ebe ahụ ga‑emepe maka onye ọhụrụ',
        'Uru Founder: oku nzuzo nkeji 10 na Daniel maka mmalite na izute onwe.',
        'Ndokwa oge: slots atọ nke nkeji 10 kwa ụbọchị; enyere dịka onye rutere mbụ.',
        'Mgbe ị sonyere, ị ga‑enweta njikọ iji debe oge maka oku mmalite gị.'
      ],
      gold_title: 'Mmembe Gold (501–5,000)',
      gold_list: [
        'Ọnụahịa nkịtị: €265/afọ',
        'Na koodu nkwado: €199/afọ',
        '20% (€39.80) na‑aga n’aka onye kpọr�� — €159.20 na‑anọ na NGO',
        'Maka ndị ọhụrụ mgbe 500 Founders juputara'
      ],
      referral_title: 'Koodu ntụnye onwe gị',
      referral_text: 'Onye otu ọ bụla na‑enweta koodu ntụnye mgbe ọ bịara n’ụlọ. Anyị na‑akwado nkwado mmadụ‑na‑mmadụ karịa mgbasa ozi na‑enweghị aha. Ụgwọ ntụnye bụ ekele — ọ na‑akwalite gị na obodo.',
      future_title: 'Ọdịnihu: Mmembe nkịtị (na‑enweghị oke, mgbe 5,000 gasịrị)',
      future_list: [
        'Ọnụahịa: €132/afọ (≈ dịka Bisafo)',
        'Uru: 10% na Camp Calma; ntinye n’ìmeme ntuli aka n’ozuzu',
        'Ewezuga: enweghị livestreams & founders‑events pụrụ iche; enweghị mgbasa premium; enweghị ikike pụrụ iche n’ọrụ ala; obere ikike ntuli aka',
        'Ebe Founder bụ 500 naanị; mgbe mmadụ pụọ, a na‑ewepụta ebe maka onye ọzọ (waitlist)',
        'Nke a na‑eme ka Bisafoɔ Circle nọgide na 500 mgbe niile'
      ],
      narrative_title: 'Mmụọ anyị jikọrọ ọnụ',
      narrative: 'Bisafo�� Circle karịrị “mgbasa.” Ọ na‑egosi na dịka diaspora Afrịka, anyị na‑esi ike ọnụ mgbe anyị na‑akwado ibe anyị: anyị na‑ewu ọrụ dịgide na-enweghị enyemaka gọọmenti; anyị na‑edobe ike, ọmụma na obodo. Onyinye ọ bụla, ntụnye ọ bụla na memba ọ bụla na‑eme ka NGO sie ike — na mmụọ nke ịdị n’otu, ntụkwasị obi na nnwere onwe.'
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
    article_cta: 'Lees het artikel',
    changemakers_label: 'Changemakers 2024 — Social Impact & OUTO',
    outo_cta: 'OUTO‑programma openen',
    social_impact_cta: 'Social Impact‑pagina openen'
  },
  founder: {
    heading: 'Oprichter — Daniel Lateef Duroshola',
    subheading: 'Kleine inkijkjes in het dagelijks leven bij Camp Calma — vertrouwen en authenticiteit.',
    instagram_cta: 'Instagram openen'
  },
  description: {
    heading: 'Over Camp Calma',
    p1: 'Camp Calma is een project van Sankofa Living & Learning, een NGO die zich inzet voor regeneratieve woon- en leeromgevingen. Gelegen in het hart van Portugal wil Camp Calma een off‑grid educatieve woonplek zijn en een toevluchtsoord voor gemeenschap, natuur en persoonlijke groei.',
    p2: 'Jouw bijdrage financiert direct de bouw van essentiële infrastructuur, onderwijsprogramma\'s en duurzame middelen. Door deel te nemen aan onze verloting krijg je niet alleen kans op geweldige prijzen — je helpt ook mee aan een fundament voor een betere toekomst. 🙏🏽',
    photo1_caption: 'Daniel met Nilua en een Nederlandse familie met kinderen uit de Afrikaanse diaspora',
    photo3_caption: 'Daniel en Nilua’s zoon maken een kampvuur',
    photo4_caption: 'Daniel toen hij zich vestigde op het terrein in 2022',
    photo5_caption: 'Camp Calma in 2022',
    photo6_caption: '2022 – Eerste tijdelijke opbouw en onze nieuwe waterput'
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
    heading: 'Bisafoɔ Circle – Jouw exclusieve lidmaatschap',
    subheading: 'Word deel van de 500 Bisafo‑Founders · Maandelijkse steun · Directe toegang · Verlotingen vanaf 450 leden',
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
    benefits_heading: 'Jouw voordelen als Bisafo‑lid',
    benefit_1: '✅ 50% korting op Camp Calma (Founder), 30% voor Gold',
    benefit_2: '🏡 Eerste keuze bij grond‑ & mobile‑home‑projecten (bijv. Afro Village)',
    benefit_3: '🎁 Maandelijkse verlotingen vanaf 450 leden',
    benefit_4: '🎥 Exclusieve content, community‑updates & live‑events',
    benefit_5: '📝 Naamsvermelding als founding supporter',
    benefit_6: '🔗 Persoonlijke referralcode voor vrienden',
    benefit_7: '🗣️ Founder: 10‑minuut privé kennismakingscall met Daniel (3 slots/dag; boekingslink na aanmelding; first‑come, first‑served)',
    cta_button: 'Word nu lid'
  },
  bisafo_about: {
    heading: 'Over de Bisafoɔ Circle',
    subheading: 'De exclusieve community van Sankofa Living & Learning',
    feature_founders: 'Founders Club',
    feature_safe_harbor: 'Veilige haven',
    feature_shared_learning: 'Samen leren',
    feature_monthly_raffles: 'Maandelijkse verlotingen',
    background: '“Bisafo” komt uit het Twi (Ghana) en betekent de zoekenden, lerenden en vragers. Bij Camp Calma is de Bisafoɔ Circle onze Founders Club — een netwerk van pioniers dat samen ontdekt en leert.',
    exclusivity: 'De eerste 500 leden vormen de Bisafoɔ Circle (Founders). Founder‑status blijft zolang je lid bent; als je stopt, komt je plek vrij. Daarna groeit de community tot 5.000 Gold‑leden.',
    pricing: 'Founder: €99/jaar met invitecode (i.p.v. €132). Gold: €199/jaar met invitecode (i.p.v. €265). 20% commissie voor de werver.',
    sustainability: 'Deze 500 borgen de duurzaamheid van de NGO en ontgrendelen maandelijkse verlotingen vanaf 450 leden.',
    community_app_and_properties: 'Met 5.000 leden versterken we elkaar via de Sankofa Community‑app. De NGO kan maandelijks één duurzame off‑grid woning verloten — nu in Portugal; later ook in Ghana.',
    benefits_title: 'Ledenvoordelen',
    benefits: [
      '🌱 50% korting op Camp Calma (Founder), 30% voor Gold‑leden',
      '🏡 Eerste keuze bij grond‑ & mobile‑home‑projecten (bijv. Afro Village)',
      '🎁 Exclusieve verlotingen (maandelijks vanaf 450 leden)',
      '📚 Digitale resources (permacultuur, recepten, yoga, leermateriaal)',
      '🗳️ Medezeggenschap bij workshops, events & projecten',
      '🎥 Exclusieve live/stream‑events & retreat‑previews',
      '📝 Naamsvermelding als founding supporters',
    '🗣️ Founder‑voordeel: 10‑minuut privé kennismakingscall met Daniel; boekingslink na aanmelding; 3 slots/dag; first‑come, first‑served'
    ],
    info_box: 'De Bisafoɔ Circle (500 Founders) vormt de Founders Club. Daarna groeit de community naar 5.000 Gold‑leden — de Bisafoɔ Circle behoudt unieke founder‑privileges.',
    founder_title: 'Founder‑lidmaatschap (beperkt tot 500)',
    founder_list: [
      'Normale prijs: €132/jaar',
      'Met invitecode: €99/jaar',
      '20% commissie (€19,80) naar de werver — €79,20 blijft bij de NGO',
      'Founder‑status zolang je lid bent',
      'Bij vertrek komt je plek vrij voor een nieuw lid',
    'Founder‑voordeel: 10‑minuut privécall met Daniel voor kennismaking en afstemming.',
    'Planning: drie 10‑minuten‑slots per dag; op volgorde van boeking (first‑come, first‑served).',
    'Na je aanmelding ontvang je de boekingslink om de kennismakingscall te plannen.'
    ],
    gold_title: 'Gold‑lidmaatschap (leden 501–5.000)',
    gold_list: [
      'Normale prijs: €265/jaar',
      'Met invitecode: €199/jaar',
      '20% commissie (€39,80) naar de werver — €159,20 blijft bij de NGO',
      'Voor nieuwe leden na de 500 Founders'
    ],
    referral_title: 'Jouw persoonlijke referralcode',
    referral_text: 'Elk lid ontvangt na aanmelding een persoonlijke referralcode. We vertrouwen op persoonlijke aanbevelingen i.p.v. anonieme advertenties. De commissie is waardering: het versterkt jou én de community.',
    future_title: 'Toekomst: Normale lidmaatschappen (onbeperkt, na 5.000)',
    future_list: [
      'Prijs: €132/jaar (≈ zoals Bisafo)',
      'Voordelen: 10% korting op Camp Calma; deelname aan algemene stemmingen',
      'Niet inbegrepen: geen exclusieve livestreams & founders‑events; geen premium verlotingen; geen voorrechten bij grondprojecten; minder medezeggenschap',
      'Slechts 500 founder‑plekken; bij vertrek komt er een plek vrij (wachtlijst)',
      'Zo blijft de Bisafoɔ Circle permanent 500'
    ],
    narrative_title: 'Onze gedeelde spirit',
    narrative: 'De Bisafoɔ Circle is meer dan een lidmaatschap. Het laat zien dat we als Afrikaanse diaspora samen sterk zijn wanneer we elkaar steunen: we bouwen duurzame projecten onafhankelijk van subsidies en vertrouwen op wederzijdse kracht, kennis en community. Elke bijdrage, aanbeveling en lidmaatschap versterkt de NGO — én verbondenheid, trots en onafhankelijkheid.'
  }
};
translations.nl = nlTranslations;

const frTranslations = {
  nav: {
    description: 'Le Projet',
    donate: 'Donner & Gagner',
    prizes: 'Prix',
    faq: 'FAQ',
  },
  hero: {
    support_fairs_heading: 'Soutenez notre participation aux salons !',
    support_fairs_text: 'Aidez l’ONG Sankofa Living & Learning et notre projet Camp Calma à être présents aux salons Reiselust, Fisch & Feines et Caravan Bremen. Avec votre don, nous finançons la location du stand, les déplacements et les matériels pour rendre la vie durable visible !',
    donate_button: 'Faire un don',
    every_donation_text: 'Chaque don nous rapproche de notre objectif. Merci pour votre soutien !',
    subheading: 'Soutenez un rêve, gagnez des prix incroyables',
    heading: 'Aidez à construire Camp Calma au Portugal',
    cta: 'Faites un don maintenant et recevez des billets de tombola',
  },
  video: {
    heading: 'Voir Camp Calma en action',
    youtube_link: 'https://www.youtube.com/embed/sG3dgRxuIHc?rel=0',
  },
  victron: {
    heading: 'Tableau de bord Victron Energy',
    subheading: 'Aperçu en temps réel de notre énergie solaire.',
    open_fullscreen: 'Ouvrir en plein écran pour un tableau de bord avancé',
  },
  african_campers: {
    heading: 'Camping-cars inspirés de l’Afrique – Notre vision',
    text: 'À Camp Calma et chez Sankofa Living & Learning, de nombreuses idées et projets créatifs relient savoir, culture et vie durable. Daniel apporte son expérience du monde du caravaning, de la vie hors réseau et de son ancien travail comme responsable qualité dans l’automobile. De là est née la vision de développer des caravanes inspirées de l’Afrique — construites au Ghana, exportées dans le monde entier et donnant envie de voyager au Ghana. Cet objectif est réaliste, mais possible seulement ensemble : nous avons besoin de personnes prêtes à s’engager — ou de dons afin que Sankofa Living & Learning puisse concrétiser ces initiatives pionni��res.'
  },
  press: {
    heading: 'À la télévision et dans la presse',
    subheading: 'Des années de réalisations concrètes — une confiance bâtie sur la visibilité publique.',
    video_cta: 'Voir sur YouTube',
    article_cta: 'Lire l’article',
    changemakers_label: 'Changemakers 2024 — Social Impact & OUTO',
    outo_cta: 'Ouvrir le programme OUTO',
    social_impact_cta: 'Ouvrir la page Social Impact'
  },
  founder: {
    heading: 'Fondateur — Daniel Lateef Duroshola',
    subheading: 'Éclats du quotidien à Camp Calma — confiance et authenticité.',
    instagram_cta: 'Ouvrir Instagram'
  },
  description: {
    heading: 'À propos de Camp Calma',
    p1: 'Camp Calma est un projet de Sankofa Living & Learning, une ONG dédiée à la création d’espaces de vie et d’apprentissage régénératifs. Situé au cœur du Portugal, Camp Calma vise à devenir une ferme‑école hors réseau et un sanctuaire pour la communauté, la nature et l’épanouissement personnel.',
    p2: 'Votre contribution finance directement la construction d’infrastructures essentielles, des programmes éducatifs et des ressources durables. En participant à notre tombola, vous ne gagnez pas seulement une chance de remporter d’incroyables prix — vous contribuez à bâtir un meilleur avenir. 🙏��',
    photo1_caption: 'Daniel avec Nilua et une famille néerlandaise avec des enfants de la diaspora africaine',
    photo3_caption: 'Daniel et le fils de Nilua faisant un feu de camp',
    photo4_caption: 'Daniel lorsqu’il s’est installé sur le terrain en 2022',
    photo5_caption: 'Camp Calma en 2022',
    photo6_caption: '2022 — Première construction temporaire et notre nouveau forage d’eau',
  },
  donate: {
    heading: 'Choisissez votre niveau de soutien',
    subheading: 'Chaque contribution compte. Plus de soutien = plus de chances de gagner !',
    tier1: {
      price: '€10',
      tickets: '20 Billets',
      description: 'Une excellente façon de montrer votre soutien.',
    },
    tier2: {
      price: '€20',
      tickets: '80 Billets',
      description: 'Notre choix le plus populaire ! 4× plus de billets.',
      popular: 'POPULAIRE',
    },
    tier3: {
      price: '€30',
      tickets: '160 Billets',
      description: 'Meilleur rapport impact/prix.',
    },
    button: 'Donner & Participer',
  },
  milestones: {
    heading: 'Paliers de financement & Prix',
    subheading: 'À mesure que nous atteignons nos objectifs, nous débloquons d’autres prix pour la tombola !',
    current_funding: 'Financement actuel',
    goal: 'Objectif',
    prize1: 'DJI Mini 3 Pro Fly More Combo',
    prize2: 'DJI Mini 4 Pro',
    prize3: 'MacBook Air M2',
    prize4: 'MacBook Air M3 (Grand prix)',
    unlocked: 'DÉBLOQUÉ !',
  },
  countdown: {
    heading: 'La tombola se termine dans',
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
  },
  prizes: {
    heading: 'Zoom sur les prix',
    subheading: 'Des appareils high‑tech peuvent être à vous.',
    grand_prize: 'Grand prix',
  },
  faq: {
    heading: 'Foire aux questions',
    q1: 'Comment fonctionne la tombola ?',
    a1: 'Pour chaque don, vous recevez un nombre de billets en fonction du niveau choisi. À la fin de la campagne, un gagnant est tiré au sort parmi tous les billets émis. Les prix sont débloqués selon le total collecté.',
    q2: 'Mon don est‑il sécurisé ?',
    a2: 'Oui, tous les paiements sont traités de manière sécurisée via Stripe. Nous ne stockons aucune information de paiement sur nos serveurs.',
    q3: 'Quand le gagnant sera‑t‑il annoncé ?',
    a3: 'Le gagnant sera tiré et annoncé le 31 août 2025, peu après la fin du compte à rebours. Le gagnant sera contacté par e‑mail.',
    q4: 'Puis‑je participer gratuitement ?',
    a4: 'Oui, il existe une Méthode Alternative de Participation (AMOE). Voir la section « Participation gratuite » ci‑dessous pour y participer sans don.',
  },
  amoe: {
    title: 'Méthode Alternative de Participation (Gratuit)',
    button_text: 'Cliquez ici pour le formulaire de participation gratuite',
    modal_heading: 'Formulaire de participation gratuite (AMOE)',
    modal_subheading: 'Veuillez remplir entièrement le formulaire pour recevoir un (1) billet de tombola.',
    name: 'Nom complet',
    email: 'Adresse e‑mail',
    address: 'Adresse postale complète',
    statement: 'Motivation',
    statement_placeholder: 'Veuillez écrire une courte motivation expliquant votre intérêt pour la tombola Camp Calma.',
    submit: 'Envoyer la participation gratuite',
    success: 'Merci ! Votre participation gratuite a été envoyée. Vous recevrez un e‑mail de confirmation sous peu.',
    close: 'Fermer',
    consent_html: 'J’accepte les <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Conditions</a> et j’ai pris connaissance de la <a href="https://www.sankofa-ngo.org/giveaway" target="_blank" class="underline">Politique de confidentialité</a>, y compris le consentement à être contacté par e‑mail et WhatsApp au sujet de cette tombola.',
    whatsapp: 'Numéro WhatsApp',
  },
  footer: {
    contact: 'Contact',
    follow_us: 'Suivez‑nous',
    youtube_channel: 'Chaîne YouTube',
  },
  payment_success: {
    heading: 'Merci pour votre soutien !',
    message: 'Votre don a été traité avec succès. Vos numéros de billets ont été envoyés à votre e‑mail. Bonne chance !',
  },
  bisafo: {
    heading: 'Bisafoɔ Circle – Votre adhésion exclusive',
    subheading: 'Rejoignez les 500 Bisafo Founders · Soutien mensuel · Accès direct · Tombolas à partir de 450 membres',
    current_members: 'Membres actuels',
    capacity: 'Places limitées',
    sustainability_label: 'Objectif de durabilité',
    raffle_label: 'Tombola',
    capacity_label: 'Capacité atteinte',
    milestone_0_299: '💙 Jusqu’à 299 : Phase de construction',
    milestone_300_349: '💚 300–349 : Durabilité atteinte',
    milestone_350_449: '💛 350��449 : Accès exclusif & notifications',
    milestone_450_500: '💜 450+ : Tombolas mensuelles (ex. MacBook)',
    status_building: 'Phase de construction : Développement de l’ONG 💙',
    status_sustainability: 'Durabilité atteinte 💚',
    status_exclusive: 'Accès exclusif & notifications ✨',
    status_raffles: 'Tombolas mensuelles débloquées 🎁',
    benefits_heading: 'Vos avantages en tant que membre Bisafo',
    benefit_1: '✅ 50% de réduction sur les séjours Camp Calma (Founder), 30% pour Gold',
    benefit_2: '🏡 Priorité pour les projets de terrain & mobile‑home (ex. Afro Village)',
    benefit_3: '🎁 Tombolas mensuelles à partir de 450 membres',
    benefit_4: '🎥 Contenu exclusif, actualités & événements en direct',
    benefit_5: '📝 Mention de votre nom comme soutien fondateur',
    benefit_6: '🔗 Code de parrainage personnel pour vos amis',
    benefit_7: '🗣️ Founder : appel privé de 10 minutes avec Daniel (3 créneaux/jour ; lien de réservation après adhésion ; premier arrivé, premier servi)',
    cta_button: 'Devenir membre maintenant',
  },
  bisafo_about: {
    heading: 'À propos du Bisafoɔ Circle',
    subheading: 'La communauté exclusive de Sankofa Living & Learning',
    feature_founders: 'Club des fondateurs',
    feature_safe_harbor: 'Port sûr',
    feature_shared_learning: 'Apprentissage partagé',
    feature_monthly_raffles: 'Tirages mensuels',
    background: '« Bisafo » en twi (Ghana) désigne les chercheurs, apprenants et questionneurs. Au Camp Calma, le Bisafoɔ Circle est notre Founders Club — un réseau de pionniers qui explorent et apprennent ensemble.',
    exclusivity: 'Les 500 premiers membres forment le Bisafoɔ Circle (Founders). Le statut de Founder reste tant que vous êtes membre ; si vous partez, votre place s’ouvre à une nouvelle personne. Ensuite, la communauté s’agrandit jusqu’à 5 000 membres Gold.',
    pricing: 'Founder : 99 €/an avec code d’invitation (au lieu de 132 €). Gold : 199 €/an avec code d’invitation (au lieu de 265 €). Commission de parrainage de 20 %.',
    sustainability: 'Ces 500 premiers assurent la durabilité de l’ONG et débloquent des tirages mensuels à partir de 450 membres.',
    community_app_and_properties: 'Avec 5 000 membres, nous nous renforçons via l’app communautaire Sankofa. L’ONG peut offrir chaque mois un bien immobilier off‑grid durable — aujourd’hui au Portugal ; demain aussi au Ghana.',
    benefits_title: 'Avantages membres',
    benefits: [
      '🌱 -50 % sur les séjours à Camp Calma (Founder), 30 % pour Gold',
      '�� Priorité pour les projets de terrain & mobile‑home (p. ex. Afro Village)',
      '🎁 Tirages exclusifs (mensuels à partir de 450 membres)',
      '📚 Ressources numériques (permaculture, recettes, yoga, supports d’apprentissage)',
      '🗳️ Codécision dans les ateliers, événements & projets',
      '🎥 Événements exclusifs en direct/stream & aperçus de retraites',
      '📝 Mention de votre nom comme soutien fondateur',
    '🗣️ Avantage Founder : appel privé de 10 minutes avec Daniel ; lien de réservation après adhésion ; 3 créneaux/jour ; premier arrivé, premier servi'
    ],
    info_box: 'Le Bisafoɔ Circle (500 Founders) constitue le Founders Club. Plus tard, la communauté s’étend à 5 000 membres Gold — le cercle conserve ses privilèges uniques de fondateur.',
    founder_title: 'Adhésion Founder (limitée à 500)',
    founder_list: [
      'Prix normal : 132 €/an',
      'Avec code d’invitation : 99 €/an',
      'Commission de 20 % (19,80 €) pour le parrain — 79,20 € restent à l’ONG',
      'Le statut Founder demeure uniquement tant que vous êtes membre',
      'En cas de départ, votre place se libère pour une nouvelle personne',
    'Avantage Founder : appel privé de 10 minutes avec Daniel.',
    'Planification : trois créneaux de 10 minutes par jour ; attribution par ordre d’arrivée (first‑come, first‑served).',
    'Après adhésion, vous recevez le lien pour réserver votre appel de présentation.'
    ],
    gold_title: 'Adhésion Gold (membres 501–5 000)',
    gold_list: [
      'Prix normal : 265 €/an',
      'Avec code d’invitation : 199 €/an',
      'Commission de 20 % (39,80 €) pour le parrain — 159,20 € restent à l’ONG',
      'Pour tous les nouveaux membres après les 500 Founders'
    ],
    referral_title: 'Votre code de parrainage personnel',
    referral_text: 'Chaque membre reçoit un code de parrainage personnel après l’adhésion. Nous faisons confiance à la recommandation personnelle plutôt qu’à la publicité anonyme. La commission est une marque de reconnaissance — elle vous renforce, vous et la communauté.',
    future_title: 'Futur : adhésions normales (illimitées, après 5 000)',
    future_list: [
      'Tarif : 132 €/an (≈ comme Bisafo)',
      'Avantages : 10 % sur les séjours Camp Calma ; participation aux votes généraux',
      'Non inclus : pas d’accès aux livestreams & événements fondateurs exclusifs ; pas de tirages premium ; pas de privilèges sur les projets fonciers ; moins de droits de vote',
      'Seulement 500 places Founder ; si quelqu’un part, la place se libère (liste d’attente)',
      'Ainsi le Bisafoɔ Circle reste durablement à 500'
    ],
    narrative_title: 'Notre esprit commun',
    narrative: 'Le Bisafoɔ Circle est plus qu’une adhésion. Il montre que, en tant que diaspora africaine, nous sommes forts ensemble quand nous nous soutenons : nous construisons des projets durables indépendants des subventions et nous comptons sur la force, le savoir et la communauté. Chaque contribution, recommandation et adhésion renforce l’ONG — ainsi que l’unité, la fierté et l’autonomie.'
  },
};
translations.fr = frTranslations;

// Utility: deep merge fallback to English
const deepMerge = (base, override) => {
  if (Array.isArray(base) || Array.isArray(override)) return override ?? base;
  if (base && typeof base === 'object' && override && typeof override === 'object') {
    const result = {};
    for (const key of new Set([...Object.keys(base), ...Object.keys(override)])) {
      result[key] = deepMerge(base[key], override[key]);
    }
    return result;
  }
  return override !== undefined ? override : base;
};

// Inject Safe Harbor translations into main translations map
const safeHarborTranslations = {
  en: {
    heading: 'The Safe Harbor Initiative and Project Akoma 2025',
    sub: 'A movement for resilience and autonomy',
    features: [
      { icon: '🌊', title: 'Why & Vision', text: 'A real and digital harbor for learning, community and self‑reliance.' },
      { icon: '⚡', title: 'Akoma 2025: The Accelerator', text: 'Funding that speeds up impact — not a lottery.' },
      { icon: '🎁', title: 'Head‑Start Chance', text: 'Chances to win tangible assets like land or a campervan.' },
      { icon: '🤝', title: 'Lived Through the Bisafoɔ Circle', text: 'Workshops, retreats, courses and community events in Portugal.' }
    ],
    p1: 'A shared promise: a real and digital harbor where we learn, build community and practice self‑reliance — especially when times are uncertain.',
    p2: 'Akoma 2025 turns fundraising into momentum: together we accelerate impact, empower action and unlock head‑start chances that fuel the build‑out.',
    p3: 'Supporters can access a concrete head‑start option — chances to win tangible assets (e.g., land or a campervan) that help propel the build‑out.',
    listTitle: 'Interconnections and Interfaces',
    bullets: [
      'Vision & Practice: “Safe Harbor” provides the frame and the why; the Bisafoɔ Circle makes it tangible — members actively co‑create the harbor.',
      'Financing & Participation: Akoma 2025 links supporter levels (e.g., Gold) with Bisafo membership and offers exclusive head‑start chances (land, campervan). Every contribution builds the harbor.',
      'Lived Values: Access to workshops, retreats, digital courses, community events, and in‑person gatherings in Portugal — the harbor in practice.',
      'Sankofa NGO’s Role: Co‑determination within the Bisafoɔ Circle and stewardship in the overall narrative; the 500‑member goal secures long‑term sustainability.'
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
      { icon: '🤝', title: 'Gelebt im Bisafoɔ Circle', text: 'Workshops, Retreats, Kurse und Community‑Events in Portugal.' }
    ],
    p1: 'In einer Zeit zunehmender Unsicherheit wächst das Bedürfnis nach Kontrolle, Resilienz und Eigenverantwortung. Der „Sichere Hafen“ ist unser Leuchtturm: ein physischer und digitaler Ort des Lernens, der Gemeinschaft und gelebter Autarkie – eine Brücke zu einem bewussteren, freien Leben.',
    p2: 'Der Motor dahinter ist ��Projekt Akoma 2025: Deine Starthilfe“. Keine Lotterie, sondern ein Beschleuniger: Wir befähigen Menschen, Sicherheit und Lebensqualität aktiv zu gestalten. Jeder Beitrag investiert in reale Werte und den Aufbau – mit einmaliger Starthilfe‑Chance auf greifbare Vermögenswerte (z. B. Grundstück, Campervan). „Akoma“ – das Herz – steht für Ausdauer, Wohlwollen und den gemeinsamen Ruf zur Transformation.',
    p3: 'Dazu gehört eine konkrete Starthilfe‑Option für Unterstützer:innen �� mit Chancen auf reale Werte wie Grundstück oder Campervan, die den Aufbau zusätzlich vorantreiben.',
    listTitle: 'Zusammenhänge und Schnittstellen',
    bullets: [
      'Vision & Praxis: „Sicherer Hafen“ gibt Rahmen und Warum; der Bisafoɔ Circle macht ihn erfahrbar – Mitglieder gestalten den Hafen aktiv mit.',
      'Finanzierung & Beteiligung: Akoma 2025 verzahnt Unterstützer‑Level (z. B. Gold) mit der Bisafo‑Mitgliedschaft und bietet exklusive Starthilfe‑Chancen (Grundstück, Campervan). Jeder Beitrag baut mit.',
      'Gelebte Werte: Zugang zu Workshops, Retreats, digitalen Kursen, Community‑Events und Begegnungen in Portugal – die praktische Ebene des Hafens.',
      'Rolle der Sankofa‑NGO: Mitbestimmung im Bisafoɔ Circle und Begleitung der Bewegung im Narrativ; das Ziel von bis zu 500 Mitgliedern stärkt die langfristige Tragfähigkeit.'
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
      { icon: '🤝', title: 'Geleefd via de Bisafoɔ Circle', text: 'Workshops, retreats, cursussen en community‑events in Portugal.' }
    ],
    p1: 'Een gedeelde belofte: een fysieke en digitale haven waar we leren, gemeenschap bouwen en zelfredzaamheid beoefenen — juist in onzekere tijden.',
    p2: 'Akoma 2025 verandert fondsenwerving in momentum: samen versnellen we impact, versterken we handelen en openen we startkansen die de uitbouw voeden.',
    p3: 'Steuners krijgen een concrete startoptie — kansen op tastbare activa (bijv. grond of een camper) die de uitbouw vooruit helpen.',
    listTitle: 'Samenhang en raakvlakken',
    bullets: [
      'Visie & praktijk: “Safe Harbor” biedt het kader en het waarom; de Bisafoɔ Circle maakt het tastbaar — leden co‑creëren de haven actief.',
      'Financiering & participatie: Akoma 2025 verbindt steunniveaus (bijv. Gold) met Bisafo‑lidmaatschap en biedt exclusieve startkansen (grond, campervan). Elke bijdrage bouwt mee.',
      'Geleefde waarden: Toegang tot workshops, retreats, digitale cursussen, community‑evenementen en ontmoetingen in Portugal — de haven in de praktijk.',
      'Rol van de Sankofa‑NGO: Medezeggenschap binnen de Bisafoɔ Circle en stewardship in het geheel; het doel van 500 leden borgt lange‑termijn duurzaamheid.'
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
      { icon: '🤝', title: 'Vive‑se no Bisafoɔ Circle', text: 'Workshops, retiros, cursos e eventos comunitários em Portugal.' }
    ],
    p1: 'Uma promessa partilhada: um porto real e digital onde aprendemos, criamos comunidade e praticamos autossuficiência — sobretudo em tempos incertos.',
    p2: 'Akoma 2025 transforma a angariação em impulso: aceleramos impacto, fortalecemos a ação e abrimos oportunidades de arrancada que sustentam a construção.',
    p3: 'Inclui ainda uma opção concreta de arrancada para apoiantes — chances de ganhar ativos tangíveis (ex.: terreno ou autocaravana) que aceleram a construção.',
    listTitle: 'Ligações e Interfaces',
    bullets: [
      'Visão & Prática: “Porto Seguro” define o quadro e o porquê; o Bisafoɔ Circle torna‑o palpável — membros co‑criam ativamente o porto.',
      'Financiamento & Participação: Akoma 2025 liga níveis de apoio (ex.: Gold) à adesão Bisafo e oferece chances exclusivas de arrancada (terreno, autocaravana). Cada contribuição constrói o porto.',
      'Valores Vividos: Acesso a workshops, retiros, cursos digitais, eventos comunitários e encontros presenciais em Portugal — a prática do porto.',
      'Papel da ONG Sankofa: Codeterminação no Bisafo�� Circle e orientação no narrativo global; a meta dos 500 membros assegura sustentabilidade a longo prazo.'
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
    p1: 'Bɔhyɛ koro: kuro a ɛwɔ asase so ne online a y��sua, yɛ kurom na yɛdwuma yɛ ade — bere a nneɛma hintaw no koraa.',
    p2: 'Akoma 2025 yɛ ahoɔden ma akwankyerɛ: yɛma adwuma tu ntɛm, yɛma nnipa yɛ adwuma na yɛbue mfitiaseɛ akwanya a ɛma si‑so no tu.',
    p3: 'Aboaboafo nya mfitiaseɛ akwanya ankasa — akwanya nkɔ ade titiriw te sɛ asase anaa campervan a ɛma adwuma no tu ntɛm.',
    listTitle: 'Nkitahodie ne Nhyɛe',
    bullets: [
      'Adwene & Dwumadie: Safe Harbor ma yɛhu asɛm no ase; Bisafoɔ Circle ma ɛyɛ ade a wotumi hu — membifo na wodi kan bɛka mu.',
      'Sika & Apɔw: Akoma 2025 de akɛseɛ‑akɛse (te sɛ Gold) hyɛ Bisafo mu na ɛma mfitiaseɛ akyɛde (asase, campervan). Mo bɔ biara boa kuro no si.',
      'Nkwa a wɔte mu: Workshops, retreats, dijital nsɛmma, kurom‑afahyɛ ne Portugal mu nhyiam — Safe Harbor no wɔ adwumayɛ mu.',
      'Sankofa dwuma: Ɔtumi ka ho asɛm wɔ Bisafo mu na ɔkyerɛkwɛ adwuma no mu; botae a ɛyɛ 500 membifo ma NGO no gyina pintinn daa.'
    ],
    rec: 'Kyerɛ nkrata a abien no bom wɔ beae koro so, na mma wɔmmu wɔn ntam kyɛnkyɛn.'
  },
  ig: {
    heading: 'Mmegharị Safe Harbor na Project Akoma 2025',
    sub: 'Mgbatị maka ịdịte aka na onwe‑onwe',
    features: [
      { icon: '🌊', title: 'Gịnị & ��hụh���', text: 'Ụzọ ezi na dijital�� maka mmụta, obodo na onwe‑onwe.' },
      { icon: '⚡', title: 'Akoma 2025: Ngwagharị', text: 'Ego na‑eme ka mmetụta na‑aga ngwa — ọ bụghị lotiri.' },
      { icon: '🎁', title: 'Oge mbido', text: 'Oge mmeri n’akụkụ ihe di n’aka dị ka ala ma ọ bụ campervan.' },
      { icon: '🤝', title: 'Na‑ebi site n’Bisafoɔ Circle', text: 'Ogbugba ọrụ, retreats, kọọsị na ihe obodo na Portugal.' }
    ],
    p1: 'Nkwekọrịta anyị: ebe ezi na dijitalụ ebe anyị na‑amụta, na‑ewu obodo ma na‑eme onwe‑onwe — karịchaa n’oge enwegh��� ntụkwasị obi.',
    p2: 'Akoma 2025 na‑agbanwe ịnakọta ego ka ọ bụrụ ịrị elu: ọnụ anyị na‑agbagharị mmetụta, na‑enye mmụọ ọrụ ma na‑emepe ohere mbido nke na‑akwalite owuwu.',
    p3: 'Ndị na‑akwado nwere ike nweta nhọrọ mbido doro anya — ohere mmeri maka ihe di n’aka (dịka ala, campervan) na‑eme ka owuwu bụrụ ngwa ngwa.',
    listTitle: 'Njikọ na njikọ ọrụ',
    bullets: [
      'Echiche & Omume: “Safe Harbor” na‑enye okpokoro na ihe kpatara; Bisafoɔ Circle na‑eme ka ọ bụrụ ihe a na‑ahụ anya — ndị otu na���kọọ ọrụ ọnụ.',
      'Ego & Nsonye: Akoma 2025 jikọtara ogo nkwado (dịka Gold) na mmemme Bisafo ma nye ohere mbido pụrụ iche (ala, campervan). Onyinye ọ bụla na‑ewu ebe ọdụ a.',
      'Uche Ndụ: Ọnụ ụzọ na ogbako, retreats, kọọsị dijitalụ, ihe obodo na nzute ihu n’ihu na Portugal — ọdụ ahụ n’ọrụ.',
      'Ọrụ Sankofa NGO: Nsonye na mkpebi n’ime Bisafoɔ Circle na nlekọta n’akụkọ ukwu; ebumnuche ndị otu 500 na‑echekwa ịdịgide ogologo oge.'
    ],
    rec: 'Ndụmọdụ websaịtị: Gosipụta echiche abụọ ahụ ��nụ ma jikọta ha nke ọma.'
  },
  fr: {
    heading: 'L’initiative Safe Harbor et le projet Akoma 2025',
    sub: 'Un mouvement pour la résilience et l’autonomie',
    features: [
      { icon: '🌊', title: 'Pourquoi & Vision', text: 'Un port réel et numérique d’apprentissage, de communauté et d’autonomie.' },
      { icon: '⚡', title: 'Akoma 2025 : l’accélérateur', text: 'Un financement qui accélère l’impact — ce n’est pas une loterie.' },
      { icon: '🎁', title: 'Coup de pouce', text: 'Des chances de gagner des actifs concrets comme un terrain ou un camper‑van.' },
      { icon: '🤝', title: 'Vécu via le Bisafoɔ Circle', text: 'Ateliers, retraites, cours et événements communautaires au Portugal.' }
    ],
    p1: 'Une promesse partagée : un port réel et numérique où nous apprenons, bâtissons la communauté et pratiquons l’autonomie — surtout en période d’incertitude.',
    p2: 'Akoma 2025 transforme la collecte de fonds en élan : ensemble nous accélérons l’impact, renforçons l’action et ouvrons des coups de pouce qui nourrissent la construction.',
    p3: 'Les soutiens ont accès à une option concrète de coup de pouce — chances de gagner des actifs tangibles (p. ex. terrain, camper‑van) pour accélérer le projet.',
    listTitle: 'Interconnexions et interfaces',
    bullets: [
      'Vision & Pratique : “Safe Harbor” donne le cadre et le pourquoi ; le Bisafoɔ Circle le rend tangible — les membres co‑créent activement le port.',
      'Financement & Participation : Akoma 2025 relie les niveaux de soutien (ex. Gold) à l’adhésion Bisafo et propose des chances exclusives de coup de pouce (terrain, camper‑van). Chaque contribution construit le port.',
      'Valeurs vécues : Accès aux ateliers, retraites, cours numériques, événements communautaires et rencontres au Portugal — le port en pratique.',
      'Rôle de l’ONG Sankofa : Codécision au sein du Bisafoɔ Circle et “stewardship” du récit ; l’objectif de 500 membres garantit la durabilité à long terme.'
    ],
    rec: 'Recommandation : présenter les deux concepts ensemble dans une section cohérente et les relier où c’est pertinent.'
  }
};
for (const [lang, data] of Object.entries(safeHarborTranslations)) {
  translations[lang] = deepMerge(translations[lang] || {}, { safe_harbor: data });
}

// Inject Afro Village translations into main translations map
const afroVillageTranslations = {
  en: {
    title: 'Sankofa Village – A Village of Self‑Sufficiency',
    subtitle: 'Step by step we build a village that lives learning, community and self���reliance. Every contribution builds with us.',
    storyTitle: 'Why Sankofa Village (Sankofa)',
    currentLabel: 'Current Funding',
    goalLabel: 'Goal',
    legend: ['🔵 Planning & Start','🟢 Build‑up & first homes','🟡 Infrastructure & Culture','🟣 Sankofa Village Completed'],
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
      { amount: 1000000, name: 'Sankofa Village Completed', outcome: '10 autonomous mobile homes in Sankofa/Camp‑Calma design', icon: '🏡✨' }
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
    legend: ['🔵 Planning & start','🟢 Opbouw & eerste woningen','🟡 Infrastructuur & cultuur','🟣 Sankofa Village voltooid'],
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
      { amount: 1000000, name: 'Sankofa Village voltooid', outcome: '10 autonome mobiele woningen in Sankofa/Camp‑Calma‑design', icon: '🏡✨' }
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
    legend: ['🔵 Planeamento & Arranque','🟢 Construção & primeiras casas','🟡 Infraestrutura & Cultura','🟣 Sankofa Village Concluída'],
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
      { amount: 1000000, name: 'Sankofa Village Concluída', outcome: '10 casas móveis autônomas em design Sankofa/Camp‑Calma', icon: '🏡✨' }
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
    legend: ['🔵 Planung & Start','🟢 Aufbau & erste Häuser','🟡 Infrastruktur & Kultur','🟣 Sankofa Village vollendet'],
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
      { amount: 1000000, name: 'Sankofa Village vollendet', outcome: '10 autarke Mobilheime im Sankofa/Camp‑Calma‑Design', icon: '🏡✨' }
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
    legend: ['🔵 Nhyehyɛe & Mfitiaseɛ','🟢 Siesie & Ofie a edi kan','🟡 Ahyehyɛdeɛ & Amammerɛ','🟣 Sankofa Village Ewiee'],
    cta: 'Boa seisei',
    unlockedLabel: 'Abue',
    lockedLabel: 'Esi so',
    milestones: [
      { amount: 10000, name: 'Fapem', outcome: 'Nhyehyɛe, nneɛma a ɛho hia (nsuo/soɛ), fi‑asase permaculture design', icon: '🧱📐' },
      { amount: 25000, name: 'Ofie a edi kan', outcome: 'Ofie a ɛyɛ wo‑ara‑wo‑ho adwuma (show���home)', icon: '🏠' },
      { amount: 50000, name: 'Kurom Fufuuwee', outcome: 'Kɔkɔɔ mu aduan + solar didie; food‑forest mfiase', icon: '🍲☀️' },
      { amount: 100000, name: 'Sukuuni & Nhyiamu', outcome: 'Learning Dome (workshops, agoro, dijital sukuu)', icon: '🎓🎶' },
      { amount: 250000, name: 'Akoma', outcome: 'Mobilhome mmiɛnsa ewiee; teteɛ no betumi asi', icon: '🧡🛏️' },
      { amount: 500000, name: 'Kuro Fã', outcome: 'Mobilhome enum, tumi‑/nsuo‑fi, PV + sie', icon: '⚡💧' },
      { amount: 750000, name: 'Amammerɛ & Ntosoɔ', outcome: 'AfroBeats dibea, Creative Hub, retreat beae', icon: '🥁🎭' },
      { amount: 1000000, name: 'Sankofa Village Ewiee', outcome: 'Mobilhome du a wɔyɛ wo���ara‑wo‑ho adwuma wɔ Sankofa/Camp‑Calma ho‑nhyehyɛe mu', icon: '🏡✨' }
    ],
    story: [
      'Wo‑ara‑wo‑ho adwuma kyerɛ gyinabere ampa: nsuo, soɛ ne aduan wɔ baabi koro. Sankofa Village kyerɛ kwan a ɛsɛ sɛ yɛte mu daadaa.',
      'Kurom ne akoma: yɛsi beae a ɛma nhyiam, nnwom ne amammerɛ — baabi a nnipa hwɛ wɔn ho so.',
      'Sɛ yɛsua a, yɛde ho: workshops, dijital sukuu ne adwuma‑bom ma akyɛde a ɛkyɛ — ɛnnɛ ne ɔkyena.'
    ]
  },
  ig: {
    title: 'Sankofa Village – Obodo nke onwe‑onwe',
    subtitle: 'Nzọ nke nzọ ka anyị na‑ewu obodo nke na��ebi mmụta, obodo na onwe‑onwe. Onyinye ọ bụla na‑ewu ya.',
    storyTitle: 'Gịnị mere Sankofa Village',
    currentLabel: 'Ego a chịkọtara',
    goalLabel: 'Ebumnuche',
    legend: ['🔵 Nhazi & Mmalite','🟢 Owuwu & Ụlọ mbụ','🟡 Akụrụngwa & Omenala','🟣 Sankofa Village zuru oke'],
    cta: 'Kwado ugbu a',
    unlockedLabel: 'Emeghe',
    lockedLabel: 'Emechiri',
    milestones: [
      { amount: 10000, name: 'Ntọala', outcome: 'Nhazi, akụrụngwa bụ isi (mmiri/ike), mbido permaculture', icon: '🧱📐' },
      { amount: 25000, name: 'Ụlọ Mbụ', outcome: 'Ụlọ njem onwe‑onwe mbụ (show‑home)', icon: '🏠' },
      { amount: 50000, name: 'K���rịchn Obodo', outcome: 'Kichin kesaa + esi anyanwụ; mmalite food‑forest', icon: '🍲☀️' },
      { amount: 100000, name: 'Mmụta & Nzute', outcome: 'Learning Dome (ogbako, egwu, mmụta dijitalụ)', icon: '🎓🎶' },
      { amount: 250000, name: 'Obi', outcome: 'Ụlọ njem 3 zuru ezu; obibia mbu kwe omume', icon: '🧡🛏️' },
      { amount: 500000, name: 'Obodo Ọkara', outcome: '��lọ njem 5, etiti ike/mmiri, PV + nchekwa', icon: '⚡💧' },
      { amount: 750000, name: 'Omenala & Mbelata', outcome: 'AfroBeats ogbo, creative hub, ebe retreat', icon: '🥁🎭' },
      { amount: 1000000, name: 'Sankofa Village zuru oke', outcome: 'Ụlọ njem 10 onwe‑onwe n\'ime imewe Sankofa/Camp‑Calma', icon: '🏡✨' }
    ],
    story: [
      'Onwe‑onwe pụtara ịd��te aka n\'ezoghị oke: mmiri, ike na nri n\'ebe ah���. Sankofa Village na‑egosi ka esi ebi ndụ onwe‑onwe n\'omume.',
      'Obodo bụ obi: anyị na‑emepụta ebe na‑akwalite nzute, egwu na omenala — ebe ndị mmadụ na‑ele ibe ha anya.',
      'Mmụta na‑ewepụ ngwàgide: ogbako, mmụta dijitalụ na ime ọnụ na‑ewu nkà maka taa na echi.'
    ]
  },
  fr: {
    title: 'Sankofa Village – Un village d’autonomie',
    subtitle: 'Pas à pas, nous construisons un village qui vit l’apprentissage, la communauté et l’autonomie. Chaque contribution y participe.',
    storyTitle: 'Pourquoi Sankofa Village',
    currentLabel: 'Financement actuel',
    goalLabel: 'Objectif',
    legend: ['🔵 Planification & démarrage','🟢 Construction & premières maisons','🟡 Infrastructures & culture','🟣 Sankofa Village achevé'],
    cta: 'Soutenir maintenant',
    unlockedLabel: 'Débloqué',
    lockedLabel: 'Verrouillé',
    milestones: [
      { amount: 10000, name: 'Les fondations', outcome: 'Planification, infrastructures de base (eau/énergie), début du design en permaculture', icon: '🧱📐' },
      { amount: 25000, name: 'La première maison', outcome: 'Première maison mobile autonome (show‑home)', icon: '🏠' },
      { amount: 50000, name: 'Cuisine communautaire', outcome: 'Cuisine partagée + cuisson solaire ; démarrage de la forêt nourricière', icon: '🍲☀️' },
      { amount: 100000, name: 'Éducation & rencontres', outcome: 'Learning Dome (ateliers, musique, apprentissage numérique)', icon: '🎓🎶' },
      { amount: 250000, name: 'Le cœur', outcome: '3 maisons mobiles terminées ; premiers séjours possibles', icon: '🧡🛏️' },
      { amount: 500000, name: 'La moitié du village', outcome: '5 maisons mobiles, centre énergie/eau, PV + stockage', icon: '⚡💧' },
      { amount: 750000, name: 'Culture & expansion', outcome: 'Scène AfroBeats, pôle créatif, espace de retraite', icon: '🥁🎭' },
      { amount: 1000000, name: 'Sankofa Village achevé', outcome: '10 maisons mobiles autonomes au design Sankofa/Camp‑Calma', icon: '🏡✨' }
    ],
    story: [
      'L’autonomie, c’est la vraie résilience : eau, énergie et nourriture sur place. Sankofa Village montre comment la vivre au quotidien.',
      'La communauté est le cœur : nous créons des espaces qui favorisent les rencontres, la musique et la culture — un lieu de soin mutuel.',
      'Apprendre libère : ateliers, éducation numérique et faire ensemble développent des compétences durables — aujourd’hui et demain.'
    ]
  }
};
for (const [lang, data] of Object.entries(afroVillageTranslations)) {
  translations[lang] = deepMerge(translations[lang] || {}, { afro_village: data });
}

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
  const orderedLanguages = ['en', 'fr', 'de', 'pt', 'nl', 'twi', 'ig'];
  const flags = { en: '🇬🇧', fr: '🇫🇷', de: '🇩🇪', pt: '🇵🇹', nl: '🇳🇱', twi: '🇬🇭', ig: '🇳🇬' };
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
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">{flags[langCode]}</span>{langCode.toUpperCase()}</span>
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
        <span className="inline-flex items-center gap-2"><span aria-hidden="true">{flags[language]}</span>{language.toUpperCase()}</span>
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
                  <span className="inline-flex items-center gap-2"><span aria-hidden="true">{flags[langCode]}</span>{langCode.toUpperCase()}</span>
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
    fr: 'Partenaires & Coopérations',
    pt: 'Parceiros & Colaborações',
    de: 'Partner & Kooperationen',
    nl: 'Partners & Samenwerkingen',
    twi: 'Adwumayɛ Mmoafoɔ & Nkitahodie',
    ig: 'Ndị mmekọ & Mmekọr��ta',
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
    {
      name: 'the good ones',
      url: 'https://thegoodones.io/',
      image: 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F3422a4f28be64e478100cb0fa8995b2e?format=webp&width=800',
      alt: 'the good ones logo'
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
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Ff108f22a273944c0aec6b86e77a39a1e?format=webp&width=800" alt="Placeholder 1" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">{t.description.photo1_caption}</p>
          </div>
          <div className="text-center">
            <img src={communitykitchen01} alt="Placeholder 2" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">Building our community kitchen</p>
          </div>
          <div className="text-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F750c421417534bc1acf8f61a8fa1d968?format=webp&width=800" alt="Placeholder 3" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">{t.description.photo3_caption}</p>
          </div>
          <div className="text-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Fd6d3816fb1b9429e911f10f32f78b8ac?format=webp&width=800" alt="Daniel when he settled at the property 2022" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">{t.description.photo4_caption}</p>
          </div>
          <div className="text-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Fffc4b4a821744a70b5eaa2fb751b68fb?format=webp&width=800" alt="Camp Calma in 2022" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">{t.description.photo5_caption}</p>
          </div>
          <div className="text-center">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F099b266b2b9c4c85ae3633506d61b167?format=webp&width=800" alt="2022 - First temporary construction and our new water borehole" className="w-full h-48 object-cover rounded-md" />
            <p className="text-sm text-gray-600 mt-2 text-center">{t.description.photo6_caption}</p>
          </div>
        </div>
      </div>
    </div>
  </section> // Added closing div tag here
);

const VideoSection = ({ t, language }) => {
  const preferred = translations?.[language]?.video?.youtube_link || '';
  const isPlaceholder = /VIDEO_ID_/i.test(preferred);
  const url = !preferred || isPlaceholder ? translations.en.video.youtube_link : preferred;
  const videoId = url.split('/').pop().split('?')[0];
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

// On‑Demand Showcase Video (loads only after click)
const OnDemandVideoSection = ({ language, url, thumbnail }) => {
  const headings = {
    en: 'More from Camp Calma',
    de: 'Noch ein Einblick in Camp Calma',
    pt: 'Mais de Camp Calma',
    nl: 'Nog een blik op Camp Calma',
    twi: 'Bio fi Camp Calma',
    ig: 'Vidiyo ọzọ site na Camp Calma',
    fr: 'Plus de Camp Calma'
  };
  const title = headings[language] || 'More from Camp Calma';
  const [show, setShow] = useState(false);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
        </div>
        <div className="relative w-full max-w-4xl mx-auto" style={{ paddingBottom: '56.25%', height: 0 }}>
          {!show ? (
            <button
              type="button"
              onClick={() => setShow(true)}
              className="absolute top-0 left-0 w-full h-full text-white flex items-center justify-center"
              aria-label="Play video"
            >
              {thumbnail && (
                <img src={thumbnail} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover" />
              )}
              <span className="absolute inset-0 bg-gray-900/50"></span>
              <div className="relative text-center z-10">
                <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 flex items-center justify-center shadow-lg transition-colors">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <p className="text-sm text-gray-100">Click to load and play</p>
              </div>
            </button>
          ) : (
            <video
              src={url}
              className="absolute top-0 left-0 w-full h-full"
              controls
              autoPlay
              playsInline
              preload="none"
            />
          )}
        </div>
      </div>
    </section>
  );
};

// NEW: Safe Harbor Initiative section (multilingual using existing language state)
const SafeHarborSection = ({ t, language }) => {
  const langKey = ['en','pt','de','twi','ig','nl','fr'].includes(language) ? language : 'en';
  const content = t.safe_harbor || {
    en: {
      heading: 'The Safe Harbor Initiative and Project Akoma 2025',
      sub: 'A movement for resilience and autonomy',
      features: [
        { icon: '🌊', title: 'Why & Vision', text: 'A real and digital harbor for learning, community and self‑reliance.' },
        { icon: '⚡', title: 'Akoma 2025: The Accelerator', text: 'Funding that speeds up impact — not a lottery.' },
        { icon: '🎁', title: 'Head‑Start Chance', text: 'Chances to win tangible assets like land or a campervan.' },
        { icon: '🤝', title: 'Lived Through the Bisafoɔ Circle', text: 'Workshops, retreats, courses and community events in Portugal.' }
      ],
      p1: 'A shared promise: a real and digital harbor where we learn, build community and practice self‑reliance — especially when times are uncertain.',
      p2: 'Akoma 2025 turns fundraising into momentum: together we accelerate impact, empower action and unlock head‑start chances that fuel the build‑out.',
      p3: 'Supporters can access a concrete head‑start option — chances to win tangible assets (e.g., land or a campervan) that help propel the build‑out.',
      listTitle: 'Interconnections and Interfaces',
      bullets: [
        'Vision & Practice: “Safe Harbor” provides the frame and the why; the Bisafoɔ Circle makes it tangible — members actively co‑create the harbor.',
        'Financing & Participation: Akoma 2025 links supporter levels (e.g., Gold) with Bisafo membership and offers exclusive head‑start chances (land, campervan). Every contribution builds the harbor.',
        'Lived Values: Access to workshops, retreats, digital courses, community events, and in‑person gatherings in Portugal — the harbor in practice.',
        'Sankofa NGO’s Role: Co���determination within the Bisafoɔ Circle and stewardship in the overall narrative; the 500‑member goal secures long‑term sustainability.'
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
        { icon: '🤝', title: 'Gelebt im Bisafoɔ Circle', text: 'Workshops, Retreats, Kurse und Community‑Events in Portugal.' }
      ],
      p1: 'In einer Zeit zunehmender Unsicherheit wächst das Bedürfnis nach Kontrolle, Resilienz und Eigenverantwortung. Der „Sichere Hafen“ ist unser Leuchtturm: ein physischer und digitaler Ort des Lernens, der Gemeinschaft und gelebter Autarkie – eine Brücke zu einem bewussteren, freien Leben.',
      p2: 'Der Motor dahinter ist „Projekt Akoma 2025: Deine Starthilfe“. Keine Lotterie, sondern ein Beschleuniger: Wir befähigen Menschen, Sicherheit und Lebensqualität aktiv zu gestalten. Jeder Beitrag investiert in reale Werte und den Aufbau – mit einmaliger Starthilfe��Chance auf greifbare Vermögenswerte (z. B. Grundstück, Campervan). „Akoma�� – das Herz – steht für Ausdauer, Wohlwollen und den gemeinsamen Ruf zur Transformation.',
      p3: 'Dazu gehört eine konkrete Starthilfe‑Option für Unterstützer:innen ��� mit Chancen auf reale Werte wie Grundstück oder Campervan, die den Aufbau zusätzlich vorantreiben.',
      listTitle: 'Zusammenhänge und Schnittstellen',
      bullets: [
        'Vision & Praxis: „Sicherer Hafen“ gibt Rahmen und Warum; der Bisafoɔ Circle macht ihn erfahrbar – Mitglieder gestalten den Hafen aktiv mit.',
        'Finanzierung & Beteiligung: Akoma 2025 verzahnt Unterstützer‑Level (z. B. Gold) mit der Bisafo‑Mitgliedschaft und bietet exklusive Starthilfe‑Chancen (Grundstück, Campervan). Jeder Beitrag baut mit.',
        'Gelebte Werte: Zugang zu Workshops, Retreats, digitalen Kursen, Community‑Events und Begegnungen in Portugal – die praktische Ebene des Hafens.',
        'Rolle der Sankofa‑NGO: Mitbestimmung im Bisafoɔ Circle und Begleitung der Bewegung im Narrativ; das Ziel von bis zu 500 Mitgliedern stärkt die langfristige Tragfähigkeit.'
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
        { icon: '����', title: 'Geleefd via de Bisafoɔ Circle', text: 'Workshops, retreats, cursussen en community‑events in Portugal.' }
      ],
      p1: 'Een gedeelde belofte: een fysieke en digitale haven waar we leren, gemeenschap bouwen en zelfredzaamheid beoefenen — juist in onzekere tijden.',
      p2: 'Akoma 2025 verandert fondsenwerving in momentum: samen versnellen we impact, versterken we handelen en openen we startkansen die de uitbouw voeden.',
      p3: 'Steuners krijgen een concrete startoptie — kansen op tastbare activa (bijv. grond of een camper) die de uitbouw vooruit helpen.',
      listTitle: 'Samenhang en raakvlakken',
      bullets: [
        'Visie & praktijk: “Safe Harbor” biedt het kader en het waarom; de Bisafoɔ Circle maakt het tastbaar — leden co‑creëren de haven actief.',
        'Financiering & participatie: Akoma 2025 verbindt steunniveaus (bijv. Gold) met Bisafo‑lidmaatschap en biedt exclusieve startkansen (grond, campervan). Elke bijdrage bouwt mee.',
        'Geleefde waarden: Toegang tot workshops, retreats, digitale cursussen, community‑evenementen en ontmoetingen in Portugal — de haven in de praktijk.',
        'Rol van de Sankofa‑NGO: Medezeggenschap binnen de Bisafoɔ Circle en stewardship in het geheel; het doel van 500 leden borgt lange‑termijn duurzaamheid.'
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
        { icon: '🤝', title: 'Vive‑se no Bisafoɔ Circle', text: 'Workshops, retiros, cursos e eventos comunitários em Portugal.' }
      ],
      p1: 'Uma promessa partilhada: um porto real e digital onde aprendemos, criamos comunidade e praticamos autossuficiência — sobretudo em tempos incertos.',
      p2: 'Akoma 2025 transforma a angariação em impulso: aceleramos impacto, fortalecemos a ação e abrimos oportunidades de arrancada que sustentam a construção.',
      p3: 'Inclui ainda uma opção concreta de arrancada para apoiantes — chances de ganhar ativos tangíveis (ex.: terreno ou autocaravana) que aceleram a construção.',
      listTitle: 'Ligações e Interfaces',
      bullets: [
        'Visão & Prática: “Porto Seguro” define o quadro e o porquê; o Bisafoɔ Circle torna‑o palpável �� membros co‑criam ativamente o porto.',
        'Financiamento & Participação: Akoma 2025 liga níveis de apoio (ex.: Gold) à adesão Bisafo e oferece chances exclusivas de arrancada (terreno, autocaravana). Cada contribuição constrói o porto.',
        'Valores Vividos: Acesso a workshops, retiros, cursos digitais, eventos comunitários e encontros presenciais em Portugal — a prática do porto.',
        'Papel da ONG Sankofa: Codeterminação no Bisafoɔ Circle e orientação no narrativo global; a meta dos 500 membros assegura sustentabilidade a longo prazo.'
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
        'Adwene & Dwumadie: Safe Harbor ma yɛhu asɛm no ase; Bisafoɔ Circle ma ɛyɛ ade a wotumi hu — membifo na wodi kan b����� mu.',
        'Sika & Apɔw: Akoma 2025 de akɛse���akɛse (te sɛ Gold) hyɛ Bisafo mu na ɛma mfitiaseɛ akyɛde (asase, campervan). Mo bɔ biara boa kuro no si.',
        'Nkwa a wɔte mu: Workshops, retreats, dijital nsɛmma, kurom‑afahyɛ ne Portugal mu nhyiam — Safe Harbor no wɔ adwumayɛ mu.',
        'Sankofa dwuma: Ɔtumi ka ho asɛm wɔ Bisafo mu na ɔkyerɛkwɛ adwuma no mu; botae a ɛyɛ 500 membifo ma NGO no gyina pintinn daa.'
      ],
      rec: 'Kyerɛ nkrata a abien no bom wɔ beae koro so, na mma wɔmmu wɔn ntam kyɛnkyɛn.'
    },
    ig: {
      heading: 'Mmegharị Safe Harbor na Project Akoma 2025',
      sub: 'Mgbatị maka ���dịte aka na onwe‑onwe',
      features: [
        { icon: '🌊', title: 'Gịnị & Ọhụhụ', text: 'Ụzọ ezi na dijitalụ maka mmụta, obodo na onwe‑onwe.' },
        { icon: '⚡', title: 'Akoma 2025: Ngwagharị', text: 'Ego na-eme ka mmetụta na-aga ngwa — ọ bụghị lotiri.' },
        { icon: '🎁', title: 'Oge mbido', text: 'Oge mmeri n’ak��kụ ihe di n’aka dị ka ala ma ọ bụ campervan.' },
        { icon: '🤝', title: 'Na‑ebi site n’Bisafoɔ Circle', text: 'Ogbugba ọrụ, retreats, kọọsị na ihe obodo na Portugal.' }
      ],
      p1: 'Nkwek��rịta anyị: ebe ezi na dijitalụ ebe anyị na‑amụta, na‑ewu obodo ma na‑eme onwe‑onwe — kar���chaa n’oge enweghị nt��kwasị obi.',
      p2: 'Akoma 2025 na‑agbanwe ���nakọta ego ka ọ bụrụ ịrị elu: ọnụ anyị na���agbagharị mmetụta, na‑enye mmụọ ọrụ ma na‑emepe ohere mbido nke na‑akwalite owuwu.',
      p3: 'Ndị na‑akwado nwere ike nweta nh��rọ mbido doro anya — ohere mmeri maka ihe di n’aka (dịka ala, campervan) na‑eme ka owuwu b��rụ ngwa ngwa.',
      listTitle: 'Njikọ na njikọ ọrụ',
      bullets: [
        'Echiche & Omume: “Safe Harbor” na-enye okpokoro na ihe kpatara; Bisafoɔ Circle na-eme ka ọ bụrụ ihe a na-ahụ anya — ndị otu na‑kọọ ọrụ ọnụ.',
        'Ego & Nsonye: Akoma 2025 jikọtara ogo nkwado (dịka Gold) na mmemme Bisafo ma nye ohere mbido pụrụ iche (ala, campervan). Onyinye ọ bụla na‑ewu ebe ọdụ a.',
        'Uche Ndụ: Ọnụ ụzọ na ogbako, retreats, kọọsị dijitalụ, ihe obodo na nzute ihu n’ihu na Portugal — ọdụ ahụ n’ọrụ.',
        'Ọrụ Sankofa NGO: Nsonye na mkpebi n’ime Bisafoɔ Circle na nlekọta n’akụkọ ukwu; ebumnuche ndị otu 500 na‑echekwa ịdịgide ogologo oge.'
      ],
      rec: 'Ndụmọd��� websaịtị: Gosipụta echiche abụọ ahụ ọnụ ma jik��ta ha nke ọma.'
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
              {t.bisafo.benefit_5 && (
                <div className="flex items-start gap-2">
                  <span>{t.bisafo.benefit_5}</span>
                </div>
              )}
              {t.bisafo.benefit_6 && (
                <div className="flex items-start gap-2">
                  <span>{t.bisafo.benefit_6}</span>
                </div>
              )}
              {t.bisafo.benefit_7 && (
                <div className="flex items-start gap-2">
                  <span>{t.bisafo.benefit_7}</span>
                </div>
              )}
            </div>
          </div>

          {/* Call-to-Action */}
          <div className="text-center">
            <BisafoMembershipCTA t={t} />
          </div>
        </div>
      </div>
    </section>
  );
};

const BisafoMembershipCTA = ({ aff, t }) => {
  const id = useMemo(() => `bisafoc-cta-${Math.random().toString(36).slice(2)}-${Date.now()}` , []);
  useEffect(() => {
    const root = document.getElementById(id);
    if (!root) return;
    const input = root.querySelector('input');
    const button = root.querySelector('button');
    const BASE = 'https://donate.sankofa-ngo.org/b/aFabJ2gCH5aQ9eq7Flgfu0a';
    const mapLocale = (lang) => {
      const m = { en: 'en', de: 'de', fr: 'fr', nl: 'nl', pt: 'pt', twi: 'en', ig: 'en' };
      const key = (lang || '').toString().toLowerCase().split(/[-_]/)[0];
      return m[key] || 'en';
    };
    const detectLang = () => {
      try {
        const attr = (document.documentElement.getAttribute('lang') || '').trim();
        if (attr) return mapLocale(attr);
      } catch (_e) {}
      try {
        if (window.__siteLang) return mapLocale(window.__siteLang);
      } catch (_e) {}
      return 'en';
    };
    const getAffiliate = () => {
      const params = new URLSearchParams(window.location.search);
      const ref = params.get('ref');
      if (ref) return `aff_${ref}`;
      const handle = root.getAttribute('data-aff') || (aff ? String(aff) : '');
      if (handle) return `aff_${handle}`;
      return '';
    };
    const sanitizePromo = (val) => (val || '').toString().toUpperCase().replace(/[^A-Z0-9_-]/g, '');
    const buildUrl = () => {
      const url = new URL(BASE);
      url.searchParams.set('locale', detectLang());
      const promo = sanitizePromo(input?.value || '');
      if (promo) url.searchParams.set('prefilled_promo_code', promo);
      const affiliate = getAffiliate();
      if (affiliate) url.searchParams.set('client_reference_id', affiliate);
      return url.toString();
    };
    const onClick = (e) => {
      try { e?.preventDefault?.(); } catch (_e) {}
      const href = buildUrl();
      try {
        window.dispatchEvent(new CustomEvent('bisafoc:cta-click', {
          detail: {
            locale: detectLang(),
            promo: sanitizePromo(input?.value || ''),
            affiliate: getAffiliate(),
            href,
          },
        }));
      } catch (_e) {}
      window.open(href, '_blank', 'noopener,noreferrer');
    };
    const onKey = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        onClick();
      }
    };
    button?.addEventListener('click', onClick);
    input?.addEventListener('keydown', onKey);
    return () => {
      button?.removeEventListener('click', onClick);
      input?.removeEventListener('keydown', onKey);
    };
  }, [id, aff]);

  // Determine language for texts
  const mapLocale = (lang) => {
    const m = { en: 'en', de: 'de', fr: 'fr', nl: 'nl', pt: 'pt', twi: 'twi', ig: 'ig' };
    const key = (lang || '').toString().toLowerCase().split(/[-_]/)[0];
    return m[key] || 'en';
  };
  const langKey = (() => {
    try {
      const attr = (document.documentElement.getAttribute('lang') || '').trim();
      if (attr) return mapLocale(attr);
    } catch (_e) {}
    try {
      if (window.__siteLang) return mapLocale(window.__siteLang);
    } catch (_e) {}
    return 'en';
  })();
  const labelByLang = {
    en: 'Promo / Referral code (optional)',
    de: 'Gutschein‑/Empfehlungscode (optional)',
    fr: 'Code promo / parrainage (optionnel)',
    nl: 'Promotie‑/Referentiecode (optioneel)',
    pt: 'Código promocional / referência (opcional)',
    twi: 'Promo / Referral code (optional)',
    ig: 'Promo / Referral code (optional)'
  };
  const placeholderByLang = {
    en: 'e.g. OHEMAA20',
    de: 'z. B. OHEMAA20',
    fr: 'ex. OHEMAA20',
    nl: 'bijv. OHEMAA20',
    pt: 'ex.: OHEMAA20',
    twi: 'e.g. OHEMAA20',
    ig: 'e.g. OHEMAA20'
  };
  const helpByLang = {
    en: 'Checkout opens in your language. Codes are applied automatically.',
    de: 'Kasse öffnet in deiner Sprache. Codes werden automatisch angewendet.',
    fr: 'Le paiement s’ouvre dans votre langue. Les codes sont appliqués automatiquement.',
    nl: 'Afrekenen opent in jouw taal. Codes worden automatisch toegepast.',
    pt: 'O checkout abre no teu idioma. Os códigos são aplicados automaticamente.',
    twi: 'Checkout bɛbue wo kasa mu. Codes no betimimu otomatik.',
    ig: 'Checkout mepee na asụsụ gị. A na‑etinye koodu akpaghị aka.'
  };
  const buttonText = (t?.bisafo?.cta_button) || ({
    en: 'Join Bisafoɔ Circle',
    de: 'Jetzt Mitglied werden',
    fr: 'Devenir membre maintenant',
    nl: 'Word nu lid',
    pt: 'Tornar‑me Membro',
    twi: 'Bɛyɛ Membifo Seesei',
    ig: 'Banye ugbu a'
  }[langKey] || 'Join Bisafoɔ Circle');

  const css = `
#${id} .cta-input { width:100%; padding:12px 14px; border:1px solid #d1d5db; border-radius:8px; font-size:16px; box-sizing:border-box; }
#${id} .cta-input:focus { outline:2px solid #16A34A; outline-offset:2px; }
#${id} .cta-button { width:100%; margin-top:12px; padding:14px 20px; border:none; border-radius:9999px; background:#16A34A; color:#fff; font-weight:700; font-size:18px; cursor:pointer; transition:background-color .2s ease-in-out; }
#${id} .cta-button:hover { background:#15803D; }
#${id} .cta-button:focus { outline:3px solid rgba(22,163,74,0.4); outline-offset:2px; }
#${id} .cta-label { display:block; margin-bottom:8px; font-weight:600; color:#374151; font-size:14px; }
#${id} .cta-help { font-size:13px; color:#6b7280; margin-top:10px; }
#${id} .cta-container { max-width:640px; margin:0 auto; padding:12px; box-sizing:border-box; }
  `;

  return (
    <div id={id} className="bisafoc-cta" data-bisafoc-cta={aff ? true : undefined} data-aff={aff || undefined}>
      <style>{css}</style>
      <div className="cta-container">
        <label htmlFor={`${id}-input`} className="cta-label">{labelByLang[langKey] || labelByLang.en}</label>
        <input id={`${id}-input`} className="cta-input" type="text" inputMode="text" autoComplete="off" placeholder={placeholderByLang[langKey] || placeholderByLang.en} aria-label={labelByLang[langKey] || labelByLang.en} />
        <button type="button" className="cta-button" aria-label={buttonText}>
          {buttonText}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 8, verticalAlign: 'middle' }}>
            <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
          </svg>
        </button>
        <p className="cta-help">{helpByLang[langKey] || helpByLang.en}</p>
      </div>
    </div>
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
              <div className="text-2xl">💎</div>
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
          {t.bisafo_about.pricing && <p className="text-gray-700 mb-4">{t.bisafo_about.pricing}</p>}
          <p className="text-gray-700 mb-6">{t.bisafo_about.sustainability}</p>
          {t.bisafo_about.community_app_and_properties && (
            <p className="text-gray-700 mb-6">{t.bisafo_about.community_app_and_properties}</p>
          )}

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

          {t.bisafo_about.founder_title && (
            <div className="bg-white border rounded-lg p-6 shadow-sm mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.bisafo_about.founder_title}</h3>
              {t.bisafo_about.founder_list && (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {t.bisafo_about.founder_list.map((li, i) => (<li key={i}>{li}</li>))}
                </ul>
              )}
            </div>
          )}

          {t.bisafo_about.gold_title && (
            <div className="bg-white border rounded-lg p-6 shadow-sm mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.bisafo_about.gold_title}</h3>
              {t.bisafo_about.gold_list && (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {t.bisafo_about.gold_list.map((li, i) => (<li key={i}>{li}</li>))}
                </ul>
              )}
            </div>
          )}

          {t.bisafo_about.referral_title && (
            <div className="bg-white border rounded-lg p-6 shadow-sm mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.bisafo_about.referral_title}</h3>
              {t.bisafo_about.referral_text && <p className="text-gray-700">{t.bisafo_about.referral_text}</p>}
            </div>
          )}

          {t.bisafo_about.future_title && (
            <div className="bg-white border rounded-lg p-6 shadow-sm mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.bisafo_about.future_title}</h3>
              {t.bisafo_about.future_list && (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {t.bisafo_about.future_list.map((li, i) => (<li key={i}>{li}</li>))}
                </ul>
              )}
            </div>
          )}

          {t.bisafo_about.narrative_title && (
            <div className="bg-white border rounded-lg p-6 shadow-sm mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">{t.bisafo_about.narrative_title}</h3>
              {t.bisafo_about.narrative && <p className="text-gray-700">{t.bisafo_about.narrative}</p>}
            </div>
          )}

          <div className="text-center mt-6">
            <BisafoMembershipCTA t={t} />
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
  const OUTO_URL = 'https://openinguptheoutdoors.com/programme';
  const SOCIAL_IMPACT_URL = 'https://socialimpact.eu/social-entrepreneurship/challenge2023/challenge2023-teams-1/camp-calma';
  const OUTO_IMG = 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Fcb93318e2c1343ceaecdb47d44e425b3?format=webp&width=800';
  const SOCIAL_IMPACT_IMG = 'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Ff4ef0052f711462987d3b08da03beefa?format=webp&width=800';
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
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href={OUTO_URL} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative w-full pt-[100%]">
                  <img src={OUTO_IMG} alt="Changemakers 2024 – Social Impact & OUTO" className="absolute inset-0 w-full h-full object-contain rounded-lg shadow" />
                </div>
                <span className="mt-2 block text-green-600 group-hover:text-green-700 font-medium">{t.press?.outo_cta}</span>
              </a>
              <a href={SOCIAL_IMPACT_URL} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative w-full pt-[100%]">
                  <img src={SOCIAL_IMPACT_IMG} alt="Changemakers 2024 – Social Impact & OUTO" className="absolute inset-0 w-full h-full object-contain rounded-lg shadow" />
                </div>
                <span className="mt-2 block text-green-600 group-hover:text-green-700 font-medium">{t.press?.social_impact_cta}</span>
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t.press?.changemakers_label}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FounderSection = ({ t }) => {
  const images = [
    'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F92daa522eddf45bea2f5707e30f71189?format=webp&width=800',
    'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F5c8d70fc13034935b06d79915d0df6dc?format=webp&width=800',
    'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F090a5736559a4ed3adfce3c587757509?format=webp&width=800',
    'https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Ffe61e1cb1d8f4f2f9350dcf81e6a2614?format=webp&width=800',
  ];
  const instaUrl = 'https://www.instagram.com/daniel_lateef_duroshola/';
  return (
    <section id="founder" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">{t.founder?.heading || 'Founder — Daniel Lateef Duroshola'}</h2>
          <p className="text-lg text-gray-600 mt-2">{t.founder?.subheading}</p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow relative w-full pt-[75%]">
              <img src={src} alt="Scenes of daily life at Camp Calma" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <a href={instaUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full shadow">
            {t.founder?.instagram_cta || 'Open Instagram'}
          </a>
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
const AfroVillageProgress = ({ language, t }) => {
  const [totalRaised, setTotalRaised] = useState(325000);
  const goal = 1000000;

  const langKey = ['en','pt','de','twi','ig','nl','fr'].includes(language) ? language : 'en';
  const content = t.afro_village || {
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
        'Learning sets you free: workshops, digital education and doing together build skills that carry �� today and tomorrow.'
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
        { amount: 750000, name: 'Cultura & Expansão', outcome: 'Palco AfroBeats, Creative Hub, espaço de retiro', icon: '🥁���' },
        { amount: 1000000, name: 'Sankofa Village Concluída', outcome: '10 casas móveis autônomas em design Sankofa/Camp‑Calma', icon: '🏡✨' },
      ],
      story: [
        'Autossuficiência é resiliência real: água, energia e alimento no local. O Sankofa Village mostra como viver isso na prática.',
        'Comunidade é o coração: criamos espaços que promovem encontros, música e cultura �� um lugar de cuidado mútuo.',
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
        '�� Sankofa Village vollendet',
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
        'Wo‑ara‑wo‑ho adwuma kyerɛ gyinabere ampa: nsuo, so�� ne aduan wɔ baabi koro. Sankofa Village kyerɛ kwan a ɛsɛ sɛ yɛte mu daadaa.',
        'Kurom ne akoma: yɛsi beae a ɛma nhyiam, nnwom ne amammerɛ — baabi a nnipa hw�� wɔn ho so.',
        'Sɛ y��sua a, yɛde ho: workshops, dijital sukuu ne adwuma‑bom ma akyɛde a ɛkyɛ — ɛnnɛ ne ɔkyena.'
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
        { amount: 25000, name: 'Ụlọ Mbụ', outcome: 'Ụlọ njem onwe���onwe mbụ (show‑home)', icon: '🏠' },
        { amount: 50000, name: 'Kịrịchn Obodo', outcome: 'Kichin kesaa + esi anyanwụ; mmalite food‑forest', icon: '🍲☀️' },
        { amount: 100000, name: 'Mmụta & Nzute', outcome: 'Learning Dome (ogbako, egwu, mmụta dijitalụ)', icon: '🎓🎶' },
        { amount: 250000, name: 'Obi', outcome: 'Ụlọ njem 3 zuru ezu; obibia mbu kwe omume', icon: '🧡🛏️' },
        { amount: 500000, name: 'Obodo Ọkara', outcome: 'Ụlọ njem 5, etiti ike/mmiri, PV + nchekwa', icon: '⚡💧' },
        { amount: 750000, name: 'Omenala & Mbelata', outcome: 'AfroBeats ogbo, creative hub, ebe retreat', icon: '🥁🎭' },
        { amount: 1000000, name: 'Sankofa Village zuru oke', outcome: 'Ụlọ njem 10 onwe‑onwe n\'ime imewe Sankofa/Camp‑Calma', icon: '🏡✨' },
      ],
      story: [
        'Onwe‑onwe pụtara ịdịte aka n\'ezoghị oke: mmiri, ike na nri n\'ebe ahụ. Sankofa Village na-egosi ka esi ebi ndụ onwe���onwe n\'omume.',
        'Obodo bụ obi: anyị na‑emep���ta ebe na‑akwalite nzute, egwu na omenala — ebe ndị mmadụ na‑ele ibe ha anya.',
        'Mmụta na‑ewepụ ngw���gide: ogbako, mmụta dijitalụ na ime ọnụ na‑ewu nkà maka taa na echi.'
      ]
    }
  }[langKey];

  const localeMap = { en: 'en-US', fr: 'fr-FR', pt: 'pt-PT', de: 'de-DE', nl: 'nl-NL', twi: 'en-GB', ig: 'ig-NG' };

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

const LanguageSelectModal = ({ isOpen, onSelect, onClose }) => {
  if (!isOpen) return null;
  const langs = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'pt', label: 'Português', flag: '🇵🇹' },
    { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
    { code: 'twi', label: 'Twi (Akan)', flag: '🇬🇭' },
    { code: 'ig', label: 'Igbo', flag: '🇳🇬' },
  ];
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Close">
          <X className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 text-center">Select language</h2>
        <p className="text-gray-600 text-center mt-1">Choose your preferred language to continue.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {langs.map((l) => (
            <button
              key={l.code}
              onClick={() => onSelect(l.code)}
              className="px-4 py-3 border rounded-md text-sm font-semibold uppercase bg-gray-50 hover:bg-green-50 hover:border-green-500 text-gray-800 transition-colors"
            >
              <span className="inline-flex items-center gap-2"><span aria-hidden="true">{l.flag}</span>{l.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [language, setLanguage] = useState('en');
  const [isAmoeModalOpen, setIsAmoeModalOpen] = useState(false);
  const [isPaymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('preferredLanguage');
      if (saved && translations[saved]) {
        setLanguage(saved);
      } else {
        setIsLanguageModalOpen(true);
      }
    } catch (_e) {
      setIsLanguageModalOpen(true);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('preferredLanguage', language);
    } catch (_e) {}
  }, [language]);

  useEffect(() => { try { document.documentElement.setAttribute('lang', language); window.__siteLang = language; } catch (_e) {} }, [language]);
  const t = useMemo(() => deepMerge(translations.en, translations[language] || translations.en), [language]);

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
 <VideoSection t={t} language={language} />
        <OnDemandVideoSection language={language} url="https://cdn.builder.io/o/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2Fb5fa094d37a74d928d398e62c7aae45e?alt=media&token=daff83b7-7a28-4580-a04b-bf47c6a12560&apiKey=d794b8d1c6ba43d5a31925e0c97ccc17" thumbnail="https://cdn.builder.io/api/v1/image/assets%2Fd794b8d1c6ba43d5a31925e0c97ccc17%2F0c65165a10034e3f8647bdccd6bf47ce?format=webp&width=800" />
        <DonationTiers t={t} onDonate={handleDonation} />
        <MilestoneTracker t={t} />
        <AfroVillageProgress language={language} t={t} />
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
        <FounderSection t={t} />
      </main>
      <Footer t={t} />

      {/* Modals */}
      <LanguageSelectModal
        isOpen={isLanguageModalOpen}
        onSelect={(code) => { setLanguage(code); setIsLanguageModalOpen(false); }}
        onClose={() => setIsLanguageModalOpen(false)}
      />
      <AmoeModal t={t} isOpen={isAmoeModalOpen} onClose={() => setIsAmoeModalOpen(false)} />
      <PaymentSuccessModal t={t} isOpen={isPaymentSuccessModalOpen} onClose={() => setPaymentSuccessModalOpen(false)} />
    </div>
  );
}
