$(document).ready(function () {

    var cardSection = $(".card-section");
    var carousel = $("#carouselExampleControls");

    cardSection.hide();
    carousel.show();
    renderCards();

    var searchSubmit = $("#search-submit");
    
    searchSubmit.on("click", function (event) {



        carousel.hide();
        cardSection.show();

        var searchInput = $("#search-input").val().trim();
        event.preventDefault();

        $.ajax({
            type: "GET",
            url: "/api/classes/find/" + searchInput,
            dataType: "json",
            success: function (data) {
                console.log("received query");
                console.log(data);
                cardSection.empty()
                for (i = 0; i < data.length; i++) {

                    if (data.length === 0) {
                        var noResult = $("<h3>")
                        noResult.html("Unfortunately, no classes exist")
                        cardSection.append(noResult)

                    } else {

                        var title = data[i].title;
                        var date = data[i].date;
                        var description = data[i].desc;
                        var category = data[i].categ;
                        var youtube = data[i].liveLink;


                        var button = $("<button>Add Class</button>")
                        button.addClass("btn btn-outline-secondary add-class")

                        var calendar = $("<img src='../assets/images/calendar.png'></img>");
                        calendar.addClass("calendar");
                        calendar.attr("data-title",title);
                        calendar.attr("data-desc",description);
                        calendar.attr("data-date", date);

                        var card = $("<div>");
                        card.addClass("card");

                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        var cardFooter = $("<div>")
                        cardFooter.addClass("card-footer");

                        // cardBody.append("<h5>" + teacher + "</h5>");
                        cardBody.append("<h6>" + title + "</h6>");
                        cardBody.append("<p>" + category + "</p>");
                        cardBody.append("<p>" + moment(date).format("LLLL") + "</p>");
                        cardBody.append("<p>" + description + "</p>");

                        // cardFooter.append(button);
                        cardFooter.append(calendar);

                        card.append(youtube);
                        card.append(cardBody);
                        card.append(cardFooter);

                        cardSection.append(card);

                    }

                }
            }
        });


    });



    function findAll() {


    };

    // Carousel Cards
    function renderCards() {


        $.ajax({
            type: "GET",
            url: "/api/classes",
            dataType: "json",
            success: function (data) {
                console.log(data);
                
                // var sectionCount = 1;
                if (data.length > 0) {
                    data.length <= 9 ? lengthCards = data.length : lengthCards = 9;
                    
                    var newSection; //= $(`<div id='section${sectionCount}'>`);
                    console.log(lengthCards);

                    for (i = 1; i <= lengthCards; i++) {

                        if (i < 4) {
                            newSection = $(".carousel-item1")

                        } else if 
                        (i < 7) {
                            newSection = $(".carousel-item2")

                        } else if
                        (i < 10) {
                            newSection = $(".carousel-item3")

                        }

                        // if (i % 3 === 0 && i < lengthCards) {
                        //     // newSection.append(`<a href="#section${sectionCount > 1 ? sectionCount - 1 : ''}" class="arrow__btn">></a>`)

                        //     newSection.append(`<a href="#section${sectionCount + 1}" class="arrow__btn">></a>`)

                        //     wrapperDiv.append(newSection);

                        //     sectionCount++;

                        //     newSection = $(`<div id='section${sectionCount}'>`)
                            
                        //     newSection.append(`<a href="#section${sectionCount - 1}" class="arrow__btn"><</a>`)

                        // }

                        // var item = $("<div>");
                        // item.addClass("item")

                        // var teacher = data[i-1].teacher;
                        var title = data[i-1].title;
                        var date = data[i-1].date;
                        var description = data[i-1].desc;
                        var category = data[i-1].categ;
                        var youtube = data[i-1].liveLink;


                        var button = $("<button>Add Class</button>")
                        button.addClass("btn btn-outline-secondary add-class")

                        var calendar = $("<img src='../assets/images/calendar.png'></img>");
                        calendar.addClass("calendar");
                        calendar.attr("data-title",title);
                        calendar.attr("data-desc",description);
                        calendar.attr("data-date", date);

                        var card = $("<div>");
                        card.addClass("card");

                        var cardBody = $("<div>");
                        cardBody.addClass("card-body");

                        var cardFooter = $("<div>")
                        cardFooter.addClass("card-footer");

                        // cardBody.append("<h5>" + teacher + "</h5>");
                        cardBody.append("<h6>" + title + "</h6>");
                        cardBody.append("<p>" + category + "</p>");
                        cardBody.append("<p>" + moment(date).format("LLLL") + "</p>");
                        cardBody.append("<p>" + description + "</p>");

                        // cardFooter.append(button);
                        cardFooter.append(calendar);

                        card.append(youtube);
                        card.append(cardBody);
                        card.append(cardFooter);

                        newSection.append(card)

                        // cardSection.append(newSection);

                    }

                }
            }
        });

    }
});
