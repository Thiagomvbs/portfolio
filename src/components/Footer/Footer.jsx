import estilos from './Footer.module.scss';

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={estilos.footer}>
      <div className={estilos.container}>
        <div className={estilos.info}>
          <p className={estilos.copy}>
            &copy; {anoAtual} <span className={estilos.destaque}>Thiago</span> — Analista de Dados & Dev
          </p>
          <p className={estilos.local}>Rio de Janeiro, RJ</p>
        </div>

        <div className={estilos.links}>
          <a href="https://github.com/Thiagomvbs" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/thiago-monteiro-villas/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:thiagomvillas@gmail.com">E-mail</a>
        </div>
      </div>
    </footer>
  );
}
