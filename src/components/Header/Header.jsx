import estilos from './Header.module.scss';

export default function Header() {
  return (
    <header className={estilos.header}>
      <nav className={estilos.navMenu}>
        {/* Lado Esquerdo */}
        <ul className={estilos.navList}>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#tech">Tecnologias</a></li>
          <li><a href="#projetos">Projetos</a></li>
        </ul>
        
        <ul className={estilos.navSocial}>
          <li><a href="https://www.linkedin.com/in/thiago-monteiro-villas/" target="_blank" rel="noreferrer">Linkedin</a></li>
          <li><a href="https://github.com/Thiagomvbs" target="_blank" rel="noreferrer">GitHub</a></li>
        </ul>
      </nav>
    </header>
  );
}
