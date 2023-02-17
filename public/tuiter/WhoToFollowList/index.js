import whoes from "../WhoToFollowList/who.js"
import singleList from "../WhoToFollowList/singleList.js";

const WhoToFollowList = () => {
  return(`
     <div>
     <ul class="list-group">
        <li class="list-group-item override-lgi
        override-lgii fw-bold override-radius" style="background-color: #14171A;
        border-color: rgb(32,33,33);"> Who to follow</li>
        
        ${
          whoes.map(who => {
            return (singleList(who));
          }).join('')
        }
        
        <li class="list-group-item override-lgi override-lgii
        override-radius2" style="background-color: #14171A;
          border-color: rgb(32,33,33);">
          <div class="row" style="color: rgb(29,161,242); margin-left: 7px">
            Show more
          </div>
        </li>
     </ul>
     
     <p class="wd-news-top twitter-char-color-grey" style="font-size: smaller; margin-left: 15px;">
          Terms of Service &nbsp; &nbsp; Privacy Policy &nbsp; &nbsp; Cookie Policy </br>
          Accessibility &nbsp; &nbsp; Ads info &nbsp; &nbsp; More ...</br>
          &copy; 2023 Twitter, Inc.
      </p>
      
     </div>
  `);
}
export default WhoToFollowList