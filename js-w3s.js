//Top bar buttons dropdown

function topleft_btn_activator(button_name) {
    let wrappers = document.getElementsByClassName('leftbtn-wrapper');
    let active_wrapper = document.getElementsByClassName(button_name)[0];
    
    active_wrapper.classList.toggle('active')

    for (let wrapper of wrappers){
        
        if (wrapper !== active_wrapper){
            wrapper.classList.remove('active');
        };
    };
}

//Dark mode toggle

function darkmode_button_hoverin(){
    
    let mode_selector = document.getElementById('darkmode_menu');
    mode_selector.style.top = "75px";

}

function darkmode_button_hoverout(){
    
    let mode_selector = document.getElementById('darkmode_menu');
    mode_selector.style.top = "0px";

}

function toggle_darkmode_button() {
    let checkboxes = document.querySelectorAll('#darkmode_menu input');

    if (checkboxes[0].checked === true && checkboxes[1].checked === true){
        checkboxes[0].checked = false;
        checkboxes[1].checked = false;
        toggle_darkmode_checkbox();
        toggle_darkmodecode_checkbox();
    }
    else {
        if (checkboxes[0].checked === false){
            checkboxes[0].checked = true;
            toggle_darkmode_checkbox();
        };
        if (checkboxes[1].checked === false){
            checkboxes[1].checked = true;
            toggle_darkmodecode_checkbox();
        };
    };
}

function toggle_darkmode_checkbox() {
    let dark_elements = []
    
    dark_elements.push(document.getElementById('topbar'));
    dark_elements.push(document.getElementById('main'));
    dark_elements.push(document.getElementsByTagName('footer')[0]);

    for (element of dark_elements){
        element.classList.toggle('dark-mode');
    };
}

function toggle_darkmodecode_checkbox() {
    
    let main = document.getElementById('main');
    main.classList.toggle('dark-code');
}

//Code editor gif changer

function codeeditor_src_backend(){
    
    let buttons = document.querySelectorAll('#gifbtns button');
    let gif = document.querySelector('#codegif img');

    buttons[0].classList.remove('active');
    buttons[1].classList.add('active');

    gif.src = 'misc/codeeditor-backend.gif';
}

function codeeditor_src_frontend(){
    
    let buttons = document.querySelectorAll('#gifbtns button');
    let gif = document.querySelector('#codegif img');

    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');

    gif.src = 'misc/codeeditor-frontend.gif';
}

// Slideshow

let slideshow_act = 1;

function slideshow_slide(action){

    let slide_num = document.getElementById('slide_num');
    let caption_text = document.getElementById('caption_text');
    let circle_btns = document.querySelectorAll('#circle_btns button');
    let slide_img = document.querySelectorAll('#slideshow_imgs img');

    slideshow_act += action;

    //reset slideshow
    if (slideshow_act === 4){
        slideshow_act = 1;
    };
    
    if (slideshow_act === 0){
        slideshow_act = 3;
    };

    //slide counter
    slide_num.innerHTML = `${slideshow_act} / 3`;

    //show and hide slides
    let hide_slides = (a, b) => {
        slide_img[a].style.display = 'none';
        slide_img[b].style.display = 'none';
    }

    if (slideshow_act === 1){
        caption_text.innerHTML = 'Caption Text';
        slide_img[0].style.display = 'block';
        hide_slides(1,2);
    }
    else if (slideshow_act === 2){
        caption_text.innerHTML = 'Caption Two';
        slide_img[1].style.display = 'block';
        hide_slides(0,2);
    }
    else if (slideshow_act === 3){
        caption_text.innerHTML = 'Caption Three';
        slide_img[2].style.display = 'block';
        hide_slides(0,1);
    };

    //activate and deactivate circle buttons

    let active_button = circle_btns[slideshow_act-1];
    active_button.classList.add('active');

    for (let button of circle_btns){
        if (button !== active_button){
            button.classList.remove('active');
        };
    };
};

function slideshow_circlebutton(button_number) {
    slideshow_slide(button_number-slideshow_act);
};