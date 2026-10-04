// possible messages to display
const messagesArray = [
    "Barbarism is needed every four or five hundred years to bring the world back to life. Otherwise it would die of civilization. - Edmond de Goncourt, 1822 - 1896",
    "The world is a dangerous place to live; not because of the people who are evil, but because of the people who don't do anything about it. - Albert Einstein, 1879 - 1955",
    "Strength isn’t built in the moments you feel powerful, but in the moments you choose not to quit.",
    "The only way to do great work is to love what you do. - Steve Jobs, 1955 - 2011",
    "Growth feels uncomfortable because you’re becoming someone you’ve never been before."
]
function getRandomMessage() {
    // get a random index from the messages array
    const randomIndex = Math.floor(Math.random() * messagesArray.length);
    const message = messagesArray[randomIndex];
    return console.log(message);
}
getRandomMessage();