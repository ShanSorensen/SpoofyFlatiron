// Deliverables //

// As a user, I should be able to navigate to the page and see the top 3-5 tracks from one artist.

// As a user, I should be able to submit a review of tracks.

// As a user, I can view additional details on a specific track.
 
  GET https://api.spotify.com/v1/artists/{id}/top-tracks

curl -X "GET" "https://api.spotify.com/v1/artists/1dfeR4HaWDbWqFHLkxsg1d/top-tracks" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQBvLHhJphx7bnpTCTk-TxPCJMZsT7-8iQqlfoQjV5oyULRZ8oiSRV_OukqXJ8KYbLf8z6WPr9wT6sOH0JxIuUGWGQt27E5kgM1qNsiR4TpFFzOIUJo1SpKWZN2epbYzrVuFe-lHQoRyrRtWNu7AdFtZGthdtHCD5f8"