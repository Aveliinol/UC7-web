import style from "./Main.module.css";
import Intro from "../Intro/Intro";
import Tipos from "../Tipos/Tipos";
import Noticias from "../Noticias/Noticias";
import Framework from "../Frameworks/Frameworks";
import Recursos from "../Recursos/Recursos";

function Main() {
  return (
    <main className={style.main}>
      <Intro /> 
      <Tipos />
      <Noticias />
      <Framework />
      <Recursos />
    </main>
  )
}

export default Main