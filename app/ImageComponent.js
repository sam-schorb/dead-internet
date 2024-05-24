import { useState, Suspense } from 'react';
import Loading from './loading';

const fetchOpenAIImage = async (prompt) => {
  console.log(`Fetching image for prompt: ${prompt}`);
  try {
    const response = await fetch('/api/imageFetch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log(`Image fetched successfully for prompt: ${prompt}`);
      return data.url;
    } else {
      throw new Error(data.error || 'Error fetching image');
    }
  } catch (error) {
    console.error(`Error fetching image for prompt: ${prompt}`, error);
    return '';
  }
};

const ImageComponent = ({ prompt, className = '' }) => {
  const [image, setImage] = useState(null);

  if (!image) {
    fetchOpenAIImage(prompt).then((imageUrl) => setImage(imageUrl));
    return (
      <Suspense fallback={<Loading />}>
        <div className={`bg-gray-700 object-cover rounded animate-pulse ${className}`}></div>
      </Suspense>
    );
  }

  return (
    <div className={`bg-gray-800 p-4 rounded-lg ${className}`}>
      <img src={image} alt={`Image for ${prompt}`} className="object-cover rounded" />
    </div>
  );
};

export { ImageComponent, fetchOpenAIImage };
