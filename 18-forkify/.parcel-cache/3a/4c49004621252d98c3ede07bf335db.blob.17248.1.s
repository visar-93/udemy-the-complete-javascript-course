var _modelJs = require('./model.js');
var _viewsRecipeViewJs = require('./views/recipeView.js');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _viewsRecipeViewJsDefault = _parcelHelpers.interopDefault(_viewsRecipeViewJs);
var _viewsSearchViewJs = require('./views/searchView.js');
var _viewsSearchViewJsDefault = _parcelHelpers.interopDefault(_viewsSearchViewJs);
var _viewsResultsViewJs = require('./views/resultsView.js');
var _viewsResultsViewJsDefault = _parcelHelpers.interopDefault(_viewsResultsViewJs);
var _viewsPaginationViewJs = require('./views/paginationView.js');
var _viewsPaginationViewJsDefault = _parcelHelpers.interopDefault(_viewsPaginationViewJs);
require('assert-plus');
require('core-js/stable');
require('regenerator-runtime/runtime');
require('regenerator-runtime');
// if(module.hot) {
// module.hot.accept();
// };
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    _viewsRecipeViewJsDefault.default.renderSpinner();
    // 1) Loading recipe
    await _modelJs.loadRecipe(id);
    // 2) Rendering recipe
    _viewsRecipeViewJsDefault.default.render(_modelJs.state.recipe);
  } catch (err) {
    _viewsRecipeViewJsDefault.default.renderError();
  }
};
const constrollSearchResults = async function () {
  try {
    _viewsResultsViewJsDefault.default.renderSpinner();
    // 1) Get search query
    const query = _viewsSearchViewJsDefault.default.getQuery();
    if (!query) return;
    // 2) Load search results
    await _modelJs.loadSearchResults(query);
    // 3) Render results
    // resulstView.render(model.state.search.results);
    _viewsResultsViewJsDefault.default.render(_modelJs.getSearchResultsPage());
    // 4) Render initial pagination
    _viewsPaginationViewJsDefault.default.render(_modelJs.state.search);
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = function (goToPage) {
  // 1) Render new results
  // resulstView.render(model.state.search.results);
  _viewsResultsViewJsDefault.default.render(_modelJs.getSearchResultsPage(goToPage));
  // 2) Render new pagination buttons
  _viewsPaginationViewJsDefault.default.render(_modelJs.state.search);
};
const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  _modelJs.updateServings(newServings);
  // Update the recipe view
  _viewsRecipeViewJsDefault.default.render(_modelJs.state.recipe);
};
const init = function () {
  _viewsRecipeViewJsDefault.default.addHandlerRender(controlRecipes);
  _viewsRecipeViewJsDefault.default.addHandlerUpdateServings(controlServings);
  _viewsSearchViewJsDefault.default.addHandlerSearch(constrollSearchResults);
  _viewsPaginationViewJsDefault.default.addHandlerClick(controlPagination);
};
init();
