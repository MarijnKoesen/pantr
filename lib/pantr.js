// Set up a collection to contain ingredients information. On the server,
// it is backed by a MongoDB collection named "ingredientss".

Products = new Mongo.Collection("products");
Ingredients = new Mongo.Collection("ingredients");
Units = new Mongo.Collection("units");
Pantry = new Mongo.Collection("pantry");

parseIngredients = function(text) {
}

if (Meteor.isClient) {
    Template.ingredients.helpers({
        ingredients: function () {
            return Ingredients.find({}, {sort: {score: -1, name: 1}});
        },
        selected_name: function () {
            var ingredients = Ingredients.findOne(Session.get("selected_ingredients"));
            return ingredients && ingredients.name;
        }
    });

    Template.ingredients.helpers({
        selected: function () {
            return Session.equals("selected_ingredients", this._id) ? "selected" : '';
        }
    });

    Template.ingredients.events({
        'click button.inc': function () {
            Ingredients.update(Session.get("selected_ingredients"), {$inc: {score: 5}});
        }
    });

    Template.ingredients.events({
        'click': function () {
            Session.set("selected_ingredients", this._id);
        }
    });
}