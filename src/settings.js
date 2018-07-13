import {
  CLASS_BUTTON,
  CLASS_CONTENT,
  CLASS_FOOTNOTE,
  CLASS_TOOLTIP,
  CLASS_WRAPPER,
  FOOTNOTE_CONTENT,
  FOOTNOTE_ID,
  FOOTNOTE_NUMBER
} from './adapter/constants'

/**
 * Default settings.
 *
 * @type {Object}
 */
const DEFAULTS = {
  activateCallback: null,
  activateDelay: 100,
  activateOnHover: false,
  allowDuplicates: true,
  allowMultiple: false,
  anchorParentSelector: 'sup',
  anchorPattern: /(fn|footnote|note)[:\-_\d]/gi,
  dismissDelay: 100,
  dismissOnUnhover: false,
  footnoteParentClass: 'footnote',
  footnoteSelector: 'li',
  hoverDelay: 250,
  numberResetSelector: null,
  scope: null,
  contentTemplate: `<aside class="${CLASS_FOOTNOTE} is-positioned-bottom" id="fncontent:<%= id %>" ${FOOTNOTE_ID}="<%= id %>" ${FOOTNOTE_NUMBER}="<%= number %>" alt="Footnote <%= number %>"><div class="${CLASS_WRAPPER}"><div class="${CLASS_CONTENT}" tabindex="0"><%= content %></div></div><div class="${CLASS_TOOLTIP}"></div></aside>`,
  buttonTemplate: `<span class="littlefoot-footnote__container"><button class="${CLASS_BUTTON} littlefoot-footnote__button__ellipsis" id="<%= reference %>" ${FOOTNOTE_CONTENT}="<%= content %>" ${FOOTNOTE_ID}="<%= id %>" ${FOOTNOTE_NUMBER}="<%= number %>" alt="See Footnote <%= number %>" aria-controls="fncontent:<%= id %>" aria-expanded="false" aria-label="Footnote <%= number %>" rel="footnote"><svg viewbox="0 0 31 6" preserveAspectRatio="xMidYMid"><circle r="3" cx="3" cy="3" fill="white"></circle><circle r="3" cx="15" cy="3" fill="white"></circle><circle r="3" cx="27" cy="3" fill="white"></circle></svg></button></span>`
}

export function createSettings (options) {
  return Object.assign({},
    DEFAULTS,
    options)
}
