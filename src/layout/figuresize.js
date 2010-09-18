/**
 * @fileoverview HTML and other information about a figure's content payload
 */

goog.provide('treesaver.layout.FigureSize');

goog.require('treesaver.dom');

/**
 * HTML and other information about a figure content payload
 * @param {string} html Content payload
 * @param {number|string} minW
 * @param {number|string} minH
 * @constructor
 */
treesaver.layout.FigureSize = function(html, minW, minH) {
  /**
   * The full HTML content for this payload.
   *
   * @type {string}
   */
  this.html = html;

  // TODO: Use outerHTML from the node eventually in order to sanitize bad
  // HTML?

  // Provide a rough measure the element so we know if we can fit within
  // containers
  /**
   * @type {number}
   */
  this.minW = parseInt(minW || 0, 10);

  /**
   * @type {number}
   */
  this.minH = parseInt(minH || 0, 10);
}

/**
 * Apply the figure size to the element
 * @param {!Element} container
 */
treesaver.layout.FigureSize.prototype.applySize = function(container, name) {
  treesaver.dom.addClass(container, name);
  // Will we ever do something more complex here?
  container.innerHTML = this.html;
};

/**
 * Back out an applied figure size after a failure
 * @param {!Element} container
 */
treesaver.layout.FigureSize.prototype.revertSize = function(container, name) {
  // Remove class
  treesaver.dom.removeClass(container, name);
  // Remove content
  treesaver.dom.clearChildren(container);
};


if (goog.DEBUG) {
  // Expose for testing
  treesaver.layout.FigureSize.prototype.toString = function() {
    return "[FigureSize: " + this.index + "/" + this.html + "]";
  };
}