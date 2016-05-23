if (Skills.find().count() == 0) {
    let skills = [
        'VB',
        'C#',
        'JavaScript',
        'UI/UX',
        'Java'
    ];

    lodash.each(skills, function(v) {
        Skills.insert({ name: v });
    });
}

if (Projects.find().count() == 0) {
    let projects = [
        {
            owner: Meteor.users.findOne()._id,
            name: 'project name',
            desc: 'project description',
            expectedTimeSpan: {
                length: 2,
                type: Constants.ExpectedTimeSpanType.MONTH
            },
            isProfit: true,
            participants: [
                {
                    userId: undefined,
                    skillRequirements: [
                        {
                            skill: 'SQL',
                            isRequired: false
                        },
                        {
                            skill: 'UI/UX',
                            isRequired: true
                        }
                    ],
                    minReviewCount: 0,
                    minStarRating: 0,
                    wage: 2000
                },
                {
                    userId: undefined,
                    skillRequirements: [
                        {
                            skill: 'Networking',
                            isRequired: false
                        },
                        {
                            skill: 'DBA',
                            isRequired: true
                        }
                    ],
                    minReviewCount: 0,
                    minStarRating: 0,
                    wage: 2000
                },

            ]
        },
        {
            owner: Meteor.users.findOne()._id,
            name: 'project name 2',
            desc: 'project description 2',
            expectedTimeSpan: {
                length: 5,
                type: Constants.ExpectedTimeSpanType.MONTH
            },
            isProfit: true,
            participants: [
                {
                    userId: undefined,
                    skillRequirements: [
                        {
                            skill: 'Java',
                            isRequired: false
                        }
                    ],
                    minReviewCount: 0,
                    minStarRating: 0,
                    wage: 2000
                },
                {
                    userId: undefined,
                    skillRequirements: [
                        {
                            skill: 'DBA',
                            isRequired: true
                        }
                    ],
                    minReviewCount: 0,
                    minStarRating: 0,
                    wage: 2000
                },

            ]
        }
    ];

    lodash.each(projects, function(v) {
        Projects.insert(v);
    })
}