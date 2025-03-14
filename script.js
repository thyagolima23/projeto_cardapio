import cardapio from './dados.js';
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
const diaAtual = diaDaSemana[hoje]
const menuDoDia = cardapio.find(menu => menu.dia===diaAtual); // Verifica nos dados se tem aquele dia na lista

if(menuDoDia) {
    const h3 = document.createElement('h3'); //Criar o h3
    h3.textContent=menuDoDia.dia; //adiciona o conteúdo no h3
    main.appendChild(h3); //adiciona no final da main o h3

    const section = document.createElement('section');
    const ul = document.createElement('ul');
    //pegue a opção cardapio do menu e converter em li o texto

    menuDoDia.cardapio.split(',').forEach(item=>{ //com split , determine o que remover Ex: vírgula e espaço
    const li=document.createElement('li');
    li.textContent=item; //adicionando o ingrediente no li
    ul.appendChild(li);
    });

    section.appendChild(ul);

    const figure=document.createElement('figure');
    const img=document.createElement('img');
    img.src=menuDoDia.img;
    img.alt=menuDoDia.alt;

    figure.appendChild(img);
    section.appendChild(figure);
    main.appendChild(section);
}else{
main.innerHTML='<h2>Hoje não temos cardápio dispónivel</h2>'
}