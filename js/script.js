let answer;
let followUpAnswer;

function handleSubmit() {
  event.preventDefault();  // prevent form from submitting and reloading the page
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let showHomeQuestions = false;
  let showHouseQuestions = false;
  let showAccidentQuestions = false;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      if (checkbox.value === "home") {
        showHomeQuestions = true;
      } else if (checkbox.value === "house") {
        showHouseQuestions = true;
      } else if (checkbox.value === "accident") {
        showAccidentQuestions = true;
      }
    }
  });

  if (showHomeQuestions && showHouseQuestions && showAccidentQuestions) {
    document.getElementById("home-insurance-headline").style.display = "block";
    document.getElementById("home-insurance-questionsRenting").style.display = "block";
    document.getElementById("home-insurance-questionsElectronics").style.display = "block";
    document.getElementById("home-insurance-questionsSudden").style.display = "block";
    document.getElementById("home-insurance-questionsCycle").style.display = "block";
    document.getElementById("house-insurance-headline").style.display = "block";
    document.getElementById("house-insurance-questionsFire").style.display = "block";
    document.getElementById("house-insurance-questionsStorm").style.display = "block";
    document.getElementById("house-insurance-questionsBug").style.display = "block";
    document.getElementById("house-insurance-questionsPipe").style.display = "block";
    document.getElementById("house-insurance-questionsWater").style.display = "block";
    document.getElementById("house-insurance-questionsRat").style.display = "block";
    document.getElementById("house-insurance-questionsBath").style.display = "block";
    document.getElementById("accident-insurance-headline").style.display = "block";
    document.getElementById("accident-insurance-questionsSum").style.display = "block";
    document.getElementById("accident-insurance-questionsInstant").style.display = "block";
    document.getElementById("accident-insurance-questionsBike").style.display = "block";
    document.getElementById("accident-insurance-questionsChew").style.display = "block";
    document.getElementById("accident-insurance-questionsTeeth").style.display = "block";
    document.getElementById("accident-insurance-questionsSport").style.display = "block";

  } else if (showHomeQuestions && showHouseQuestions) {
    document.getElementById("home-insurance-headline").style.display = "block";
    document.getElementById("home-insurance-questionsRenting").style.display = "block";
    document.getElementById("home-insurance-questionsElectronics").style.display = "block";
    document.getElementById("home-insurance-questionsSudden").style.display = "block";
    document.getElementById("home-insurance-questionsCycle").style.display = "block";
    document.getElementById("house-insurance-headline").style.display = "block";
    document.getElementById("house-insurance-questionsFire").style.display = "block";
    document.getElementById("house-insurance-questionsStorm").style.display = "block";
    document.getElementById("house-insurance-questionsBug").style.display = "block";
    document.getElementById("house-insurance-questionsPipe").style.display = "block";
    document.getElementById("house-insurance-questionsWater").style.display = "block";
    document.getElementById("house-insurance-questionsRat").style.display = "block";
    document.getElementById("house-insurance-questionsBath").style.display = "block";
  } else if (showHouseQuestions && showAccidentQuestions) {
    document.getElementById("house-insurance-headline").style.display = "block";
    document.getElementById("house-insurance-questionsFire").style.display = "block";
    document.getElementById("house-insurance-questionsStorm").style.display = "block";
    document.getElementById("house-insurance-questionsBug").style.display = "block";
    document.getElementById("house-insurance-questionsPipe").style.display = "block";
    document.getElementById("house-insurance-questionsWater").style.display = "block";
    document.getElementById("house-insurance-questionsRat").style.display = "block";
    document.getElementById("house-insurance-questionsBath").style.display = "block";
    document.getElementById("accident-insurance-headline").style.display = "block";
    document.getElementById("accident-insurance-questionsSum").style.display = "block";
    document.getElementById("accident-insurance-questionsInstant").style.display = "block";
    document.getElementById("accident-insurance-questionsBike").style.display = "block";
    document.getElementById("accident-insurance-questionsChew").style.display = "block";
    document.getElementById("accident-insurance-questionsTeeth").style.display = "block";
    document.getElementById("accident-insurance-questionsSport").style.display = "block";

  } else if (showHomeQuestions && showAccidentQuestions) {
    document.getElementById("home-insurance-headline").style.display = "block";
    document.getElementById("home-insurance-questionsRenting").style.display = "block";
    document.getElementById("home-insurance-questionsElectronics").style.display = "block";
    document.getElementById("home-insurance-questionsSudden").style.display = "block";
    document.getElementById("home-insurance-questionsCycle").style.display = "block";
    document.getElementById("accident-insurance-headline").style.display = "block";
    document.getElementById("accident-insurance-questionsSum").style.display = "block";
    document.getElementById("accident-insurance-questionsInstant").style.display = "block";
    document.getElementById("accident-insurance-questionsBike").style.display = "block";
    document.getElementById("accident-insurance-questionsChew").style.display = "block";
    document.getElementById("accident-insurance-questionsTeeth").style.display = "block";
    document.getElementById("accident-insurance-questionsSport").style.display = "block";

  } else if (showHouseQuestions) {
    document.getElementById("house-insurance-headline").style.display = "block";
    document.getElementById("house-insurance-questionsFire").style.display = "block";
    document.getElementById("house-insurance-questionsStorm").style.display = "block";
    document.getElementById("house-insurance-questionsBug").style.display = "block";
    document.getElementById("house-insurance-questionsPipe").style.display = "block";
    document.getElementById("house-insurance-questionsWater").style.display = "block";
    document.getElementById("house-insurance-questionsRat").style.display = "block";
    document.getElementById("house-insurance-questionsBath").style.display = "block";
  } else if (showHomeQuestions) {
    document.getElementById("home-insurance-headline").style.display = "block";
    document.getElementById("home-insurance-questionsRenting").style.display = "block";
    document.getElementById("home-insurance-questionsElectronics").style.display = "block";
    document.getElementById("home-insurance-questionsSudden").style.display = "block";
    document.getElementById("home-insurance-questionsCycle").style.display = "block";
  } else if (showAccidentQuestions) {
    document.getElementById("accident-insurance-headline").style.display = "block";
    document.getElementById("accident-insurance-questionsSum").style.display = "block";
    document.getElementById("accident-insurance-questionsInstant").style.display = "block";
    document.getElementById("accident-insurance-questionsBike").style.display = "block";
    document.getElementById("accident-insurance-questionsChew").style.display = "block";
    document.getElementById("accident-insurance-questionsTeeth").style.display = "block";
    document.getElementById("accident-insurance-questionsSport").style.display = "block";

  }

  document.querySelector('button[type="submit"]').style.display = "none";
  document.getElementById("insurance-form").style.display = "none";
  return false;
}

