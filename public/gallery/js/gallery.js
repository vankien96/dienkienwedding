let anhcuoiString = "00hl_LFT_5326_hl2.jpg 00hl_LFT_5122.jpg @bia.jpg 003-004.jpg 005-006.jpg 009-010.jpg 011-012.jpg 013-014.jpg 017-018.jpg 019-020.jpg 021-022.jpg 023-024.jpg 025-026.jpg"
var anhcuoi = seperateImages(anhcuoiString);

var allImages = {
    "anhcuoi": anhcuoi
}

loadGalleries()

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
})

function loadGalleries() {
    let id = findGetParameter("id")
    let name = findGetParameter("address")
    if (!name) { name = "Wedding Album"}
    let date = findGetParameter("date")
    if (!date) { date = "22 Sept 2024"}

    let titles = `<h1>${name}</h1> <h2>${date}</h2>`
    document.getElementById('title-gallery').insertAdjacentHTML('afterbegin', titles);

    var images = allImages[id]
    if (!images) { images = anhcuoi }

    var inputs = '';
    for (var i = 0; i < images.length; i++) {
        inputs += `
        <li class="one-third animate-box" data-animate-effect="fadeIn" style="background-image: url(images/galleries/${images[i]});"> 
 <a data-lightbox="image-1" href="images/galleries/${images[i]}" class="color-2"></a> 
        </li>`;
    }
    document.getElementById('fh5co-gallery-list').insertAdjacentHTML('afterbegin', inputs);
    changeHeaderStyle(images[0])
}

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function seperateImages(string) {
    return string.split(" ")
}

function changeHeaderStyle(image) {
    document.getElementById('fh5co-header').style = `--imageURL: url(../images/galleries/${image}); --imageSmallURL: url(../images/galleries/${image})`
}
