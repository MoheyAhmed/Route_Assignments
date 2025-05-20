let quotes = [
    {
        'author': "Oscar Wilde",
        'quote': "“Be yourself; everyone else is already taken.”",
    },
    {
        'author': "Frank Zappa",
        'quote': "“So many books, so little time.”",
    },
    {
        'author': "Albert Einstein",
        'quote':
            "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    },
    {
        'author': " Bernard M. Baruch",
        'quote':
            "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    },
    {
        'author': "William W. Purkey",
        'quote':
            "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
    },
    {
        'author': "Dr. Seuss",
        'quote':
            "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
    },
    {
        'author': "Mae West",
        'quote': "“You only live once, but if you do it right, once is enough.”",
    },
    {
        'author': "Mahatma Gandhi",
        'quote': "“Be the change that you wish to see in the world.”",
    },
    {
        'author': "Robert Frost",
        'quote':
            "“In three words I can sum up everything I've learned about life: it goes on.”",
    },
    {
        'author': "J.K. Rowling, Harry Potter and the Goblet of Fire",
        'quote':
            "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    },
    {
        'author': "Mark Twain",
        'quote': "“If you tell the truth, you don't have to remember anything.”",
    },
    {
        'author': "Oscar Wilde",
        'quote':
            "“To live is the rarest thing in the world. Most people exist, that is all.”",
    },
    {
        'author': "Elbert Hubbard",
        'quote': "“A friend is someone who knows all about you and still loves you.”",
    },
    {
        'author': "Mahatma Gandhi",
        'quote':
            "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    },
];



let randNumberList = []
function addQuote() {
    let randNumber = parseInt(Math.random() * quotes.length);
    if(randNumber != randNumberList[-1]){
        console.log(randNumber);
        document.getElementById("quote").innerHTML = `${quotes[randNumber].quote}`;
        document.getElementById("author").innerHTML = `${quotes[randNumber].author}`;
        randNumberList.push(randNumber)
    }
}
