$( "#gen" ).on('click',(function() {
var deck = $('#myTextArea').val();

alert(receivecards(deck))
})
)

function receivecards (string) {
var uniquecards = string.split("\n");
var uniquearray = uniquecards.map (function(x) {return x.slice(2,x.length-1)});
var nonlands;
var lands;
return uniquearray
}

var Allcards;
$.get('AllCards.json', function(json) {
  Allcards = JSON.parse(json)
 });


 console.log(Allcards.keys)
