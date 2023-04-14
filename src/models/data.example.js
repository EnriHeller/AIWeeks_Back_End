
    export default { date:{
        type: {
            time:{
                type: String,
            },
            days:{
                type: [String],
                enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            },
            part_day:{
                type: String,
                enum: ["Morning", "Afternoon", "Night"]
            },
        }
    }}

      /* const partialTask = {
            title: "Wash Car",
            notes: "My car is very dirty",
            type: "momentary",
            priority:"high",
            date:{
                time:"",
                day:"",
                part_day:"",
            },
            status: true
    } */

    
 /*      const tasks = [
        {
            title: "Take the dog for a walk",
            type: "momentary",
            priority:"medium",
            date:{
                time:"1h 30m",
                days:["Tuesday"],
                part_day:"Afternoon",
            },
            status: true
        },
        {
            title: "Work",
            type: "routine",
            priority: "high",
            date:{
                time:"2h",
                days:["Monday", "Wednesday"],
                part_day:"Morning",
            },
            status: true
        }, 
        {
            title: "Exercise",
            type: "routine",
            priority: "light",
            date:{
                time:"2h",
                days:["Monday", "Wednesday", "Friday"],
                part_day:"Night",
            },
            status: true
        } 
      ] */