// Übersetzungen
const translations = {
    en: {
      btnConnectWallet: 'Connect Wallet',
      donateDesc: 'Enjoy a cup of coffee',
      donateText: 'Buy me a coffee',
      connectText: 'Connect wallet',
      langText: 'Language',
    },
    de: {
      btnConnectWallet: 'Wallet Verbinden',
      donateDesc: 'Genießen Sie eine Tasse Kaffee',
      donateText: 'Spendieren Sie mir einen Kaffee',
      connectText: 'Wallet verbinden',
      langText: 'Sprache',
    },
  };
  
  // Funktion zur Aktualisierung der Sprache
  function setLanguage(lang) {
    const langElements = document.querySelectorAll('.lang');
    for (let j = 0; j < langElements.length; j++) {
      const langKey = langElements[j].getAttribute('data-lang-key');
      if (translations[lang] && translations[lang][langKey]) {
        langElements[j].textContent = translations[lang][langKey];
      }
    }
  }
  
  // Spracheinstellungen anhand der bevorzugten Sprache des Benutzers festlegen
  const userLang = navigator.language || navigator.userLanguage;
  if (userLang === 'de') {
    setLanguage('de');
  } else {
    setLanguage('en');
  }
  