import items from "../PostSummaryList/exploreItem.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const HomePageRightBar = () => {
  return(`
      ${
      items.map(item => {
        return (PostSummaryList(item));
      }).join('')
  }`);
}

export default  HomePageRightBar;