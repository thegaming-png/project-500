function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();


    tint_color = "";
}

function draw() {
    image(video, 230, 140, 200, 150);
    tint(tint_color);
    fill(250, 0, 0);
    circle(50, 50, 80);
    circle(590, 50, 80);
    circle(50, 420, 80);
    circle(590, 420, 80);
    rect(70, 30, 510, 40);
    rect(60, 400, 520, 40);
    rect(20, 10, 50, 430);
    rect(570, 10, 50, 430);
}

function take_snapshot() {
    save('Swastik.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}