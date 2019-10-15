
var app = new Vue({
    el:'#root',
    data: {
        newName: '',
        names: [],
        fullStories: [],
        newRole: '',
        roles: [],
        newActivity: '',
        activities: [],
        newContext: '',
        context: [],
        newReason: '',
        reasons: []
    },

    methods: {
        addName(){
            this.names.push("hello " + this.newName + this.newReason);

            this.newName = '';
        },

        addStory(){
            if(!this.newRole && !this.newActivity && !this.newContext && !this.newReason){
                document.getElementById("error").innerHTML = "fill in everything to get full story";
            } else if(this.newRole && this.newActivity && this.newContext && this.newReason){
                document.getElementById("error").innerHTML = "full story added";
                document.getElementById("full").innerHTML = "Full Story:";

                this.fullStories.push(
                "Som en " + this.newRole + 
                " vill jag " + this.newActivity + 
                " i " + this.newContext + 
                " för att " + this.newReason + ".");

            }

            if (!this.newRole) {
                console.log("Roll är tom")
            }else if(this.newRole){
                document.getElementById("rol").innerHTML = "roll:";
                this.roles.push(this.newRole);
                this.newRole = '';
            }
            
            if(!this.newActivity){
                console.log("Aktivitet är tom");
            } else if(this.newActivity){
                document.getElementById("akt").innerHTML = "aktivitet:";
                this.activities.push(this.newActivity);
                this.newActivity = '';
            }

            if(!this.newContext){
                console.log("Sammanhang är tom");
            } else if(this.newContext){
                document.getElementById("con").innerHTML = "sammanhang:";
                this.context.push(this.newContext);
                this.newContext = '';
            }
            
            if(!this.newReason){
                console.log("Orsak är tom");
            } else if(this.newReason){
                document.getElementById("res").innerHTML = "orsak:";
                this.reasons.push(this.newReason);
                this.newReason = '';
            }
            
            
        }
    },
})