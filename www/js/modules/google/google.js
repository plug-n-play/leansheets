import angular from 'angular';

import files from './directives/files';
import profile from './directives/gProfile';
import signIn from './directives/gSignIn';

import g from './factories/g';

import authService from './services/gAuthService';
import driveService from './services/gDriveService';
import scriptService from './services/gScriptService';

export default angular.module('google', [])
    .constant('gApplicationId', '834306803658')
    .constant('gClientId', '834306803658-pbrj1t1lur7eq6nacauqanljjsan0i0n.apps.googleusercontent.com')
    .constant('gClientSecret', 'UfY5f96OwV8eXk2Ma2Px0qMz')
    .constant('gModules', [
        'client'
    ])
    .constant('gLoadApis', [
        'auth2'
    ])
    .constant('gClientLoadApis', {
        'drive' : 'v2'
    })
    .constant('gScopes', [
        'email',
        'profile',
        'https://www.googleapis.com/auth/script.scriptapp',
        'https://www.googleapis.com/auth/script.external_request'
    ])
    .constant('gScripts', {
        LS_DATA_DEV: 'MfAG5em1RAAg8573UF3oAonFIFWf3Dj_9'
    })
    .directive('files', files)
    .directive('gSignIn', signIn)
    .directive('gProfile', profile)
    .factory('g', g)
    .service('gAuthService', authService)
    .service('gDriveService', driveService)
    .service('gScriptService', scriptService);
