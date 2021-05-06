/*
    Dependencides
*/

    const express = require('express')

/*
    Config - express
*/

    const app = express()

/*
    Endpoints
*/

    app.get('/posts', (request, response) => {
        let posts = [
            {
                caption: 'Golden Gate Bridge',
                location: 'San Francisco'
            },
            {
                caption: 'London Eye',
                location: 'London'
            }
        ]
        response.send(posts)
    })

/*
    Listen
 */

    app.listen(process.env.PORT || 3000)