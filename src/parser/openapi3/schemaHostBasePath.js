'use strict'

const _ = require('lodash');

module.exports = function() {
  
  return function get(){
	if (!global.definition.servers || !_.isArray(global.definition.servers) || !global.definition.servers[0] || !global.definition.servers[0].url || !_.isString(global.definition.servers[0].url)){
		require('../../utils/error.js')('servers is required')
	}
    const all = global.definition.servers[0].url
    const allArray = all.split( '/' )
    const protocol = allArray[0]
    if (protocol !== 'http:' && protocol !== 'https:') {
        require('../../utils/error.js')('servers.url should be http or https')
    }
    const domain = allArray[2]
    const host = protocol + '//' + domain
	return {
		host: host,
		basePath: all.replace(host, '')
	};
  };

}()