document.getElementById("insurance-form").addEventListener("submit", handleSubmit);


function saveAnswerRenting(userAnswer) {
  const recommendationRentingDiv = document.getElementById("recommendationRenting");

  if (userAnswer === "yes") {
    answer = "yes";
    const followUpQuestion = document.getElementById("follow-up-question");
    followUpQuestion.style.display = "block";
  } else if (userAnswer === "no") {
    answer = "no";
      recommendationRentingDiv.innerText = "uden glas og sanitet, da det enten dækket gennem dit boligforening eller gennem din husforsikring. Er det ikke tilfældet, kontakt da dit selskab.";
  } else {
    return;
  }

}

function saveFollowUpAnswer(userAnswer) {
  const recommendationRentingDiv = document.getElementById("recommendationRenting");

  if (userAnswer === "yes") {
    followUpAnswer = "yes";
    recommendationRentingDiv.innerText = "med dækning af glas og sanitet.";
  } else if (userAnswer === "no") {
    followUpAnswer = "no";
    recommendationRentingDiv.innerText = "uden glas og sanitet, da din udlejer har ansvaret for det.";
  } else {
    return;
  }

}

function saveAnswerElectronics(userAnswer) {
  const recommendationElectronicsDiv = document.getElementById("recommendationElectronics");

  if (userAnswer === "yes") {
    answer = "yes";
    recommendationElectronicsDiv.innerText = "med en udvidet elektronik forsikring.";
    followUpQuestion.style.display = "block";
  } else if (userAnswer === "no") {
    answer = "no";
    recommendationElectronicsDiv.innerText = "Uden en udvidet elektronik forsikring.";
  } else {
    return;
  }

}
function saveAnswerSudden(userAnswer) {
  const recommendationSuddenDiv = document.getElementById("recommendationSudden");

  if (userAnswer === "yes") {
    answer = "yes";
    recommendationSuddenDiv.innerText = "med en pludselig skade dækning.";
    followUpQuestion.style.display = "block";
  } else if (userAnswer === "no") {
    answer = "no";
    recommendationSuddenDiv.innerText = "Uden pludselig skade dækning.";
  } else {
    return;
  }

}

