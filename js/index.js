// count up to number
function animateValue(id, start, end, duration) {
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}
// animateValue("value", 0, 3425, 2);

// quote generator
var quotesArr = [];
quotesArr[0] = '<span style="font-style:italic" "font-size:20px">"They were quick and easy to work with. My site is exactly what I needed.</span>" <br><br> <span style="font-size:1.1em">- Fawn Freeman -</span> <br> Owner, Moss Tangles <br> <span style="font-size:.9em">Tacoma, WA</span>';
quotesArr[1] = '<span style="font-style:italic" "font-size:20px">"The proposal Stadium generated for me was extremely fast, and helped me land the deal I\'d been working on. Ian knew exactly how to take my ideas and turn them into a winning proposal.</span>" <br><br> - Nick L. - <br> Las Vegas, NV';
quotesArr[2] = '<span style="font-style:italic" "font-size:20px">"Stadium Consulting was so approachable and knowledgable. They made the process of building a website simple and easy. </span>" <br><br> C.S. - <br> Seattle, WA';
// quotesArr[3] = '<span style="font-style:italic" "font-size:20px">"Quick, friendly service with super low prices. A cut I would have gotten at another place for my long hair cost $15 less at Unique Barber. I was helped by Chris Nyugen. He also has a manicure license, so I might be coming i haircut in the very near future!</span>" <br><br> - Kristin J. - <br> Seattle, WA';
// cycle through the quotes
// setInterval(displayDetails, 3500)  // now we have buttons 
function displayDetails(){
	var randomQuote = Math.floor(Math.random() * (quotesArr.length - 0));
	document.getElementById("quote").innerHTML = quotesArr[randomQuote];
	};
displayDetails();
	document.getElementById("displayDetails").onclick = displayDetails;
	document.getElementById("displayDetail").onclick = displayDetails;
	document.getElementById("displayDetai").onclick = displayDetails;

