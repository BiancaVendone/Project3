function addPepperoniTopping() {
    const pepperoniButton = document.getElementById("pepperoniButton");
    const pepperoniOnBase = document.getElementById("pepperoniOnBase");
    if(pepperoniOnBase.style.display === "block") {
        pepperoniOnBase.style.display = "none";
        document.getElementById("pepperoniButton").innerHTML = "Add";
    } else {
        pepperoniOnBase.style.display = "block";
        document.getElementById("pepperoniButton").innerHTML = "Remove";
    }

    // const pepperoniButton = document.getElementById("pepperoniButton");
    // const pepperoniOnBase1 = document.getElementById("pepperoniOnBase1");
    // const pepperoniOnBase2 = document.getElementById("pepperoniOnBase2");
    // const pepperoniOnBase3 = document.getElementById("pepperoniOnBase3");
    // const pepperoniOnBase4 = document.getElementById("pepperoniOnBase4");
    // if(pepperoniOnBase1.style.display === "block" && pepperoniOnBase2.style.display === "block" && pepperoniOnBase3.style.display === "block" && pepperoniOnBase4.style.display === "block") {
    //     pepperoniOnBase1.style.display = "none";
    //     pepperoniOnBase2.style.display = "none";
    //     pepperoniOnBase3.style.display = "none";
    //     pepperoniOnBase4.style.display = "none";
    //     document.getElementById("pepperoniButton").innerHTML = "Add";
    // } else {
    //     pepperoniOnBase1.style.display = "block";
    //     pepperoniOnBase2.style.display = "block";
    //     pepperoniOnBase3.style.display = "block";
    //     pepperoniOnBase4.style.display = "block";
    //     document.getElementById("pepperoniButton").innerHTML = "Remove";
    // }
}
    pepperoniButton.addEventListener("click", addPepperoniTopping);
    function addMushroomTopping() {
    const mushroomButton = document.getElementById("mushroomButton");
    const mushroomsOnBase = document.getElementById("mushroomsOnBase");
    if(mushroomsOnBase.style.display === "block") {
        mushroomsOnBase.style.display = "none";
        document.getElementById("mushroomButton").innerHTML = "Add";
    } else {
        mushroomsOnBase.style.display = "block";
        document.getElementById("mushroomButton").innerHTML = "Remove";
    }
    }
mushroomButton.addEventListener("click", addMushroomTopping);

function addPeppersTopping() {
    const pepperButton = document.getElementById("pepperButton");
    const peppersOnBase = document.getElementById("peppersOnBase");
    if(peppersOnBase.style.display === "block") {
        peppersOnBase.style.display = "none";
        document.getElementById("peppersButton").innerHTML = "Add";
    } else {
        peppersOnBase.style.display = "block";
        document.getElementById("peppersButton").innerHTML = "Remove";
    }
    }
pepperButton.addEventListener("click", addPeppersTopping);

function addOliveTopping() {
    const oliveButton = document.getElementById("oliveButton");
    const olivesOnBase = document.getElementById("olivesOnBase");
    if(olivesOnBase.style.display === "block") {
        olivesOnBase.style.display = "none";
        document.getElementById("oliveButton").innerHTML = "Add";
    } else {
        olivesOnBase.style.display = "block";
        document.getElementById("oliveButton").innerHTML = "Remove";
    }
}
oliveButton.addEventListener("click", addOliveTopping)

function addParmahamTopping() {
    const parmaHamButton = document.getElementById("parmaHamButton");
    const parmahamOnBase = document.getElementById("parmahamOnBase");
    if(parmahamOnBase.style.display === "block") {
        parmahamOnBase.style.display = "none";
        document.getElementById("parmaHamButton").innerHTML = "Add";
    } else {
        parmahamOnBase.style.display = "block";
        document.getElementById("parmaHamButton").innerHTML = "Remove";
    }
    }
parmaHamButton.addEventListener("click", addParmahamTopping);

function addEggTopping() {
    const eggButton = document.getElementById("eggButton");
    const eggOnBase = document.getElementById("eggOnBase");
    if(eggOnBase.style.display === "block") {
        eggOnBase.style.display = "none";
        document.getElementById("eggButton").innerHTML = "Add";
    } else {
        eggOnBase.style.display = "block";
        document.getElementById("eggButton").innerHTML = "Remove";
    }
    }
eggButton.addEventListener("click", addEggTopping);

function addBuffalomozzarellaTopping() {
    const buffaloMozzarellaButton = document.getElementById("buffaloMozzarellaButton");
    const buffalomozzarellaOnBase = document.getElementById("buffalomozzarellaOnBase");
    if(buffalomozzarellaOnBase.style.display === "block") {
        buffalomozzarellaOnBase.style.display = "none";
        document.getElementById("buffaloMozzarellaButton").innerHTML = "Add";
    } else {
        buffalomozzarellaOnBase.style.display = "block";
        document.getElementById("buffaloMozzarellaButton").innerHTML = "Remove";
    }
    }
