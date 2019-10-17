/* var stry = document.getElementById("stry");
var strySelect = stry.options[stry.selectedIndex].text; */
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
        contexts: [],
        newReason: '',
        reasons: [],
        selected: 'fullStories',
        options: [
            { text: 'Full Storys', value: 'fullStories' },
            { text: 'Roller', value: 'roles' },
            { text: 'Aktivitet', value: 'activities' },
            { text: 'Sammanhang', value: 'contexts' },
            { text: 'Orsaker', value: 'reasons' }
          ]
    },

    methods: {
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
                document.getElementById("rol").innerHTML = "roller:";
                this.roles.push(this.newRole);
                this.newRole = '';
                
            }
            
            if(!this.newActivity){
                console.log("Aktivitet är tom");
            } else if(this.newActivity){
                document.getElementById("akt").innerHTML = "aktiviteter:";
                this.activities.push(this.newActivity);
                this.newActivity = '';
            }

            if(!this.newContext){
                console.log("Sammanhang är tom");
            } else if(this.newContext){
                document.getElementById("con").innerHTML = "sammanhang:";
                this.contexts.push(this.newContext);
                this.newContext = '';
            }
            
            if(!this.newReason){
                console.log("Orsak är tom");
            } else if(this.newReason){
                document.getElementById("res").innerHTML = "orsaker:";
                this.reasons.push(this.newReason);
                this.newReason = '';
            }
            
            
        },

        showStories(){
            if(this.selected === 'fullStories'){
                console.log("cvdfgsadfgsad")
            }
            /* if(this.selected == 'fullStories'){
                console.log("Story: " + this.selected)
                 this.fullStories.push(
                    "Som en " + this.newRole + 
                    " vill jag " + this.newActivity + 
                    " i " + this.newContext + 
                    " för att " + this.newReason + "."); 
            } else if(this.selected == 'roles'){
                console.log("Roller: " + this.selected)
            } */

            /* if (strySelect = "story"){
                console.log("fulllll")
                console.log(strySelect)
                
            }else if(strySelect = "roller"){
                console.log("errorrr")
            } */
        
        }
    },
})