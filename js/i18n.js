// js/i18n.js
document.addEventListener('DOMContentLoaded', () => {
  /* ------------------------------------------------------------------
  1. DICTIONARY
  ------------------------------------------------------------------ */
  const t = {
    /* ---------- English (default) ---------- */
    en: {
      /* meta / page titles */
      page_title: 'Furakan - Your health, better oriented',
      thank_page_title: 'Thank You | Furakan',
      terms_page_title: 'Furakan - Terms & Conditions',
      privacy_page_title: 'Furakan - Privacy Policy',

      /* nav */
      nav_home: 'Home',
      nav_about: 'About',
      nav_features: 'Features',
      nav_screenshots: 'Screenshots',
      nav_contact: 'Contact',

      /* hero */
      hero_title: 'Your health, <span>better oriented</span>',
      hero_sub:
        'Furakan is a medical orientation and decision-support app designed for Mali. It helps you describe your symptoms, get guidance, and find nearby hospitals, clinics, and pharmacies.',
      btn_explore: 'Explore Features',

      /* about */
      about_title: 'What is Furakan?',
      about_desc1:
        'For the general public, Furakan offers a symptom checker, orientation suggestions, and practical tools: nearby health facilities, pharmacy directories, drug lists, medical calculators, and prescription reminders. The app does not replace a medical consultation or emergency services.',
      about_desc2:
        'For doctors and students, the Pro Mode / ChatDoc helps structure clinical reasoning: case summaries, tests to order, management steps, and prioritized differential diagnoses. Developed by A-Recreations/Arixy_Dev for Mali, Furakan aims to make medical information easier to access and more reliable.',

      /* features section */
      features_title: 'Key Features',
      // kept the same keys but new meaning/text
      feat_appt_title: 'Symptom-based orientation',
      feat_appt_desc:
        'Select your symptoms and receive possible orientations (e.g. common cold, flu-like syndrome) along with the recommended specialty.',
      feat_diag_title: 'Visual symptom explorer',
      feat_diag_desc:
        'Browse symptoms by body system (lungs, digestion, ENT, etc.) through a clear and intuitive interface.',
      feat_rank_title: 'Pro Mode & ChatDoc',
      feat_rank_desc:
        'For healthcare professionals and students: case summaries, tests to order, management steps, and differential diagnoses.',
      feat_lookup_title: 'Nearby & directories',
      feat_lookup_desc:
        'Display nearby hospitals, clinics, and pharmacies, with useful contact details and directions.',
      feat_contact_title: 'Medicines & reminders',
      feat_contact_desc:
        'Consult medicine lists, track prescriptions, and receive reminders for your medication schedule.',

      /* screenshots */
      screenshots_title: 'App Screenshots',

      /* get-code */
      getcode_title: 'Get the Code',
      getcode_desc:
        'Furakan is an evolving project. You can also explore the code on GitHub.',
      btn_github: 'View on GitHub',

      /* contact */
      contact_title: 'Contact Us',
      contact_desc:
        'Questions about Furakan, the Pro Mode, or a collaboration idea? Get in touch with the development team.',

      /* footer */
      footer_copy:
        '&copy; 2025 Furakan by A-Recreations/Arixy_Dev. All rights reserved.',
      footer_copy_simple: '&copy; 2025 Furakan. All rights reserved.',
      footer_terms: 'Terms &amp; Conditions',
      footer_privacy: 'Privacy Policy',

      /* legal (headings only, body is plain FR in HTML) */
      terms_title: 'Terms &amp; Conditions',
      terms_intro:
        'These Terms &amp; Conditions govern your use of the Furakan mobile application and website.',
      privacy_title: 'Privacy Policy',
      privacy_intro:
        'This Privacy Policy explains how Furakan handles your data when you use our mobile application and website.',

      /* thank-you page */
      thank_head: 'Thank you for your purchase!',
      thank_body:
        'Your payment was successful and your account is being updated. We’ve sent you a confirmation email with the details. Please return to the Furakan app to click on “Verify transaction” and unlock your pass! If you have any questions, simply reply or write to <a href="mailto:arecreations@donniya.in">arecreations@donniya.in</a>.',
      btn_back_home: 'Back to Home'
    },

    /* ---------- French ---------- */
    fr: {
      /* meta / page titles */
      page_title: 'Furakan - Votre santé mieux orientée',
      thank_page_title: 'Merci | Furakan',
      terms_page_title: 'Furakan - Conditions d’utilisation',
      privacy_page_title: 'Furakan - Politique de confidentialité',

      /* nav */
      nav_home: 'Accueil',
      nav_about: 'À propos',
      nav_features: 'Fonctionnalités',
      nav_screenshots: 'Captures',
      nav_contact: 'Contact',

      /* hero */
      hero_title: 'Votre santé, <span>mieux orientée</span>',
      hero_sub:
        'Furakan est une application d’orientation médicale et d’aide à la décision conçue pour le Mali. Elle vous aide à décrire vos symptômes, obtenir des conseils d’orientation et trouver les hôpitaux, cliniques et pharmacies à proximité.',
      btn_explore: 'Découvrir les fonctionnalités',

      /* about */
      about_title: 'Qu’est-ce que Furakan ?',
      about_desc1:
        'Pour le grand public, Furakan propose un chercheur de symptômes, des conseils d’orientation et des outils pratiques : structures de santé à proximité, annuaire des pharmacies, liste de médicaments, calculateurs médicaux, rappels d’ordonnances. L’application ne remplace pas une consultation médicale ni les services d’urgence.',
      about_desc2:
        'Pour les médecins et les étudiants, le Mode Pro / ChatDoc aide à structurer la réflexion clinique : résumés de cas, bilans à demander, conduites à tenir, diagnostics différentiels priorisés. Développée par A-Recreations/Arixy_Dev pour le Mali, Furakan vise à rendre l’accès à l’information médicale plus simple et plus fiable.',

      /* features section */
      features_title: 'Fonctionnalités clés',
      feat_appt_title: 'Orientation à partir des symptômes',
      feat_appt_desc:
        'Sélectionnez vos symptômes et obtenez des pistes possibles (ex. rhume, syndrome grippal…) ainsi que la spécialité recommandée.',
      feat_diag_title: 'Chercheur de symptômes visuel',
      feat_diag_desc:
        'Explorez les symptômes par appareil (poumons, digestion, ORL, etc.) via une interface claire et intuitive.',
      feat_rank_title: 'Mode Pro & ChatDoc',
      feat_rank_desc:
        'Pour les professionnels et étudiants en santé : résumés cliniques, bilans à demander, conduites à tenir, diagnostics différentiels.',
      feat_lookup_title: 'À proximité & annuaires',
      feat_lookup_desc:
        'Affichez les hôpitaux, cliniques et pharmacies proches avec les coordonnées utiles.',
      feat_contact_title: 'Médicaments & rappels',
      feat_contact_desc:
        'Consultez la liste des médicaments, suivez vos ordonnances et recevez des rappels pour vos prises.',

      /* screenshots */
      screenshots_title: 'Captures d’écran de l’application',

      /* get-code */
      getcode_title: 'Obtenir le code',
      getcode_desc:
        'Furakan est un projet en évolution. Vous pouvez aussi le retrouver sur GitHub.',
      btn_github: 'Voir sur GitHub',

      /* contact */
      contact_title: 'Nous contacter',
      contact_desc:
        'Des questions sur Furakan, le Mode Pro ou une idée de collaboration ? Contactez l’équipe de développement.',

      /* footer */
      footer_copy:
        '&copy; 2025 Furakan par A-Recreations/Arixy_Dev. Tous droits réservés.',
      footer_copy_simple: '&copy; 2025 Furakan. Tous droits réservés.',
      footer_terms: 'Conditions d’utilisation',
      footer_privacy: 'Politique de confidentialité',

      /* legal (en-têtes uniquement, le corps sera en FR directement dans les pages) */
      terms_title: 'Conditions d’utilisation',
      terms_intro:
        'Les présentes conditions d’utilisation régissent l’usage de l’application mobile et du site web Furakan.',
      privacy_title: 'Politique de confidentialité',
      privacy_intro:
        'La présente politique de confidentialité explique comment Furakan traite vos données lorsque vous utilisez notre application et notre site web.',

      /* thank-you page */
      thank_head: 'Merci pour votre achat !',
      thank_body:
        'Votre paiement a été effectué avec succès et votre compte est en cours de mise à jour. Nous vous avons envoyé un e-mail de confirmation avec les détails. Veuillez retourner sur l’application Furakan pour cliquer sur « Vérifier la transaction » et débloquer votre pass ! Pour toute question, n’hésitez pas à nous contacter à <a href="mailto:arecreations@donniya.in">arecreations@donniya.in</a>.',
      btn_back_home: 'Retour à l’accueil'
    }
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

  /* initial language (default FR for you, fallback EN) */
  setLang(localStorage.getItem('furakan_lang') || 'fr');

  /* ------------------------------------------------------------------
  3. CLICK HANDLERS
  ------------------------------------------------------------------ */
  document.querySelectorAll('.lang-btn').forEach((btn) =>
    btn.addEventListener('click', () => setLang(btn.dataset.lang))
  );
});
