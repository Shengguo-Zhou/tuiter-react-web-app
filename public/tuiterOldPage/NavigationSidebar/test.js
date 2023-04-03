import NavigationSidebar from "../NavigationSidebar/index.js";

function exploreComponent2() {
  $('#wd-explore').append(`
      <h2>Explore</h2>
      <div class="row mt-2">
          <div class="col-2 col-md-2 col-lg-1 col-xl-2 bg-warning">
              ${NavigationSidebar()}
          </div>
      </div>
   `);
}
$(exploreComponent2);
