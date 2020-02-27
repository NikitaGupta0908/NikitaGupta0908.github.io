
//=========== This file contains the metadata for the fields ============================//

var myfields = {
        "name": "This is the name of the movie",
        "score": "This is the IMdb rating of the movie",
        "genre": "This field specifies the genre of the movie.",
        "runtime": "This field specifies the runtime of the movie in minutes.",
        "country": "This field specifies the country where the movie was made.",
        "gross": "This is the main revenue produced by the movie. Tip: Use this to build a ML model to predict the gross value of a movie based on these attributes.",
        "year": "This is the year when the movie was produced",
        "star": "This field specifies the lead actor in the movie. Tip: We can use a correlation between actor and gross to predict how well a movie does when a specific actor stars in it.",
        "rating": "This is the rating of the movie (R, PG-13,etc)",
        "tomatometer_status": "Critics reviews categories: Certified fresh: at least 75% of critics reviews are positive and 5 reviews come from top critics, Fresh: at least 60% of the critics reviews are positive and Rotten: less than 60% of the critics reviews are positive,",
        "tomatometer_rating": "This is the average tomatometer rating given to a movie.",
        "tomatometer_count": "This is the average of the number of tomatometer ratings given to a movie",
        "audience_status": "There are three categories: upright: more than 60% viewers have voted positive, spilled: less than 60% viewers have voted positive, and unknown for movies where the status was not recorded.",
        "audience_rating": "This is the average number of audience reviews on a particular movie.",
        "audience_top_critics_count": "This gives us an insight into the audience - reviews (any score) from top critics",
        "audience_fresh_critics_count" : "audience - fresh reviews from critics (top and non-top)",
        "audience_rotten_critics_count" : "audience - rotten reviews from critics (top and non-top)"
    
}
console.log("in metadata file:"+myfields)