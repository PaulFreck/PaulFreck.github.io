var found_shiny_rock = true
var manual_rocks = 1
function makeRock()
{
    if (determineIfShiny())
    {
        var target = "num_shiny_rocks"
        if (found_shiny_rock) //because we're only doing this once (and know when the variables are) we can do something like this rather than going through the whole proccess of finding if it's hidden or not.
            document.getElementById("shiny_rocks").hidden = false
            found_shiny_rock = false
            showResearch()
    }
    else {var target = "num_rocks"}
    document.getElementById(target).innerHTML = manual_rocks + parseInt(document.getElementById(target).innerHTML);
}

function determineIfShiny()
{
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(11);
    if((Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)) % 1 == 0)
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
    if (document.getElementById("num_rocks").innerHTML > cost)
    {
        manual_rocks += amount
    }
}