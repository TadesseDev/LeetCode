/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map={'IV': '4', 'IX': "9", 'XL': "40", 'XC': "90", 'CD': "400", 'CM': "900",
            'I': '1','V': '5','X': '10','L': '50','C': '100','D': '500','M': '1000'}
    function convert(r){
        if(!r.length)
            return 0;
        res=0;
        if(r.length>1&&map[r.substring(0,2)]){
            res+=Number(map[r.substring(0,2)]);
            r=r.substring(2)
        }
        else{
            res+=Number(map[r.substring(0,1)]);
            r=r.substring(1)
        }
        console.log(res)
        return res+=Number(convert(r));
    }
    return convert(s)
};