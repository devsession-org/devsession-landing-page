<h1> Share Your Terminal</h1>

As developers we often find ourselves in need of sharing a terminal session with our teammates. Whether in order to ask for a quick hand with a task or to show the current state of affairs in our environment.

While we could do this through screen sharing applications, sharing our terminal session itself would allow a much easier and native access to our environment.

Devsession allows you to receive a unique URL (eg. `https://my.devsession.is/session-name-here`) which you could provide your teammates. With this URL, they could join your session through their terminal or even through their browser. After being granted permission, both of you would see the same screen and have different cursors, similar to sharing a document with Google docs. This will even allow you to work on different tasks in the same session, pausing every now and then to check out what the other person is doing in real time to make sure you're not stepping on each other's toes.

## How does this work?

Devsession was created by the team behind [Zellij](https://www.zellij.dev), and uses it as its client. While Zellij itself supports multi-user sessions, one would have to either be connected to the same server or configure their own port-forwarding and NAT traversal solutions in order to make their session accessible to the outside world.

The Devsession terminal sharing is provided as a service to the Zellij community, allowing free sharing and collaboration of Zellij sessions to those who choose to use it.

## Technical details

{% image "./src/assets/images/devsession-zellij-diagram.png", "DevSession Logo", "(min-width: 30em) 50vw, 100vw" %}

While other terminal session sharing solutions exist, one of the things that make Devsession stand out is its ability to render more than one cursor on the same screen. This is possible because Zellij is built in a client/server model, similar to how a web page works. The server holds the state of the terminal session and runs on the user's machine, and supports connections from local clients through an IPC bus or remote clients through http.

The server keeps track of the focused pane or tab of each user, and is able to indicate this through the textual UI to the other users:
**TODO: screenshot**

The different cursors are drawn as part of the UI on top of each terminal pane.

The web clients work by using the excellent [xterm.js](https://github.com/xtermjs/xterm.js) library in the browser. Through a bi-directional websocket connection, the browser sends user input to the webserver run by the relevant Zellij instance and receives and interprets the output sent by it in return. Devsession provides a translation layer between the two, keeping an open connection to the Zellij server on the one hand and the web/ipc client on the other.
