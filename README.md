# Linux Command List

> Useful Linux commands for everyday use!

## Description

This repository contains the code for the Website https://linux-command-list.com  
The Website provides useful linux commands, their description and usage.  
You can search for commands and filter them.

It's very simple to add a new command to the Website, so everyone with a bit of experience with git can do it.  
You can even add a command over GitHub's web editor.  
See more in the [`How to add a command`](#How_to_add_a_command) section.

## How to add a command

File which stores the commands: [`commands.json`](https://github.com/linux-command-list/linux-command-list/blob/master/commands.json)  

Direct link to the GitHub web editor: [Edit `commands.json`](https://github.com/linux-command-list/linux-command-list/edit/master/commands.json)

### Adding a command

Adding a command is as simple as copying the last command at the end of the file and replacing it with the new commands information.

```diff
  {
    ...
  },
  {
    "cmd": "last command",
    "title": "Title of the last command",
    "description": "Description of the last command",
    "usage": "Usage of the last command",
    "keywords": ["keywords", "of", "the", "last", "command"]
-  }
+  },
+  {
+    "cmd": "new command",
+    "title": "Title of the new command",
+    "description": "Description of the new command",
+    "usage": "Usage of the new command",
+    "keywords": ["keywords", "of", "the", "new", "command"]
+  }
```

Or if you like to copy an empty template:

```json
,
  {
    "cmd": "",
    "title": "",
    "description": "",
    "usage": "",
    "keywords": [""]
  }
```
