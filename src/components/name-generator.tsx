'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WandSparkles, Loader } from 'lucide-react';
import { Confetti } from '@/components/confetti';
import { Sparkles } from '@/components/sparkles';
import { categorizeName } from '@/ai/flows/categorize-names-with-ai';
import namesData from '@/data/names.json';

const WigglingCat = () => (
  <div
    style={{
      animation: 'bounce 1s infinite alternate',
    }}
  >
    <style>
      {`
        @keyframes bounce {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(15deg); }
        }
      `}
    </style>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-16 w-16 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4c-1.5 0-3 1.5-3 3v1c0 1.5 1.5 3 3 3s3-1.5 3-3V7c0-1.5-1.5-3-3-3z" />
      <path d="M4 14s.5-2 2-2 4 2 4 2-1.5 2-2 2-4-2-4-2z" />
      <path d="M20 14s-.5-2-2-2-4 2-4 2 1.5 2 2 2 4-2 4-2z" />
      <path
        d="M14.5 19c0-3.5-2-5-2.5-5s-2.5 1.5-2.5 5"
        style={{
          animation: 'wiggle 2s infinite',
          transformOrigin: 'bottom center',
        }}
      />
      <path d="M12 11v3" />
    </svg>
  </div>
);

export function NameGenerator() {
  const [generatedName, setGeneratedName] = useState<string>("Your Cat's Name");
  const [category, setCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confettiTrigger, setConfettiTrigger] = useState<number>(0);
  const [sparkleTrigger, setSparkleTrigger] = useState<number>(0);

  const handleGenerateName = async () => {
    setIsLoading(true);
    setCategory(null);

    const names = namesData.names;
    const randomIndex = Math.floor(Math.random() * names.length);
    const newName = names[randomIndex];

    setGeneratedName(newName);
    setConfettiTrigger((c) => c + 1);
    setSparkleTrigger((s) => s + 1);

    try {
      const result = await categorizeName({ name: newName });
      setCategory(result.category);
    } catch (error) {
      console.error('Error categorizing name:', error);
      setCategory('general');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="relative h-full w-full overflow-hidden border-2 border-primary/50 shadow-xl">
      <Confetti trigger={confettiTrigger} />
      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-4">
          {isLoading ? (
            <Loader className="h-16 w-16 animate-spin text-primary" />
          ) : (
            <WigglingCat />
          )}
        </div>
        <div className="relative">
          <Sparkles trigger={sparkleTrigger} />
          <h2 className="font-headline text-5xl text-primary transition-all duration-300 sm:text-6xl">
            {generatedName}
          </h2>
        </div>
        {category && !isLoading && (
          <Badge
            variant="secondary"
            className="mt-4 animate-in fade-in duration-500"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
        )}
        <Button
          onClick={handleGenerateName}
          disabled={isLoading}
          size="lg"
          className="mt-8 font-headline text-lg"
        >
          <WandSparkles className="mr-2 h-5 w-5" />
          Generate Name
        </Button>
      </CardContent>
    </Card>
  );
}
