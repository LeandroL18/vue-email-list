// Attraverso l’apposita API generare 10 indirizzi email e stamparli in pagina all’interno di una lista
// Bonus: Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: []
        }
    },
    methods:{

    },
    mounted(){
        console.log("L'applicazione è caricata!");

        for(let i=0; i <= 9; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((email) => {
                console.log(email.data.response);
                this.emails.push(email.data.response);
                console.log(this.emails);    
            })
        }
    }
}).mount('#app')

