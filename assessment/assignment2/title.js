const input_title = document.getElementById('input-title');
const input_content = document.getElementById('artical1');
const input_btn = document.getElementById('button');
const articleList = document.getElementById('news-article');
const funArticle = document.getElementById('fun-article');
const input_dropdownChoice = document.getElementById('dropdown1');

let x=0;
let y=0;

input_btn.onclick = function() {
	const articleTitle = input_title.value;
	const articleContent = input_content.value;
    const articledropdown = input_dropdownChoice.value;

	if(articleTitle && articleContent) {
        let article={articleTitle:articleTitle,articleContent:articleContent,articledropdown:articledropdown}
		localStorage.setItem(articleTitle, JSON.stringify(article));
        location.reload();
    }
};
    for (let i=0; i<localStorage.length; i++) {
		const articleTitle = localStorage.key(i);
        const articleContent = localStorage.getItem(articleTitle);
        article1=JSON.parse(articleContent)
        console.log(article1.input_dropdownChoice)

        if(article1.articledropdown=="artical"){
            y=y+1;
        }
        if(article1.articledropdown=="funnews"){
            x=x+1;
        }

		if (article1.articledropdown == 'artical') {

			articleList.innerHTML += `<div class="article-box" id="news-article">
					<div class="article-details">
						<h3>${article1.articleTitle}</h3>
						<p>${article1.articleContent}</p>
					</div>
					  <div class="article-img">
					   <img src="http://lorempixel.com/300/300/" alt="new-image">
					  </div>
				</div>
				`;
		}

		else if (article1.articledropdown == 'funnews') {
			funArticle.innerHTML += `<div class="article-box" id="news-article">
					<div class="article-details">
						<h3>${article1.articleTitle}</h3>
						<p>${article1.articleContent}</p>
					</div>
					 <div class="article-img">
					  <img src="http://lorempixel.com/300/300/" alt="new-image">
					 </div>
				</div>
				`;
		}
    }
    document.getElementById('funnumber').innerHTML = x;
    document.getElementById('newsnurber').innerHTML = y;