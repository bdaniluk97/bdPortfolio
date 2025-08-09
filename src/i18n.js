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
          career: "Career",
          skills: "Skills",
          aboutMe: "About me",
          contact: "Contact",
          jobDescription: "As a frontend developer, I built dock management systems (DMS) and yard management systems (YMS) for companies such as Media Expert, ID Logistics, and Auchan. I was responsible for creating intuitive user interfaces, integrating with backend systems, and closely collaborating with technical teams.",
          secJobDescription: "In various e-commerce projects, I worked as a fullstack developer using mainly Symfony and JavaScript. My responsibilities included developing and maintaining both frontend and backend parts of applications to ensure high performance and smooth user experience.",
          thirdJobDescription: "Currently, I develop and maintain a large-scale platform based on React and WordPress, used daily by millions of users. I create frontend components, integrate them with PHP-based backends, and ensure production stability. I’m also involved in feature customization across multiple brands, release support, and troubleshooting. I work in an international team where clear communication and accountability are key.",
          warsaw: "Warsaw, Poland",
          olsztyn: "Olsztyn, Poland",
          senderContact: "Your phone number or email",
          programingLanguages: "Programing languages",
          otherSkills: "Other skills",
          send: "Send",
          sending: "Sending...",
          sent: "Sent!",
          yourMessage: "Your message",
          nettomEndDate: "09-2021",
          dclogEndDate: "11-2024",
          constactMe: "Contact me",
          aboutMeDesc: "My passion is cooking, and I am particularly interested in modern French and Mediterranean cuisine. In my free time, I enjoy street photography.",
          aristocratEndDate: "Current",
          projects: "Non work related projects",
          laodingCareerCard:"Loading...",
        }
      },
      pl: {
        translation: {
          welcomeTitle: "Cześć, nazywam się Bartek",
          welcomeSubtitle: "Witaj na moim portfolio!",
          career: "Kariera",
          skills: "Umiejętności",
          aboutMe: "O mnie",
          contact: "Kontakt",
          jobDescription: "Pełniąc rolę frontend developera, tworzyłem systemy zarządzania dokami (DMS) i placami (YMS) dla firm takich jak Media Expert, ID Logistics czy Auchan. Odpowiadałem za intuicyjne interfejsy, integrację z backendem oraz ścisłą współpracę z zespołami technicznymi.",
          secJobDescription: "W projektach e-commerce pracowałem jako fullstack developer, wykorzystując głównie Symfony i JavaScript. Zajmowałem się zarówno frontendem, jak i backendem, dbając o wydajność, stabilność oraz pozytywne doświadczenia użytkownika.",
          thirdJobDescription: "Na co dzień rozwijam i utrzymuję rozbudowaną platformę opartą o React i WordPress, z której korzystają miliony użytkowników. Tworzę komponenty, integruję frontend z PHP-backendem i odpowiadam za stabilność środowiska produkcyjnego. Dodatkowo zajmuję się personalizacją funkcji dla różnych marek oraz wsparciem w zakresie releasów i rozwiązywania problemów. Pracuję w zespole międzynarodowym, gdzie liczy się niezawodna komunikacja i odpowiedzialność.",
          warsaw: "Warszawa, Polska",
          olsztyn: "Olsztyn, Polska",
          senderContact: "Twój numer telefonu lub email",
          programingLanguages: "Języki programowania",
          otherSkills: "Inne umiejętności",
          send: "Wyślij",
          sending: "Wysyłanie...",
          sent: "Wysłano!",
          yourMessage: "Twoja wiadomość",
          nettomEndDate: "09-2021",
          dclogEndDate: "11-2024",
          constactMe: "Skontaktuj się ze mną",
          aboutMeDesc: "Moją pasją jest gotowanie interesuję się głównie nowoczesną kuchnią francuska i śródziemnomorską, w wolnych chwilach zajmuję się fotografią uliczną.",
          aristocratEndDate: "obecnie",
          projects: "Projekty nie związane z pracą",
          laodingCareerCard:"Ładowanie...",

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
