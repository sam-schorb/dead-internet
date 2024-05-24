'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { prompt1, prompt2 } from './prompts';
import { ImageComponent } from './ImageComponent';

const fetchDescription = async (url) => {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: prompt1(url) }),
  });

  const data = await response.json();
  if (response.ok) {
    return data.description;
  } else {
    throw new Error(data.error || 'Error generating description');
  }
};

const fetchGeneratedCode = async (description) => {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ prompt: prompt2(description) }),
  });

  const data = await response.json();
  if (response.ok) {
    return data.description;
  } else {
    throw new Error(data.error || 'Error generating code');
  }
};

const MainComponent = () => {
  const [generatedCode, setGeneratedCode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateWebsite = async () => {
      try {
        const url = 'https://wwe.com'; // Example URL
        const description = await fetchDescription(url);
        const code = await fetchGeneratedCode(description);
        setGeneratedCode(code);
      } catch (error) {
        console.error('Error generating website:', error);
      } finally {
        setLoading(false);
      }
    };

    generateWebsite();
  }, []);

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
          <div dangerouslySetInnerHTML={{ __html: generatedCode }} />
        )}
      </div>
    </>
  );
};

export default MainComponent;
