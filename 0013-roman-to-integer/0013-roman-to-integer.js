/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map={'IV': '4', 'IX': "9", 'XL': "40", 'XC': "90", 'CD': "400", 'CM': "900",
            'I': '1','V': '5','X': '10','L': '50','C': '100','D': '500','M': '1000'}
        let number=0;
    while(s.length>0){
        if(map[s.substring(0,2)]){
            number+=Number(map[s.substring(0,2)])
            s=s.substring(2)
        }
        else{
            number+=Number(map[s.substring(0,1)])
            s=s.substring(1)
        }   
    }
    return number;
}
   