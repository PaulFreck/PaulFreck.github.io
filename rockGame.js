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
    if (determineIfShiny())
    {
        var target = "num_shiny_rocks"
        if (found_shiny_rock){ //because we're only doing this once (and know when the variables are) we can do something like this rather than going through the whole proccess of finding if it's hidden or not.
            document.getElementById("shiny_rocks").hidden = false
            found_shiny_rock = false
            showResearch()
        }
    }
    else {var target = "num_rocks"}

    document.getElementById(target).innerHTML = amount + parseInt(document.getElementById(target).innerHTML);
}

function determineIfShiny()
{
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(11);
    if((Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)) % 2 == 0)
        return true;
    else
        return false;
} 

function showResearch()
{
    document.getElementById("Research").hidden = false
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
        rock_gatherers += amount
    }
}

function gatherRockCallback()
{
    updateRockCount(rock_gatherers)
}