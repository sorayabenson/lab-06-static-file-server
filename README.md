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
    - write a file
        - outcome: it writes a file with the name of 'ghost.md' and contents of 'oh no!'
        - test
        - code
        - refactor
    - read a file
        - outcome: it reads the 'ghost.md'
        - test
        - code
        - refactor
    - copy a file
        - outcome: it reads 'ghost.md', adds 'boo!' to the beginning of the data, and writes a new file 'ghost-boo.md'
        - test
        - code
        - refactor
    - index.html
        - outcome: it will ultimately 'read ghost-boo.md', if file not found it responds with a not found message.
        - test
        - code
        - refactor