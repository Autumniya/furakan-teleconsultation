// js/i18n.js
document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------
     1. DICTIONARY
  ------------------------------------------------------------------ */
  const t = {
    /* ----------  English (default) ---------- */
    en: {
      /* meta / page titles */
      page_title: 'Furakan - Your health at your fingertips',
      thank_page_title: 'Thank You | Furakan',

      /* nav */
      nav_home: 'Home',
      nav_about: 'About',
      nav_features: 'Features',
      nav_screenshots: 'Screenshots',
      nav_contact: 'Contact',

      /* hero */
      hero_title: 'Your health at <span>your fingertips</span>',
      hero_sub:
        'Furakan is a Flutter-based teleconsultation app designed for Mali, connecting patients with healthcare providers through a simple, intuitive interface.',
      btn_explore: 'Explore Features',

      /* about */
      about_title: 'What is Furakan?',
      about_desc1:
        'Furakan is a comprehensive teleconsultation application that helps users identify health issues and connect with appropriate healthcare facilities. Starting with symptom selection, Furakan recommends medical specialties and helps users find and contact nearby health facilities through integration with the Healthsites API.',
      about_desc2:
        'Developed by A-Recreations/Arixy_Dev for Mali, Furakan aims to improve healthcare accessibility in regions where medical resources may be limited.',

      /* features section */
      features_title: 'Key Features',
      feat_appt_title: 'Appointment Booking',
      feat_appt_desc:
        'Schedule appointments with healthcare providers directly through the app with just a few taps.',
      feat_diag_title: 'Symptom Diagnosis',
      feat_diag_desc:
        'Intelligent symptom-based diagnosis engine to help identify possible health concerns.',
      feat_rank_title: 'Specialty Ranking',
      feat_rank_desc:
        'Get recommendations on which medical specialties are most appropriate for your symptoms.',
      feat_lookup_title: 'Facility Lookup',
      feat_lookup_desc:
        'Live integration with Healthsites.io to find healthcare facilities near you.',
      feat_contact_title: 'One-Tap Contact',
      feat_contact_desc:
        'Instantly call healthcare facilities or get directions with a single tap.',

      /* screenshots */
      screenshots_title: 'App Screenshots',

      /* get-code */
      getcode_title: 'Get the Code',
      getcode_desc:
        'Furakan is an innovative project. You can also find it on GitHub.',
      btn_github: 'View on GitHub',

      /* contact */
      contact_title: 'Contact Us',
      contact_desc:
        'Have questions about Furakan or interested in collaborating? Get in touch with the development team.',

      /* footer */
      footer_copy:
        '&copy; 2025 Furakan by A-Recreations/Arixy_Dev All rights reserved.',
      footer_copy_simple: '&copy; 2025 Furakan. All rights reserved.',

      /* thank-you page */
      thank_head: 'Thank you for your purchase!',
      thank_body:
        'Your payment has been made successfully and your wallet reloaded. Please return to the application. If you have any questions, simply reply or write to <a href="mailto:arecreations@donniya.in">arecreations@donniya.in</a>.',
      btn_back_home: 'Back to Home',
    },

    /* ----------  French  ---------- */
    fr: {
      /* meta / page titles */
      page_title: 'Furakan - Votre santé au bout des doigts',
      thank_page_title: 'Merci | Furakan',

      /* nav */
      nav_home: 'Accueil',
      nav_about: 'À propos',
      nav_features: 'Fonctionnalités',
      nav_screenshots: 'Captures',
      nav_contact: 'Contact',

      /* hero */
      hero_title: 'Votre santé <span>au bout des doigts</span>',
      hero_sub:
        'Furakan est une application de téléconsultation Flutter conçue pour le Mali, reliant les patients aux professionnels de santé via une interface simple et intuitive.',
      btn_explore: 'Découvrir les fonctionnalités',

      /* about */
      about_title: 'Qu’est-ce que Furakan ?',
      about_desc1:
        'Furakan est une application complète de téléconsultation qui aide les utilisateurs à identifier leurs problèmes de santé et à se connecter aux établissements appropriés. À partir de la sélection des symptômes, Furakan recommande les spécialités médicales et aide à trouver et contacter les structures proches grâce à l’API Healthsites.',
      about_desc2:
        'Développé par A-Recreations/Arixy_Dev pour le Mali, Furakan vise à améliorer l’accessibilité aux soins dans les régions où les ressources médicales sont limitées.',

      /* features section */
      features_title: 'Fonctionnalités clés',
      feat_appt_title: 'Prise de rendez-vous',
      feat_appt_desc:
        'Planifiez des rendez-vous avec des professionnels de santé directement depuis l’app en quelques tapotements.',
      feat_diag_title: 'Diagnostic des symptômes',
      feat_diag_desc:
        'Moteur intelligent basé sur les symptômes pour identifier les problèmes de santé possibles.',
      feat_rank_title: 'Classement des spécialités',
      feat_rank_desc:
        'Recevez des recommandations sur les spécialités médicales adaptées à vos symptômes.',
      feat_lookup_title: 'Recherche d’établissements',
      feat_lookup_desc:
        'Intégration en temps réel avec Healthsites.io pour trouver des structures proches.',
      feat_contact_title: 'Contact en un clic',
      feat_contact_desc:
        'Appelez instantanément ou obtenez l’itinéraire d’un établissement en un seul geste.',

      /* screenshots */
      screenshots_title: 'Captures d’écran de l’application',

      /* get-code */
      getcode_title: 'Obtenir le code',
      getcode_desc:
        'Furakan est un projet innovant. Vous pouvez aussi le trouver sur GitHub.',
      btn_github: 'Voir sur GitHub',

      /* contact */
      contact_title: 'Nous contacter',
      contact_desc:
        'Des questions sur Furakan ou envie de collaborer ? Contactez l’équipe de développement.',

      /* footer */
      footer_copy:
        '&copy; 2025 Furakan par A-Recreations/Arixy_Dev. Tous droits réservés.',
      footer_copy_simple: '&copy; 2025 Furakan. Tous droits réservés.',

      /* thank-you page */
      thank_head: 'Merci pour votre achat !',
      thank_body:
        'Votre paiement a été effectué avec succès et votre porte-feuille rechargé. Veuillez retourner dans l’application. Si vous avez des questions, répondez simplement ou écrivez à <a href="mailto:arecreations@donniya.in">arecreations@donniya.in</a>.',
      btn_back_home: 'Retour à l’accueil',
    },
  };

  /* ------------------------------------------------------------------
     2. RENDERER
  ------------------------------------------------------------------ */
  function setLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.dataset.i18n;
      const translated =
        (t[lang] && t[lang][key]) || t.en[key] || el.innerHTML;
      el.innerHTML = translated;
    });
    /* remember choice */
    localStorage.setItem('furakan_lang', lang);
    /* update <html lang=""> attr for accessibility/SEO */
    document.documentElement.lang = lang;
  }

  /* initial language (default EN) */
  setLang(localStorage.getItem('furakan_lang') || 'en');

  /* ------------------------------------------------------------------
     3. CLICK HANDLERS
  ------------------------------------------------------------------ */
  document.querySelectorAll('.lang-btn').forEach((btn) =>
    btn.addEventListener('click', () => setLang(btn.dataset.lang))
  );
});
