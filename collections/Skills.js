Skills = new Mongo.Collection('skills');

Skills.allow({
    insert: function(userId, doc) {
        // true if userId exists
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});


Schemas.Skill = new SimpleSchema({
    _id: {
        type: String,
        label: 'Id'
    },
    name: {
        type: String,
        label: 'Name'
    }
});

Skills.attachSchema(Schemas.Skill);



Meteor.methods({
    addSkill: function(obj, callback) {
        Skills.insert(obj, callback);
    },
    updateSkill: function(obj, callback) {
        let id = obj._id;
        delete obj._id;
        Skills.update({_id: id}, {$set: obj}, callback);
    },
    deleteSkill: function(id) {
        Skills.remove(id);
    }
})