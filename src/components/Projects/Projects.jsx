import estilos from './Projects.module.scss';
import { meusProjetos } from '../../data/projetos';

export default function Projects() {
  return (
    <section id="projetos" className={estilos.projetos}>
      <div className={estilos.container}>
        <h2 className={estilos.titulo}>Projetos em Destaque</h2>
        
        <div className={estilos.grid}>
          {meusProjetos.map((p) => (
            <div key={p.id} className={estilos.card}>
              <div className={estilos.imagemWrapper}>
                <img src={p.imagem} alt={p.titulo} />
                <div className={estilos.overlay}>
                  <a href={p.linkGithub} target="_blank" rel="noreferrer" className={estilos.btn}>
                    Ver no GitHub
                  </a>
                </div>
              </div>
              
              <div className={estilos.info}>
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
                <div className={estilos.tags}>
                  {p.techs.map(tech => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
