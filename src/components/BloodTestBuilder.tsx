import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Check,
  Plus,
  Minus,
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
  description?: string;
}

interface AddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ComponentType<{ className?: string }>;
  tests: TestItem[];
}

const baseTest = {
  id: 'standard',
  name: 'Standard Blood Panel',
  price: 19,
  tests: [
    { id: 'fbc', name: 'Full blood count' },
    { id: 'liver', name: 'Liver function test' },
    { id: 'kidney', name: 'Kidney function test' },
    { id: 'glucose', name: 'Fasting blood glucose with HbA1c' },
    { id: 'cholesterol', name: 'Cholesterol (LDL, HDL, triglycerides)' },
    { id: 'urine', name: 'Urine test' },
  ],
};

const addOns: AddOn[] = [
  {
    id: 'longevity',
    name: 'Longevity Panel',
    description: 'Deep dive into longevity markers',
    price: 50,
    icon: Sparkles,
    tests: [
      { id: 'insulin', name: 'Fasting insulin' },
      { id: 'hscrp', name: 'hs-CRP (inflammation)' },
      { id: 'ferritin', name: 'Ferritin' },
      { id: 'b12', name: 'Vitamin B12' },
      { id: 'vitd', name: 'Vitamin D (25-OH)' },
      { id: 'tsh', name: 'TSH (thyroid)' },
    ],
  },
  {
    id: 'thyroid',
    name: 'Advanced Thyroid',
    description: 'Complete thyroid function analysis',
    price: 10,
    icon: FlaskConical,
    tests: [
      { id: 'freet3', name: 'Free T3' },
      { id: 'freet4', name: 'Free T4' },
    ],
  },
  {
    id: 'hormones',
    name: 'Hormonal Panel',
    description: 'Comprehensive hormone assessment',
    price: 45,
    icon: Dna,
    tests: [
      { id: 'testosterone', name: 'Testosterone / Estradiol' },
      { id: 'shbg', name: 'SHBG' },
    ],
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    description: 'Advanced heart health markers',
    price: 17.5,
    icon: Heart,
    tests: [
      { id: 'apob', name: 'ApoB' },
    ],
  },
  {
    id: 'genetic',
    name: 'Genetic Risk',
    description: 'One-time genetic risk assessment',
    price: 35,
    icon: Dna,
    tests: [
      { id: 'lpa', name: 'Lp(a) - Lipoprotein(a)' },
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

  const clearAll = () => {
    setSelectedAddOns(new Set());
  };

  return (
    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Left Column - Base Package + Add-ons */}
      <div className="lg:col-span-2 space-y-6">
        {/* Base Package Card */}
        <Card className="relative overflow-hidden border-2 border-primary/30 shadow-xl">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500" />
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <TestTube className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <Badge className="mb-1 bg-primary/10 text-primary border-primary/20">
                    Base Package
                  </Badge>
                  <CardTitle className="text-xl">{baseTest.name}</CardTitle>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-bold text-primary">${baseTest.price}</span>
                <p className="text-xs text-muted-foreground">Always included</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {baseTest.tests.map((test) => (
                <div
                  key={test.id}
                  className="flex items-center gap-2 text-sm py-1.5 px-2 rounded-lg bg-primary/5"
                >
                  <Check className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{test.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Add-ons Grid */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Plus className="w-5 h-5 text-primary" />
            Customize Your Panel
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {addOns.map((addon) => {
              const isSelected = selectedAddOns.has(addon.id);
              return (
                <Card
                  key={addon.id}
                  className={cn(
                    'relative cursor-pointer transition-all duration-300 hover:shadow-lg group',
                    isSelected
                      ? 'border-2 border-primary shadow-lg shadow-primary/10 bg-primary/5'
                      : 'border hover:border-primary/50 hover:-translate-y-0.5'
                  )}
                  onClick={() => toggleAddOn(addon.id)}
                >
                  {isSelected && (
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                  )}
                  <CardContent className="pt-5 pb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={cn(
                          'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                          isSelected
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-primary/10 text-primary group-hover:bg-primary/20'
                        )}
                      >
                        <addon.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-base">{addon.name}</h4>
                        <p className="text-sm text-muted-foreground">{addon.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          'text-xl font-bold transition-colors',
                          isSelected ? 'text-primary' : 'text-foreground'
                        )}
                      >
                        +${addon.price.toFixed(addon.price % 1 === 0 ? 0 : 2)}
                      </span>
                      <Button
                        variant={isSelected ? 'default' : 'outline'}
                        size="sm"
                        className={cn(
                          'rounded-full transition-all',
                          isSelected && 'bg-primary hover:bg-primary/90'
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleAddOn(addon.id);
                        }}
                      >
                        {isSelected ? (
                          <>
                            <Minus className="w-4 h-4 mr-1" />
                            Remove
                          </>
                        ) : (
                          <>
                            <Plus className="w-4 h-4 mr-1" />
                            Add
                          </>
                        )}
                      </Button>
                    </div>
                    {/* Tests preview on hover/selection */}
                    <div
                      className={cn(
                        'mt-3 pt-3 border-t space-y-1 overflow-hidden transition-all duration-300',
                        isSelected ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 border-t-0 mt-0 pt-0'
                      )}
                    >
                      {addon.tests.map((test) => (
                        <div key={test.id} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-3 h-3 text-primary flex-shrink-0" />
                          <span>{test.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Column - Summary */}
      <div className="lg:col-span-1">
        <div className="sticky top-8">
          <Card className="overflow-hidden border-2 shadow-xl">
            <CardHeader className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  <CardTitle className="text-lg text-white">Your Panel</CardTitle>
                </div>
                {selectedAddOns.size > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white/80 hover:text-white hover:bg-white/10 -mr-2"
                    onClick={clearAll}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>
              <CardDescription className="text-emerald-100">
                {selectedTests.length} tests selected
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {/* Selected Items List */}
              <div className="space-y-3 mb-6">
                {/* Base Package */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-medium">{baseTest.name}</span>
                  </div>
                  <span className="text-muted-foreground">${baseTest.price}</span>
                </div>

                {/* Selected Add-ons */}
                {addOns
                  .filter((addon) => selectedAddOns.has(addon.id))
                  .map((addon) => (
                    <div
                      key={addon.id}
                      className="flex items-center justify-between text-sm group"
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        <span>{addon.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">
                          +${addon.price.toFixed(addon.price % 1 === 0 ? 0 : 2)}
                        </span>
                        <button
                          onClick={() => toggleAddOn(addon.id)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-destructive"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}

                {selectedAddOns.size === 0 && (
                  <p className="text-sm text-muted-foreground italic py-2">
                    Click add-ons above to customize your panel
                  </p>
                )}
              </div>

              <Separator className="my-4" />

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-semibold">Total</span>
                <div className="text-right">
                  <span className="text-3xl font-bold text-primary">
                    ${totalPrice.toFixed(totalPrice % 1 === 0 ? 0 : 2)}
                  </span>
                  {selectedAddOns.size > 0 && (
                    <p className="text-xs text-muted-foreground">
                      Save ${((baseTest.price + addOns.reduce((sum, a) => sum + (selectedAddOns.has(a.id) ? a.price : 0), 0)) * 0.1).toFixed(2)} with membership
                    </p>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                size="lg"
                className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl text-base py-6"
              >
                Book Your Panel
              </Button>

              {/* Tests Breakdown */}
              <div className="mt-6 pt-4 border-t">
                <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                  <TestTube className="w-4 h-4 text-primary" />
                  All Tests Included
                </h4>
                <div className="max-h-48 overflow-y-auto pr-2 space-y-1.5 scrollbar-thin">
                  {selectedTests.map((test, index) => (
                    <div
                      key={test.id}
                      className="flex items-center gap-2 text-xs text-muted-foreground py-1 animate-in fade-in slide-in-from-left-2"
                      style={{ animationDelay: `${index * 20}ms` }}
                    >
                      <Check className="w-3 h-3 text-primary flex-shrink-0" />
                      <span>{test.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{selectedTests.length}</p>
              <p className="text-xs text-muted-foreground">Total Tests</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{selectedAddOns.size}</p>
              <p className="text-xs text-muted-foreground">Add-ons Selected</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
