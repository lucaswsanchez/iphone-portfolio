import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "es",
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        language: "PICK YOUR LANGUAGE",
        welcome: "Welcome to my portfolio!",
        name: "I'm Lucas Sanchez",
        role: "Front End Developer",
        turnOnDevice: "Turn on the device",
        ready: "Your Iphone is ready",
        continue: "Continue",
        loading: "Loading...",
        contact: "CONTACT",
        skills: "SKILLS",
        cancel: "Cancel",
        newMessage: "New Mesagge",
        send: "Send",
        emailName: "Name: ",
        email: "Email: ",
        sentIphone: "Sent from my Iphone",
        edit: "Edit",
        notes: "Notes",
        search: "Search",
        today: "Today",
        techSkills: "Technical skills",
        softSkills: "Soft skills",
        academic: "Academic history",
        threeNotes: "3 notes",
        date: "July 1st, 2023, 11:22 AM",
        communication: "Communication",
        collaboration: "Collaboration",
        criticalThinking: "Critical Thinking",
        adaptability: "Adaptability",
        timeManagement: "Time management",
        api: "API implementation",
        academicOne:
          "Since the beginning of 2022, I have dedicated myself to learn coding in a self-taught way, focused on front-end development. I gained advanced skills in layout, interface design and responsive development.",
        academicTwo:
          "I'm currently studying a degree in Systems Analysis, where I am deepening on the fundamentals of programming. Also, I'm learning back end development with PHP and Laravel.",
        academicThree:
          "I have a C2 level of English, which allows me to access a large amount of online resources and documentation to continue growing as a professional.",
      },
    },
    es: {
      translation: {
        language: "ELIGE TU IDIOMA",
        welcome: "Bienvenido a mi portafolio!",
        name: "Soy Lucas Sanchez",
        role: "Desarrollador Front End",
        turnOnDevice: "Enciende el dispositivo",
        ready: "Tu Iphone está listo",
        continue: "Continuar",
        loading: "Cargando...",
        contact: "CONTACTO",
        skills: "HABILIDADES",
        cancel: "Cancelar",
        newMessage: "Nuevo Mensaje",
        send: "Enviar",
        emailName: "Nombre: ",
        email: "Correo: ",
        sentIphone: "Enviado desde mi Iphone",
        edit: "Editar",
        notes: "Notas",
        search: "Buscar",
        today: "Hoy",
        techSkills: "Habilidades técnicas",
        softSkills: "Habilidades blandas",
        academic: "Historial Académico",
        threeNotes: "3 notas",
        date: "01 de Julio de 2023, 11:22 AM",
        communication: "Comunicación",
        collaboration: "Colaboración",
        criticalThinking: "Pensamiento crítico",
        adaptability: "Adaptibilidad",
        timeManagement: "Gestión del tiempo",
        api: "Implementación APIs",
        academicOne:
          "Desde principios de 2022, me he dedicado a aprender programación de forma autodidacta, enfocado en el desarrollo front-end. Adquirí habilidades avanzadas en maquetación, diseño de interfaces y desarrollo responsive.",
        academicTwo:
          "Actualmente estoy cursando la Tecnicatura en Análisis de Sistemas, donde estoy profundizando sobre los fundamentos de la programación. Tambien, me encuentro aprendiendo desarrollo back end con PHP y Laravel.",
        academicThree:
          "Tengo un nivel C2 de inglés, lo que me permite acceder a una gran cantidad de recursos y documentación en línea para seguir creciendo como profesional.",
      },
    },
  },
});

export default i18n;