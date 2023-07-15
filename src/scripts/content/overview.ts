import { DOMHelpers as D } from "~/src/lib/DOMHelpers.js"
import { replaceUTCWithLocal } from "~/src/lib/Date.js"

window.document
    .querySelectorAll('div[class="planetConstructionProgress"] span')
    .forEach(function (e) {
        replaceUTCWithLocal(D.asHTMLElement(e))
    })
