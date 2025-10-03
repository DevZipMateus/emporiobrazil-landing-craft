import { Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary/10 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logo} alt="Empóriobrazil" className="h-12 w-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              Produtos artesanais brasileiros de qualidade superior em feiras por todo o Brasil.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>(51) 99904-5825</p>
              <p>mylenaoliveira851@gmail.com</p>
              <p>CNPJ: 059.429.700-17</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Redes sociais</h3>
            <a
              href="https://instagram.com/emporiobrazil001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              <span>@emporiobrazil001</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Empóriobrazil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
