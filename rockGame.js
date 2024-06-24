var found_shiny_rock = true
var manual_rocks = 1
var rock_gatherers = 0
var intervalID = window.setInterval(gatherRockCallback, 50); //update @ 20 fps
var shinyRocks = 0
var regularRocks = 0

function makeRock()
{
    updateRockCount(manual_rocks)
}

function updateRockCount(amount)
{
    shinyAmount = shiny(amount)
    if (shinyRocks >= 1)
    {
        document.getElementById("num_shiny_rocks").innerHTML = Math.round(shinyRocks); 
        if (found_shiny_rock){  //can be simplified?
            unHide("shiny_rocks")
            found_shiny_rock = false
            unHide("research")
            unHide("rock_enthusiast") //I could do this all by a class, but i feel that this allows for me to select them in the future if need be
        }
    }
    regularRocks += (amount) //-shinyAmount
    console.log(regularRocks)
    document.getElementById("num_rocks").innerHTML = Math.round(regularRocks); //-shinyAmount
}

function shiny(amount)
{
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(18);
    percent = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) / 100;
    shinyRocks += percent * amount;
    return percent * amount
} 

function improveManualButton(amount)
{
    var cost = document.getElementById("manual_cost").innerHTML
    if (Number(document.getElementById("num_shiny_rocks").innerHTML) >= Number(cost))
    {
        shinyRocks -= cost
        document.getElementById("manual_cost").innerHTML *= 2
        document.getElementById("num_shiny_rocks").innerHTML = Math.round(shinyRocks);
        manual_rocks += amount
    }
}

async function automaticGatherer(amount)
{
    var cost = document.getElementById("rock_enthusiast_cost").innerHTML
    if (Number(document.getElementById("num_shiny_rocks").innerHTML) >= Number(cost))
    {
        shinyRocks -= cost
        document.getElementById("rock_enthusiast_cost").innerHTML *= 2
        document.getElementById("num_shiny_rocks").innerHTML = Math.round(shinyRocks);
        updateEnthusiastCount(amount)
    }
}

function gatherRockCallback()
{
    updateRockCount(rock_gatherers/20)
}

function unHide(id)
{
    document.getElementById(id).hidden = false
}

function updateEnthusiastCount(amount)
{
    rock_gatherers += amount
    document.getElementById("num_rock_enthusiasts").innerHTML = rock_gatherers
}