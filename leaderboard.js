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

// On server startup, create some ingredientss if the database is empty.
if (Meteor.isServer) {
    Meteor.startup(function () {
        if (Units.find().count() === 0) {
            Units.insert({name: "Inhoud"});
            Units.insert({name: "Aantal"});
            Units.insert({name: "Gewicht"});
        }

        if (Ingredients.find().count() === 0) {
            var units = {
                "inhoud": Units.findOne({name: "Inhoud"}),
                "aantal": Units.findOne({name: "Aantal"}),
                "gewicht": Units.findOne({name: "Gewicht"})
            }

            var ingredients = [
                {name: "Boter", unit: units.gewicht},
                {name: "Kaas", unit: units.gewicht},
                {name: "Eieren", unit: units.aantal},
                {name: "Melk", unit: units.inhoud},
                {name: "Meel", unit: units.gewicht}
            ];

            for (var i = 0; i < ingredients.length; i++) {
                Ingredients.insert(
                    {
                        name: ingredients[i].name,
                        unit: ingredients[i].unit
                    }
                );

            }
        }
    });
}
