var fs = require('fs');

fs.readFile('TestFile.txt', function (err, data) {
    if (err) throw err;

    console.log(data.toString());

    // console.log(data.toJSON());
    // console.log(JSON.stringify(data));

    console.log(data.toLocaleString("utf-8"));

});

// appendFile
fs.appendFile('test2.txt', 'Hello World wwwww5555!', function (err) {
    if (err)
        console.log(err);
    else
        console.log('appendFile operation complete.');
});


fs.open('TestFile.txt', 'r', function (err, fd) {

    if (err) {
        return console.error(err);
    }

    var buffr = new Buffer(1024);

    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytes) {

        if (err) throw err;

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log(buffr.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd, function (err) {
            if (err) throw err;
        });
    });
});


// delete file
fs.unlink('test.txt', function () {
    console.log('delete operation complete.');
});