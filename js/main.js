/* */
function initMap() {
    // The location of Uluru
    const Kairouan = { lat: 35.672800, lng: 10.094910 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: Kairouan,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: Kairouan,
        map: map,
    });
}
//Smoothscrolling opacity
$("#navbar a, .btn").on("click", function(event) {
    if (this.hash != "") {
        // alert("i am in loop");
        event.preventDefault();
        const hash = this.hash;
        console.log(hash);

        $("html, body").animate({
                scrollTop: $(hash).offset().top - 100,
            },
            800
        );
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});