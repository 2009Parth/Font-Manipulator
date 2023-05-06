difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    canvas = createCanvas(340, 340);
    canvas.position(800, 175);
    canvas.background("rgb(215, 89, 16)");

    video = createCapture(VIDEO);
    video.size(420, 440);
    video.position(200, 120);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);

        rightWristX = results[0].pose.rightWrist.x;

        leftWristX = results[0].pose.leftWrist.x;

        difference = floor(leftWristX - rightWristX);

        console.log("right wrist x = " + rightWristX + " left wrist x = " + leftWristX + " difference = " + difference);
    }
}

function draw()
{
    background("grey");

    textSize(difference);
    R = Math.floor(Math.random() * 255) + 1;
    G = Math.floor(Math.random() * 255) + 1;
    B = Math.floor(Math.random() * 255) + 1;
    fill(R, G, B);
    text('Parth', 50, 400);

    document.getElementById("text_side").innerHTML = "Width And Height of a Text will be = " + difference +"px";
}