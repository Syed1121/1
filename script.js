$(document).ready(function () {
  $(".container").hover(
    function () {
      let $card = $(this).find(".card");
      $card.stop().animate(
        {
          top: "-90px",
        },
        {
          duration: "slow",
          queue: false, // Prevents queuing, so it executes immediately
          complete: function () {
            // Once the animation is complete, move to the next card
            $(this).closest(".container").next().find(".card").trigger("mouseenter");
          },
        }
      );
    },
    function () {
      let $card = $(this).find(".card");
      $card.stop().animate(
        {
          top: 0,
        },
        {
          duration: "slow",
          queue: false, // Prevents queuing, so it executes immediately
          complete: function () {
            // Once the animation is complete, move to the next card
            $(this).closest(".container").next().find(".card").trigger("mouseleave");
          },
        }
      );
    }
  );

  // Manually trigger hover events for the first card to start the chain
  $(".container").first().find(".card").trigger("mouseenter");
});
