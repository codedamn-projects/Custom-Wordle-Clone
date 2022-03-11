# Codedamn Projects - Custom Wordle Clone

This is one of the many projects available on [codedamn](https://codedamn.com/projects) to reinforce your learning by building. If you want to become a full stack developer and learn by practicing, feel free to attempt this challenge. Feel free to check out the codedamn [Full Stack Web Development Learning Path](https://codedamn.com/learning-paths/fullstack) to learn more about how to become an awesome full stack developer.


## Instructions

Your challenge is to build out this project and get it looking as close to the design as possible.

You can use **any tools or technologies** you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.
 
You can get the complete idea of the project from checking out the `/designs` folder.

If you have never tried wordle yet, you can try it [here](https://www.nytimes.com/games/wordle/index.html)

### Landing Page 

![home page](https://raw.githubusercontent.com/codedamn-projects/Custom-Wordle-Clone/master/designs/Landing%20Page%20%5BDESKTOP%5D.png)

The page should contain the keyboard and boxes for the characters. The rules remain similar to the actual wordle game. 


1) A random word is chosen 


2) if the entered word is not in dictionary, then the word should not be treated as an actual attempt, but must be prompted to enter the word again
You can this [https://dictionaryapi.dev/](https://dictionaryapi.dev/) as the dictionary api. 

3) on entering a word, each character in it gets a color on the keyboard 
   1) Green : if the letters position is correct on the word 
   2) Yellow : if the letter exists in the word but not in the correct order
   3) Black: if the letter does not exist in the word

#### How to play 

![how to play](https://raw.githubusercontent.com/codedamn-projects/Custom-Wordle-Clone/master/designs/How%20to%20Play%20%5BDESKTOP%5D.png)

The games details are explained in the modal, you can try and rephrase them if you want

## Custom Wordle

Here, we can let the user generate a link for the custom word they choose. 

![custom wordle](https://raw.githubusercontent.com/codedamn-projects/Custom-Wordle-Clone/master/designs/Custom%20Word%20Modal%20%5BDESKTOP%5D.png)

The custom wordle can be shared using the optional key value pair in the URL

For storing the the custom word encrypted on the mongodb database. 

You can use the [Crypto-js](https://www.npmjs.com/package/crypto-js) package. 
Or you can implement your own encryption mechanism. 


### MongoDB Database
```
{
    'originalWord' : string,
    'rotationValue' : number,
    'cipheredWord' : string,
}
```

### Correct Word 

![correct word](https://raw.githubusercontent.com/codedamn-projects/Custom-Wordle-Clone/master/designs/YOU%20WON!%20MODAL%20%5BDESKTOP%5D.png)



### Ports 
The Codedamn Playgrounds exposes only `1337` and `1338` ports on the internet. So you'll be using `localhost` for connecting to the mongodb instance as they are hosted on the same docker container. You can specify it as `localhost:27017` or simple write `localhost`. 


Want some support on the challenge? [Join our discord community](https://cdm.sh/discord) and ask questions in the **#general** channel.

There is no limit you can go beyond the mentioned criteria and create additional functionalities



## Where to find everything

Your task is to build out the project as per the provided screenshots. You will find both a mobile and a desktop version of the design.

The designs are in image formats can be found in `/designs`.

You will find all the required required images in the `/public` folder

## Send feedback!

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please visit [codedamn feedback page](https://codedamn.com/contact)