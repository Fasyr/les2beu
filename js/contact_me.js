$(function() {

  $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
        var subject = 'C\'est ' + name + ' qui te parle mon Beu';
        var body = 'Salut c\'est ' + name + '%0D%0A' + message + '%0D%0A';
        var caseEnd = Math.floor(Math.random() * Math.floor(3));
        switch (caseEnd)
        {
            case 0:
                body = body.concat('\n A plus dans le bus mon Beu %0D%0A mon phone ' + phone);
                break;
            case 1:
                body = body.concat( '\n A bientot dans le métro mon Beu %0D%0A mon phone ' + phone);
                break;
            case 2:
                body = body.concat( '\n A un de ces quatre dans le 4x4 mon Beu %0D%0A mon phone ' + phone);
                break;
            default:
                body = body.concat( '\n A plus dans le bus mon Beu %0D%0A mon phone ' + phone);
                break;
        }

      window.open('mailto:contact@les2beu.fr?subject='+subject+'&body='+body);
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
  $('#success').html('');
});
