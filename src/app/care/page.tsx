import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const metadata = {
  title: 'Care Tips | KittyName',
  description: 'Essential tips for taking care of your new cat.',
};

const careTips = [
  {
    title: 'What should I feed my cat?',
    content:
      'Provide high-quality commercial cat food appropriate for their age and health status. Ensure fresh water is always available. Avoid feeding them human food, especially items toxic to cats like onions, garlic, and chocolate.',
  },
  {
    title: 'How often should I clean the litter box?',
    content:
      'The litter box should be scooped daily to remove waste. A full cleaning, where you replace all the litter, should be done at least once a week. A clean litter box prevents many behavioral and health issues.',
  },
  {
    title: 'Does my cat need regular vet check-ups?',
    content:
      "Yes, regular veterinary check-ups are crucial for maintaining your cat's health. Kittens need a series of vaccinations, while adult cats should have an annual check-up. This helps in early detection and prevention of diseases.",
  },
  {
    title: 'How can I keep my cat entertained?',
    content:
      'Cats need mental and physical stimulation. Provide a variety of toys, scratching posts, and climbing trees. Engage in interactive play sessions daily using toys like feather wands or laser pointers.',
  },
  {
    title: 'Is grooming important for cats?',
    content:
      "Most cats are excellent self-groomers, but regular brushing is beneficial, especially for long-haired breeds, to prevent matting and reduce hairballs. It's also a great way to bond with your cat.",
  },
];

export default function CarePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-5xl font-bold tracking-tighter md:text-7xl">
          Purrfect <span className="text-primary">Care Tips</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Everything you need to know to be a responsible and loving cat owner.
        </p>
      </div>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {careTips.map((tip, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger className="font-headline text-lg text-left">
                {tip.title}
              </AccordionTrigger>
              <AccordionContent className="text-base">
                {tip.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
