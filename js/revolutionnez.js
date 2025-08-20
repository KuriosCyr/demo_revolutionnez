function apply(el) {

    function getValue(attr, defaultValue){
        if (el.data(attr) !== undefined) {
            return el.data(attr);
        }
        return defaultValue;
    }

    // get control colors
    let color = "black";
    if (el.data('color') !== undefined) {
        color = el.data('color');
    }

    let foreground = "black";
    if (el.data('foreground') !== undefined) {
        foreground = el.data('foreground');
    }

    // get text alignement
    let alignmentTitle = "left";
    if (el.data('titlealignment') !== undefined) {
        alignmentTitle = el.data('titlealignment');
    }

    let alignmentDesc = "left";
    if (el.data('descalignment') !== undefined) {
        alignmentDesc = el.data('descalignment');
    }

    const titlebold= getValue("titlebold", "400");
    const titleitalic= getValue("titleitalic", "normal");
    const titlesize= getValue("titlesize", "normal");
    const descbold= getValue("descbold", "400");
    const descitalic= getValue("descitalic", "normal");
    const descsize= getValue("descsize", "normal");

    // Get language
    let lang = 0;

    if (el.data('lang') === undefined) {
        lang = 0;
    }

    if (el.data('lang') === "fr")
        lang = 0;

    if (el.data('lang') === "en")
        lang = 1;

    if (el.data('lang') === "esp")
        lang = 2;

    // Get folder path
    let mode = el.data("mode");
    let smallImages = el.data("images");
    let imagesLarge = el.data("large");
    let imagesDetails = el.data("details");
    let naming = el.data("naming");
    naming = naming.replace("{frame_index}", "{frame}");
    let count = el.data("count");
    let frameTime = el.data("frametime");
    
    
    const sliderControl = el.data("slidercontrol");
    let framesCounter = 0;

    // get size
    let width = el.data("width");
    let height = el.data("height");
    // Get stop at
    let stopAt = el.data('stop');

    // Get title
    let title = el.data('title')[lang];

    // Get Description data
    let descriptions = el.data("descriptions");

    // Get communication data
    var communication = el.data("communication")[lang];

    // Get communication data
    var specification = el.data("specification");
    let content = '';
    // header
    title ? content = content + '<h1 class="title-header" style="overflow-wrap: break-word;font-weight: '+titlebold+'; font-style: '+titleitalic+'; font-size: '+titlesize+'; color: ' + color + '; text-align: ' + alignmentTitle + '">' + title + '</h1>' : content = content + '<h1 class="title-header" style="display: none;"></h1>';
    let combinedDescriptions = "";

    if (descriptions) {
        for (let i = 0; i < descriptions.length; i++) {
            let desc = descriptions[i].description;
            if (desc) {
                combinedDescriptions += desc + " ";
            }
        }
    }

    if (combinedDescriptions) {
        content += '<p class="description-label" style="overflow-wrap: break-word; font-weight: '+descbold+'; font-style: '+descitalic+'; font-size: '+descsize+';color: ' + color + '; text-align: ' + alignmentDesc + '">' + combinedDescriptions + '</p>';
    }
    // title ? content = content + '<h1 class="title-header" style="overflow-wrap: break-word;font-weight: '+titlebold+'; font-style: '+titleitalic+'; font-size: '+titlesize+'; color: ' + color + '; text-align: ' + alignmentTitle + '">' + title + '</h1>' : '';
    // content = content + '<p class="description-label" style="overflow-wrap: break-word;height: 100px; font-weight: '+descbold+'; font-style: '+descitalic+'; font-size: '+descsize+';color: ' + color + '; text-align: ' + alignmentDesc + '""></p>';

    // spinner

    content = content + '<div class="spritescontainer"></div>';


    // buttons
    content = content + '<div class="revolutionnez-buttons d-flex justify-content-end align-items-center p-2 mb-2" style="background: '+foreground+'">';
    content = content + '<a class="previous-frame-btn" href="#" style="display: inline-block; width: 30px; height: 25px; text-align: center; color: ' + color + '; cursor: pointer; font-weight: bold;"> <i class="fa fa-angle-left fa-lg"></i> </a>';
    if(sliderControl === "SLIDER")
        content = content + '<input class="spritespin-slider slider" type="range">';
    else {
        content = content + '<a class="pause-toggle" title="Vérifier" href="#" style="display: inline-block; width: 30px; height: 30px; text-align: center; color: ' + color + '; cursor: pointer; font-weight: bold;"><i class="fa fa-refresh fa-lg"></i> </a>';
    }
    content = content + '<a class="next-frame-btn" href="#" style="display: inline-block; width: 30px; height: 25px; text-align: center; color: ' + color + '; cursor: pointer; font-weight: bold;"> <i class="fa fa-angle-right fa-lg"></i> </a>';
    content = content + '<a class="fullscreen-toggle me-2" href="#" style="display: inline-block; width: 30px; height: 30px; text-align: center; color: ' + color + '; cursor: pointer; font-weight: bold;"><i class="fa fa-search-plus fa-lg"></i> </a>';
    if(imagesDetails.length > 0){
        content = content + '<div class="thumb border bg-white" id="thumb" style="height:45px; width:60px; border-color: '+color+' !important; border-radius: 0.25rem;" />';

    }
    content = content + '</div>';
    if(
        specification.download.name ||
        specification.audio.content ||
        specification.video.name ||
        specification.lien.name ||
        specification.shopping.name ||
        communication.email ||
        communication.website ||
        communication.videoURL ||
        communication.contactPage ||
        communication.telephone
        ){
        content = content + '<hr style="margin: 0;color:'+color+';"/>';
}

    // footer
function shouldDisplayButtons() {
        var properties = [
            specification.download.name,
            specification.audio.content,
            specification.video.name,
            specification.lien.name,
            specification.shopping.name,
            communication.email,
            communication.website
            ];

        for (var i = 0; i < properties.length; i++) {
            if (properties[i]) {
                return true;
            }
        }

        return false;
    }

    var displayButtons = shouldDisplayButtons();

    content = content + '<div class="revolutionnez-buttons justify-content-between align-items-center pt-3 p-2 mt-2" style="background: '+foreground+'; display:' + (displayButtons ? 'flex' : 'none') + ';">';

    if (displayButtons) {
        content = content + '<div style="display: flex;">';
    } else {
        content = content + '<div style="display: none;">';
    }
// content = content + '<div class="revolutionnez-buttons d-flex justify-content-between align-items-center pt-3 p-2 mt-2" style="background: '+foreground+';">';
// content = content + '<div style="display: flex;">';
specification.download.name ? content = content + '<a download="'+specification.download.name+'" target="_blank" href="' + specification.download.content + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"/></svg></a>' : "";
specification.audio.content ? content = content + '<a id="audio" role="button" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM412.6 181.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5z"/></svg></a>': "";
specification.video.name ? content = content + '<a target="_blank" href="' + specification.video.name + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></a>': "";
specification.lien.name ? content = content + '<a target="_blank" target="_blank" href="' + specification.lien.name + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>': "";
specification.shopping.name ? content = content + '<a target="_blank" href="' + specification.shopping.name + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg></a>': "";
content = content + '</div>';

content = content + '<div style="display: flex;">';
communication.email ? content = content + '<a target="_blank" href="mailto: ' + communication.email + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg></a>' : "";
communication.website ? content = content+ '<a target="_blank" href="' + communication.website + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></a>' : "";
communication.videoURL ? content = content + '<a target="_blank" href="' + communication.videoURL + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg></a>' : "";
communication.contactPage ? content = content + '<a target="_blank" href="' + communication.contactPage + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg></a>' : "";
communication.telephone ? content = content + '<a target="_blank" href="tel:' + communication.telephone + '" style="display: inline-block; width: 30px; height: 30px; text-align: center; border: gray; color: ' + color + '; cursor: pointer; font-weight: bold;"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"/></svg></a>' : "";
content = content + '</div>';

content = content + '</div>';
const inverse = el.data("inverse");
el.html(content);
    // enter Full Screen Mode
el.children('.spritescontainer').click(function (e) {
    e.preventDefault();       
    if(document.fullscreenEnabled && e.target.parentNode != this){
        el.children('.spritescontainer').spritespin('api').exitFullscreen();
        $('.spritescontainer').css("cursor","inherit");
        $('#cls-btn').remove();
    }
});

$('#audio').click(function (e) {
    e.preventDefault();
    const tag = document.createElement("source");
    tag.src = specification.audio.content;
    document.getElementById("audioElement").appendChild(tag);
    $("#videoElement").removeClass( "d-block" ).addClass( "d-none" );
    $("#audioElement").removeClass( "d-none" ).addClass( "d-block" );
    $("#assets-modal").removeClass( "d-none" ).addClass( "d-block" );
});

$('#video').click(function (e) {
    e.preventDefault();
    const tag = document.createElement("source");
    tag.src = specification.video.content;
    document.getElementById("videoElement").appendChild(tag);
    $("#audioElement").removeClass( "d-block" ).addClass( "d-none" );
    $("#videoElement").removeClass( "d-none" ).addClass( "d-block" );
    $("#assets-modal").removeClass( "d-none" ).addClass( "d-block" );
});
    // enter Full Screen Mode
el.children('.revolutionnez-buttons').children('a.fullscreen-toggle').click(function (e) {
    e.preventDefault();
    $('.spritescontainer').css("cursor", "zoom-out");
    $('.spritescontainer').append("<a id='cls-btn' href='#'><i class='fa fa-close' style='color: black; font-size: 15px; border: 1px solid white; border-radius: 0.25rem; padding: 10px 13px; background: gray; position: absolute; top: 35px; right: 35px;'></i></a>");
    el.children('.spritescontainer').spritespin('api').requestFullscreen();
});


el.children('.revolutionnez-buttons').children('div a.zoom-btn').click(function (e) {
    e.preventDefault();
    el.children('.spritescontainer').spritespin('api').toggleZoom();
});

    // Pause Animation
el.children('.revolutionnez-buttons').children('a.pause-toggle').click(function (e) {
    e.preventDefault();
    el.children('.spritescontainer').spritespin('api').toggleAnimation();
});


el.children('.revolutionnez-buttons').children('a.previous-frame-btn').click(function (e) {
    e.preventDefault();
    el.children('.spritescontainer').spritespin('api').stopAnimation();
    el.children('.spritescontainer').spritespin('api').prevFrame();
});

el.children('.revolutionnez-buttons').children('a.next-frame-btn').click(function (e) {
    e.preventDefault();
    el.children('.spritescontainer').spritespin('api').stopAnimation();
    el.children('.spritescontainer').spritespin('api').nextFrame();
});

el.children('.revolutionnez-buttons').children('#thumb').click(function (e) {
    e.preventDefault();
    if(imagesDetails.length > 0){
        const $dynamicGallery = document.getElementById("dynamic-gallery-demo");
        lightGallery($dynamicGallery, {
            dynamic: true,
            thumbnail: true,
            plugins: ["./js/lightgallery/lg-zoom.js", "./js/lightgallery/lg-video.js", ,"./js/lightgallery/lg-thumbnail.js"],
            dynamicEl: [...imagesDetails.map((m) => ({ src: m }))],
            zoom: false,
            rotate: false,
            fullScreen: false,
            download: false,
            hash: false,
            share: false
        });
    }
});

let isSliderBeingUsed = false;
const step = Math.trunc(smallImages.length / imagesDetails.length);
const items = Array.from({length: imagesDetails.length}, (_, i) => i * step);
var initialRotations = parseInt($(".spritescontainer").data("initial-rotations"), 10) || 0;
el.children(".spritescontainer").spritespin({
  source: imagesLarge,
  sourceZoom: imagesLarge,
  sizeMode: 'fit',        
  height: height,
  width: width,
  stopAt: initialRotations,
  responsive: true,
  animate: false,
  frameTime,
  // reverse: false,
  reverse: inverse ? true : false,
  zoomUseWheel: false,
  zoomUseClick: false,
  wrap: true,
  plugins: ['progress', '360', 'drag'],
  sense: inverse ? 1 : -1,
  // sense: -1,
  onFrame: function (e, data) {

    // set the descriptions
    let descriptionEl = el.children(".description-label");
    const frame= Number(data.frame)+1;
    descriptions.forEach(element => {
      if (frame >= element.start && frame <= element.end) {
        descriptionEl.text(element.description);
    }
});

    if (stopAt != 0 && stopAt != undefined) {
      framesCounter++;
      if (framesCounter === (stopAt * imagesLarge.length)) {
        el.children('.spritescontainer').spritespin('api').stopAnimation();
        framesCounter = 0;
    }
}

$('.spritespin-slider').val(data.frame);

if (imagesLarge.length > 0) {
  $('#count').text(`${frame} / ${imagesLarge.length}`);
}
const idx = items.indexOf(data.frame);
// console.log(imagesDetails.length > 0 && idx != -1);
if (imagesDetails.length > 0 && idx != -1) {
  $('#thumb').css("background-image", `url("${imagesDetails[idx]}")`);
}
  }, // fermez la fonction 'onFrame' ici
  onInit: function(e, data) {
    const event = new CustomEvent('initial-rotations');
    document.dispatchEvent(event);
    // Ajoutez ces lignes pour appliquer les rotations initiales
    const initialRotations = parseInt($(".spritescontainer").data("initial-rotations"), 10) || 0;
    if (initialRotations > 0) {
        const totalFrames = imagesLarge.length;
        const initialFrames = initialRotations * totalFrames;
        el.children('.spritescontainer').spritespin('api').startAnimation();
        setTimeout(() => {
            el.children('.spritescontainer').spritespin('api').stopAnimation();
        }, initialFrames * frameTime);
    }
    $('.spritespin-slider')
    .attr("min", 0)
    .attr("max", data.source.length - 1)
    .attr("value", 0)
    .on("mousedown", function() {
        isSliderBeingUsed = true;
    })
    .on("mouseup", function() {
        isSliderBeingUsed = false;
    })
    .on("input", function(e) {
        SpriteSpin.updateFrame(data, e.target.value);
    });
}
});

}


function render360() {
    $('.360spin').each(function (index) {
        $(this).attr("id", "spinner-" + index)
        apply($(this));
    });
}

$(function () {
    render360();
})


export default render360;



