Meteor.startup(function () {
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
