"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var ModelFactories = /** @class */ (function () {
    function ModelFactories() {
    }
    //instance factories
    ModelFactories.user = function (data) {
        return data instanceof user_1.User ? data : new user_1.User(data);
    };
    //list factories
    ModelFactories.users = function (data) {
        return data.map(function (data) { return ModelFactories.user(data); });
    };
    return ModelFactories;
}());
exports.ModelFactories = ModelFactories;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtZmFjdG9yaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kZWwtZmFjdG9yaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTZDO0FBQzdDO0lBQUE7SUFhQSxDQUFDO0lBVkMsb0JBQW9CO0lBRWIsbUJBQUksR0FBWCxVQUFZLElBQWdDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLFlBQVksV0FBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDRCxnQkFBZ0I7SUFFVCxvQkFBSyxHQUFaLFVBQWEsSUFBZ0M7UUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXIsIFVzZXJJbnRlcmZhY2UgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmV4cG9ydCBjbGFzcyBNb2RlbEZhY3RvcmllcyB7XHJcblxyXG5cclxuICAvL2luc3RhbmNlIGZhY3Rvcmllc1xyXG5cclxuICBzdGF0aWMgdXNlcihkYXRhOiBVc2VySW50ZXJmYWNlIHwgVXNlciB8IGFueSk6IFVzZXIge1xyXG4gICAgcmV0dXJuIGRhdGEgaW5zdGFuY2VvZiBVc2VyID8gZGF0YSA6IG5ldyBVc2VyKGRhdGEpO1xyXG4gIH1cclxuICAvL2xpc3QgZmFjdG9yaWVzXHJcblxyXG4gIHN0YXRpYyB1c2VycyhkYXRhOiBBcnJheTxVc2VySW50ZXJmYWNlIHwgYW55Pik6IFVzZXJbXSB7XHJcbiAgICByZXR1cm4gZGF0YS5tYXAoZGF0YSA9PiBNb2RlbEZhY3Rvcmllcy51c2VyKGRhdGEpKTtcclxuICB9XHJcbn1cclxuIl19