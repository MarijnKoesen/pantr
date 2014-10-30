// Set up a collection to contain ingredients information. On the server,
// it is backed by a MongoDB collection named "ingredientss".

Products = new Mongo.Collection("products");
Ingredients = new Mongo.Collection("ingredients");
Units = new Mongo.Collection("units");
Pantry = new Mongo.Collection("pantry");
Recipes = new Mongo.Collection("recipe");

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

    Template.recipes.helpers({
        recipes: function () {
            return Recipes.find({}, {sort: {name: 1}});
        }
    });

    Template.recipe.helpers({
        selected: function () {
            return Session.equals("opened_recipe", this._id) ? "selected" : '';
        }
    });

    Template.recipes.events({
        'click': function () {
            Session.set("opened_recipe", this._id);
        }
    });

    Template.registerHelper('recipe', function(data) {
        data = data.replace(/(\[Ingredi.nten[^\]]*])([\s\S.]*)\[\/ingredi.nten]/i, "### Ingredienten\n\n$2");
        data = data.replace(/\[([^\]]+)]/g, function(match, contents, offset, s) {
            var haveStock = Math.random() < 0.5;

            if (haveStock) {
                var stock = Math.round(Math.random() * 100);
                return '<span title="We haz ' + stock + ' left" class="recipeIngredient inStock">' + contents + '</span>';
            } else {
                return '<span title="We haz no ' + contents + ' in the pantry :(" class="recipeIngredient outOfStock">' + contents + '</span>';
            }
        });
        return data;
    });
}
