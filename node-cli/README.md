File Stats

When the script is run:

Ask the user for a filename.
Take the filename and get the stats on it.
Parse the stats and print to the console.
Stats to print:

File size
File name
Write File Stats

When the script is run:

Ask the user for a filename.
Take the filename and get the stats on it.
Ask the user for an output filename to save the stats to.
Parse the stats and write it out to the output file.
Stats to store:

File size
File name
File executable status
Last time file was modified
(Stretch) Directory Stats

When the script is run:

Ask the user for a directory path.
Take the directory path and get stats on it.
Get stats on each file in the directory.
Ask the user for an output filename.
Parse out all the data and store it to the output file.
Stats to store:

Total size of all files combined
How many files are in directory
How many files are executable in the directory
The biggest file size in the directory
Most recent time a file was changed in the directory
Hints and Tips

Use Node's readline to get input from the user.
Use Node's fs.fstat to get information about a file.