function saveAnswerCycle(userAnswer) {
  const recommendationCycleDiv = document.getElementById("recommendationCycle");

  if (userAnswer === "yes") {
    answer = "yes";
    recommendationCycleDiv.innerText = "med en udvidet cykeldækning.";
    followUpQuestion.style.display = "block";
  } else if (userAnswer === "no") {
    answer = "no";
    recommendationCycleDiv.innerText = "Uden udivdet cykeldækning.";
  } else {
    return;
  }
}


function saveAnswerFire(userAnswer) {
    const recommendationSuddenDiv = document.getElementById("recommendationFire");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationSuddenDiv.innerText = "med en branddækning.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationSuddenDiv.innerText = "Uden en branddækning.";
    } else {
      return;
    }
  
  } 
  function saveAnswerStorm(userAnswer) {
    const recommendationSuddenDiv = document.getElementById("recommendationStorm");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationSuddenDiv.innerText = " med dækning af storm.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationSuddenDiv.innerText = "uden dækning af storm.";
    } else {
      return;
    }
  
  } 

  function saveAnswerBug(userAnswer) {
    const recommendationSuddenDiv = document.getElementById("recommendationBug");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationSuddenDiv.innerText = "med svamp, insekt og rådskadedækning.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationSuddenDiv.innerText = "uden svamp, insekt og rådskadedækning.";
    } else {
      return;
    }
  
  } 

  function saveAnswerPipe(userAnswer) {
    const recommendationSuddenDiv = document.getElementById("recommendationPipe");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationSuddenDiv.innerText = "Med dækning af skjulte rør og stikledningeer.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationSuddenDiv.innerText = "Uden dækning af skjulte rør og stikledningeer.";
    } else {
      return;
    }
  
  } 
  function saveAnswerWater(userAnswer) {
    const recommendationSuddenDiv = document.getElementById("recommendationWater");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationSuddenDiv.innerText = "Med udvidet vand";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationSuddenDiv.innerText = "Uden udvidet vand.";
    } else {
      return;
    }
  
  } 

  function saveAnswerRat(userAnswer) {
    const recommendationSuddenDiv = document.getElementById("recommendationRat");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationSuddenDiv.innerText = "Med dækning mod rotter, mus og gnavere.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationSuddenDiv.innerText = "Uden dækning mod rotter, mus og gnavere.";
    } else {
      return;
    }
  
  } 

  function saveAnswerBath(userAnswer) {
    const recommendationSuddenDiv = document.getElementById("recommendationBath");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationSuddenDiv.innerText = "Med dækning af konsmetiske forskelle.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationSuddenDiv.innerText = "Uden dækning af konsmetiske forskelle.";
    } else {
      return;
    }
  
  } 

  function saveAnswerSum(userAnswer) {
    const recommendationSumDiv = document.getElementById("recommendationSum");
  
    if (userAnswer === "500") {
      answer = "500";
      recommendationSumDiv.innerText = "Med en invaliditetssum på 500.000";
    } else if (userAnswer === "600") {
      answer = "600";
      recommendationSumDiv.innerText = "Med en invaliditetssum på 600.000";
    } else if (userAnswer === "700") {
      answer = "700";
        recommendationSumDiv.innerText = "Med en invaliditetssum på 700.000";
    } else if (userAnswer === "800") {
      answer = "800";
        recommendationSumDiv.innerText = "Med en invaliditetssum på 800.000";
    } else if (userAnswer === "1000") {
      answer = "1000";
        recommendationSumDiv.innerText = "Med en invaliditetssum på 1,000,000";
    } else if (userAnswer === "1200") {
      answer = "1200";
        recommendationSumDiv.innerText = "Med en invaliditetssum på 1,200,000";
    } else if (userAnswer === "1400") {
      answer = "1400";
        recommendationSumDiv.innerText = "Med en invaliditetssum på 1,400,000";
    } else if (userAnswer === "1600") {
      answer = "1600";
        recommendationSumDiv.innerText = "Med en invaliditetssum på 1,600,000";
    } else if (userAnswer === "1800") {
      answer = "1800";
        recommendationSumDiv.innerText = "Med en invaliditetssum på 1,800,000";
    } else if (userAnswer === "2000") {
      answer = "2000";
        recommendationSumDiv.innerText = "Med en invaliditetssum på 2,000,000";
    } else {
      return;
    }
  }

  function saveAnswerInstant(userAnswer) {
    const recommendationInstantDiv = document.getElementById("recommendationInstant");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationInstantDiv.innerText = "med strakserstatning.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationInstantDiv.innerText = "uden strakserstatning.";
    } else {
      return;
    }
  }
  
  function saveAnswerBike(userAnswer) {
    const recommendationBikeDiv = document.getElementById("recommendationBike");
  
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationBikeDiv.innerText = "med dækning ved ulykke som fører af motorcykel/knallert.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationBikeDiv.innerText = "uden dækning ved ulykke som fører af motorcykel/knallert.";
    } else {
      return;
    }
  }
  
  function saveAnswerChew(userAnswer) {
    const recommendationChewDiv = document.getElementById("recommendationChew");
    
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationChewDiv.innerText = "med dækning af tyggeskader.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationChewDiv.innerText = "uden dækning af tyggeskader.";
    } else {
      return;
    }
  }
  
  function saveAnswerTeeth(userAnswer) {
    const recommendationTeethDiv = document.getElementById("recommendationTeeth");
    
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationTeethDiv.innerText = "med dækning af tandbehandlinger.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationTeethDiv.innerText = "uden dækning af tandbehandlinger.";
    } else {
      return;
    }
  }
  
  function saveAnswerSport(userAnswer) {
    const recommendationSportDiv = document.getElementById("recommendationSport");
    
    if (userAnswer === "yes") {
      answer = "yes";
      recommendationSportDiv.innerText = "med dækning ved ulykke under farlig sport.";
      followUpQuestion.style.display = "block";
    } else if (userAnswer === "no") {
      answer = "no";
      recommendationSportDiv.innerText = "uden dækning ved ulykke under farlig sport.";
    } else {
      return;
    }
  }  

