import "./index.css"

const PostList = () => {
  return(<>
    <div className={"container"}>
      <ul className={"list-group"}>
        <li className={"list-group-item"}>
          <div className={"row"}>
            <div className={"col-1"}/>
            <div className={"col-10 wd-gray"}>
              <i className={"bi bi-arrow-return-right"}/>
              <span>Elon Musk Retweeted</span>
            </div>
          </div>

          <div className={"row"}>
            <div className={"col-2"}>
              <img src={"/images/bb.png"} style={{width:"40px", height:"40px"}}/>
            </div>
            <div className={"col-10"}>
              <div className={"row"}>
                <span>SpaceX @SpaceX &#183 23h</span>
              </div>
              <div className={"row"}>
                Dennis and Akiko Tito are the first two crewmembers on Starship's second
                commercial spaceflight around the Moon -> spacex.com/updates
              </div>
              <div className={"row"}>
                <img src={"/images/news1.png"}/>
              </div>
              <div className={"row"}>
                <div className="col-3">
                  <i className="bi bi-chat-left-text-fill"/>
                  <span className="wd-gray">595</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-box-arrow-up-right"/>
                  <span className="wd-gray">1168</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-heart-fill"/>
                  <span className="wd-gray">11.1K</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-share-fill"/>
                </div>
              </div>
              <div className={"row"}>
                <span>Show this thread</span>
              </div>
            </div>

          </div>
        </li>

      </ul>
    </div>
  </>);
}

export default PostList



