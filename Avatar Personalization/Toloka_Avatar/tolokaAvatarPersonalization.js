const avatarStyles = [
    'Transparent', 'Circle'
]

const topTypes = [
    'NoHair', 
    'Eyepatch', 
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
    'LongHairShavedSides',
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
    'ShortHairTheCaesar',
    'ShortHairTheCaesarSidePart'
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
        name: "Background",
        options: avatarStyles,
        selection: "Transparent"
    },
    skinColors: {
        name: "Skin",
        options: skinColors,
        selection: "Yellow"
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
    topTypes: {
        name: "Top",
        options: topTypes,
        selection: "NoHair",
        basicOptions: ['NoHair', 'LongHairStraight', 'ShortHairTheCaesar']
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
    accessoriesTypes: {
        name: "Glasses",
        options: accessoriesTypes,
        selection: "Blank"
    },
    facialHairTypes: {
        name: "Facial Hair",
        options: facialHairTypes,
        selection: "Blank"
    },
    facialHairColors: {
        name: "Facial Hair Color",
        options: facialHairColors,
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
    }
}

const groupFourOptions = {
    phaseOne: ['avatarStyles', 'skinColors'],
    phaseTwo: ['topTypes', 'hairColors', 'hatColors'],
    phaseThree: ['eyeTypes'],
    phaseFour: ['mouthTypes'],
    phaseFive: ['eyebrowTypes'],
    phaseSix: ['clotheTypes', 'clotheColors'],
    phaseSeven: ['facialHairTypes', 'facialHairColors', 'accessoriesTypes']
}

const groupTwoOptions = ['avatarStyles', 'skinColors', 'topTypes']

let currentPhase = 1;
let avatar_name = "";
let surveyQuestion = 0;

exports.Task = extend(TolokaHandlebarsTask, function (options) {
TolokaHandlebarsTask.call(this, options);
}, {
    // Called when a task is to be created
    onRender: function() {
        // Get relevant data from DOM and append the current phase for this task inside the DOM so it can be used later
        let isTaskElement = this.getDOMElement().querySelector("#isTask");
        let groupElement  = this.getDOMElement().querySelector("#group");
        let avatarElement = this.getDOMElement().querySelector("#avatarImage");
        let postSurvey = this.getDOMElement().querySelector("#postSurvey");
        this.getDOMElement().querySelector("#phase").innerHTML = currentPhase;

        // If surveyQuestion < 2  => show survey question
        if (surveyQuestion < 2 && groupElement.innerHTML !== '6') {
            avatarElement.style.display = 'none';
            postSurvey.style.display='none';
            this.getDOMElement().querySelector("#avatar_name_input").remove();
            this.getDOMElement().querySelector("#task").style.display = 'none';
            surveyQuestion++;

        } else if (groupElement.innerHTML === '6'){
            loadSurvey(this.getDOMElement(), this.getSolution().task_id);

        } else {
            postSurvey.style.display='none';
            this.getDOMElement().querySelector("#survey").style.display='none';
            // Load avatar only if group number isn't 1
            if (groupElement.innerHTML !== '1') loadAvatar(this.getDOMElement());
            else avatarElement.remove();

            // Is avatar customization, so remove the task div and load options, and increment currentPhase
            if (isTaskElement.innerText !== "true") {
                this.getDOMElement().querySelector("#task").remove();
                loadOptions(this.getDOMElement());
                if (currentPhase > 1) this.getDOMElement().querySelector("#avatar_name_input").remove();
                currentPhase++;

            // Is a task, remove avatar name input area and display avatar name on top
            } else {
                this.getDOMElement().querySelector("#avatar_name_input").remove();
                this.getDOMElement().querySelector("#avatar_name").innerHTML = avatar_name;
            }
        }
        // Hide isTask and group number that is stored in the DOM
        isTaskElement.style.display = 'none';
        groupElement.style.display = 'none';
    },

    // Task is in focus, reload the avatar and show avatar name if group for the task isn't 1
    onFocus: function() {
        let groupElement = this.getDOMElement().querySelector("#group");
        if (groupElement.innerHTML !== '1') {
            loadAvatar(this.getDOMElement());
            this.getDOMElement().querySelector("#avatar_name").innerHTML = avatar_name;
        }
    },

    // Task is out of focus, if this is first task, get the answer for the 'middle name' output (hidden as avatar name) and update global avatar name
    onBlur: function() {
        if (this.getSolution().task_id === "1" ) avatar_name = this.getSolution().output_values.middle_name;
    }
});

// Load the avatar options
function loadOptions(dom) {
    // Get needed data from DOM
    let optionsDiv = dom.querySelector("#types");
    let group      = dom.querySelector("#group").innerHTML;
    let phase      = dom.querySelector("#phase").innerHTML;

    // Loop through all types of options
    for (const [key, type] of Object.entries(types)) {
        
        // Is the group number 4? --> Does the current phase include this option? --> Go on and load it
        // Is the group number 3? --> Go on and load it (so, all options)
        if ((getCurrentPhaseOptions(phase).includes(key) && group === '4') ||
             (groupTwoOptions.includes(key) && group === '2') ||
             group === '3') {
            
            // Create a new div that will store the new option and append it to the div that contains the options
            let div = document.createElement("div");
            div.setAttribute("id", "avatar_option");
            optionsDiv.appendChild(div);

            // Create the label for the new option and append it to newly created div
            let labelElement = document.createElement("label");
            labelElement.for = type.name;
            labelElement.innerText = type.name + ': ';
            div.appendChild(labelElement);
            
            // Create the select element and add a 'change' event listener to it
            let selectElement = document.createElement("select");
            selectElement.addEventListener("change", function() {
                // Update selection
                types[this.name].selection = this.value;

                // Load new avatar
                loadAvatar(dom);
            });

            selectElement.setAttribute("name", key);

            // Loop through all the options of the current type and append it as an option to the current select element
            for (const option of Object.values(type.options)) {
                if (group === '2' && type.name === 'Top' && !types.topTypes.basicOptions.includes(option)) 
                    continue;
                let optionElement = document.createElement("option");
                optionElement.text = option;
                // Set the default options as selected
                if (option === type.selection)  optionElement.setAttribute("selected", "selected");
                selectElement.add(optionElement);
            }
            div.appendChild(selectElement);
        }
    }
}

function loadAvatar(dom) {
    let url='https://avataaars.io/?';

    // Append the latest options to the url
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

    // Append avatar with url to dom
    dom.querySelector("#avatarImage").innerHTML = "<img id='avatar' src='" + url + "' />";
}

function loadSurvey(dom, task_id) {
    avatar_name = ' ';
    dom.querySelector("#survey").style.display='none';
    dom.querySelector("#task").style.display='none';
    dom.querySelector("#avatarImage").style.display='none';
    dom.querySelector("#phase").style.display='none';
    dom.querySelector("#avatar_name_input").style.display='none';
    dom.querySelector("#avatar_name").style.display='none;'

    if (task_id === "0") {
        dom.querySelector("#post2").style.display='none';
        dom.querySelector("#post3").style.display='none';
        dom.querySelector("#post4").style.display='none';

    } else if (task_id === "1") {
        dom.querySelector("#post1").style.display='none';
        dom.querySelector("#post3").style.display='none';
        dom.querySelector("#post4").style.display='none';

    } else if (task_id === "2") {
        dom.querySelector("#post1").style.display='none';
        dom.querySelector("#post2").style.display='none';
        dom.querySelector("#post4").style.display='none';

    } else if (task_id === "3") {
        dom.querySelector("#post1").style.display='none';
        dom.querySelector("#post2").style.display='none';
        dom.querySelector("#post3").style.display='none';
        
        let image = new Image();
        image.src= "https://raw.githubusercontent.com/Jipje/crowd_computing_group_10/survey/Avatar%20Personalization/Self-Assessment-Manikin.png";
        image.alt = "Self Assesment Manikin";
        dom.querySelector("#sam").appendChild(image)
    }
}

// Given a phase number, get a list of options
function getCurrentPhaseOptions(phase) {
    switch(parseInt(phase)) {
        case 1: return groupFourOptions.phaseOne;
        case 2: return groupFourOptions.phaseTwo;
        case 3: return groupFourOptions.phaseThree;
        case 4: return groupFourOptions.phaseFour;
        case 5: return groupFourOptions.phaseFive;
        case 6: return groupFourOptions.phaseSix;
        case 7: return groupFourOptions.phaseSeven;
    }
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