'use strict';

// vendor modules TODO: (martin) should I move 'vendor' to core module?
import './vendor';

// core modules
import coreModule from './core/core';

// component modules
import employeeModule from './components/employee/employee';
import languageModule from './components/language/language';
import positionModule from './components/position/position';
import roleModule from './components/role/role';
import uiWidgetsModule from './components/ui-widgets/ui-widgets';
import paginationModule from './components/pagination/pagination';

// state modules
import accountModule from './states/account/account';
import customersModule from './states/customers/customers.module';
import dashboardModule from './states/dashboard/dashboard.module';
import documentsModule from './states/documents/documents';
import employeesModule from './states/employees/employees';
import reportsModule from './states/reports/reports.module';
import scheduleModule from './states/schedule/schedule.module';
import settingsModule from './states/settings/settings.module';

let mainModule = angular.module('app', [
    // angular modules
    'ngAnimate',
    'ngMessages',

    // 3rd party modules
    'restangular',
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule',
    'jp.ng-bs-animated-button',

    // core modules
    coreModule.name,

    // component modules
    employeeModule.name,
    languageModule.name,
    positionModule.name,
    roleModule.name,
    uiWidgetsModule.name,
    paginationModule.name,

    // state modules
    accountModule.name,
    customersModule.name,
    dashboardModule.name,
    documentsModule.name,
    employeesModule.name,
    reportsModule.name,
    scheduleModule.name,
    settingsModule.name
]);

export default mainModule;
