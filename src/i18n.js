import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcomeTitle: "Hello, my name is Bartek",
          welcomeSubtitle: "Welcome to my portfolio!",
          career : "Career",
          skills : "Skills",
          aboutMe : "About me",
          contact : "Contact",
          jobDescription: "As a frontend developer, I have been dedicated to creating advanced dock management systems (DMS) and yard management systems (YMS). My experience includes participating in key projects for renowned companies such as ID Logistics, Auchan, and Leclerc.\n\nIn my role, I have been responsible for:\n\n- Creating and optimizing user interfaces: I have ensured intuitive and responsive user interfaces.\n\n- Implementing business logic: I have successfully integrated business logic into frontend applications, connecting them with backend APIs and services.\n\n- Team collaboration: I have closely worked with backend teams and business analysts to understand requirements and deliver functionalities that meet client expectations.\n\nMy greatest achievement has been the development of the YMS (Yard Management System) for Media Expert. This project required not only advanced technical knowledge but also the ability to effectively manage time and communicate with various project stakeholders. As a result of my work, the YMS system significantly improved yard management processes, enhancing operational efficiency for Media Expert.",
          secJobDescription : "As a fullstack developer, I worked on various e-commerce projects utilizing a diverse tech stack. My responsibilities included developing and maintaining both the frontend and backend of the applications to ensure seamless user experiences and robust performance ",
          warsaw : "Warsaw, Poland",
          olsztyn : "Olsztyn, Poland",
          senderContact : "Your phone number or email",
          programingLanguages : "Programing languages",
          otherSkills : "Other skills",
          send : "Send",
          sending : "Sending...",
          sent : "Sent!",
          yourMessage : "Your message",
          nettomEndDate : "09-2021",
          dclogEndDate : "present",
          constactMe : "Contact me",
          aboutMeDesc: "My passion is cooking, and I am particularly interested in modern French and Mediterranean cuisine. In my free time, I enjoy street photography."
        }
      },
      pl: {
        translation: {
          welcomeTitle: "Cześć, nazywam się Bartek",
          welcomeSubtitle: "Witaj na moim portfolio!",
          career : "Kariera",
          skills : "Umiejętności",
          aboutMe : "O mnie",
          contact : "Kontakt",
          jobDescription: "Jako frontend developer, z zaangażowaniem tworzyłem zaawansowane systemy zarządzania dokami na magazynie (DMS) oraz systemy zarządzania placami (YMS).\n\nMoje doświadczenie obejmuje udział w kluczowych projektach dla renomowanych firm takich jak ID Logistics, Auchan oraz Leclerc.\n\nW ramach moich obowiązków:\n\nTworzenie i optymalizacja interfejsów użytkownika: zapewniałem intuicyjne i responsywne interfejsy użytkownika.\n\nImplementacja logiki biznesowej: skutecznie wdrażałem logikę biznesową w aplikacjach frontendowych, integrując je z backendowymi API i usługami.\n\nWspółpraca zespołowa: blisko współpracowałem z zespołem backendowym oraz analitykami biznesowymi, aby zrozumieć wymagania i dostarczyć funkcjonalności zgodne z oczekiwaniami klientów.\n\nMoim największym osiągnięciem było stworzenie systemu YMS (Yard Management System) dla Media Expert. Projekt ten wymagał nie tylko zaawansowanej wiedzy technicznej, ale również zdolności do efektywnego zarządzania czasem i komunikacji z różnymi interesariuszami projektu. W wyniku mojej pracy, system YMS przyczynił się do znacznego usprawnienia procesów zarządzania placami, zwiększając efektywność operacyjną Media Expert.",
          secJobDescription : "Jako fullstack developer pracowałem nad różnymi projektami e-commerce, wykorzystując głównie Symfony i Javascript. Moje obowiązki obejmowały rozwijanie i utrzymywanie zarówno frontendu, jak i backendu aplikacji, aby zapewnić płynne doświadczenia użytkownika oraz solidną wydajność.",
          warsaw : "Warszawa, Polska",
          olsztyn : "Olsztyn, Polska",
          senderContact : "Twój numer telefonu lub email",
          programingLanguages : "Języki programowania",
          otherSkills : "Inne umiejętności",
          send : "Wyślij",
          sending : "Wysyłanie...",
          sent : "Wysłano!",
          yourMessage : "Twoja wiadomość",
          nettomEndDate : "09-2021",
          dclogEndDate : "obecnie",
          constactMe : "Skontaktuj się ze mną",
          aboutMeDesc: "Moją pasją jest gotowanie interesuję się głównie nowoczesną kuchnią francuska i śródziemnomorską, w wolnych chwilach zajmuję się fotografią uliczną."
        }
      }
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
