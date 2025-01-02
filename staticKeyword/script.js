//static = a keyword that defines properties or methods that belong
///         to a class itself rather than the objects created 
//          from that class (calss owns anything  static , not the objects)

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return  radius *2 ;
    }
    static gitCircumference(radius){
        return 2*this.PI *radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10))
console.log(MathUtil.gitCircumference(10))