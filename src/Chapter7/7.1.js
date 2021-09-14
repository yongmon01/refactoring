class Organization{
    constructor(data){
        this._name = data.name
        this._country = data.country
    }
    get name(){return this._data.name}
    set name(aString){this._data.name = aString}
    get country(){return this._data.country}
    set country(aCountryCode){this._data.country = aCountryCode}
}

const org = new Organization({name:'ackme', country:'GB'})