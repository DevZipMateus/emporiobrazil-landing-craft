import { Wine, Candy, Salad, Coffee } from "lucide-react";

const products = [
  {
    icon: Candy,
    title: "Doces artesanais",
    description: "Doces tradicionais brasileiros feitos artesanalmente com receitas especiais e ingredientes selecionados.",
  },
  {
    icon: Salad,
    title: "Queijos e salames",
    description: "Queijos nobres e salames premium, produzidos seguindo as melhores técnicas de maturação e defumação.",
  },
  {
    icon: Wine,
    title: "Vinhos selecionados",
    description: "Coleção especial de vinhos nacionais e importados, escolhidos para harmonizar perfeitamente com nossos produtos.",
  },
  {
    icon: Coffee,
    title: "Cachaças premium",
    description: "Cachaças artesanais de alta qualidade, representando o melhor da tradição brasileira de destilação.",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground">
            Nossos produtos
          </h2>
          <p className="text-lg text-muted-foreground mb-16 text-center max-w-2xl mx-auto">
            Uma seleção especial de produtos artesanais brasileiros para clientes exigentes
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
