import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "../sanity/client";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

type Params = Promise<{ slug: string }>
export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await client.fetch<SanityDocument>(POST_QUERY, params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      
     <div className="flex-1 outline outline-4 outline-amber-300 mx-20"> {postImageUrl && (
        <img 
          src={postImageUrl}
          alt={post.title}
          className="aspect-video rounded-xl "
          width="550"
          height="310"
        />
      )} </div>
      <h1 className="text-4xl font-bold text-center rounded-md outline outline-8 outline-yellow-300 text-red-500 mb-8">{post.title}</h1>
      <div className="prose rounded-md outline outline-8 outline-orange-600">
        
       <p className="outline outline-2 outline-purple-300 text-pink-700 space-y-2 tracking-wide "> {Array.isArray(post.body) && <PortableText value={post.body} />}</p>
      </div>
      <p className="text-xs text-center font-semibold text-green-700">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
      <Link href="/" className="hover:underline flex-1 outline outline-8 outline-pink-400 font-bold p-4 text-center text-xl text-purple-950 ">
        ← See more
      </Link>
    </main>
  );
}
