import { Translation, TranslationKey } from './types';

export function createTranslateFunction(translation: Translation) {
	return (key: TranslationKey) => translation[key];
}
