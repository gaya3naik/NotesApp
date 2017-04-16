angular.module('notesService', [])
	.factory('notes', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/notes');
			},
			create : function(note) {
				return $http.post('/api/notes', note);
			},
			delete : function(noteId) {
				return $http.delete('/api/notes/' + noteId);
			}
		}
	}]);