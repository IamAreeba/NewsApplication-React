import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  article = [
    {
        "source": {
          "id": null,
          "name": "Deadline"
        },
        "author": "Armando Tinoco",
        "title": "Jack Axelrod Dies: ‘General Hospital,’ ‘Modern Family’ & ‘Transformers’ Actor Was 93 - Deadline",
        "description": "Jack Axelrod, the actor who played the role of Victor Jerome on General Hospital, has died. He was 93. Multiple reports indicate that Axelrod died on Nov. 28 of natural causes in Los Angeles. Axelr…",
        "url": "https://deadline.com/2023/12/jack-axelrod-dead-general-hospital-modern-family-transformers-actor-1235670323/",
        "urlToImage": "https://deadline.com/wp-content/uploads/2023/12/jack-axelrod-modern-family.jpg?w=1024",
        "publishedAt": "2023-12-17T03:05:00Z",
        "content": "Jack Axelrod, the actor who played the role of Victor Jerome on General Hospital, has died. He was 93.\r\nMultiple reports indicate that Axelrod died on Nov. 28 of natural causes in Los Angeles.\r\nAxelr… [+2106 chars]"
      },
      {
        "source": {
          "id": "cbs-news",
          "name": "CBS News"
        },
        "author": null,
        "title": "U.S. says its destroyer shot down 14 drones in Red Sea launched from Yemen - CBS News",
        "description": "Container shipping giant Maersk​ has ordered ships approaching the Red Sea to halt​ voyages after Houthi missile strikes on commercial ships in the area.",
        "url": "https://www.cbsnews.com/news/u-s-says-its-destroyer-shot-down-14-drones-in-red-sea-launched-from-yemen/",
        "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/12/16/048968f7-49e3-4011-8169-6cb6053da882/thumbnail/1200x630/df6feca3dd122221c2bc08ebf4d8c38c/gettyimages-1252253776.jpg?v=5382e209c94ee904b3a96a69f8ca0ce0",
        "publishedAt": "2023-12-17T02:46:00Z",
        "content": "An American destroyer on Saturday shot down more than a dozen drones in the Red Sea launched from Houthi-controlled areas of Yemen, the U.S. Central Command said.\r\n\"The Arleigh Burke-class guided mis… [+1762 chars]"
      },
      {
        "source": {
          "id": "espn",
          "name": "ESPN"
        },
        "author": "Eric Woodyard",
        "title": "Lions QB Jared Goff throws 3 first-half TDs against Broncos - ESPN",
        "description": "The Detroit Lions quarterback was excellent in the red zone on Saturday night.",
        "url": "https://www.espn.com/nfl/story/_/id/39128532/detroit-lions-sam-laporta-jared-goff-touchdown-broncos",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1217%2Fr1267310_1296x729_16%2D9.jpg",
        "publishedAt": "2023-12-17T02:40:00Z",
        "content": "DETROIT -- After a scoreless first quarter between Detroit and Denver, Lions rookie tight end Sam LaPorta broke the ice at 12:31 in the second quarter with a 19-yard touchdown on Saturday night.\r\nIt'… [+1111 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Official Website of the Ultimate Fighting Championship"
        },
        "author": null,
        "title": "UFC 296: Edwards vs Covington | Winner Interviews, Highlights And More From Las Vegas - UFC",
        "description": "See The Fight Results, Watch Post-Fight Interviews With The Winners And More From UFC 296: Edwards vs Covington, Live From The T-Mobile Arena In Las Vegas",
        "url": "https://www.ufc.com/news/ufc-296-edwards-vs-covington-results-highlights-winner-interviews",
        "urlToImage": "https://dmxg5wxfqgb4u.cloudfront.net/styles/card/s3/2023-12/GettyImages-1858548729.jpg?itok=Y5NuCzvR",
        "publishedAt": "2023-12-17T02:26:15Z",
        "content": "Irene Aldana defeats Karol Rosa by unanimous decision (29-28, 29-28, 29-28)\r\nIrene Aldana and Karol Rosa beat the heck out of one another for 15 minutes, throwing an insane number of strikes to set t… [+769 chars]"
      },
      {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "Doc Louallen",
        "title": "Check the Powerball winning numbers for Saturday's drawing with $535 million jackpot - USA TODAY",
        "description": "Powerball jackpot winning numbers for Dec. 15. Drawing now at $535 million.",
        "url": "https://www.usatoday.com/story/money/lottery/2023/12/16/powerball-winning-numbers/71938910007/",
        "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/18/USAT/71626984007-usatsi-21167783-168394671-lowres.jpg?crop=1023,576,x0,y0&width=1023&height=576&format=pjpg&auto=webp",
        "publishedAt": "2023-12-17T02:01:07Z",
        "content": "The Powerball jackpot for the next drawing on Saturday is now worth an estimated $535 million after no winner emerged from Wednesday's drawing.\r\nThe numbers will be chosen just after 11 p.m. ET Satur… [+3284 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Eonline.com"
        },
        "author": "Corinne Heller",
        "title": "Sisterhood of the Traveling Pants Stars Have a Full Reunion - E! NEWS",
        "description": "Blake Lively, Alexis Bledel, Amber Tamblyn and America Ferrera just had their first full public Sisterhood of the Traveling Pants reunion in years.",
        "url": "https://www.eonline.com/news/1391614/sisterhood-of-the-traveling-pants-stars-have-a-full-cast-reunion-that-will-lift-your-spirits",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/20231116/rs_1200x1200-231216162827-1200-sisterhood-of-the-traveling-pants-reunion-cjh-instagram-121523.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2023-12-17T00:57:00Z",
        "content": "Call us crazy, but it's scientifically impossible for an onscreen sisterhood to be as cute as this one.\r\nSisterhood of the Traveling Pants stars Blake Lively, Amber Tamblyn, Alexis Bledelreunited wit… [+787 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Fox Business"
        },
        "author": "Brie Stimson",
        "title": "Quaker Oats recalls granola bars, cereals over salmonella risk - Fox Business",
        "description": "Quaker Oats has recalled several of its granola bars and cereals because of a potential for salmonella contamination that could lead to illness.",
        "url": "https://www.foxbusiness.com/retail/quaker-oats-recalls-granola-bars-cereals-salmonella-risk",
        "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/12/0/0/quaker-oats.jpg?ve=1&tl=1",
        "publishedAt": "2023-12-17T00:34:00Z",
        "content": "Quaker Oats has recalled more than two dozen types of granola bars and cereals over a possible salmonella contamination risk.\r\nSalmonella is an organism that can cause  fever, diarrhea, nausea, abdo… [+1399 chars]"
      },
      {
        "source": {
          "id": "associated-press",
          "name": "Associated Press"
        },
        "author": "NAJIB JOBAIN, JULIA FRANKEL, SAMY MAGDY",
        "title": "Israel-Hamas war: Hostages mistakenly killed by Israeli troops were holding a white flag - The Associated Press",
        "description": "Prime Minister Benjamin Netanyahu says the mistaken killing of three Israeli hostages in Gaza by Israeli soldiers “broke my heart,” but there would be no change in Israel's military approach. Israeli military officials say the hostages who were shot had been …",
        "url": "https://apnews.com/article/israel-hamas-war-news-12-16-2023-7df1ec6f336d1cd357903d6b848a1a1a",
        "urlToImage": "https://dims.apnews.com/dims4/default/bc1887b/2147483647/strip/true/crop/8121x4568+0+423/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F8d%2F81%2Fefbe0708e6be35581a4ed82b73de%2Fe08d236b9edf4af3bccc0e16e316a9e6",
        "publishedAt": "2023-12-17T00:04:00Z",
        "content": "JERUSALEM (AP) Three Israeli hostages who were mistakenly shot by Israeli troops in the Gaza Strip had been waving a white flag and were shirtless when they were killed, military officials said Satur… [+8153 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT News Desk",
        "title": "Women, children among 61 migrants drown after shipwreck off Libya - Hindustan Times",
        "description": "61 migrants, including women and children, drowned after a \"tragic\" shipwreck off Libya, the International Organization for Migration in Libya said. | World News",
        "url": "https://www.hindustantimes.com/world-news/women-children-among-61-migrants-drown-after-shipwreck-off-libya-101702770221744.html",
        "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/12/16/1600x900/shipwreck_1702770577284_1702770584415.jpeg",
        "publishedAt": "2023-12-16T23:50:35Z",
        "content": "As many as 61 migrants, including women and children, drowned after a \"tragic\" shipwreck off Libya, the International Organization for Migration (IOM) in Libya said on social media platform X on Satu… [+1996 chars]"
      },
      {
        "source": {
          "id": "usa-today",
          "name": "USA Today"
        },
        "author": "Karissa Waddick",
        "title": "Trump's economic pitch resonates with some young voters at N.H. rally - USA TODAY",
        "description": "Former President Donald Trump held a rally Saturday at a college in New Hampshire. His economic message may resonate with young voters.",
        "url": "https://www.usatoday.com/story/news/politics/elections/2023/12/16/trump-dictator-for-day-voter-views-democracy/71922725007/",
        "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/11/18/USAT/71627064007-afp-afp-343-a-6-ha.jpg?crop=5567,3132,x0,y0&width=3200&height=1801&format=pjpg&auto=webp",
        "publishedAt": "2023-12-16T23:34:53Z",
        "content": "DURHAM, N.H. Young Republican and Democratic voters dont agree on much. But college students outside of former President Donald Trumps rally at the University of New Hampshire Saturday found common g… [+5863 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "CBS Sports"
        },
        "author": "David Cobb",
        "title": "Arizona vs. Purdue score: Live game updates, college basketball scores, NCAA top 25 highlights - CBS Sports",
        "description": "Arizona was the victim of Purdue's last victory vs. a top-ranked team 23 years ago",
        "url": "https://www.cbssports.com/college-basketball/news/arizona-vs-purdue-score-takeaways-no-3-boilermakers-stop-wildcats-for-first-win-vs-no-1-team-since-2000/live/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/12/17/33eebb25-c223-4a17-b3d1-d0e3a76e13ad/thumbnail/1200x675/ee0e77ab414bb5ef9ad189144066d4a6/usatsi-22120603-1.jpg",
        "publishedAt": "2023-12-16T23:23:03Z",
        "content": "No. 3 Purdue made its case to return to the top of the polls in college basketball as the Boilermakers outlasted No. 1 Arizona 92-84 on Saturday in Indianapolis to improve to 5-0 in Quad 1 games. The… [+1277 chars]"
      },
      {
        "source": {
          "id": "fox-news",
          "name": "Fox News"
        },
        "author": "Chris Pandolfo",
        "title": "NSFW: Capitol Hill rocked by sex tape scandal featuring famous Senate hearing room - Fox News",
        "description": "Capitol Hill was rocked by a sex tape scandal after an explicit video purporting to show two men engaged in sexual intercourse in a Senate hearing room was published by the Daily Caller.",
        "url": "https://www.foxnews.com/politics/capitol-hill-rocked-sex-tape-scandal-featuring-famous-senate-hearing-room",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/room-216-hart-senate-office-building.jpg",
        "publishedAt": "2023-12-16T22:35:00Z",
        "content": "Read this article for free!\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you are agreeing… [+3045 chars]"
      },
      {
        "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
        },
        "author": "Sarah E. Needleman, Kirsten Grind",
        "title": "Activision Blizzard to Pay More Than $50 Million to Settle Lawsuit That Spurred Microsoft's Takeover - The Wall Street Journal",
        "description": "California says settlement resolves discrimination and pay disparity claims; 'Call of Duty' maker says harassment allegations being withdrawn",
        "url": "https://www.wsj.com/tech/activision-blizzard-to-pay-around-50-million-to-settle-lawsuit-that-spurred-microsofts-takeover-4dc1178b",
        "urlToImage": "https://images.wsj.net/im-901587/social",
        "publishedAt": "2023-12-16T21:52:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Detroit Free Press"
        },
        "author": "Chris Solari",
        "title": "Tyson Walker helps Michigan State basketball destroy Baylor, 88-64 - Detroit Free Press",
        "description": "Michigan State basketball played its best game of the season, running No. 6 Baylor off the Little Caesars Arena floor in Detroit for a blowout win.",
        "url": "https://www.freep.com/story/sports/college/michigan-state/spartans/2023/12/16/michigan-state-basketball-game-baylor-bears-tyson-walker/71944184007/",
        "urlToImage": "https://www.freep.com/gcdn/authoring/authoring-images/2023/12/16/PDTF/71945302007-msu-12162023-kd-898.jpg?crop=1598,899,x0,y351&width=1598&height=899&format=pjpg&auto=webp",
        "publishedAt": "2023-12-16T21:43:15Z",
        "content": "It started exactly how Tom Izzo wanted: with Michigan State basketballs defense.\r\nAfter Baylor won the opening tip Saturday afternoon, the Spartans proceeded to lock down the Bears and force a tone-s… [+4463 chars]"
      },
      {
        "source": {
          "id": "techcrunch",
          "name": "TechCrunch"
        },
        "author": "Kyle Wiggers",
        "title": "Google's Gemini comes to more apps, Cruise slashes its workforce and Tesla issues a recall - TechCrunch",
        "description": "In this edition of TC's Week in Review (WiR) newsletter, we cover Google's Gemini model expanding, Cruise laying off employees and more.",
        "url": "https://techcrunch.com/2023/12/16/googles-gemini-comes-to-more-apps-cruise-slashes-its-workforce-and-tesla-issues-a-recall/",
        "urlToImage": "https://techcrunch.com/wp-content/uploads/2023/11/GettyImages-1497020096.jpg?resize=1200,741",
        "publishedAt": "2023-12-16T21:17:15Z",
        "content": "Hey, folks, welcome to Week in Review (WiR), TechCrunch's regular newsletter covering the major happenings in the tech-o-sphere — or most of them, anyway. As the world's largest AI conference, NeurIP… [+7681 chars]"
      },
      {
        "source": {
          "id": "axios",
          "name": "Axios"
        },
        "author": "Axios",
        "title": "Giuliani ordered to pay $148 million for defaming Georgia election workers - Axios",
        "description": null,
        "url": "https://www.axios.com/2023/12/15/rudy-giuliani-georgia-damages-trial-election-workers",
        "urlToImage": null,
        "publishedAt": "2023-12-16T20:57:43Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "New York Post"
        },
        "author": "Isabel Vincent",
        "title": "Italian cardinal once thought to be pope contender convicted of embezzling Vatican funds, gets 5 years in prison - New York Post ",
        "description": "A Vatican criminal court convicted a cardinal of embezzling millions",
        "url": "https://nypost.com/2023/12/16/news/vatican-court-convicts-cardinal-angelo-becciu-of-embezzlement/",
        "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/12/2023-vatican-media-handout-via-73820081.jpg?quality=75&strip=all&w=1024",
        "publishedAt": "2023-12-16T20:05:00Z",
        "content": "A Vatican criminal court convicted an Italian cardinal once thought to be a contender for pope of embezzlement and sentenced him to more than five years in prison in what has been dubbed the Holy See… [+1958 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Salon"
        },
        "author": "Nicole Karlis",
        "title": "Hospitals may have to ration care if COVID and flu surge continues, CDC warns - Salon",
        "description": "Some pediatric hospitals are already nearly as full as they were this time last year",
        "url": "https://www.salon.com/2023/12/16/hospital-may-have-to-ration-care-if-and-flu-surge-continues-warns/",
        "urlToImage": "https://mediaproxy.salon.com/width/1200/https://media.salon.com/2023/09/paramedics_taking_patient_on_stretcher_from_ambulance_to_hospital_1128171354.jpg",
        "publishedAt": "2023-12-16T19:53:00Z",
        "content": null
      },
      {
        "source": {
          "id": "al-jazeera-english",
          "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "World reacts to the death of Kuwait's Emir Sheikh Nawaf - Al Jazeera English",
        "description": "Many Gulf countries set aside a period of mourning for the emir's death, while others express their condolences.",
        "url": "https://www.aljazeera.com/news/2023/12/16/world-reacts-to-the-death-of-kuwaits-emir-sheikh-nawaf",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/12/image-1702746723.jpg?resize=1920%2C1080&quality=80",
        "publishedAt": "2023-12-16T19:52:30Z",
        "content": "The death of Kuwaits Emir Sheikh Nawaf al-Ahmad al-Jaber al-Sabah is being mourned by the countries in the Middle East and other parts of the world.\r\nSheikh Nawaf, who died at 86 earlier on Saturday,… [+3607 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Billboard"
        },
        "author": "Paul Grein",
        "title": "Kelly Clarkson Is a Double Winner Again at 2023 Daytime Emmys - Billboard",
        "description": "That's seven Daytime Emmys in her first four seasons for the versatile performer.",
        "url": "https://www.billboard.com/music/awards/kelly-clarkson-2023-daytime-emmys-double-winner-again-1235560306/",
        "urlToImage": "https://www.billboard.com/wp-content/uploads/2023/04/The-Kelly-Clarkson-Show-2022-billboard-1548.jpg?w=1024",
        "publishedAt": "2023-12-16T19:50:42Z",
        "content": "UPDATE (Dec. 16):Jennifer Nettles, who performed her song “Life Is Sweet” over the In Memoriam segment at the Daytime Emmys' primetime ceremony on Dec. 15, won an Emmy for that song the following aft… [+8008 chars]"
      }
  ]






// When making constructor in React must super class constructor as well. Constructor will run only when we make obj of that class
  constructor(){
    super()
    console.log("Hello i am a constructor from news component")

    // Making State object
    this.state = {
      articles : this.article
    }
  }


  render() {
    return (
      <div>
        <div className="container my-3 mb-3">
          <h2>NewsMonkey - Top Headlines</h2>

          <div className="row">
            {/* {this.state.articles.map((element) => {console.log(element) })} */}
            {this.state.articles.map((element) => { 
                return <div className="col-md-4" key={element.url}>
                <NewsItem  title = {element.title} description = {element.description} imgUrl = {element.urlToImage} newsUrl = {element.url} />
              </div>


            })}

            
         

          </div>
        
        </div>

      </div>
    )
  }
}

export default News
 