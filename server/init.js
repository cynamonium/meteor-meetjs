Meteor.publish("Doges", function () {
  return Doges.find({}, {fields: {secretInfo: 0}});
});