import { notFound } from "next/navigation";
import { User, Calendar } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/data.tsx";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto py-16 px-4 md:px-6">
      <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
        <div 
          className="text-lg leading-relaxed whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
        />
      </article>
    </div>
  );
}
