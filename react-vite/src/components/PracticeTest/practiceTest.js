const questions = [
    {
        id: 1,
        question: "What does a red traffic light mean?",
        options: ["Stop", "Go", "Slow down", "Yield"],
        answer: "Stop",
    },
    {
        id: 2,
        question: "When approaching a stop sign, you must...",
        options: [
            "Slow down but don’t stop",
            "Stop completely at the line",
            "Honk before crossing",
            "Only stop if traffic is coming",
        ],
        answer: "Stop completely at the line",
    },
    {
        id: 3,
        question: "A yellow traffic light means:",
        options: ["Speed up", "Stop if safe to do so", "Go", "Turn immediately"],
        answer: "Stop if safe to do so",
    },
    {
        id: 4,
        question: "What does a green arrow mean?",
        options: [
            "Stop and wait",
            "You may turn in the direction of the arrow",
            "Yield to all traffic and stop",
            "U-turns only",
        ],
        answer: "You may turn in the direction of the arrow",
    },
    {
        id: 5,
        question: "What should you do when you see a school bus stopped with flashing red lights?",
        options: [
            "Pass carefully",
            "Stop until lights stop flashing",
            "Honk to alert the driver",
            "Speed up to get around it",
        ],
        answer: "Stop until lights stop flashing",
    },
    {
        id: 6,
        question: "When driving in fog, you should use:",
        options: ["High beams", "Low beams", "Hazard lights only", "No lights"],
        answer: "Low beams",
    },
    {
        id: 7,
        question: "What does a yield sign mean?",
        options: [
            "Stop immediately",
            "Slow down and give right of way",
            "Accelerate quickly",
            "You have the right of way",
        ],
        answer: "Slow down and give right of way",
    },
    {
        id: 8,
        question: "When parallel parking, how far from the curb should you park?",
        options: ["Within 6 inches", "Within 18 inches", "Within 3 feet", "Within 5 feet"],
        answer: "Within 18 inches",
    },
    {
        id: 9,
        question: "If you miss your exit on the freeway, you should:",
        options: [
            "Back up carefully",
            "Stop immediately",
            "Continue to the next exit",
            "Make a U-turn",
        ],
        answer: "Continue to the next exit",
    },
    {
        id: 10,
        question: "What is the legal blood alcohol concentration (BAC) limit for drivers over 21?",
        options: ["0.02%", "0.05%", "0.08%", "0.1%"],
        answer: "0.08%",
    },
    {
        id: 11,
        question: "What should you do before changing lanes?",
        options: [
            "Check mirrors and blind spots",
            "Signal",
            "Check traffic",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 12,
        question: "What does a flashing red light mean?",
        options: ["Caution", "Same as a stop sign", "Yield", "Go if clear"],
        answer: "Same as a stop sign",
    },
    {
        id: 13,
        question: "What does a broken yellow line on the road mean?",
        options: [
            "No passing allowed",
            "Passing allowed when safe",
            "Traffic only goes one way",
            "Stop required",
        ],
        answer: "Passing allowed when safe",
    },
    {
        id: 14,
        question: "What is the hand signal for a right turn?",
        options: [
            "Left arm straight out",
            "Left arm bent upward",
            "Left arm bent downward",
            "Right arm waving",
        ],
        answer: "Left arm bent upward",
    },
    {
        id: 15,
        question: "When approaching a pedestrian in a crosswalk, drivers must:",
        options: [
            "Yield and stop if necessary",
            "Honk to warn them",
            "Speed up to pass",
            "Ignore them if the light is green",
        ],
        answer: "Yield and stop if necessary",
    },
    {
        id: 16,
        question: "What should you do if your brakes fail?",
        options: [
            "Pump the brakes and use the parking brake",
            "Turn off the car immediately",
            "Shift to a higher gear",
            "Jump out of the vehicle",
        ],
        answer: "Pump the brakes and use the parking brake",
    },
    {
        id: 17,
        question: "In which situation must you use headlights?",
        options: [
            "At night",
            "When visibility is low",
            "In bad weather",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 18,
        question: "When should you signal before turning?",
        options: ["100 feet", "50 feet", "25 feet", "150 feet"],
        answer: "100 feet",
    },
    {
        id: 19,
        question: "What should you do if an emergency vehicle is approaching with sirens?",
        options: [
            "Pull over to the right and stop",
            "Keep driving at the same speed",
            "Pull to the left side",
            "Stop in the middle of the road",
        ],
        answer: "Pull over to the right and stop",
    },
    {
        id: 20,
        question: "When driving behind another vehicle, you should follow at a distance of:",
        options: [
            "1 second",
            "2 seconds",
            "3 seconds or more",
            "Half a car length",
        ],
        answer: "3 seconds or more",
    },
    {
        id: 21,
        question: "What should you do when approaching a railroad crossing with flashing lights?",
        options: [
            "Stop and wait until lights stop flashing",
            "Speed up to cross quickly",
            "Proceed carefully without stopping",
            "Only stop if you see a train"
        ],
        answer: "Stop and wait until lights stop flashing",
    },
    {
        id: 22,
        question: "What does a solid white line on the road mean?",
        options: [
            "Lane changing is discouraged",
            "Passing is allowed",
            "Traffic flows in opposite directions",
            "Stop required"
        ],
        answer: "Lane changing is discouraged",
    },
    {
        id: 23,
        question: "When are you allowed to turn right on red?",
        options: [
            "After coming to a complete stop if no sign prohibits it",
            "Always without stopping",
            "Only when a police officer directs you",
            "Never"
        ],
        answer: "After coming to a complete stop if no sign prohibits it",
    },
    {
        id: 24,
        question: "When driving in rain, roads are most slippery:",
        options: [
            "After it has been raining for hours",
            "At the beginning of rainfall",
            "Only during heavy storms",
            "Rain doesn’t affect road conditions"
        ],
        answer: "At the beginning of rainfall",
    },
    {
        id: 25,
        question: "What is the speed limit in a school zone?",
        options: ["15 mph", "20 mph", "25 mph", "35 mph"],
        answer: "20 mph",
    },
    {
        id: 26,
        question: "What is hydroplaning?",
        options: [
            "Driving faster than the speed limit",
            "Your tires losing contact with the road on water",
            "Sudden braking on dry pavement",
            "Driving uphill too quickly"
        ],
        answer: "Your tires losing contact with the road on water",
    },
    {
        id: 27,
        question: "If a traffic signal is not working, you should treat the intersection as:",
        options: [
            "A green light",
            "A four-way stop",
            "A yield sign",
            "A pedestrian crossing"
        ],
        answer: "A four-way stop",
    },
    {
        id: 28,
        question: "When parking uphill with a curb, your wheels should be turned:",
        options: [
            "Toward the curb",
            "Straight ahead",
            "Away from the curb",
            "It doesn’t matter"
        ],
        answer: "Away from the curb",
    },
    {
        id: 29,
        question: "What should you do if your car starts to skid?",
        options: [
            "Brake hard immediately",
            "Steer in the direction of the skid",
            "Turn the wheel opposite the skid",
            "Accelerate quickly"
        ],
        answer: "Steer in the direction of the skid",
    },
    {
        id: 30,
        question: "When should you dim your high beam headlights?",
        options: [
            "When approaching another vehicle within 500 feet",
            "Only during fog",
            "Never, keep them on at all times",
            "Only in daylight"
        ],
        answer: "When approaching another vehicle within 500 feet",
    },
    {
        id: 31,
        question: "Who has the right of way at a four-way stop?",
        options: [
            "The driver who arrives first",
            "The driver on the left",
            "The largest vehicle",
            "The fastest vehicle"
        ],
        answer: "The driver who arrives first",
    },
    {
        id: 32,
        question: "What should you do if you see a 'Road Work Ahead' sign?",
        options: [
            "Slow down and be prepared to stop",
            "Ignore it",
            "Speed up to pass quickly",
            "Honk to alert workers"
        ],
        answer: "Slow down and be prepared to stop",
    },
    {
        id: 33,
        question: "When entering a freeway, you should:",
        options: [
            "Stop at the end of the ramp",
            "Match the speed of freeway traffic",
            "Enter at any speed",
            "Drive in reverse if missed"
        ],
        answer: "Match the speed of freeway traffic",
    },
    {
        id: 34,
        question: "If your vehicle begins to hydroplane, you should:",
        options: [
            "Accelerate quickly",
            "Turn sharply",
            "Ease off the gas pedal",
            "Brake hard"
        ],
        answer: "Ease off the gas pedal",
    },
    {
        id: 35,
        question: "What is the minimum safe following distance on dry roads?",
        options: ["1 second", "2 seconds", "3 seconds", "4 seconds"],
        answer: "3 seconds",
    },
    {
        id: 36,
        question: "What does a pentagon-shaped sign mean?",
        options: ["Stop", "Railroad crossing", "School zone/crossing", "Yield"],
        answer: "School zone/crossing",
    },
    {
        id: 37,
        question: "What is the correct action at a flashing yellow light?",
        options: [
            "Stop completely",
            "Proceed with caution",
            "Accelerate quickly",
            "Turn immediately"
        ],
        answer: "Proceed with caution",
    },
    {
        id: 38,
        question: "When are roads likely to be most slippery?",
        options: [
            "During a long dry period",
            "At the first rain after a dry spell",
            "At night only",
            "Only during snowstorms"
        ],
        answer: "At the first rain after a dry spell",
    },
    {
        id: 39,
        question: "What should you do if you approach a roundabout?",
        options: [
            "Yield to traffic already in the circle",
            "Enter without stopping",
            "Always stop before entering",
            "Drive the wrong way"
        ],
        answer: "Yield to traffic already in the circle",
    },
    {
        id: 40,
        question: "What does a diamond-shaped sign indicate?",
        options: [
            "Regulatory instructions",
            "Warning of potential hazards",
            "School zone",
            "Speed limit"
        ],
        answer: "Warning of potential hazards",
    },
    {
        id: 41,
        question: "What is the minimum age to obtain an Ohio Temporary Instruction Permit Identification Card?",
        options: [
            "14 years and 6 months old",
            "15 years old",
            "15 years and 6 months old",
            "16 years old"
        ],
        answer: "15 years and 6 months old",
    },
    {
        id: 42,
        question: "In Ohio, what does a solid yellow line on your side of the road mean?",
        options: [
            "You may pass other vehicles",
            "You cannot pass other vehicles",
            "The lane is for turning only",
            "You are in a construction zone"
        ],
        answer: "You cannot pass other vehicles",
    },
    {
        id: 43,
        question: "When passing another vehicle, how should you return to the right lane?",
        options: [
            "As soon as you pass the vehicle",
            "Wait until you can see the passed vehicle in your rearview mirror",
            "Signal and immediately return",
            "Wait until the vehicle flashes its lights at you"
        ],
        answer: "Wait until you can see the passed vehicle in your rearview mirror",
    },
    {
        id: 44,
        question: "When is it illegal to pass another vehicle on the right?",
        options: [
            "When the vehicle is turning left",
            "When on a one-way street",
            "When on a two-lane road",
            "When driving on a freeway"
        ],
        answer: "When on a two-lane road",
    },
    {
        id: 45,
        question: "What does a broken white line on the road mean?",
        options: [
            "Traffic is moving in opposite directions",
            "Lane changes are permitted",
            "You cannot pass",
            "You must stay in your lane"
        ],
        answer: "Lane changes are permitted",
    },
    {
        id: 46,
        question: "What is the proper way to make a left turn at an intersection?",
        options: [
            "Turn from the right lane",
            "Turn from the left lane and yield to oncoming traffic",
            "Turn without slowing down",
            "Make a wide turn into the right lane of the cross street"
        ],
        answer: "Turn from the left lane and yield to oncoming traffic",
    },
    {
        id: 47,
        question: "When leaving the curb, you should:",
        options: [
            "Signal and immediately pull out",
            "Signal, look over your shoulder, and yield to traffic",
            "Honk to alert other drivers",
            "Pull out without signaling if no cars are visible"
        ],
        answer: "Signal, look over your shoulder, and yield to traffic",
    },
    {
        id: 48,
        question: "What is the rule for parking near a fire hydrant in Ohio?",
        options: [
            "You can park within 5 feet",
            "You must park at least 10 feet away",
            "You can park right next to it",
            "You can park within 10 feet"
        ],
        answer: "You must park at least 10 feet away",
    },
    {
        id: 49,
        question: "What is Ohio's seat belt law for front-seat occupants?",
        options: [
            "Optional",
            "Required if you have a passenger",
            "Mandatory for all drivers and passengers",
            "Only required for those under 18"
        ],
        answer: "Mandatory for all drivers and passengers",
    },
    {
        id: 50,
        question: "What should you do if a tire blows out while you are driving?",
        options: [
            "Brake hard",
            "Steer firmly and ease off the gas",
            "Pull the steering wheel in the opposite direction",
            "Turn the car off"
        ],
        answer: "Steer firmly and ease off the gas",
    },
    {
        id: 51,
        question: "What is the law regarding using a cell phone for drivers under 18 in Ohio?",
        options: [
            "It is permitted for calls only",
            "It is a primary offense to use any electronic wireless communication device",
            "It is allowed for GPS use",
            "It is only restricted for texting"
        ],
        answer: "It is a primary offense to use any electronic wireless communication device",
    },
    {
        id: 52,
        question: "What does a flashing yellow arrow signal mean?",
        options: [
            "Stop and wait for a green arrow",
            "Yield to oncoming traffic and pedestrians before turning",
            "You have the right of way to turn",
            "You cannot turn"
        ],
        answer: "Yield to oncoming traffic and pedestrians before turning",
    },
    {
        id: 53,
        question: "What should you do if you are involved in a traffic crash?",
        options: [
            "Leave the scene immediately",
            "Stop, exchange information, and report it if necessary",
            "Only stop if there are injuries",
            "Speed away to avoid getting in trouble"
        ],
        answer: "Stop, exchange information, and report it if necessary",
    },
    {
        id: 54,
        question: "What is the minimum tread depth for tires in Ohio?",
        options: [
            "2/32 of an inch",
            "1/16 of an inch",
            "1/8 of an inch",
            "4/32 of an inch"
        ],
        answer: "2/32 of an inch",
    },
    {
        id: 55,
        question: "What does a red and white triangular sign mean?",
        options: [
            "Yield",
            "Stop",
            "School crossing",
            "Do not enter"
        ],
        answer: "Yield",
    },
    {
        id: 56,
        question: "What should you do if a driver is following too closely (tailgating) behind you?",
        options: [
            "Speed up to create distance",
            "Tap your brakes to warn them",
            "Pull over and let them pass",
            "Brake suddenly"
        ],
        answer: "Pull over and let them pass",
    },
    {
        id: 57,
        question: "What does a 'No Passing Zone' sign look like?",
        options: [
            "A yellow triangle",
            "A white circle with a red slash",
            "A yellow pennant-shaped sign",
            "A red octagon"
        ],
        answer: "A yellow pennant-shaped sign",
    },
    {
        id: 58,
        question: "What is the 'move over' law in Ohio?",
        options: [
            "You must move over one lane for stopped emergency vehicles",
            "You must stop for a school bus",
            "You must pull over to let faster traffic pass",
            "You must move over for construction vehicles"
        ],
        answer: "You must move over one lane for stopped emergency vehicles",
    },
    {
        id: 59,
        question: "What is the current recommended hand position on the steering wheel?",
        options: [
            "10 and 2 o’clock",
            "9 and 3 o’clock",
            "12 o’clock",
            "5 and 7 o’clock"
        ],
        answer: "9 and 3 o’clock",
    },
    {
        id: 60,
        question: "When should you use your horn?",
        options: [
            "To signal a friend",
            "To let others know you're upset",
            "To warn other drivers of a dangerous situation",
            "To get someone to speed up"
        ],
        answer: "To warn other drivers of a dangerous situation",
    },
    {
        id: 61,
        question: "In Ohio, what is the maximum speed limit on a state route outside of municipal corporations?",
        options: [
            "45 mph",
            "55 mph",
            "65 mph",
            "70 mph"
        ],
        answer: "55 mph",
    },
    {
        id: 62,
        question: "If you are being passed by another vehicle, you should:",
        options: [
            "Speed up to prevent them from passing",
            "Maintain your speed or slow down slightly",
            "Move into the other lane",
            "Honk your horn to show you are aware"
        ],
        answer: "Maintain your speed or slow down slightly",
    },
    {
        id: 63,
        question: "What does a circular-shaped traffic sign indicate?",
        options: [
            "A railroad crossing ahead",
            "A stop sign ahead",
            "A school zone",
            "Construction"
        ],
        answer: "A railroad crossing ahead",
    },
    {
        id: 64,
        question: "What should you do when approaching a merge lane on a highway?",
        options: [
            "Stop and wait for an opening",
            "Speed up to get ahead of traffic",
            "Adjust your speed to merge safely with traffic flow",
            "Drive on the shoulder until you find a gap"
        ],
        answer: "Adjust your speed to merge safely with traffic flow",
    },
    {
        id: 65,
        question: "What is the purpose of regulatory signs?",
        options: [
            "To warn of hazards",
            "To give directions to destinations",
            "To control traffic movement and indicate legal requirements",
            "To provide information"
        ],
        answer: "To control traffic movement and indicate legal requirements",
    },
    {
        id: 66,
        question: "What should you do if your gas pedal gets stuck?",
        options: [
            "Shift to neutral and turn off the engine",
            "Pump the brake pedal quickly",
            "Turn the steering wheel sharply",
            "Throw the car into reverse"
        ],
        answer: "Shift to neutral and turn off the engine",
    },
    {
        id: 67,
        question: "What does a double solid yellow line mean?",
        options: [
            "Traffic is moving in the same direction",
            "Passing is allowed in both directions",
            "Passing is not allowed in either direction",
            "The lane is a reversible lane"
        ],
        answer: "Passing is not allowed in either direction",
    },
    {
        id: 68,
        question: "Who has the right of way at an intersection without traffic lights or signs?",
        options: [
            "The driver on the left",
            "The driver on the right",
            "The largest vehicle",
            "The vehicle that arrives last"
        ],
        answer: "The driver on the right",
    },
    {
        id: 69,
        question: "What is the penalty for a first-time OVI (Operating a Vehicle Impaired) offense in Ohio?",
        options: [
            "A warning and a small fine",
            "Mandatory jail time, license suspension, and fine",
            "A simple fine",
            "Community service only"
        ],
        answer: "Mandatory jail time, license suspension, and fine",
    },
    {
        id: 70,
        question: "What is the proper procedure for a U-turn?",
        options: [
            "U-turns are illegal everywhere in Ohio",
            "Make a U-turn only when it is posted as legal",
            "Turn on your signal, check for traffic, and make a U-turn if it is safe and not prohibited",
            "U-turns are allowed only at intersections"
        ],
        answer: "Turn on your signal, check for traffic, and make a U-turn if it is safe and not prohibited",
    },
    {
        id: 71,
        question: "When must you stop for a school bus with flashing lights on a divided highway?",
        options: [
            "Only if you are traveling in the same direction as the bus",
            "You must stop regardless of your direction of travel",
            "You do not need to stop on a divided highway",
            "Only if there is a 'stop' sign on the median"
        ],
        answer: "Only if you are traveling in the same direction as the bus",
    },
    {
        id: 72,
        question: "What does a red circle with a slash through it mean?",
        options: [
            "No entry",
            "The action or symbol inside the circle is prohibited",
            "Stop ahead",
            "Yield ahead"
        ],
        answer: "The action or symbol inside the circle is prohibited",
    },
    {
        id: 73,
        question: "When should you use your parking brake?",
        options: [
            "Only when parking on a hill",
            "Only when the car is in neutral",
            "Every time you park your vehicle",
            "Only in an emergency"
        ],
        answer: "Every time you park your vehicle",
    },
    {
        id: 74,
        question: "What is the best way to handle a situation of road rage?",
        options: [
            "Engage with the other driver to resolve the conflict",
            "Avoid eye contact, ignore the driver, and create distance",
            "Speed up and get away as quickly as possible",
            "Honk and gesture back at them"
        ],
        answer: "Avoid eye contact, ignore the driver, and create distance",
    },
    {
        id: 75,
        question: "What is the purpose of an Ohio driver’s license restriction code?",
        options: [
            "To indicate the driver's height and weight",
            "To specify a medical condition",
            "To limit the type of vehicle a person can drive or the conditions under which they can drive",
            "To show the driver has a clean driving record"
        ],
        answer: "To limit the type of vehicle a person can drive or the conditions under which they can drive",
    },
    {
        id: 76,
        question: "What is the 'good samaritan' law in Ohio?",
        options: [
            "It requires you to help anyone in need on the road",
            "It protects those who provide reasonable assistance to injured people from liability",
            "It allows you to use your phone in an emergency",
            "It requires all drivers to carry first aid kits"
        ],
        answer: "It protects those who provide reasonable assistance to injured people from liability",
    },
    {
        id: 77,
        question: "What should you do if you are in an intersection and hear an emergency vehicle approaching?",
        options: [
            "Stop immediately where you are",
            "Speed up to clear the intersection",
            "Continue through the intersection and then pull over",
            "Pull over to the side of the road and stop"
        ],
        answer: "Continue through the intersection and then pull over",
    },
    {
        id: 78,
        question: "What does a solid white line and a broken white line side-by-side mean?",
        options: [
            "You can pass if you are on the side with the broken line",
            "You cannot pass at all",
            "Passing is only allowed for motorcycles",
            "You can pass if you are on the side with the solid line"
        ],
        answer: "You can pass if you are on the side with the broken line",
    },
    {
        id: 79,
        question: "What is the proper hand position on the steering wheel when backing up?",
        options: [
            "Left hand at 12 o'clock, right arm over the back of the passenger seat",
            "Both hands at 9 and 3 o'clock",
            "Left hand at 10 and 2 o'clock, right hand on the gear shifter",
            "Both hands at the bottom of the wheel"
        ],
        answer: "Left hand at 12 o'clock, right arm over the back of the passenger seat",
    },
    {
        id: 80,
        question: "What is the most common cause of traffic crashes?",
        options: [
            "Speeding",
            "Mechanical failure",
            "Driver error",
            "Poor road conditions"
        ],
        answer: "Driver error",
    },
    {
        id: 81,
        question: "When must you use your turn signal?",
        options: [
            "Only when other cars are around",
            "Only when turning left",
            "For all turns and lane changes",
            "You don't need to signal on back roads"
        ],
        answer: "For all turns and lane changes",
    },
    {
        id: 82,
        question: "In Ohio, what does a red 'X' traffic signal above your lane mean?",
        options: [
            "You may enter the lane with caution",
            "The lane is closed to you",
            "The lane is a toll lane",
            "The lane is for turning only"
        ],
        answer: "The lane is closed to you",
    },
    {
        id: 83,
        question: "What should you do if your vehicle goes into a skid on an icy road?",
        options: [
            "Slam on the brakes",
            "Turn into the skid and release the brake or accelerator",
            "Accelerate to regain traction",
            "Turn the wheel in the opposite direction of the skid"
        ],
        answer: "Turn into the skid and release the brake or accelerator",
    },
    {
        id: 84,
        question: "What is the law regarding passing a stopped school bus on a two-lane road in Ohio?",
        options: [
            "You must stop, regardless of your direction of travel",
            "You only need to stop if you are behind the bus",
            "You can pass if the bus is on the other side of the road",
            "You should slow down, but you don't have to stop"
        ],
        answer: "You must stop, regardless of your direction of travel",
    },
    {
        id: 85,
        question: "What is the 'No Zone' for large trucks and buses?",
        options: [
            "Areas where the driver's blind spots are",
            "Areas where you can legally pass them",
            "Areas where they can make a U-turn",
            "Areas where they can unload cargo"
        ],
        answer: "Areas where the driver's blind spots are",
    },
    {
        id: 86,
        question: "In Ohio, what is required to legally drive a motor vehicle?",
        options: [
            "Only a valid driver's license",
            "A valid driver's license and vehicle registration",
            "A valid driver's license, vehicle registration, and proof of insurance",
            "Just proof of insurance"
        ],
        answer: "A valid driver's license, vehicle registration, and proof of insurance",
    },
    {
        id: 87,
        question: "When is it legal to pass on the shoulder of the road in Ohio?",
        options: [
            "When the driver in front of you is turning left",
            "When traffic is backed up",
            "Never",
            "When directed by a police officer"
        ],
        answer: "Never",
    },
    {
        id: 88,
        question: "What should you do if you encounter a dust storm while driving?",
        options: [
            "Turn on your high beams",
            "Pull off the road and turn on your hazard lights",
            "Drive faster to get out of it",
            "Drive slower and use your turn signal"
        ],
        answer: "Pull off the road and turn on your hazard lights",
    },
    {
        id: 89,
        question: "What is the primary function of a rumble strip on the side of a road?",
        options: [
            "To alert drivers they are leaving the travel lane",
            "To measure vehicle speed",
            "To slow down traffic",
            "To provide traction in bad weather"
        ],
        answer: "To alert drivers they are leaving the travel lane",
    },
    {
        id: 90,
        question: "When driving in bad weather (rain, snow), you should:",
        options: [
            "Increase your following distance",
            "Maintain the same speed as usual",
            "Use your cruise control",
            "Follow close to the car in front of you"
        ],
        answer: "Increase your following distance",
    },
    {
        id: 91,
        question: "What is the purpose of anti-lock brakes (ABS)?",
        options: [
            "To make the car stop faster in all conditions",
            "To prevent the wheels from locking up during hard braking",
            "To automatically apply the brakes in an emergency",
            "To reduce brake pad wear"
        ],
        answer: "To prevent the wheels from locking up during hard braking",
    },
    {
        id: 92,
        question: "What does an orange sign with black letters or symbols mean?",
        options: [
            "A school zone",
            "A railroad crossing",
            "A construction or maintenance warning",
            "A destination guide"
        ],
        answer: "A construction or maintenance warning",
    },
    {
        id: 93,
        question: "What is the first thing you should do if you are in a crash?",
        options: [
            "Check for injuries and call for help if needed",
            "Take pictures of the damage",
            "Leave the scene immediately",
            "Call your insurance company first"
        ],
        answer: "Check for injuries and call for help if needed",
    },
    {
        id: 94,
        question: "In Ohio, what is the maximum number of people that can be in the front seat of a vehicle?",
        options: [
            "Two, including the driver",
            "Three, including the driver, as long as everyone has a seatbelt",
            "It depends on the vehicle",
            "There is no limit"
        ],
        answer: "Three, including the driver, as long as everyone has a seatbelt",
    },
    {
        id: 95,
        question: "When should you use the low gear in your car?",
        options: [
            "When driving on the highway",
            "When going downhill to use engine braking",
            "When driving on a flat road",
            "When you are low on gas"
        ],
        answer: "When going downhill to use engine braking",
    },
    {
        id: 96,
        question: "What is the correct procedure for a three-point turn?",
        options: [
            "Pull over to the left and turn around",
            "Turn into a driveway, back out, and turn around",
            "Turn, reverse, and turn again to reverse direction",
            "Make a quick U-turn"
        ],
        answer: "Turn, reverse, and turn again to reverse direction",
    },
    {
        id: 97,
        question: "What is the speed limit in a residential area in Ohio, unless otherwise posted?",
        options: [
            "20 mph",
            "25 mph",
            "35 mph",
            "45 mph"
        ],
        answer: "25 mph",
    },
    {
        id: 98,
        question: "What should you do to recover from steering into a shoulder or ditch?",
        options: [
            "Turn the wheel sharply back onto the road",
            "Take your foot off the gas and steer smoothly back onto the road",
            "Accelerate to get out quickly",
            "Brake hard to stop"
        ],
        answer: "Take your foot off the gas and steer smoothly back onto the road",
    },
    {
        id: 99,
        question: "When a driver has a Temporary Permit, who must be in the passenger seat?",
        options: [
            "A parent or legal guardian",
            "Any licensed driver",
            "A licensed driver age 21 or older",
            "A licensed driver age 18 or older"
        ],
        answer: "A licensed driver age 21 or older",
    },
    {
        id: 100,
        question: "What does an upside-down red triangle sign with a white border mean?",
        options: [
            "Stop",
            "Do not enter",
            "Yield",
            "Warning"
        ],
        answer: "Yield",
    },
];

export default questions;
