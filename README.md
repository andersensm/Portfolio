## **Sean Andersen's Portfolio**

In this web application, I describe myself and some of the work I have accomplished that can relate to my personality.

## **Code Style**

Object-Oriented Programming (OOP).

## **Deployed**

https://andersensm.github.io/Portfolio/

## **Technologies and frameworks used**

**Built with**

- [Bootstrap](https://getbootstrap.com/) and Custom CSS
- Vanilla [JavaScript](https://www.javascript.com/)
- [jQuery](https://jquery.com/)
- [OMDB](http://www.omdbapi.com/) API
- [GIFY](https://developers.giphy.com/) API

## **Features**

- About Page, that describes myself
- Portfolio Page, contains four web applications that I have built. Includes a Food Hangman, Disney Trivia, Gify Generator, and Movie search.


## **Code Example**

When an image is clicked within the Gify Generator, the image can be paused and resumed:

      $('img').off().on("click", function() {
        var status = $(this).attr("data")
        if (status === "still") {
          $(this).attr("src", $(this).attr("src-animate"));
          $(this).attr("data", "animated");
        } else if (status === "animated") {
          $(this).attr("src", $(this).attr("src-still"));
          $(this).attr("data", "still");
        }
      })

## **Installation**


**Requirements:**

- Web Browser

## **Credits**

This application was built by [Sean](https://github.com/andersensm)-- Full Stack Web Development Students at George Washington University's Coding Boot Camp.

## **License**

Attribution-NonCommercial 4.0

International (CC BY-NC 4.0)
