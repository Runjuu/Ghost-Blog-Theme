window.onload = function title() {
    postTitle("post","post-header");
}

//获得总共多少文章标题
function postTitle (post,article) {
    var getPost = document.getElementById(post);
    var getArticle = numArticle(getPost,article);
    //获取title宽度
    var postWidth = getArticle[0].offsetWidth;
    //获取一行有多少title
    //var cols = Math.floor(document.documentElement.clientWidth / postWidth);
    //设置宽度
    //getPost.style.cssText = "width:" + postWidth*cols + "px";

    //获取title高度
    var postHeightArr = [];
    for (var i=0;i<getArticle.length;i++){
        //第一排高度
        if (i<9) {
            postHeightArr[i] = getArticle[i].offsetHeight;
            console.log(postHeightArr[i]);
        }else { //第二排高度
            //第一排最小高度
            var minHeight = Math.min.apply(null,postHeightArr);
            var minHeightWidthPositionX = getminHeightLocation(postHeightArr,minHeight);
            //console.log(minHeight);
            getArticle[i].style.position = "absolute";
            getArticle[i].style.top = minHeight+ 9 + "px";
            getArticle[i].style.left = getArticle[minHeightWidthPositionX].offsetLeft + "px";
            postHeightArr[minHeightWidthPositionX] = postHeightArr[minHeightWidthPositionX] + 9 + getArticle[i].offsetHeight;

        }
    }
    //console.log(getArticle);
    //console.log(getArticle.length);
}

//获取最小高度title位置
function getminHeightLocation(postHeightArr,minHeight) {
    for(var i in postHeightArr) {
        if (postHeightArr[i] == minHeight) {
            return i;
        };
    }
}


//将post中所有的article放入数组 以获得总article量
function numArticle (post,article) {
    var Arr = [];
    var allArticle = post.getElementsByTagName("*");
    for (var i=0; i<allArticle.length; i++) {
        if (allArticle[i].className==article) {
            Arr.push(allArticle[i]);
        }
    }
    return Arr;
}