const loadAllCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        //.then(data => console.log(data.data.news_category))
        .then(data => displayAllCategories(data.data.news_category))
}

const displayAllCategories = newsOptions => {
    const allNewsUl = document.getElementById('all-news-ul');
    newsOptions.forEach(news => {
        const newsLi = document.createElement('li');
        newsLi.classList.add('all-news-li');
        newsLi.innerHTML = `
        <a href="" id class="text-muted fw-bold" style="text-decoration: none;"> ${news.category_name}</a>
        `;
        allNewsUl.appendChild(newsLi);
    });
};

//showing news by news_id

const loadNewsCategories = () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    fetch(url)
        .then(res => res.json())
        //.then(data => console.log(data.data))
        .then(data => displayNewsCategories(data.data))
}

const displayNewsCategories = newsCategories => {
    // const newsContainer1 = doStuff(document.getElementById("breaking-news", "regular-news", "international-news", "sports", "entertainment", "culture", "arts", "all-news"));
    const newsContainer = document.getElementById('news-container');
    newsCategories.forEach(newsCategory => {

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
        <div class="col-lg-3">
          <img src="${newsCategory.thumbnail_url}" class="img-fluid rounded-start p-4" alt="...">
       </div>
    <div class="col-lg-9 mt-5">
        <div class="card-body">
            <h5 class="card-title">${newsCategory.title}</h5>
            <p class="card-text">${newsCategory.details.slice(55, 300)}...</p>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="d-inline-flex">
                <img class="rounded-5 img-fluid mt-2" style="max-width:50px; max-height:50px" src="${newsCategory.author.img}" alt="">
                <div class="ms-3">
                    <p>${newsCategory.author.name}</p>
                    <p>${newsCategory.author.published_date}</p>
                </div>
            </div>
            <div class="d-inline">
                <p>Views: ${newsCategory.total_view}</p>
            </div>
            <button class="bg-primary text-white py-2 px-4 border border-2 border-primary rounded me-4">More</button>
        </div>
    </div>
`;
        newsContainer.appendChild(newsDiv);
    })
}

loadAllCategories();
loadNewsCategories();