// Deliverables //

// As a user, I should be able to navigate to the page and see the top 3-5 tracks from one artist.

// As a user, I should be able to submit a review of tracks.

// As a user, I can view additional details on a specific track.



GET https://api.spotify.cm/v1/artists/7jVv8c5Fj3E9VhNjxT4snq/top-tracks


curl -X "GET" "https://api.spotify.com/v1/artists/7jVv8c5Fj3E9VhNjxT4snq/top-tracks?market=United%20States" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQAhy4VBEPdmfw5Ep_i1OARTzHGhpbN2hTrzgmHUlZFe7NpS2j2uutZoRznXENZBbEyljurx5RGP9cKPs1KO42Rx0z5PdFlErBOcdkdfxJH7HOoK0PhG7I2cNmbm8U02bCFgNumIfSnnjmeMMKMCbIMFu3SZzcdf-nndZrChHw"