/**
 * Translate API - Official JavaScript/TypeScript SDK
 *
 * Get your API key at: https://translate-api.com
 * Documentation: https://translate-api.com/documentation
 */
interface TranslateOptions {
    text: string;
    targetLanguage: string | string[];
}
interface TranslateResponse {
    success: boolean;
    translations: Record<string, string>;
    source_language?: string;
    characters_used: number;
}
declare class TranslateAPI {
    private apiKey;
    private baseUrl;
    /**
     * Create a new Translate API client
     * @param apiKey - Your API key from translate-api.com
     * @param options - Optional configuration
     */
    constructor(apiKey: string, options?: {
        baseUrl?: string;
    });
    /**
     * Translate text to one or more target languages
     * @param text - The text to translate
     * @param targetLanguage - Language code ('es') or array of codes (['es', 'fr'])
     * @returns Promise with translation results
     *
     * @example
     * // Single language
     * const result = await client.translate('Hello', 'es');
     * console.log(result.translations.es); // "Hola"
     *
     * @example
     * // Multiple languages
     * const result = await client.translate('Hello', ['es', 'fr', 'de']);
     * console.log(result.translations); // { es: "Hola", fr: "Bonjour", de: "Hallo" }
     */
    translate(text: string, targetLanguage: string | string[]): Promise<TranslateResponse>;
    /**
     * Translate multiple texts in batch
     * @param items - Array of { text, targetLanguage } objects
     * @returns Promise with array of translation results
     */
    translateBatch(items: TranslateOptions[]): Promise<TranslateResponse[]>;
}
export default TranslateAPI;
export { TranslateAPI, TranslateOptions, TranslateResponse };
