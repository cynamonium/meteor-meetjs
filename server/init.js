Meteor.publish("Doges", function () {
  return Doges.find({}, {fields: {secretInfo: 0}, limit: 10, sort:{createdAt:-1}});
});

Doges.allow({
	insert: function(){return true;}
}
);