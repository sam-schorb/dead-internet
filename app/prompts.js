export const prompt1 = (url) => `
Given the URL "${url}", produce a detailed description of the website that includes the following information:

1. Website Overview:
   - Provide a general description and purpose of the website.
   - Identify the key objectives and target audience of the website.

2. Content Structure and Prompts:
   - Outline the key sections of the website (e.g., header, footer, main content area, sidebar, hero section, featured articles, image galleries).
   - For each section, provide a brief description of the type of content it should contain.
   - Generate detailed content prompts for each section. For instance:
     - "Write an engaging hero section description for a {theme} website."
     - "List 5-7 interesting facts or trivia about {topic} that can be included in the sidebar."
     - "Provide a detailed description for a featured {item} including details, background story, and expected outcome."

3. Styling and Design Guidelines:
   - Suggest a color scheme that matches the website’s theme.
   - Recommend fonts and typography styles that suit the website’s content and audience.
   - Suggest layout styles (e.g., grid-based, single-column, multi-column).
   - Identify and describe visual elements that should be incorporated (e.g., buttons, card designs, separators, icons).

4. Image Requirements:
   - Provide a list of images that are needed for each section of the website.
   - Describe the content of each image to ensure relevance (e.g., "An action shot of {topic}", "A promotional banner for {event}").
   - Generate prompts for the image generation API based on the descriptions (e.g., "Generate an image of a {scene} with {details} in the background").

Output this detailed description in a structured format to be used for generating comprehensive React code for the website.
`;

export const prompt2 = (description) => `
### Prompt for Generating React Code with ImageComponent

Given the following detailed description of a website, generate the React code for a single Next.js page using Tailwind CSS. The description includes the content and styling requirements for the webpage. Ensure that you use the \`ImageComponent\` for any images that need to be generated.

**Description:**

${description}

**Instructions:**

1. **Structure and Content:**
   - Create a functional React component for the page, including all necessary HTML structure and Tailwind CSS classes for styling.
   - Use the provided content and styling requirements to build out the sections of the page (e.g., header, hero section, featured content).

2. **Image Generation:**
   - For any images that need to be included, use the \`ImageComponent\` to generate and display the images based on prompts provided in the description.
   - Example usage of \`ImageComponent\`:
     \`\`\`jsx
     <ImageComponent prompt="example prompt" />
     \`\`\`

3. **Metadata:**
   - Include metadata and SEO tags in the \`<Head>\` component of the page.

4. **Assets:**
   - Download and include any assets (e.g., images, fonts, icons) as specified in the description.

5. **ImageComponent Explanation:**
   - The \`ImageComponent\` is a React component designed to fetch and display images based on a given prompt. It uses the \`fetchOpenAIImage\` function to request an image from an API and displays the image once fetched. If the image is not yet available, it shows a loading placeholder. It takes the following props:
     - \`prompt\`: A string that specifies the prompt for the image generation.
     - \`className\`: (Optional) A string to apply additional CSS classes for styling.

### Example Minimal Webpage Structure

\`\`\`jsx
import Head from 'next/head';
import { ImageComponent } from './ImageComponent';

const ExamplePage = () => {
  return (
    <>
      <Head>
        <title>Example Website</title>
        <meta name="description" content="Description of the example website." />
      </Head>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <header className="bg-blue-600 p-4">
          <h1 className="text-3xl font-bold text-white">Example Website</h1>
        </header>
        <main className="p-4">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
            <ImageComponent prompt="example hero image" />
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ImageComponent prompt="example content image 1" />
              <ImageComponent prompt="example content image 2" />
              <ImageComponent prompt="example content image 3" />
            </div>
          </section>
        </main>
        <footer className="bg-gray-800 p-4 text-white text-center">
          <p>&copy; 2024 Example Website. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default ExamplePage;
\`\`\`

Ensure the final code fulfills all the requirements provided in the detailed description and uses the \`ImageComponent\` correctly for all images.
`;


