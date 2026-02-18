import estilos from './Technologies.module.scss';

const techs = [
  { nome: "Python", categoria: "Data Science", nivel: "90%", cor: "#3776AB" },            
  { nome: "Pandas/NumPy/Matplot", categoria: "Data Science", nivel: "85%", cor: "#150458" }, 
  { nome: "SQL", categoria: "Backend", nivel: "90%", cor: "#00BCFF" },                     
  { nome: "React", categoria: "Frontend", nivel: "75%", cor: "#61DAFB" },                  
  { nome: "Node.js", categoria: "Backend", nivel: "70%", cor: "#339933" },                 
  { nome: "Linux/Bash", categoria: "Sistemas", nivel: "85%", cor: "#FCC624" },             
  { nome: "Java", categoria: "Backend", nivel: "90%", cor: "#ED8B00" },                    
  { nome: "Power BI", categoria: "Data Analysis", nivel: "85%", cor: "#F2C811" },          
  { nome: "Excel", categoria: "Data Analysis", nivel: "85%", cor: "#1D6F42" },             
  { nome: "Docker", categoria: "DevOps", nivel: "85%", cor: "#2496ED" },                  
];


export default function Technologies() {
  return (
    <section id="tech" className={estilos.tech}>
      <div className={estilos.container}>
        <h2 className={estilos.titulo}> Ferramentas de Tecnologias</h2>
        
        <div className={estilos.grid}>
          {techs.map((t) => (
            <div key={t.nome} className={estilos.card} style={{ "--cor-tech": t.cor }}>
              <div className={estilos.headerCard}>
                <span className={estilos.categoria}>{t.categoria}</span>
                <span className={estilos.nome}>{t.nome}</span>
              </div>
              <div className={estilos.barraProgresso}>
                <div className={estilos.preenchimento} style={{ width: t.nivel }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
