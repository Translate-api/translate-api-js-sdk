# Translate API - JavaScript/TypeScript SDK

Official JavaScript and TypeScript SDK for [Translate API](https://translate-api.com).

## 🚀 Quick Start (For Beginners)

### Step 1: Get Your API Key
1. Go to [https://translate-api.com](https://translate-api.com)
2. Click "Login" or "Get Started"
3. Create an account (it's free to start!)
4. Go to your Dashboard
5. Click "Create API Key"
6. Copy your API key - you'll need it!

### Step 2: Install the SDK
Open your terminal/command prompt and run:

```bash
npm install @translate-api/client
```

Or if you use yarn:
```bash
yarn add @translate-api/client
```

### Step 3: Use It!

```javascript
const TranslateAPI = require('@translate-api/client');

// Replace 'your-api-key' with your actual API key from translate-api.com
const client = new TranslateAPI('your-api-key');

// Translate to one language
const result = await client.translate('Hello world', 'es');
console.log(result.translations.es); // Output: "Hola mundo"

// Translate to multiple languages at once
const multiResult = await client.translate('Hello world', ['es', 'fr', 'de']);
console.log(multiResult.translations);
// Output: { es: "Hola mundo", fr: "Bonjour le monde", de: "Hallo Welt" }
```

## 📖 Full API Reference

### Constructor
```javascript
const client = new TranslateAPI(apiKey, options);
```
- `apiKey` (required): Your API key from translate-api.com
- `options.baseUrl` (optional): Custom API URL (default: 'https://translate-api.com/v1')

### translate(text, targetLanguage)
Translate text to one or more languages.

**Parameters:**
- `text`: The text you want to translate
- `targetLanguage`: A language code ('es') or array of codes (['es', 'fr'])

**Returns:** Promise with translation results

### translateBatch(items)
Translate multiple texts at once.

```javascript
const results = await client.translateBatch([
  { text: 'Hello', targetLanguage: 'es' },
  { text: 'Goodbye', targetLanguage: 'fr' }
]);
```

## 🌍 Supported Languages
Visit [translate-api.com/documentation](https://translate-api.com/documentation) for a full list of supported language codes.

Common codes: en (English), es (Spanish), fr (French), de (German), it (Italian), pt (Portuguese), zh (Chinese), ja (Japanese), ko (Korean), ar (Arabic)

## ❓ Need Help?
- Documentation: [translate-api.com/documentation](https://translate-api.com/documentation)
- Support: support@translate-api.com

## 📝 License
MIT License - feel free to use in your projects!
