export interface LanguagesProps {
  code: string;
  name: string;
  urlPrefix: string;
}

export const Languages: LanguagesProps[] = [
  { code: 'en', name: 'EN', urlPrefix: 'en' },
  { code: 'pt', name: 'PT', urlPrefix: '' }
];

export const GetLanguage = (code: string | undefined) => Languages.find((elem: LanguagesProps) => elem.code === code) || null; 
