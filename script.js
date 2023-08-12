//change navbar background color when scrolling
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll > 125) {
            document.querySelector(".header").style.background = "#110d0d";
        } else {
            document.querySelector(".header").style.background = "#00000000";
        }
    });
});

filterSelection("all") // Execute the function and show all cols
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("col");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

// Show filtered elements
function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("btn-container");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("btn-active");
        current[0].className = current[0].className.replace(" btn-active", "");
        this.className += " btn-active";
    });
}



/*
    1. filter button id should be == <tag>
        > const activefilterBtn = $(".btn")
    2. add data-tag attribute in images to identify <tag>
    3. select all image card with the corresponding data tag matching the filter button id  
     > const tags = $(".image-card").data-tag == filterBtn.id  



     Get all image-cards, remove the class "show-card", forEach the queried tags, add the "show-card" class 
 
*/