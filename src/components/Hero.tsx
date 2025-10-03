import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Empóriobrazil
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Produtos artesanais brasileiros de qualidade superior, levando o melhor da gastronomia nacional para todo o país
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://wa.me/5551999045825"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entre em contato
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("produtos");
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Conheça nossos produtos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
