var canCompleteCircuit = function(gas, cost) {

    if(gas === null || cost === null)
        return -1
    
    var numberOfStations = gas.length 
    
    for(var currentStartStation = 0; currentStartStation <  numberOfStations; currentStartStation++){
        var currentGas = gas[currentStartStation];
        var canStart = true;
        
        for(var station = 0; station <= numberOfStations; station++){
            var currentStation =  (currentStartStation + station) % numberOfStations;
            var nextStation = (currentStation + 1) % numberOfStations;
            
            currentGas -= cost[currentStation];
            
            if(currentGas < 0){
                canStart = false;
                break;
            }
            
            currentGas += gas[nextStation];
        }
        
        if(canStart)
            return currentStartStation;
    }
    
    return -1
    
};

var answer = canCompleteCircuit([3,3,4], [3,4,4]);

if(answer != -1)
    console.log("yes, start at ", answer);
else
    console.log("we can't complete the journey");


