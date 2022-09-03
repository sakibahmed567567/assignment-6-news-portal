const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        //.then(data => console.log(data.data.news_category))
        .then(data => displayData(data.data.news_category))
}

const displayData = newsOptions => {
    const allNewsUl = document.getElementById('all-news-ul');
    newsOptions.forEach(news => {
        const newsLi = document.createElement('li');
        newsLi.classList.add('all-news-li');
        newsLi.innerHTML = `
        <a href="" class="text-muted fw-bold" style="text-decoration: none;"> ${news.category_name}</a>
        `;
        allNewsUl.appendChild(newsLi);
    });
};

//loadData();