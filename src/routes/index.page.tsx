import { Head, useServerSideQuery } from 'rakkasjs';
import { useState } from 'react';
import fs from 'fs/promises';

export default function UseSSQDemoPage() {
  const [file, setFile] = useState('package.json');

  const { data, refetch } = useServerSideQuery(async () => {
    // The function's body always runs on the server!
    // It's called directly during SSR.
    // During client-side rendering, Rakkas turns it into an HTTP request.

    // Variables from the surrounding scope are captured and sent to the
    // server as well. But of course you should validate them!
    if (!['package.json', 'tsconfig.json'].includes(file)) {
      throw new Error('No kitty!');
    }

    // The fs import is stripped from the client bundle because it's only
    // used in server-side code
    const contents = await fs.readFile(file, 'utf-8');

    return { contents, date: new Date() };
  });

  return (
    <div>
      <Head title="useServerSideQuery demo" />
      <h1>useServerSideQuery demo</h1>

      <select value={file} onChange={(e) => setFile(e.target.value)}>
        <option value="package.json">package.json</option>
        <option value="tsconfig.json">tsconfig.json</option>
      </select>

      {/* The return type is inferred and the Date object is
      properly serialized/deserialized */}
      <p>Last fetched at {data.date.toLocaleTimeString()}</p>

      <p>
        <button type="button" onClick={() => refetch()}>
          Refetch
        </button>
      </p>

      <pre>{data.contents}</pre>
    </div>
  );
}
