import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import translations from './core/translations';
import Content from './core/components/Content';
import LanguageSelector from './core/components/LanguageSelector';
import { AppState } from './core/store/reducer';

function App() {
  const { lang } = useSelector((state: AppState) => state);
  return (
    <IntlProvider locale={lang} messages={translations[lang]}>
      <div className="App">
        <LanguageSelector />
        <Content />
      </div>
    </IntlProvider>
  );
}

export default App;
