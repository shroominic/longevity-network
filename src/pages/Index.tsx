import { useSeoMeta } from '@unhead/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BloodTestBuilder } from '@/components/BloodTestBuilder';
import {
  Activity,
  Users,
  Zap,
  FlaskConical,
  Heart,
  Sparkles,
  ArrowRight,
  Check,
  ChevronDown,
  TestTube,
  Droplets,
  Sun,
  Pill,
  LineChart,
} from 'lucide-react';

const Index = () => {
  useSeoMeta({
    title: 'LongevityNetwork | Optimize Your Healthspan Together',
    description: 'Join the LongevityNetwork community at NetworkSchool. Access CGM monitors, specialized meetups, blood testing discounts, and collective health optimization.',
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden isolate">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50 to-amber-50 dark:from-emerald-950/30 dark:via-teal-950/50 dark:to-amber-950/20" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-200/20 rounded-full blur-3xl animate-float" />
        </div>
        
        {/* DNA Helix Visual Element */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none overflow-hidden hidden lg:block">
          <svg viewBox="0 0 200 800" className="h-full w-auto">
            <path
              d="M100 0 Q150 100 100 200 Q50 300 100 400 Q150 500 100 600 Q50 700 100 800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            <path
              d="M100 0 Q50 100 100 200 Q150 300 100 400 Q50 500 100 600 Q150 700 100 800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            {[0, 100, 200, 300, 400, 500, 600, 700].map((y) => (
              <line key={y} x1="60" y1={y + 50} x2="140" y2={y + 50} stroke="currentColor" strokeWidth="1.5" className="text-primary/60" />
            ))}
          </svg>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              NetworkSchool L2
            </Badge>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-400 dark:via-teal-400 dark:to-emerald-500 bg-clip-text text-transparent">
                Longevity
              </span>
              <br />
              <span className="text-foreground">Network</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join a community of biohackers, health optimizers, and longevity enthusiasts. 
              <span className="text-foreground font-medium"> Learn together. Optimize together. Live longer together.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30"
                onClick={() => scrollToSection('membership')}
              >
                Become a Member
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 rounded-full border-2 hover:bg-secondary transition-all duration-300"
                onClick={() => scrollToSection('blood-testing')}
              >
                View Blood Tests
              </Button>
            </div>
            
            <button 
              onClick={() => scrollToSection('benefits')}
              className="animate-bounce mt-8 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Scroll to benefits"
            >
              <ChevronDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">What We Offer</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="text-primary">Optimize</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've curated the best tools, knowledge, and community support to help you extend your healthspan and live your best life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Activity,
                title: 'Continuous Glucose Monitor',
                description: 'Every member receives a CGM to track and optimize your metabolic health in real-time.',
                highlight: 'Included in Membership',
              },
              {
                icon: Users,
                title: 'Specialized Meetups',
                description: 'Regular sessions to share knowledge, learn protocols, and optimize together as a community.',
                highlight: 'Monthly Events',
              },
              {
                icon: FlaskConical,
                title: 'Discounted Blood Testing',
                description: 'Access negotiated group rates for comprehensive longevity-focused blood panels.',
                highlight: 'Partner Lab Access',
              },
              {
                icon: Sun,
                title: 'Red Light Therapy',
                description: 'Access to red light therapy sessions for cellular regeneration and recovery.',
                highlight: 'Coming Soon',
              },
              {
                icon: Droplets,
                title: 'Probiotic Shots & Electrolytes',
                description: 'Optimized gut health and hydration protocols designed for performance.',
                highlight: 'Member Perks',
              },
              {
                icon: Pill,
                title: 'Custom Supplement Protocols',
                description: 'Personalized supplement stacks based on your bloodwork and health goals.',
                highlight: 'Personalized',
              },
            ].map((benefit, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-0 bg-card/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-fit mb-2 text-xs">
                    {benefit.highlight}
                  </Badge>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Collective Section */}
      <section className="py-24 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                  <LineChart className="w-3 h-3 mr-1" />
                  Collective Intelligence
                </Badge>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  Share Data. <span className="text-primary">Multiply Insights.</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  When we pool our CGM data, bloodwork, and health metrics, we unlock patterns that no individual could discover alone. 
                  Our community-driven approach accelerates everyone's health optimization journey.
                </p>
                <ul className="space-y-4">
                  {[
                    'Anonymous data pooling for community insights',
                    'Discover what works across different body types',
                    'Access shared learnings from member experiments',
                    'Contribute to longevity research',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 p-8 flex items-center justify-center">
                  <div className="w-full h-full rounded-2xl bg-card/90 backdrop-blur-sm shadow-2xl p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Activity className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-primary rounded-full" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Glucose Response</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <Heart className="w-6 h-6 text-amber-500" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-accent/20 rounded-full overflow-hidden">
                            <div className="h-full w-4/5 bg-accent rounded-full" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">HRV Score</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center">
                          <Zap className="w-6 h-6 text-teal-500" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-teal-500/20 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-teal-500 rounded-full" />
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">Energy Levels</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-6">Live community metrics dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Join the Network</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Invest in Your <span className="text-primary">Longevity</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A small commitment that filters for serious health optimizers and unlocks incredible value.
            </p>
          </div>
          
          <div className="max-w-lg mx-auto">
            <Card className="relative overflow-hidden border-2 border-primary/20 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500" />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-3xl font-serif">LongevityNetwork Membership</CardTitle>
                <CardDescription className="text-base">
                  Full access to our community and all member benefits
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pt-4">
                <div className="mb-8">
                  <span className="text-6xl font-bold text-primary">$50</span>
                  <span className="text-muted-foreground text-xl">/month</span>
                </div>
                
                <ul className="text-left space-y-4 mb-8">
                  {[
                    { text: 'Continuous Glucose Monitor included', highlight: true },
                    { text: 'Access to all specialized meetups', highlight: false },
                    { text: 'Community data insights & findings', highlight: false },
                    { text: 'Discounted blood testing packages', highlight: true },
                    { text: 'Red light therapy sessions', highlight: false },
                    { text: 'Probiotic shots & electrolyte protocols', highlight: false },
                    { text: 'Custom supplement guidance', highlight: false },
                    { text: 'Private community access', highlight: false },
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10'}`}>
                        <Check className={`w-3.5 h-3.5 ${item.highlight ? '' : 'text-primary'}`} />
                      </div>
                      <span className={item.highlight ? 'font-medium' : ''}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button 
                  size="lg" 
                  className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-xl"
                >
                  Join LongevityNetwork
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Cancel anytime. No long-term commitment required.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/20 to-primary/5 relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Your Journey</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From joining to optimizing - here's what your longevity journey looks like with us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
              
              {[
                {
                  step: '01',
                  title: 'Join the Network',
                  description: 'Sign up for $50/month membership and get your CGM device to start tracking your metabolic health.',
                  icon: Users,
                },
                {
                  step: '02',
                  title: 'Get Your Baseline',
                  description: 'Book your discounted blood panel to understand your current biomarkers and set optimization goals.',
                  icon: TestTube,
                },
                {
                  step: '03',
                  title: 'Optimize Together',
                  description: 'Attend meetups, share insights, and leverage community data to accelerate your health journey.',
                  icon: LineChart,
                },
              ].map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative z-10 w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-card to-secondary/50 shadow-lg flex items-center justify-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                    <item.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blood Testing Section */}
      <section id="blood-testing" className="py-24 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <TestTube className="w-3 h-3 mr-1" />
              Partner Lab Access
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Build Your <span className="text-primary">Blood Panel</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Start with our comprehensive base panel at just $19, then customize with add-ons tailored to your health goals.
            </p>
          </div>
          
          <BloodTestBuilder />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Optimize Your Healthspan?
          </h2>
          <p className="text-emerald-100 text-xl max-w-2xl mx-auto mb-10">
            Join a community of committed health optimizers. Your journey to a longer, healthier life starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-white text-emerald-700 hover:bg-emerald-50 shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('membership')}
            >
              Join for $50/month
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300"
              onClick={() => scrollToSection('blood-testing')}
            >
              Explore Blood Tests
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif font-bold text-xl">LongevityNetwork</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A NetworkSchool L2
            </p>
            <a 
              href="https://shakespeare.diy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Vibed with Shakespeare
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
