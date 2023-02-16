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
        
      <a class="list-group-item override-lgi list-group-item-action" href="#">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-bell"></i>
          </div>
          <div class="col-8">
            <span class="d-none d-xl-block d-xxl-block fw-light">Notification</span>
          </div>
        </div>
      </a>
        
      <a class="list-group-item override-lgi list-group-item-action" href="#">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-envelope"></i>
          </div>
          <div class="col-8">
            <span class="d-none d-xl-block d-xxl-block fw-light">Messages</span>
          </div>
        </div>
      </a>
        
      <a class="list-group-item override-lgi list-group-item-action" href="#">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-bookmark"></i>
          </div>
          <div class="col-8">
            <span class="d-none d-xl-block d-xxl-block fw-light">Bookmarks</span>
          </div>
        </div>
      </a>
        
      <a class="list-group-item override-lgi list-group-item-action" href="#">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-list"></i>
          </div>
          <div class="col-8">
            <span class="d-none d-xl-block d-xxl-block fw-light">Articles</span>
          </div>
        </div>
      </a>
        
      <a class="list-group-item override-lgi list-group-item-action" href="#">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-user"></i>
          </div>
          <div class="col-8">
            <span class="d-none d-xl-block d-xxl-block fw-light">Profile</span>
          </div>
        </div>
      </a>
        
      <a class="list-group-item override-lgi list-group-item-action" href="#">
        <div class="row">
          <div class="col-2">
            <i class="fas fa-comment-dots"></i>
          </div>
          <div class="col-8">
            <span class="d-none d-xl-block d-xxl-block fw-light">More</span>
          </div>
        </div>
      </a>
   </div>
   
   <div class="d-grid mt-2">
     <a href="../NavigationSidebar/tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;