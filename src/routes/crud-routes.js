import {MongoClient} from 'mongodb'
import {ObjectId} from 'mongodb'

let db

MongoClient.connect('mongodb://localhost/mern').then(connection => {
  db = connection
}).catch(error => {
  console.log('Error:', error)
})

const crudRoutes = (app) => {
  app.get('/api', (req, res) => {
    db.collection('posts').find().toArray().then(data => {
      res.json({posts: data})
    }).catch(error => {
      res.status(500).json({message: `Internal Server Error: ${error}`})
    })
  })

  app.post('/api', (req, res) => {
    const post = req.body
    post.created = new Date()
    db.collection('posts').insertOne(post).then(post => {
      db.collection('posts').findOne({_id: post.insertedId})
    }).then(data => {
      res.json({posts: data})
    }).catch(error => {
      res.status(500).json({message: `Internal Server Error: ${error}`})
    })
  })

  app.put('/api/:id', (req, res) => {
    const postId = new ObjectId(req.params.id)
    const post = req.body
    post.updated = new Date()
    db.collection('posts').updateOne({_id: postId}, {$set:{ title: post.title, updated: post.updated, content: post.content, handle: post.handle}}).then(data => {
      res.json({posts: data})
    }).catch(error => {
      res.status(500).json({message: `Internal Server Error: ${error}`})
    })
  })

  app.delete('/api/:id', (req,res) => {
    const postId = new ObjectId(req.params.id)
    db.collection('posts').deleteOne({_id: postId}).then(post => {
      res.json({status: 'OK'})
    }).catch(error => {
      res.status(500).json({message: `Internal Server Error: ${error}`})
    })
  })
}

export default crudRoutes
