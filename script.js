/*
<h2>Cardapio do Dia</h2>
<h3>Segunda-feira</h3>
<section>
    <ul>
    <li>Arroz</li>
    <li>Feijoada</li>
    <li>Farofa</li>
    <li>Laranja</li>
    <li>Couve</li>
    </ul>
      
    
    <figure>
        <img src="/img/feijoada.webp" alt="feijoada">
    </figure>
</section>
*/

const main = document.querySelector('main'); //Selecioinar a tag main
main.innerHTML="<h2> Cardapio do Dia</h2>";
//a lista no JS começar no zero
const diaDaSemana=['domingo','segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado-letivo']
const hoje=new Date().getDay();
//Date informa a data e o getDay()informa qual dos >(0-6)
const diaAtual= diaDaSemana[hoje]
alert(diaAtual)