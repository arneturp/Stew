(function() {
   var Navigation = {
      init: function() {
         // Closure
         var self = this
         this.navigationMaxHeight = 0;

         this.registerEventListeners();
         this.calcMaxHeight();
      },

      registerEventListeners: function() {
         // Closure
         var self = this;

         // Register hamburger buttons
         var hamburgers = document.querySelectorAll('.hamburger');
         for (var i = 0; i < hamburgers.length; i++) {
            var hamburger = hamburgers[i];
            hamburger.addEventListener('click', function() {
               self.toggleNavigation(hamburger, hamburger.getAttribute('data-target'));

            });
         }
      },

      calcMaxHeight: function() {
         // Closure
         var self = this;

         var menuItems = document.querySelectorAll(".navigation li");
         var maxHeight = 0;
         for (var i = 0; i < menuItems.length; i++) {
            maxHeight += menuItems[i].offsetHeight;
         }

         self.navigationMaxHeight = maxHeight;


      },

      toggleNavigation: function(hamburger, target) {
         // Closure
         var self = this;

         hamburger.classList.toggle("active");

         document.querySelector(target).classList.toggle("active");

         if (document.querySelector(target).classList.contains("active")) {
            document.querySelector(target).style.maxHeight = self.navigationMaxHeight + "px";
         } else {
            document.querySelector(target).style.maxHeight = 0;
         }

      }
   };

   Navigation.init();
})();
