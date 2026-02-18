import estilos from './About.module.scss';
import minhaFoto from '../../assets/foto-perfil.jpeg'; 

export default function About() {
  return (
    <section id="sobre" className={estilos.sobre}>
      <div className={estilos.container}>
        
        <div className={estilos.texto}>
          <div className={estilos.terminalHeader}>
            <span className={estilos.dot}></span>
            <span className={estilos.dot}></span>
            <span className={estilos.dot}></span>
          </div>
          
          <h1>
            Olá, eu sou <span className={estilos.destaque}>Thiago</span>
          </h1>
          
          <p>
            Atualmente focado em <span className={estilos.destaque}>Ciência de Dados</span>, 
            com ênfase em análise, visualização e tratamento de dados. Minha base como desenvolvedor 
            <span className={estilos.destaque}> Fullstack</span> e conhecimento em 
            <span className={estilos.destaque}> Linux</span> me permitem não apenas extrair insights, 
            mas construir e implantar aplicações completas para entregá-los.
          </p>

          <div className={estilos.detalhes}>
            <p><span>&gt; Localização:</span> Rio de Janeiro, Brasil</p>
            <p><span>&gt; Foco:</span> Ciência de Dados, Backend e Frontend</p>
            <p><span>&gt; Status:</span> Disponível para contratação</p>
          </div>
        </div>
        
        <div className={estilos.visual}>
          <div className={estilos.fotoWrapper}>
            <img src={minhaFoto} alt="Thiago" className={estilos.foto} />
            <div className={estilos.moldura}></div>
          </div>
        </div>

      </div>
    </section>
  );
}
