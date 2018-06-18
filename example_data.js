// (This example file has been slimmed down and reformatted for ibex 0.3-beta11.)

var shuffleSequence = seq("intro", sepWith("sep", seq(rshuffle("practice"), randomize(rshuffle(shuffle("a", "b", "c", "d", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10", 
                                                                                                       "f11", "f12", "f13", "f14", "f15", "f16", "f17", "f18", "f19", "f20", 
                                                                                                       "f21", "f22", "f23", "f24", "f25", "f26", "f27", "f28", "f29", "f30", 
                                                                                                       "f31", "f32", "f33", "f34", "f35", "f36", "f37", "f38", "f39", "f40",
                                                                                                       "f41", "f42", "f43", "44", "f45", "f46", "f47", "f48"))), "sr", "FinalCode")));
//var shuffleSequence = seq("intro", sepWith("sep", seq("practice", "sr", "FinalCode")));

var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", { transfer: 1000,
                   normalMessage: "Please wait for the next sentence.",
                   errorMessage: "Wrong. Please wait for the next sentence." },
    "AcceptabilityJudgment", { as: ["1", "2", "3", "4", "5", "6", "7"],
                               presentAsScale: true,
                               instructions: "Use number keys on keyboard, or click boxes to answer.",
                               leftComment: "(Bad)", rightComment: "(Good)" },
    "Question", { hasCorrect: true },
    "Message", { hideProgressBar: true },
    "Form", { hideProgressBar: true }
];

var manualSendResults = true;        

var counterOverride = 4;

