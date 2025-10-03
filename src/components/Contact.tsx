import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Contato
          </h2>
          <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Entre em contato conosco e descubra onde encontrar nossos produtos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Padre Sebastião Pedrosa De Gois, nº 114
                    <br />
                    Bairro Marianga, Itabaiana/SE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                  <a
                    href="https://wa.me/5551999045825"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (51) 99904-5825
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <a
                    href="mailto:mylenaoliveira851@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    mylenaoliveira851@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horário de funcionamento</h3>
                  <p className="text-muted-foreground">
                    Segunda a sábado: 10h às 22h
                    <br />
                    Domingo: 12h às 20h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Instagram</h3>
                  <a
                    href="https://instagram.com/emporiobrazil001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    @emporiobrazil001
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-secondary/20 p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Fale conosco pelo WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                Tire suas dúvidas, conheça nossos produtos e descubra onde nos encontrar nas próximas feiras.
              </p>
              <Button
                size="lg"
                asChild
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://wa.me/5551999045825"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar mensagem
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
