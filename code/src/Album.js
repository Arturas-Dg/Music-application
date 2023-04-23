import React from 'react';

const Album = (props) => {
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

    const HeartSVG = 
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="643.3062133789062 967.6079711914062 8215.65625 7558.61279296875" width="115" height="115">
        <path style="line-height:normal;font-variant-ligatures:normal;font-variant-position:normal;font-variant-caps:normal;font-variant-numeric:normal;font-variant-alternates:normal;font-feature-settings:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;text-orientation:mixed;white-space:normal;shape-padding:0;isolation:auto;mix-blend-mode:normal;solid-color:#000;solid-opacity:1" d="M3108.104 967.608c-783.138 72.125 -1298.278 302.981 -1754.753 746.362h-1.596C413.315 2669.422 413.315 4185.347 1315.345 5158.558a240.798 240.798 0 0 0 49.462 76.092h1.637l3218.642 3226.085a222.509 222.509 0 0 0 313.657 1.637l3218.642 -3212.298 8.347 -7.98 2.703 -2.703 17.019 -14.69 6.343 -6.71a2504.722 2504.722 0 0 0 -39.683 -3528.496c-930.092 -912.169 -2381.864 -923.382 -3358.349 -94.218 -475.091 -408.976 -1056.746 -633.121 -1647.448 -626.418zm5.97 443.015a2049.021 2049.021 0 0 1 1455.949 583.992l14.316 14.316 7.98 7.98a222.509 222.509 0 0 0 128.291 63.779 29.455 29.455 0 0 1 11.416 1.637 223.249 223.249 0 0 0 21.767 0 222.142 222.142 0 0 0 65.782 -11.416 2036.341 2036.341 0 0 0 21.026 -8.347l9.406 -4.34 10.309 -5.97 2.703 -2.003 6.71 -2.703 2.003 -2.003 0.367 -1.637a222.142 222.142 0 0 0 34.772 -28.103 2052.987 2052.987 0 0 1 2893.038 -11.416 2052.458 2052.458 0 0 1 33.339 2898.274l-1.637 1.637 -15.057 14.316 -6.343 7.98a168.347 168.347 0 0 0 -13.053 13.053l-3055.042 3048.332 -3048.658 -3052.624a2052.987 2052.987 0 0 1 -26.1 -2905.351l2.37 -1.637h0.367a2049.714 2049.714 0 0 1 1443.636 -616.068z" color="#000" fontWeight="400" fontFamily="sans-serif" overflow="visible" paintOrder="fill markers stroke"/>
      </svg>
 


    return (
         <>
            {/* {console.log("1")}
            <h3 className='Header'>New albums & singles</h3>
            <div className='MusicAlbum'> */}
              <div className='CoverContainer'>
                <img src={artistExample.albums.items[0].images[1].url} alt='Album cover' className='AlbumCover' ></img>
                {HeartSVG}
              </div>
                {/* <div className='TrackName'>{artistExample.albums.items[0].name}</div>
                <div className='ArtistName'>{artistExample.albums.items[0].artists[0].name}</div>
            </div>  */}
      
        </>
    )
}

export default Album;