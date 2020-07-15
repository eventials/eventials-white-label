export const getLanguage = () => {
  const response = localStorage.getItem('language');

  if (response && response !== 'null') {
    return response;
  }

  const langDefault = window.navigator.language.split('-')[0] || 'pt';
  return langDefault;
};
