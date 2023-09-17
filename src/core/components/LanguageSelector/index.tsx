// src/components/LanguageSelector.tsx
import React from 'react';
import { useDispatch } from 'react-redux';

function LanguageSelector() {
  const dispatch = useDispatch();

  const handleChangeLanguage = (lang: string) => {
    dispatch({type: 'setLang', payload : lang});
    
  };

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en')}>English</button>
      <button onClick={() => handleChangeLanguage('es')}>Español</button>
      <button onClick={() => handleChangeLanguage('tr')}>Türkçe</button>
    </div>
  );
}

export default LanguageSelector;
