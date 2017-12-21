var eventBind = function (_this) {
    var eventData = {}, el = _this._el, vague = 5,
     feedbackClass = _this._feedbackClass;

    _this.startFunc = function (e) {
        var event = e.changedTouches ? e.changedTouches[0] : e,
            identifier = eventData[event.identifier] = {};
        identifier.startY = event.pageY;
        identifier.startX = event.pageX;
        identifier.target = el;
        if (identifier.target) {
            identifier.target.classList.add(feedbackClass)
        }
    };

    el.addEventListener('touchstart', _this.startFunc);

    _this.moveFunc = function (e) {
        var event = e.changedTouches ? e.changedTouches[0] : e,
            identifier = eventData[event.identifier];
        if (event.target && Math.abs(identifier.startY - event.pageY) > vague) {
            identifier.target.classList.remove(feedbackClass)
        }
    };

    el.addEventListener('touchmove', _this.moveFunc);

    _this.cancelFunc = function (e) {
        var event = e.changedTouches ? e.changedTouches[0] : e,
            identifier = eventData[event.identifier];
        if (identifier.target) {
            identifier.target.classList.remove(feedbackClass)
        }
        delete eventData[event.identifier];
    };

    el.addEventListener('touchcancel', _this.cancelFunc);

    el.addEventListener('touchend', _this.cancelFunc);
};

var TouchFeedback = function (el, option) {
    this._el = typeof el == 'string' ? document.querySelector(selector) : el;
    option = option || {};
    this._feedbackClass = option.feedbackClass || 'feedback';
    eventBind(this);
};

TouchFeedback.prototype.destory = function () {
    var _this = this;
    _this._el.removeEventListener('touchstart', _this.startFunc);
    _this._el.removeEventListener('touchmove', _this.moveFunc);
    _this._el.removeEventListener('touchcancel', _this.cancelFunc);
    _this._el.removeEventListener('touchend', _this.cancelFunc);
};

export default TouchFeedback