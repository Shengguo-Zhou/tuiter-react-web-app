import posts from "../home/PostItem.js";
import SizeCheck from "../home/SizeCheck.js";
const PostList = () => {
  return(`
      ${posts.map(
          post => {
            return(`
            <div style="height: ${post.secondParagrapg === '' ? 500 : 550}px; 
            border-style: solid; border-width: 1px; border-color: #34383c;">
                <div style="width: 80px; float: left">
                  <img src="${post.logo}" class="wd-avatar"></div>
                  <div style="margin-left: 80px">
                    <div style="width: 100%;">
                      <div style="width: 90%; float: left">
                        <div style="margin-top: 12px; font-size: 15px;">
                        <b>${post.name}</b>
                        <i class="fas fa-check-circle override-circle-blue"></i>
                        <span class="wd-gray">${post.handler} &#183
                        ${post.time}</span>
                        </div>
                      </div>
                      <div style="margin-left: 90%; color: rgb(110,118,125);"
                           class="wd-dot-blue">&#183 &#183 &#183</div>
                    </div>
                    <p style="font-size: 15px; margin-bottom: 28px; width: 506px;">
                    ${post.firstParagraph}
                    <span class="text-primary">${post.blueStress}</span></p>
                    
                    <div class= ${SizeCheck(post)}>
                      <img src="${post.picture}" class="wd-picture">
                      <div class="wd-into"><b>${post.secondStress}</b></div>
                      <div class="wd-gray wd-into">${post.secondParagrapg}</div>
                      <i class="fas fa-link wd-gray" style="margin-left: 12px; margin-right: 0;"></i>
                      <span class="wd-gray" style="font-size: 15px">${post.lastLogo}</span>
                    </div>
                    
                  <div class="wd-margin-left wd-margin-top">
                  <div style="margin-top: 16px; text-decoration: none;">
                 
                  <a href="#" style="text-decoration: none;">
                  <i class="fas fa-comment" style="margin-right: 5px;text-decoration: none;"></i>
                  <span class="wd-gray" style="margin-right: 50px; text-decoration: none;">
                  ${post.comment}</span></a>
                  
                  <a href="#" style="text-decoration: none;">
                  <i class="fas fa-retweet" style="margin-right: 5px;text-decoration: none;"></i>
                  <span class="wd-gray" style="margin-right: 50px;">${post.retweet}</span></a>
          
                  <a href="#" style="text-decoration: none;">
                  <i class="fas fa-heart"></i>
                  <span style="margin-right: 50px;
                        top: 10px; text-decoration: none;"
                        class="wd-gray">${post.love}</span></a>
                  <a href="#" style="text-decoration: none;">
                  <i class="fas fa-share-square"></i></a>
                  </div>
                </div>
                
                </div>
            </div>
            `);
          }
      ).join('')}
  `);
}
export default PostList