//Objective is to find the smallest time difference between any two times
//in a given list of the form of "HH:MM"

let timePoints = ["23:59","00:00"]


//O(nlogn) solution that sorts the times first then maps then out by how many
//total minutes each one accumulates to.

let minDiff = Infinity
timePoints.sort()
    
//Map out the times based on number of minutes
timePoints = timePoints.map(string => {
    let temp = string.split(':')
    return (Number(temp[0]) * 60) + Number(temp[1])
})
    
//Push in '24:00' for last comparison
timePoints.push(timePoints[0] + 1440)
    
//Compare times
for (let i = 1; i < timePoints.length; i++) {
    let time1 = timePoints[i]
    let time2 = timePoints[i - 1]
    minDiff = Math.min(minDiff, time1 - time2)
}
    
return minDiff
