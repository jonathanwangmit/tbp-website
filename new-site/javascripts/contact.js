$(document).ready(function() {
  $('#contact-form').submit(function(data) {
      $.post('http://tbp.scripts.mit.edu/php/mail.php',
             // Form fields
             {name: $('#contact-form input[name=name]').val(),
              email: $('#contact-form input[name=email]').val(),
              subject: $('#contact-form input[name=subject]').val(),
              content: $('#contact-form textarea[name=content]').val()},
            function(data) {
              if (data == 'success') {
                // Remove error fields and clear fields
                $('#contact-form input[type=text]').removeClass('error').val('');
                $('#contact-form textarea').removeClass('error').val('');
                $('.error').hide();
                // Show success popup
                $('.email-success').slideDown();
                setTimeout(function() {$('.email-success').slideUp()}, 2000);
              } else {
                var errors = data.split(' ');
                // Show error message per wrong field
                for (var i = 0; i < errors.length; i ++) {
                  var error = errors[i].split(':');
                  if (error[0] == 'missing') {
                    if (error[1] == 'content') {
                      $('#contact-form textarea[name=content]').parent().children('.error').show();
                      $('#contact-form textarea[name=content]').addClass('error');
                    } else {
                      $('#contact-form input[name=' + error[1] + ']').parent().children('.error').show();
                      $('#contact-form input[name=' + error[1] + ']').addClass('error');
                    }
                  } else if (error[0] == 'invalid') {
                    $('#contact-form input[name=' + error[1] + ']').parent().children('.invalid').show();
                    $('#contact-form input[name=' + error[1] + ']').addClass('error');
                  }
                }
              }
      });
      return false;
    });
});