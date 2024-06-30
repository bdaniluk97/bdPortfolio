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
          jobDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          secJobDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
          constactMe : "Contact me"
        }
      },
      pl: {
        translation: {
          welcomeTitle: "Cześć, nazwyam się Bartek",
          welcomeSubtitle: "Witaj na moim portfolio!",
          career : "Kariera",
          skills : "Umiejętności",
          aboutMe : "O mnie",
          contact : "Kontakt",
          jobDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          secJobDescription : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
          constactMe : "Skontaktuj się ze mną"
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
