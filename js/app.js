$(function() {
  console.log( "ready!" );

  // Fetches gif and appends it to the container
 
  function addDiv() {   
  
    $('.btn__submit').on('click',  (e) => {
      //get user's input value
      let searchTerm = $('input').val(); 
      let apiKey = '0ePgbnodMjWOuyyUDoFLULIRcvki8uTh';
      //If user doesn't enter a search term append random gif
      if(searchTerm === '') {
        var xhr = $.get('http://api.giphy.com/v1/gifs/random', {
          api_key: apiKey
        });
      } else {
        var xhr = $.get('http://api.giphy.com/v1/gifs/search', {
          api_key: apiKey,
          q: searchTerm
        });
      }          
      
      xhr.done(res => {
        let gifContent;
        //If there's some input value then api response will be a long array
        //else input is emtpty, so the response is just one random gif
        if(res.data.length > 1) {
          gifContent = $('<img>', {
            src: res.data[0].images.original.url
          });                
        } else {
          gifContent = $('<img>', {
            src: res.data.images.original.url
          });          
        }  
        let newDiv = $('<div>', {
          class: 'card'
        }).append(gifContent);
        $('.container').append(newDiv);         
      });   
      
    })
  }

  // removes all gifs onclick

  function removeAll() {
    $('.btn__remove').on('click', (e) => {
      $('.container').empty();
    })
  }

  removeAll();
  addDiv();


  
});