 /*  tres constantes para referenciar 
 as ITEM nas Divs Projetos
*/
// essa linha pra funcao Album de Fotos

// tres(3) constantes para referenciar os ID das DIVS no Projetos

const album = document.getElementById('album');
// tres(3) constantes para referenciar os ID dos iFrames 
const videoAlbum = document.querySelector('#videoAlbum');

// evento do Click 
album.addEventListener('click', () => {
    album.classList.toggle('active');  
    videoAlbum.classList.toggle('active');
});

