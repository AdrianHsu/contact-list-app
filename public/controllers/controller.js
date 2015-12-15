var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http',
    function($scope, $http) {

        var refresh = function() {
            $http.get('/contactlist').success(function(response) {
                console.log("[CLIENT] refresh(): RECEIVED DATA REQUESTED");
                $scope.contactlist = response;
                $scope.contact = ""; //clear box
            });
        }
        // INIT
        refresh();

        // STEP1: ADD CONTACT
        // $scope.addContact = function() {
        //     console.log("[CLIENT] addContant(): SEND POST REQUEST TO SERVER SIDE");
        //     console.log($scope.contact);
        //     $http.post('/contactlist', $scope.contact).success(function(response) {
        //         console.log("[CLIENT] addContant(): RECEIVED POST RESPONSE SUCCESSFULLY");
        //         console.log(response);

        //         refresh();
        //     });
        // };

        // STEP2: DELETE CONTACT
        // $scope.remove = function(id) {

        //     $http.delete('/contactlist/' + id).success(function(response) {
        //         console.log("[CLIENT] remove(): SEND DELETE REQUEST TO SERVER SIDE");
        //         console.log("[CLIENT] TARGET CONTACT DATA id: " + id);
        //         refresh();
        //     });
        // };


        // $scope.edit = function(id) {
        //     console.log(id);
        //     $http.get('/contactlist/' + id).success(function(response) {
        //         $scope.contact = response;
        //     });
        // };


        // $scope.update = function(id) {
        //     //put id in input boxes into server console
        //     console.log($scope.contact._id);
        //     $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response) {
        //         refresh();
        //     });
        // };
        // $scope.deselect = function() {
        //     $scope.contact = "";
        // }
    }
]);