buffaloMozzarellaButton.addEventListener("click", addBuffalomozzarellaTopping);

function addRocketTopping() {
    const rocketButton = document.getElementById("rocketButton");
    const rocketOnBase = document.getElementById("rocketOnBase");
    if(rocketOnBase.style.display === "block") {
        rocketOnBase.style.display = "none";
        document.getElementById("rocketButton").innerHTML = "Add";
    } else {
        rocketOnBase.style.display = "block";
        document.getElementById("rocketButton").innerHTML = "Remove";
    }
    }
rocketButton.addEventListener("click", addRocketTopping);

function addOnionTopping() {
    const onionButton = document.getElementById("onionButton");
    const onionOnBase = document.getElementById("onionOnBase");
    if(onionOnBase.style.display === "block") {
        onionOnBase.style.display = "none";
        document.getElementById("onionButton").innerHTML = "Add";
    } else {
        onionOnBase.style.display = "block";
        document.getElementById("onionButton").innerHTML = "Remove";
    }
    }
onionButton.addEventListener("click", addOnionTopping);




// function addPepperoniTopping() {
//     const pepperoniButton = document.getElementById("pepperoniButton");
//     const pepperoniOnBase = document.getElementById("pepperoniOnBase");
//     if(pepperoniOnBase.style.display === "block") {
//         pepperoniOnBase.style.display = "none";
//         document.getElementById("pepperoniButton").innerHTML = "Add";
//     } else {
//         pepperoniOnBase.style.display = "block";
//         document.getElementById("pepperoniButton").innerHTML = "Remove";
//     }
// }
//     pepperoniButton.addEventListener("click", addPepperoniTopping);
//     function addMushroomTopping() {
//     const mushroomButton = document.getElementById("mushroomButton");
//     const mushroomsOnBase = document.getElementById("mushroomsOnBase");
//     if(mushroomsOnBase.style.display === "block") {
//         mushroomsOnBase.style.display = "none";
//         document.getElementById("mushroomButton").innerHTML = "Add";
//     } else {
//         mushroomsOnBase.style.display = "block";
//         document.getElementById("mushroomButton").innerHTML = "Remove";
//     }
//     }
// mushroomButton.addEventListener("click", addMushroomTopping);
// function addPeppersTopping() {
//     const pepperButton = document.getElementById("pepperButton");
//     const peppersOnBase = document.getElementById("peppersOnBase");
//     if(peppersOnBase.style.display === "block") {
//         peppersOnBase.style.display = "none";
//         document.getElementById("peppersButton").innerHTML = "Add";
//     } else {
//         peppersOnBase.style.display = "block";
//         document.getElementById("peppersButton").innerHTML = "Remove";
//     }
//     }
// pepperButton.addEventListener("click", addPeppersTopping);
// function addOliveTopping() {
//     const oliveButton = document.getElementById("oliveButton");
//     const olivesOnBase = document.getElementById("olivesOnBase");
//     if(olivesOnBase.style.display === "block") {
//         olivesOnBase.style.display = "none";
//         document.getElementById("oliveButton").innerHTML = "Add";
//     } else {
//         olivesOnBase.style.display = "block";
//         document.getElementById("oliveButton").innerHTML = "Remove";
//     }
// }
// oliveButton.addEventListener("click", addOliveTopping)
// function addParmahamTopping() {
//     const parmaHamButton = document.getElementById("parmaHamButton");
//     const parmahamOnBase = document.getElementById("parmahamOnBase");
//     if(parmahamOnBase.style.display === "block") {
//         parmahamOnBase.style.display = "none";
//         document.getElementById("parmaHamButton").innerHTML = "Add";
//     } else {
//         parmahamOnBase.style.display = "block";
//         document.getElementById("parmaHamButton").innerHTML = "Remove";
//     }
//     }
// parmaHamButton.addEventListener("click", addParmahamTopping);
// function addEggTopping() {
//     const eggButton = document.getElementById("eggButton");
//     const eggOnBase = document.getElementById("eggOnBase");
//     if(eggOnBase.style.display === "block") {
//         eggOnBase.style.display = "none";
//         document.getElementById("eggButton").innerHTML = "Add";
//     } else {
//         eggOnBase.style.display = "block";
//         document.getElementById("eggButton").innerHTML = "Remove";
//     }
//     }
// eggButton.addEventListener("click", addEggTopping);
// function addBuffalomozzarellaTopping() {
//     const buffaloMozzarellaButton = document.getElementById("buffaloMozzarellaButton");
//     const buffalomozzarellaOnBase = document.getElementById("buffalomozzarellaOnBase");
//     if(buffalomozzarellaOnBase.style.display === "block") {
//         buffalomozzarellaOnBase.style.display = "none";
//         document.getElementById("buffaloMozzarellaButton").innerHTML = "Add";
//     } else {
//         buffalomozzarellaOnBase.style.display = "block";
//         document.getElementById("buffaloMozzarellaButton").innerHTML = "Remove";
//     }
//     }
// buffaloMozzarellaButton.addEventListener("click", addBuffalomozzarellaTopping);
// function addRocketTopping() {
//     const rocketButton = document.getElementById("rocketButton");
//     const rocketOnBase = document.getElementById("rocketOnBase");
//     if(rocketOnBase.style.display === "block") {
//         rocketOnBase.style.display = "none";
//         document.getElementById("rocketButton").innerHTML = "Add";
//     } else {
//         rocketOnBase.style.display = "block";
//         document.getElementById("rocketButton").innerHTML = "Remove";
//     }
//     }
// rocketButton.addEventListener("click", addRocketTopping);
// function addOnionTopping() {
//     const onionButton = document.getElementById("onionButton");
//     const onionOnBase = document.getElementById("onionOnBase");
//     if(onionOnBase.style.display === "block") {
//         onionOnBase.style.display = "none";
//         document.getElementById("onionButton").innerHTML = "Add";
//     } else {
//         onionOnBase.style.display = "block";
//         document.getElementById("onionButton").innerHTML = "Remove";
//     }
//     }
// onionButton.addEventListener("click", addOnionTopping);






