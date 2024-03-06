/**
 * Generic Types;
 * Can be used to type function and others
 */

async function pushFetch<T>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const result: Promise<T> = (await fetch(input, init)).json();
  return result;
}

type PostTypes = {
  id: string;
  title: string;
  description: string;
}

async function getPosts() {
  const posts = await pushFetch<PostTypes[]>("<url>", {
    cache: "force-cache"
  });

  posts.forEach(post => console.log(post.title));
}

