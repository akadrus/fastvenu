"use strict";

import Vue from "vue";
import App from "@/App.vue";
import store from "@/store";

Vue.config.productionTip = false;

class FastVenuCreator {
  constructor(onKey = "k") {
    this.onKey = onKey;
    this.container = null;
    this.created = false;
    this.urlList = [];
    this.menuId = null;
    this.contentSelector = null;
    this.hrefSelector = null;
    this.textSelector = null;
    document.addEventListener("keydown", function(event) {
      if (
        event.ctrlKey &&
        event.altKey &&
        event.key === window.fastVenuInstance.onKey
      ) {
        window.fastVenuInstance.toggle();
      }
    });
  }

  setUpOnElement(element, hrefSelector = "a", textSelector = "") {
    if (element == null) {
      return 0;
    }

    this.textSelector = textSelector;
    this.hrefSelector = hrefSelector;

    this.getUrlsFromDom(element);
  }

  setUpOnUrls(urlList) {
    if (!Array.isArray(urlList) || urlList.length == 0) {
      return 0;
    }
    this.urlList = urlList;
  }

  toggle() {
    if (!this.created) {
      this.created = true;
      this.createFastVenu();
      if (this.container.style.display != "block") {
        this.container.style.display = "block";
      }
    }
  }

  getUrlsFromDom(domObject) {
    let aTags = domObject.querySelectorAll(this.hrefSelector);
    for (let i = 0; i < aTags.length; i++) {
      let obj = aTags[i];
      if (obj.href == "") {
        continue;
      }

      this.urlList.push({
        name: this.getOptionText(obj),
        url: obj.href
      });
    }
  }

  getOptionText(obj) {
    if (this.textSelector) {
      let text =
        obj.querySelector(this.textSelector) != null
          ? obj.querySelector(this.textSelector).innerHTML
          : obj.innerHTML;
      return this.stripHtmlTags(text);
    }
    return this.stripHtmlTags(obj.innerHTML);
  }

  createFastVenu(containerId = "fastVenuContainer", rootId = "fastVenuRoot") {
    let fastVenuContainer = document.createElement("div");
    fastVenuContainer.id = containerId;
    fastVenuContainer.style.display = "none";
    document.body.appendChild(fastVenuContainer);

    this.container = fastVenuContainer;

    let rootElement = document.createElement("div");
    rootElement.id = rootId;
    this.rootId = rootId;
    this.container.appendChild(rootElement);
    this.initVue();
  }

  stripHtmlTags(stringWithHtml) {
    return stringWithHtml.replace(/(<([^>]+)>)/gi, "");
  }

  initVue() {
    let urlList = this.urlList;
    let containerId = this.container.id;
    let onKey = this.onKey;
    let rootId = this.rootId;
    new Vue({
      store,
      data: function() {
        return {
          urlList: urlList,
          containerId: containerId,
          actionKey: onKey
        };
      },
      render: h => h(App)
    }).$mount(`#${rootId}`);
  }
}

export { FastVenuCreator };
