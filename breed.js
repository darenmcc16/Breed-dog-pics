function getDogImage(query){
  let url = `https://dog.ceo/api/breed/${query}/images/random/`
  console.log(url)
  fetch(url)

  //Step 2c - success scenario (call the function to display the results)
  .then(response => {
          if (response.ok) {
              return response.json();
          }
          // DISPLAY ERRORS if the server connection works but the json data is broken
          throw new Error(response.statusText);
      })
      .then(responseJson => displaySearchData(responseJson))

  // Step 2d - failure scenario  (DISPLAY ERRORS if the server connection fails)
  .catch(err => {
      console.log(err);
  });
  }
  
  function displaySearchData(responseJson) {

    //Step 3a - console.log the results
    console.log(responseJson);

    //Step 3b - create an HTML results variable
    let htmlOutput = `<div><img src='${responseJson.message}' alt='Dog image'/></div>`;

    //Step 3c - send the content of HTML results variable to the HTML - display them in the html page
    $('.js-results').html(htmlOutput);

    // Step 3d - remove class hidden from the result container
    $('.js-results').removeClass("hidden");
}
  
  function listenToInput(){
    $('.js-search-form').submit(event => {
      event.preventDefault();
      let queryTarget = $(event.currentTarget).find('.js-query');
      let query = queryTarget.val();
      console.log(query);
      getDogImage(query);
    });
  }
  
  $(function(){
    console.log('App Loaded and Ready');
    listenToInput();
  });

  $(listenToInput);


