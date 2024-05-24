// app/generativePage/page.js

'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter, useSearchParams } from 'next/navigation';
import { combinedPrompt, satirePrompt } from '../prompts';
import { ImageComponent } from '../ImageComponent';
import Link from 'next/link';
import * as Babel from '@babel/standalone';

const fetchGeneratedCode = async (url) => {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: satirePrompt(url) }),
  });

  const data = await response.json();
  console.log('LLM Response:', data);
  if (response.ok) {
    return data.description;  // Use description to get the generated code
  } else {
    throw new Error(data.error || 'Error generating code');
  }
};

const GenerativePage = () => {
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const url = searchParams.get('url');

  useEffect(() => {
    const generateWebsite = async () => {
      try {
        const code = await fetchGeneratedCode(url);
        const cleanedCode = cleanCode(code);
        setGeneratedCode(cleanedCode);
      } catch (error) {
        console.error('Error generating website:', error);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      generateWebsite();
    }
  }, [url]);

  return (
    <>
      <Head>
        <title>Generated Website</title>
        <meta name="description" content="This is a generated website." />
      </Head>
      <div className="bg-gray-900 text-white min-h-screen">
        {loading ? (
          <div className="flex items-center justify-center h-full">Loading...</div>
        ) : (
          <RenderGeneratedCode code={generatedCode} />
        )}
      </div>
    </>
  );
};

const cleanCode = (code) => {
  if (!code) return '';
  const cleanedCode = code
    .replace(/```jsx|```/g, '')
    .replace(/\\n/g, '\n')
    .replace(/export\s+default\s+function\s+\w+\s*\(\)\s*{/g, 'return function HomePage() {') // Remove export default function
    .trim();
  console.log('Cleaned Code:', cleanedCode);
  return cleanedCode;
};

const RenderGeneratedCode = ({ code }) => {
  const CodeComponent = () => {
    try {
      // Transform JSX to JS
      const transformedCode = Babel.transform(code, {
        presets: ['react']
      }).code;

      // Evaluate the transformed code
      const componentCode = new Function('React', 'ImageComponent', 'Link', 'Head', `
        ${transformedCode}
        return HomePage;
      `)(React, ImageComponent, Link, Head);

      if (typeof componentCode !== 'function') {
        throw new Error('The evaluated code did not return a valid React component.');
      }
      return React.createElement(componentCode);
    } catch (error) {
      console.error('Error rendering generated code:', error);
      return <div>Error rendering generated code</div>;
    }
  };

  return <CodeComponent />;
};

export default GenerativePage;
