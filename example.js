/**
 * Example usage of the Translate API JavaScript SDK
 * 
 * Before running this example:
 * 1. Get your API key at https://translate-api.com
 * 2. Replace 'YOUR_API_KEY_HERE' with your actual API key
 * 
 * To run this example:
 * 1. Open terminal in this folder
 * 2. Run: npm install
 * 3. Run: node example.js
 */

const TranslateAPI = require('./src/index');

// ⚠️ IMPORTANT: Replace this with your API key from translate-api.com
const API_KEY = 'YOUR_API_KEY_HERE';

async function main() {
  // Create the client
  const client = new TranslateAPI(API_KEY);

  console.log('🌍 Translate API - JavaScript SDK Example\n');

  try {
    // Example 1: Translate to a single language
    console.log('Example 1: Translate to Spanish');
    const result1 = await client.translate('Hello, how are you?', 'es');
    console.log('Input: Hello, how are you?');
    console.log('Spanish:', result1.translations.es);
    console.log('');

    // Example 2: Translate to multiple languages
    console.log('Example 2: Translate to multiple languages');
    const result2 = await client.translate('Good morning!', ['fr', 'de', 'it', 'ja']);
    console.log('Input: Good morning!');
    console.log('French:', result2.translations.fr);
    console.log('German:', result2.translations.de);
    console.log('Italian:', result2.translations.it);
    console.log('Japanese:', result2.translations.ja);
    console.log('');

    // Example 3: Batch translation
    console.log('Example 3: Batch translation');
    const results = await client.translateBatch([
      { text: 'Thank you', targetLanguage: 'es' },
      { text: 'Goodbye', targetLanguage: 'fr' }
    ]);
    console.log('Thank you (Spanish):', results[0].translations.es);
    console.log('Goodbye (French):', results[1].translations.fr);

    console.log('\n✅ All examples completed successfully!');
    console.log('\n📖 Documentation: https://translate-api.com/documentation');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n💡 Make sure you:');
    console.log('   1. Have a valid API key from https://translate-api.com');
    console.log('   2. Replaced YOUR_API_KEY_HERE with your actual key');
    console.log('   3. Have enough character quota in your account');
  }
}

main();
