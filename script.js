let x = Math.random();
x = Math.floor((x*6)+1);

let y = Math.random();
y = Math.floor((y*6)+1);

var p1 = document.getElementById("img1");
p1.src = "dice"+x+".png";
var p2 = document.getElementById("img2");
p2.src = "dice"+y+".png";
var h = document.querySelector("h1");

if(x > y)
{
    h.innerText = "Player 1 Wins 🎉";
}
else if(y > x)
{
    h.innerText = "Player 2 Wins 🎉";
}
else
{
    h.innerText = "Its a Tie....";
}