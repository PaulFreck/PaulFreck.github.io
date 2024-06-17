var found_shiny_rock = true
var manual_rocks = 1
var rock_gatherers = 0
var intervalID = window.setInterval(gatherRockCallback, 1000);
var progressToShiny = 0

function makeRock()
{
    updateRockCount(manual_rocks)
}

function updateRockCount(amount)
{
    shinyAmount = shiny(amount)
    console.log(shinyAmount)
    if (shinyAmount >= 1)
    {
        document.getElementById("shiny_rocks").innerHTML = amount + parseInt(document.getElementById("shiny_rocks").innerHTML) - shinyAmount;
        if (found_shiny_rock){ 
            unHide("shiny_rocks")
            found_shiny_rock = false
            unHide("research")
            unHide("rock_enthusiast") //I could do this all by a class, but i feel that this allows for me to select them in the future if need be
        }
    }
    document.getElementById("num_rocks").innerHTML = amount + parseInt(document.getElementById("num_rocks").innerHTML) - shinyAmount;
}

function shiny(amount)
{
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(18);
    percent = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled) / 100
    if ((percent * amount) + progressToShiny< 1)
    {
        progressToShiny += percent * amount
        return 0;
    }
    else{
        toReturn = Math.round(percent * amount + progressToShiny)
        progressToShiny = 0
        console.log(toReturn)
        return toReturn
    }
} 

function improveManualButton(amount, cost)
{
    if (document.getElementById("num_shiny_rocks").innerHTML > cost)
    {
        manual_rocks += amount
    }
}

async function automaticGatherer(amount, cost)
{
    if (document.getElementById("num_shiny_rocks").innerHTML > cost)
    {
        updateEnthusiastCount(amount)
    }
}

function gatherRockCallback()
{
    updateRockCount(rock_gatherers)
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