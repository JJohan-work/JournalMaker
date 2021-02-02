export function Entry(title,body) {
  this.title = title;
  this.body = body;
}


Entry.prototype.whatever = function() {
  console.log("hello");
};