class Person{
    constructor(name){
        this._name = name;
        this._courses = []
    }
    get name(){return this._name}
    // 복제본을 리턴 (slice)
    get courses(){return this._courses.slice()}
    addCourse(aCourse){
        this._courses.push(aCourse)
    }
    removeCourse(aCourse, fnIfAbsent = () =>{throw new RangeError()}){
        const index = this.courses.indexOf(aCourse)
        if (index === -1) fnIfAbsent()
        // splice: 원본 배열 자체를 수정한다.
        else this._courses.splice(index, 1)
    }
}

class Course{
    constructor(name, isAdvanced){
        this._name = name;
        this._isAdvanced = isAdvanced
    }
    get name(){return this._name}
    get isAdvanced(){return this._isAdvanced}
}