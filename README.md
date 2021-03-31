# lab-06-static-file-server

"Create a node server that serves files from a public directory.

If a user hits your server at http://localhost:7890/index.html your server should go into the public directory and find an index.html file, read it, and send the contents as a response. If no file is found respond with a Not Found message."

## work plan:
- solution: 
    Make a server that writes a file, reads the file, and displays the contents of the file to the user.

- breakdown:
    - build the file tree
        - test folder
        - public folder
            - index.html
        - server.js
            -7890
    - read a file
        - outcome: it reads the 'index.html'
        - test
            - read
            - error
        - code
        - refactor
