const postSummaryList = (item) => {
  return(`
   <ul class="list-group">
        <li class="list-group-item override-border">
          <div class="row">
            <div class="col-10">
              <div class="text-secondary">
                ${item.topic}
              </div>
              <div class="fw-bolder">
                ${item.userName}&nbsp;<i class="fas fa-check-circle override-circle-blue"></i>
                <span class="text-secondary fw-normal">&nbsp;-&nbsp;${item.time}</span>
              </div>
              <div class="fw-bolder">
                ${item.title}
              </div>
            </div>
            <div class="col-2">
              <img class="float-end wd-news2" src="${item.image}"></div>
          </div>
        </li>
   </ul>
  `);
}
export default postSummaryList;