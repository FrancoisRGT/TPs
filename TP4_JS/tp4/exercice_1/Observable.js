class Events{

    constructor(eventname, callback){
        this.eventname = eventname;
        this.callback  = callback;
    }

};

class Observable{

    constructor(){
        this.events = [];
    }


    on(eventname, callback){
        this.events.push(new Events(eventname, callback));
    }

    off(eventname, callback){

        let newEvents = this.events.filter(event => event.eventname != eventname);
        this.events = newEvents;
    }

    trigger(eventname, parameter1, ...parameters){
        let func = this.events.filter(event => event.eventname == eventname)[0];
        func.callback(parameter1, ...parameters);
    }

};