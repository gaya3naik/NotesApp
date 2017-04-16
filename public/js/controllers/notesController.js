angular.module('notesController', [])
	.controller('mainController', ['$scope','$http','notes', function($scope, $http, Notes) {
		$scope.formData = {};
		$scope.loading = true;
		/*
		 *  Get all existing notes by default when the initial page is loaded
		 */
		Notes.get()
			.success(function(data) {
				$scope.notes = data;
				$scope.loading = false;
			});
		/*
		 * Create notes
		 */
		$scope.createNote = function() {
			if ($scope.formData.text != undefined) {
				$scope.loading = true;
				Notes.create($scope.formData)
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {};
						$scope.notes = data;
					});
			}
		};
		/*
		 * Delete notes
		 */
		$scope.deleteNote = function(id) {
			$scope.loading = true;
			Notes.delete(id)
				.success(function(data) {
					$scope.loading = false;
					$scope.notes = data;
				});
		};
}]);