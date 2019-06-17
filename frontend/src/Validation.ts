namespace FlatApp {
    export function validateLatinString(s: string){
        const dict = "qwertyuiopasdfghjklzxcvbnm".split('');
        const arr = s.split('').filter(c=>!dict.includes(c.toLowerCase()));
        return arr.length==0;
    }
}