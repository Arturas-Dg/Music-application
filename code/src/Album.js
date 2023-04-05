import React from 'react';

const Album = props => {
    const artistExample = {
        "albums": {
          "href": "https://api.spotify.com/v1/browse/new-releases?country=CH&offset=50&limit=50",
          "items": [
            {
              "album_type": "single",
              "artists": [
                {
                  "external_urls": {
                    "spotify": "https://open.spotify.com/artist/5y9wg9qkGBl0n9v9RzaPKu"
                  },
                  "href": "https://api.spotify.com/v1/artists/5y9wg9qkGBl0n9v9RzaPKu",
                  "id": "5y9wg9qkGBl0n9v9RzaPKu",
                  "name": "Capo",
                  "type": "artist",
                  "uri": "spotify:artist:5y9wg9qkGBl0n9v9RzaPKu"
                }
              ],
              "external_urls": {
                "spotify": "https://open.spotify.com/album/2Gm8FjIJ4XAY9Pq9SdhJBU"
              },
              "href": "https://api.spotify.com/v1/albums/2Gm8FjIJ4XAY9Pq9SdhJBU",
              "id": "2Gm8FjIJ4XAY9Pq9SdhJBU",
              "images": [
                {
                  "height": 640,
                  "url": "https://i.scdn.co/image/ab67616d0000b273ec65553ce98439bcf0595e60",
                  "width": 640
                },
                {
                  "height": 300,
                  "url": "https://i.scdn.co/image/ab67616d00001e02ec65553ce98439bcf0595e60",
                  "width": 300
                },
                {
                  "height": 64,
                  "url": "https://i.scdn.co/image/ab67616d00004851ec65553ce98439bcf0595e60",
                  "width": 64
                }
              ],
              "name": "BLOCKROMANTIK - EP",
              "release_date": "2022-12-09",
              "release_date_precision": "day",
              "total_tracks": 6,
              "type": "album",
              "uri": "spotify:album:2Gm8FjIJ4XAY9Pq9SdhJBU"
            }
        ]}
    }

    return (
        <>
            {console.log("1")}
            <h3 className='Header'>New albums & singles</h3>

            <div className='MusicAlbum'>
                <img src={artistExample.albums.items[0].images[1].url} alt='Album cover' className='AlbumCover' />
                <div className='TrackName'>{artistExample.albums.items[0].name}</div>
                <div className='ArtistName'>{artistExample.albums.items[0].artists[0].name}</div>
            </div>
        </>
    )
}

export default Album;