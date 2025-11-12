/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palette Néon Moderne - Design Cyberpunk/Moderne pour application immobilière
        primary: {
          // Cyan néon - Moderne, tech, confiance
          light: '#b3f0ff', // Cyan très clair pour fonds et hover léger
          DEFAULT: '#00d9ff', // Cyan néon principal - Boutons CTA, liens importants
          dark: '#0099cc', // Cyan foncé pour hover et états actifs
        },
        secondary: {
          // Magenta/Rose néon - Distinctif, premium
          light: '#ffb3ff', // Magenta très clair pour fonds
          DEFAULT: '#ff00cc', // Magenta néon principal - Section épargne collective
          dark: '#cc0099', // Magenta foncé pour hover
        },
        accent: {
          // Jaune/Or néon - Valeur, prestige, annonces premium
          light: '#fff9b3', // Jaune très clair pour fonds
          DEFAULT: '#ffd700', // Jaune néon (or) - Annonces prioritaires, badges premium
          dark: '#cc9900', // Jaune foncé pour hover
        },
        neutral: {
          // Fond sombre pour mettre en valeur les néons
          light: '#0a0a0a', // Noir très foncé - Fond principal (remplace blanc clair)
          DEFAULT: '#64748b', // Gris moyen - Textes secondaires, bordures (pour compatibilité)
          dark: '#2a2a2a', // Gris moyen - Surfaces élevées, cards
          text: '#cbd5e1', // Gris clair - Textes secondaires sur fond sombre
        },
        success: {
          // Vert néon - Succès, validation, actions financières
          light: '#b3ffcc', // Vert très clair pour fonds
          DEFAULT: '#00ff41', // Vert néon - Succès, validation
          dark: '#00cc33', // Vert foncé pour hover
        },
        warning: {
          // Orange néon - Attention, rappels
          light: '#ffd9b3', // Orange très clair pour fonds
          DEFAULT: '#ff6600', // Orange néon - Attention, rappels
          dark: '#cc5200', // Orange foncé pour hover
        },
        danger: {
          // Rouge néon - Erreurs, rejets
          light: '#ffb3b3', // Rouge très clair pour fonds
          DEFAULT: '#ff0040', // Rouge néon - Erreurs, rejets
          dark: '#cc0033', // Rouge foncé pour hover
        },
        // Zones fonctionnelles avec palette néon
        realEstate: {
          primary: '#00d9ff', // Cyan néon pour annonces
          secondary: '#00bfff', // Bleu ciel néon
          accent: '#ffd700', // Or néon pour annonces premium
        },
        finance: {
          primary: '#00ff41', // Vert néon pour épargne
          secondary: '#39ff14', // Vert lime néon
          accent: '#ffd700', // Or néon pour statistiques
        },
        communication: {
          primary: '#ff00cc', // Magenta néon pour chat
          secondary: '#ff00ff', // Rose néon pour messages
          accent: '#ff1493', // Rose profond néon pour notifications
        },
        // Couleurs pour mode clair (si nécessaire)
        cream: {
          light: '#0a0a0a', // Fond sombre
          DEFAULT: '#1a1a1a', // Surface sombre
          dark: '#2a2a2a', // Surface plus claire
        },
        warm: {
          light: '#0a0a0a', // Fond sombre
          DEFAULT: '#1a1a1a', // Surface sombre
          dark: '#2a2a2a', // Surface plus claire
        },
      },
    },
  },
  plugins: [],
}

