UsersForm =new Meteor.Collection('UsersForm');

UsersForm.allow({
	insert: function(userId, doc){
		return userId;
	},
	update: function(userId, doc, fields, modifier){
		return userId;
	},
	remove: function(userId, doc){
		return userId;
	}
})