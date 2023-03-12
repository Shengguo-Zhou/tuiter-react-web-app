import "./index.css"

const PostList = () => {
  return(<>
    <div className={"container"}>
      <ul className={"list-group"}>
        <li className={"list-group-item"}>
          <div className={"row"}>
            <div className={"col-1"}/>
            <div className={"col-10 wd-gray fw-bold fs-6"}>
              <i className={"bi bi-arrow-return-right"}/>
              <span className={"fs-6"}>&nbsp; Elon Musk Retweeted</span>
            </div>
          </div>

          <div className={"row"}>
            <div className={"col-2"}>
              <img src={"/images/bb.png"} className={"wd-avatar-js"}/>
            </div>
            <div className={"col-10"}>
              <div className={"row"}>
                <div className={"col-10"}>
                  <span className={"fw-bold"}>SpaceX &nbsp;</span>
                  <i className="bi bi-check-circle-fill text-primary"/>
                  <span className={"text-secondary"}>&nbsp; @SpaceX &#8226; 23h</span>
                </div>
                <div className={"col-2"}>
                  <span className={"text-secondary"} style={{float: "right"}}>&#8226;&#8226;&#8226;&nbsp;&nbsp;</span>
                </div>
              </div>
              <div className={"row"}>
                <p>Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon &nbsp;
                  <i className="bi bi-arrow-right"/>
                  <span className={"text-primary"}>spacex.com/updates</span></p>
              </div>
              <div className={"row"}>
                <img style={{borderRadius: "30px"}} src={"/images/news1.png"}/>
              </div>
              <div className={"row text-secondary"} style={{marginTop: "10px"}}>
                <div className="col-3">
                  <i className="bi bi-chat-left-text-fill"/>
                  <span className="wd-gray">&nbsp; &nbsp; 595</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-box-arrow-up-right"/>
                  <span className="wd-gray">&nbsp; &nbsp; 1168</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-heart-fill"/>
                  <span className="wd-gray">&nbsp; &nbsp; 11.1K</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-share-fill"/>
                </div>
              </div>
              <div className={"row text-primary"} style={{marginTop: "20px"}}>
                <span>Show this thread</span>
              </div>
            </div>
          </div>

        </li>

        <li className={"list-group-item"}>
          <div className={"row"}>
            <div className={"col-2"}>
              <img src={"/images/nyt.png"} className={"wd-avatar-js"}/>
            </div>
            <div className={"col-10"}>
              <div className={"row"}>
                <div className={"col-10"}>
                  <div className={"row"}>
                    <div>
                      <span className={"fw-bold"}>Elon Musk&nbsp;</span>
                      <i className="bi bi-check-circle-fill text-primary"/>
                      <span className={"text-secondary"}>&nbsp;@elonmusk &#8226; 15h</span>
                    </div>
                  </div>
                  <div className={"row"}>
                    <p>We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.</p>
                  </div>
                </div>
                <div className={"col-2"}>
                  <span className={"text-secondary"} style={{float: "right"}}>&#8226;&#8226;&#8226;&nbsp;&nbsp;</span>
                </div>
              </div>

              <div className={"row"} style={{marginLeft: "3px", marginRight: "5px"}}>
                <div className={"container"} style={{ borderColor: "lightgray",
                  borderStyle: "solid", borderRadius: "10px", borderWidth: "1px"}}>
                  <div className={"row"} style={{marginTop: "12px"}}>
                    <div>
                      <img src={"/images/bb.png"} className={"wd-avatar-js2"}/>
                      <span className={"fw-bold"}>&nbsp;SpaceX&nbsp;</span>
                      <i className="bi bi-check-circle-fill text-primary"/>
                      <span className={"text-secondary"}>&nbsp;@SpaceX &#8226; 16h</span>
                    </div>
                  </div>
                  <div className={"row"} style={{marginBottom: "12px"}}>
                    <span>Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on as-needed basis anywhere Starlink provides active coverage&nbsp;
                      <i className="bi bi-arrow-right"/>&nbsp;starlink.com/rv</span>
                  </div>
                </div>
              </div>

              <div className={"row text-secondary"} style={{marginTop: "10px", marginBottom: "12px"}}>
                <div className="col-3">
                  <i className="bi bi-chat-left-text-fill"/>
                  <span className="wd-gray">&nbsp; &nbsp; 5,346</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-box-arrow-up-right"/>
                  <span className="wd-gray">&nbsp; &nbsp; 1,601</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-heart-fill"/>
                  <span className="wd-gray">&nbsp; &nbsp; 19.2K</span>
                </div>
                <div className="col-3">
                  <i className="bi bi-share-fill"/>
                </div>
              </div>

            </div>
          </div>
        </li>

      </ul>
    </div>
  </>);
}

export default PostList



