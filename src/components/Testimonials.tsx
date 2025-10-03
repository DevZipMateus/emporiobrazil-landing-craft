import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Lecilda Costa",
    username: "@lecildacosta0",
    text: "Maravilha top demais",
    rating: 5,
  },
  {
    name: "Gerlandia",
    username: "@gerlandia.jp",
    text: "Os melhores",
    rating: 5,
  },
  {
    name: "Djones",
    username: "@djones2217",
    text: "Delicia de queijo",
    rating: 5,
  },
  {
    name: "Djones",
    username: "@djones2217",
    text: "Show de bola melhores queijos bebidas como vinho sabor totalmente diferente",
    rating: 5,
  },
  {
    name: "Djones",
    username: "@djones2217",
    text: "Show de bola muito saboroso tudo bom",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            O que dizem nossos clientes
          </h2>
          <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Avaliações reais de clientes que experimentaram nossos produtos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.username}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
