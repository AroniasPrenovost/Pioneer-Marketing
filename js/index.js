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
animateValue("value", 0, 3425, 2);

// quote generator
var quotesArr = [];
quotesArr[0] = '<span style="font-style:italic"  "font-size:20px">"I asked Chris if he could make hair after finishing and he was happy to oblige.  He truly takes his time to make sure everything is perfect. I even got a neck/head massage at the end! I will definitely get my haircut from him again. Fantastic barber!</span>" <br><br> <span style="font-size:1.1em">- Mark Guzman -</span> <br> <span style="font-size:.9em">Seattle, WA</span>';
quotesArr[1] = '<span style="font-style:italic" "font-size:20px">"After ten years of cutting my own hair, I decided to get it cut for this first time recently. I found this little shop after reading so many reviews of people following this particular barber, Chris Nguyen fromsafely say that now I\'m a follower, too!</span>" <br><br> - Neal J. - <br> Seattle, WA';
quotesArr[2] = '<span style="font-style:italic" "font-size:20px">"I got a fantastic haircut. I have very thick difficult hair that stands nearly straight out, and needs to be "sculpted" more than trimmed lol. Chris did an excellent job, expertly translated some of my clumsy instructions into what I was looking for. </span>" <br><br> C.S. - <br> Seattle, WA';
quotesArr[3] = '<span style="font-style:italic" "font-size:20px">"Quick, friendly service with super low prices. A cut I would have gotten at another place for my long hair cost $15 less at Unique Barber. I was helped by Chris Nyugen. He also has a manicure license, so I might be coming i haircut in the very near future!</span>" <br><br> - Kristin J. - <br> Seattle, WA';
quotesArr[4] = '<span style="font-style:italic" "font-size:20px">"Biggest thing I noticed is attention to detail - clean lines, immaculate symmetry at all the edges, and really nice work at the temples and behind the ears. Chris could easily charge twice as m a haircut here (certainly all the others shops do!)."</span>" <br><br> - Jessica Debock - <br> Greenlake, WA';
quotesArr[5] = '<span style="font-style:italic" "font-size:20px">"I got a fantastic haircut. I have very thick difficult hair that stands nearly straight out, and needs to be "sculpted" more than trimmed lol. Chris could easily charge twice as much for a haircut here (certainly all the others shops do!).</span>" <br><br> - M.N. - <br> Everett, WA';
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

