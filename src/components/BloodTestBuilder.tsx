import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check,
  Plus,
  TestTube,
  FlaskConical,
  Dna,
  Heart,
  Sparkles,
  ShoppingCart,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestItem {
  id: string;
  name: string;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  icon: React.ComponentType<{ className?: string }>;
  tests: TestItem[];
}

const baseTest = {
  id: 'standard',
  name: 'Standard Panel',
  price: 19,
  description: 'Essential baseline health markers for metabolic & organ function',
  tests: [
    { id: 'fbc', name: 'Full blood count' },
    { id: 'liver', name: 'Liver function' },
    { id: 'kidney', name: 'Kidney function' },
    { id: 'glucose', name: 'Glucose + HbA1c' },
    { id: 'cholesterol', name: 'Cholesterol panel' },
    { id: 'urine', name: 'Urine test' },
  ],
};

const addOns: AddOn[] = [
  {
    id: 'longevity',
    name: 'Longevity',
    price: 48,
    icon: Sparkles,
    tests: [
      { id: 'insulin', name: 'Fasting insulin' },
      { id: 'hscrp', name: 'hs-CRP' },
      { id: 'ferritin', name: 'Ferritin' },
      { id: 'b12', name: 'B12' },
      { id: 'vitd', name: 'Vitamin D' },
      { id: 'tsh', name: 'TSH' },
    ],
  },
  {
    id: 'thyroid',
    name: 'Thyroid+',
    price: 10,
    icon: FlaskConical,
    tests: [
      { id: 'freet3', name: 'Free T3' },
      { id: 'freet4', name: 'Free T4' },
    ],
  },
  {
    id: 'hormones',
    name: 'Hormones',
    price: 45,
    icon: Dna,
    tests: [
      { id: 'testosterone', name: 'Testosterone/Estradiol' },
      { id: 'shbg', name: 'SHBG' },
    ],
  },
  {
    id: 'cardiovascular',
    name: 'Cardio',
    price: 17.5,
    icon: Heart,
    tests: [
      { id: 'apob', name: 'ApoB' },
    ],
  },
  {
    id: 'genetic',
    name: 'Genetic',
    price: 35,
    icon: Dna,
    tests: [
      { id: 'lpa', name: 'Lp(a)' },
    ],
  },
];

export function BloodTestBuilder() {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const totalPrice = baseTest.price + addOns
    .filter((addon) => selectedAddOns.has(addon.id))
    .reduce((sum, addon) => sum + addon.price, 0);

  const selectedTests = [
    ...baseTest.tests,
    ...addOns
      .filter((addon) => selectedAddOns.has(addon.id))
      .flatMap((addon) => addon.tests),
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
        <div className="grid md:grid-cols-5">
          {/* Left - Base + Add-ons */}
          <div className="md:col-span-3 p-5 space-y-4">
            {/* Base Package - Inline */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center">
                  <TestTube className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">{baseTest.name}</span>
                    <Badge variant="secondary" className="text-xs py-0">Base</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{baseTest.description}</p>
                </div>
              </div>
              <span className="text-2xl font-bold text-primary">${baseTest.price}</span>
            </div>

            {/* Add-ons - Compact Grid */}
            <div>
              <p className="text-xs font-medium text-muted-foreground mb-2 flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add-ons
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {addOns.map((addon) => {
                  const isSelected = selectedAddOns.has(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddOn(addon.id)}
                      className={cn(
                        'relative p-3 rounded-xl text-left transition-all duration-200 group',
                        isSelected
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'bg-secondary/50 hover:bg-secondary hover:shadow-sm'
                      )}
                    >
                      {isSelected && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-white flex items-center justify-center shadow">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                      )}
                      <addon.icon className={cn('w-4 h-4 mb-1', isSelected ? 'text-primary-foreground' : 'text-primary')} />
                      <p className="text-xs font-medium truncate">{addon.name}</p>
                      <p className={cn('text-sm font-bold', isSelected ? 'text-primary-foreground' : 'text-foreground')}>
                        +${addon.price % 1 === 0 ? addon.price : addon.price.toFixed(1)}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tests List - Collapsible/Compact */}
            <div className="pt-3 border-t">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                {selectedTests.length} tests in your panel
              </p>
              <div className="flex flex-wrap gap-1.5">
                {selectedTests.map((test) => (
                  <span
                    key={test.id}
                    className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-secondary/70"
                  >
                    <Check className="w-3 h-3 text-primary" />
                    {test.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Summary */}
          <div className="md:col-span-2 bg-gradient-to-br from-emerald-500 to-teal-600 p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-white/80 mb-4">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm font-medium">Your Panel</span>
              </div>

              {/* Selected items */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-white text-sm">
                  <span>{baseTest.name}</span>
                  <span>${baseTest.price}</span>
                </div>
                {addOns
                  .filter((addon) => selectedAddOns.has(addon.id))
                  .map((addon) => (
                    <div
                      key={addon.id}
                      className="flex items-center justify-between text-white/90 text-sm group"
                    >
                      <span>{addon.name}</span>
                      <div className="flex items-center gap-2">
                        <span>+${addon.price % 1 === 0 ? addon.price : addon.price.toFixed(1)}</span>
                        <button
                          onClick={() => toggleAddOn(addon.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              {/* Divider */}
              <div className="border-t border-white/20 my-3" />

              {/* Total */}
              <div className="flex items-end justify-between mb-4">
                <span className="text-white/80 text-sm">Total</span>
                <span className="text-3xl font-bold text-white">
                  ${totalPrice % 1 === 0 ? totalPrice : totalPrice.toFixed(2)}
                </span>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-white/90 text-sm">
                  Contact us for booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
