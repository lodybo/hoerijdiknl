# Hoe Rijd ik?

This repository is the source code for the experimental project supported with [Firebase](https://firebase.google.com).
I chose the famous "How's my driving" concept and took it to the web in an effort to create a web app that needs all kinds of functionality.

In short: hoerijdik.nl (how'smydriving.nl) is a web app where you can sign in with your license plate. You can then search for other license plates and leave a message to that person about his driving.
Your license plate *will* be visible, and I encourage you to be constructive rather than agressive.

An overview of the [Firebase](https://firebase.google.com) functionality used in this experiment:
* Database (duh)
* Authentication (to create and manage accounts)
* Hosting (duh)
* Push notifiactions (planned)

And more.

For more information, hit me up at [@lodybo](https://www.twitter.com/lodybo)

## Database structure
The database is structured like a JSON file because of Firebase's requirements. The overall structure is as follows:
````json
{
    accounts: [
        user-1: {
            name: "User 1",
            licensePlates: ["1-ABC-23"]   
        },
        user-2: {
            name: "User 2",
            licensePlates: ["2-DEF-45", "3-GHI-67"]
        }
    ],
    vehicles: [
        vehicle-1: {
            plate: "1-ABC-23",
            make: "Peugeot",
            model: "308",
            classification: "class-1",
            color: "brown"
        }
    ],
    classifications: [
        class-1: "hatchback",
        class-2: "city car",
        class-3: "sedan",
        class-4: "stationwagon",
        class-5: "SUV"
        class-6: "MPV"
    ],
    messages: [
        message-1: {
            date: {unix-timestamp},
            message: "string",
            account: "user-1"
        }
    ]
}
````