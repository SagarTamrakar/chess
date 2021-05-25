var waiting_users = [{"username": "lyingOrange6", "skill": 62, "user_level": 2, "waiting_time": 4}, {"username": "betrayedSnipe6", "skill": 25, "user_level": 4, "waiting_time": 32}, {"username": "morbidDove1", "skill": 92, "user_level": 0, "waiting_time": 47}, {"username": "decimalCheese8", "skill": 94, "user_level": 4, "waiting_time": 82}, {"username": "lazySnail8", "skill": 29, "user_level": 2, "waiting_time": 47}, {"username": "shamefulBuzzard5", "skill": 72, "user_level": 2, "waiting_time": 51}, {"username": "giddyBuck3", "skill": 71, "user_level": 1, "waiting_time": 30}, {"username": "panickyToucan5", "skill": 23, "user_level": 2, "waiting_time": 62}, {"username": "cynicalCordial3", "skill": 26, "user_level": 2, "waiting_time": 15}, {"username": "zestyMagpie5", "skill": 26, "user_level": 2, "waiting_time": 46}, {"username": "dearEggs6", "skill": 47, "user_level": 2, "waiting_time": 88}, {"username": "grudgingPup3", "skill": 72, "user_level": 4, "waiting_time": 0}, {"username": "artisticMallard1", "skill": 75, "user_level": 3, "waiting_time": 42}, {"username": "solidSausage3", "skill": 9, "user_level": 1, "waiting_time": 24}, {"username": "awedAntelope0", "skill": 33, "user_level": 3, "waiting_time": 13}, {"username": "jealousBoars7", "skill": 28, "user_level": 2, "waiting_time": 84}, {"username": "pridefulBobolink8", "skill": 5, "user_level": 1, "waiting_time": 22}, {"username": "needyEagle6", "skill": 49, "user_level": 1, "waiting_time": 1}, {"username": "cockyBustard3", "skill": 88, "user_level": 4, "waiting_time": 15}, {"username": "pleasedBuck8", "skill": 64, "user_level": 4, "waiting_time": 63}, {"username": "hushedJaguar8", "skill": 77, "user_level": 1, "waiting_time": 47}, {"username": "pitifulCaribou6", "skill": 47, "user_level": 3, "waiting_time": 67}, {"username": "adoringSeafowl8", "skill": 53, "user_level": 3, "waiting_time": 74}, {"username": "peskyMandrill7", "skill": 53, "user_level": 4, "waiting_time": 21}, {"username": "kindSeafowl4", "skill": 44, "user_level": 4, "waiting_time": 72}, {"username": "shyCheetah0", "skill": 92, "user_level": 4, "waiting_time": 76}, {"username": "grizzledBoa6", "skill": 96, "user_level": 4, "waiting_time": 37}, {"username": "similarSeagull6", "skill": 51, "user_level": 3, "waiting_time": 48}, {"username": "obsessedMoth2", "skill": 10, "user_level": 1, "waiting_time": 79}, {"username": "sincereBoa1", "skill": 23, "user_level": 4, "waiting_time": 67}, {"username": "humorousHoopoe5", "skill": 4, "user_level": 0, "waiting_time": 33}, {"username": "thriftyLapwing1", "skill": 39, "user_level": 1, "waiting_time": 44}, {"username": "outlyingApricots1", "skill": 64, "user_level": 3, "waiting_time": 69}, {"username": "eagerCow2", "skill": 94, "user_level": 4, "waiting_time": 89}, {"username": "shyCockatoo9", "skill": 62, "user_level": 2, "waiting_time": 59}, {"username": "worriedChile9", "skill": 72, "user_level": 3, "waiting_time": 2}, {"username": "dopeyWhiting7", "skill": 37, "user_level": 2, "waiting_time": 5}, {"username": "cheerfulMoth9", "skill": 4, "user_level": 2, "waiting_time": 46}, {"username": "grudgingPorpoise3", "skill": 76, "user_level": 4, "waiting_time": 40}, {"username": "trustingOrange7", "skill": 80, "user_level": 4, "waiting_time": 72}, {"username": "dopeyChamois3", "skill": 80, "user_level": 0, "waiting_time": 50}, {"username": "peacefulGatorade4", "skill": 19, "user_level": 4, "waiting_time": 26}, {"username": "cruelEland7", "skill": 47, "user_level": 0, "waiting_time": 21}, {"username": "aboardWasp3", "skill": 12, "user_level": 4, "waiting_time": 34}, {"username": "grudgingGelding4", "skill": 75, "user_level": 1, "waiting_time": 36}, {"username": "cockyHare2", "skill": 41, "user_level": 0, "waiting_time": 56}, {"username": "guiltyPolenta9", "skill": 91, "user_level": 0, "waiting_time": 42}, {"username": "scornfulTacos5", "skill": 48, "user_level": 1, "waiting_time": 64}, {"username": "pluckyAntelope3", "skill": 93, "user_level": 0, "waiting_time": 88}, {"username": "holisticChough1", "skill": 25, "user_level": 3, "waiting_time": 78}]
var match_config = {"s_weight": 5, "l_weight": 25, "t_weight": 2}
var users = [];
var matchList=[];
// - username (str)
// - skill (int between 0-100)
// - user_level (int between 0-4)
// - waiting_time (int 0-90)
// var distance_score = s_weight * Δuser.skill + t_weight * Δuser.waiting_time + l_weight * Δuser.user_level
// var Δuser.skill = user1.skill - user2.skill //(same for waiting_time and user_level)


//here i am creating a function to calculate score = s_weight *user1.skill +t_weight * user1.skill + l_weight * user1.skill
//now we can arrage this score in increasing order and we know that two adjacent value in increasing order will have mininmum diiference that is least distace score
function calculateScore(){
    waiting_users.forEach( i => {
        {i.skill *=5,            
        i.user_level *=25,      
        i.waiting_time*=2,    
        i.username=i.username       
        var rating ={               
            username:i.username,    
            score:i.skill+i.user_level+i.waiting_time  
        }
    }
          users.push(rating);
    });
    users.sort((a,b)=>a.score-b.score);
};
function matchs(){
    for(var i=0;i<users.length-1;i++){
        if(i%2==0){
            var match = `${users[i].username} with ${users[i+1].username}`
            matchList.push(match);
        }
}
}

calculateScore();
matchs();
console.log(users);    // users with their score

console.log(matchList); // getting pairs of users with least distance score



