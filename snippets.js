    $('#submitButton').on('click', function(event) {
      event.preventDefault();
      // Gather user inputs
      var userInput = {
        name: $('#userName').val().trim(),
        photo: $('#userPhoto').val().trim(),
        scores:[
          $('#question1').val().trim(),
          $('#question2').val().trim(),
          $('#question3').val().trim(),
          $('#question4').val().trim(),
          $('#question5').val().trim(),
          $('#question6').val().trim(),
          $('#question7').val().trim(),
          $('#question8').val().trim(),
          $('#question9').val().trim(),
          $('#question10').val().trim()
        ]
      };
    });
      // This line is the magic. It"s very similar to the standard ajax function we used.
      // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
      // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
      // depending on if a tables is available or not.
      // $.post("/api/friends", newCustomer)
      //     .done(function(data)  {
      //       $('userMatch').html(data.matchName);
      //       $('userMatchImage').attr('src',data.matchImage)
      //     })
      // }
        // name: $("#name").val(""),
        // photoUrl: $("#photoUrl").val(""),
        // question1: $("#question1").val(""),
        // question2: $("#question2").val(""),
        // question3: $("#question3").val(""),
        // question4: $("#question4").val(""),
        // question5: $("#question5").val(""),
        // question6: $("#question6").val(""),
        // question7: $("#question7").val(""),
        // question8: $("#question8").val(""),
        // question9: $("#question9").val(""),
        // question10: $("#question10").val("")
     //};



        // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
    // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
    // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
    // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file
    // $(".submit").on("click", function(event) {
    //   event.preventDefault();
    //   // Here we grab the form elements




    <!-- <div class="modal fade" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Modal title</h4>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div><!/.modal-content -->
  <!-- </div>/.modal-dialog
</div><! /.modal -->


<!-- BELOW CODE IS CRITICAL. IT HANDLES HOW FORM DATA IS SENT TO OUR SERVER -->
<!-- <script type="text/javascript">
//  $(window).on('shown.bs.modal', function() { 
//     $('#code').modal('show');
//     alert('shown');
// });, function(){
//   // code here
// });
    // Activate submit button
    $('#submitButton').on('click', function(event) {
      event.preventDefault();
      // Gather user inputs
      var userInput = {
        name: $('#userName').val().trim(),
        photo: $('#userPhoto').val().trim(),
        scores:[
          $('#question1').val().trim(),
          $('#question2').val().trim(),
          $('#question3').val().trim(),
          $('#question4').val().trim(),
          $('#question5').val().trim(),
          $('#question6').val().trim(),
          $('#question7').val().trim(),
          $('#question8').val().trim(),
          $('#question9').val().trim(),
          $('#question10').val().trim()
        ]
      };
      // console.log('userInput = ' + JSON.stringify(userInput));
      // Add user inputs to friends list
      $.post('/api/friends', userInput)
          .done(function(data) {
            // console.log('response = ' + JSON.stringify(data));
            // Set the name and image values of friend match
            $('#userMatch').html(data.matchName);
          $("#userMatchImage").attr("src", data.matchImage);
          // Pop open the modal dialog
            $('#modal1').modal('open');
          });
    });
  </script>
</body>
</html> -->
