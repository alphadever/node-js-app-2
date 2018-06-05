const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => {
        console.log('Connected to MongoDb ...');
    })
    .catch(er => {
        console.log('Could not connect to MongoDb', er);
    });

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: Boolean
});

async function createCourse() {
    const Course = mongoose.model('Course', courseSchema);
    const course = new Course({
        name: 'node-js',
        author: 'Ben Javani',
        tags: ['node', 'backend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

createCourse();