console.log("This is Project3 about News Channel through API");
//got API key from newsapi.org
//6a541962403241c092dab075ea514a20
//initialixing news api perameters
let apiKey = '6a541962403241c092dab075ea514a20';
//getting new container
let newsAccordion = document.getElementById("newsAccordion");

//creating an AJAX GET request using js class
let xhr = new XMLHttpRequest();
// xhr.open("GET", "https://newsapi.org/v2/top-headlines?country=pl&apiKey=6a541962403241c092dab075ea514a20", true);
xhr.open("GET", `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, true);
xhr.onload = function() {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText); //json is an arrays of objects
        let articles = json.articles;
        //console.log(articles);
        let newsHtml = "";
        articles.forEach((element, index) => {

            console.log(element, index);

            let news = `<div class="card">
                <div class="card-header" id="heading${index}">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                               <b>Breaking News ${index+1}:</b> ${element.title}
                            </button>
                        </h2>
                </div>

                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                     <div class="card-body"> ${element.content}. <b><a href="${element.url}" target="_blank">Read More here</a></b> </div>
                </div>
                </div> `;
            newsHtml += news;
        })

        newsAccordion.innerHTML = newsHtml;

    } else {
        console.log("Something wronge");
    } //end of for loop
}
xhr.send();