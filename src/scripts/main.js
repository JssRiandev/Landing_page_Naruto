document.addEventListener ('DOMContentLoaded' , function(){
    const profile = document.querySelectorAll('[data-profile]');

    const hero = document.querySelector('.hero');
    const altura_hero = hero.clientHeight;
    const watch = document.querySelector('.watch');
    const altura_watch= watch.clientHeight;
    const dist_topo_watch= watch.offsetTop;
    

    window.addEventListener('scroll', function(){
        const posicao= window.scrollY;

        if(posicao < altura_hero){
            oculta_logo();
        }else{
            aparece_logo();
        }

        if( posicao>= dist_topo_watch && posicao < dist_topo_watch+ altura_watch){
            oculta_btn();
        }else{
            aparece_btn();
        }
        
    })

    //Expandindo a descrição dos personagens
    for (let i =0; i<profile.length; i++){
        profile[i].addEventListener('click', abre_fecha_descricao);
    }
})

function oculta_logo(){
    const logo = document.querySelector('.header__simbol');
    logo.classList.add('--is-hidden');
}
function aparece_logo(){
    const logo = document.querySelector('.header__simbol');
    logo.classList.remove('--is-hidden');
}

function oculta_btn(){
    const btn = document.querySelector('.header__links__item');
    btn.classList.add('--is-hidden');
}
function aparece_btn(){
    const btn = document.querySelector('.header__links__item');
    btn.classList.remove('--is-hidden');
}

function abre_fecha_descricao(elemento){
    const classe = 'characters__profile__item--is-open';
    const elemento_pai = elemento.target.parentNode;
    const elemento_avo = elemento_pai.parentNode;
    
    elemento_avo.classList.toggle(classe);

}