var found_shiny_rock = true
function makeRock(rocks)
{
    if (determineIfShiny())
    {
        var target = "num_shiny_rocks"
        if (found_shiny_rock) //because we're only doing this once (and know when the variables are) we can do something like this rather than going through the whole proccess of finding if it's hidden or not.
            document.getElementById("num_shiny_rocks").hidden = false
            document.getElementById("label_shiny_rocks").hidden = false
            found_shiny_rock = false
    }
    else {var target = "num_rocks"}
    document.getElementById(target).innerHTML = rocks + parseInt(document.getElementById(target).innerHTML);
}

function determineIfShiny()
{
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(11);
    if((Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)) % 10 == 0)
        return true;
    else
        return false;
}