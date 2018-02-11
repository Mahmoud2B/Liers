"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseModel = /** @class */ (function () {
    function BaseModel(rawData) {
        this.setRawData(rawData);
    }
    BaseModel.prototype.setRawData = function (rawData) {
        this.preRawDataTransform(rawData);
        this._rawLoaded = rawData;
        for (var key in rawData) {
            var value = rawData[key];
            if (this.hasOwnProperty(key) && this[key] && !value) {
                continue;
            }
            this[key] = value;
        }
        this.transformDateValues();
        this.postRawDataTransform();
    };
    BaseModel.prototype.transformKey = function (key) {
        key = key.split('_').map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); }).join('');
        return key.charAt(0).toLowerCase() + key.slice(1);
    };
    Object.defineProperty(BaseModel.prototype, "rawLoadedData", {
        get: function () {
            return this._rawLoaded;
        },
        enumerable: true,
        configurable: true
    });
    BaseModel.prototype.preRawDataTransform = function (data) {
    };
    BaseModel.prototype.postRawDataTransform = function () {
    };
    BaseModel.prototype.transformDateValues = function () {
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhc2UtbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFNQTtJQUlFLG1CQUFzQixPQUFlO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVNLDhCQUFVLEdBQWpCLFVBQWtCLE9BQWU7UUFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDcEQsUUFBUSxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQztRQUNELElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFUyxnQ0FBWSxHQUF0QixVQUF1QixHQUFXO1FBQ2hDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxzQkFBVyxvQ0FBYTthQUF4QjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRVMsdUNBQW1CLEdBQTdCLFVBQThCLElBQVk7SUFDMUMsQ0FBQztJQUVTLHdDQUFvQixHQUE5QjtJQUVBLENBQUM7SUFFUyx1Q0FBbUIsR0FBN0I7SUFDQSxDQUFDO0lBRUgsZ0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDO0FBekNxQiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQmFzZU1vZGVsSW50ZXJmYWNlIHtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNb2RlbCBpbXBsZW1lbnRzIEJhc2VNb2RlbEludGVyZmFjZSB7XHJcblxyXG4gIHByb3RlY3RlZCBfcmF3TG9hZGVkO1xyXG5cclxuICBwcm90ZWN0ZWQgY29uc3RydWN0b3IocmF3RGF0YTogT2JqZWN0KSB7XHJcbiAgICB0aGlzLnNldFJhd0RhdGEocmF3RGF0YSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0UmF3RGF0YShyYXdEYXRhOiBPYmplY3QpIHtcclxuICAgIHRoaXMucHJlUmF3RGF0YVRyYW5zZm9ybShyYXdEYXRhKTtcclxuICAgIHRoaXMuX3Jhd0xvYWRlZCA9IHJhd0RhdGE7XHJcbiAgICBmb3IgKGxldCBrZXkgaW4gcmF3RGF0YSkge1xyXG4gICAgICBsZXQgdmFsdWUgPSByYXdEYXRhW2tleV07XHJcbiAgICAgIGlmICh0aGlzLmhhc093blByb3BlcnR5KGtleSkgJiYgdGhpc1trZXldICYmICF2YWx1ZSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy50cmFuc2Zvcm1EYXRlVmFsdWVzKCk7XHJcbiAgICB0aGlzLnBvc3RSYXdEYXRhVHJhbnNmb3JtKCk7XHJcbiAgfVxyXG4gIFxyXG4gIHByb3RlY3RlZCB0cmFuc2Zvcm1LZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgIGtleSA9IGtleS5zcGxpdCgnXycpLm1hcCh3b3JkID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKS5qb2luKCcnKTtcclxuICAgIHJldHVybiBrZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHJhd0xvYWRlZERhdGEoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcmF3TG9hZGVkO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHByZVJhd0RhdGFUcmFuc2Zvcm0oZGF0YTogT2JqZWN0KSB7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcG9zdFJhd0RhdGFUcmFuc2Zvcm0oKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHRyYW5zZm9ybURhdGVWYWx1ZXMoKSB7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaWx0ZXJlZE1vZGVsTGlzdDxUeXBlPiB7XHJcbiAgW2tleTogc3RyaW5nXTogVHlwZVtdO1xyXG59XHJcbiJdfQ==