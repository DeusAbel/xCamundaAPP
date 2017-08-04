var app = angular.module('pinstanslistService', []);

app.factory('pinstanslistRequest', function ($http) {
        var path = "http://localhost:8080/xCamundaAPP/pinstanslist/";

        var myHeaders = {
            'accept': 'application/json',
            'accept-encoding': 'gzip, deflate',
            'accept-language': 'en-US,en;q=0.8',
            'content-type': 'application/json',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
        }
        

        return {            
            getAll: function () {
                global = $http.get(path + 'get/' + usuario.id);
                return global;
            },
            insert: function (pinstan) {
                var config = { headers: myHeaders };

                global = $http.post(path + 'post', pinstan, config);
                return global;
            }
        }
    });