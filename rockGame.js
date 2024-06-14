var found_shiny_rock = true
var manual_rocks = 1
var rock_gatherers = 0
var intervalID = window.setInterval(gatherRockCallback, 1000);

function makeRock()
{
    updateRockCount(manual_rocks)
}

function updateRockCount(amount)
{
    if (shiny())
    {
        var target = "num_shiny_rocks"
        if (found_shiny_rock){ 
            unHide("shiny_rocks")
            found_shiny_rock = false
            unHide("research")
            unHide("rock_enthusiast") //I could do this all by a class, but i feel that this allows for me to select them in the future if need be
        }
    }
    else {var target = "num_rocks"}

    document.getElementById(target).innerHTML = amount + parseInt(document.getElementById(target).innerHTML);
}

function shiny()
{
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(11);
    if((Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)) % 10 == 0)
        return true;
    else
        return false;
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