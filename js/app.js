$(function() {
  console.log( "ready!" );

  // Add div on click
 
  function addDiv() {   
  
    $('.btn__submit').on('click',  (e) => {
      let newDiv = $('<div>', {
        text: 'elo',
        class: 'card'
      });
      $('.container').append(newDiv);
    })
  }

  //remove all gifs onclick

  function removeAll() {
    $('.btn__remove').on('click', (e) => {
      $('.container').empty();
    })
  }

  removeAll();
  addDiv();


  
});