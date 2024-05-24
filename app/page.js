// app/page.js

import Link from 'next/link';

export default function Main() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Link href="/homePage" legacyBehavior>
        <a className="text-xl font-bold text-blue-500">Go to Home Page</a>
      </Link>
    </div>
  );
}