export const combinedPrompt = (url) => `
Given the URL "${url}", imagine the website and generate the React code for a single Next.js page using Tailwind CSS. The output should be just the React code with no other writing whatsoever, ready to be pasted as JSX and rendered. Follow these steps:

1. **Website Analysis:**
   - Provide a general description and purpose of the website.
   - Identify the key objectives and target audience of the website.
   - Outline the key sections of the website (e.g., header, footer, main content area, sidebar, hero section, featured articles, image galleries).
   - For each section, provide a brief description of the type of content it should contain.

2. **Content Structure and Prompts:**
   - Generate detailed content prompts for each section.
   - Example content prompts:
     - "Write an engaging hero section description for a {theme} website."
     - "List 5-7 interesting facts or trivia about {topic} that can be included in the sidebar."
     - "Provide a detailed description for a featured {item} including details, background story, and expected outcome."

3. **Styling and Design Guidelines:**
   - Suggest a color scheme that matches the website’s theme.
   - Recommend fonts and typography styles that suit the website’s content and audience.
   - Suggest layout styles (e.g., grid-based, single-column, multi-column).
   - Identify and describe visual elements that should be incorporated (e.g., buttons, card designs, separators, icons).

4. **Image Requirements:**
   - Provide a list of images that are needed for each section of the website.
   - Describe the content of each image to ensure relevance (e.g., "An action shot of {topic}", "A promotional banner for {event}").
   - Generate prompts for the image generation API based on the descriptions (e.g., "Generate an image of a {scene} with {details} in the background").

5. **React Code Generation:**
   - Create a functional React component for the page, including all necessary HTML structure and Tailwind CSS classes for styling.
   - Use the provided content and styling requirements to build out the sections of the page (e.g., header, hero section, featured content).
   - For any images that need to be included, use the \`ImageComponent\` to generate and display the images based on prompts provided in the description. Do not use the Next.js \`Image\` component.
   - Example usage of \`ImageComponent\`:
     \`\`\`jsx
     <ImageComponent prompt="example prompt" />
     \`\`\`
   - Include metadata and SEO tags in the \`<Head>\` component of the page.
   - Download and include any assets (e.g., images, fonts, icons) as specified in the description.
   - Do not include \`import\` statements or \`export\` statements. Assume all necessary components (React, ImageComponent, Link, Head) are already imported.
   - The react component must be named HomePage

**Output Format:**

Provide only the complete React code below. Do not include any explanations or additional text. The output should be a self-contained functional React component that can be immediately rendered as JSX. The code output should be as long and comprehensive as possible.

**React Code:**
\`\`\`jsx
function HomePage() {
    return (
        <>
          <Head>
            <title>Example Website</title>
            <meta name="description" content="Description of the example website." />
          </Head>
          <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-blue-600 p-4">
              <h1 className="text-3xl font-bold text-white">Example Website</h1>
            </header>
            <main className="p-4">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
                <ImageComponent prompt="example hero image" className="w-full h-64" />
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <ImageComponent prompt="example content image 1" className="w-full h-48" />
                  <ImageComponent prompt="example content image 2" className="w-full h-48" />
                  <ImageComponent prompt="example content image 3" className="w-full h-48" />
                </div>
              </section>
            </main>
            <footer className="bg-gray-800 p-4 text-white text-center">
              <p>&copy; 2024 Example Website. All rights reserved.</p>
            </footer>
          </div>
        </>
      );
    };
    
    export default HomePage;
    \`\`\`
    `;


    export const satirePrompt = (url) => `
    Given the URL "${url}", imagine the website as a dark post-modern satire and generate the React code for a single Next.js page using Tailwind CSS. The code output should be as long and comprehensive as possible. The output should be just the React code with no other writing whatsoever, ready to be pasted as JSX and rendered. Follow these steps:
    
    1. **Website Analysis:**
       - Provide a satirical and dark description and purpose of the website.
       - Identify the key objectives and target audience of the website in a post-modern, satirical tone.
       - Outline the key sections of the website (e.g., header, footer, main content area, sidebar, hero section, featured articles, image galleries).
       - For each section, provide a brief satirical description of the type of content it should contain.
    
    2. **Content Structure and Prompts:**
       - Generate detailed satirical content prompts for each section.
       - Example content prompts:
         - "Write a dystopian hero section description for a {theme} website."
         - "List 5-7 darkly humorous facts or trivia about {topic} that can be included in the sidebar."
         - "Provide a detailed, satirical description for a featured {item} including details, background story, and expected outcome."
    
    3. **Styling and Design Guidelines:**
        - Suggest a color scheme that matches the website’s theme.
        - Recommend fonts and typography styles that suit the website’s content and audience.
        - Suggest layout styles (e.g., grid-based, single-column, multi-column).
        - Identify and describe visual elements that should be incorporated (e.g., buttons, card designs, separators, icons).
        
    4. **Image Requirements:**
       - Provide a list of images that are needed for each section of the website.
       - Describe the content of each image to ensure relevance (e.g., "A dark, satirical action shot of {topic}", "A promotional banner for {event} with a post-modern twist").
       - Generate prompts for the image generation API based on the descriptions (e.g., "Generate a satirical image of a {scene} with {details} in the background").
    
    5. **React Code Generation:**
       - Create a functional React component for the page, including all necessary HTML structure and Tailwind CSS classes for styling.
       - Use the provided content and styling requirements to build out the sections of the page (e.g., header, hero section, featured content).
       - For any images that need to be included, use the \`ImageComponent\` to generate and display the images based on prompts provided in the description. Do not use the Next.js \`Image\` component.
       - Example usage of \`ImageComponent\`:
         \`\`\`jsx
         <ImageComponent prompt="example satirical prompt" />
         \`\`\`
       - Include metadata and SEO tags in the \`<Head>\` component of the page.
       - Download and include any assets (e.g., images, fonts, icons) as specified in the description.
       - Do not include \`import\` statements or \`export\` statements. Assume all necessary components (React, ImageComponent, Link, Head) are already imported.
       - The react component must be named HomePage
    
    **Output Format:**
    
    Provide only the complete React code below. Do not include any explanations or additional text. The output should be a self-contained functional React component that can be immediately rendered as JSX. The code output should be as long and comprehensive as possible.
    
    **React Code:**
    \`\`\`jsx
    function HomePage() {
        return (
            <>
              <Head>
                <title>Example Website</title>
                <meta name="description" content="Description of the example website." />
              </Head>
              <div className="min-h-screen bg-gray-100 text-gray-900">
                <header className="bg-blue-600 p-4">
                  <h1 className="text-3xl font-bold text-white">Example Website</h1>
                </header>
                <main className="p-4">
                  <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Hero Section</h2>
                    <ImageComponent prompt="example hero image" className="w-full h-64" />
                  </section>
                  <section>
                    <h2 className="text-2xl font-bold mb-4">Featured Content</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <ImageComponent prompt="example content image 1" className="w-full h-48" />
                      <ImageComponent prompt="example content image 2" className="w-full h-48" />
                      <ImageComponent prompt="example content image 3" className="w-full h-48" />
                    </div>
                  </section>
                </main>
                <footer className="bg-gray-800 p-4 text-white text-center">
                  <p>&copy; 2024 Example Website. All rights reserved.</p>
                </footer>
              </div>
            </>
          );
        };
        
        export default HomePage;
        \`\`\`
        `;
    
    
