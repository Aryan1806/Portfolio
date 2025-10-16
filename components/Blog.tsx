'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';
import { BlogPost } from '@/types/portfolio';
import Image from 'next/image';

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?per_page=3');
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError('Unable to load blog posts');
        console.error('Error fetching blog posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Latest Blog Posts
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        {loading && (
          <div className="text-center text-muted-foreground">
            Loading blog posts...
          </div>
        )}

        {error && (
          <div className="text-center">
            <p className="text-muted-foreground mb-4">{error}</p>
            <p className="text-sm text-muted-foreground">
              Configure your Dev.to username to display your blog posts here.
            </p>
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="flex flex-col hover:shadow-lg transition-shadow"
              >
                {post.cover_image && (
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.cover_image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                )}

                <CardHeader className="flex-1">
                  <CardTitle className="line-clamp-2 text-lg">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-sm">
                    <Calendar className="mr-2 h-3 w-3" />
                    {formatDate(post.published_at)}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>
                  {(() => {
                    // Handle both tag_list (array) and tags (string or array) from Dev.to API
                    const tagArray = post.tag_list || 
                      (Array.isArray(post.tags) ? post.tags : 
                        (typeof post.tags === 'string' ? post.tags.split(',').map(t => t.trim()) : []));
                    
                    return tagArray.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {tagArray.slice(0, 3).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    );
                  })()}
                </CardContent>

                <CardFooter>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a href={post.url} target="_blank" rel="noopener noreferrer">
                      Read More
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
