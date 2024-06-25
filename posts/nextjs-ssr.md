---
title: 'Getting Started with Server-Side Rendering in Next.js Using SQLite'
date: '2024-06-17'
author: 'devansh bajaj'
image: '../images/profile.png'
---

### What is Server-Side Rendering?

Server-Side Rendering (SSR) is a data rendering method in which web pages are rendered on the server rather than in the client's browser. This means that the server generates the required content, such as the HTML file, and sends it to the client, where it is then displayed without any delays. This approach improves performance, enhances SEO, and enhances user experience by rendering the content quickly.

### What Are We Going to Do?

We will create a simple Next.js project to learn how to get started with SSR and how to call a database query directly in a Next.js page. In case someone is concerned about the safety of this approach, I will address that first.

### Is It Unsafe?

This approach is completely safe for demonstrating the power of a server component as it does not expose any database secrets to the client-side and queries the database from the server only. Additionally, it is advantageous because we can skip the API layer for a quick demonstration. (P.S.: You can also implement an API layer in a Next.js project, which we can discuss in a different blog.)

<br />

### Let's Dive Into a Step-by-Step Tutorial

#### Step 1: Set Up Your Next.js Project

First, make sure you have Node.js and npm installed on your machine. Then, create a new Next.js project by running the following command:

```bash 
npx create-next-app@latest
```

Fill in the prompts as you see fit. Here is what I selected:

```bash
✔ What is your project named? sql_next
✔ Would you like to use TypeScript? Yes
✔ Would you like to use ESLint? Yes
✔ Would you like to use Tailwind CSS? Yes
✔ Would you like to use `src/` directory? Yes
✔ Would you like to use App Router? (recommended) Yes
✔ Would you like to customize the default import alias (@/*)? Yes
```

Now, install the sqlite3 dependency that we require for the database:

```bash
npm install sqlite3
```

#### Step 2: Create a Server-Side Rendered Page

Here is how you can create an SSR page:

1. **Create a new route in the `app` directory**:  
    Structure: `app/ssr/page.tsx`
    
2. **Add the data fetching logic to the page**:  
    Create a `getData` function where we will perform our database operations and return the data.
    

```typescript
import { FC } from "react";
import sqlite3 from "sqlite3";
import { promisify } from "util";

type Quote = {
  id: number;
  text: string;
};

type Props = {
  data: Quote[];
};

const getData = async (): Promise<Quote[]> => {
  
  // Create new DB
  const db = new sqlite3.Database(":memory:");
  const run = promisify(db.run.bind(db));
  const all = promisify(db.all.bind(db));

  // Create a table and insert some data
  await run("CREATE TABLE quotes (id INTEGER PRIMARY KEY, text TEXT)");
  const insertStmt = await db.prepare("INSERT INTO quotes (text) VALUES (?)");
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don't take.",
  ];

  for (const quote of quotes) {
    await insertStmt.run(quote);
  }

  await promisify(insertStmt.finalize.bind(insertStmt))();
  const data = await all("SELECT id, text FROM quotes");
  await db.close();
  return data as Quote[];
};

```

In this async function, we handle the creation, insertion, and fetching of data from the SQLite database.

`promisify` is used to convert the `db.run` and `db.all` methods to their promise-based versions so that we can use `await` within the async function.

We have used some motivational quotes here because who doesn't like a bit of motivation while learning something new?

3. **Add a server component to render the data list on the page**:  
    Add the following code right below our function. This `SSRPage` component will return and render the data on the page.

``` typescript
// below the code mentioned above
const SSRPage: FC<Props> = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col gap-4 m-8">
      <h1>Server-Side Rendering with Next.js App Router</h1>
      <p>Quotes fetched from the database:</p>
      <ol className="flex flex-col gap-2 ml-4 list-inside list-decimal">
        {data.map((quote) => (
          <li key={quote.id}>{quote.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default SSRPage;
```
### Conclusion

This was a simple example to showcase the possibilities of SSR in Next.js, providing significant performance and SEO benefits. By following this tutorial, you’ve learned how to set up a server-side rendered page, fetch data from a database, and use the new App Router introduced in Next.js 13.

Feel free to experiment further with this example and explore additional features such as Static Site Generation (SSG), API routes, and dynamic routing.

Thank you for reading!

### Important Links

1. [Next.js Documentation](https://nextjs.org/docs/app)
2. [SQLite3 on npm](https://www.npmjs.com/package/sqlite3)   

