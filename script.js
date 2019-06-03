var main = function() {
   $('.more-btn').on('click', (event) =>{
       $(event.currentTarget).siblings('.more-menu').toggle();
   });
    $('.share').on('click', (event) =>{
        $(event.currentTarget).next('.share-menu').toggle();
    });
    S('.notification').on('click', (event) =>{
       $(event.currentTarget).toggle('active');
    })
};
$(document).ready(main);