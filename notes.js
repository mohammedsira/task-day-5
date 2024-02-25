
const data = {

    contact: {
        name: "mohammed sirajudeen",
        email: "mohammedsira18@gmail.com",
        linkedin: "linkedin.com/in/sirajudeen",
        github: "github.com/mohamedsira"
    },

    skills: [
        "progarammer",
        "full stock devaloper",
        "devaloper"
    ],
    experience: [
        {
            title: "civil supervisor",
            company: "royal construction",
            location: "karaikal, india",
            date: "august/2019 - Present",


            responsibilities: [

                "site supervising",
                "office management",
                "planning"]

        },

    ],
    education: [
        {
            degree: "diploma in civil engineering",
            school: "M.E.S high school",
            location: "karaikal, india",
            date: "may/1996 - april/20"
        }
    ],
    certifications: [
        "Certification 1",
        "Certification 2"
    ]
}


const keys = Object.keys(data)


// FOR

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], data[keys[i]])

}

// FOR IN 

for (let key in data) {
    console.log(key[i], data[key[i]]);
}

// FOR OF

for (let key of Object.keys(data)) {
    console.log(key[i], data[key[i]]);
}

// FOR EACH

Object.keys(data).forEach(key => {
    console.log(key[i], data[key[i]]);
});