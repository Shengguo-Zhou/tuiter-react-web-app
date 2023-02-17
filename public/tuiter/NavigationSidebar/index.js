import barItems from "../NavigationSidebar/NavSideBarItem.js";

const NavigationSidebar = () => {
  return(`
   <div class="list-group">       
     ${
        barItems.map(item => {
          return `
        <a class="list-group-item override-lgi list-group-item-action" 
        href="${item.href}">
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