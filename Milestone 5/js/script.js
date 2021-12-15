// Milestone 5
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti.

Vue.config.devtools = true;
const app = new Vue({
    el: '#root',
    data: {
        currentActiveContact: 0,
        sentMessage: '',
        searchingContact: '',
        currentActiveMessage: 0,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        info: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        info: false,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        info: false,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        info: false,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        info: false,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        info: false,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        info: false,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        info: false,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        info: false,
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        info: false,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        info: false
                    }
                ],
            },
        ],
    },
    methods: {
        chatChanger: function(index){
            this.currentActiveContact = index;
        },
        pushMessage: function(index){
            if(this.sentMessage.trim().length > 0){
                this.contacts[this.currentActiveContact].messages.push({
                    date: dayjs().format('DD/MM/YYYY' + ' ' + 'HH:mm:ss'),
                    text: this.sentMessage,
                    status: 'sent',
                    info: false
                });
                this.sentMessage = '';
                setTimeout(this.replyMessage,2000)
            }
        },
        replyMessage: function(){
            this.contacts[this.currentActiveContact].messages.push({
                date: dayjs().format('DD/MM/YYYY' + ' ' + 'HH:mm:ss'),
                text: 'ok',
                status: 'received',
                info: false
            });
        },
        textFilter: function(){
            this.contacts.forEach((element) => {
                if(element.name.toLowerCase().includes(this.searchingContact.toLowerCase()) ){
                    element.visible = true;
                } else {
                    element.visible = false;
                }
            });
        },
        openOptionFunction: function(index){
            if (this.contacts[this.currentActiveContact].messages[index].info === false){
                this.contacts[this.currentActiveContact].messages[index].info = !this.contacts[this.currentActiveContact].messages[index].info;
                this.currentActiveMessage = index;
            } else if(this.contacts[this.currentActiveContact].messages[index].info === true){
                this.contacts[this.currentActiveContact].messages[index].info = !this.contacts[this.currentActiveContact].messages[index].info;
            }
        },
        deleteMessage: function(index){
            this.contacts[this.currentActiveContact].messages.splice(index, 1);
            this.contacts[this.currentActiveContact].messages[index].info = !this.contacts[this.currentActiveContact].messages[index].info;
        }    
    }
});