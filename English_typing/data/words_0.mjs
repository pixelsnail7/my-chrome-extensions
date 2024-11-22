export function words_(type) {
    switch (type) {
        case "color":
            return ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "magenta", "cyan", "turquoise", "teal", "lavender", "peach", "coral", "mint", "olive", "maroon", "gold", "silver", "burgundy", "navy", "charcoal", "lilac", "salmon"];
        case "animal":
            return ["dog", "cat", "bird", "fish", "horse", "cow", "pig", "sheep", "goat", "duck", "chicken", "rabbit", "bear", "lion", "tiger", "elephant", "monkey", "giraffe", "zebra", "panda", "koala", "kangaroo", "penguin", "whale", "dolphin"];
        case "home appliance 1":
            return ["bed", "table", "chair", "lamp", "television", "fridge", "stove", "sink", "toilet", "shower", "bathroom mirror", "wardrobe", "couch", "coffee table", "bookshelf", "computer", "phone", "vacuum cleaner",  "washing machine", "dining table"];
        case "home appliance 2":
            return [ "blender", "microwave", "dishwasher", "washing machine", "dryer", "iron", "steamer", "slow cooker", "stand mixer", "food processor", "juicer", "coffee maker", "toaster", "kettle", "vacuum cleaner", "mop", "broom", "dustpan", "scrub brush", "garden hose", "lawn mower"];
        default:
            return ["apple", "banana", "orange", "mango", "grapes", "strawberry", "pineapple", "watermelon", "peach", "pear", "cherry", "plum", "kiwi", "blueberry", "raspberry", "papaya", "avocado", "fig", "lychee"];
    }
}