// function addPepperoniTopping() {
//     const pepperoniButton = document.getElementById("pepperoniButton");
//     const pepperoniOnBase = document.getElementById("pepperoniOnBase");
//     if(pepperoniOnBase.style.display === "none") {
//         pepperoniOnBase.style.display = "block";
//     } else {
//         pepperoniOnBase.style.display = "none";
//     }
// }
//     pepperoniButton.addEventListener("click", addPepperoniTopping)
// function addMushroomTopping() {
//     const mushroomButton = document.getElementById("mushroomButton");
//     const mushroomsOnBase = document.getElementById("mushroomsOnBase");
//     if(mushroomsOnBase.style.display === "none") {
//         mushroomsOnBase.style.display = "block";
//     } else {
//         mushroomsOnBase.style.display = "none";
//     }
//     }
// mushroomButton.addEventListener("click", addMushroomTopping);
// function addPeppersTopping() {
//     const pepperButton = document.getElementById("pepperButton");
//     const peppersOnBase = document.getElementById("peppersOnBase");
//     if(peppersOnBase.style.display === "none") {
//         peppersOnBase.style.display = "block";
//     } else {
//         peppersOnBase.style.display = "none";
//     }
//     }
// pepperButton.addEventListener("click", addPeppersTopping);
// function addOliveTopping() {
//     const oliveButton = document.getElementById("oliveButton");
//     const olivesOnBase = document.getElementById("olivesOnBase");
//     if(olivesOnBase.style.display === "none") {
//         olivesOnBase.style.display = "block";
//     } else {
//         olivesOnBase.style.display = "none";
//     }
// }
// oliveButton.addEventListener("click", addOliveTopping)
// function addParmahamTopping() {
//     const parmaHamButton = document.getElementById("parmaHamButton");
//     const parmahamOnBase = document.getElementById("parmahamOnBase");
//     if(parmahamOnBase.style.display === "none") {
//         parmahamOnBase.style.display = "block";
//     } else {
//         parmahamOnBase.style.display = "none";
//     }
//     }
// parmaHamButton.addEventListener("click", addParmahamTopping);
// function addEggTopping() {
//     const eggButton = document.getElementById("eggButton");
//     const eggOnBase = document.getElementById("eggOnBase");
//     if(eggOnBase.style.display === "none") {
//         eggOnBase.style.display = "block";
//     } else {
//         eggOnBase.style.display = "none";
//     }
//     }
// eggButton.addEventListener("click", addEggTopping);
// function addBuffalomozzarellaTopping() {
//     const buffaloMozzarellaButton = document.getElementById("buffaloMozzarellaButton");
//     const buffalomozzarellaOnBase = document.getElementById("buffalomozzarellaOnBase");
//     if(buffalomozzarellaOnBase.style.display === "none") {
//         buffalomozzarellaOnBase.style.display = "block";
//     } else {
//         buffalomozzarellaOnBase.style.display = "none";
//     }
//     }
// buffaloMozzarellaButton.addEventListener("click", addBuffalomozzarellaTopping);
// function addRocketTopping() {
//     const rocketButton = document.getElementById("rocketButton");
//     const rocketOnBase = document.getElementById("rocketOnBase");
//     if(rocketOnBase.style.display === "none") {
//         rocketOnBase.style.display = "block";
//     } else {
//         rocketOnBase.style.display = "none";
//     }
//     }
// rocketButton.addEventListener("click", addRocketTopping);
// function addOnionTopping() {
//     const onionButton = document.getElementById("onionButton");
//     const onionOnBase = document.getElementById("onionOnBase");
//     if(onionOnBase.style.display === "none") {
//         onionOnBase.style.display = "block";
//     } else {
//         onionOnBase.style.display = "none";
//     }
//     }
// onionButton.addEventListener("click", addOnionTopping);