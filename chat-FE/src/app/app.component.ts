import { Component, OnInit } from "@angular/core";
import { WebsocketService } from "./services/websocket.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  constructor(private socketService: WebsocketService) {}
  chatMessages = [];
  ngOnInit() {
    // Create connection with the socket
    this.socketService.listen("chat-message").subscribe(data => {
      this.chatMessages.push({ type: "text", text: data, user: {name: 'BOT DE HECTOR'} });
    });
  }

  sendMessage(event){
    this.socketService.emit('send-chat-message', event.message);
  }
}
