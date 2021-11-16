   $(document).ready(function() {
     $('.cross').click(function() {
       $('#whatsapp-popup').fadeOut(1000);
     });
     $('.waicon').click(function() {
       $('#whatsapp-popup').toggle(1000);

     });
   });