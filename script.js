let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
reload(0);

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

function reload(x) {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');

    switch (x) {
        case 1:
            var path = 'https://raw.githubusercontent.com/ka-wepee/touch-data/main/first.json';
        break
        case 2:
            var path = 'https://raw.githubusercontent.com/ka-wepee/touch-data/main/female.json';
        break
        case 3:
            var path = 'https://raw.githubusercontent.com/ka-wepee/touch-data/main/male.json';
        break
        default:
            var path = 'https://raw.githubusercontent.com/ka-wepee/touch-data/main/mounts.json';
    }

    let http = new XMLHttpRequest();

    http.open('get', path, true);
    http.send();
    http.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            let products = JSON.parse(this.responseText);
            let output = "";

            for (let item of products) {
                output += `
                <a href="${item.image}" data-lightbox="models" data-title="${item.name}">
                <div class="box">
                <img src="${item.image}">
                <h4>${item.name}</h4>
                <h5>${item.price} PHP</h5>
                </div>
                </a>
                `
            }

            document.querySelector('.shop .container').innerHTML = output;
        }
    }
}