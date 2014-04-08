Meteor.publish("Doges", function () {
  return Doges.find({}, {fields: {secretInfo: 0}});
});

Doges.allow({
	insert: function(){return true;}
}
);