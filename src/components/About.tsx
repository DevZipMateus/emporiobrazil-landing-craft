const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-foreground">
            Sobre nós
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6 text-center">
              O Empóriobrazil é uma empresa dedicada à comercialização de produtos artesanais brasileiros de alta qualidade. Com presença em feiras por todo o Brasil, levamos o sabor autêntico e a tradição da nossa terra para clientes que valorizam produtos especiais e diferenciados.
            </p>
            <p className="text-lg text-muted-foreground mb-6 text-center">
              Nossa missão é preservar e divulgar a riqueza gastronômica brasileira, oferecendo uma seleção cuidadosa de doces artesanais, queijos especiais, salames nobres, vinhos e cachaças premium. Cada produto é escolhido com atenção aos detalhes e respeito às tradições artesanais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
