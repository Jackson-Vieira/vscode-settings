[
  {
    "key": "ctrl+shift+a",
    "command": "workbench.action.terminal.focusNext",
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+shift+b",
    "command": "workbench.action.terminal.focusPrevious",
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+shift+j",
    "command": "workbench.action.togglePanel"
  },
  {
    "key": "ctrl+shift+n",
    "command": "workbench.action.terminal.new",
    "when": "terminalFocus"
  },
  {
    "key": "ctrl+shift+w",
    "command": "workbench.action.terminal.kill",
    "when": "terminalFocus"
  },
  // FILE TREE
  {
    "command": "workbench.action.toggleSidebarVisibility",
    "key": "ctrl+e"
  },
  {
    "command": "workbench.files.action.focusFilesExplorer",
    "key": "ctrl+e",
    "when": "editorTextFocus"
  },
  {
    "key": "n",
    "command": "explorer.newFile",
    "when": "filesExplorerFocus && !inputFocus"
  },
  {
    "command": "renameFile",
    "key": "r",
    "when": "filesExplorerFocus && !inputFocus"
  },
  {
    "key": "shift+n",
    "command": "explorer.newFolder",
    "when": "explorerViewletFocus"
  },
  {
    "key": "shift+n",
    "command": "workbench.action.newWindow",
    "when": "!explorerViewletFocus"
  },
  {
    "command": "deleteFile",
    "key": "d",
    "when": "filesExplorerFocus && !inputFocus"
  },
  // EXTRA
  {
    "key": "ctrl+shift+5",
    "command": "editor.emmet.action.matchTag"
  },
  {
    "key": "ctrl+z",
    "command": "workbench.action.toggleZenMode"
  }
]
