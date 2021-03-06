import rolesEN from './fixtures/roles_en.json!json';
import rolesSK from './fixtures/roles_sk.json!json';

function roleResourceMock($httpBackend) {
    'use strict';

    $httpBackend.whenGET(/\/roles\?lang*/)
        .respond( (method, url) => {
            console.log('GET',url);
            if(url.includes('lang=en')) {
                return [200, rolesEN];
            } else if(url.contains('lang=sk'))  {
                return [200, rolesSK];
            }
        });
}
roleResourceMock.$inject = ['$httpBackend'];

export default roleResourceMock;
