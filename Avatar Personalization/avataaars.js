const types = {
    avatarStyles: {
        name: "Background Style",
        options: ['Transparent', 'Circle'],
        selection: "Transparent"
    },
    topTypes: {
        name: "Top",
        options: topTypes,
        selection: "NoHair"
    },
    accessoriesTypes: {
        name: "Accessories",
        options: accessoriesTypes,
        selection: "Blank"
    },
    facialHairColors: {
        name: "Facial Hair Color",
        options: facialHairColors,
        selection: "Black"
    },
    facialHairTypes: {
        name: "Facial Hair",
        options: facialHairTypes,
        selection: "Blank"
    },
    hairColors: {
        name: "Hair Color",
        options: hairColors,
        selection: "Black"
    },
    hatColors: {
        name: "Hat Color",
        options: hatColors,
        selection: "Black"
    },
    clotheTypes: {
        name: "Clothes",
        options: clotheTypes,
        selection: "ShirtScoopNeck"
    },
    clotheColors: {
        name: "Fabric Colour",
        options: clotheColors,
        selection: "Black"
    },
    eyeTypes: {
        name: "Eyes",
        options: eyeTypes,
        selection: "Default"
    },
    eyebrowTypes: {
        name: "Eyebrow",
        options: eyebrowTypes,
        selection: "Default"
    },
    mouthTypes: {
        name: "Mouth",
        options: mouthTypes,
        selection: "Default"
    },
    skinColors: {
        name: "Skin",
        options: skinColors,
        selection: "Yellow"
    }
}

// Load default avatar
loadAvatar();

// Append options to dropdown menu
let optionsDiv = document.getElementById("types");

for (const [key, type] of Object.entries(types)) {
    let div = document.createElement("div");
    optionsDiv.appendChild(div);

    let labelElement = document.createElement("label");
    labelElement.for = type.name;
    labelElement.innerText = type.name + ': ';

    div.appendChild(labelElement);
    
    let selectElement = document.createElement("select");
    selectElement.setAttribute("onchange", "change(this)");
    selectElement.setAttribute("name", key);

    for (const option of Object.values(type.options)) {
        let optionElement = document.createElement("option");
        optionElement.text = option;
        if (option === type.selection)  optionElement.setAttribute("selected", "selected");
        selectElement.add(optionElement);
    }
    div.appendChild(selectElement);
}

function loadAvatar() {
    let url='https://avataaars.io/?';

    // Construct the default URL
    url = url +
    'avatarStyle='      + types.avatarStyles.selection        + '&' +
    'topType='          + types.topTypes.selection            + '&' +
    'accessoriesType='  + types.accessoriesTypes.selection    + '&' +
    'facialHairColor='  + types.facialHairColors.selection    + '&' +
    'facialHairType='   + types.facialHairTypes.selection     + '&' +
    'hairColor='        + types.hairColors.selection          + '&' +
    'hatColor='         + types.hatColors.selection           + '&' +
    'clotheType='       + types.clotheTypes.selection         + '&' +
    'clotheColor='      + types.clotheColors.selection        + '&' +
    'eyeType='          + types.eyeTypes.selection            + '&' +
    'eyebrowType='      + types.eyebrowTypes.selection        + '&' +
    'mouthType='        + types.mouthTypes.selection          + '&' +
    'skinColor='        + types.skinColors.selection          + '&';

    // Append avatar based on options
    let avatarDiv = document.getElementById("avatarImage");
    let avatar = document.createElement("img");
    avatar.id = "avatar";
    avatar.src = url;
    avatarDiv.appendChild(avatar);
}


function change(selector) {
    // Update selection
    types[selector.name].selection = selector.value;

    // Remove old avatar
    let avatar = document.getElementById("avatar");
    avatar.remove();
    
    // Load new avatar
    loadAvatar();
}