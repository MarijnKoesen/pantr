IngredientParser = {
    parse: function(text) {
        if (!text) {
            return [];
        }

        var ingredients = [];
        var ingredientMatches = text.match(/^([0-9]+) \[(.*)\]/gm)

        console.log(ingredientMatches);

        for (var i = 0; i < ingredientMatches.length; i++) {
            var ingredient = this.parseIngredient(ingredientMatches[i]);
            ingredients.push(ingredient);
        }

        return ingredients;
    },

    parseIngredient: function(ingredientLine) {
        var match = ingredientLine.match(/^([0-9]+) \[(.*)\]/);
        return new Ingredient(parseInt(match[1]), stemmer(match[2]));
    }
}

Ingredient = function(measure, name) {
    this.measure = measure;
    this.name = name;
}

QUnit.test("recipe parsing", function(assert) {
    assert.propEqual([], IngredientParser.parse(null));
    assert.propEqual(
        IngredientParser.parse("Some thing\n1 [egg]"),
        [
            new Ingredient(1, 'egg')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n4 [eggs]"),
        [
            new Ingredient(4, 'egg')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n4 [egg]s"),
        [
            new Ingredient(4, 'egg')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n4 [eggs]\n3 [breads]"),
        [
            new Ingredient(4, 'egg'),
            new Ingredient(3, 'bread')
        ]
    );
});