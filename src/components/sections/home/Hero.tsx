'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Shield, Star } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  title: 'Deploy with Confidence',
  subtitle: 'Unified deployment platform that streamlines your entire release process',
  description:
    'Experience seamless deployments with our integrated platform that combines speed, security, and simplicity. Deploy anywhere, anytime, with complete confidence.',
  ctaText: 'Start Deploying',
  ctaHref: '/get-started',
  secondaryCtaText: 'View Demo',
  secondaryCtaHref: '/demo',
  imageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
  imageAlt: 'Modern deployment dashboard interface',
  features: [
    {
      title: 'Lightning Fast',
      description: 'Deploy in seconds, not minutes',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance',
    },
    {
      title: 'Zero Downtime',
      description: 'Seamless rollouts with instant rollback',
    },
  ],
  stats: [
    { value: '99.9%', label: 'Uptime' },
    { value: '10s', label: 'Deploy Time' },
    { value: '50K+', label: 'Deployments' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
                onClick={handlePrimaryClick}
                data-editable-href="ctaHref"
                data-href={config.ctaHref}
              >
                <span data-editable="ctaText">{config.ctaText}</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg border-border hover:bg-accent hover:text-accent-foreground"
                onClick={handleSecondaryClick}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={config.imageUrl}
                alt={config.imageAlt}
                width={800}
                height={600}
                className="w-full h-auto"
                data-editable-src="imageUrl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 lg:mt-32">
          <div className="grid gap-8 md:grid-cols-3">
            {config.features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center text-primary">
                    {idx === 0 && <Zap className="h-12 w-12" />}
                    {idx === 1 && <Shield className="h-12 w-12" />}
                    {idx === 2 && <Star className="h-12 w-12" />}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>

                  <p className="text-muted-foreground">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
