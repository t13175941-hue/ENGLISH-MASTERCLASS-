// This file holds all 400 questions. 
// We will fill these sections up one by one!

const database = {
      "A": [
        // === PARAJUMBLES (20 QUESTIONS) ===
        { 
            q: "Direction: Given below are four jumbled sentences. Select the option that gives their correct order.<br><br>A. He was possessed by an overwhelming desire to possess them all.<br>B. A man stood holding a pole with yellow, red, green and purple balloons flying from it.<br>C. The child was simply carried away by the rainbow glory of their silken colours.<br>D. But he well knew his parents would never buy him the balloons because they would say he was too old to play with such toys.", 
            opts: ["B, C, A, D", "B, A, C, D", "C, B, A, D", "C, A, B, D"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The merchant packed his wares carefully into the wooden crates.<br>B. A heavy storm began brewing just as the ship left the harbor.<br>C. He had spent months preparing for this overseas voyage.<br>D. However, nature had a completely different plan for his schedule.", 
            opts: ["C, A, B, D", "A, C, B, D", "A, B, C, D", "C, B, A, D"], 
            ans: 1 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. Consequently, the entire system crashed and data was lost.<br>B. The technician ignored the flashing red warning light on the server.<br>C. He assumed it was just a routine software glitch.<br>D. Within minutes, the cooling fans stopped operating entirely.", 
            opts: ["B, C, D, A", "B, D, C, A", "C, B, D, A", "B, C, A, D"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. She slowly opened the creaking door to the attic.<br>B. A thick layer of dust covered the forgotten furniture.<br>C. Emily had always been terrified of the dark spaces in the house.<br>D. Gathering her courage, she decided to finally investigate the noise.", 
            opts: ["C, D, A, B", "D, C, A, B", "C, A, D, B", "C, D, B, A"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The committee decided to implement the new policy immediately.<br>B. Several members voiced their concerns regarding the budget.<br>C. The meeting commenced promptly at nine in the morning.<br>D. Despite the objections, the chairman passed the resolution.", 
            opts: ["C, B, D, A", "C, A, B, D", "B, C, D, A", "C, B, A, D"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The eagle swooped down with incredible precision.<br>B. It had spotted its prey from hundreds of feet above.<br>C. The field mouse was completely unaware of the impending danger.<br>D. In a matter of seconds, the hunt was successfully concluded.", 
            opts: ["B, C, A, D", "C, B, A, D", "B, A, C, D", "A, B, C, D"], 
            ans: 1 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. Finally, he found the ancient manuscript hidden in a secret drawer.<br>B. He searched through the dusty library for three consecutive days.<br>C. The symbols on the cover matched the description in the legend.<br>D. Professor Vance was determined to prove his controversial theory.", 
            opts: ["D, B, A, C", "D, A, B, C", "B, D, A, C", "D, B, C, A"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The ingredients must be measured with absolute precision.<br>B. Baking a flawless soufflé is considered an art form.<br>C. Even a slight variation in temperature can ruin the texture.<br>D. Therefore, amateur chefs often avoid attempting this complex dessert.", 
            opts: ["B, A, C, D", "B, C, A, D", "A, B, C, D", "B, A, D, C"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The train screeched to an unexpected halt in the middle of nowhere.<br>B. Passengers began murmuring nervously among themselves.<br>C. A sudden announcement crackled through the broken intercom.<br>D. We had been traveling smoothly for over four hours.", 
            opts: ["D, A, B, C", "A, B, D, C", "D, B, A, C", "A, C, B, D"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. He realized his wallet was missing when he reached the counter.<br>B. The barista handed him the perfectly brewed espresso.<br>C. Panic set in as he frantically searched his coat pockets.<br>D. Arthur waited in the long line for exactly twenty minutes.", 
            opts: ["D, B, A, C", "D, A, B, C", "B, D, A, C", "D, B, C, A"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. They watered the sapling and secured it with a wooden stake.<br>B. The students dug a deep hole in the barren schoolyard.<br>C. It was an initiative to promote environmental awareness.<br>D. Carefully, they placed the young oak tree into the soil.", 
            opts: ["C, B, D, A", "B, D, A, C", "C, D, B, A", "B, C, D, A"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The detective closely examined the shattered glass on the floor.<br>B. It was evident that the intruder had entered through the window.<br>C. However, the alarm system showed no signs of being triggered.<br>D. He arrived at the crime scene shortly after midnight.", 
            opts: ["D, A, B, C", "D, B, A, C", "A, B, C, D", "D, A, C, B"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The software update was released to fix the critical security flaw.<br>B. Users were strongly advised to install it immediately.<br>C. Hackers had been exploiting the vulnerability for weeks.<br>D. Despite the warnings, many people delayed the installation process.", 
            opts: ["C, A, B, D", "A, C, B, D", "C, B, A, D", "A, B, C, D"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The marathon runners lined up at the starting point.<br>B. A loud gunshot signaled the beginning of the grueling race.<br>C. Months of intense training had led up to this single moment.<br>D. The crowd cheered enthusiastically as they surged forward.", 
            opts: ["C, A, B, D", "A, C, B, D", "C, B, A, D", "A, B, D, C"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. She possessed a rare ability to understand complex mathematics.<br>B. By the age of ten, she had already solved advanced equations.<br>C. Her teachers were frequently astounded by her rapid progress.<br>D. Maria was universally recognized as a child prodigy.", 
            opts: ["D, A, B, C", "D, B, A, C", "A, D, B, C", "D, A, C, B"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The ancient ruins were hidden deep within the dense jungle.<br>B. Explorers had searched for the lost city for over a century.<br>C. Finally, a satellite image revealed the strange stone structures.<br>D. It was a discovery that would rewrite the history books.", 
            opts: ["B, A, C, D", "B, C, A, D", "A, B, C, D", "B, A, D, C"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The negotiations between the two nations reached a stalemate.<br>B. Both sides refused to compromise on their primary demands.<br>C. The summit was organized to prevent an impending conflict.<br>D. As a result, the international community braced for the worst.", 
            opts: ["C, A, B, D", "C, B, A, D", "A, C, B, D", "C, A, D, B"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The artist applied the final strokes of vibrant blue paint.<br>B. He stepped back to admire his completed masterpiece.<br>C. The canvas had taken him three years of relentless effort.<br>D. It perfectly captured the chaotic beauty of the stormy ocean.", 
            opts: ["A, B, C, D", "C, A, B, D", "A, C, B, D", "A, B, D, C"], 
            ans: 1 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The financial markets crashed unexpectedly on Monday morning.<br>B. Investors scrambled to sell off their rapidly depreciating stocks.<br>C. Economic analysts struggled to pinpoint the exact cause.<br>D. Billions of dollars were wiped out in a matter of hours.", 
            opts: ["A, B, D, C", "A, D, B, C", "B, A, D, C", "A, B, C, D"], 
            ans: 0 
        },
        { 
            q: "Direction: Select the correct order.<br><br>A. The spacecraft entered the planet's gravitational pull.<br>B. It began transmitting high-resolution images back to Earth.<br>C. Scientists huddled around the monitors in absolute silence.<br>D. The mission had successfully reached its destination after five years.", 
            opts: ["D, A, B, C", "A, B, C, D", "D, B, A, C", "A, D, B, C"], 
            ans: 0 
        },

        // === SENTENCE REARRANGEMENT (20 QUESTIONS) ===
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>nightfall / began / cricketers / the / at / their / piercing / calls", 
            opts: ["At nightfall the cricketers began their piercing calls.", "The cricketers began their piercing calls at nightfall.", "The cricketers at nightfall began their piercing calls.", "Their piercing calls began the cricketers at nightfall."], 
            ans: 1 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>wisdom / experience / comes / with / age / and / usually", 
            opts: ["Wisdom and experience usually comes with age.", "Wisdom usually comes with age and experience.", "Age and experience usually comes with wisdom.", "Wisdom comes usually with age and experience."], 
            ans: 1 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>solution / impossible / entirely / the / to / find / is / almost", 
            opts: ["The solution is almost entirely impossible to find.", "To find the solution is entirely almost impossible.", "The solution is entirely almost impossible to find.", "It is almost entirely impossible to find the solution."], 
            ans: 0 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>efforts / success / continuous / the / is / result / of", 
            opts: ["Success is the result of continuous efforts.", "The success is result of continuous efforts.", "Success is of the result continuous efforts.", "Continuous efforts is the result of success."], 
            ans: 0 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>decisions / under / never / pressure / important / make / extreme", 
            opts: ["Make never important decisions under extreme pressure.", "Never make important decisions under extreme pressure.", "Under extreme pressure never make decisions important.", "Never make extreme decisions under important pressure."], 
            ans: 1 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>library / strictly / within / the / is / prohibited / talking", 
            opts: ["Talking is strictly prohibited within the library.", "The library is strictly prohibited within talking.", "Talking within the library is strictly prohibited.", "Strictly talking is prohibited within the library."], 
            ans: 2 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>storm / destroyed / completely / the / village / coastal / devastating", 
            opts: ["The coastal village completely destroyed the devastating storm.", "The devastating storm completely destroyed the coastal village.", "The storm completely destroyed the devastating coastal village.", "Completely the devastating storm destroyed coastal village."], 
            ans: 1 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>knowledge / true / ignorance / knowing / consists / your / in", 
            opts: ["True knowledge consists in knowing your ignorance.", "Knowing your ignorance consists in true knowledge.", "Your true knowledge consists in knowing ignorance.", "True ignorance consists in knowing your knowledge."], 
            ans: 0 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>apologize / mistake / hesitate / to / for / never / your", 
            opts: ["Never hesitate for your mistake to apologize.", "To apologize for your mistake never hesitate.", "Never hesitate to apologize for your mistake.", "Hesitate never to apologize for your mistake."], 
            ans: 2 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>mountains / beautifully / the / sunset / over / the / painted", 
            opts: ["The beautifully sunset painted over the mountains.", "The sunset painted beautifully over the mountains.", "The sunset beautifully painted over the mountains.", "Over the mountains painted the sunset beautifully."], 
            ans: 2 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>opportunity / knocks / door / once / the / only / at", 
            opts: ["Opportunity knocks at the door only once.", "The opportunity knocks only at door once.", "Opportunity knocks only once at the door.", "Once only opportunity knocks at the door."], 
            ans: 0 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>children / easily / new / absorb / information / young / very", 
            opts: ["Young children absorb very new information easily.", "Very young children absorb new information easily.", "Young children absorb new information very easily.", "Very young children easily absorb information new."], 
            ans: 1 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>investments / require / careful / planning / financial / all / and / research", 
            opts: ["Financial investments require all careful planning and research.", "All financial investments require careful planning and research.", "Careful planning and research require all financial investments.", "All financial planning require careful investments and research."], 
            ans: 1 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>technology / radically / lives / our / has / transformed / daily", 
            opts: ["Technology radically has transformed our daily lives.", "Our daily lives has transformed radically technology.", "Technology has transformed radically our daily lives.", "Technology has radically transformed our daily lives."], 
            ans: 3 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>patience / virtue / challenging / a / is / extremely / maintain / to", 
            opts: ["Patience is a virtue extremely challenging to maintain.", "Patience is an extremely challenging virtue to maintain.", "To maintain patience is a extremely challenging virtue.", "Patience is a extremely challenging virtue to maintain."], 
            ans: 1 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>mystery / unresolved / decades / the / remained / for / completely", 
            opts: ["The mystery remained completely unresolved for decades.", "The mystery for decades remained unresolved completely.", "Completely unresolved the mystery remained for decades.", "The completely unresolved mystery remained for decades."], 
            ans: 0 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>journey / single / thousand / miles / begins / a / step / with / of / a", 
            opts: ["A journey begins with a single step of a thousand miles.", "A single step begins with a journey of a thousand miles.", "A journey of a thousand miles begins with a single step.", "A thousand miles of a journey begins with a single step."], 
            ans: 2 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>environment / responsibility / protecting / moral / our / is / the / absolute", 
            opts: ["Protecting the environment is our absolute moral responsibility.", "Our absolute moral responsibility is the protecting environment.", "Protecting our environment is the absolute moral responsibility.", "The environment protecting is our moral absolute responsibility."], 
            ans: 0 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>courage / absence / not / fear / is / of / the / the", 
            opts: ["The courage is not the absence of fear.", "Courage is not the absence of the fear.", "Courage is not the absence of fear.", "The absence of fear is not the courage."], 
            ans: 2 
        },
        { 
            q: "Arrange the words to make a meaningful sentence:<br><br>suddenly / heavy / interrupted / downpour / match / the / cricket / the", 
            opts: ["The heavy downpour interrupted the cricket match suddenly.", "The heavy downpour suddenly interrupted the cricket match.", "Suddenly the cricket match interrupted the heavy downpour.", "The suddenly heavy downpour interrupted the cricket match."], 
            ans: 1 
        },

        // === OBJECT OR COMPLEMENT (30 QUESTIONS) ===
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The committee elected him <span class='highlight'>chairman</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>She aggressively kicked the <span class='highlight'>football</span> over the fence.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>After the long marathon, the athletes felt extremely <span class='highlight'>exhausted</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The manager quickly sent her a detailed <span class='highlight'>report</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>He drove the car <span class='highlight'>dangerously</span> fast on the highway.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 2 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The unexpected news made everyone in the room <span class='highlight'>speechless</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>My grandmother bought <span class='highlight'>me</span> a beautiful vintage watch.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>That exotic flower smells remarkably <span class='highlight'>sweet</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>They waited at the station <span class='highlight'>for three hours</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 2 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The angry professor slammed his <span class='highlight'>fist</span> on the wooden desk.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>Despite the criticism, she remained a dedicated <span class='highlight'>leader</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The jury found the defendant <span class='highlight'>guilty</span> on all charges.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>He painted the old wooden fence <span class='highlight'>blue</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>She cautiously opened the <span class='highlight'>envelope</span> with a knife.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The birds migrated <span class='highlight'>south</span> for the winter.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 2 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>They named their newborn daughter <span class='highlight'>Elizabeth</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The chef carefully tasted the boiling <span class='highlight'>soup</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The soup tasted unpleasantly <span class='highlight'>salty</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The dog barked <span class='highlight'>loudly</span> at the passing mailman.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 2 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>His constant complaining made his colleagues very <span class='highlight'>angry</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>She handed the <span class='highlight'>documents</span> to the receptionist.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>My best friend seems rather <span class='highlight'>upset</span> today.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>We consider this issue completely <span class='highlight'>resolved</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The children were playing <span class='highlight'>in the garden</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 2 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The heavy rain destroyed the entire <span class='highlight'>harvest</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>He became a successful <span class='highlight'>entrepreneur</span> at a young age.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>She painted <span class='highlight'>a masterpiece</span> using only watercolours.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 0 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The students listened <span class='highlight'>attentively</span> to the lecture.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 2 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>The community elected Mr. Smith <span class='highlight'>mayor</span> for the third time.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },
        { 
            q: "Identify whether the highlighted part is an Object, a Complement, or None of the above.<br><br>I found the mathematics exam extremely <span class='highlight'>difficult</span>.", 
            opts: ["Object", "Complement", "None of the above"], 
            ans: 1 
        },

        // === ARTICLES (10 QUESTIONS) ===
        { 
            q: "Choose the correct article to fill in the blank.<br><br>He is considered to be <span class='highlight'>___</span> honest man by everyone who knows him.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 1 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br>She has enrolled in <span class='highlight'>___</span> university located in the heart of the city.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 0 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br><span class='highlight'>___</span> Pacific Ocean is the largest and deepest of Earth's oceanic divisions.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 2 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br>We waited for over <span class='highlight'>___</span> hour before the train finally arrived.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 1 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br>I saw <span class='highlight'>___</span> one-eyed dog wandering aimlessly near the local market.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 0 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br><span class='highlight'>___</span> gold is a precious metal that has been highly valued throughout history.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 3 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br>He gave me <span class='highlight'>___</span> unique opportunity to showcase my talents on a global stage.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 0 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br>The tourists marveled at <span class='highlight'>___</span> beauty of the Taj Mahal at sunrise.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 2 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br>She is currently reading a book about <span class='highlight'>___</span> European history during the Renaissance.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 3 
        },
        { 
            q: "Choose the correct article to fill in the blank.<br><br>That is definitely <span class='highlight'>___</span> worst movie I have ever watched in a cinema.", 
            opts: ["A", "An", "The", "None of the Above"], 
            ans: 2 
        }
    ],

     "B": [
        // === NOUNS: COLLECTIVE, ABSTRACT & UNCOUNTABLE (10 QUESTIONS) ===
        { 
            q: "Which of the following sentences uses the correct form of the uncountable noun?", 
            opts: ["He bought new furnitures for his house.", "He bought new furniture for his house.", "He bought a new furnitures for his house.", "He bought new piece of furnitures for his house."], 
            ans: 1 
        },
        { 
            q: "Identify the correct noun phrase to complete the sentence: 'The lawyer gave me <span class='highlight'>___</span>.'", 
            opts: ["many valuable advices", "much valuable advices", "many valuable pieces of advice", "much valuable piece of advices"], 
            ans: 2 
        },
        { 
            q: "Select the sentence with the correct noun usage regarding luggage.", 
            opts: ["All his luggages were carefully packed.", "All his luggage were carefully packed.", "All his luggage was carefully packed.", "All his piece of luggages was carefully packed."], 
            ans: 2 
        },
        { 
            q: "Which collective noun correctly completes the sentence? 'We saw a <span class='highlight'>___</span> of lions on the safari.'", 
            opts: ["pride", "pack", "herd", "swarm"], 
            ans: 0 
        },
        { 
            q: "Which collective noun correctly completes the sentence? 'A <span class='highlight'>___</span> of owls sat in the ancient oak tree.'", 
            opts: ["murder", "parliament", "congregation", "gaggle"], 
            ans: 1 
        },
        { 
            q: "Identify the correct sentence containing an abstract noun.", 
            opts: ["His braveries in the battlefield were rewarded.", "His bravery in the battlefield was rewarded.", "His braverness in the battlefield was rewarded.", "His braveries in the battlefield was rewarded."], 
            ans: 1 
        },
        { 
            q: "Choose the grammatically correct sentence.", 
            opts: ["The sceneries of Kashmir are enchanting.", "The scenery of Kashmir are enchanting.", "The sceneries of Kashmir is enchanting.", "The scenery of Kashmir is enchanting."], 
            ans: 3 
        },
        { 
            q: "Complete the sentence with the correct noun form: 'The police have received several important <span class='highlight'>___</span>.'", 
            opts: ["informations", "pieces of information", "piece of informations", "information"], 
            ans: 1 
        },
        { 
            q: "Select the correct collective noun phrase.", 
            opts: ["A fleet of ships", "A fleet of ship", "A fleets of ships", "A fleets of ship"], 
            ans: 0 
        },
        { 
            q: "Which of the following abstract nouns is correctly derived from the verb 'know'?", 
            opts: ["Knowledgement", "Knowingness", "Knowledge", "Knowability"], 
            ans: 2 
        },

        // === NOUNS: SINGULAR & PLURAL EXCEPTIONS (15 QUESTIONS) ===
        { 
            q: "What is the correct plural form of the noun <span class='highlight'>'Crisis'</span>?", 
            opts: ["Crisises", "Crises", "Crisi", "Crisiss"], 
            ans: 1 
        },
        { 
            q: "What is the correct plural form of the noun <span class='highlight'>'Phenomenon'</span>?", 
            opts: ["Phenomenons", "Phenomena", "Phenomenas", "Phenomenon"], 
            ans: 1 
        },
        { 
            q: "What is the correct plural form of the noun <span class='highlight'>'Criterion'</span>?", 
            opts: ["Criterions", "Criteria", "Criterias", "Criterion"], 
            ans: 1 
        },
        { 
            q: "Which sentence uses the correct plural compound noun?", 
            opts: ["Both of his brother-in-laws are doctors.", "Both of his brothers-in-laws are doctors.", "Both of his brothers-in-law are doctors.", "Both of his brothers-in-law is doctors."], 
            ans: 2 
        },
        { 
            q: "Identify the correct plural form of <span class='highlight'>'Passer-by'</span>.", 
            opts: ["Passer-bys", "Passers-bys", "Passers-by", "Passer-byes"], 
            ans: 2 
        },
        { 
            q: "What is the correct plural form of <span class='highlight'>'Syllabus'</span>?", 
            opts: ["Syllabuses", "Syllabii", "Syllabi", "Syllabise"], 
            ans: 2 
        },
        { 
            q: "Choose the correct sentence.", 
            opts: ["The committee have issued its report.", "The committee has issued its report.", "The committees has issued its report.", "The committee has issued their report."], 
            ans: 1 
        },
        { 
            q: "Which of the following nouns is ALWAYS used in the plural form?", 
            opts: ["Mathematics", "News", "Scissors", "Billiards"], 
            ans: 2 
        },
        { 
            q: "Choose the correct sentence containing a plural noun.", 
            opts: ["Where is my spectacles?", "Where are my spectacle?", "Where is my spectacle?", "Where are my spectacles?"], 
            ans: 3 
        },
        { 
            q: "What is the correct plural form of <span class='highlight'>'Mouse'</span> (the animal)?", 
            opts: ["Mouses", "Mice", "Mices", "Meese"], 
            ans: 1 
        },
        { 
            q: "What is the correct plural form of <span class='highlight'>'Radius'</span>?", 
            opts: ["Radiuses", "Radia", "Radii", "Radius"], 
            ans: 2 
        },
        { 
            q: "Identify the correct sentence.", 
            opts: ["The cattles are grazing in the field.", "The cattle is grazing in the field.", "The cattle are grazing in the field.", "The cattles is grazing in the field."], 
            ans: 2 
        },
        { 
            q: "Identify the correct sentence.", 
            opts: ["The poultry has been fed.", "The poultry have been fed.", "The poultries has been fed.", "The poultries have been fed."], 
            ans: 1 
        },
        { 
            q: "What is the correct plural form of <span class='highlight'>'Commander-in-chief'</span>?", 
            opts: ["Commander-in-chiefs", "Commanders-in-chiefs", "Commanders-in-chief", "Commander-ins-chief"], 
            ans: 2 
        },
        { 
            q: "Which sentence is grammatically correct?", 
            opts: ["He bought two dozens apples.", "He bought two dozen apples.", "He bought two dozen of apples.", "He bought two dozens of apples."], 
            ans: 1 
        },

        // === NOUNS: POSSESSIVE CASE (10 QUESTIONS) ===
        { 
            q: "Which is the correct possessive form for a room belonging to multiple boys?", 
            opts: ["The boys room", "The boy's room", "The boys's room", "The boys' room"], 
            ans: 3 
        },
        { 
            q: "Identify the correct possessive form.", 
            opts: ["It is a women's college.", "It is a womens' college.", "It is a woman's college.", "It is a womens's college."], 
            ans: 0 
        },
        { 
            q: "Choose the grammatically correct sentence involving possession.", 
            opts: ["I went to my sister-in-law's house.", "I went to my sister's-in-law house.", "I went to my sisters-in-law's house.", "I went to my sister-in-laws' house."], 
            ans: 0 
        },
        { 
            q: "Select the sentence with the correct possessive punctuation.", 
            opts: ["This is somebody's else coat.", "This is somebody else's coat.", "This is somebody's else's coat.", "This is somebody elses coat."], 
            ans: 1 
        },
        { 
            q: "Which phrase correctly shows possession for a name ending in 's' (e.g., Charles)?", 
            opts: ["Charles's book", "Charles' book", "Charle's book", "Both A and B are acceptable"], 
            ans: 3 
        },
        { 
            q: "Identify the INCORRECT use of the possessive case.", 
            opts: ["The table's legs", "The legs of the table", "The dog's legs", "The men's legs"], 
            ans: 0 
        },
        { 
            q: "Choose the correct possessive form.", 
            opts: ["We need a weeks' leave.", "We need a week's leave.", "We need a weeks leave.", "We need a week leave."], 
            ans: 1 
        },
        { 
            q: "Choose the correct possessive form.", 
            opts: ["He did it for goodness's sake.", "He did it for goodness' sake.", "He did it for goodnes's sake.", "He did it for goodness sake."], 
            ans: 1 
        },
        { 
            q: "Which sentence correctly demonstrates joint possession?", 
            opts: ["John's and Mary's house is beautiful.", "John and Mary's house is beautiful.", "John and Marys' house is beautiful.", "John's and Mary house is beautiful."], 
            ans: 1 
        },
        { 
            q: "Which sentence correctly demonstrates separate possession?", 
            opts: ["John and Mary's cars are parked outside.", "John's and Mary's cars are parked outside.", "John's and Mary's car are parked outside.", "John and Mary cars are parked outside."], 
            ans: 1 
        },

        // === NOUNS: GENDER (5 QUESTIONS) ===
        { 
            q: "What is the feminine gender of <span class='highlight'>'Fox'</span>?", 
            opts: ["Foxess", "Vixen", "Foxine", "She-fox"], 
            ans: 1 
        },
        { 
            q: "What is the feminine gender of <span class='highlight'>'Duke'</span>?", 
            opts: ["Dukess", "Duchess", "Dukina", "Dame"], 
            ans: 1 
        },
        { 
            q: "What is the masculine gender of <span class='highlight'>'Ewe'</span>?", 
            opts: ["Ram", "Buck", "Stag", "Bull"], 
            ans: 0 
        },
        { 
            q: "Which of the following is considered a <span class='highlight'>Neuter Gender</span> noun?", 
            opts: ["Teacher", "Student", "Table", "Doctor"], 
            ans: 2 
        },
        { 
            q: "What is the feminine gender of <span class='highlight'>'Emperor'</span>?", 
            opts: ["Emperess", "Empress", "Emperorina", "Queen"], 
            ans: 1 
        },

        // === ADJECTIVES: ORDER OF ADJECTIVES (10 QUESTIONS) ===
        { 
            q: "Which sequence correctly follows the standard order of adjectives?", 
            opts: ["A beautiful large old wooden dining table", "A large beautiful old wooden dining table", "An old beautiful large wooden dining table", "A beautiful wooden large old dining table"], 
            ans: 0 
        },
        { 
            q: "Identify the sentence with the correct adjective order.", 
            opts: ["She bought a red stunning silk new dress.", "She bought a stunning new red silk dress.", "She bought a new stunning red silk dress.", "She bought a stunning red new silk dress."], 
            ans: 1 
        },
        { 
            q: "Identify the sentence with the correct adjective order.", 
            opts: ["He drove a small shiny Italian sports car.", "He drove a shiny small Italian sports car.", "He drove an Italian shiny small sports car.", "He drove a shiny Italian small sports car."], 
            ans: 1 
        },
        { 
            q: "Which phrase uses the correct order of adjectives?", 
            opts: ["Three ugly large black dogs", "Three large ugly black dogs", "Ugly three large black dogs", "Three large black ugly dogs"], 
            ans: 0 
        },
        { 
            q: "Which phrase uses the correct order of adjectives?", 
            opts: ["An antique beautiful silver mirror", "A beautiful silver antique mirror", "A beautiful antique silver mirror", "A silver beautiful antique mirror"], 
            ans: 2 
        },
        { 
            q: "Select the sentence with the correctly ordered adjectives.", 
            opts: ["They found a strange little green alien.", "They found a little strange green alien.", "They found a green strange little alien.", "They found a strange green little alien."], 
            ans: 0 
        },
        { 
            q: "Select the sentence with the correctly ordered adjectives.", 
            opts: ["It was a long boring French movie.", "It was a boring long French movie.", "It was a French boring long movie.", "It was a long French boring movie."], 
            ans: 1 
        },
        { 
            q: "Which sequence correctly follows the standard order of adjectives?", 
            opts: ["A delicious hot pepperoni pizza", "A hot delicious pepperoni pizza", "A pepperoni delicious hot pizza", "A delicious pepperoni hot pizza"], 
            ans: 0 
        },
        { 
            q: "Identify the correct phrase.", 
            opts: ["A round small leather ball", "A small leather round ball", "A small round leather ball", "A leather small round ball"], 
            ans: 2 
        },
        { 
            q: "Identify the correct phrase.", 
            opts: ["A charming young Scottish doctor", "A young charming Scottish doctor", "A Scottish charming young doctor", "A charming Scottish young doctor"], 
            ans: 0 
        },

        // === ADJECTIVES: DEGREES OF COMPARISON & CONFUSING PAIRS (20 QUESTIONS) ===
        { 
            q: "Choose the correct sentence regarding degrees of comparison.", 
            opts: ["This coffee is more preferable than tea.", "This coffee is preferable than tea.", "This coffee is more preferable to tea.", "This coffee is preferable to tea."], 
            ans: 3 
        },
        { 
            q: "Choose the grammatically correct sentence.", 
            opts: ["He is senior than me in the office.", "He is more senior than me in the office.", "He is senior to me in the office.", "He is more senior to me in the office."], 
            ans: 2 
        },
        { 
            q: "Which of the following sentences correctly uses 'fewer' and 'less'?", 
            opts: ["I have less friends than he does.", "I have fewer friends than he does.", "I have lesser friends than he does.", "I have less friend than he does."], 
            ans: 1 
        },
        { 
            q: "Which of the following sentences correctly uses 'fewer' and 'less'?", 
            opts: ["There is fewer milk in the jug today.", "There is lesser milk in the jug today.", "There is less milk in the jug today.", "There is less milks in the jug today."], 
            ans: 2 
        },
        { 
            q: "Identify the correct sentence.", 
            opts: ["Of the two brothers, John is the tallest.", "Of the two brothers, John is the taller.", "Of the two brothers, John is taller.", "Of the two brothers, John is tallest."], 
            ans: 1 
        },
        { 
            q: "Select the correct usage of 'farther' and 'further'.", 
            opts: ["I cannot walk any further.", "I cannot walk any farther.", "I cannot walk any fartherest.", "Both A and B are acceptable in modern English."], 
            ans: 3 
        },
        { 
            q: "Select the correct usage of 'farther' and 'further' regarding additional information.", 
            opts: ["For farther details, please contact the manager.", "For further details, please contact the manager.", "For further detail, please contact the manager.", "For farther detail, please contact the manager."], 
            ans: 1 
        },
        { 
            q: "Choose the correct sentence regarding 'elder' and 'older'.", 
            opts: ["My older brother is a renowned architect.", "My elder brother is a renowned architect.", "My elderest brother is a renowned architect.", "Both A and B are grammatically acceptable."], 
            ans: 3 
        },
        { 
            q: "Choose the strictly correct sentence regarding 'elder' and 'older' with 'than'.", 
            opts: ["He is elder than his cousin.", "He is older than his cousin.", "He is more elder than his cousin.", "He is more older than his cousin."], 
            ans: 1 
        },
        { 
            q: "Identify the correct superlative structure.", 
            opts: ["She is the most smartest girl in the class.", "She is the smartest girl in the class.", "She is smartest girl in the class.", "She is most smartest girl in the class."], 
            ans: 1 
        },
        { 
            q: "Complete the sentence with the correct degree of comparison: 'No other boy in the class is <span class='highlight'>___</span> Peter.'", 
            opts: ["as smarter as", "more smart as", "as smart as", "smartest as"], 
            ans: 2 
        },
        { 
            q: "Identify the grammatically correct sentence.", 
            opts: ["This is a comparatively better solution.", "This is a comparatively good solution.", "This is comparatively a best solution.", "This is a comparatively best solution."], 
            ans: 1 
        },
        { 
            q: "Identify the grammatically correct sentence.", 
            opts: ["He is growing stronger and stronger.", "He is growing more and more strong.", "He is growing stronger and strong.", "He is growing strong and stronger."], 
            ans: 0 
        },
        { 
            q: "Which word correctly completes this sentence? 'He is the <span class='highlight'>___</span> of all the managers.'", 
            opts: ["more efficient", "most efficient", "efficientest", "much efficient"], 
            ans: 1 
        },
        { 
            q: "Select the sentence with the correct adjective usage.", 
            opts: ["The patient's condition is getting worse.", "The patient's condition is getting badder.", "The patient's condition is getting more worse.", "The patient's condition is getting worst."], 
            ans: 0 
        },
        { 
            q: "Which sentence is structurally correct?", 
            opts: ["He is equally as good as you.", "He is as equally good as you.", "He is as good as you.", "He is equally good as you are."], 
            ans: 2 
        },
        { 
            q: "Choose the sentence that correctly compares an action.", 
            opts: ["This task is less harder than the previous one.", "This task is less hard than the previous one.", "This task is lesser hard than the previous one.", "This task is lesser harder than the previous one."], 
            ans: 1 
        },
        { 
            q: "Identify the absolute adjective that CANNOT be graded (cannot take 'more' or 'most').", 
            opts: ["Beautiful", "Important", "Unique", "Expensive"], 
            ans: 2 
        },
        { 
            q: "Which of the following represents the correct use of 'latter'?", 
            opts: ["He arrived latter than expected.", "Between tea and coffee, I prefer the later.", "Between tea and coffee, I prefer the latter.", "He will call you latter."], 
            ans: 2 
        },
        { 
            q: "Which sentence is correct regarding 'latest' and 'last'?", 
            opts: ["What is the last news on the election?", "What is the latest news on the election?", "What is the lastly news on the election?", "What is the lateness news on the election?"], 
            ans: 1 
        },

        // === ADJECTIVES: PARTICIPLE ADJECTIVES & NOUN-AS-ADJECTIVES (10 QUESTIONS) ===
        { 
            q: "Choose the correct participle adjective: 'The horror movie was completely <span class='highlight'>___</span>.'", 
            opts: ["terrified", "terrifying", "terrify", "terrifyingly"], 
            ans: 1 
        },
        { 
            q: "Choose the correct participle adjective: 'The students were heavily <span class='highlight'>___</span> in the new science project.'", 
            opts: ["interesting", "interested", "interest", "interestingly"], 
            ans: 1 
        },
        { 
            q: "Select the correct adjective form: 'The marathon was a deeply <span class='highlight'>___</span> experience.'", 
            opts: ["exhausted", "exhausting", "exhaust", "exhaustion"], 
            ans: 1 
        },
        { 
            q: "Select the correct adjective form: 'I felt extremely <span class='highlight'>___</span> after listening to his long speech.'", 
            opts: ["boring", "bored", "bore", "boredom"], 
            ans: 1 
        },
        { 
            q: "Which sentence uses the adjective correctly as a plural noun?", 
            opts: ["The poors need our absolute support.", "The poor needs our absolute support.", "The poor need our absolute support.", "The poors needs our absolute support."], 
            ans: 2 
        },
        { 
            q: "Which sentence correctly uses an adjective to represent a class of people?", 
            opts: ["The blind requires special assistance in traffic.", "The blinds require special assistance in traffic.", "The blind require special assistance in traffic.", "The blinds requires special assistance in traffic."], 
            ans: 2 
        },
        { 
            q: "Identify the word functioning as an adjective in this sentence: 'He possesses a <span class='highlight'>cowardly</span> nature.'", 
            opts: ["He", "possesses", "cowardly", "nature"], 
            ans: 2 
        },
        { 
            q: "Identify the adjective in the following sentence: 'She offered a highly <span class='highlight'>friendly</span> greeting.'", 
            opts: ["She", "offered", "highly", "friendly"], 
            ans: 3 
        },
        { 
            q: "Choose the correct descriptive adjective to fill the blank: 'The <span class='highlight'>___</span> soldier received a medal of honor.'", 
            opts: ["bravery", "bravely", "brave", "braveness"], 
            ans: 2 
        },
        { 
            q: "Complete the sentence with the appropriate adjective: 'The situation requires an <span class='highlight'>___</span> response.'", 
            opts: ["immediately", "immediateness", "immediate", "immediacy"], 
            ans: 2 
        }
    ],

     "C": [
        // === VERBS: MAIN AND AUXILIARY (25 QUESTIONS) ===
        { q: "Identify the <span class='highlight'>auxiliary verb</span>: 'She is writing a complex novel.'", opts: ["writing", "is", "a", "complex"], ans: 1 },
        { q: "Identify the <span class='highlight'>main verb</span>: 'They have completed the assignment successfully.'", opts: ["have", "assignment", "completed", "successfully"], ans: 2 },
        { q: "Which word functions as the <span class='highlight'>auxiliary verb</span>: 'The dog did not bark at the stranger.'", opts: ["did", "not", "bark", "stranger"], ans: 0 },
        { q: "Identify the <span class='highlight'>main verb</span>: 'He can speak five languages fluently.'", opts: ["can", "speak", "languages", "fluently"], ans: 1 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: '___ you attending the seminar tomorrow?'", opts: ["Do", "Are", "Have", "Will"], ans: 1 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: '___ he finished the project yet?'", opts: ["Does", "Is", "Has", "Have"], ans: 2 },
        { q: "Identify the <span class='highlight'>auxiliary verb</span>: 'We were walking through the dense forest.'", opts: ["We", "were", "walking", "through"], ans: 1 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: 'They ___ not know the answer to the question.'", opts: ["does", "are", "do", "have"], ans: 2 },
        { q: "Identify the <span class='highlight'>main verb</span>: 'The mechanic is repairing the damaged engine.'", opts: ["is", "repairing", "damaged", "engine"], ans: 1 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: '___ it raining outside right now?'", opts: ["Does", "Is", "Has", "Are"], ans: 1 },
        { q: "Identify the <span class='highlight'>auxiliary verb</span>: 'I do believe in your incredible potential.'", opts: ["do", "believe", "incredible", "potential"], ans: 0 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: '___ she go to the market yesterday?'", opts: ["Does", "Did", "Has", "Was"], ans: 1 },
        { q: "Identify the <span class='highlight'>main verb</span>: 'The chef has been cooking since early morning.'", opts: ["has", "been", "cooking", "since"], ans: 2 },
        { q: "Which sentence contains NO <span class='highlight'>auxiliary verb</span>?", opts: ["He is driving a car.", "She sings beautifully.", "They do not agree.", "I am writing a letter."], ans: 1 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: 'We ___ already seen that movie.'", opts: ["have", "has", "are", "did"], ans: 0 },
        { q: "Identify the <span class='highlight'>main verb</span>: 'The mysterious letter was delivered at midnight.'", opts: ["mysterious", "was", "delivered", "midnight"], ans: 2 },
        { q: "Which word is the <span class='highlight'>auxiliary verb</span>: 'She will arrive by the evening train.'", opts: ["She", "will", "arrive", "train"], ans: 1 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: '___ you ever traveled to an exotic island?'", opts: ["Did", "Do", "Are", "Have"], ans: 3 },
        { q: "Identify the <span class='highlight'>main verb</span>: 'The old bridge might collapse under heavy weight.'", opts: ["old", "might", "collapse", "heavy"], ans: 2 },
        { q: "Which sentence uses 'have' as a <span class='highlight'>main verb</span> instead of an auxiliary?", opts: ["I have eaten my lunch.", "They have gone home.", "She has a beautiful car.", "We have seen the results."], ans: 2 },
        { q: "Identify the <span class='highlight'>auxiliary verb</span>: 'The children must complete their homework.'", opts: ["children", "must", "complete", "homework"], ans: 1 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: 'He ___ not understand the complexity of the issue.'", opts: ["do", "is", "does", "has"], ans: 2 },
        { q: "Identify the <span class='highlight'>main verb</span>: 'I should call my mother immediately.'", opts: ["should", "call", "mother", "immediately"], ans: 1 },
        { q: "Which word functions as the <span class='highlight'>auxiliary verb</span>: 'The document had been signed by the director.'", opts: ["had", "been", "signed", "director"], ans: 0 },
        { q: "Choose the correct <span class='highlight'>auxiliary verb</span>: 'What time ___ the train leave the station?'", opts: ["is", "does", "has", "do"], ans: 1 },

        // === ADVERBS (25 QUESTIONS) ===
        { q: "Choose the correct adverb: 'He worked incredibly ___ to pass the final examination.'", opts: ["hard", "hardly", "harder", "hardest"], ans: 0 },
        { q: "Choose the correct adverb: 'She could ___ hear the speaker over the loud noise.'", opts: ["hard", "hardly", "hardness", "harder"], ans: 1 },
        { q: "Identify the <span class='highlight'>adverb of time</span>: 'We will discuss this matter tomorrow.'", opts: ["We", "discuss", "matter", "tomorrow"], ans: 3 },
        { q: "Choose the correct adverb placement: 'I ___ visit the museum on weekends.'", opts: ["usually", "usual", "usualness", "unusually"], ans: 0 },
        { q: "Identify the <span class='highlight'>adverb of manner</span>: 'The soldiers fought bravely on the battlefield.'", opts: ["soldiers", "fought", "bravely", "battlefield"], ans: 2 },
        { q: "Choose the correct word: 'He arrived completely ___ for the important meeting.'", opts: ["late", "lately", "lateness", "later"], ans: 0 },
        { q: "Choose the correct word: 'Have you seen any good movies ___?'", opts: ["late", "lately", "later", "lateness"], ans: 1 },
        { q: "Identify the <span class='highlight'>adverb of place</span>: 'Please leave your heavy luggage outside.'", opts: ["Please", "leave", "heavy", "outside"], ans: 3 },
        { q: "Choose the correct adverb: 'She sings extremely ___ during the choir practice.'", opts: ["good", "well", "better", "best"], ans: 1 },
        { q: "Identify the <span class='highlight'>adverb of frequency</span>: 'They rarely eat fast food anymore.'", opts: ["They", "rarely", "eat", "anymore"], ans: 1 },
        { q: "Choose the correct adverb: 'The car was driving dangerously ___ down the narrow street.'", opts: ["fast", "fastly", "faster", "fastness"], ans: 0 },
        { q: "Identify the adverb: 'The incredibly tall building swayed in the wind.'", opts: ["incredibly", "tall", "building", "swayed"], ans: 0 },
        { q: "Choose the correct word: 'She spoke so ___ that no one could hear her.'", opts: ["quiet", "quietly", "quietness", "quieter"], ans: 1 },
        { q: "Identify the adverb: 'He almost dropped the fragile glass vase.'", opts: ["He", "almost", "dropped", "fragile"], ans: 1 },
        { q: "Choose the correct adverb: 'The athletes ran ___ towards the finish line.'", opts: ["quick", "quickly", "quicker", "quickness"], ans: 1 },
        { q: "Identify the adverb: 'We looked everywhere for the missing documents.'", opts: ["We", "looked", "everywhere", "missing"], ans: 2 },
        { q: "Choose the correct word: 'The dog looked at the stranger ___.'", opts: ["angry", "angrily", "anger", "angriness"], ans: 1 },
        { q: "Identify the <span class='highlight'>adverb of degree</span>: 'The water is too cold for swimming.'", opts: ["water", "too", "cold", "swimming"], ans: 1 },
        { q: "Choose the correct adverb: 'He answered the difficult question ___.'", opts: ["correct", "correctly", "correction", "correctness"], ans: 1 },
        { q: "Identify the adverb: 'They immediately recognized the stolen painting.'", opts: ["They", "immediately", "recognized", "stolen"], ans: 1 },
        { q: "Which sentence uses the adverb correctly?", opts: ["She drives very careful.", "She drives very carefully.", "She carefully drives very.", "She drives careful very."], ans: 1 },
        { q: "Choose the correct word: 'The child waited ___ for the candy.'", opts: ["patient", "patiently", "patience", "patientness"], ans: 1 },
        { q: "Identify the adverb: 'She will definitely attend the conference next week.'", opts: ["She", "definitely", "attend", "conference"], ans: 1 },
        { q: "Choose the correct word: 'The machine operates quite ___ when well-oiled.'", opts: ["smooth", "smoothly", "smoothness", "smoother"], ans: 1 },
        { q: "Identify the adverb: 'He frequently travels to Europe for business.'", opts: ["He", "frequently", "travels", "business"], ans: 1 },

        // === CONVERT TO NEGATIVE FORM (25 QUESTIONS) ===
        { q: "Convert to correct negative form: 'He plays cricket every Sunday.'", opts: ["He do not play cricket every Sunday.", "He does not plays cricket every Sunday.", "He does not play cricket every Sunday.", "He is not play cricket every Sunday."], ans: 2 },
        { q: "Convert to correct negative form: 'She visited Paris last summer.'", opts: ["She did not visited Paris last summer.", "She did not visit Paris last summer.", "She does not visit Paris last summer.", "She had not visit Paris last summer."], ans: 1 },
        { q: "Convert to correct negative form: 'They are watching a documentary.'", opts: ["They do not watching a documentary.", "They are not watching a documentary.", "They does not watching a documentary.", "They did not watching a documentary."], ans: 1 },
        { q: "Convert to correct negative form: 'I have finished my homework.'", opts: ["I have not finish my homework.", "I do not have finished my homework.", "I has not finished my homework.", "I have not finished my homework."], ans: 3 },
        { q: "Convert to correct negative form: 'The sun rises in the east.'", opts: ["The sun does not rise in the east.", "The sun do not rise in the east.", "The sun does not rises in the east.", "The sun is not rise in the east."], ans: 0 },
        { q: "Convert to correct negative form: 'We went to the museum yesterday.'", opts: ["We did not went to the museum yesterday.", "We do not go to the museum yesterday.", "We did not go to the museum yesterday.", "We were not go to the museum yesterday."], ans: 2 },
        { q: "Convert to correct negative form: 'He can solve this mathematical equation.'", opts: ["He can not solves this mathematical equation.", "He do not can solve this mathematical equation.", "He cannot solve this mathematical equation.", "He cannot solved this mathematical equation."], ans: 2 },
        { q: "Convert to correct negative form: 'She has a beautiful car.'", opts: ["She has not a beautiful car.", "She does not have a beautiful car.", "She do not have a beautiful car.", "She does not has a beautiful car."], ans: 1 },
        { q: "Convert to correct negative form: 'They will arrive at noon.'", opts: ["They will not arrives at noon.", "They do not will arrive at noon.", "They will not arrive at noon.", "They will not arrived at noon."], ans: 2 },
        { q: "Convert to correct negative form: 'I understood the complex lecture.'", opts: ["I did not understood the complex lecture.", "I did not understand the complex lecture.", "I do not understand the complex lecture.", "I was not understand the complex lecture."], ans: 1 },
        { q: "Convert to correct negative form: 'The bird flew over the tall trees.'", opts: ["The bird did not flew over the tall trees.", "The bird does not fly over the tall trees.", "The bird did not fly over the tall trees.", "The bird do not fly over the tall trees."], ans: 2 },
        { q: "Convert to correct negative form: 'She sings melodiously in the choir.'", opts: ["She does not sings melodiously in the choir.", "She do not sing melodiously in the choir.", "She is not sing melodiously in the choir.", "She does not sing melodiously in the choir."], ans: 3 },
        { q: "Convert to correct negative form: 'He had locked the front door.'", opts: ["He had not lock the front door.", "He did not had locked the front door.", "He had not locked the front door.", "He had not locking the front door."], ans: 2 },
        { q: "Convert to correct negative form: 'We study in the library.'", opts: ["We does not study in the library.", "We do not study in the library.", "We did not studies in the library.", "We are not study in the library."], ans: 1 },
        { q: "Convert to correct negative form: 'The manager approved the proposal.'", opts: ["The manager did not approved the proposal.", "The manager does not approve the proposal.", "The manager did not approve the proposal.", "The manager do not approve the proposal."], ans: 2 },
        { q: "Convert to correct negative form: 'It rained heavily last night.'", opts: ["It did not rained heavily last night.", "It did not rain heavily last night.", "It does not rain heavily last night.", "It was not rain heavily last night."], ans: 1 },
        { q: "Convert to correct negative form: 'They prefer tea over coffee.'", opts: ["They does not prefer tea over coffee.", "They do not prefers tea over coffee.", "They did not prefer tea over coffee.", "They do not prefer tea over coffee."], ans: 3 },
        { q: "Convert to correct negative form: 'She is writing a long essay.'", opts: ["She is not writing a long essay.", "She does not writing a long essay.", "She do not writing a long essay.", "She did not writing a long essay."], ans: 0 },
        { q: "Convert to correct negative form: 'I told him the absolute truth.'", opts: ["I did not told him the absolute truth.", "I do not tell him the absolute truth.", "I did not tell him the absolute truth.", "I was not tell him the absolute truth."], ans: 2 },
        { q: "Convert to correct negative form: 'He drives very carefully.'", opts: ["He do not drive very carefully.", "He does not drive very carefully.", "He does not drives very carefully.", "He did not drives very carefully."], ans: 1 },
        { q: "Convert to correct negative form: 'We have seen this movie before.'", opts: ["We do not have seen this movie before.", "We have not saw this movie before.", "We have not seen this movie before.", "We did not have seen this movie before."], ans: 2 },
        { q: "Convert to correct negative form: 'The dog bit the stranger.'", opts: ["The dog did not bit the stranger.", "The dog does not bite the stranger.", "The dog did not bite the stranger.", "The dog do not bite the stranger."], ans: 2 },
        { q: "Convert to correct negative form: 'She sells seashells by the shore.'", opts: ["She does not sell seashells by the shore.", "She do not sell seashells by the shore.", "She does not sells seashells by the shore.", "She did not sells seashells by the shore."], ans: 0 },
        { q: "Convert to correct negative form: 'They built a completely new house.'", opts: ["They did not built a completely new house.", "They did not build a completely new house.", "They do not build a completely new house.", "They does not build a completely new house."], ans: 1 },
        { q: "Convert to correct negative form: 'He should apologize immediately.'", opts: ["He should not apologizes immediately.", "He do not should apologize immediately.", "He should not apologize immediately.", "He did not apologize immediately."], ans: 2 },

        // === CONVERT TO INTERROGATIVE FORM (25 QUESTIONS) ===
        { q: "Convert to correct interrogative form: 'She works in a corporate bank.'", opts: ["Do she work in a corporate bank?", "Does she works in a corporate bank?", "Does she work in a corporate bank?", "Is she work in a corporate bank?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'They went to the stadium.'", opts: ["Did they went to the stadium?", "Do they go to the stadium?", "Does they go to the stadium?", "Did they go to the stadium?"], ans: 3 },
        { q: "Convert to correct interrogative form: 'He has finished his meal.'", opts: ["Has he finished his meal?", "Have he finished his meal?", "Does he has finished his meal?", "Did he finished his meal?"], ans: 0 },
        { q: "Convert to correct interrogative form: 'We play tennis on weekends.'", opts: ["Does we play tennis on weekends?", "Do we play tennis on weekends?", "Did we play tennis on weekends?", "Are we play tennis on weekends?"], ans: 1 },
        { q: "Convert to correct interrogative form: 'The train arrived exactly on time.'", opts: ["Did the train arrived exactly on time?", "Does the train arrive exactly on time?", "Did the train arrive exactly on time?", "Do the train arrive exactly on time?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'She can speak fluent French.'", opts: ["Can she speaks fluent French?", "Does she can speak fluent French?", "Can she speak fluent French?", "Do she speak fluent French?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'He bought a brand new laptop.'", opts: ["Did he buy a brand new laptop?", "Did he bought a brand new laptop?", "Does he buy a brand new laptop?", "Do he buy a brand new laptop?"], ans: 0 },
        { q: "Convert to correct interrogative form: 'They are constructing a bridge.'", opts: ["Are they constructing a bridge?", "Do they constructing a bridge?", "Does they constructing a bridge?", "Did they constructing a bridge?"], ans: 0 },
        { q: "Convert to correct interrogative form: 'I should bring my umbrella.'", opts: ["Should I bring my umbrella?", "Do I should bring my umbrella?", "Should I brings my umbrella?", "Did I bring my umbrella?"], ans: 0 },
        { q: "Convert to correct interrogative form: 'The sun provides us energy.'", opts: ["Do the sun provide us energy?", "Does the sun provides us energy?", "Does the sun provide us energy?", "Did the sun provides us energy?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'She broke the expensive vase.'", opts: ["Did she broke the expensive vase?", "Did she break the expensive vase?", "Does she break the expensive vase?", "Do she break the expensive vase?"], ans: 1 },
        { q: "Convert to correct interrogative form: 'We have met them before.'", opts: ["Have we met them before?", "Has we met them before?", "Did we met them before?", "Do we met them before?"], ans: 0 },
        { q: "Convert to correct interrogative form: 'He writes beautifully.'", opts: ["Do he write beautifully?", "Does he writes beautifully?", "Does he write beautifully?", "Is he write beautifully?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'They won the championship match.'", opts: ["Did they won the championship match?", "Do they win the championship match?", "Did they win the championship match?", "Does they win the championship match?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'The machine operates smoothly.'", opts: ["Do the machine operate smoothly?", "Does the machine operates smoothly?", "Does the machine operate smoothly?", "Is the machine operate smoothly?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'She caught a cold yesterday.'", opts: ["Did she caught a cold yesterday?", "Did she catch a cold yesterday?", "Does she catch a cold yesterday?", "Do she catch a cold yesterday?"], ans: 1 },
        { q: "Convert to correct interrogative form: 'He will join the meeting.'", opts: ["Will he joins the meeting?", "Does he will join the meeting?", "Will he join the meeting?", "Do he join the meeting?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'They had left the building.'", opts: ["Had they leave the building?", "Did they had left the building?", "Have they left the building?", "Had they left the building?"], ans: 3 },
        { q: "Convert to correct interrogative form: 'She prefers reading over writing.'", opts: ["Does she prefers reading over writing?", "Do she prefer reading over writing?", "Does she prefer reading over writing?", "Did she prefer reading over writing?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'We saw a shooting star.'", opts: ["Did we saw a shooting star?", "Did we see a shooting star?", "Do we see a shooting star?", "Does we see a shooting star?"], ans: 1 },
        { q: "Convert to correct interrogative form: 'The children are sleeping upstairs.'", opts: ["Do the children sleeping upstairs?", "Are the children sleeping upstairs?", "Does the children sleeping upstairs?", "Did the children sleeping upstairs?"], ans: 1 },
        { q: "Convert to correct interrogative form: 'He taught mathematics last year.'", opts: ["Did he taught mathematics last year?", "Does he teach mathematics last year?", "Did he teach mathematics last year?", "Do he teach mathematics last year?"], ans: 2 },
        { q: "Convert to correct interrogative form: 'They have a large garden.'", opts: ["Do they have a large garden?", "Have they a large garden?", "Does they have a large garden?", "Did they have a large garden?"], ans: 0 },
        { q: "Convert to correct interrogative form: 'She found the hidden treasure.'", opts: ["Did she found the hidden treasure?", "Did she find the hidden treasure?", "Does she find the hidden treasure?", "Do she find the hidden treasure?"], ans: 1 },
        { q: "Convert to correct interrogative form: 'He always arrives early.'", opts: ["Does he always arrives early?", "Do he always arrive early?", "Does he always arrive early?", "Did he always arrives early?"], ans: 2 }
    ],

     "D": [
        // === PREPOSITIONS (25 QUESTIONS) ===
        { q: "Choose the correct preposition: 'The merchant deals ___ imported silk and exotic spices.'", opts: ["with", "in", "at", "for"], ans: 1 },
        { q: "Choose the correct preposition: 'I cannot agree ___ you on this particular issue.'", opts: ["to", "with", "on", "about"], ans: 1 },
        { q: "Choose the correct preposition: 'The old man died ___ cholera last night.'", opts: ["from", "of", "with", "by"], ans: 1 },
        { q: "Choose the correct preposition: 'She has been completely blind ___ her son's faults.'", opts: ["to", "in", "with", "about"], ans: 0 },
        { q: "Choose the correct preposition: 'The property was divided equally ___ the four brothers.'", opts: ["between", "among", "in", "with"], ans: 1 },
        { q: "Choose the correct preposition: 'Who is sitting ___ your father in the photograph?'", opts: ["beside", "besides", "next", "by"], ans: 0 },
        { q: "Choose the correct preposition: 'He jumped ___ the river to save the drowning child.'", opts: ["in", "into", "inside", "under"], ans: 1 },
        { q: "Choose the correct preposition: 'I prefer drinking green tea ___ black coffee.'", opts: ["than", "over", "to", "from"], ans: 2 },
        { q: "Choose the correct preposition: 'We have been waiting for the bus ___ three hours.'", opts: ["since", "for", "from", "during"], ans: 1 },
        { q: "Choose the correct preposition: 'She is suffering ___ a severe viral infection.'", opts: ["with", "from", "by", "of"], ans: 1 },
        { q: "Choose the correct preposition: 'The manager is thoroughly satisfied ___ your performance.'", opts: ["with", "by", "for", "in"], ans: 0 },
        { q: "Choose the correct preposition: 'He abstained ___ drinking alcohol at the party.'", opts: ["to", "from", "with", "by"], ans: 1 },
        { q: "Choose the correct preposition: 'The airplane flew directly ___ our house.'", opts: ["over", "above", "across", "on"], ans: 0 },
        { q: "Choose the correct preposition: 'He is entirely dependent ___ his parents for money.'", opts: ["in", "at", "on", "with"], ans: 2 },
        { q: "Choose the correct preposition: 'The cat was hiding securely ___ the wooden table.'", opts: ["beneath", "underneath", "under", "below"], ans: 2 },
        { q: "Choose the correct preposition: 'I will meet you at the station ___ Monday morning.'", opts: ["in", "at", "on", "by"], ans: 2 },
        { q: "Choose the correct preposition: 'She walked ___ the dark tunnel without any fear.'", opts: ["across", "through", "in", "along"], ans: 1 },
        { q: "Choose the correct preposition: 'My views differ entirely ___ yours on this topic.'", opts: ["with", "from", "to", "than"], ans: 1 },
        { q: "Choose the correct preposition: 'You must apply ___ the principal for a leave of absence.'", opts: ["to", "for", "with", "at"], ans: 0 },
        { q: "Choose the correct preposition: 'The courageous soldier fought ___ the very end.'", opts: ["till", "until", "to", "for"], ans: 2 },
        { q: "Choose the correct preposition: 'The thief broke ___ the house through the back window.'", opts: ["in", "into", "inside", "open"], ans: 1 },
        { q: "Choose the correct preposition: 'She was deeply ashamed ___ her terrible behavior.'", opts: ["for", "of", "with", "about"], ans: 1 },
        { q: "Choose the correct preposition: 'The final decision rests completely ___ the committee.'", opts: ["on", "with", "at", "by"], ans: 1 },
        { q: "Choose the correct preposition: 'He is known ___ his extraordinary generosity.'", opts: ["by", "to", "for", "with"], ans: 2 },
        { q: "Choose the correct preposition: 'They walked carefully ___ the edge of the steep cliff.'", opts: ["along", "across", "over", "on"], ans: 0 },

        // === READING COMPREHENSION (5 QUESTIONS) ===
        { 
            q: "<b>Read the passage carefully:</b><br>The Great Barrier Reef, stretching over 2,300 kilometers off the coast of Australia, is the world's largest coral reef system. It is composed of over 2,900 individual reefs. Despite its immense biodiversity, the reef faces severe threats from climate change, particularly coral bleaching caused by rising ocean temperatures. Furthermore, pollution from agricultural runoff has drastically reduced water quality, stressing the fragile marine ecosystem. Conservationists argue that immediate global action to reduce greenhouse gas emissions is the only viable solution to ensure its survival.<br><br><b>Question:</b> What is the primary threat to the Great Barrier Reef mentioned in the passage?", 
            opts: ["Agricultural runoff", "Coastal development", "Climate change", "Tourism pollution"], 
            ans: 2 
        },
        { 
            q: "<b>Read the passage carefully:</b><br>The Great Barrier Reef, stretching over 2,300 kilometers off the coast of Australia, is the world's largest coral reef system. It is composed of over 2,900 individual reefs. Despite its immense biodiversity, the reef faces severe threats from climate change, particularly coral bleaching caused by rising ocean temperatures. Furthermore, pollution from agricultural runoff has drastically reduced water quality, stressing the fragile marine ecosystem. Conservationists argue that immediate global action to reduce greenhouse gas emissions is the only viable solution to ensure its survival.<br><br><b>Question:</b> According to the passage, how many individual reefs comprise the Great Barrier Reef?", 
            opts: ["Exactly 2,300", "Over 2,300", "Exactly 2,900", "Over 2,900"], 
            ans: 3 
        },
        { 
            q: "<b>Read the passage carefully:</b><br>The Great Barrier Reef, stretching over 2,300 kilometers off the coast of Australia, is the world's largest coral reef system. It is composed of over 2,900 individual reefs. Despite its immense biodiversity, the reef faces severe threats from climate change, particularly coral bleaching caused by rising ocean temperatures. Furthermore, pollution from agricultural runoff has drastically reduced water quality, stressing the fragile marine ecosystem. Conservationists argue that immediate global action to reduce greenhouse gas emissions is the only viable solution to ensure its survival.<br><br><b>Question:</b> What is identified as the direct cause of coral bleaching?", 
            opts: ["Rising ocean temperatures", "Agricultural runoff", "Greenhouse gas emissions", "Reduced water quality"], 
            ans: 0 
        },
        { 
            q: "<b>Read the passage carefully:</b><br>The Great Barrier Reef, stretching over 2,300 kilometers off the coast of Australia, is the world's largest coral reef system. It is composed of over 2,900 individual reefs. Despite its immense biodiversity, the reef faces severe threats from climate change, particularly coral bleaching caused by rising ocean temperatures. Furthermore, pollution from agricultural runoff has drastically reduced water quality, stressing the fragile marine ecosystem. Conservationists argue that immediate global action to reduce greenhouse gas emissions is the only viable solution to ensure its survival.<br><br><b>Question:</b> What negative impact does agricultural runoff have on the ecosystem?", 
            opts: ["It increases ocean temperatures.", "It reduces water quality.", "It directly bleaches the coral.", "It expands greenhouse emissions."], 
            ans: 1 
        },
        { 
            q: "<b>Read the passage carefully:</b><br>The Great Barrier Reef, stretching over 2,300 kilometers off the coast of Australia, is the world's largest coral reef system. It is composed of over 2,900 individual reefs. Despite its immense biodiversity, the reef faces severe threats from climate change, particularly coral bleaching caused by rising ocean temperatures. Furthermore, pollution from agricultural runoff has drastically reduced water quality, stressing the fragile marine ecosystem. Conservationists argue that immediate global action to reduce greenhouse gas emissions is the only viable solution to ensure its survival.<br><br><b>Question:</b> What do conservationists consider the 'only viable solution'?", 
            opts: ["Banning agricultural runoff completely", "Reducing greenhouse gas emissions", "Cooling the ocean temperatures manually", "Restricting tourism in the area"], 
            ans: 1 
        },

        // === WORD MEANINGS (10 QUESTIONS) ===
        { q: "What is the exact meaning of the word <span class='highlight'>'Pragmatic'</span>?", opts: ["Highly theoretical", "Practical and realistic", "Extremely emotional", "Confusing and unclear"], ans: 1 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Superfluous'</span>?", opts: ["Superior in quality", "Exceedingly beautiful", "More than is necessary", "Highly intelligent"], ans: 2 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Ambiguous'</span>?", opts: ["Having extreme ambition", "Open to more than one interpretation", "Completely transparent", "Lacking physical strength"], ans: 1 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Meticulous'</span>?", opts: ["Showing great attention to detail", "Acting in a reckless manner", "Having a messy appearance", "Speaking very loudly"], ans: 0 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Lucrative'</span>?", opts: ["Producing a great deal of profit", "Being ridiculously funny", "Causing extreme sadness", "Requiring immense hard work"], ans: 0 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Candid'</span>?", opts: ["Hidden or secretive", "Truthful and straightforward", "Sweet and sugary", "Artificially polite"], ans: 1 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Tenacious'</span>?", opts: ["Easily broken or fragile", "Tending to keep a firm hold", "Having ten different parts", "Lacking any real motivation"], ans: 1 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Obscure'</span>?", opts: ["Not discovered or known about", "Extremely obvious to everyone", "Shining with bright light", "Completely deafening"], ans: 0 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Resilient'</span>?", opts: ["Resistant to all forms of change", "Able to withstand or recover quickly", "Refusing to accept the truth", "Completely fragile and weak"], ans: 1 },
        { q: "What is the exact meaning of the word <span class='highlight'>'Inevitable'</span>?", opts: ["Impossible to achieve", "Certain to happen; unavoidable", "Highly unlikely to occur", "Capable of being delayed"], ans: 1 },

        // === TENSES: PAST, PRESENT, FUTURE (40 QUESTIONS) ===
        // Present Tenses
        { q: "Identify the correct tense: 'The Earth ___ around the Sun.'", opts: ["revolve", "is revolving", "revolves", "has revolved"], ans: 2 },
        { q: "Identify the correct tense: 'Look! The boys ___ football in the heavy rain.'", opts: ["play", "are playing", "have played", "were playing"], ans: 1 },
        { q: "Identify the correct tense: 'I ___ my lost keys. I can finally open the door.'", opts: ["find", "am finding", "found", "have found"], ans: 3 },
        { q: "Identify the correct tense: 'She ___ in this prestigious company since 2015.'", opts: ["works", "is working", "has been working", "had been working"], ans: 2 },
        { q: "Identify the correct tense: 'Water ___ at 100 degrees Celsius under standard pressure.'", opts: ["is boiling", "boil", "boils", "has boiled"], ans: 2 },
        { q: "Identify the correct tense: 'He rarely ___ his grandparents on weekends.'", opts: ["is visiting", "visits", "has visited", "visit"], ans: 1 },
        { q: "Identify the correct tense: 'They ___ the new bridge for over six months now.'", opts: ["are building", "have built", "have been building", "build"], ans: 2 },
        { q: "Identify the correct tense: 'I ___ all the rules of grammar perfectly now.'", opts: ["understand", "am understanding", "have understood", "have been understanding"], ans: 0 },
        { q: "Identify the correct tense: 'She ___ three cups of coffee so far this morning.'", opts: ["drinks", "is drinking", "has drunk", "has been drinking"], ans: 2 },
        { q: "Identify the correct tense: 'The train ___ at exactly 9:00 PM every evening.'", opts: ["is departing", "departs", "has departed", "depart"], ans: 1 },
        
        // Past Tenses
        { q: "Identify the correct tense: 'I ___ him at the central library yesterday.'", opts: ["see", "have seen", "saw", "had seen"], ans: 2 },
        { q: "Identify the correct tense: 'While I was studying, my brother ___ video games.'", opts: ["played", "was playing", "had played", "has played"], ans: 1 },
        { q: "Identify the correct tense: 'The patient ___ before the doctor arrived at the hospital.'", opts: ["died", "has died", "had died", "was dying"], ans: 2 },
        { q: "Identify the correct tense: 'They ___ continuously for three hours before it started raining.'", opts: ["were playing", "have been playing", "had been playing", "played"], ans: 2 },
        { q: "Identify the correct tense: 'Columbus ___ America in the year 1492.'", opts: ["discovers", "has discovered", "discovered", "had discovered"], ans: 2 },
        { q: "Identify the correct tense: 'I ___ a very strange noise in the middle of the night.'", opts: ["heard", "was hearing", "had heard", "have heard"], ans: 0 },
        { q: "Identify the correct tense: 'When we reached the station, the train ___ already.'", opts: ["left", "has left", "had left", "was leaving"], ans: 2 },
        { q: "Identify the correct tense: 'He ___ a novel when the lights suddenly went out.'", opts: ["read", "is reading", "was reading", "had read"], ans: 2 },
        { q: "Identify the correct tense: 'She told me that she ___ her assignment entirely.'", opts: ["completed", "has completed", "had completed", "was completing"], ans: 2 },
        { q: "Identify the correct tense: 'I ___ for him for two hours when he finally arrived.'", opts: ["waited", "was waiting", "had been waiting", "have been waiting"], ans: 2 },
        
        // Future Tenses
        { q: "Identify the correct tense: 'I ___ my uncle in London next week.'", opts: ["will visit", "am visiting", "visit", "Both A and B are correct"], ans: 3 },
        { q: "Identify the correct tense: 'By this time tomorrow, I ___ across the Atlantic Ocean.'", opts: ["will fly", "will be flying", "will have flown", "would fly"], ans: 1 },
        { q: "Identify the correct tense: 'They ___ the construction of the building by next December.'", opts: ["will finish", "will be finishing", "will have finished", "will have been finishing"], ans: 2 },
        { q: "Identify the correct tense: 'By next year, she ___ as a teacher for twenty years.'", opts: ["will work", "will be working", "will have worked", "will have been working"], ans: 3 },
        { q: "Identify the correct tense: 'Look at those dark clouds! It ___.'", opts: ["will rain", "is going to rain", "shall rain", "rains"], ans: 1 },
        { q: "Identify the correct tense: 'I am sure he ___ the final examination easily.'", opts: ["will pass", "is passing", "passes", "will be passing"], ans: 0 },
        { q: "Identify the correct tense: 'At 8 PM tonight, they ___ dinner at the new restaurant.'", opts: ["will have", "will be having", "will have had", "have"], ans: 1 },
        { q: "Identify the correct tense: 'Before you reach the station, the train ___.'", opts: ["will leave", "will be leaving", "will have left", "leaves"], ans: 2 },
        { q: "Identify the correct tense: 'We ___ for you when you arrive at the airport.'", opts: ["will wait", "will be waiting", "will have waited", "wait"], ans: 1 },
        { q: "Identify the correct tense: 'By 2030, scientists ___ a cure for this disease.'", opts: ["will find", "will be finding", "will have found", "will have been finding"], ans: 2 },

        // Conditionals and Mixed Tense Logic
        { q: "Choose the correct tense logic: 'If it ___, we will definitely cancel the picnic.'", opts: ["will rain", "rains", "rained", "is raining"], ans: 1 },
        { q: "Choose the correct tense logic: 'If I ___ you, I would never accept that unfair offer.'", opts: ["am", "was", "were", "had been"], ans: 2 },
        { q: "Choose the correct tense logic: 'If she had studied harder, she ___ the challenging exam.'", opts: ["will pass", "would pass", "would have passed", "will have passed"], ans: 2 },
        { q: "Identify the correct tense: 'He behaves as if he ___ the owner of this entire company.'", opts: ["is", "was", "were", "has been"], ans: 2 },
        { q: "Identify the correct tense: 'It is high time you ___ studying for your finals.'", opts: ["start", "started", "will start", "are starting"], ans: 1 },
        { q: "Identify the correct tense: 'I wish I ___ the answer to that difficult question.'", opts: ["know", "knew", "have known", "will know"], ans: 1 },
        { q: "Identify the correct tense: 'No sooner ___ the thief seen the police than he ran away.'", opts: ["has", "did", "had", "was"], ans: 2 },
        { q: "Identify the correct tense: 'Hardly had I reached the station when the train ___.'", opts: ["arrives", "arrived", "had arrived", "was arriving"], ans: 1 },
        { q: "Choose the correct tense structure: 'Since he ___ graduation, he has been looking for a job.'", opts: ["has finished", "had finished", "finished", "finishes"], ans: 2 },
        { q: "Choose the correct tense structure: 'She told me her name after she ___ the contract.'", opts: ["signed", "was signing", "has signed", "had signed"], ans: 3 }
    ],

     "E": [
        // === USER'S FIRST 40 QUESTIONS (Solved & Formatted) ===
        { 
            q: "<span style='color:var(--yellow); font-size:1.2rem; font-weight:700;'>Caution:- Brain Required Beyond This Point! 🚧</span><br><span style='color:#F43F5E; font-weight:700;'>*Dimaag hai toh laga warna dekhta reh jaa🤡*</span><br><br>A says, 'The father of B's only brother is my wife's husband.' How is A related to B?", 
            opts: ["Father", "Uncle", "Brother", "Grandfather"], 
            ans: 0 
        },
        { q: "Thermometer : Temperature :: Hygrometer : ?", opts: ["Humidity", "Pressure", "Rainfall", "Wind"], ans: 0 },
        { q: "What is the next number in the series: 15, 31, 63, 127, ?", opts: ["253", "254", "255", "256"], ans: 2 },
        { q: "Skeleton : Support :: Muscles : ?", opts: ["Movement", "Blood", "Bones", "Nerves"], ans: 0 },
        { q: "Six members A, B, C, D, E and F belong to three generations. There are two married couples. A is the grandfather of D. B is the wife of A. C is the son of A. E is the wife of C. F is the daughter of C. How is D related to F?", opts: ["Brother", "Cousin", "Sister", "Cannot be determined (Gender of D is unknown)"], ans: 3 },
        { q: "A song or music in praise of God is called a-", opts: ["Huffy", "Horrendous", "Horizon", "Hymn"], ans: 3 },
        { q: "Introducing a woman, Priya said, 'She is the daughter-in-law of the mother of my husband's father.' The woman is Priya's:", opts: ["Sister-in-law", "Sister", "Daughter", "Mother-in-law"], ans: 3 },
        { q: "He is a member of the _________ Board.", opts: ["Censer", "Censure", "Censor", "Sensor"], ans: 2 },
        { q: "What do you mean by the idiom ‘Have your heart in your mouth’?", opts: ["To behave in a foolish manner", "To be extremely frightened", "To be extremely jealous", "To get worse and worse"], ans: 1 },
        { q: "Which of the following is strictly required for booting a computer?", opts: ["Operating system", "Compiler", "Translator", "Assembler"], ans: 0 },
        { q: "Select the option that represents the correct dictionary order:<br>1. Fancy<br>2. Faith<br>3. Fabric<br>4. Failure<br>5. Familiar", opts: ["3, 4, 1, 5, 2", "4, 3, 2, 5, 1", "4, 3, 1, 5, 2", "3, 4, 2, 5, 1"], ans: 3 },
         { 
            q: "How many triangles are there in the following figure?<br><br><img src='images/q352.jpg' alt='Triangle Figure' style='max-width:100%; border-radius:12px; margin-top:15px; border: 1px solid var(--neon-green); box-shadow: 0 5px 15px rgba(57, 255, 20, 0.2);'>", 
            opts: ["12", "24", "8", "None of the above"], 
            ans: 1 
        },

        { q: "Four words have been given, out of which three are similar in meaning and one is different. Select the odd one.", opts: ["Apprehensive", "Composed", "Scared", "Afraid"], ans: 1 },
        { q: "In a web address, what does the domain indicator (suffix) '.com' stand for?", opts: ["Computer", "Communication", "Common", "Commercial"], ans: 3 },
        { q: "What should come in place of the question mark (?) in the given series based on the English alphabetical order?<br>MAN, OAP, QAR, ?, UAV", opts: ["SBT", "AST", "STA", "SAT"], ans: 3 },
        { q: "Which of the following is NOT a peripheral device?", opts: ["Keyboard", "Motherboard", "Monitor", "Printer"], ans: 1 },
         { 
            q: "How many squares are there in the figure?<br><br><img src='images/q357.jpg' alt='Square Grid Figure' style='max-width:100%; border-radius:12px; margin-top:15px; border: 1px solid var(--neon-green); box-shadow: 0 5px 15px rgba(57, 255, 20, 0.2);'>", 
            opts: ["12", "18", "14", "16"], 
            ans: 3 
        },

        { q: "Which two signs should be interchanged in the following equation to make it mathematically correct?<br>10 + 5 ÷ 10 × 8 − 10 = 16", opts: ["+ and ×", "− and +", "÷ and ×", "− and ÷"], ans: 1 },
        { q: "In case of kidney failure, an artificial kidney is used. It works on the principle of -", opts: ["Disection", "Dialysis", "Diffusion", "Disintegration"], ans: 1 },
        { q: "Which of the following is the smallest gland in the human body?", opts: ["Thyroid", "Liver", "Pineal", "Adrenal"], ans: 2 },
        { q: "Choose the odd word from the given words.", opts: ["Leg", "Hand", "Brain", "Ear"], ans: 2 },
        { q: "Choose the correct option.<br>Coal : Black :: Limestone : ?", opts: ["Red", "Blue", "White", "Green"], ans: 2 },
        { q: "Select the one which is different from the other three.", opts: ["Mumbai", "Bangalore", "Chennai", "Ladakh"], ans: 3 },
        { q: "Pointing to a photograph, Neha said, 'The man in the picture is the father of the only daughter of my husband's father.' Who is the man?", opts: ["Husband", "Father-in-law", "Brother-in-law", "Father"], ans: 0 },
        { q: "Which material is the best conductor of electricity?", opts: ["Rubber", "Glass", "Silver", "Plastic"], ans: 2 },
        { q: "Rusting of iron requires:", opts: ["Oxygen only", "Water only", "Oxygen and moisture", "Carbon dioxide only"], ans: 2 },
        { q: "Which blood group is universally known as the universal donor?", opts: ["A+", "B+", "AB+", "O-"], ans: 3 },
        { q: "Which blood cells are primarily responsible for clotting?", opts: ["Red blood cells", "White blood cells", "Platelets", "Plasma"], ans: 2 },
        { q: "A batsman is declared 'Hit Wicket' if:", opts: ["The ball touches the stumps.", "The bowler breaks the stumps.", "The batsman dislodges the bails with bat or body while playing the ball.", "The wicketkeeper breaks the stumps."], ans: 2 },
        { q: "Which legendary player is known as the original 'Little Master' in Indian cricket?", opts: ["Sunil Gavaskar", "Sachin Tendulkar", "Virat Kohli", "Rahul Dravid"], ans: 0 },
        { q: "Which of these is NOT a batting record associated with Virat Kohli?", opts: ["Most Test wickets for India", "Most ODI centuries", "Most runs in a single IPL season", "Multiple ICC Player of the Tournament awards"], ans: 0 },
        { q: "Which festival is most famously associated with Daya's Garba dance in 'Taarak Mehta ka Ooltah Chashmah'?", opts: ["Holi", "Navratri", "Diwali", "Janmashtami"], ans: 1 },
        { q: "Which iconic shot made MS Dhoni famous worldwide?", opts: ["Reverse Sweep", "Helicopter Shot", "Upper Cut", "Paddle Sweep"], ans: 1 },
        { q: "Which statement best reflects genuine self-confidence?", opts: ["I never make mistakes.", "I'm better than everyone else.", "I believe I can improve through effort.", "I don't care what anyone thinks."], ans: 2 },
        { q: "Which word cannot be formed using the letters of the word 'KNOWLEDGE'?", opts: ["KNOWN", "LODGE", "WEDGE", "GOLD"], ans: 0 },
        { q: "A man walks 10 km towards North, turns right and walks 5 km. He turns right again and walks 10 km. How far is he from the starting point?", opts: ["5 km", "10 km", "15 km", "0 km"], ans: 0 },
        { q: "A mirror is placed on the right side of the word: LOGIC. Which letter appears closest to the mirror?", opts: ["L", "O", "C", "G"], ans: 2 },
        { q: "If A is the brother of B; B is the sister of C; and C is the father of D, how is D related to A?", opts: ["Brother", "Sister", "Nephew or Niece", "Cousin"], ans: 2 },
        { q: "How many times do the hour and minute hands of a clock overlap in a 24-hour period?", opts: ["22", "24", "20", "12"], ans: 0 },
        { q: "A father and son are in a car accident. The father dies. The boy is taken to the hospital. The surgeon says, 'I cannot operate. This is my son.' Who is the surgeon?", opts: ["Uncle", "Grandfather", "Mother", "Family friend"], ans: 2 },

        // === 20 NEW ADDED QUESTIONS (To complete 60 Marks) ===
        { q: "In a certain code language, if 'ROAST' is coded as 'PQYUR', how will 'SLOPPY' be coded?", opts: ["QJMNNW", "QNNMOW", "QJMMNW", "QJMNNX"], ans: 0 },
        { q: "If today is Monday, what day of the week will it be exactly after 65 days?", opts: ["Tuesday", "Wednesday", "Thursday", "Friday"], ans: 1 },
        { q: "Find the missing number in the series: 2, 6, 12, 20, 30, ?", opts: ["40", "42", "44", "48"], ans: 1 },
        { q: "Look at this series: 36, 34, 30, 28, 24, ... What number should come next?", opts: ["20", "22", "23", "26"], ans: 1 },
        { q: "If A = 1, B = 2, and CAT = 24, then what is the numerical value of DOG?", opts: ["24", "25", "26", "27"], ans: 2 },
        { q: "Riddle: I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?", opts: ["A cloud", "An echo", "A ghost", "A bell"], ans: 1 },
        { q: "Who was the first Indian bowler to take a hat-trick in Test cricket?", opts: ["Kapil Dev", "Anil Kumble", "Harbhajan Singh", "Irfan Pathan"], ans: 2 },
        { q: "Find the odd number out: 121, 144, 169, 198, 225", opts: ["144", "169", "198", "225"], ans: 2 },
        { q: "Which of the following Venn diagrams best represents the relationship between: Animals, Dogs, and Cats?", opts: ["Three overlapping circles", "Two separate circles inside one large circle", "Three separate circles", "One circle inside another, inside a third"], ans: 1 },
        { q: "If South-East becomes North, North-East becomes West and so on, what will West become?", opts: ["North-East", "South-East", "South-West", "North-West"], ans: 1 },
        { q: "Ocean : Water :: Glacier : ?", opts: ["Mountain", "Ice", "Cave", "Snow"], ans: 1 },
        { q: "At 3:15, what is the exact angle between the hour hand and the minute hand of a clock?", opts: ["0 degrees", "7.5 degrees", "15 degrees", "22.5 degrees"], ans: 1 },
        { q: "Which of the following years is a leap year?", opts: ["1700", "1800", "1900", "2000"], ans: 3 },
        { q: "Which international body governs the rules and global tournaments of Cricket?", opts: ["BCCI", "MCC", "ICC", "WCA"], ans: 2 },
        { q: "What is the next term in the alphanumeric series: A1, C3, F6, J10, ?", opts: ["O15", "M15", "N14", "O14"], ans: 0 },
        { q: "If 'green' is called 'red', 'red' is called 'blue', 'blue' is called 'white', what is the color of human blood?", opts: ["Red", "Green", "Blue", "White"], ans: 2 },
        { q: "A woman introduces a man as the son of the brother of her mother. How is the man related to the woman?", opts: ["Nephew", "Son", "Cousin", "Uncle"], ans: 2 },
        { q: "Five students are sitting in a row. A is next to B but not next to C. D is next to E, who is sitting on the extreme left. If C is not sitting next to D, who is sitting in the middle?", opts: ["A", "B", "C", "D"], ans: 0 },
        { q: "In a class of 40 students, Rohan is ranked 15th from the top. What is his rank from the bottom?", opts: ["25th", "26th", "27th", "24th"], ans: 1 },
        { q: "Select the related word pair: Book : Pages :: ?", opts: ["Car : Tires", "Tree : Leaves", "House : Bricks", "All of the above"], ans: 3 }
    ]
};


