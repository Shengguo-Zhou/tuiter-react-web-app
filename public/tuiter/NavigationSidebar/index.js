import barItems from "../NavigationSidebar/NavSideBarItem.js";

const NavigationSidebar = () => {
  return(`
   <div class="list-group">
     <a class="list-group-item override-lgi list-group-item-action" href="#">
        <i class="fab fa-twitter"></i>
     </a>
        
      <a class="list-group-item override-lgi list-group-item-action" href="#" >
        <div class="row">
          <div class="col-2">
            <i class="fas fa-house-user override-lg-color"></i>
          </div>
          <div class="col-8">
            <span class="d-none d-xl-block d-xxl-block fw-light">Home</span>
          </div>
        </div>
      </a>
        
      <a class="list-group-item override-lgi list-group-item-action active
         override-active-color"
         href="#">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-hashtag"></i>
          </div>
          <div class="col-8">
            <span class="d-none d-xl-block d-xxl-block">Explore</span>
          </div>
        </div>
      </a>
        
     ${
        barItems.map(item => {
          return `
        <a class="list-group-item override-lgi list-group-item-action" href="#">
          <div class="row">
            <div class="col-2">
              <i class="${item.class}"></i>
            </div>
            <div class="col-8">
              <span class="d-none d-xl-block d-xxl-block fw-light">${item.name}</span>
            </div>
          </div>
        </a>`
        }).join('')
      }
      
   </div>
   
   <div class="d-grid mt-2">
     <a href="../NavigationSidebar/tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;