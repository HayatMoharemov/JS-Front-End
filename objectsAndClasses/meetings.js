function meetingManager(strArr) {
    let meetings = {};

    for (meeting of strArr) {

        let[weekday, name] = meeting.split(' ')

        if (meetings[weekday]) {
            console.log(`Conflict on ${weekday}!`)
        }  else {
            meetings[weekday] = name
            console.log(`Scheduled for ${weekday}`)
        }
        
    }

    let entries = Object.entries(meetings)

    for(let [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}

meetingManager(
    ['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
)