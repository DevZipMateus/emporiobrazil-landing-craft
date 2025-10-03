import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

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
          
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              loop
              autoPlay
              muted
              playsInline
            >
              <source src="/videos/midia_2.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
            <button
              onClick={togglePlayPause}
              className="absolute bottom-4 right-4 bg-primary/90 hover:bg-primary text-primary-foreground p-3 rounded-full shadow-lg transition-all"
              aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
