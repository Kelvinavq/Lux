import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

/**
 * The LanguageContext is a React context for managing the language of the application.
 * It provides the selected language to components that consume it.
 */
export const LanguageContext = createContext();

/**
 * The LanguageContextProvider component is responsible for managing the language settings
 * of the application. It sets the default language based on the user's browser configuration
 * and provides the selected language to child components.
 *
 *  children - The child components that will be wrapped by the LanguageContextProvider.
 */

export const LanguageContextProvider = ({ children }) => {
  // Set the default language based on the user's browser settings
  const userLanguage = navigator.language.split("-")[0]; // Get the primary language

  // Comprueba si existe una cookie de idioma y utiliza su valor como idioma predeterminado
  const storedLanguage = Cookies.get("selectedLanguage") || userLanguage;

  const [language, setLanguage] = useState(userLanguage || "es");

  useEffect(() => {
    // Actualiza el idioma cuando cambian la configuración del navegador del usuario
    setLanguage(storedLanguage);
  }, [storedLanguage]);

    // Función para cambiar el idioma
    const changeLanguage = (newLanguage) => {
      Cookies.set("selectedLanguage", newLanguage, { expires: 365 }); // Almacena el idioma en una cookie que expira en 365 días
      setLanguage(newLanguage);
    };

    return (
      <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
};
