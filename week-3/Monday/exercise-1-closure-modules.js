
function StringFormatter(){
    function capitalizeFirst(str){
        const str1 = str.toLowerCase(); 
        return str.charAt(0).toUpperCase() + str1.slice(1);
    }
    function toSkewerCase(str){
        str = str.replace(/\s+/g, '-');
        return str
    }

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()

 //should return Dorothy
 //should return blue-box
console.log(formatter.capitalizeFirst("dorothy"))
console.log(formatter.toSkewerCase("blue box"))