function submitAll() {
    // call the displayRecommendations function to show the recommendations
    displayRecommendations();
  }
  
  function displayRecommendations() {
    // set the display style of the recommendation divs to block to make them visible

    // Display the home insurance recommendations

    document.getElementById("homeRecommendation").style.display = "block";
    document.getElementById("recommendationRenting").style.display = "block";
    document.getElementById("recommendationElectronics").style.display = "block";
    document.getElementById("recommendationSudden").style.display = "block";
    document.getElementById("recommendationCycle").style.display = "block";
    document.getElementById("indboTitle").style.display = "block";

    // Display the house insurance recommendations
    document.getElementById("husTitle").style.display = "block";
    document.getElementById("houseRecommendation").style.display = "block";
    document.getElementById("recommendationFire").style.display = "block";
    document.getElementById("recommendationStorm").style.display = "block";
    document.getElementById("recommendationBug").style.display = "block";
    document.getElementById("recommendationPipe").style.display = "block";
    document.getElementById("recommendationWater").style.display = "block";
    document.getElementById("recommendationRat").style.display = "block";
    document.getElementById("recommendationBath").style.display = "block";
    
    // Display the accident insurance recommendations


    document.getElementById("accidentRecommendation").style.display = "block";
    document.getElementById("recommendationSum").style.display = "block";
    document.getElementById("recommendationInstant").style.display = "block";
    document.getElementById("recommendationBike").style.display = "block";
    document.getElementById("recommendationChew").style.display = "block";
    document.getElementById("recommendationTeeth").style.display = "block";
    document.getElementById("recommendationSport").style.display = "block";
    document.getElementById("accidentTitle").style.display = "block";
  }
  

