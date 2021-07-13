const express = require("express")
const app = express.Router()
const Athena = require(`${__dirname}/../../model/Athena`)

app.get("/api/pages/fortnite-game", async (req, res) => {
    var season
    if (req.headers["user-agent"]) {
        try {
            season = req.headers["user-agent"].split("-")[1].split(".")[0]
            if (season == 10) season = "x"
        } catch {
            season = 2
        }
    } else season = 2

    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenewsv2: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: "https://cdn.discordapp.com/attachments/847921831058997289/864316617487417344/InGameBanner.png",
                        tileImage: "https://cdn.discordapp.com/attachments/847921831058997289/864316617487417344/InGameBanner.png",
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "Roxy",
                        _type: "CommonUI Simple Message MOTD",
                        title: "Rift!",
                        body: "Welcome To Roxy, In-game with live events, cosmetics, & more",
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `Roxy-News-0`,
                        spotlight: false
                    }
                ]
            }
        },
        emergencynoticev2: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        body: "Welcome To Roxy, In-game with live events, cosmetics, & more",
                        title: "Roxy",
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
        shopCarousel: {
                "jcr:isCheckedOut": true,
                itemsList: {
                    _type: "ShopCarouselItemList",
                    items: [{
                        tileImage: `"https://cdn.discordapp.com/attachments/847921831058997289/864316617487417344/InGameBanner.png",`,
                        fullTitle: "Roxy",
                        hidden: false,
                        _type: "ShopCarouselItem",
                        landingPriority: 100,
                        action: "ShowOfferDetails",
                        offerId: null,
                        title: "Roxy"
                    }]
                }
            },
        dynamicbackgrounds: {
                "jcr:isCheckedOut": true,
                backgrounds: {
                    backgrounds: [
                        {
                            backgroundimage: 'https://cdn.discordapp.com/attachments/847921831058997289/863976001427996722/RoxyNiteInGameBanner.png',
                            stage: "worldcup",
                            _type: "DynamicBackground",
                            key: "lobby"
                        }
                    ],
                    "_type": "DynamicBackgroundList"
                },
                "_title": "dynamicbackgrounds",
                "_noIndex": false,
                "jcr:baseVersion": "a7ca237317f1e70712af90-59fe-4576-8f32-f80bf513c946",
                "_activeDate": "2020-07-06T06:00:00.000Z",
                "lastModified": "2021-06-22T13:53:48.402Z",
                "_locale": "en-US"
            },
    
    })
})


module.exports = app
