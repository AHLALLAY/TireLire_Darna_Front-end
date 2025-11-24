import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import arTrans from './locales/ar.json';
import frTrans from './locales/fr.json';

i18n.use(initReactI18next).init({
    resources:{
        ar:{ translation: arTrans},
        fr:{ translation: frTrans},
    },
    lng: 'ar',
    fallbackLng: 'ar',
    defaultNS: 'translation',
    interpolation: {escapeValue: false},
    react: {useSuspense: false}
});


export default i18n;