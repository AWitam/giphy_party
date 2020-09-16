$(function () {
  // Fetches gif and appends it to the container

  function addDiv() {
    //get user's input value
    let xhr;
    let searchTerm = $("input").val();
    let apiKey = "0ePgbnodMjWOuyyUDoFLULIRcvki8uTh";
    //If user doesn't enter a search term append random gif
    if (searchTerm === "") {
      xhr = $.get("http://api.giphy.com/v1/gifs/random", {
        api_key: apiKey,
      });
    } else {
      xhr = $.get("http://api.giphy.com/v1/gifs/search", {
        api_key: apiKey,
        q: searchTerm,
      });
    }

    xhr.done((res) => {
      //If there's some input value then api response will be a 50 items long array
      //else input is emtpty, so the response is just one random gif
      let gifContent;
      if (res.data.length) {
        gifContent = $("<img>", {
          //Get a random gif from response (50 items long array => random num between 0 and 50)
          src: res.data[Math.floor(Math.random() * 50)].images.original.url,
        });
      } else {
        gifContent = $("<img>", {
          src: res.data.images.original.url,
        });
      }

      let newDiv = $("<div>", {
        class: "card",
      }).append(gifContent);
      $(".container").append(newDiv);
    });

    //Clear input
    //$("input").val("");
  }

  // removes all gifs onclick

  

  //Trigger Gif search on click or 'Enter' keyup event
  $(".btn__submit").on("click", (event) => {
    addDiv();
    $("input").val('');
    event.stopPropagation();
  });

  $(document).on("keyup", (event) => { 
    event.preventDefault();
    if (event.keyCode === 13) {
      $(".btn__submit").click();  
      event.stopPropagation();   
    }
    
  });

  $(".btn__remove").on("click", (event) => {
    $(".container").empty();
    $("input").focus();
  });
});

s