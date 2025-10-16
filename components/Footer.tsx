import { personalInfo } from '@/lib/data';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" /> using Next.js, React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
