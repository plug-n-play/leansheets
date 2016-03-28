export default ($stateProvider, $urlRouterProvider) => {
    'ngInject';

    $urlRouterProvider
        .otherwise('/auth');

    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'templates/layouts/_main.html',
            controller: class {

                constructor(layoutService) {
                    'ngInject';

                    layoutService.layout = 'main';

                }

            }
        });

}
