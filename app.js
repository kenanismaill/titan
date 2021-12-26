new Vue({
    el: "#app",
    data: {
        player: 100,
        canavar: 100,
        game_is_started: false,
        logs: [],
        random_key: Math.ceil(Math.random() * 10),
        random_key2: Math.ceil(Math.random() * 15),
    },
    methods: {
        start_game: function () {
            this.game_is_started = true;
        },
        attack: function () {
            this.canavar -= this.random_key ;
            this.canavar_attack();
            this.push_to_logs({turn:"p", text:"player attack is ("+this.random_key+")"});
        },
        special_attack: function () {
            this.canavar -= this.random_key2;
            this.canavar_attack();
            this.push_to_logs({turn:"p", text:"player attack is ("+this.random_key2+")"});

        },
        heal_up: function () {
            this.player += this.random_key;
            this.push_to_logs({turn:"p", text:"player heal value is ("+this.random_key+")"});

        },
        give_up: function () {
            if (confirm("you defeat the game would you start again ?")){
                this.player = 100;
                this.canavar = 100;
                this.logs= [];
            }
        },
        canavar_attack: function () {
            this.player -= this.random_key;
            this.push_to_logs({turn:"c", text:"canavar attack is ("+this.random_key+")"});

        },
        push_to_logs: function (log) {
            this.logs.push(log);
        }

    },

    watch: {
        player: function (value) {
            if (value <= 0) {
                this.player = 0;
                if (confirm("you defeat the game would you start again ?")){
                    this.player = 100;
                    this.canavar = 100;
                    this.logs= [];
                }
            } else if (value >= 100) {
                this.player = 100;
            }
        },

        canavar: function (value) {
            if (value <= 0) {
                this.canavar = 0;
                if (confirm("you win the game would you start again ?")){
                    this.player = 100;
                    this.canavar = 100;
                    this.logs= [];
                }
            }
        }
    }
})