
const getJsonIndent = require('./libs/get-json-indent');

module.exports = createNpmPackageJson;

function createNpmPackageJson(packageContentAsString) {

	if (packageContentAsString) {

		var packageIndent = getJsonIndent(packageContentAsString) || 4;
		var packageContent = JSON.parse(packageContentAsString);

		packageContent.devDependencies = {};
		packageContent.peerDependencies = packageContent.dependencies;
		packageContent.dependencies = {};
		packageContent.scripts = {};
		packageContent.private = false;

		if (packageContent.directories && packageContent.directories.npmDist) {
			delete packageContent.directories.npmDist;
		}

		return JSON.stringify(packageContent,null,packageIndent);
	}
}