
//   function openPhotoSwipe() {
//   var pswpElement = document.querySelectorAll('.pswp')[0];

//   // build items array
//   var items = [
//     <% dato.photo.photos.each do |photo| %>
//       {
//           src: <%=photo.image.url(fm: :jpg) %>
//           w: 100,
//           h: 100
//       },
//     <%end%>

//   ];

//   // define options (if needed)
//   var options = {
//       // optionName: 'option value'
//       // for example:
//       index: 0, // start at first slide
//       escKey: false,
//       closeEl: true,
//       captionEl: false,
//       fullscreenEl: true,
//       zoomEl: false,
//       shareEl: false,
//       counterEl: false,
//       arrowEl: true,
//       preloaderEl: false,
//       tapToClose: false,
//       clickToCloseNonZoomable: false,
//       closeOnVerticalDrag: false,
//       closeOnScroll: false,
//       pinchToClose: false,
//       clickToCloseNonZoomable: false,
//   };

//   // Initializes and opens PhotoSwipe
//   var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
//   gallery.init();
// };

// openPhotoSwipe();
// btn_photoswipe = document.querySelector(".wrapper-photos a");

// btn_photoswipe.addEventListener("click", function(event) {
//   openPhotoSwipe();
// });



