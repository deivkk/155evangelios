//Evangelio 1
var grammar = tracery.createGrammar({
    "name" : ["Cheri", "Fox", "Morgana", "Jedoo", "Brick", "Shadow", "Krox", "Urga", "Zelph"],
    "story" : ["#hero.capitalize# was a great #occupation#, and this song tells of #heroTheir# adventure. #hero.capitalize# #didStuff#, then #heroThey# #didStuff#, then #heroThey# went home to read a book."],
    "monster" : ["dragon", "ogre", "witch", "wizard", "goblin", "golem", "giant", "sphinx", "warlord"],
    "setPronouns" : [
        "[heroThey:they][heroThem:them][heroTheir:their][heroTheirs:theirs]", 
        "[heroThey:she][heroThem:her][heroTheir:her][heroTheirs:hers]",
        "[heroThey:he][heroThem:him][heroTheir:his][heroTheirs:his]"
    ],
    "setOccupation" : [
        "[occupation:baker][didStuff:baked bread,decorated cupcakes,folded dough,made croissants,iced a cake]", 
        "[occupation:warrior][didStuff:fought #monster.a#,saved a village from #monster.a#,battled #monster.a#,defeated #monster.a#]"],
    "origin" : ["#[#setPronouns#][#setOccupation#][hero:#name#]story#"]

});

grammar.addModifiers(baseEngModifiers);

var evangelio1 = document.getElementById("evangelio1");
evangelio1.textContent = grammar.flatten("#origin#");

