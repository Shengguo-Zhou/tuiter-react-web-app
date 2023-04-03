import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import items from "../PostSummaryList/exploreItem.js";
import bars from "../PostSummaryList/SearcgBarList.js";

const ExploreComponent = () => {
  return(`
         <div class="row">
            <div class="row">
              <div class="col-11">
                <div class="position-relative">
                  <input class="form-control override-search-color rounded-pill ps-5"
                         placeholder="Search Twitter"/>
                  <i class="fas fa-search position-absolute wd-search-twitter"></i>
                </div>
              </div>
              <div class="col-1">
                <a href="../explore/explore-settings.html">
                <i class="fas fa-cog wd-gear-search fa-2x"
                   style="float: right;"></i></a>
              </div>
            </div>
         </div>
         
         <ul class="nav mb-1 nav-tabs mt-2">
            <li class="nav-item over-iterm">
              <a class="nav-link active override-for-you" href="#">For you</a>
            </li>
            ${
                bars.map(bar => {
                  return `<li class="nav-item override-item">
                  <a class="nav-link override-for-you override-link" 
                  href="#">${bar}</a>
                  </li>`
                }).join('')
            }
         </ul>
         
         <div class="position-relative" style="margin-bottom: 10px;">
         <img src="../explore/starship.png" width="100%"/>
         <p class="position-absolute bottom-0 left-0 override-bottom text-white">
          Tennis Tournament &#x2022; LIVE</p>
         <p class="position-absolute bottom-0 left-0 override-bottom2 text-white">
          SpaceX's Starship</p>
       </div>
      
       ${
       items.map(item => {
          return (PostSummaryList(item));
       }).join('')
       }
    `);
}
export default ExploreComponent;
