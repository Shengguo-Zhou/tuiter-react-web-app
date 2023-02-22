const SizeCheck = (post) => {
  if(post.secondParagrapg === '' && post.secondStress === ''){
    return "wd-frame2";
  }
  else if(post.secondParagrapg === '' || post.secondStress === ''){
    return "wd-frame3";
  }
  else return "wd-frame4";
}
export default SizeCheck;