'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Zap, Shield } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Clean, Focused Solutions',
  subtitle: 'Delivering exactly what you need, when you need it',
  description:
    'Experience the power of simplicity with our streamlined approach that eliminates complexity and delivers reliable results every time.',
  ctaText: 'Get Started',
  ctaHref: '/start',
  secondaryCtaText: 'Learn More',
  secondaryCtaHref: '/about',
  logoUrl:
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=80&fit=crop&auto=format',
  logoAlt: 'Company Logo',
  features: [
    { title: 'Reliable', description: 'Trusted solutions that work seamlessly' },
    { title: 'Efficient', description: 'Streamlined processes for optimal results' },
    { title: 'Secure', description: 'Quality protection you can depend on' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Image
              src={config.logoUrl}
              alt={config.logoAlt}
              data-editable-src="logoUrl"
              width={200}
              height={80}
              className="h-12 w-auto object-contain"
              priority
            />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span data-editable="title">{config.title}</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 font-medium">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>

            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              <span data-editable="description">{config.description}</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold"
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground px-8 py-3 text-lg font-semibold"
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center text-primary">
                  {idx === 0 && <CheckCircle className="h-10 w-10" />}
                  {idx === 1 && <Zap className="h-10 w-10" />}
                  {idx === 2 && <Shield className="h-10 w-10" />}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
