"use strict";
class EmailNotification {
    send(message) {
        console.log(`Sending Email: ${message}`);
    }
}
class SMSNotification {
    send(message) {
        console.log(`Sending SMS: ${message}`);
    }
}
class PushNotification {
    send(message) {
        console.log(`Sending Push Notification: ${message}`);
    }
}
// Factory class
class NotificationFactory {
    static createNotification(type) {
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
