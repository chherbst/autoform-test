Posts = new Meteor.Collection("posts", {
    schema: {
        title: {
            type: String,
            label: "Title",
            max: 200,
            index: true,
            unique: true
        }
    }
});