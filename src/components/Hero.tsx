import { Button } from "@/components/ui/button";

const Hero = () => {

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Empóriobrazil
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Produtos artesanais brasileiros de qualidade superior, levando o melhor da gastronomia nacional para todo o país
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
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
          
          <div className="rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto md:mx-0">
            <video
              className="w-full h-auto rounded-lg"
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="/videos/midia_3.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
