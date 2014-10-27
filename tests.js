Measure = function(measure, unit) {
    this.measure = measure;
    this.unit = unit;
}

Unit = {
    // 3 eggs
    COUNT: 'COUNT',

    // 100ml water, volume is always calculated in ml, so 1 liter
    // will be transformed to 1000
    VOLUME: 'VOLUME',

    // The weight in grams, to 1kg is 1000
    WEIGHT: 'WEIGHT'
}

IngredientParser = {
    BASE_REGEX: '^([0-9]+(\.[0-9]+)?)\\s*(l|liter|dl|cl|ml|g|kg)?.*\\[(.*)\\]',

    parse: function(text) {
        var ingredients = [];

        if (!text) {
            return ingredients;
        }

        var regExp = new RegExp(this.BASE_REGEX, "gm");
        var ingredientMatches = text.match(regExp);

        if (!ingredientMatches) {
            return ingredients;
        }

        for (var i = 0; i < ingredientMatches.length; i++) {
            var ingredient = this.parseIngredient(ingredientMatches[i]);
            ingredients.push(ingredient);
        }

        return ingredients;
    },

    parseIngredient: function(ingredientLine) {
        var regExp = new RegExp(this.BASE_REGEX);
        var match = ingredientLine.match(regExp);
        var measure = this._parseMeasure(parseFloat(match[1]), match[3]);
        return new Ingredient(stemmer(match[4]), measure);
    },

    _parseMeasure: function(measure, unit) {
        var theUnit;

        switch (unit) {
            case 'l':
            case 'liter':
                theUnit = Unit.VOLUME;
                measure *= 1000;
                break;

            case 'dl':
                theUnit = Unit.VOLUME;
                measure *= 100;
                break;

            case 'cl':
                theUnit = Unit.VOLUME;
                measure *= 10;
                break;

            case 'ml':
                theUnit = Unit.VOLUME;
                break;

            case 'kg':
                theUnit = Unit.WEIGHT;
                measure *= 1000;
                break;

            case 'g':
                theUnit = Unit.WEIGHT;
                break;

            default:
                theUnit = Unit.COUNT;
                break;
        }

        return new Measure(measure, theUnit)
    }
}

Ingredient = function(name, measure) {
    this.name = name;
    this.measure = measure;
}

function getIngredient(measure, name, unit) {
    if (!unit) {
        unit = Unit.COUNT;
    }
    var theMeasure = new Measure(measure, unit);
    return new Ingredient(name, theMeasure);
}

QUnit.test("recipe parsing", function(assert) {
    assert.propEqual([], IngredientParser.parse(null));
    assert.propEqual([], IngredientParser.parse("foo"));
    assert.propEqual(
        IngredientParser.parse("Some thing\n1 [egg]"),
        [
            getIngredient(1, 'egg')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n4 [eggs]"),
        [
            getIngredient(4, 'egg')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n4 [egg]s"),
        [
            getIngredient(4, 'egg')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n4 beaten [egg]s, whisk hard!"),
        [
            getIngredient(4, 'egg')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n4 [eggs]\n3 [breads]"),
        [
            getIngredient(4, 'egg'),
            getIngredient(3, 'bread')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n1 liter [milk]\n3 [bread]s"),
        [
            getIngredient(1000, 'milk', Unit.VOLUME),
            getIngredient(3, 'bread')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n1l [milk]\n3 [bread]s"),
        [
            getIngredient(1000, 'milk', Unit.VOLUME),
            getIngredient(3, 'bread')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n1 l [milk]\n3 [bread]s"),
        [
            getIngredient(1000, 'milk', Unit.VOLUME),
            getIngredient(3, 'bread')
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n13 dl [milk]\na"),
        [
            getIngredient(1300, 'milk', Unit.VOLUME)
        ]
    );

    assert.propEqual(
        IngredientParser.parse("Some thing\n13cl [milk]\n"),
        [
            getIngredient(130, 'milk', Unit.VOLUME)
        ]
    );

    assert.propEqual(
        IngredientParser.parse("100 ml lovely skimmed[milk]"),
        [
            getIngredient(100, 'milk', Unit.VOLUME)
        ]
    );

    assert.propEqual(
        IngredientParser.parse("100ml [milk]"),
        [
            getIngredient(100, 'milk', Unit.VOLUME)
        ]
    );

    assert.propEqual(
        IngredientParser.parse("100g [butter]"),
        [
            getIngredient(100, 'butter', Unit.WEIGHT)
        ]
    );

    assert.propEqual(
        IngredientParser.parse("0.5g [yeast]"),
        [
            getIngredient(0.5, 'yeast', Unit.WEIGHT)
        ]
    );

    assert.propEqual(
        IngredientParser.parse("a\n0.5kg [yeast]\nb"),
        [
            getIngredient(500, 'yeast', Unit.WEIGHT)
        ]
    );
});