function start() {
  console.log("Request handler 'start' was called.");
  return "hello start";
}

function upload() {
  console.log("request handler 'upload' was called");
  return "hello upload";
}

exports.start = start;
exports.upload = upload;