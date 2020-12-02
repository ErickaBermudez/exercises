def canCompleteCircuit(gas, cost):
    numberOfStations = len(gas)

    # checking where it is possible to start
    for currentStartStation in range(numberOfStations):
        currentGas = gas[currentStartStation]
        canStart = True  # with the current starting point, we can reach all the points

        # go through the circuit
        for station in range(numberOfStations):
            
            ###### to move in a circular array we use % #######
            currentStation = (currentStartStation + station) % numberOfStations
            nextStation = (currentStation + 1) % numberOfStations
            # reference of this: https://www.geeksforgeeks.org/circular-array/
            ####################################################

            # let's check what happens if we try to go to the next station
            currentGas -= cost[currentStation]
            # if the cost is greater than our current gas, we cannot afford it
            # therefore the currentStartStation is not an option anymore
            if currentGas < 0:
                canStart = False  # this starting point is no longer suitable
                break  # <-- we try another startStation

            # if we could go to the next, we are allowed to put more gas
            currentGas += gas[nextStation]

        # if we finish the circuit succesfully, we can start at the currentStartStation
        # and we don't need to continue checking
        if canStart:
            return currentStartStation

    # if we go through all the options to start and we don't find any solution
    return -1


# example 
startAt = canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1])
if startAt > 0:
    print(startAt)
else:
    print("We don't have enough gas </3")