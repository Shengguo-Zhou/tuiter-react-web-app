const singleList = (who) => {
  return(`
        <li class="list-group-item override-lgi override-lgii" 
        style="background-color: #14171A; border-color: rgb(32,33,33);">
          <div class="row">
            <div class="col-2">
              <img src="${who.avatarIcon}" class="wd-news rounded-circle">
            </div>
            <div class="col-6">
              <div class="fw-bold">${who.userName}
                <i class="fas fa-check-circle override-circle-blue"></i></div>
              <div class="text-secondary">${who.handle}</div>
            </div>
            <div class="col-2">
              <button class="btn rounded-pill fw-bold"
                      style="background-color: #1DA1F2; color: white;">Follow</button>
            </div>
          </div>
        </li>
  `);
}
export default singleList;