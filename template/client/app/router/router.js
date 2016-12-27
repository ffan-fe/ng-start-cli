import ffanRouter from './router.service';
import uiRouter from 'angular-ui-router';
import routeConfig from './routerConfig';
import 'oclazyload';

export default angular.module('app.router', [
    uiRouter,
    'oc.lazyLoad'
])
    .config(($stateProvider) => {
        /**
         *  统一路由配置 
         */
        if (!routeConfig || routeConfig.length == 0) {
            throw 'No router found , please set router'
        }
        routeConfig.forEach((route) => {
            $stateProvider.state(route.name, {
                url: route.url,
                template: route.template,
                resolvePolicy: {
                    module: { when: 'EAGER' }
                },
                resolve: {
                    module: ($q, $ocLazyLoad) => {
                        return $q((resolve) => {

                            route.lazyload(function(module){
                                $ocLazyLoad.load({ name: module.default.name });
                                resolve(module.controller);
                            })
                        });
                    }
                }
            });
        });
    })
    .service({
        ffanRouter
    })