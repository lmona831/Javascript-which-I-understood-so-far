let restaurant = {
    name:'ASB',
    guestCapacity:75,
    guestCount:0, // seats in use
    checkAvailability:function(partySize) {
        //console.log(this);
        let seatsleft = this.guestCapacity - this.guestCount;
        return partySize <= seatsleft;
    },
    seatParty:function(partySize){
        this.guestCount = this.guestCount + partySize;
    },
    removeParty:function(partySize){
        this.guestCount = this.guestCount - partySize
    }
}

//restaurant.checkAvailability(4);

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
//let status = restaurant.checkAvailability(4);
//console.log(status);
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4))






// A method is just a object property whose value is a function.