import Image from 'next/image';
import { personalInfo } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Who I Am?
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-12"></div>

        <Card className="overflow-hidden border-0 shadow-lg">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src={personalInfo.profileImage || ''}
                  alt={personalInfo.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{personalInfo.name}</h3>
                  <p className="text-lg text-blue-600 dark:text-cyan-400 font-medium">
                    {personalInfo.title}
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {personalInfo.bio}
                </p>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start">
                    <span className="font-semibold min-w-[100px]">Email:</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-blue-600 dark:text-cyan-400 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  {personalInfo.phone && (
                    <div className="flex items-start">
                      <span className="font-semibold min-w-[100px]">Phone:</span>
                      <span className="text-muted-foreground">{personalInfo.phone}</span>
                    </div>
                  )}
                  {personalInfo.address && (
                    <div className="flex items-start">
                      <span className="font-semibold min-w-[100px]">Location:</span>
                      <span className="text-muted-foreground">{personalInfo.address}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
