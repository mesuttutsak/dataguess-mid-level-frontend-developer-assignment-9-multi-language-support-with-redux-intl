import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { AppState } from '../../store/reducer';
import { useLanguageChange } from '../../hooks/useLanguageChange';

function LanguageSelector() {
  const { localeLang, browserLang } = useSelector((state: AppState) => state)
  const location = useLocation();
  const pathname = location.pathname;
  const handleChangeLanguage = useLanguageChange();

  return (
    <div>
      <button onClick={() => handleChangeLanguage('en', pathname, browserLang, localeLang)}>English</button>
      <button onClick={() => handleChangeLanguage('es', pathname, browserLang, localeLang)}>Español</button>
      <button onClick={() => handleChangeLanguage('tr', pathname, browserLang, localeLang)}>Türkçe</button>
    </div>
  );
}

export default LanguageSelector;
