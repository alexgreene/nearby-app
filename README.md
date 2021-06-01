# Nearby App

### Setup:

This project requires the Yelp API key be placed in a .env file in the nearby-app folder at the top level, with just the following line inside:
REACT_APP_API_KEY=place_key_here

To Run: npm start

### Description:

Nearby App allows a person to search for businesses nearby. Because "nearby" is the focus of the search, I chose to sort by distance from the location that is searched. I chose to highlight the distance in meters for the same reason.

When you tap on the name of one of the businesses, the app presents you with some more information, inline. I chose to keep everything inline rather than presenting a modal or a separate page for two reasons:

1. The scope of this project was to be small
2. The amount of additional information that could be surfaced within this scope was not enough to warrant an entirely separate view.

The further information that is revealed when tapped is the following -- 

1. The address -- I believe if the user is trying to find which businesses are the closest, the distance in meters is the most helpful data point. It's easy to scroll through these results and compare them by that single number. Addresses are much more difficult to scan while scrolling, so I hid them.

2. The phone number -- Again, you'd only need the phone number if you were interested, so this does not need be shown immediately.

3. The rating -- Initially I had the rating shown immediately, but I chose to hide it until the business is expanded because:
- Ratings are not relevant to every search, and can sometimes distract. I sometimes prefer to avoid relying on Yelp ratings.
- You can just expand the businesses you're interested in and scroll between them to compare ratings, without being distracted by the ratings from every single search result.

*I chose to add a star for businesses that had a rating of 4.5 or above, in addition to scaling the orange bar based next to the rating, based on the rating. This adds a bit of visual interest while also being helpful if you do choose to compare by rating.*

4. The primary photo from Yelp.

---

I chose to spend more time styling the app than expanding functionality. The goal of the app was to help people find businesses nearby, and I believed making that basic information more readable was more helpful to someone than anything else.

I did also add an error message for searches that fail.


#### Sketches I drew at the beginning of the project

![IMG_9667](https://user-images.githubusercontent.com/271842/120261805-8257e200-c24d-11eb-986f-267a32685d05.jpg)
![IMG_9668](https://user-images.githubusercontent.com/271842/120261812-84ba3c00-c24d-11eb-9e94-06963bfba420.jpg)



