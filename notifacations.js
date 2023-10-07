console.log(Notification.permission);
// if notifacations is deafault run code to ask for  permission
if(Notification.permission == "default") {
    // ask permission for notifacations
    Notification.requestPermission().then(permission => {
        console.log(Notification);
    });
}
