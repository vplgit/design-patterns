interface Notifications {
  send(message: string): void;
}

class EmailNotification implements Notifications {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotification implements Notifications {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

class PushNotification implements Notifications {
  send(message: string): void {
    console.log(`Sending Push Notification: ${message}`);
  }
}

// Factory class
class NotificationFactory {
  static createNotification(type: string): Notifications | null {
    switch (type) {
      case "email":
        return new EmailNotification();
      case "sms":
        return new SMSNotification();
      case "push":
        return new PushNotification();
      default:
        return null;
    }
  }
}

const notificationType = "email";
const notification = NotificationFactory.createNotification(notificationType);

if (notification) {
  notification.send("Hello, this is a notification!");
}
