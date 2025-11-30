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

class TranslateAPI {
  private apiKey: string;
  private baseUrl: string;

  /**
   * Create a new Translate API client
   * @param apiKey - Your API key from translate-api.com
   * @param options - Optional configuration
   */
  constructor(apiKey: string, options?: { baseUrl?: string }) {
    if (!apiKey) {
      throw new Error('API key is required. Get one at https://translate-api.com');
    }
    this.apiKey = apiKey;
    this.baseUrl = options?.baseUrl || 'https://translate-api.com/v1';
  }

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
  async translate(text: string, targetLanguage: string | string[]): Promise<TranslateResponse> {
    const response = await fetch(`${this.baseUrl}/translate`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        target_language: targetLanguage,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Translation failed');
    }

    return response.json();
  }

  /**
   * Translate multiple texts in batch
   * @param items - Array of { text, targetLanguage } objects
   * @returns Promise with array of translation results
   */
  async translateBatch(items: TranslateOptions[]): Promise<TranslateResponse[]> {
    return Promise.all(
      items.map(item => this.translate(item.text, item.targetLanguage))
    );
  }
}

export default TranslateAPI;
export { TranslateAPI, TranslateOptions, TranslateResponse };

// CommonJS support
module.exports = TranslateAPI;
module.exports.TranslateAPI = TranslateAPI;
