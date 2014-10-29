Meteor.startup(function () {
    function importRecipes() {
        var fs = Npm.require('fs');
        var dir = '../../../../../../recipes/';
        console.log('Trying to read recipes in directory: ' + fs.realpathSync(dir));
        var files = fs.readdirSync(dir);

        for (var i = 0; i < files.length; i++) {
            var path = dir + files[i];
            console.log('Importing recipe: ' + path);


            if (fs.statSync(path).isFile()) {
                var recipeName = ucWords(files[i].replace(/-/g, " ")).replace(/\.md$/, "");
                var recipeContent = fs.readFileSync(path, {encoding: "UTF-8"});

                Recipes.insert({
                    name: recipeName,
                    content: recipeContent.replace(/\n/g, "<br>"),
                    rawContent: recipeContent
                })
            }
        }
    }

    if (Recipes.find().count() === 0) {
        importRecipes();
    }

    if (Units.find().count() === 0) {
        Units.insert({name: "Inhoud"});
        Units.insert({name: "Aantal"});
        Units.insert({name: "Gewicht"});
    }

    Ingredients.remove({});

    if (Ingredients.find().count() === 0) {
        var units = {
            "inhoud": Units.findOne({name: "Inhoud"}),
            "aantal": Units.findOne({name: "Aantal"}),
            "gewicht": Units.findOne({name: "Gewicht"})
        }

        /*
        var ingredients = [
            {name: "Boter", unit: units.gewicht},
            {name: "Kaas", unit: units.gewicht},
            {name: "Eieren", unit: units.aantal},
            {name: "Melk", unit: units.inhoud},
            {name: "Meel", unit: units.gewicht}
        ];
        */

        for (var i = 0; i < taxonomy.ingredients.length; i++) {
            var ingredient = taxonomy.ingredients[i];

            Ingredients.insert(
                {
                    name: ingredient.replace(/.*\//, ""),
                    unit: units.gewicht
                }
            );

        }
    }
});