var items = [

    ["sep", "Separator", { }],

    ["intro", "Form", { 
        html: { include: "example_intro.html" },
        validators: {
            age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],

  // Practice Items
    ["practice", "AcceptabilityJudgment", {s: "The barber that is so busy every day he wanted to give himself any break."}],  
    ["practice", "AcceptabilityJudgment", {s: "No journalist's assessment that the radical protesters could actually overtake the government was believed by the politicians."}],
    ["practice", "AcceptabilityJudgment", {s: "The scientist's theory that water can be found on the moon was believed by the public."}],
    ["practice", "AcceptabilityJudgment", {s: "The politicians's belief that no candidate from the east coast could win the election was believed by the citizens."}],
    ["practice", "AcceptabilityJudgment", {s: "No gyms that are frequented by the famous bodybuilders contains rusty machinery."}],

   
//Items
[["a", 1], "AcceptabilityJudgment", {s: "The slogan on the posters unsurprisingly was designed to get attention."}],
[["b", 1], "AcceptabilityJudgment", {s: "The slogan on the poster unsurprisingly was designed to get attention."}],
[["c", 1], "AcceptabilityJudgment", {s: "The slogan on the posters unsurprisingly were designed to get attention."}],
[["d", 1], "AcceptabilityJudgment", {s: "The slogan on the poster unsurprisingly were designed to get attention."}],
[["a", 2], "AcceptabilityJudgment", {s: "The picture on the fliers definitely was of a village church in the south of France."}],
[["b", 2], "AcceptabilityJudgment", {s: "The picture on the flier definitely was of a village church in the south of France."}],
[["c", 2], "AcceptabilityJudgment", {s: "The picture on the fliers definitely were of a village church in the south of France."}],
[["d", 2], "AcceptabilityJudgment", {s: "The picture on the flier definitely were of a village church in the south of France."}],
[["a", 3], "AcceptabilityJudgment", {s: "The mistake in the programs certainly was disastrous for the small software company."}],
[["b", 3], "AcceptabilityJudgment", {s: "The mistake in the program certainly was disastrous for the small software company."}],
[["c", 3], "AcceptabilityJudgment", {s: "The mistake in the programs certainly were disastrous for the small software company."}],
[["d", 3], "AcceptabilityJudgment", {s: "The mistake in the program certainly were disastrous for the small software company."}],
[["a", 4], "AcceptabilityJudgment", {s: "The label on the containers probably was a warning about the hazardous chemicals inside."}],
[["b", 4], "AcceptabilityJudgment", {s: "The label on the container probably was a warning about the hazardous chemicals inside."}],
[["c", 4], "AcceptabilityJudgment", {s: "The label on the containers probably were a warning about the hazardous chemicals inside."}],
[["d", 4], "AcceptabilityJudgment", {s: "The label on the container probably were a warning about the hazardous chemicals inside."}],
[["a", 5], "AcceptabilityJudgment", {s: "The problem in the stores ultimately was solved by firing the custodian."}],
[["b", 5], "AcceptabilityJudgment", {s: "The problem in the store ultimately was solved by firing the custodian."}],
[["c", 5], "AcceptabilityJudgment", {s: "The problem in the stores ultimately were solved by firing the custodian."}],
[["d", 5], "AcceptabilityJudgment", {s: "The problem in the store ultimately were solved by firing the custodian."}],
[["a", 6], "AcceptabilityJudgment", {s: "The name on the billboards probably was of a prominent local businessman."}],
[["b", 6], "AcceptabilityJudgment", {s: "The name on the billboard probably was of a prominent local businessman."}],
[["c", 6], "AcceptabilityJudgment", {s: "The name on the billboards probably were of a prominent local businessman."}],
[["d", 6], "AcceptabilityJudgment", {s: "The name on the billboard probably were of a prominent local businessman."}],
[["a", 7], "AcceptabilityJudgment", {s: "The crime in the suburbs doubtlessly was a reflection of the violence in today's society."}],
[["b", 7], "AcceptabilityJudgment", {s: "The crime in the suburb doubtlessly was a reflection of the violence in today's society."}],
[["c", 7], "AcceptabilityJudgment", {s: "The crime in the suburbs doubtlessly were a reflection of the violence in today's society."}],
[["d", 7], "AcceptabilityJudgment", {s: "The crime in the suburb doubtlessly were a reflection of the violence in today's society."}],
[["a", 8], "AcceptabilityJudgment", {s: "The defect in the appliances likely was unknown to consumers and government regulators."}],
[["b", 8], "AcceptabilityJudgment", {s: "The defect in the appliance likely was unknown to consumers and government regulators."}],
[["c", 8], "AcceptabilityJudgment", {s: "The defect in the appliances likely were unknown to consumers and government regulators."}],
[["d", 8], "AcceptabilityJudgment", {s: "The defect in the appliance likely were unknown to consumers and government regulators."}],
[["a", 9], "AcceptabilityJudgment", {s: "The citation on the notecards unfortunately was quite difficult to track down using the library's limited resources."}],
[["b", 9], "AcceptabilityJudgment", {s: "The citation on the notecard unfortunately was quite difficult to track down using the library's limited resources."}],
[["c", 9], "AcceptabilityJudgment", {s: "The citation on the notecards unfortunately were quite difficult to track down using the library's limited resources."}],
[["d", 9], "AcceptabilityJudgment", {s: "The citation on the notecard unfortunately were quite difficult to track down using the library's limited resources."}],
[["a", 10], "AcceptabilityJudgment", {s: "The advertisement on the skyscrapers typically was hard to read except from a long distance away."}],
[["b", 10], "AcceptabilityJudgment", {s: "The advertisement on the skyscraper typically was hard to read except from a long distance away."}],
[["c", 10], "AcceptabilityJudgment", {s: "The advertisement on the skyscrapers typically were hard to read except from a long distance away."}],
[["d", 10], "AcceptabilityJudgment", {s: "The advertisement on the skyscraper typically were hard to read except from a long distance away."}],
[["a", 11], "AcceptabilityJudgment", {s: "The traitor in the camps regrettably was passing information to the enemy through various secret methods."}],
[["b", 11], "AcceptabilityJudgment", {s: "The traitor in the camp regrettably was passing information to the enemy through various secret methods."}],
[["c", 11], "AcceptabilityJudgment", {s: "The traitor in the camps regrettably were passing information to the enemy through various secret methods."}],
[["d", 11], "AcceptabilityJudgment", {s: "The traitor in the camp regrettably were passing information to the enemy through various secret methods."}],
[["a", 12], "AcceptabilityJudgment", {s: "The flaw in the arguments usually was clear to everyone in the lecture hall after just five minutes."}],
[["b", 12], "AcceptabilityJudgment", {s: "The flaw in the argument usually was clear to everyone in the lecture hall after just five minutes."}],
[["c", 12], "AcceptabilityJudgment", {s: "The flaw in the arguments usually were clear to everyone in the lecture hall after just five minutes."}],
[["d", 12], "AcceptabilityJudgment", {s: "The flaw in the argument usually were clear to everyone in the lecture hall after just five minutes."}],
[["a", 13], "AcceptabilityJudgment", {s: "The door to the laboratories accidentally was left unlocked by the cleaning service."}],
[["b", 13], "AcceptabilityJudgment", {s: "The door to the laboratorie accidentally was left unlocked by the cleaning service."}],
[["c", 13], "AcceptabilityJudgment", {s: "The door to the laboratories accidentally were left unlocked by the cleaning service."}],
[["d", 13], "AcceptabilityJudgment", {s: "The door to the laboratorie accidentally were left unlocked by the cleaning service."}],
[["a", 14], "AcceptabilityJudgment", {s: "The memo from the supervisors unfortunately was about the delinquent tax return."}],
[["b", 14], "AcceptabilityJudgment", {s: "The memo from the supervisor unfortunately was about the delinquent tax return."}],
[["c", 14], "AcceptabilityJudgment", {s: "The memo from the supervisors unfortunately were about the delinquent tax return."}],
[["d", 14], "AcceptabilityJudgment", {s: "The memo from the supervisor unfortunately were about the delinquent tax return."}],
[["a", 15], "AcceptabilityJudgment", {s: "The check from the stockbrokers happily was a dividend on a long-term bond."}],
[["b", 15], "AcceptabilityJudgment", {s: "The check from the stockbroker happily was a dividend on a long-term bond."}],
[["c", 15], "AcceptabilityJudgment", {s: "The check from the stockbrokers happily were a dividend on a long-term bond."}],
[["d", 15], "AcceptabilityJudgment", {s: "The check from the stockbroker happily were a dividend on a long-term bond."}],
[["a", 16], "AcceptabilityJudgment", {s: "The key to the cells unsurprisingly was rusty from many years of disuse."}],
[["b", 16], "AcceptabilityJudgment", {s: "The key to the cell unsurprisingly was rusty from many years of disuse."}],
[["c", 16], "AcceptabilityJudgment", {s: "The key to the cells unsurprisingly were rusty from many years of disuse."}],
[["d", 16], "AcceptabilityJudgment", {s: "The key to the cell unsurprisingly were rusty from many years of disuse."}],
[["a", 17], "AcceptabilityJudgment", {s: "The letter from the investigators allegedly was received in San Francisco in late March."}],
[["b", 17], "AcceptabilityJudgment", {s: "The letter from the investigator allegedly was received in San Francisco in late March."}],
[["c", 17], "AcceptabilityJudgment", {s: "The letter from the investigators allegedly were received in San Francisco in late March."}],
[["d", 17], "AcceptabilityJudgment", {s: "The letter from the investigator allegedly were received in San Francisco in late March."}],
[["a", 18], "AcceptabilityJudgment", {s: "The entrance to the exhibits evidently was hard to locate on the diagram."}],
[["b", 18], "AcceptabilityJudgment", {s: "The entrance to the exhibit evidently was hard to locate on the diagram."}],
[["c", 18], "AcceptabilityJudgment", {s: "The entrance to the exhibits evidently were hard to locate on the diagram."}],
[["d", 18], "AcceptabilityJudgment", {s: "The entrance to the exhibit evidently were hard to locate on the diagram."}],
[["a", 19], "AcceptabilityJudgment", {s: "The warning from the experts unsurprisingly was a shock to the residents of the city."}],
[["b", 19], "AcceptabilityJudgment", {s: "The warning from the expert unsurprisingly was a shock to the residents of the city."}],
[["c", 19], "AcceptabilityJudgment", {s: "The warning from the experts unsurprisingly were a shock to the residents of the city."}],
[["d", 19], "AcceptabilityJudgment", {s: "The warning from the expert unsurprisingly were a shock to the residents of the city."}],
[["a", 20], "AcceptabilityJudgment", {s: "The bridge to the islands apparently was about ten miles off the main highway."}],
[["b", 20], "AcceptabilityJudgment", {s: "The bridge to the island apparently was about ten miles off the main highway."}],
[["c", 20], "AcceptabilityJudgment", {s: "The bridge to the islands apparently were about ten miles off the main highway."}],
[["d", 20], "AcceptabilityJudgment", {s: "The bridge to the island apparently were about ten miles off the main highway."}],
[["a", 21], "AcceptabilityJudgment", {s: "The gift from the visitors apparently was a beautiful clock from Germany."}],
[["b", 21], "AcceptabilityJudgment", {s: "The gift from the visitor apparently was a beautiful clock from Germany."}],
[["c", 21], "AcceptabilityJudgment", {s: "The gift from the visitors apparently were a beautiful clock from Germany."}],
[["d", 21], "AcceptabilityJudgment", {s: "The gift from the visitor apparently were a beautiful clock from Germany."}],
[["a", 22], "AcceptabilityJudgment", {s: "The path to the monuments happily was lined with lovely trees and flowers."}],
[["b", 22], "AcceptabilityJudgment", {s: "The path to the monument happily was lined with lovely trees and flowers."}],
[["c", 22], "AcceptabilityJudgment", {s: "The path to the monuments happily were lined with lovely trees and flowers."}],
[["d", 22], "AcceptabilityJudgment", {s: "The path to the monument happily were lined with lovely trees and flowers."}],
[["a", 23], "AcceptabilityJudgment", {s: "The message from the engineers regrettably was about the recent weakening to the building's structural supports."}],
[["b", 23], "AcceptabilityJudgment", {s: "The message from the engineer regrettably was about the recent weakening to the building's structural supports."}],
[["c", 23], "AcceptabilityJudgment", {s: "The message from the engineers regrettably were about the recent weakening to the building's structural supports."}],
[["d", 23], "AcceptabilityJudgment", {s: "The message from the engineer regrettably were about the recent weakening to the building's structural supports."}],
[["a", 24], "AcceptabilityJudgment", {s: "The gate to the pastures evidently was falling down due to disrepair."}],
[["b", 24], "AcceptabilityJudgment", {s: "The gate to the pasture evidently was falling down due to disrepair."}],
[["c", 24], "AcceptabilityJudgment", {s: "The gate to the pastures evidently were falling down due to disrepair."}],
[["d", 24], "AcceptabilityJudgment", {s: "The gate to the pasture evidently were falling down due to disrepair"}],

    
// FILLERS
["f1", "AcceptabilityJudgment", {s: "The waitress who sat the girls unsurprisingly was unhappy about all the noise."}],
["f2", "AcceptabilityJudgment", {s: "The dog that dug the hole unfortunately was covered in mud all over."}],
["f3", "AcceptabilityJudgment", {s: "The boy who played in the games apparently was more competitive than ever before."}],
["f4", "AcceptabilityJudgment", {s: "The mom who drove with the kid unsurprisingly was tired of the bickering in the car."}],
["f5", "AcceptabilityJudgment", {s: "The kid who hid the toys definitely was in a lot of trouble. "}],
["f6", "AcceptabilityJudgment", {s: "The policeman who patrolled the neighborhood evidently was mentioned in the newspaper."}],
["f7", "AcceptabilityJudgment", {s: "The goat who ate from the cans evidently was seen on the side of the road."}],
["f8", "AcceptabilityJudgment", {s: "The scientist who prepared for the experiment suddenly was scared about all the consequences."}],
["f9", "AcceptabilityJudgment", {s: "The student who wrote the professors likely was concerned about her low grade."}],
["f10", "AcceptabilityJudgment", {s: "The journalist who read the report apparently was investigated for fraudulent investigative journalism. "}],
["f11", "AcceptabilityJudgment", {s: "The boy who walked toward the dogs probably was scared about being bitten. "}],
["f12", "AcceptabilityJudgment", {s: "The woman who walked by the dog clearly was happy about the cross-country road trip."}],
["f13", "AcceptabilityJudgment", {s: "The nurse who called the doctors unsurprisingly was excited about the good news."}],
["f14", "AcceptabilityJudgment", {s: "The director who called the assistant suddenly was intrigued by the secret report."}],
["f15", "AcceptabilityJudgment", {s: "The artist who painted by the houses certainly was impressed with the stunning view."}],
["f16", "AcceptabilityJudgment", {s: "The director who called for the actor certainly was surprised about the exciting news. "}],
["f17", "AcceptabilityJudgment", {s: "The thief who stole the stashes obviously was scared of being caught red-handed."}],
["f18", "AcceptabilityJudgment", {s: "The author who read the book apparently was disappointed with the surprise ending."}],
["f19", "AcceptabilityJudgment", {s: "The solider who fought against the terrorists likely was surrounded by a team of insurgents. "}],
["f20", "AcceptabilityJudgment", {s: "The millionaire who drove past the car allegedly was pulled over for drunk driving. "}],
["f21", "AcceptabilityJudgment", {s: "The librarian who read the books certainly was surprised by the abrupt conclusion."}],
["f22", "AcceptabilityJudgment", {s: "The chef who prepared the meal evidently was unhappy about the quality of the ingredients. "}],
["f23", "AcceptabilityJudgment", {s: "The gardener who pruned around the hedges financially was unable to buy more plants."}],
["f24", "AcceptabilityJudgment", {s: "The athlete who kicked near the referee obviously was disappointed about the bad call."}],
["f25", "AcceptabilityJudgment", {s: "The ambassador who accompanied the soldier obviously was skeptically about the recent allegations."}],
["f26", "AcceptabilityJudgment", {s: "The officer who the detectives aiding reportedly was suspicious of the noise coming from the empty building."}],
["f27", "AcceptabilityJudgment", {s: "The sergeant who the corporal advised clearly was unhappily with the training regimen."}],
["f28", "AcceptabilityJudgment", {s: "The coach who nominating the athletes probably was surprised by the good news."}],
["f29", "AcceptabilityJudgment", {s: "The student who recommending the professor clearly was knowledgeable about current foreign affairs."}],
["f30", "AcceptabilityJudgment", {s: "The assistant who the secretaries disliking apparently was annoyed by all of the gossip in the office."}],
["f31", "AcceptabilityJudgment", {s: "The woman who the housewife insulted apparently was amusingly by the reaction from the guests."}],
["f32", "AcceptabilityJudgment", {s: "The businessman who annoyed the clients clearly was unhappy with tile final product."}],
["f33", "AcceptabilityJudgment", {s: "The candidate who humiliated the reporter surprisingly was electing into office for a second term."}],
["f34", "AcceptabilityJudgment", {s: "The detective who the lawyers notified allegedly was involving in a tax fraud investigation."}],
["f35", "AcceptabilityJudgment", {s: "The manager who the employee emailed definitely was pleasing with the positive responses."}],
["f36", "AcceptabilityJudgment", {s: "The accountant who contacted the lawyers evidently was unwillingly to cooperate with the police."}],
["f37", "AcceptabilityJudgment", {s: "The detective who accompanied the officer apparently was notifying about the crime several days earlier."}],
["f38", "AcceptabilityJudgment", {s: "The problem with the waiters was solving by firing the assistant manager."}],
["f39", "AcceptabilityJudgment", {s: "The assistant for the physics course was really young and in experiencing."}],
["f40", "AcceptabilityJudgment", {s: "The discussion about the new theory has becoming very seriously."}],
["f41", "AcceptabilityJudgment", {s: "The glow from the candles illuminating part of the room."}],
["f42", "AcceptabilityJudgment", {s: "The letter from the lawyers finally reaching the prisoner in April."}],
["f43", "AcceptabilityJudgment", {s: "The message from the teachers said that the protests would continuing."}],
["f44", "AcceptabilityJudgment", {s: "The search for the boys had to be abandoning when the weather got too bad."}],
["f45", "AcceptabilityJudgment", {s: "The author of the novels lovingly the movie adaptation of his work."}],
["f46", "AcceptabilityJudgment", {s: "The designer of the beautiful dresses knowing a lot about fashion."}],
["f47", "AcceptabilityJudgment", {s: "The gardener with the pretty flowers always talking to the delivery man."}],
["f48", "AcceptabilityJudgment", {s: "The sentence here is to make sure you are paying attention, so press '3'."}],





// MTurk Code

["sr", "__SendResults__", { }],
["FinalCode", "Form", {html:["div", ["p", "Thank you for participating. The survey is now completed."], ["p", "Your identifying code is: 726JH5"], ["p", "Please enter this code in the Mechanical Turk form for this study to receive payment. You can close this window now."]], continueMessage: null}],     
    
    
    
        

    
];
