import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { CookiesProvider } from 'react-cookie';

import { UserProvider } from './contexts/UserContext';
import { SearchProvider } from './contexts/SearchContext';
import { CartProvider } from './contexts/CartContext';
import { ColorProvider } from './contexts/ColorContext';

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'flag-icon-css/css/flag-icon.min.css'

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'fr'],
    fallbackLng: 'en', // IF User Select A Language Not Support It will Be Instead
    debug: false,
    // Options for language detector
    detection: {
      // الترتيب مهم هنا يعني لو الكوكي بعد الاتش هتاثر بالاتش تي ام ال 
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'], // where setting will Be cached?
    },
    // react: { useSuspense: false },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  })

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <BrowserRouter>
    <ColorProvider>
      <ChakraProvider>
        <UserProvider>
          <SearchProvider>
            <CartProvider>
              <CookiesProvider>
                <App />
              </CookiesProvider>
            </CartProvider>
          </SearchProvider>
        </UserProvider>
      </ChakraProvider>
      </ColorProvider>
    </BrowserRouter>
  </React.StrictMode>
  </Suspense>
);
