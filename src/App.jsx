import Button from './components/Button/Button.jsx';
import Paragrafo from './components/Button/Paragrafo/Paragrafo.jsx';

export default function App(){
  const meuNome = "Acioly";
  const idade = 41;
return (
<div>
   <Button />
  <h1>Estou Aprendendo React</h1>
   <Paragrafo meuNome={meuNome} idade={idade} />
</div>
);

}