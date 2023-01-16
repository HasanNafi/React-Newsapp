import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class newsComponent extends Component {
  articles = [
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Isaac Stanley-Becker, Rosalind S. Helderman",
        "title": "New details link George Santos to cousin of sanctioned Russian oligarch - The Washington Post",
        "description": "The New York congressman once claimed Andrew Intrater’s company was his “client.\" Another Intrater company allegedly made a deposit with a firm where Santos worked.",
        "url": "https://www.washingtonpost.com/politics/2023/01/16/george-santos-andrew-intrater-columbus-nova/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RPAEO6G2RRC22PCY36DEWDBW3Y.jpg&w=1440",
        "publishedAt": "2023-01-16T12:41:02Z",
        "content": "Comment on this story\r\nGeorge Santos, the freshman Republican congressman from New York who lied about his biography, has deeper ties than previously known to a businessman who cultivated close links… [+8570 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Death toll in Russian missile strike in Ukraine rises to 40 - Reuters.com",
        "description": "The death toll from a Russian missile strike in the Ukrainian city of Dnipro rose to 40 on Monday with dozens more missing, making it the deadliest civilian incident of Moscow's three-month campaign of hurling missiles at cities far from the front.",
        "url": "https://www.reuters.com/world/europe/russia-belarus-conduct-defensive-air-drills-sparking-fear-kyiv-new-offensive-2023-01-16/",
        "urlToImage": "https://www.reuters.com/resizer/3LyXujoME-8z75fPF40lwh_oafA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ODXHLFSIMZPT7ASXZ3P4GA5VL4.jpg",
        "publishedAt": "2023-01-16T11:57:00Z",
        "content": "DNIPRO/KYIV, Ukraine, Jan 16 (Reuters) - The death toll from a Russian missile strike in the Ukrainian city of Dnipro rose to 40 on Monday with dozens more missing, making it the deadliest civilian i… [+5150 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Nepal finds black boxes of aircraft after deadliest crash in 30 years - Reuters.com",
        "description": "Searchers found both the cockpit voice recorder and flight data recorder on Monday from a passenger flight that crashed killing at least 68 people in Nepal's worst plane accident in 30 years, officials said.",
        "url": "https://www.reuters.com/world/asia-pacific/search-resumes-four-people-missing-nepal-after-deadly-air-crash-2023-01-16/",
        "urlToImage": "https://www.reuters.com/resizer/qiUcWgdj9P1bYhkeJH9O0GRoVL0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2IYAG5GCE5L57DZIDCVR2CLFFA.jpg",
        "publishedAt": "2023-01-16T11:00:00Z",
        "content": "KATHMANDU, Jan 16 (Reuters) - Searchers found both the cockpit voice recorder and flight data recorder on Monday from a passenger flight that crashed killing at least 68 people in Nepal's worst plane… [+4234 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": null,
        "title": "Shares rise, yen climbs as BOJ battles bond bears - Reuters.com",
        "description": "Shares firmed on Monday as optimism over corporate earnings and China's reopening offset concerns the Bank of Japan (BOJ) might temper its super-sized stimulus policy at a pivotal meeting this week, while a holiday in U.S. markets made for thin trading.",
        "url": "https://www.reuters.com/markets/global-markets-wrapup-1-pix-2023-01-16/",
        "urlToImage": "https://www.reuters.com/resizer/qvRJkm4M1HMVsNyLXeqw3jewEy4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q64YDSGG3NI73PLLRPIPKCNODI.jpg",
        "publishedAt": "2023-01-16T09:49:00Z",
        "content": "SYDNEY/LONDON, Jan 16 (Reuters) - Shares firmed on Monday as optimism over corporate earnings and China's reopening offset concerns the Bank of Japan (BOJ) might temper its super-sized stimulus polic… [+4731 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Barbie Latza Nadeau",
        "title": "Mafia boss Matteo Messina Denaro, Italy's most wanted man, arrested in Sicily - CNN",
        "description": "Matteo Messina Denaro, one of the bosses of the Cosa Nostra Mafia in Sicily and Italy's most wanted man, has been arrested by police while being treated in a private health clinic in Palermo, prosecutor Maurizio de Lucia said Monday.",
        "url": "https://www.cnn.com/2023/01/16/europe/matteo-messina-denaro-arrested-italy-mafia-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230116092618-matteo-messina-denaro-011623.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-16T09:40:00Z",
        "content": "Matteo Messina Denaro, one of the bosses of the Cosa Nostra Mafia in Sicily and Italys most wanted man, has been arrested by police while being treated in a private health clinic in Palermo, prosecut… [+814 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Nouran Salahieh",
        "title": "Another atmospheric river lashes California, renewing flooding concerns in state where storms have left at least 19 dead - CNN",
        "description": "Another atmospheric river has arrived in storm-battered California, bringing renewed flooding fears, possible landslides and treacherous travel to the state Monday where a relentless string of storms has already delivered widespread damage and left at least 1…",
        "url": "https://www.cnn.com/2023/01/16/weather/california-flooding-atmospheric-river-monday/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230116105730-03-california-weather-011523.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-16T08:16:00Z",
        "content": "Another atmospheric river has arrived in storm-battered California, bringing renewed flooding fears, possible landslides and treacherous travel to the state Monday where a relentless string of storms… [+7905 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "The Last of Us: Sky Atlantic TV series of hit game praised by critics - BBC",
        "description": "It has been described as \"comfortably the best adaptation of a video game ever made\" that has been able to \"break the curse\" on gaming-TV crossovers.",
        "url": "https://www.bbc.com/news/entertainment-arts-64261582",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/A0E4/production/_128288114_fl_07_the_last_of_us_s01.jpg",
        "publishedAt": "2023-01-16T07:38:02Z",
        "content": "Critics have universally praised the TV adaptation of hit video game The Last of Us as it's made available in the UK.\r\nThe series is described as \"comfortably the best adaptation of a video game ever… [+4022 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "2023 NFL playoffs bracket: Divisional round lookahead, schedule as Bengals and Bills face off in AFC showdown - CBS Sports",
        "description": "What's on tap for the second round of the NFL playoffs",
        "url": "https://www.cbssports.com/nfl/news/2023-nfl-playoffs-bracket-divisional-round-lookahead-schedule-as-bengals-and-bills-face-off-in-afc-showdown/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/01/16/abbb3af4-16b6-409d-aceb-db8a0b507887/thumbnail/1200x675/cbe1fd9d46d7603197546576be95c508/josh-allen.jpg",
        "publishedAt": "2023-01-16T07:30:00Z",
        "content": "Super Wild Card Weekend was wild to say the least. Saturday, the San Francisco 49ers went on a 25-point run in the second half to defeat the rival Seattle Seahawks, and Trevor Lawrence threw four str… [+5556 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Ringer"
        },
        "author": "Danny Heifetz",
        "title": "Daniel Jones Is Real, and On Sunday, He Was Spectacular - The Ringer",
        "description": "What wasn’t clear to the Giants last offseason is crystalized now after an impressive wild-card win against the Vikings: No player embodies the new ethos in New York better than Jones, and it’s time to commit to him.",
        "url": "https://www.theringer.com/nfl/2023/1/16/23556937/new-york-giants-daniel-jones-is-real",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/Ef5OGCu5dR6vkUuIY4kGTz1vanU=/0x0:1200x628/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24363211/GiantsWildCardDJ_Getty_Ringer.jpg",
        "publishedAt": "2023-01-16T06:02:36Z",
        "content": "The first major decision the New York Giants made on their roster this offseason was to not invest in quarterback Daniel Jones. Back in April, the Giants had the chance to lock in Jones for the 2023 … [+10472 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "World Business Watch: Microsoft and Meta vacating offices in the U.S. | World News | English News - WION",
        "description": "Meta and Microsoft are separately vacating office buildings in Seattle and Bellevue in Washington. The move occurred due to change in the tech sector and sof...",
        "url": "https://www.youtube.com/watch?v=gGOybPjTJNg",
        "urlToImage": "https://i.ytimg.com/vi/gGOybPjTJNg/maxresdefault.jpg",
        "publishedAt": "2023-01-16T05:14:52Z",
        "content": null
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Jennifer Hansler, Kylie Atwood",
        "title": "American held in Iran launches hunger strike and writes to Biden asking him to do more for detainees - CNN",
        "description": "An American wrongfully detained in Iran is calling on President Joe Biden to take notice of US detainees there, launching a hunger strike Monday to mark seven years since he was left behind in a prisoner swap that brought other Americans home.",
        "url": "https://www.cnn.com/2023/01/16/politics/namazi-hunger-strike-iran/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/210527195814-06-siamak-namazi-family-photos.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-16T05:01:00Z",
        "content": "An American wrongfully detained in Iran is calling on President Joe Biden to take notice of US detainees there, launching a hunger strike Monday to mark seven years since he was left behind in a pris… [+4179 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Baltimore Ravens vs. Cincinnati Bengals | 2022 Super Wildcard Weekend Game Highlights - NFL",
        "description": "Check out our other channels:NFL Mundo https://www.youtube.com/mundonflNFL Brasil https://www.youtube.com/c/NFLBrasilOficialNFL UK https://www.youtube.com/ch...",
        "url": "https://www.youtube.com/watch?v=N2KhR0fxxP4",
        "urlToImage": "https://i.ytimg.com/vi/N2KhR0fxxP4/maxresdefault.jpg",
        "publishedAt": "2023-01-16T04:34:43Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "ESPN"
        },
        "author": "Kevin Seifert",
        "title": "Vikings' Kirk Cousins - Loss to Giants 'probably' toughest of career - ESPN",
        "description": "Vikings QB Kirk Cousins called Sunday's playoff exit at the hands of the Giants \"probably the toughest loss I've had in my career,\" noting Minnesota's 13-win regular season and looming free agents.",
        "url": "https://www.espn.com/nfl/story/_/id/35456683/kirk-cousins-loss-giants-probably-toughest-career-vikings-13-win-season",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0116%2Fr1118313_1296x729_16%2D9.jpg",
        "publishedAt": "2023-01-16T04:07:50Z",
        "content": "MINNEAPOLIS -- This season seemed different for Minnesota Vikings quarterback Kirk Cousins. His team won 13 regular-season games, by far the most in his career. In Kevin O'Connell, he linked up with … [+3498 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hollywood Reporter"
        },
        "author": "Laurie Brookins",
        "title": "15 Best-Dressed Stars at the Critics Choice Awards: Angela Bassett, Aubrey Plaza and More - Hollywood Reporter",
        "description": "Bassett brought the drama in a black velvet Christian Siriano gown, while Plaza and Thuso Mbedu sparkled in custom Louis Vuitton.",
        "url": "https://www.hollywoodreporter.com/lifestyle/style/critics-choice-awards-best-dressed-stars-angela-bassett-aubrey-plaza-1235300188/",
        "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/01/angela-bassett-aubrey-plaza-and-kerry-washington-Split-Getty-H-2023.jpg?w=1024",
        "publishedAt": "2023-01-16T03:44:50Z",
        "content": "Dramatic details were key to the style on the A-list attendees of Sunday night’s Critics Choice Awards at the Fairmont Century Plaza Hotel. From lush fabrications to a flurry of floral appliqués, a v… [+5437 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Benzinga"
        },
        "author": "Mehab Qureshi",
        "title": "Bitcoin Surges Above $21K, Ethereum, Dogecoin Rally Intact — Analyst Says This 'Could Awaken Some Dormant Long-Term Bulls' - Benzinga",
        "description": "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession.",
        "url": "https://www.benzinga.com/markets/cryptocurrency/23/01/30424910/bitcoin-surges-above-21k-ethereum-dogecoin-rally-intact-analyst-says-this-could-awaken-som",
        "urlToImage": "https://cdn.benzinga.com/files/images/story/2023/01/15/kanchanara-4kjjezdyo3m-unsplash.jpg?width=1200&height=800&fit=crop",
        "publishedAt": "2023-01-16T02:50:45Z",
        "content": "Major coins traded green on Sunday buoyed by renewed investor confidence that the Federal Reserve is managing inflation successfully without pushing the economy into recession. \r\n<table><tr><th>Crypt… [+2581 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Bradford Betz",
        "title": "Chinese military aircraft enter Taiwan’s air space, at least seventh time in past week, defense ministry says - Fox News",
        "description": "Taiwan's Defense Ministry says it detected four Chinese military aircraft and several vessels invading its air space Monday morning amid heightened tensions with the mainland.",
        "url": "https://www.foxnews.com/world/chinese-military-aircraft-enter-taiwans-air-space-seventh-time-past-week-defense-ministry-says",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/01/Taiwan-1.jpg",
        "publishedAt": "2023-01-16T02:34:00Z",
        "content": "Four Chinese military aircraft and several vessels were detected near Taiwan early Monday morning in the latest provocation of Beijing against the island nation. \r\nTaiwans Dense Ministry said four Pe… [+2576 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Jackie Wattles",
        "title": "SpaceX's most powerful rocket returns to flight and nails synchronized landing - CNN",
        "description": "SpaceX's Falcon Heavy rocket, the towering launch vehicle known for its boosters' aerial acrobatics and synchronized landings when returning to Earth, took to the skies Sunday, delivering national security payloads to orbit for the US military.",
        "url": "https://www.cnn.com/2023/01/15/business/spacex-falcon-heavy-launch-ussf-67-scn/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230115182457-03-spacex-launch-011523.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-01-16T02:31:00Z",
        "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nSpaceXs Falcon Heavy rocket, the towering launch vehic… [+4606 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ScienceAlert"
        },
        "author": "The Conversation",
        "title": "There's a Simple Way to Offset The Health Risks of Sitting All Day - ScienceAlert",
        "description": "To reduce the harmful health effects of sitting, take a 5-minute light walk every half-hour.",
        "url": "https://www.sciencealert.com/theres-a-simple-way-to-offset-the-health-risks-of-sitting-all-day",
        "urlToImage": "https://www.sciencealert.com/images/2023/01/YoungManSitsAtComputerInDarkeness.jpg",
        "publishedAt": "2023-01-16T00:58:00Z",
        "content": "To reduce the harmful health effects of sitting, take a 5-minute light walk every half-hour. That's the key finding of a new study that my colleagues and I published in the journal Medicine &amp; Sci… [+4218 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Joel Calfee",
        "title": "Prince Harry’s Team Took Over the Archewell Site to Congratulate Him on the Release of ‘Spare’ - Yahoo Life",
        "description": "Prince Harry's long-awaited memoir, Spare, has finally hit shelves, and in order to celebrate the Duke of Sussex's achievement, some of those who have worked...",
        "url": "https://www.yahoo.com/lifestyle/prince-harry-team-took-over-000500560.html",
        "urlToImage": "https://media.zenfs.com/en/purewow_185/2990cf3ac52852d67f6fef07f85358ca",
        "publishedAt": "2023-01-16T00:05:00Z",
        "content": "Prince Harry's long-awaited memoir, Spare, has finally hit shelves, and in order to celebrate the Duke of Sussex's achievement, some of those who have worked closely beside him decided to take over t… [+1600 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Police searching for missing woman from Brookfield - CBS Boston",
        "description": "Brittany Tee was last seen on Tuesday.",
        "url": "https://www.youtube.com/watch?v=UIbMU0VazI4",
        "urlToImage": "https://i.ytimg.com/vi/UIbMU0VazI4/hqdefault.jpg",
        "publishedAt": "2023-01-16T00:01:02Z",
        "content": null
    }
]
  constructor(){
    super();
    console.log("this is a constructor from news component")
    this.state = {
        articles: this.articles,
        loading:false
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2 className="my-3">News Daily - top headline</h2>
        <div className="row">
        {this.state.articles.map((element) => {
          return <div className="col-md-4" key = {element.url}>
          <NewsItem
            title={element.title.slice(0, 45)}
            description={element.description.slice(0,88)}
            imageUrl= {element.urlToImage}
            newsUrl = {element.url}
          />
        </div>
        })}
        </div>
      </div>
    );
  }
}

export default newsComponent;
