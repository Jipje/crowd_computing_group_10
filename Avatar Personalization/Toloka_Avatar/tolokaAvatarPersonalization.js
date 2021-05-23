const topTypes = [
    'NoHair', 
    'EyePatch', 
    'Hat', 
    'Hijab',
    'Turban',
    'WinterHat1',
    'WinterHat2',
    'WinterHat3',
    'WinterHat4',
    'LongHairBigHair',
    'LongHairBob',
    'LongHairBun',
    'LongHairCurly',
    'LongHairCurvy',
    'LongHairDreads',
    'LongHairFrida',
    'LongHairFro',
    'LongHairFroBand',
    'LongHairNotTooLong',
    'LongHairSavedSides',
    'LongHairMiaWallace',
    'LongHairStraight',
    'LongHairStraight2',
    'LongHairStraightStrand',
    'ShortHairDreads01',
    'ShortHairDreads02',
    'ShortHairFrizzle',
    'ShortHairShaddyMullet',
    'ShortHairShortCurly',
    'ShortHairShortFlat',
    'ShortHairShortRound',
    'ShortHairShortWaved',
    'ShortHairSides',
    'ShortHairTheCeaser',
    'ShortHairTheCeaserSidePart'
]

const accessoriesTypes = [
    'Blank',
    'Kurt',
    'Prescription01',
    'Prescription02',
    'Round',
    'Sunglasses',
    'Wayfarers'
]

const facialHairColors = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'Platinum',
    'Red'
]

const facialHairTypes = [
    'Blank',
    'BeardMedium',
    'BeardLight',
    'BeardMajestic',
    'MoustacheFancy',
    'MoustacheMagnum'
]

const hairColors = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Platinum',
    'Red',
    'SilverGray'
]

const hatColors = [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White'
]

const clotheTypes = [
    'BlazerShirt',
    'BlazerSweater',
    'GraphicShirt',
    'Hoodie',
    'Overall',
    'ShirtCrewNeck',
    'ShirtScoopNeck',
    'ShirtVNeck'
]

const clotheColors = [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White'
]

const eyeTypes = [
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Hearts',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky'
]

const eyebrowTypes = [
    'Angry',
    'AngryNatural',
    'Default',
    'DefaultNatural',
    'FlatNatural',
    'RaisedExcited',
    'RaisedExcitedNatural',
    'SadConcerned',
    'SadConcernedNatural',
    'UnibrowNatural',
    'UpDown',
    'UpDownNatural'
]

const mouthTypes = [
    'Concerned',
    'Default',
    'Disbelief',
    'Eating',
    'Grimace',
    'Sad',
    'ScreamOpen',
    'Serious',
    'Smile',
    'Tongue',
    'Twinkle',
    'Vomit'
]

const skinColors = [
    'Tanned',
    'Yellow',
    'Pale',
    'Light',
    'Brown',
    'DarkBrown',
    'Black'
]

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

exports.Task = extend(TolokaHandlebarsTask, function (options) {
  TolokaHandlebarsTask.call(this, options);
}, {
    onRender: function() {
        // DOM element for task is formed (available via #getDOMElement()) 
        loadAvatar(this.getDOMElement())
        loadOptions(this.getDOMElement())
    },

    onDestroy: function() {
        // Task is completed. Global resources can be released (if used)
    }
});

function loadOptions(dom) {
    let optionsDiv = dom.querySelector("#types");

    for (const [key, type] of Object.entries(types)) {
        let div = document.createElement("div");
        optionsDiv.appendChild(div);

        let labelElement = document.createElement("label");
        labelElement.for = type.name;
        labelElement.innerText = type.name + ': ';

        div.appendChild(labelElement);
        
        let selectElement = document.createElement("select");
        selectElement.addEventListener("change", function() {
            for (const [key, type] of Object.entries(types)) {
                types[key].selection = dom.querySelector("#"+key).value
            }
            loadAvatar(dom);
        });

        selectElement.setAttribute("name", key);
        selectElement.id =key;

        for (const option of Object.values(type.options)) {
            let optionElement = document.createElement("option");
            optionElement.text = option;
            if (option === type.selection)  optionElement.setAttribute("selected", "selected");
            selectElement.add(optionElement);
        }
        div.appendChild(selectElement);
    }
    
}

function loadAvatar(dom) {
    let url='https://avataaars.io/?';

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

    dom.querySelector("#avatarImage").innerHTML = "<img id='avatar' src='" + url + "' />"
}

function extend(ParentClass, constructorFunction, prototypeHash) {
  constructorFunction = constructorFunction || function () {};
  prototypeHash = prototypeHash || {};
  if (ParentClass) {
    constructorFunction.prototype = Object.create(ParentClass.prototype);
  }
  for (var i in prototypeHash) {
    constructorFunction.prototype[i] = prototypeHash[i];
  }
  return constructorFunction;
}