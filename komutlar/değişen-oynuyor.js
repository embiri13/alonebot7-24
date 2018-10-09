var oyun = [
        "client.user.setGame(prefix + "yardım|Bot Artık Hostinge Bağlı");",
        "client.user.setGame("!yardım | " + client.guilds.size + " Sunucu " + client.users.size + " Kullanıcı ", );",
        "client.user.setGame(prefix + "yardım|"
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], "https://www.twitch.tv/croxydad");
        }, 2 * 2500);