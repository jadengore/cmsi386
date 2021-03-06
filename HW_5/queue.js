/*
 * A simple queue data type. Queues are entirely mutable.  The
 * add and remove methods are simple conveniences, but clients
 * are free to mess with the queue in any way they like.
 */

Queue = {};
Queue.prototype = {
    add: function (x) {this.data.push(x);},
    remove: function () {return this.data.shift();}
};    
Queue.create = function () {
    var q = Object.create(Queue.prototype);
    q.data = [];
    return q;
};
module.exports = Queue;