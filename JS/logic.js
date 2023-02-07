var affirmations = [
    "I am in the right place at the right time, doing the right thing",
    "Conscious breathing is my anchor",
    "You are loved just for being who you are, just for existing",
    "The chance to love and be loved exists no matter where you are",
    "Courage starts with showing up and letting ourselves be seen",
    "Make way for the unprecedented and watch your reality rearrange yourself",
    "Open your heart and drink in the glorious day",
    "Am I good enough? Yes I am",
    "The perfect moment is this one",
    "I am deliberate and afraid of nothing",
    "Your life is about to be incredible",
    "Who you are inside is what helps you make and do everything in life",
    "Your perspective is unique. It's important and it counts",
    "Every day above earth is a good day",
    "Nothing can dim the light that shines from within",
    "You must do the things you think you cannot do",
    "The secret of attraction is to love yourself",
    "Good riddance to decisions that don't support self-care, self-value, and self-worth",
    "I am the greatest. I said that even before I knew I was",
    "I say looking on the bright side of life never killed anybody",
    "I'm better than I used to be. Better than I was yesterday. But hopefully not as good as I'll be tomorrow",
    "I have never ever focused on the negative of things. I always look at the positive",
    "I'm giving you permission to root for yourself and while you're at it root for those around you, too",
    "We must accept finite disappointment, but never lose infinite hope",
    "Your life is already a miracle of chance waiting for you to shape its destiny",
    "If you really think small, your world will be small. If you think big, your world will be big",
    "Embrace the glorious mess that you are",
    "The ultimate truth of who you are is not I am this or I am that, but I am",
    "Gratitude is a celebration we are all invited to",
    "We must be willing to let go of the life we planned so as to have the life that is waiting for us",
    "Nothing is impossible. The word itself says 'I'm possible!'",
    "The only courage you ever need is the courage to fulfill the dreams of your own life",
    "Failure is just another way to learn how to do something right",
    "The emotion that can break your heart is sometimes the very one that heals it",
    "Your crown has been bought and paid for. Put it on your head and wear it",
    "Everything passes if you learn to hold things lightly",
    "Write it on your heart that every day is the best day in the year",
    "Hold up your head! You were not made for failure, you were made for victory",
    "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely",
    "There is nothing either good or bad, but thinking makes it so",
    "Sometimes it takes only one act of kindness and caring to change a person's life",
    "Carry out a random act of kindness, with no expectation of reward, safe in the knowledge that one day someone might do the same for you",
    "Because that's what kindness is. It's not doing something for someone else because they can't, but because you can",
    "Remember there's no such thing as a small act of kindness. Every act creates a ripple with no logical end",
    "Love and kindness are never wasted. They always make a difference. They bless the one who receives them, and they bless you, the giver",
    "What wisdom can you find that is greater than kindness?",
    "You can accomplish by kindness what you cannot by force",
    "Kindness can become its own motive. We are made kind by being kind",
    "Human kindness has never weakened the stamina or softened the fiber of a free people. A nation does not have to be cruel to be tough",
    "We can't help everyone, but everyone can help someone",
    "Kindness begins with the understanding that we all struggle",
    "A single act of kindness throws out roots in all directions, and the roots spring up and make new trees",
    "Wherever there is a human being, there is an opportunity for a kindness",
    "Unexpected kindness is the most powerful, least costly, and most underrated agent of human change",
    "I've been searching for ways to heal myself, and I've found that kindness is the best way",
];
var affirmationsSection = $('.affirmations')
var finalOutput = []
var num = ""
var random = ""
var button = $('.button')

function getRandom(arr) {

    //create the array random item and return item value to other function
    var random = arr[Math.floor(Math.random() * arr.length)];
    return (random);
}

// load with affirmations
function init() {
    for (var i = 0; i < 1; i++) {
        // Function for getting a random element from the array
        //Add random quote to a new card
        var one = getRandom(affirmations)
        affirmationsSection.append(`
        <Section class="card">${one}</Section>
    `);
        var two = getRandom(affirmations)

        //check the 2nd card quote is not the same as the 1st then add to the card or randomise again
        while (one === two) {
            var two = getRandom(affirmations)
        }
        affirmationsSection.append(`
        <Section class="card">${two}</Section>
    `)
    }

}

// button click affirmations
button.click(function (event) {
    event.stopPropagation();
    affirmationsSection.html('')
    init();
})

init();