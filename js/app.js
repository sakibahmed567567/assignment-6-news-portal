const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.data))
}

const displayData = newsOptions => {
    const allNewsUl = document.getElementById('all-news-Ul');
    newsOptions.forEach(news => {
        const newsLi = document.createElement('li');
        newsLi.classList.add('all-news-li');
        newsLi.innerHTML = `
        <a href="" class="all-news-li text-muted fw-bold" style="text-decoration: none;"> ${news.catagory_name}</a>
        `;
        allNewsUl.appendChild(newsLi)
    });
}

loadData();